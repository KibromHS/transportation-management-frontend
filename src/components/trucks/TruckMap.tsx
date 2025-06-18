import React, { useState, useCallback, useRef, useEffect } from "react";
import { MapPin } from "lucide-react";
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";

// --- Google Maps setup ---
const libraries: ("places" | "drawing" | "geometry")[] = ["places", "geometry"];
const containerStyle = { width: "100%", height: "100%" };

// --- Interfaces ---
export interface TruckData {
  id: string;
  license_plate: string;
  status: "available" | "busy" | "not_available" | "offline";
  latitude: number;
  longitude: number;
  driver: { name: string; id: number } | null;
  address: string;
  timestamps: string;
  type?: string;
}

interface TruckMapProps {
  trucks: any[];
  onViewTruckDetails: (truck: any) => void;
}

// --- TruckMap Component ---
const TruckMap: React.FC<TruckMapProps> = ({ trucks, onViewTruckDetails }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY as string,
    libraries,
  });

  const mapRef = useRef<google.maps.Map | null>(null);
  const onLoad = useCallback(
    (map: google.maps.Map) => {
      mapRef.current = map;

      // Fit map to markers when loaded
      if (trucks.length > 0) {
        const bounds = new google.maps.LatLngBounds();
        trucks.forEach((truck) => {
          if (
            isValidCoordinate(truck.latitude) &&
            isValidCoordinate(truck.longitude)
          ) {
            bounds.extend({
              lat: Number(truck.latitude),
              lng: Number(truck.longitude),
            });
          }
        });
        map.fitBounds(bounds);
      }
    },
    [trucks]
  );

  const onUnmount = useCallback(() => (mapRef.current = null), []);

  const [selectedTruck, setSelectedTruck] = useState<TruckData | null>(null);
  const defaultCenter = { lat: 38.9072, lng: -77.0369 };

  const isValidCoordinate = (coord: number | undefined): boolean =>
    typeof coord === "number" && isFinite(coord);

  const getMapCenter = useCallback(() => {
    const validTrucks = trucks.filter(
      (truck) =>
        isValidCoordinate(truck.latitude) && isValidCoordinate(truck.longitude)
    );

    if (validTrucks.length === 0) return defaultCenter;

    // Calculate the average of all truck coordinates to center the map
    const sumLat = validTrucks.reduce(
      (sum, truck) => sum + Number(truck.latitude),
      0
    );
    const sumLng = validTrucks.reduce(
      (sum, truck) => sum + Number(truck.longitude),
      0
    );

    return {
      lat: sumLat / validTrucks.length,
      lng: sumLng / validTrucks.length,
    };
  }, [trucks]);

  const [mapCenter, setMapCenter] = useState(getMapCenter());
  const zoom = 3;

  useEffect(() => {
    setMapCenter(getMapCenter());

    // Update bounds when trucks change
    if (isLoaded && mapRef.current && trucks.length > 0) {
      const bounds = new google.maps.LatLngBounds();
      let hasValidCoordinates = false;

      trucks.forEach((truck) => {
        if (
          isValidCoordinate(truck.latitude) &&
          isValidCoordinate(truck.longitude)
        ) {
          bounds.extend({
            lat: Number(truck.latitude),
            lng: Number(truck.longitude),
          });
          hasValidCoordinates = true;
        }
      });

      if (hasValidCoordinates) {
        mapRef.current.fitBounds(bounds);
      }
    }
  }, [trucks, getMapCenter, isLoaded]);

  const getStatusColorHex = (status: TruckData["status"]) => {
    switch (status) {
      case "available":
        return "#22C55E";
      case "busy":
        return "#3B82F6";
      case "not_available":
        return "#F59E0B";
      case "offline":
      default:
        return "#6B7280";
    }
  };

  const getMarkerIcon = (color: string) => ({
    path: window.google.maps.SymbolPath.CIRCLE,
    fillColor: color,
    fillOpacity: 0.9,
    strokeColor: "#FFF",
    strokeWeight: 2,
    scale: 10, // Larger markers
  });

  // Custom map styles for a cleaner look
  const mapStyles = [
    {
      featureType: "administrative",
      elementType: "labels.text.fill",
      stylers: [{ color: "#444444" }],
    },
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [{ color: "#f2f2f2" }],
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "road",
      elementType: "all",
      stylers: [{ saturation: -100 }, { lightness: 45 }],
    },
    {
      featureType: "road.highway",
      elementType: "all",
      stylers: [{ visibility: "simplified" }],
    },
    {
      featureType: "road.arterial",
      elementType: "labels.icon",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "water",
      elementType: "all",
      stylers: [{ color: "#b4d4e1" }, { visibility: "on" }],
    },
  ];

  if (loadError)
    return <div>Error loading Google Maps: {loadError.message}</div>;

  return (
    <>
      {!isLoaded ? (
        <div
          style={containerStyle}
          className="flex items-center justify-center bg-gray-100 text-gray-500"
        >
          Loading Map...
        </div>
      ) : (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={mapCenter}
          zoom={zoom}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={{
            styles: mapStyles,
            fullscreenControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            zoomControl: true,
          }}
        >
          {trucks.map((truck) =>
            isValidCoordinate(Number(truck.latitude)) &&
            isValidCoordinate(Number(truck.longitude)) ? (
              <MarkerF
                key={truck.id}
                position={{
                  lat: Number(truck.latitude),
                  lng: Number(truck.longitude),
                }}
                onClick={() => setSelectedTruck(truck)}
                icon={getMarkerIcon(getStatusColorHex(truck.status))}
              >
                {selectedTruck && selectedTruck.id === truck.id && (
                  <InfoWindowF
                    position={{
                      lat: Number(truck.latitude),
                      lng: Number(truck.longitude),
                    }}
                    onCloseClick={() => setSelectedTruck(null)}
                  >
                    <div className="p-3 min-w-[200px]">
                      <h3 className="font-bold text-black mb-1">
                        Truck #{truck.id}
                      </h3>
                      <p className="text-sm mb-1 text-black">
                        <strong>License:</strong> {truck.license_plate}
                      </p>
                      <p className="text-sm mb-1">
                        <strong>Status:</strong>{" "}
                        <span
                          style={{
                            backgroundColor: getStatusColorHex(truck.status),
                            padding: "2px 6px",
                            borderRadius: "4px",
                            color: "white",
                            fontSize: "0.75rem",
                          }}
                        >
                          {truck.status.replace("_", " ")}
                        </span>
                      </p>
                      {truck.driver && (
                        <p className="text-sm mb-1">
                          <strong>Driver:</strong> {truck.driver.name}
                        </p>
                      )}
                      <p className="text-xs text-gray-600 flex items-center gap-1 mb-2">
                        <MapPin className="h-3 w-3" />{" "}
                        {`${truck.city}, ${truck.state}` ||
                          "No address provided"}
                      </p>
                      <button
                        className="text-white bg-blue-600 hover:bg-blue-700 text-sm py-1 px-3 rounded w-full"
                        onClick={(e) => {
                          e.preventDefault();
                          onViewTruckDetails(truck);
                          setSelectedTruck(null);
                        }}
                      >
                        View Details
                      </button>
                    </div>
                  </InfoWindowF>
                )}
              </MarkerF>
            ) : null
          )}
        </GoogleMap>
      )}

      {/* Legend */}
      {/* <div className="absolute bottom-4 right-4 bg-white p-3 rounded-md shadow-md z-[1000]">
        <div className="text-sm font-medium mb-2 text-gray-800">
          Truck Status
        </div>
        <div className="space-y-2">
          {["available", "busy", "not_available", "offline"].map((status) => (
            <div key={status} className="flex items-center gap-2">
              <div
                className="h-4 w-4 rounded-full"
                style={{
                  backgroundColor: getStatusColorHex(
                    status as TruckData["status"]
                  ),
                }}
              />
              <span className="text-xs text-gray-700 capitalize">
                {status.replace("_", " ")}
              </span>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
};

const TruckMapPage = ({ trucks, handleViewTruckDetails }) => {
  return (
    <div className="w-full h-[600px] relative">
      <TruckMap trucks={trucks} onViewTruckDetails={handleViewTruckDetails} />
    </div>
  );
};

export default TruckMapPage;
