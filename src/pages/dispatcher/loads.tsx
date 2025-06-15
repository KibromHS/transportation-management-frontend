import React, { useEffect, useState } from "react";
import ThemeAwareDashboardLayout from "@/components/layout/ThemeAwareDashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Package,
  Search,
  Filter,
  ArrowUpDown,
  MapPin,
  ArrowRight,
  Calendar,
  Clock,
  Truck,
  Plus,
  FileText,
} from "lucide-react";
import CreateDispatchModal from "@/components/dispatch/CreateDispatchModal";
import { deleteRequest, getRequest, postRequest } from "@/api/request";
import { LoadingButton } from "@/components/ui/loading-button";
import LoadingSpinner from "@/components/common/LoadingSpinner";

interface Facility {
  name: string;
  address_line1: string;
  location: string;
}

interface Load {
  id: number;
  reference_number: string;
  status: string;
  total_charges: string;
  trip: {
    id: number;
    status: string;
  };
  pickups: {
    date_from: string;
    date_to: string;
    time_from: string;
    time_to: string;
    weight_unit_of_measeurement: string;
    length_unit_of_measeurement: string;
    freight: {
      pieces: number;
      weight: number;
    }[];
    facility: Facility;
  }[];
  deliveries: {
    date_from: string;
    date_to: string;
    time_from: string;
    time_to: string;
    facility: Facility;
  }[];
  driver: {
    id: number;
    name: string;
    email: string;
    phone: string;
    truck: {
      id: number;
      company?: {
        id: number;
        name: string;
      };
      truck_types: {
        name: string;
      }[];
    };
  };
}

const LoadsPage = () => {
  // State for modal
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [activeLoads, setActiveLoads] = useState<Load[]>([]);
  const [completedLoads, setCompletedLoads] = useState<Load[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchLoads = async () => {
    setLoading(true);
    const response = await getRequest(`${import.meta.env.VITE_API_URL}/loads`);
    const data = await response.json();
    const loads: Load[] = data.data;

    if (response.ok) {
      setActiveLoads(loads.filter((d) => d.trip.status != "DeliveryConfirmed"));
      setCompletedLoads(
        loads.filter((d) => d.trip.status == "DeliveryConfirmed")
      );

      console.log(activeLoads);
    } else {
      console.error("");
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchLoads();
  }, []);

  // Mock loads data
  //   const activeLoads = [
  //     {
  //       id: "LD-1001",
  //       title: "Electronics Shipment",
  //       origin: "Chicago, IL",
  //       destination: "Detroit, MI",
  //       distance: "281 miles",
  //       weight: "5,200 lbs",
  //       pickupTime: "Today, 2:00 PM",
  //       deliveryTime: "Tomorrow, 10:00 AM",
  //       status: "assigned",
  //       driver: "John Doe",
  //       truck: "TRK-1001",
  //     },
  //     {
  //       id: "LD-1002",
  //       title: "Furniture Delivery",
  //       origin: "Detroit, MI",
  //       destination: "Cleveland, OH",
  //       distance: "169 miles",
  //       weight: "3,800 lbs",
  //       pickupTime: "Tomorrow, 9:00 AM",
  //       deliveryTime: "Tomorrow, 3:00 PM",
  //       status: "in_transit",
  //       driver: "Mike Smith",
  //       truck: "TRK-1002",
  //     },
  //     {
  //       id: "LD-1003",
  //       title: "Medical Supplies",
  //       origin: "Indianapolis, IN",
  //       destination: "Columbus, OH",
  //       distance: "175 miles",
  //       weight: "2,100 lbs",
  //       pickupTime: "Jul 18, 8:00 AM",
  //       deliveryTime: "Jul 18, 2:00 PM",
  //       status: "pending",
  //       driver: "Unassigned",
  //       truck: "Unassigned",
  //     },
  //   ];

  //   const pendingLoads = [
  //     {
  //       id: "LD-1004",
  //       title: "Auto Parts",
  //       origin: "Columbus, OH",
  //       destination: "Cincinnati, OH",
  //       distance: "107 miles",
  //       weight: "4,500 lbs",
  //       pickupTime: "Jul 19, 10:00 AM",
  //       deliveryTime: "Jul 19, 2:00 PM",
  //       status: "pending",
  //       driver: "Unassigned",
  //       truck: "Unassigned",
  //     },
  //     {
  //       id: "LD-1005",
  //       title: "Retail Goods",
  //       origin: "Chicago, IL",
  //       destination: "Milwaukee, WI",
  //       distance: "92 miles",
  //       weight: "6,200 lbs",
  //       pickupTime: "Jul 20, 9:00 AM",
  //       deliveryTime: "Jul 20, 1:00 PM",
  //       status: "pending",
  //       driver: "Unassigned",
  //       truck: "Unassigned",
  //     },
  //   ];

  //   const completedLoads = [
  //     {
  //       id: "LD-0998",
  //       title: "Construction Materials",
  //       origin: "St. Louis, MO",
  //       destination: "Indianapolis, IN",
  //       distance: "243 miles",
  //       weight: "8,500 lbs",
  //       pickupTime: "Jul 12, 8:00 AM",
  //       deliveryTime: "Jul 12, 5:00 PM",
  //       status: "completed",
  //       driver: "Sarah Williams",
  //       truck: "TRK-1004",
  //       completedAt: "Jul 12, 4:45 PM",
  //     },
  //     {
  //       id: "LD-0999",
  //       title: "Food Products",
  //       origin: "Minneapolis, MN",
  //       destination: "Milwaukee, WI",
  //       distance: "337 miles",
  //       weight: "7,200 lbs",
  //       pickupTime: "Jul 10, 7:00 AM",
  //       deliveryTime: "Jul 10, 6:00 PM",
  //       status: "completed",
  //       driver: "Ryan Johnson",
  //       truck: "TRK-1003",
  //       completedAt: "Jul 10, 5:30 PM",
  //     },
  //   ];

  // Get status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "assigned":
        return <Badge className="bg-blue-500">Assigned</Badge>;
      case "in_transit":
        return <Badge className="bg-green-500">In Transit</Badge>;
      case "pending":
        return <Badge variant="outline">Pending</Badge>;
      case "completed":
        return <Badge variant="secondary">Completed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  // Handle new load creation
  const handleCreateLoad = async (data1: any, data2: any) => {
    setLoading(true);
    const form1Data = {
      // Step 1: General
      booked_by: data1.booked_by,
      customer_company_id: data1.customer_company_id,
      reference_number: data1.reference_number,
      total_charges: data1.total_charges,
      currency: data1.currency,
    };

    const form2Data = {
      pickups: [
        {
          facility_id: data2.pickup_facility_id,
          priority: data2.pickup_priority,
          timezone: data2.pickup_timezone,
          date_from: data2.pickup_date_from,
          date_to: data2.pickup_date_to,
          time_from: data2.pickup_time_from,
          time_to: data2.pickup_time_to,
          additional_info: data2.pickup_additional_info,
          commodity: data2.pickup_commodity,
        },
      ],

      freights: [
        {
          pieces: data2.pieces,
          weight: data2.weight,
          length: data2.length,
          width: data2.width,
          height: data2.height,
          stackable: data2.stackable,
          hazmat: data2.hazmat,
        },
      ],

      deliveries: [
        {
          facility_id: data2.delivery_facility_id,
          priority: data2.delivery_priority,
          timezone: data2.delivery_timezone,
          time_from: data2.delivery_time_from,
          time_to: data2.delivery_time_to,
          date_from: data2.delivery_date_from,
          date_to: data2.delivery_date_to,
          additional_info: data2.delivery_additional_info,
        },
      ],

      checkin_company_id: data2.checkin_company_id,
      driver_id: data2.driver_id,
      truck_type: data2.truck_type,
      trailer_type: data2.trailer_type,
      equipment: data2.equipment,
      general_notes: data2.general_notes,
      weight_unit_of_measeurement: data2.weight_unit_of_measeurement,
      length_unit_of_measeurement: data2.length_unit_of_measeurement,
    };

    setLoading(true);

    const response1 = await postRequest(
      `${import.meta.env.VITE_API_URL}/loads`,
      form1Data
    );
    const data = await response1.json();
    if (response1.ok) {
      const loadId = data.load;
      const response2 = await postRequest(
        `${import.meta.env.VITE_API_URL}/loads/${loadId}/details`,
        form2Data
      );
      const data2 = await response2.json();
      if (response2.ok) {
        console.log("Load added successfully");
        setIsCreateModalOpen(false);
        fetchLoads();
        getRequest(`${import.meta.env.VITE_API_URL}/loads/${loadId}/pdf`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.blob();
          })
          .then((blob) => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `load_${form1Data.reference_number}.pdf`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
          })
          .catch((error) => {
            console.error("PDF download failed:", error);
          });
      } else {
        console.error("failed to create load");
        console.error(response2.body);
        const deleteResponse = await deleteRequest(
          `${import.meta.env.VITE_API_URL}/loads/${loadId}`
        );
        setLoading(false);
        throw new Error(data2.message);
      }
    } else {
      console.error("failed to initiate load");
      setLoading(false);
      throw new Error(data.message);
    }

    setLoading(false);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <ThemeAwareDashboardLayout pageTitle="Load Management">
      <div className="w-full h-full">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Loads</h1>
          <Button onClick={() => setIsCreateModalOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Create New Load
          </Button>
        </div>

        {/* <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Input placeholder="Search loads..." className="w-full pl-10" />
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
            <Button variant="outline">
              <FileText className="h-4 w-4 mr-2" /> Export
            </Button>
          </div>
        </div> */}

        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 max-w-md">
            <TabsTrigger value="active">Active Loads</TabsTrigger>
            {/* <TabsTrigger value="pending">Pending Loads</TabsTrigger> */}
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          <TabsContent value="active">
            <Card>
              <CardHeader>
                <CardTitle>Active Loads</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeLoads.length == 0 ? (
                    <p>No Loads Added</p>
                  ) : (
                    activeLoads.map((load) => (
                      <div
                        key={load.id}
                        className="border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline">{load.id}</Badge>
                              {getStatusBadge(load.status)}
                            </div>
                            {/* <h3 className="font-medium mt-2">{load.title}</h3> */}
                            <div className="mt-2 flex items-center text-sm">
                              <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                              <span className="font-medium">
                                {load.pickups[0].facility.address_line1},
                                {load.pickups[0].facility.location}
                              </span>
                              <ArrowRight className="h-4 w-4 mx-2" />
                              <span className="font-medium">
                                {load.deliveries[0].facility.address_line1},
                                {load.deliveries[0].facility.location}
                              </span>
                            </div>
                            <div className="mt-1 text-sm text-muted-foreground">
                              {load.pickups[0].freight[0].weight}{" "}
                              {load.pickups[0].weight_unit_of_measeurement}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center text-sm">
                              <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                              <span>Pickup: {load.pickups[0].date_to}</span>
                            </div>
                            <div className="flex items-center text-sm mt-1">
                              <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                              <span>
                                Delivery: {load.deliveries[0].date_to}
                              </span>
                            </div>
                          </div>
                        </div>
                        <Separator className="my-3" />
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">
                                {load.driver?.name}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Truck className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">
                                TRK-{load.driver?.truck?.id}
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              Track
                            </Button>
                            <Button variant="outline" size="sm">
                              Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* <TabsContent value="pending">
            <Card>
              <CardHeader>
                <CardTitle>Pending Loads</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingLoads.map((load) => (
                    <div
                      key={load.id}
                      className="border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">{load.id}</Badge>
                            {getStatusBadge(load.status)}
                          </div>
                          <h3 className="font-medium mt-2">{load.title}</h3>
                          <div className="mt-2 flex items-center text-sm">
                            <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span className="font-medium">{load.origin}</span>
                            <ArrowRight className="h-4 w-4 mx-2" />
                            <span className="font-medium">
                              {load.destination}
                            </span>
                          </div>
                          <div className="mt-1 text-sm text-muted-foreground">
                            {load.distance} • {load.weight}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-sm">
                            <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span>Pickup: {load.pickupTime}</span>
                          </div>
                          <div className="flex items-center text-sm mt-1">
                            <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span>Delivery: {load.deliveryTime}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end mt-4 gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button size="sm">Assign</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent> */}

          <TabsContent value="completed">
            <Card>
              <CardHeader>
                <CardTitle>Completed Loads</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {completedLoads.length == 0 ? (
                    <p>No Loads completed</p>
                  ) : (
                    completedLoads.map((load) => (
                      <div
                        key={load.id}
                        className="border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline">{load.id}</Badge>
                              {getStatusBadge(load.status)}
                            </div>
                            {/* <h3 className="font-medium mt-2">{load.title}</h3> */}
                            <div className="mt-2 flex items-center text-sm">
                              <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                              <span className="font-medium">
                                {load.pickups[0].facility.address_line1},
                                {load.pickups[0].facility.location}
                              </span>
                              <ArrowRight className="h-4 w-4 mx-2" />
                              <span className="font-medium">
                                {load.deliveries[0].facility.address_line1},
                                {load.deliveries[0].facility.location}
                              </span>
                            </div>
                            <div className="mt-1 text-sm text-muted-foreground">
                              {load.pickups[0].freight[0].weight}{" "}
                              {load.pickups[0].weight_unit_of_measeurement}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center text-sm">
                              <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                              <span>
                                Completed: {load.deliveries[0].date_to}
                              </span>
                            </div>
                            <div className="flex items-center text-sm mt-1">
                              <Truck className="h-4 w-4 mr-1 text-muted-foreground" />
                              <span>
                                TRK-{load.driver?.truck?.id} •{" "}
                                {load.driver?.name}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-end mt-4">
                          <Button variant="outline" size="sm">
                            View Report
                          </Button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Create Dispatch Modal */}
        <CreateDispatchModal
          open={isCreateModalOpen}
          onOpenChange={setIsCreateModalOpen}
          onSubmit={handleCreateLoad}
        />
      </div>
    </ThemeAwareDashboardLayout>
  );
};

export default LoadsPage;

const User = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
