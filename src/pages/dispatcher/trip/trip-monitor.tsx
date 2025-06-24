import React, { useEffect, useState } from "react";
import ThemeAwareDashboardLayout from "@/components/layout/ThemeAwareDashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import {
  Truck,
  MapPin,
  Search,
  Filter,
  ArrowUpDown,
  ArrowRight,
  Clock,
  Calendar,
  Route,
  AlertTriangle,
  CheckCircle,
  Activity,
  Map,
  MessageSquare,
  PhoneCall,
  FileText,
  FileCheck,
} from "lucide-react";
import axios from "axios";
import { getRequest, postRequest } from "@/api/request";

const TripMonitorPage = () => {
  const navigate = useNavigate();
  const [activeTrips, setActiveTrips] = useState([]);
  const [completedTrips, setCompletedTrips] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrips = () => {
      getRequest(`${import.meta.env.VITE_API_URL}/trips`)
        .then((res) => res.json())
        .then((rdata) => {
          const data = rdata.data;
          console.log("Trip data:", data);

          setActiveTrips(data.filter((d) => d.status !== "DeliveryConfirmed"));
          setCompletedTrips(
            data.filter((d) => d.status === "DeliveryConfirmed")
          );
        })
        .catch((err) => {
          console.error("Failed to fetch trips:", err);
        });
    };

    fetchTrips();

    const intervalId = setInterval(fetchTrips, 10000);

    return () => clearInterval(intervalId);
  }, []);

  // Get status badge
  const getStatusBadge = (status) => {
    switch (status) {
      case "Requested":
        return <Badge className="bg-blue-400">Requested</Badge>;
      case "Accepted":
        return <Badge className="bg-green-500">Driver Accepted</Badge>;
      case "PickupCheckedIn":
        return <Badge className="bg-blue-500">Pickup Checkin</Badge>;
      case "PickupConfirmed":
        return <Badge className="bg-yellow-500">Pickup Confirmed</Badge>;
      case "DeliveryCheckedIn":
        return <Badge className="bg-purple-500">Delivery Checkin</Badge>;
      case "DeliveryConfirmed":
        return <Badge className="bg-green-600">Delivery Confirmed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  // Calculate progress based on status
  const calculateProgress = (status) => {
    switch (status) {
      case "Requested":
        return 0;
      case "Accepted":
        return 20;
      case "PickupCheckedIn":
        return 40;
      case "PickupConfirmed":
        return 60;
      case "DeliveryCheckedIn":
        return 80;
      case "DeliveryConfirmed":
        return 100;
      default:
        return 0;
    }
  };

  const handleViewAllOnMapClick = () => {
    navigate("/map");
  };

  const confirmPickup = async (loadId, tripId) => {
    setLoading(true);
    const url = `${
      import.meta.env.VITE_API_URL
    }/trips/${loadId}/pickupconfirmed`;
    try {
      const response = await postRequest(url, { status: "PickupConfirmed" });
      if (response.ok) {
        setActiveTrips((prevTrips) =>
          prevTrips.map((trip) =>
            trip.id == tripId ? { ...trip, status: "PickupConfirmed" } : trip
          )
        );
      }
    } catch (e) {
      console.error("Failed to confirm pickup", e);
    } finally {
      setLoading(false);
    }
  };

  const confirmDelivery = async (loadId, tripId) => {
    setLoading(true);
    const url = `${
      import.meta.env.VITE_API_URL
    }/trips/${loadId}/deliveryconfirmed`;
    try {
      const response = await postRequest(url, { status: "DeliveryConfirmed" });
      if (response.ok) {
        const tripToMove = activeTrips.find((trip) => trip.id === tripId);
        if (tripToMove) {
          setActiveTrips((prevTrips) =>
            prevTrips.filter((trip) => trip.id !== tripId)
          );
          setCompletedTrips((prevTrips) => [
            ...prevTrips,
            { ...tripToMove, status: "DeliveryConfirmed" },
          ]);
        }
      }
    } catch (e) {
      console.error("Failed to confirm delivery", e);
    } finally {
      setLoading(false);
    }
  };

  // Render document viewer
  const DocumentViewer = ({ documentUrl, documentType }) => {
    if (!documentUrl) return null;

    return (
      <div className="mt-2">
        <div className="flex items-center mb-2">
          <FileText className="h-4 w-4 mr-2 text-blue-500" />
          <span className="font-medium">{documentType} Document</span>
        </div>
        <div className="border rounded-md p-2 bg-gray-50 dark:bg-gray-800">
          <a
            href={`${import.meta.env.VITE_FILE_URL}${documentUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline flex items-center"
          >
            <FileCheck className="h-4 w-4 mr-1" />
            View {documentType} Document
          </a>
        </div>
      </div>
    );
  };

  // Render action buttons based on trip status
  const renderStatusActions = (trip) => {
    switch (trip.status) {
      case "PickupCheckedIn":
        return (
          <div className="mt-3">
            <DocumentViewer
              documentUrl={trip.bolDocumentUrl}
              documentType="BOL"
            />
            <Button
              className="mt-3 bg-green-600 hover:bg-green-700"
              disabled={loading || !trip.bolDocumentUrl}
              onClick={() => confirmPickup(trip.load_id, trip.id)}
            >
              Confirm Pickup
            </Button>
          </div>
        );
      case "PickupConfirmed":
        return (
          <div className="mt-3">
            <DocumentViewer
              documentUrl={trip.bolDocumentUrl}
              documentType="BOL"
            />
          </div>
        );
      case "DeliveryCheckedIn":
        return (
          <div className="mt-3">
            <DocumentViewer
              documentUrl={trip.bolDocumentUrl}
              documentType="BOL"
            />
            <DocumentViewer
              documentUrl={trip.podDocumentUrl}
              documentType="POD"
            />
            <Button
              className="mt-3 bg-green-600 hover:bg-green-700"
              disabled={loading || !trip.podDocumentUrl}
              onClick={() => confirmDelivery(trip.load_id, trip.id)}
            >
              Confirm Delivery
            </Button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <ThemeAwareDashboardLayout pageTitle="Trip Monitor">
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Active Trips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Truck className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-2xl font-bold">{activeTrips.length}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Completed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Activity className="h-5 w-5 text-teal-500 mr-2" />
                <span className="text-2xl font-bold">
                  {completedTrips.length}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Input placeholder="Search trips..." className="w-full pl-10" />
            <div className="absolute left-3 top-2.5">
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" /> Filter
            </Button>
            <Button variant="outline">
              <ArrowUpDown className="h-4 w-4 mr-2" /> Sort
            </Button>
          </div>
        </div> */}

        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 max-w-md">
            <TabsTrigger value="active">Active Trips</TabsTrigger>
            <TabsTrigger value="completed">Completed Trips</TabsTrigger>
          </TabsList>

          <TabsContent value="active">
            <div className="space-y-6">
              {activeTrips.map((trip) => (
                <Card key={trip.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">Trip-{trip.id}</Badge>
                          <Badge variant="outline">Load-{trip.load_id}</Badge>
                          {getStatusBadge(trip.status)}
                        </div>
                        <CardTitle className="mt-2">
                          Load #{trip.load_id}
                        </CardTitle>
                      </div>
                      {/* <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Map className="h-4 w-4 mr-2" />
                          Track
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Contact
                        </Button>
                      </div> */}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <Truck className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span>
                            {trip.driver?.name || "No driver assigned"} •
                            {trip.driver?.truck
                              ? ` TRK-${trip.driver.truck.id}`
                              : " No truck"}
                          </span>
                        </div>

                        {/* Status-specific action area */}
                        {renderStatusActions(trip)}
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-sm font-medium text-muted-foreground">
                          Progress
                        </h3>
                        <Progress
                          value={calculateProgress(trip.status)}
                          className="h-2"
                        />
                        <div className="flex justify-between text-sm">
                          <span>
                            {calculateProgress(trip.status)}% Complete
                          </span>
                        </div>
                        <div className="mt-2">
                          <div className="text-sm">
                            <span className="text-muted-foreground">
                              Current Status:{" "}
                            </span>
                            <span className="font-medium">{trip.status}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Created
                            </p>
                            <p className="text-sm font-medium">
                              {new Date(trip.created_at).toLocaleString()}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Last Updated
                            </p>
                            <p className="text-sm font-medium">
                              {new Date(trip.updated_at).toLocaleString()}
                            </p>
                          </div>
                        </div>
                        <Separator className="my-2" />
                        <div className="flex justify-between items-center">
                          <div className="text-sm text-muted-foreground">
                            Driver Phone: {trip.driver?.phone || "N/A"}
                          </div>
                          {/* <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              <PhoneCall className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MessageSquare className="h-4 w-4" />
                            </Button>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {activeTrips.length === 0 && (
                <div className="text-center py-10">
                  <p className="text-muted-foreground">No active trips found</p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="completed">
            <div className="space-y-4">
              {completedTrips.map((trip) => (
                <Card key={trip.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">Trip-{trip.id}</Badge>
                          <Badge variant="outline">Load-{trip.load_id}</Badge>
                          {getStatusBadge(trip.status)}
                        </div>
                        <CardTitle className="mt-2">
                          Load #{trip.load_id}
                        </CardTitle>
                      </div>
                      <Button variant="outline" size="sm">
                        View Report
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center text-sm mt-2">
                          <Truck className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span>
                            {trip.driver?.name || "No driver assigned"} •
                            {trip.driver?.truck
                              ? ` TRK-${trip.driver.truck.id}`
                              : " No truck"}
                          </span>
                        </div>

                        <div className="mt-4 space-y-3">
                          <DocumentViewer
                            documentUrl={trip.bolDocumentUrl}
                            documentType="BOL"
                          />
                          <DocumentViewer
                            documentUrl={trip.podDocumentUrl}
                            documentType="POD"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Created
                            </p>
                            <p className="text-sm font-medium">
                              {new Date(trip.created_at).toLocaleString()}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Completed
                            </p>
                            <p className="text-sm font-medium">
                              {new Date(trip.updated_at).toLocaleString()}
                            </p>
                          </div>
                        </div>
                        <div className="mt-2 flex items-center">
                          <Badge className="bg-green-500">Completed</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {completedTrips.length === 0 && (
                <div className="text-center py-10">
                  <p className="text-muted-foreground">
                    No completed trips found
                  </p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </ThemeAwareDashboardLayout>
  );
};

export default TripMonitorPage;
