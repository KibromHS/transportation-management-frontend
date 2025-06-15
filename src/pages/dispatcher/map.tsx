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

const libraries: ("places" | "drawing" | "geometry")[] = ["places", "geometry"];

// Define interfaces for your data (Keep these as they are correct)
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

// Map configuration (Keep these as they are correct)
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

  // State for real data
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [routes, setRoutes] = useState<RouteData[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(true); // New loading state for data
  const [dataError, setDataError] = useState<string | null>(null); // New error state for data fetching

  // Google Maps API loading
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY as string,
    libraries: libraries,
  });

  const mapRef = useRef<google.maps.Map | null>(null);

  const onLoad = useCallback(
    function callback(map: google.maps.Map) {
      mapRef.current = map;
      // Optionally set initial center based on first vehicle if available
      if (vehicles.length > 0) {
        // Use the 'vehicles' state here
        setMapCenter(vehicles[0].currentLocation);
      }
    },
    [vehicles]
  ); // Dependency on 'vehicles' to update center when data loads

  const onUnmount = useCallback(function callback(map: google.maps.Map) {
    mapRef.current = null;
  }, []);

  // --- Data Fetching Effect ---
  useEffect(() => {
    const fetchRealData = async () => {
      setIsLoadingData(true);
      setDataError(null);
      try {
        // --- Replace these with your actual API calls ---
        // Example: Fetch vehicles
        const vehiclesResponse = await fetch("/api/vehicles"); // Replace with your actual API endpoint
        if (!vehiclesResponse.ok) {
          throw new Error(`HTTP error! status: ${vehiclesResponse.status}`);
        }
        const vehiclesData: Vehicle[] = await vehiclesResponse.json();
        setVehicles(vehiclesData);

        // Example: Fetch routes
        const routesResponse = await fetch("/api/routes"); // Replace with your actual API endpoint
        if (!routesResponse.ok) {
          throw new Error(`HTTP error! status: ${routesResponse.status}`);
        }
        const routesData: RouteData[] = await routesResponse.json();
        setRoutes(routesData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setDataError(
          "Failed to load vehicle and route data. Please try again."
        );
      } finally {
        setIsLoadingData(false);
      }
    };

    fetchRealData(); // Call the fetch function

    // You might want to set up polling for real-time updates:
    // const interval = setInterval(fetchRealData, 30000); // Refresh every 30 seconds
    // return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Empty dependency array means this runs once on mount

  // Handler for vehicle marker click
  const handleVehicleClick = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setSelectedRoute(null); // Close route info window if open
    setMapCenter(vehicle.currentLocation); // Center map on selected vehicle
  };

  // Handler for route polyline click
  const handleRouteClick = (route: RouteData) => {
    setSelectedRoute(route);
    setSelectedVehicle(null); // Close vehicle info window if open
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
      case "Offline": // Combining these as per original styling logic
      default:
        return "bg-gray-500"; // Fallback for undefined statuses
    }
  };

  // Marker icon utility (ensure this uses `window.google.maps.SymbolPath` directly)
  const getMarkerIcon = (status: Vehicle["status"]) => {
    let color = "#6B7280"; // Default to gray
    switch (status) {
      case "In Transit":
        color = "#22C55E"; // green-500
        break;
      case "Available":
        color = "#3B82F6"; // blue-500
        break;
      case "Maintenance":
        color = "#F59E0B"; // yellow-500
        break;
      case "Offline":
        color = "#6B7280"; // gray-500
        break;
    }

    if (
      !window.google ||
      !window.google.maps ||
      !window.google.maps.SymbolPath
    ) {
      // Fallback or error handling if Google Maps API or SymbolPath is not yet loaded
      return { path: "M 0,0 0,0" }; // A tiny, invisible path
    }

    return {
      path: window.google.maps.SymbolPath.CIRCLE, // Using SymbolPath
      fillColor: color,
      fillOpacity: 0.9,
      strokeColor: "#FFF", // White border for better visibility
      strokeWeight: 2,
      scale: 8, // Size of the marker
    };
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

  // Display loading indicator for data or error if fetching fails
  if (isLoadingData) {
    return (
      <DashboardLayout>
        <div className="p-6">
          <Card className="h-[700px] flex items-center justify-center">
            <CardContent>
              <h3 className="text-lg font-medium">Loading Data...</h3>
              <p className="text-sm text-muted-foreground">
                Fetching vehicle and route information.
              </p>
            </CardContent>
          </Card>
        </div>
      </DashboardLayout>
    );
  }

  if (dataError) {
    return (
      <DashboardLayout>
        <div className="p-6">
          <Card className="h-[700px] flex items-center justify-center bg-red-50">
            <CardContent>
              <h3 className="text-lg font-medium text-red-700">Error!</h3>
              <p className="text-sm text-red-600">{dataError}</p>
            </CardContent>
          </Card>
        </div>
      </DashboardLayout>
    );
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
                    {/* Vehicle Markers - Now using 'vehicles' state */}
                    {vehicles.map((vehicle) => (
                      <MarkerF
                        key={vehicle.id}
                        position={vehicle.currentLocation}
                        onClick={() => handleVehicleClick(vehicle)}
                        icon={getMarkerIcon(vehicle.status)} // Using the updated icon function
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

                    {/* Route Polylines - Now using 'routes' state */}
                    {routes.map((route) => (
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

                    {/* InfoWindow for selected Route */}
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
                  {vehicles.map((vehicle) => (
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
                  {routes.map((route) => (
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
