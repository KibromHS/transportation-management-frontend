import React, { useEffect, useState } from "react";
import ThemeAwareDashboardLayout from "@/components/layout/ThemeAwareDashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  Filter,
  Plus,
  MoreVertical,
  Phone,
  Mail,
  MapPin,
  Building,
  Truck,
  FileText,
  DollarSign,
  Calendar,
  CheckCircle,
  XCircle,
  Warehouse,
  Landmark,
  Users,
} from "lucide-react";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import { deleteRequest, getRequest, postRequest } from "@/api/request";
import AddCarrierForm from "./AddCarrierForm";
import AddFacilityForm from "./AddFacilityForm";

interface CarrierModel {
  id: number;
  name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  address_line1: string;
  customer_type: string;
}

interface FacilityModel {
  id: number;
  name: string;
  location: string;
  address_line1: string;
}

const ContragentsPage = () => {
  const [facilities, setFacilities] = useState<FacilityModel[]>([]);
  const [carriers, setCarriers] = useState<CarrierModel[]>([]);
  const [loading, setLoading] = useState(false);
  const [showAddFacility, setShowAddFacility] = useState(false);
  const [showAddCarrier, setShowAddCarrier] = useState(false);

  useEffect(() => {
    const fetchCarriers = async () => {
      const response = await getRequest(
        `${import.meta.env.VITE_API_URL}/companies`
      );
      const data = await response.json();
      if (response.ok) {
        setCarriers(data.data);
      } else {
        console.error("Failed to fetch carriers:", data);
      }
    };

    const fetchFacilities = async () => {
      const response = await getRequest(
        `${import.meta.env.VITE_API_URL}/facilities`
      );
      const data = await response.json();
      if (response.ok) {
        setFacilities(data.data);
      } else {
        console.error("Failed to fetch facilities:", data);
      }
    };

    fetchCarriers();
    fetchFacilities();
  }, []);

  const handleAddCarrier = async (data: any) => {
    setLoading(true);
    const response = await postRequest(
      `${import.meta.env.VITE_API_URL}/companies`,
      data
    );
    if (response.ok) {
      window.location.reload();
    } else {
      console.error("Failed to add carrier:", response);
    }
    setLoading(false);
  };

  const handleAddFacility = async (data: any) => {
    setLoading(true);
    const response = await postRequest(
      `${import.meta.env.VITE_API_URL}/facilities`,
      data
    );
    if (response.ok) {
      window.location.reload();
    } else {
      console.error("Failed to add facility:", response);
    }
    setLoading(false);
  };

  const handleCarrierDelete = async (carrierId: number) => {
    setLoading(true);
    const response = await deleteRequest(
      `${import.meta.env.VITE_API_URL}/companies/${carrierId}`
    );
    if (response.ok) {
      window.location.reload();
    } else {
      console.error("Failed to delete company:", response);
    }
    setLoading(false);
  };

  const handleFacilityDelete = async (facilityId: number) => {
    setLoading(true);
    const response = await deleteRequest(
      `${import.meta.env.VITE_API_URL}/facilities/${facilityId}`
    );
    if (response.ok) {
      window.location.reload();
    } else {
      console.error("Failed to delete facility:", response);
    }
    setLoading(false);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  // Mock data for different contragent types
  // const carriers = [
  //   {
  //     id: "CAR-101",
  //     name: "FastTrack Logistics",
  //     type: "carrier",
  //     logo: "https://api.dicebear.com/7.x/initials/svg?seed=FL",
  //     contact: "Robert Johnson",
  //     phone: "(555) 123-4567",
  //     email: "robert@fasttracklogistics.com",
  //     location: "Chicago, IL",
  //     status: "active",
  //     fleetSize: 25,
  //     rating: 4.8,
  //     lastDelivery: "Yesterday",
  //   },
  //   {
  //     id: "CAR-102",
  //     name: "Midwest Express",
  //     type: "carrier",
  //     logo: "https://api.dicebear.com/7.x/initials/svg?seed=ME",
  //     contact: "Sarah Davis",
  //     phone: "(555) 234-5678",
  //     email: "sarah@midwestexpress.com",
  //     location: "Detroit, MI",
  //     status: "active",
  //     fleetSize: 18,
  //     rating: 4.6,
  //     lastDelivery: "Today",
  //   },
  // ];

  // const customers = [
  //   {
  //     id: "CUS-101",
  //     name: "TechGlobal Industries",
  //     type: "customer",
  //     logo: "https://api.dicebear.com/7.x/initials/svg?seed=TG",
  //     contact: "Michael Brown",
  //     phone: "(555) 345-6789",
  //     email: "michael@techglobal.com",
  //     location: "San Francisco, CA",
  //     status: "active",
  //     totalOrders: 42,
  //     lastOrder: "2 days ago",
  //     accountValue: "$125,000",
  //   },
  //   {
  //     id: "CUS-102",
  //     name: "Retail Solutions Inc",
  //     type: "customer",
  //     logo: "https://api.dicebear.com/7.x/initials/svg?seed=RS",
  //     contact: "Jennifer Smith",
  //     phone: "(555) 456-7890",
  //     email: "jennifer@retailsolutions.com",
  //     location: "New York, NY",
  //     status: "active",
  //     totalOrders: 28,
  //     lastOrder: "Yesterday",
  //     accountValue: "$87,500",
  //   },
  // ];

  // const facilities = [
  //   {
  //     id: "FAC-101",
  //     name: "Central Distribution Center",
  //     type: "facility",
  //     logo: "https://api.dicebear.com/7.x/initials/svg?seed=CD",
  //     contact: "David Wilson",
  //     phone: "(555) 567-8901",
  //     email: "david@centraldistribution.com",
  //     location: "Indianapolis, IN",
  //     status: "active",
  //     facilityType: "Warehouse",
  //     capacity: "50,000 sq ft",
  //     dockDoors: 12,
  //   },
  //   {
  //     id: "FAC-102",
  //     name: "Midwest Fulfillment Hub",
  //     type: "facility",
  //     logo: "https://api.dicebear.com/7.x/initials/svg?seed=MF",
  //     contact: "Emily Taylor",
  //     phone: "(555) 678-9012",
  //     email: "emily@midwestfulfillment.com",
  //     location: "Columbus, OH",
  //     status: "active",
  //     facilityType: "Fulfillment Center",
  //     capacity: "75,000 sq ft",
  //     dockDoors: 18,
  //   },
  // ];

  // const factoringCompanies = [
  //   {
  //     id: "FCT-101",
  //     name: "Capital Factoring Solutions",
  //     type: "factoring",
  //     logo: "https://api.dicebear.com/7.x/initials/svg?seed=CF",
  //     contact: "Alex Turner",
  //     phone: "(555) 789-0123",
  //     email: "alex@capitalfactoring.com",
  //     location: "Chicago, IL",
  //     status: "active",
  //     clientCount: 45,
  //     averageRate: "2.5%",
  //     paymentTerms: "Net-30",
  //   },
  //   {
  //     id: "FCT-102",
  //     name: "Express Financial Services",
  //     type: "factoring",
  //     logo: "https://api.dicebear.com/7.x/initials/svg?seed=EF",
  //     contact: "Jessica Brown",
  //     phone: "(555) 890-1234",
  //     email: "jessica@expressfinancial.com",
  //     location: "Atlanta, GA",
  //     status: "active",
  //     clientCount: 32,
  //     averageRate: "2.8%",
  //     paymentTerms: "Net-45",
  //   },
  // ];

  // Get status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500">Active</Badge>;
      case "inactive":
        return <Badge variant="outline">Inactive</Badge>;
      case "pending":
        return <Badge className="bg-yellow-500">Pending</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  // Get type icon
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "carrier":
        return <Truck className="h-5 w-5 text-blue-500" />;
      case "customer":
        return <Users className="h-5 w-5 text-green-500" />;
      case "facility":
        return <Warehouse className="h-5 w-5 text-yellow-500" />;
      case "factoring":
        return <Landmark className="h-5 w-5 text-purple-500" />;
      default:
        return <Building className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <ThemeAwareDashboardLayout pageTitle="Contragents">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Contragents</h1>
          {/* <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Contragent
          </Button> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Carriers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{carriers.length}</div>
              <p className="text-xs text-muted-foreground">
                Active transport partners
              </p>
            </CardContent>
          </Card>
          {/* <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Customers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{customers.length}</div>
              <p className="text-xs text-muted-foreground">
                Active shipping clients
              </p>
            </CardContent>
          </Card> */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Facilities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{facilities.length}</div>
              <p className="text-xs text-muted-foreground">
                Warehouses & distribution centers
              </p>
            </CardContent>
          </Card>
          {/* <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Factoring</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {factoringCompanies.length}
              </div>
              <p className="text-xs text-muted-foreground">
                Financial service partners
              </p>
            </CardContent>
          </Card> */}
        </div>

        <div className="mb-6 flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search contragents..."
              className="pl-8"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        <Tabs defaultValue="carriers" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="carriers">Carriers</TabsTrigger>
            {/* <TabsTrigger value="customers">Customers</TabsTrigger> */}
            <TabsTrigger value="facilities">Facilities</TabsTrigger>
            {/* <TabsTrigger value="factoring">Factoring</TabsTrigger> */}
          </TabsList>

          <TabsContent value="carriers" className="mt-4">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold"></h1>
              <Button onClick={() => setShowAddCarrier(true)}>
                <Plus className="mr-2 h-4 w-4" />
                Add Carrier
              </Button>
            </div>
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Company</TableHead>
                      <TableHead>Contact</TableHead>
                      {/* <TableHead>Fleet Size</TableHead> */}
                      <TableHead>Location</TableHead>
                      <TableHead>Type</TableHead>
                      {/* <TableHead>Rating</TableHead>
                      <TableHead>Status</TableHead> */}
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {carriers.map((carrier) => (
                      <TableRow key={carrier.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                              {getTypeIcon("carrier")}
                            </div>
                            <div>
                              <div className="font-medium">{carrier.name}</div>
                              <div className="text-sm text-muted-foreground">
                                CMP-{carrier.id}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">{carrier.email}</div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Phone className="h-3 w-3" />
                            {carrier.phone}
                          </div>
                        </TableCell>
                        <TableCell>{carrier.address_line1}</TableCell>
                        <TableCell>{carrier.customer_type}</TableCell>
                        {/* <TableCell>{carrier.rating}/5.0</TableCell>
                        <TableCell>{getStatusBadge(carrier.status)}</TableCell> */}
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              {/* <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Edit</DropdownMenuItem> */}
                              <DropdownMenuItem
                                onClick={() => handleCarrierDelete(carrier.id)}
                              >
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* <TabsContent value="customers" className="mt-4">
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Company</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Orders</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {customers.map((customer) => (
                      <TableRow key={customer.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                              {getTypeIcon(customer.type)}
                            </div>
                            <div>
                              <div className="font-medium">{customer.name}</div>
                              <div className="text-sm text-muted-foreground">
                                {customer.id}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">{customer.contact}</div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Mail className="h-3 w-3" />
                            {customer.email}
                          </div>
                        </TableCell>
                        <TableCell>{customer.totalOrders} orders</TableCell>
                        <TableCell>{customer.accountValue}</TableCell>
                        <TableCell>{getStatusBadge(customer.status)}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent> */}

          <TabsContent value="facilities" className="mt-4">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold"></h1>
              <Button onClick={() => setShowAddFacility(true)}>
                <Plus className="mr-2 h-4 w-4" />
                Add Facility
              </Button>
            </div>
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Facility</TableHead>
                      <TableHead>Contact</TableHead>
                      {/* <TableHead>Type</TableHead> */}
                      {/* <TableHead>Capacity</TableHead>
                      <TableHead>Status</TableHead> */}
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {facilities.map((facility) => (
                      <TableRow key={facility.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                              {getTypeIcon("facility")}
                            </div>
                            <div>
                              <div className="font-medium">{facility.name}</div>
                              <div className="text-sm text-muted-foreground">
                                FAC-{facility.id}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">
                            {facility.address_line1}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            {facility.location}
                          </div>
                        </TableCell>
                        {/* <TableCell>Facility</TableCell> */}
                        {/* <TableCell>{facility.capacity}</TableCell>
                        <TableCell>{getStatusBadge(facility.status)}</TableCell> */}
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              {/* <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Edit</DropdownMenuItem> */}
                              <DropdownMenuItem
                                onClick={() =>
                                  handleFacilityDelete(facility.id)
                                }
                              >
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* <TabsContent value="factoring" className="mt-4">
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Company</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Clients</TableHead>
                      <TableHead>Rate</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {factoringCompanies.map((company) => (
                      <TableRow key={company.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                              {getTypeIcon(company.type)}
                            </div>
                            <div>
                              <div className="font-medium">{company.name}</div>
                              <div className="text-sm text-muted-foreground">
                                {company.id}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">{company.contact}</div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Phone className="h-3 w-3" />
                            {company.phone}
                          </div>
                        </TableCell>
                        <TableCell>{company.clientCount} clients</TableCell>
                        <TableCell>{company.averageRate}</TableCell>
                        <TableCell>{getStatusBadge(company.status)}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent> */}
        </Tabs>

        {showAddCarrier && (
          <AddCarrierForm
            onOpenChange={(value) => setShowAddCarrier(value)}
            onSave={handleAddCarrier}
            open={true}
          />
        )}
        {showAddFacility && (
          <AddFacilityForm
            onOpenChange={(value) => setShowAddFacility(value)}
            onSave={handleAddFacility}
            open={true}
          />
        )}
      </div>
    </ThemeAwareDashboardLayout>
  );
};

export default ContragentsPage;
