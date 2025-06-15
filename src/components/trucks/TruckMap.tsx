import React, { useState, useCallback, useRef, useEffect } from "react";
import { MapPin } from "lucide-react";

import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";

const libraries: ("places" | "drawing" | "geometry")[] = ["places", "geometry"];

export interface TruckData {
  id: string;
  license_plate: string;
  status: "available" | "busy" | "not_available" | "offline";
  latitude: number;
  longitude: number;
  driver: {
    name: string;
    id: number;
  } | null;
  address: string;
  timestamps: string;
  type?: string;
}

interface TruckMapProps {
  trucks: TruckData[];
  onViewTruckDetails: (truck: TruckData) => void;
}

const containerStyle = {
  width: "100%",
  height: "100%", // IMPORTANT: Set to 100% to fill the parent container's height
};

const TruckMap: React.FC<TruckMapProps> = ({ trucks, onViewTruckDetails }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY as string,
    libraries: libraries,
  });

  const mapRef = useRef<google.maps.Map | null>(null);
  const onLoad = useCallback(function callback(map: google.maps.Map) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback(map: google.maps.Map) {
    mapRef.current = null;
  }, []);

  const [selectedTruck, setSelectedTruck] = useState<TruckData | null>(null);

  const defaultCenter = { lat: 38.9072, lng: -77.0369 }; // Default to Washington D.C. area

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

  // Returns hex color codes for markers and badge backgrounds
  const getStatusColorHex = (status: TruckData["status"]) => {
    switch (status) {
      case "available":
        return "#22C55E"; // Tailwind green-500
      case "busy":
        return "#3B82F6"; // Tailwind blue-500
      case "not_available":
        return "#F59E0B"; // Tailwind yellow-500
      case "offline":
      default:
        return "#6B7280"; // Tailwind gray-500
    }
  };

  // Generates a custom SVG icon based on color
  const getMarkerIcon = (color: string) => ({
    path: window.google.maps.SymbolPath.CIRCLE, // A simple circle
    fillColor: color,
    fillOpacity: 0.9,
    strokeColor: "#FFF", // White border for better visibility
    strokeWeight: 2,
    scale: 8, // Size of the marker
  });

  if (loadError) {
    return <div>Error loading Google Maps: {loadError.message}</div>;
  }

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
          options={{ disableDefaultUI: false }}
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

      {/* Map legend: Ensure legend uses the same colors */}
      <div className="absolute bottom-4 right-4 bg-white p-2 rounded-md shadow-md z-[1000]">
        <div className="text-sm font-medium mb-1 text-gray-800">Legend</div>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: getStatusColorHex("available") }}
            ></div>
            <span className="text-xs text-gray-700">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: getStatusColorHex("busy") }}
            ></div>
            <span className="text-xs text-gray-700">Busy</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: getStatusColorHex("not_available") }}
            ></div>
            <span className="text-xs text-gray-700">Not Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: getStatusColorHex("offline") }}
            ></div>
            <span className="text-xs text-gray-700">Offline</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TruckMap;
