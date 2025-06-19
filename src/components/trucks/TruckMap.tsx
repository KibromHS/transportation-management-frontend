import React, { useState, useCallback, useRef, useEffect } from "react";
import { MapPin, Truck, Clock, Filter } from "lucide-react";
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  InfoWindowF,
  PolylineF,
} from "@react-google-maps/api";

// --- Google Maps setup ---
const libraries: ("places" | "drawing" | "geometry")[] = ["places", "geometry"];
const containerStyle = { width: "100%", height: "100%" };

// --- Constants ---
// Default center coordinates for the continental US
const US_CENTER = { lat: 39.8283, lng: -98.5795 };
const DEFAULT_ZOOM = 4; // Zoom level that shows most of the US

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
  city?: string;
  state?: string;
  speed?: number;
  fuel_level?: number;
  last_maintenance?: string;
  route?: { lat: number; lng: number }[];
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
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [showLegend, setShowLegend] = useState(true);
  const [showClusters, setShowClusters] = useState(false);

  const onLoad = useCallback(
    (map: google.maps.Map) => {
      mapRef.current = map;

      // Initial map view centered on the US
      if (trucks.length === 0) {
        // If no trucks, center on US
        map.setCenter(US_CENTER);
        map.setZoom(DEFAULT_ZOOM);
      } else {
        // If trucks are available, fit bounds to include all trucks
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
          map.fitBounds(bounds);

          // Ensure we're not zoomed in too close if there's only one marker
          const zoomListener = google.maps.event.addListenerOnce(
            map,
            "bounds_changed",
            () => {
              if (map.getZoom() > 10) {
                map.setZoom(10);
              }
            }
          );
        } else {
          // Fallback to US center if no valid coordinates
          map.setCenter(US_CENTER);
          map.setZoom(DEFAULT_ZOOM);
        }
      }
    },
    [trucks]
  );

  const onUnmount = useCallback(() => (mapRef.current = null), []);

  const [selectedTruck, setSelectedTruck] = useState<TruckData | null>(null);

  const isValidCoordinate = (coord: number | undefined): boolean =>
    typeof coord === "number" && isFinite(coord);

  const getMapCenter = useCallback(() => {
    const validTrucks = trucks.filter(
      (truck) =>
        isValidCoordinate(truck.latitude) && isValidCoordinate(truck.longitude)
    );

    // If no valid trucks, return US center
    if (validTrucks.length === 0) return US_CENTER;

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

  const [mapCenter, setMapCenter] = useState(US_CENTER); // Initialize with US center

  useEffect(() => {
    // Only update center from trucks if we have valid truck data
    if (trucks.length > 0) {
      setMapCenter(getMapCenter());
    }

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

        // Prevent excessive zoom when there's only one marker
        google.maps.event.addListenerOnce(
          mapRef.current,
          "bounds_changed",
          () => {
            if (mapRef.current && mapRef.current.getZoom() > 10) {
              mapRef.current.setZoom(10);
            }
          }
        );
      } else {
        // If no valid coordinates, reset to US view
        mapRef.current.setCenter(US_CENTER);
        mapRef.current.setZoom(DEFAULT_ZOOM);
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

  // Custom SVG marker that includes the truck ID
  const createCustomMarker = (truck) => {
    const color = getStatusColorHex(truck.status);
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="16" fill="${color}" stroke="white" stroke-width="2"/>
        <text x="20" y="24" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle" fill="white">${truck.id}</text>
      </svg>
    `;

    return {
      url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg),
      scaledSize: new google.maps.Size(40, 40),
      anchor: new google.maps.Point(20, 20),
    };
  };

  // Filter trucks based on status
  const filteredTrucks = statusFilter
    ? trucks.filter((truck) => truck.status === statusFilter)
    : trucks;

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
          zoom={DEFAULT_ZOOM} // Start with the default zoom showing the US
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={{
            styles: mapStyles,
            fullscreenControl: true,
            streetViewControl: false,
            mapTypeControl: false,
            zoomControl: true,
            cameraControl: false,
            minZoom: 3,
            maxZoom: 20,
            rotateControl: false,
            restriction: {
              latLngBounds: {
                north: 85,
                south: -85,
                west: -180,
                east: 180,
              },
              strictBounds: true,
            },
          }}
        >
          {filteredTrucks.map((truck) =>
            isValidCoordinate(Number(truck.latitude)) &&
            isValidCoordinate(Number(truck.longitude)) ? (
              <React.Fragment key={truck.id}>
                <MarkerF
                  position={{
                    lat: Number(truck.latitude),
                    lng: Number(truck.longitude),
                  }}
                  onClick={() => setSelectedTruck(truck)}
                  icon={createCustomMarker(truck)}
                />

                {/* Display truck route if available */}
                {truck.route && selectedTruck?.id === truck.id && (
                  <PolylineF
                    path={truck.route}
                    options={{
                      strokeColor: getStatusColorHex(truck.status),
                      strokeOpacity: 0.8,
                      strokeWeight: 3,
                    }}
                  />
                )}

                {selectedTruck && selectedTruck.id === truck.id && (
                  <InfoWindowF
                    position={{
                      lat: Number(truck.latitude),
                      lng: Number(truck.longitude),
                    }}
                    onCloseClick={() => setSelectedTruck(null)}
                  >
                    <div className="p-3 min-w-[300px] max-w-[350px]">
                      {/* Header with ID and Status */}
                      <div className="flex items-center justify-between mb-3 border-b pb-2">
                        <div className="flex items-center gap-2">
                          <Truck className="h-5 w-5 text-gray-700" />
                          <h3 className="font-bold text-lg text-gray-800">
                            Truck #{truck.id}
                          </h3>
                        </div>
                        <span
                          className="text-xs font-medium rounded-full px-2 py-1 uppercase"
                          style={{
                            backgroundColor: getStatusColorHex(truck.status),
                            color: "white",
                          }}
                        >
                          {truck.status.replace("_", " ")}
                        </span>
                      </div>

                      {/* Basic Info */}
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        <div className="col-span-2">
                          <p className="text-sm font-medium mb-1 text-gray-700">
                            <span className="font-bold">License:</span>{" "}
                            {truck.license_plate}
                          </p>
                          <p className="text-sm font-medium mb-1 text-gray-700">
                            <span className="font-bold">Type:</span>{" "}
                            {truck.truck_type_name || "N/A"}
                          </p>
                          <p className="text-sm font-medium mb-1 text-gray-700">
                            <span className="font-bold">Trailer:</span>{" "}
                            {truck.trailer_type_name || "N/A"}
                          </p>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="mb-3 bg-gray-50 p-2 rounded-md">
                        <div className="flex items-center gap-1 mb-1">
                          <MapPin className="h-4 w-4 text-gray-600" />
                          <span className="text-sm font-medium text-gray-700">
                            Location
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 ml-5">
                          {truck.city && truck.state
                            ? `${truck.city}, ${truck.state}`
                            : "Location not available"}
                          {truck.zip && ` ${truck.zip}`}
                        </p>
                      </div>

                      {/* Driver Info */}
                      {truck.driver && (
                        <div className="mb-3 bg-blue-50 p-2 rounded-md">
                          <div className="flex items-center gap-1 mb-1">
                            <span className="text-sm font-medium text-gray-700">
                              Driver
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 ml-2">
                            {truck.driver.name}
                          </p>
                          {truck.driver.phone && (
                            <p className="text-sm text-gray-600 ml-2">
                              Phone: {truck.driver.phone}
                            </p>
                          )}
                          <div className="flex gap-2 mt-1 ml-2">
                            <span
                              className={`text-xs px-2 py-0.5 rounded ${
                                truck.driver.is_available
                                  ? "bg-green-100 text-green-700"
                                  : "bg-gray-100 text-gray-700"
                              }`}
                            >
                              {truck.driver.is_available
                                ? "Available"
                                : "Unavailable"}
                            </span>
                            <span
                              className={`text-xs px-2 py-0.5 rounded ${
                                truck.driver.is_active
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-gray-100 text-gray-700"
                              }`}
                            >
                              {truck.driver.is_active ? "Active" : "Inactive"}
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Vehicle Specifications */}
                      <div className="mb-3">
                        <div className="text-sm font-medium mb-1 text-gray-700 border-b pb-1">
                          Vehicle Specifications
                        </div>
                        <div className="grid grid-cols-2 gap-x-3 gap-y-1 mt-1 text-xs">
                          {truck.length && (
                            <p className="text-gray-600">
                              <span className="font-medium">Length:</span>{" "}
                              {truck.length} ft
                            </p>
                          )}
                          {truck.width && (
                            <p className="text-gray-600">
                              <span className="font-medium">Width:</span>{" "}
                              {truck.width} ft
                            </p>
                          )}
                          {truck.height && (
                            <p className="text-gray-600">
                              <span className="font-medium">Height:</span>{" "}
                              {truck.height} ft
                            </p>
                          )}
                          {truck.gross && (
                            <p className="text-gray-600">
                              <span className="font-medium">Gross:</span>{" "}
                              {truck.gross} lbs
                            </p>
                          )}
                          {truck.payload_capacity && (
                            <p className="text-gray-600">
                              <span className="font-medium">Payload:</span>{" "}
                              {truck.payload_capacity} lbs
                            </p>
                          )}
                          {truck.door_type && (
                            <p className="text-gray-600">
                              <span className="font-medium">Door:</span>{" "}
                              {truck.door_type}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Additional Details */}
                      <div>
                        <div className="text-sm font-medium mb-1 text-gray-700 border-b pb-1">
                          Additional Details
                        </div>
                        <div className="grid grid-cols-2 gap-x-3 gap-y-1 mt-1 text-xs">
                          <p className="text-gray-600">
                            <span className="font-medium">Preferred Load:</span>{" "}
                            {truck.preferred_load || "N/A"}
                          </p>
                          <p className="text-gray-600">
                            <span className="font-medium">Team:</span>{" "}
                            {truck.team ? "Yes" : "No"}
                          </p>
                          <p className="text-gray-600">
                            <span className="font-medium">Canada:</span>{" "}
                            {truck.canada ? "Yes" : "No"}
                          </p>
                          <p className="text-gray-600">
                            <span className="font-medium">Mexico:</span>{" "}
                            {truck.mexico ? "Yes" : "No"}
                          </p>
                          <p className="text-gray-600">
                            <span className="font-medium">Signs:</span>{" "}
                            {truck.signs
                              ? truck.signs.replace("_", " ")
                              : "N/A"}
                          </p>
                          <p className="text-gray-600">
                            <span className="font-medium">Reserved:</span>{" "}
                            {truck.is_reserved ? "Yes" : "No"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </InfoWindowF>
                )}
              </React.Fragment>
            ) : null
          )}
        </GoogleMap>
      )}

      {/* Map Controls */}
      {/* <div className="absolute top-4 right-4 flex flex-col gap-2">
        <button
          onClick={() => setShowLegend(!showLegend)}
          className="bg-white p-2 rounded-md shadow-md z-[1000] hover:bg-gray-100"
          title="Toggle Legend"
        >
          <Filter className="h-5 w-5 text-gray-700" />
        </button>

        <button
          onClick={() => setShowClusters(!showClusters)}
          className="bg-white p-2 rounded-md shadow-md z-[1000] hover:bg-gray-100"
          title="Toggle Clustering"
        >
          <Truck className="h-5 w-5 text-gray-700" />
        </button>
      </div> */}

      {/* Legend */}
      {/* {showLegend && (
        <div className="absolute bottom-4 right-4 bg-white p-3 rounded-md shadow-md z-[1000]">
          <div className="text-sm font-medium mb-2 text-gray-800">
            Truck Status
          </div>
          <div className="space-y-2">
            {["available", "busy", "not_available", "offline"].map((status) => (
              <div 
                key={status} 
                className={`flex items-center gap-2 p-1 rounded cursor-pointer ${statusFilter === status ? 'bg-gray-100' : ''}`}
                onClick={() => setStatusFilter(statusFilter === status ? null : status)}
              >
                <div
                  className="h-5 w-5 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: getStatusColorHex(
                      status as TruckData["status"]
                    ),
                  }}
                >
                  {statusFilter === status && (
                    <span className="text-white text-xs">✓</span>
                  )}
                </div>
                <span className="text-xs text-gray-700 capitalize">
                  {status.replace("_", " ")}
                </span>
              </div>
            ))}
          </div>
        </div>
      )} */}

      {/* Time control slider (for historical tracking) */}
      {/* <div className="absolute bottom-4 left-4 bg-white p-3 rounded-md shadow-md z-[1000] max-w-[300px]">
        <div className="flex items-center gap-2 mb-2">
          <Clock className="h-4 w-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-800">Time Control</span>
        </div>
        <input 
          type="range" 
          min="0" 
          max="100" 
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-600 mt-1">
          <span>12:00 AM</span>
          <span>12:00 PM</span>
          <span>11:59 PM</span>
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
