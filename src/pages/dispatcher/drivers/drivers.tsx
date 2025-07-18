import React, { useEffect } from "react";
import ThemeAwareDashboardLayout from "@/components/layout/ThemeAwareDashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
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
  User,
  Search,
  Filter,
  Plus,
  MoreVertical,
  Phone,
  Mail,
  MapPin,
  Truck,
  Clock,
  Calendar,
  FileText,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Star,
  Delete,
} from "lucide-react";
import {
  deleteRequest,
  getRequest,
  patchRequest,
  postRequest,
} from "@/api/request";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import AddDriverForm from "./AddDriverForm";
import AssignVehicleForm from "./AssignVehicleForm";
import { useAuthContext } from "@/context/AuthContext";

interface DriverModel {
  id: number;
  name: string;
  email: string;
  phone: string;
  is_active: boolean;
  is_available: boolean;
  truck: {
    id: number;
    address: string;
    city: string;
    state: string;
  };
}

const DriversPage = () => {
  const [activeDrivers, setActiveDrivers] = React.useState<DriverModel[]>([]);
  const [inactiveDrivers, setInactiveDrivers] = React.useState<DriverModel[]>(
    []
  );
  const [loading, setLoading] = React.useState(false);
  const [showAssignVehicle, setShowAssignVehicle] = React.useState(false);
  const [showAddDriver, setShowAddDriver] = React.useState(false);
  const [selectedDriver, setSelectedDriver] = React.useState<number | null>(
    null
  );
  const { user } = useAuthContext();

  const fetchDrivers = async () => {
    // setLoading(true);
    const response = await getRequest(
      `${import.meta.env.VITE_API_URL}/drivers`
    );
    const data = await response.json();

    if (response.ok) {
      const drivers: DriverModel[] = data.data;
      setActiveDrivers(drivers.filter((d) => d.is_active));
      setInactiveDrivers(drivers.filter((d) => !d.is_active));
    } else {
      console.error("Failed to fetch drivers:", data);
    }

    // setLoading(false);
  };

  useEffect(() => {
    fetchDrivers();
  }, []);

  const handleAddDriver = async (data: any) => {
    setLoading(true);
    const newDriver = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      language: data.language,
      citizenship: data.citizenship,
      address: data.address,
      password: data.password,
    };

    const response = await postRequest(
      `${import.meta.env.VITE_API_URL}/drivers`,
      newDriver
    );
    if (response.ok) {
      setLoading(false);
      setShowAddDriver(false);
      fetchDrivers();
      // window.location.reload();
    } else {
      console.error("Failed to add driver:", await response.json());
    }
    setLoading(false);
  };

  const handleAssignVehicle = async (data: any, driverId: number) => {
    setLoading(true);
    const response = await patchRequest(
      `${import.meta.env.VITE_API_URL}/drivers/${driverId}`,
      { truck_id: data.truck_id }
    );

    if (response.ok) {
      setLoading(false);
      setShowAssignVehicle(false);
      fetchDrivers();
      // window.location.reload();
    } else {
      console.error("Failed to assign vehicle:", await response.json());
      throw new Error("Failed to assign vehicle");
    }

    setLoading(false);
  };

  const handleDeactivateDriver = async (driverId: number) => {
    setLoading(true);
    const response = await patchRequest(
      `${import.meta.env.VITE_API_URL}/drivers/${driverId}`,
      { is_active: false }
    );
    if (response.ok) {
      setLoading(false);
      // window.location.reload();
      fetchDrivers();
    } else {
      console.error("Failed to deactivate user:", await response.json());
      throw new Error("Failed to deactivate driver");
    }
    setLoading(false);
  };

  const handleReactivateDriver = async (driverId: number) => {
    setLoading(true);
    const response = await patchRequest(
      `${import.meta.env.VITE_API_URL}/drivers/${driverId}`,
      { is_active: true }
    );
    if (response.ok) {
      setLoading(false);
      // window.location.reload();
      fetchDrivers();
    } else {
      console.error("Failed to reactivate user:", await response.json());
      throw new Error("Failed to reactivate driver");
    }
    setLoading(false);
  };

  const handleDeleteDriver = async (driverId: number) => {
    setLoading(true);
    const response = await deleteRequest(
      `${import.meta.env.VITE_API_URL}/drivers/${driverId}`
    );
    if (response.ok) {
      setLoading(false);
      // window.location.reload();
      fetchDrivers();
    } else {
      console.error("Failed to delete driver:", await response.json());
      setLoading(false);
      throw new Error("Failed to delete driver");
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  // Mock drivers data
  // const activeDrivers = [
  //   {
  //     id: "DRV-101",
  //     name: "John Doe",
  //     avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
  //     phone: "(555) 123-4567",
  //     email: "john.doe@example.com",
  //     location: "Chicago, IL",
  //     status: "active",
  //     currentVehicle: "TRK-1001",
  //     rating: 4.8,
  //     experience: "3 years",
  //     licensePlate: "IL-12345",
  //     lastActive: "10 minutes ago",
  //   },
  //   {
  //     id: "DRV-102",
  //     name: "Mike Smith",
  //     avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
  //     phone: "(555) 234-5678",
  //     email: "mike.smith@example.com",
  //     location: "Detroit, MI",
  //     status: "on_delivery",
  //     currentVehicle: "TRK-1002",
  //     rating: 4.7,
  //     experience: "5 years",
  //     licensePlate: "MI-67890",
  //     lastActive: "5 minutes ago",
  //   },
  //   {
  //     id: "DRV-103",
  //     name: "Ryan Johnson",
  //     avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ryan",
  //     phone: "(555) 345-6789",
  //     email: "ryan.johnson@example.com",
  //     location: "Indianapolis, IN",
  //     status: "on_delivery",
  //     currentVehicle: "TRK-1003",
  //     rating: 4.6,
  //     experience: "2 years",
  //     licensePlate: "IN-54321",
  //     lastActive: "15 minutes ago",
  //   },
  //   {
  //     id: "DRV-104",
  //     name: "Sarah Williams",
  //     avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
  //     phone: "(555) 456-7890",
  //     email: "sarah.williams@example.com",
  //     location: "Columbus, OH",
  //     status: "active",
  //     currentVehicle: "TRK-1004",
  //     rating: 4.9,
  //     experience: "7 years",
  //     licensePlate: "OH-98765",
  //     lastActive: "1 hour ago",
  //   },
  //   {
  //     id: "DRV-105",
  //     name: "Dan Brown",
  //     avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=dan",
  //     phone: "(555) 567-8901",
  //     email: "dan.brown@example.com",
  //     location: "St. Louis, MO",
  //     status: "inactive",
  //     currentVehicle: "TRK-1005",
  //     rating: 4.5,
  //     experience: "4 years",
  //     licensePlate: "MO-13579",
  //     lastActive: "3 hours ago",
  //   },
  // ];

  // const inactiveDrivers = [
  //   {
  //     id: "DRV-106",
  //     name: "Emily Davis",
  //     avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
  //     phone: "(555) 678-9012",
  //     email: "emily.davis@example.com",
  //     location: "Milwaukee, WI",
  //     status: "on_leave",
  //     currentVehicle: "Unassigned",
  //     rating: 4.7,
  //     experience: "3 years",
  //     licensePlate: "WI-24680",
  //     lastActive: "2 days ago",
  //   },
  //   {
  //     id: "DRV-107",
  //     name: "Alex Turner",
  //     avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
  //     phone: "(555) 789-0123",
  //     email: "alex.turner@example.com",
  //     location: "Minneapolis, MN",
  //     status: "terminated",
  //     currentVehicle: "Unassigned",
  //     rating: 3.9,
  //     experience: "1 year",
  //     licensePlate: "MN-97531",
  //     lastActive: "1 month ago",
  //   },
  // ];

  // Get status badge
  const getStatusBadge = (available: boolean) => {
    if (available) {
      return <Badge className="bg-green-500">Available</Badge>;
    } else {
      return <Badge variant="outline">Not Available</Badge>;
    }
    // switch (status) {
    //   case "active":
    //     return <Badge className="bg-green-500">Active</Badge>;
    //   case "on_delivery":
    //     return <Badge className="bg-blue-500">On Delivery</Badge>;
    //   case "inactive":
    //     return <Badge variant="outline">Inactive</Badge>;
    //   case "on_leave":
    //     return <Badge variant="secondary">On Leave</Badge>;
    //   case "terminated":
    //     return <Badge className="bg-red-500">Terminated</Badge>;
    //   default:
    //     return <Badge variant="outline">{status}</Badge>;
    // }
  };

  // Render star rating
  const renderRating = (rating: number) => {
    return (
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < Math.floor(rating)
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
        <span className="ml-1 text-sm">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <ThemeAwareDashboardLayout pageTitle="Driver Management">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Drivers</h1>
          {user.role == "admin" && (
            <Button onClick={() => setShowAddDriver(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Add Driver
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Drivers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <User className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-2xl font-bold">
                  {activeDrivers.length + inactiveDrivers.length}
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Active Drivers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-2xl font-bold">
                  {activeDrivers.length}
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Unavailable
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Truck className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-2xl font-bold">
                  {
                    activeDrivers.filter((driver) => !driver.is_available)
                      .length
                  }
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Inactive/On Leave
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <XCircle className="h-5 w-5 text-gray-500 mr-2" />
                <span className="text-2xl font-bold">
                  {inactiveDrivers.length}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Input placeholder="Search drivers..." className="w-full pl-10" />
            <div className="absolute left-3 top-2.5">
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" /> Filter
            </Button>
            <Button variant="outline">
              <FileText className="h-4 w-4 mr-2" /> Export
            </Button>
          </div>
        </div>

        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 max-w-md">
            <TabsTrigger value="active">Active Drivers</TabsTrigger>
            <TabsTrigger value="inactive">Inactive Drivers</TabsTrigger>
          </TabsList>

          <TabsContent value="active">
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Driver</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Vehicle</TableHead>
                      {/* <TableHead>Rating</TableHead>
                      <TableHead>Last Active</TableHead> */}
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {activeDrivers.map((driver) => (
                      <TableRow key={driver.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                              {driver.avatar ? (
                                <img
                                  src={driver.avatar}
                                  alt={driver.name}
                                  className="h-full w-full object-cover"
                                />
                              ) : (
                                <User className="h-5 w-5 text-gray-600" />
                              )}
                            </div>
                            <div>
                              <div className="font-medium">{driver.name}</div>
                              <div className="text-sm text-muted-foreground">
                                DRV-{driver.id}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          {getStatusBadge(driver.is_available)}
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="flex items-center text-sm">
                              <Phone className="h-3 w-3 mr-1 text-muted-foreground" />
                              {driver.phone}
                            </div>
                            <div className="flex items-center text-sm">
                              <Mail className="h-3 w-3 mr-1 text-muted-foreground" />
                              {driver.email}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                            {driver.truck == null
                              ? "Unknown"
                              : `${driver.truck.city}, ${driver.truck.state}`}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Truck className="h-4 w-4 mr-1 text-muted-foreground" />
                            {driver.truck?.id ?? "Not Assigned"}
                          </div>
                        </TableCell>
                        {/* <TableCell>{renderRating(driver.rating)}</TableCell> */}
                        {/* <TableCell>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                            {driver.lastActive}
                          </div>
                        </TableCell> */}
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            {/* <Button variant="outline" size="sm">
                              Details
                            </Button> */}
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreVertical className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              {user.role == "admin" && (
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem
                                    onClick={() => {
                                      setShowAssignVehicle(true);
                                      setSelectedDriver(driver.id);
                                    }}
                                  >
                                    <Truck className="h-4 w-4 mr-2" /> Assign
                                    Vehicle
                                  </DropdownMenuItem>
                                  {/* <DropdownMenuItem>
                                  <Calendar className="h-4 w-4 mr-2" /> Schedule
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <FileText className="h-4 w-4 mr-2" /> View
                                  Documents
                                </DropdownMenuItem> */}
                                  <DropdownMenuItem
                                    onClick={() =>
                                      handleDeactivateDriver(driver.id)
                                    }
                                  >
                                    <AlertTriangle className="h-4 w-4 mr-2" />{" "}
                                    Mark Inactive
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    onClick={() =>
                                      handleDeleteDriver(driver.id)
                                    }
                                  >
                                    <Delete className="h-4 w-4 mr-2" /> Delete
                                    Driver
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              )}
                            </DropdownMenu>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="inactive">
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Driver</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Vehicle</TableHead>
                      {/* <TableHead>Experience</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>Last Active</TableHead> */}
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {inactiveDrivers.map((driver) => (
                      <TableRow key={driver.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                              {driver.avatar ? (
                                <img
                                  src={driver.avatar}
                                  alt={driver.name}
                                  className="h-full w-full object-cover"
                                />
                              ) : (
                                <User className="h-5 w-5 text-gray-600" />
                              )}
                            </div>
                            <div>
                              <div className="font-medium">{driver.name}</div>
                              <div className="text-sm text-muted-foreground">
                                {driver.id}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          {getStatusBadge(driver.is_available)}
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="flex items-center text-sm">
                              <Phone className="h-3 w-3 mr-1 text-muted-foreground" />
                              {driver.phone}
                            </div>
                            <div className="flex items-center text-sm">
                              <Mail className="h-3 w-3 mr-1 text-muted-foreground" />
                              {driver.email}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                            {driver.truck?.address ?? "Unknown"}
                          </div>
                        </TableCell>
                        {/* <TableCell>{driver.experience}</TableCell> */}
                        {/* <TableCell>{renderRating(driver.rating)}</TableCell> */}
                        {/* <TableCell>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                            {driver.lastActive}
                          </div>
                        </TableCell> */}
                        <TableCell>
                          <div className="flex items-center">
                            <Truck className="h-4 w-4 mr-1 text-muted-foreground" />
                            {driver.truck?.id ?? "Not Assigned"}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            {/* <Button variant="outline" size="sm">
                              Details
                            </Button> */}
                            {user.role == "admin" && (
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <MoreVertical className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem
                                    onClick={() =>
                                      handleReactivateDriver(driver.id)
                                    }
                                  >
                                    <CheckCircle className="h-4 w-4 mr-2" />{" "}
                                    Reactivate
                                  </DropdownMenuItem>
                                  {/* <DropdownMenuItem>
                                  <FileText className="h-4 w-4 mr-2" /> View
                                  Documents
                                </DropdownMenuItem> */}
                                  <DropdownMenuItem
                                    onClick={() =>
                                      handleDeleteDriver(driver.id)
                                    }
                                  >
                                    <XCircle className="h-4 w-4 mr-2 text-red-500" />{" "}
                                    Delete
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {showAddDriver && (
          <AddDriverForm
            onOpenChange={(value) => setShowAddDriver(value)}
            onSave={handleAddDriver}
            open={true}
          />
        )}
        {showAssignVehicle && (
          <AssignVehicleForm
            driverId={selectedDriver}
            onOpenChange={(value) => setShowAssignVehicle(value)}
            onSave={handleAssignVehicle}
            open={true}
          />
        )}
      </div>
    </ThemeAwareDashboardLayout>
  );
};

export default DriversPage;
