import React, { useState, useCallback, useRef, useEffect } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Map as MapIcon,
  Layers,
  Filter,
  Truck,
  MapPin,
  Route,
  Clock,
  Search,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// Google Maps imports
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  InfoWindowF,
  PolylineF,
} from "@react-google-maps/api";
const maplibraries: ("places" | "drawing" | "geometry" | "visualization")[] = [
  "places",
];
// Define interfaces for your data
interface Vehicle {
  id: string;
  type: string;
  status: "In Transit" | "Available" | "Maintenance" | "Offline";
  lastUpdate: string;
  currentLocation: { lat: number; lng: number };
  driver: string;
}

interface RouteData {
  id: string;
  name: string;
  status: "Active" | "Scheduled" | "Completed";
  origin: { lat: number; lng: number; name: string };
  destination: { lat: number; lng: number; name: string };
  path: { lat: number; lng: number }[];
  assignedVehicleId: string;
  assignedDriver: string;
}

// Dummy Data
const dummyVehicles: Vehicle[] = [
  {
    id: "TRK-1001",
    type: "Box Truck",
    status: "In Transit",
    lastUpdate: "5 mins ago",
    currentLocation: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
    driver: "John Doe",
  },
  {
    id: "TRK-1002",
    type: "Cargo Van",
    status: "Available",
    lastUpdate: "10 mins ago",
    currentLocation: { lat: 34.058, lng: -118.258 }, // Near Los Angeles
    driver: "Jane Smith",
  },
  {
    id: "TRK-1003",
    type: "Refrigerated",
    status: "Maintenance",
    lastUpdate: "30 mins ago",
    currentLocation: { lat: 34.065, lng: -118.225 }, // Near Los Angeles
    driver: "Mike Brown",
  },
  {
    id: "TRK-1004",
    type: "Flatbed",
    status: "In Transit",
    lastUpdate: "15 mins ago",
    currentLocation: { lat: 34.045, lng: -118.265 }, // Near Los Angeles
    driver: "Emily White",
  },
  {
    id: "TRK-1005",
    type: "Box Truck",
    status: "Available",
    lastUpdate: "20 mins ago",
    currentLocation: { lat: 34.05, lng: -118.24 }, // Near Los Angeles
    driver: "Chris Green",
  },
];

const dummyRoutes: RouteData[] = [
  {
    id: "R-001",
    name: "LA to Vegas Express",
    status: "Active",
    origin: { lat: 34.0522, lng: -118.2437, name: "Los Angeles, CA" },
    destination: { lat: 36.1699, lng: -115.1398, name: "Las Vegas, NV" },
    path: [
      { lat: 34.0522, lng: -118.2437 },
      { lat: 34.1, lng: -117.8 },
      { lat: 34.5, lng: -117.0 },
      { lat: 35.0, lng: -116.5 },
      { lat: 35.5, lng: -116.0 },
      { lat: 36.1699, lng: -115.1398 },
    ],
    assignedVehicleId: "TRK-1001",
    assignedDriver: "John Doe",
  },
  {
    id: "R-002",
    name: "Valley Local Loop",
    status: "Scheduled",
    origin: { lat: 34.058, lng: -118.258, name: "Downtown LA" },
    destination: { lat: 34.07, lng: -118.3, name: "Hollywood" },
    path: [
      { lat: 34.058, lng: -118.258 },
      { lat: 34.065, lng: -118.27 },
      { lat: 34.07, lng: -118.3 },
    ],
    assignedVehicleId: "TRK-1002",
    assignedDriver: "Jane Smith",
  },
];

// Map configuration
const containerStyle = {
  width: "100%",
  height: "100%", // Card will control height
};

const defaultMapOptions = {
  disableDefaultUI: false,
  zoomControl: true,
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
};

const MapPage = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [selectedRoute, setSelectedRoute] = useState<RouteData | null>(null);
  const [mapZoom, setMapZoom] = useState(12); // Default zoom level
  const [mapCenter, setMapCenter] = useState({ lat: 34.0522, lng: -118.2437 }); // Default center: Los Angeles

  // Google Maps API loading
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY as string,
    libraries: maplibraries,
  });

  const mapRef = useRef<google.maps.Map | null>(null);
  const onLoad = useCallback(function callback(map: google.maps.Map) {
    mapRef.current = map;
    // Optionally set initial center based on first vehicle if available
    if (dummyVehicles.length > 0) {
      setMapCenter(dummyVehicles[0].currentLocation);
    }
  }, []);

  const onUnmount = useCallback(function callback(map: google.maps.Map) {
    mapRef.current = null;
  }, []);

  // Handler for vehicle marker click
  const handleVehicleClick = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setSelectedRoute(null); // Close route info window if open
    setMapCenter(vehicle.currentLocation); // Center map on selected vehicle
  };

  // Handler for route polyline click (this might be tricky to implement directly on PolylineF without a custom overlay)
  // For simplicity, we'll assume clicking on a route in the list highlights it on the map and opens its info window.
  const handleRouteClick = (route: RouteData) => {
    setSelectedRoute(route);
    setSelectedVehicle(null); // Close vehicle info window if open
    // You might want to adjust map zoom/center to show the entire route
    if (mapRef.current) {
      const bounds = new google.maps.LatLngBounds();
      route.path.forEach((point) => bounds.extend(point));
      mapRef.current.fitBounds(bounds);
    }
  };

  // Status color utility for badges and markers
  const getStatusColor = (status: Vehicle["status"]) => {
    switch (status) {
      case "In Transit":
        return "bg-green-500";
      case "Available":
        return "bg-blue-500";
      case "Maintenance":
        return "bg-yellow-500";
      case "Offline":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };

  const getRouteStatusColor = (status: RouteData["status"]) => {
    switch (status) {
      case "Active":
        return "bg-green-500";
      case "Scheduled":
        return "bg-blue-500";
      case "Completed":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };

  if (loadError) {
    return <div>Error loading Google Maps: {loadError.message}</div>;
  }

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Live Map</h1>
          <div className="flex gap-2">
            <Button variant="outline">
              <Layers className="mr-2 h-4 w-4" />
              Layers
            </Button>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="mr-2 h-4 w-4" />
              Filters
              {showFilters ? (
                <ChevronUp className="ml-2 h-4 w-4" />
              ) : (
                <ChevronDown className="ml-2 h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {showFilters && (
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <Label>Vehicle Types</Label>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="box-truck" defaultChecked />
                      <Label htmlFor="box-truck">Box Trucks</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="cargo-van" defaultChecked />
                      <Label htmlFor="cargo-van">Cargo Vans</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="refrigerated" defaultChecked />
                      <Label htmlFor="refrigerated">Refrigerated</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="flatbed" defaultChecked />
                      <Label htmlFor="flatbed">Flatbeds</Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Status</Label>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="in-transit" defaultChecked />
                      <Label htmlFor="in-transit">In Transit</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="available" defaultChecked />
                      <Label htmlFor="available">Available</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="maintenance" defaultChecked />
                      <Label htmlFor="maintenance">Maintenance</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="offline" />
                      <Label htmlFor="offline">Offline</Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Time Range</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label htmlFor="from-date" className="text-xs">
                        From
                      </Label>
                      <Input id="from-date" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="to-date" className="text-xs">
                        To
                      </Label>
                      <Input id="to-date" type="date" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Location</Label>
                  <div className="relative">
                    <Input placeholder="Search location..." className="pl-10" />
                    <div className="absolute left-3 top-2.5">
                      <Search className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <Checkbox id="show-geofences" />
                    <Label htmlFor="show-geofences">Show Geofences</Label>
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-4">
                <Button variant="outline" className="mr-2">
                  Reset
                </Button>
                <Button>Apply Filters</Button>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-3">
            <Card className="h-[700px]">
              <CardContent className="p-0 h-full">
                {!isLoaded ? (
                  <div
                    style={containerStyle}
                    className="bg-slate-100 h-full flex items-center justify-center"
                  >
                    <div className="text-center">
                      <MapIcon className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium">
                        Loading Interactive Map...
                      </h3>
                      <p className="text-sm text-muted-foreground max-w-md mx-auto mt-2">
                        This area would display an interactive map showing
                        real-time locations of all vehicles, routes, and
                        geofences. It would integrate with a mapping service
                        like Google Maps or Mapbox.
                      </p>
                    </div>
                  </div>
                ) : (
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={mapCenter}
                    zoom={mapZoom}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                    options={defaultMapOptions}
                  >
                    {/* Vehicle Markers */}
                    {dummyVehicles.map((vehicle) => (
                      <MarkerF
                        key={vehicle.id}
                        position={vehicle.currentLocation}
                        onClick={() => handleVehicleClick(vehicle)}
                        icon={{
                          path: google.maps.SymbolPath.CIRCLE, // Example icon
                          scale: 10,
                          fillColor: "#FF0000", // Convert Tailwind to hex, add opacity
                          fillOpacity: 1,
                          strokeColor: "#FFFFFF",
                          strokeWeight: 1,
                          rotation: 90, // To make the arrow point correctly for vehicles
                        }}
                      >
                        {selectedVehicle?.id === vehicle.id && (
                          <InfoWindowF
                            position={vehicle.currentLocation}
                            onCloseClick={() => setSelectedVehicle(null)}
                          >
                            <div className="p-2">
                              <p className="font-medium">{vehicle.id}</p>
                              <p className="text-sm text-muted-foreground">
                                {vehicle.type}
                              </p>
                              <Badge
                                className={`${getStatusColor(
                                  vehicle.status
                                )} text-white mt-1`}
                              >
                                {vehicle.status}
                              </Badge>
                              <p className="text-xs mt-1">
                                Driver: {vehicle.driver}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                Updated {vehicle.lastUpdate}
                              </p>
                            </div>
                          </InfoWindowF>
                        )}
                      </MarkerF>
                    ))}

                    {/* Route Polylines */}
                    {dummyRoutes.map((route) => (
                      <PolylineF
                        key={route.id}
                        path={route.path}
                        options={{
                          strokeColor:
                            selectedRoute?.id === route.id
                              ? "#FF0000"
                              : "#4285F4", // Highlight selected route
                          strokeOpacity: 0.8,
                          strokeWeight: 4,
                          icons: [
                            {
                              icon: {
                                path: google.maps.SymbolPath.FORWARD_OPEN_ARROW,
                              },
                              offset: "100%",
                              repeat: "100px",
                            },
                          ],
                        }}
                        onClick={() => handleRouteClick(route)}
                      />
                    ))}

                    {/* InfoWindow for selected Route (can appear anywhere along the route) */}
                    {selectedRoute && (
                      <InfoWindowF
                        position={selectedRoute.origin} // Or try to center it on the route for better visibility
                        onCloseClick={() => setSelectedRoute(null)}
                      >
                        <div className="p-2">
                          <p className="font-medium">{selectedRoute.name}</p>
                          <p className="text-sm">
                            <MapPin className="h-3 w-3 inline-block mr-1" />
                            {selectedRoute.origin.name}{" "}
                            <ArrowRight className="h-3 w-3 inline-block mx-1" />{" "}
                            {selectedRoute.destination.name}
                          </p>
                          <Badge
                            className={`${getRouteStatusColor(
                              selectedRoute.status
                            )} text-white mt-1`}
                          >
                            {selectedRoute.status}
                          </Badge>
                          <p className="text-xs mt-1">
                            Vehicle: {selectedRoute.assignedVehicleId} | Driver:{" "}
                            {selectedRoute.assignedDriver}
                          </p>
                        </div>
                      </InfoWindowF>
                    )}
                  </GoogleMap>
                )}
              </CardContent>
            </Card>
          </div>

          <div>
            <Tabs defaultValue="vehicles" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="vehicles">Vehicles</TabsTrigger>
                <TabsTrigger value="routes">Routes</TabsTrigger>
              </TabsList>

              <TabsContent value="vehicles" className="mt-4">
                <div className="relative mb-4">
                  <Input placeholder="Search vehicles..." className="pl-10" />
                  <div className="absolute left-3 top-2.5">
                    <Search className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>

                <div className="space-y-2 max-h-[550px] overflow-y-auto pr-2">
                  {dummyVehicles.map((vehicle) => (
                    <Card
                      key={vehicle.id}
                      className={`hover:bg-muted/50 cursor-pointer ${
                        selectedVehicle?.id === vehicle.id
                          ? "ring-2 ring-primary"
                          : ""
                      }`}
                      onClick={() => handleVehicleClick(vehicle)}
                    >
                      <CardContent className="p-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center gap-1">
                              <Truck className="h-4 w-4 text-muted-foreground" />
                              <span className="font-medium">{vehicle.id}</span>
                            </div>
                            <div className="text-sm text-muted-foreground mt-1">
                              {vehicle.type}
                            </div>
                          </div>
                          <Badge
                            className={`${getStatusColor(vehicle.status)}`}
                          >
                            {vehicle.status}
                          </Badge>
                        </div>
                        <div className="mt-2 text-sm">
                          <div className="flex items-center">
                            <MapPin className="h-3 w-3 text-muted-foreground mr-1" />
                            Lat: {vehicle.currentLocation.lat.toFixed(4)}, Lng:{" "}
                            {vehicle.currentLocation.lng.toFixed(4)}
                          </div>
                          <div className="flex items-center mt-1">
                            <Clock className="h-3 w-3 text-muted-foreground mr-1" />
                            Updated {vehicle.lastUpdate}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="routes" className="mt-4">
                <div className="relative mb-4">
                  <Input placeholder="Search routes..." className="pl-10" />
                  <div className="absolute left-3 top-2.5">
                    <Search className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>

                <div className="space-y-2 max-h-[550px] overflow-y-auto pr-2">
                  {dummyRoutes.map((route) => (
                    <Card
                      key={route.id}
                      className={`hover:bg-muted/50 cursor-pointer ${
                        selectedRoute?.id === route.id
                          ? "ring-2 ring-primary"
                          : ""
                      }`}
                      onClick={() => handleRouteClick(route)}
                    >
                      <CardContent className="p-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center gap-1">
                              <Route className="h-4 w-4 text-muted-foreground" />
                              <span className="font-medium">{route.id}</span>
                            </div>
                            <div className="text-sm mt-1">{route.name}</div>
                          </div>
                          <Badge
                            className={`${getRouteStatusColor(route.status)}`}
                          >
                            {route.status}
                          </Badge>
                        </div>
                        <div className="mt-2 text-sm">
                          <div className="flex items-center">
                            <MapPin className="h-3 w-3 text-muted-foreground mr-1" />
                            {route.origin.name}
                            <ArrowRight className="h-3 w-3 mx-1" />
                            {route.destination.name}
                          </div>
                          <div className="flex items-center mt-1">
                            <Truck className="h-3 w-3 text-muted-foreground mr-1" />
                            {route.assignedVehicleId} • {route.assignedDriver}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MapPage;
