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
  trucks: TruckData[];
  onViewTruckDetails: (truck: TruckData) => void;
}

// --- TruckMap Component ---
const TruckMap: React.FC<TruckMapProps> = ({ trucks, onViewTruckDetails }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY as string,
    libraries,
  });

  const mapRef = useRef<google.maps.Map | null>(null);
  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);
  const onUnmount = useCallback(() => (mapRef.current = null), []);

  const [selectedTruck, setSelectedTruck] = useState<TruckData | null>(null);
  const defaultCenter = { lat: 38.9072, lng: -77.0369 };

  const isValidCoordinate = (coord: number | undefined): boolean =>
    typeof coord === "number" && isFinite(coord);

  const getMapCenter = useCallback(() => {
    const firstValidTruck = trucks.find(
      (truck) =>
        isValidCoordinate(truck.latitude) && isValidCoordinate(truck.longitude)
    );
    return firstValidTruck
      ? { lat: firstValidTruck.latitude, lng: firstValidTruck.longitude }
      : defaultCenter;
  }, [trucks]);

  const [mapCenter, setMapCenter] = useState(getMapCenter());
  const zoom = 10;

  useEffect(() => {
    setMapCenter(getMapCenter());
  }, [trucks, getMapCenter]);

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
    scale: 8,
  });

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
        >
          {trucks.map((truck) =>
            isValidCoordinate(truck.latitude) &&
            isValidCoordinate(truck.longitude) ? (
              <MarkerF
                key={truck.id}
                position={{ lat: truck.latitude, lng: truck.longitude }}
                onClick={() => setSelectedTruck(truck)}
                icon={getMarkerIcon(getStatusColorHex(truck.status))}
              >
                {selectedTruck && selectedTruck.id === truck.id && (
                  <InfoWindowF
                    position={{ lat: truck.latitude, lng: truck.longitude }}
                    onCloseClick={() => setSelectedTruck(null)}
                  >
                    <div className="p-2">
                      <h3 className="font-bold text-base">{truck.id}</h3>
                      <p className="text-sm">License: {truck.license_plate}</p>
                      <p className="text-sm">
                        Status:{" "}
                        <span
                          style={{
                            backgroundColor: getStatusColorHex(truck.status),
                          }}
                          className="px-1 rounded text-white"
                        >
                          {truck.status}
                        </span>
                      </p>
                      <p className="text-xs text-gray-600 flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> {truck.address}
                      </p>
                      <a
                        href="#"
                        className="text-blue-600 text-sm mt-1 block"
                        onClick={(e) => {
                          e.preventDefault();
                          onViewTruckDetails(truck);
                          setSelectedTruck(null);
                        }}
                      >
                        View Details
                      </a>
                    </div>
                  </InfoWindowF>
                )}
              </MarkerF>
            ) : null
          )}
        </GoogleMap>
      )}

      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-white p-2 rounded-md shadow-md z-[1000]">
        <div className="text-sm font-medium mb-1 text-gray-800">Legend</div>
        <div className="space-y-1">
          {["available", "busy", "not_available", "offline"].map((status) => (
            <div key={status} className="flex items-center gap-2">
              <div
                className="h-3 w-3 rounded-full"
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
      </div>
    </>
  );
};

// --- Dummy Data + Usage ---
const dummyTrucks: TruckData[] = [
  {
    id: "TRUCK001",
    license_plate: "AB123CD",
    status: "available",
    latitude: 38.9072,
    longitude: -77.0369,
    driver: { name: "John Doe", id: 1 },
    address: "Washington, DC",
    timestamps: new Date().toISOString(),
  },
  {
    id: "TRUCK002",
    license_plate: "XY456ZT",
    status: "busy",
    latitude: 38.9075,
    longitude: -77.0434,
    driver: { name: "Jane Smith", id: 2 },
    address: "Capitol Hill, DC",
    timestamps: new Date().toISOString(),
  },
  {
    id: "TRUCK003",
    license_plate: "LM789OP",
    status: "offline",
    latitude: 38.8895,
    longitude: -77.0352,
    driver: null,
    address: "National Mall, DC",
    timestamps: new Date().toISOString(),
  },
  {
    id: "TRUCK004",
    license_plate: "EF321GH",
    status: "not_available",
    latitude: 38.8951,
    longitude: -77.0691,
    driver: { name: "Ali Ahmed", id: 3 },
    address: "Georgetown, DC",
    timestamps: new Date().toISOString(),
  },
];

const TruckMapPage = () => {
  const handleViewTruckDetails = (truck: TruckData) => {
    console.log("Viewing truck details:", truck);
    alert(`Truck ID: ${truck.id}\nStatus: ${truck.status}`);
  };

  return (
    <div className="w-full h-screen relative">
      <TruckMap
        trucks={dummyTrucks}
        onViewTruckDetails={handleViewTruckDetails}
      />
    </div>
  );
};

export default TruckMapPage;
