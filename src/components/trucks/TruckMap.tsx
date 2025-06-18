// import React, { useState, useCallback, useRef, useEffect } from "react";
// import { MapPin } from "lucide-react";

// import {
//   GoogleMap,
//   useJsApiLoader,
//   MarkerF,
//   InfoWindowF,
// } from "@react-google-maps/api";

// const libraries: ("places" | "drawing" | "geometry")[] = ["places", "geometry"];

// export interface TruckData {
//   id: string;
//   license_plate: string;
//   status: "available" | "busy" | "not_available" | "offline";
//   latitude: number;
//   longitude: number;
//   driver: {
//     name: string;
//     id: number;
//   } | null;
//   address: string;
//   timestamps: string;
//   type?: string;
// }

// interface TruckMapProps {
//   trucks: TruckData[];
//   onViewTruckDetails: (truck: TruckData) => void;
// }

// const containerStyle = {
//   width: "100%",
//   height: "100%", // IMPORTANT: Set to 100% to fill the parent container's height
// };

// const TruckMap: React.FC<TruckMapProps> = ({ trucks, onViewTruckDetails }) => {
//   const { isLoaded, loadError } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY as string,
//     libraries: libraries,
//   });

//   const mapRef = useRef<google.maps.Map | null>(null);
//   const onLoad = useCallback(function callback(map: google.maps.Map) {
//     mapRef.current = map;
//   }, []);

//   const onUnmount = useCallback(function callback(map: google.maps.Map) {
//     mapRef.current = null;
//   }, []);

//   const [selectedTruck, setSelectedTruck] = useState<TruckData | null>(null);

//   const defaultCenter = { lat: 38.9072, lng: -77.0369 }; // Default to Washington D.C. area

//   const isValidCoordinate = (coord: number | undefined): boolean =>
//     typeof coord === "number" && isFinite(coord);

//   const getMapCenter = useCallback(() => {
//     const firstValidTruck = trucks.find(
//       (truck) =>
//         isValidCoordinate(truck.latitude) && isValidCoordinate(truck.longitude)
//     );
//     return firstValidTruck
//       ? { lat: firstValidTruck.latitude, lng: firstValidTruck.longitude }
//       : defaultCenter;
//   }, [trucks]);

//   const [mapCenter, setMapCenter] = useState(getMapCenter());
//   const zoom = 10;

//   useEffect(() => {
//     setMapCenter(getMapCenter());
//   }, [trucks, getMapCenter]);

//   // Returns hex color codes for markers and badge backgrounds
//   const getStatusColorHex = (status: TruckData["status"]) => {
//     switch (status) {
//       case "available":
//         return "#22C55E"; // Tailwind green-500
//       case "busy":
//         return "#3B82F6"; // Tailwind blue-500
//       case "not_available":
//         return "#F59E0B"; // Tailwind yellow-500
//       case "offline":
//       default:
//         return "#6B7280"; // Tailwind gray-500
//     }
//   };

//   // Generates a custom SVG icon based on color
//   const getMarkerIcon = (color: string) => ({
//     path: window.google.maps.SymbolPath.CIRCLE, // A simple circle
//     fillColor: color,
//     fillOpacity: 0.9,
//     strokeColor: "#FFF", // White border for better visibility
//     strokeWeight: 2,
//     scale: 8, // Size of the marker
//   });

//   if (loadError) {
//     return <div>Error loading Google Maps: {loadError.message}</div>;
//   }

//   return (
//     <>
//       {!isLoaded ? (
//         <div
//           style={containerStyle}
//           className="flex items-center justify-center bg-gray-100 text-gray-500"
//         >
//           Loading Map...
//         </div>
//       ) : (
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={mapCenter}
//           zoom={zoom}
//           onLoad={onLoad}
//           onUnmount={onUnmount}
//           options={{ disableDefaultUI: false }}
//         >
//           {trucks.map((truck) =>
//             isValidCoordinate(truck.latitude) &&
//             isValidCoordinate(truck.longitude) ? (
//               <MarkerF
//                 key={truck.id}
//                 position={{ lat: truck.latitude, lng: truck.longitude }}
//                 onClick={() => setSelectedTruck(truck)}
//                 icon={getMarkerIcon(getStatusColorHex(truck.status))}
//               >
//                 {selectedTruck && selectedTruck.id === truck.id && (
//                   <InfoWindowF
//                     position={{ lat: truck.latitude, lng: truck.longitude }}
//                     onCloseClick={() => setSelectedTruck(null)}
//                   >
//                     <div className="p-2">
//                       <h3 className="font-bold text-base">{truck.id}</h3>
//                       <p className="text-sm">License: {truck.license_plate}</p>
//                       <p className="text-sm">
//                         Status:{" "}
//                         <span
//                           style={{
//                             backgroundColor: getStatusColorHex(truck.status),
//                           }}
//                           className="px-1 rounded text-white"
//                         >
//                           {truck.status}
//                         </span>
//                       </p>
//                       <p className="text-xs text-gray-600 flex items-center gap-1">
//                         <MapPin className="h-3 w-3" /> {truck.address}
//                       </p>
//                       <a
//                         href="#"
//                         className="text-blue-600 text-sm mt-1 block"
//                         onClick={(e) => {
//                           e.preventDefault();
//                           onViewTruckDetails(truck);
//                           setSelectedTruck(null);
//                         }}
//                       >
//                         View Details
//                       </a>
//                     </div>
//                   </InfoWindowF>
//                 )}
//               </MarkerF>
//             ) : null
//           )}
//         </GoogleMap>
//       )}

//       {/* Map legend: Ensure legend uses the same colors */}
//       <div className="absolute bottom-4 right-4 bg-white p-2 rounded-md shadow-md z-[1000]">
//         <div className="text-sm font-medium mb-1 text-gray-800">Legend</div>
//         <div className="space-y-1">
//           <div className="flex items-center gap-2">
//             <div
//               className="h-3 w-3 rounded-full"
//               style={{ backgroundColor: getStatusColorHex("available") }}
//             ></div>
//             <span className="text-xs text-gray-700">Available</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <div
//               className="h-3 w-3 rounded-full"
//               style={{ backgroundColor: getStatusColorHex("busy") }}
//             ></div>
//             <span className="text-xs text-gray-700">Busy</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <div
//               className="h-3 w-3 rounded-full"
//               style={{ backgroundColor: getStatusColorHex("not_available") }}
//             ></div>
//             <span className="text-xs text-gray-700">Not Available</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <div
//               className="h-3 w-3 rounded-full"
//               style={{ backgroundColor: getStatusColorHex("offline") }}
//             ></div>
//             <span className="text-xs text-gray-700">Offline</span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TruckMap;

import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { MapPin } from "lucide-react";
import "leaflet/dist/leaflet.css";

export interface TruckData {
  id: string;
  owner_id: string;
  license_plate: string;
  model: string;
  color: string;
  year: number;
  length: number;
  width: number;
  height: number;
  gross: number;
  city: string;
  state: string;
  zip: string;
  payload_capacity: string;
  door_type: string;
  team: string;
  latitude: number;
  longitude: number;
  address: string;
  driver: {
    name: string;
    id: number;
  };
  status: "available" | "not_available" | "busy";
  preferred_load: string;
  canada: boolean;
  mexico: boolean;
  signs: "with_signs" | "without_signs";
  is_reserved: boolean;
  truck_type_id: number;
  trailer_type_id: number;
  equipment: number[];
  timestamps: string; // ISO date string
}

interface TruckMapProps {
  trucks: TruckData[];
  onViewTruckDetails: (truck: TruckData) => void;
}

const getStatusColorHex = (status: TruckData["status"]) => {
  switch (status) {
    case "available":
      return "#22C55E";
    case "busy":
      return "#3B82F6";
    case "not_available":
      return "#F59E0B";
    default:
      return "#6B7280";
  }
};

const createCustomIcon = (color: string) =>
  L.divIcon({
    html: `<div style="background-color: ${color}; width: 14px; height: 14px; border-radius: 50%; border: 2px solid white"></div>`,
    iconSize: [14, 14],
    className: "custom-marker",
  });

const FitBounds: React.FC<{ trucks: TruckData[] }> = ({ trucks }) => {
  const map = useMap();
  useEffect(() => {
    const bounds = L.latLngBounds(
      trucks
        .filter((t) => isFinite(t.latitude) && isFinite(t.longitude))
        .map((t) => [t.latitude, t.longitude] as [number, number])
    );
    if (bounds.isValid()) map.fitBounds(bounds);
  }, [trucks, map]);
  return null;
};

const TruckMap: React.FC<TruckMapProps> = ({ trucks, onViewTruckDetails }) => {
  const [selectedTruck, setSelectedTruck] = useState<TruckData | null>(null);
  const defaultCenter = [38.9072, -77.0369];

  trucks.forEach((truck) => {
    console.log("lat", truck.latitude);
    console.log("lng", truck.longitude);
  });

  const isValidCoordinate = (coord: number | undefined | null): boolean => {
    return typeof coord === "number" && isFinite(coord);
  };

  return (
    <div className="relative w-full h-full">
      <MapContainer
        center={defaultCenter}
        zoom={5}
        scrollWheelZoom={true}
        className="w-full h-full z-0"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <FitBounds trucks={trucks} />
        {trucks.map((truck) =>
          isValidCoordinate(truck.latitude) &&
          isValidCoordinate(truck.longitude) ? (
            <Marker
              key={truck.id}
              position={[truck.latitude, truck.longitude]}
              icon={createCustomIcon(getStatusColorHex(truck.status))}
              eventHandlers={{
                click: () => setSelectedTruck(truck),
              }}
            >
              {selectedTruck && selectedTruck.id === truck.id && (
                <Popup
                  position={[truck.latitude, truck.longitude]}
                  onClose={() => setSelectedTruck(null)}
                >
                  <div className="p-1">
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
                </Popup>
              )}
            </Marker>
          ) : null
        )}
      </MapContainer>

      <div className="absolute bottom-4 right-4 bg-white p-2 rounded-md shadow-md z-[1000]">
        <div className="text-sm font-medium mb-1 text-gray-800">Legend</div>
        <div className="space-y-1">
          {(
            [
              "available",
              "busy",
              "not_available",
              "offline",
            ] as TruckData["status"][]
          ).map((status) => (
            <div className="flex items-center gap-2" key={status}>
              <div
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: getStatusColorHex(status) }}
              ></div>
              <span className="text-xs text-gray-700 capitalize">
                {status.replace("_", " ")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TruckMap;
