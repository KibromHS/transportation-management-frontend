import React, { useEffect, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
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
  User,
  Users,
  Search,
  Filter,
  Plus,
  MoreVertical,
  Phone,
  Mail,
  MapPin,
  Truck,
  FileText,
  Building,
  DollarSign,
  Calendar,
  CheckCircle,
  XCircle,
  AlertTriangle,
} from "lucide-react";
import { useAuthContext } from "@/context/AuthContext";
import { deleteRequest, getRequest, postRequest } from "@/api/request";
import AddOwnerForm from "./AddOwnerForm";
import LoadingSpinner from "@/components/common/LoadingSpinner";

interface OwnerModel {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  company: {
    id: number;
    name: string;
  };
  trucks: {
    id: number;
  }[];
}

const OwnersPage = () => {
  const [activeOwners, setActiveOwners] = useState<OwnerModel[]>([]);
  const [showAddOwner, setShowAddOwner] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchOwners = async () => {
      const response = await getRequest(
        `${import.meta.env.VITE_API_URL}/owners`
      );
      const data = await response.json();
      if (response.ok) {
        setActiveOwners(data.data);
      } else {
        console.log("Failed to fetch owners:", data);
      }
    };

    fetchOwners();
  }, []);

  const handleDelete = async (ownerId: number) => {
    const response = await deleteRequest(
      `${import.meta.env.VITE_API_URL}/owners/${ownerId}`
    );
    if (response.ok) {
      window.location.reload();
    } else {
      console.error("Couldn't delete owner:", response);
    }
  };

  const handleAddOwner = async (data: any) => {
    setLoading(true);

    const newOwner = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      citizenship: data.citizenship,
      language: data.language,
    };

    const newDriver = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      language: data.language,
      citizenship: data.citizenship,
      password: data.password,
      is_active: 1,
      is_available: 1,
    };

    const response = await postRequest(
      `${import.meta.env.VITE_API_URL}/owners`,
      newOwner
    );

    const driverResponse = await postRequest(
      `${import.meta.env.VITE_API_URL}/drivers`,
      newDriver
    );
    if (response.ok) {
      if (driverResponse.ok) {
        setShowAddOwner(false);
        window.location.reload();
      } else {
        console.error(
          "Failed to create driver account for this owner:",
          await driverResponse.json()
        );
      }
    } else {
      console.error("Failed to add owner:", response);
    }

    setLoading(false);
  };

  // Mock owners data
  // const activeOwners = [
  //   {
  //     id: "OWN-101",
  //     name: "Midwest Logistics LLC",
  //     contactPerson: "Robert Johnson",
  //     avatar: "https://api.dicebear.com/7.x/initials/svg?seed=ML",
  //     phone: "(555) 123-4567",
  //     email: "robert@midwestlogistics.com",
  //     location: "Chicago, IL",
  //     status: "active",
  //     vehicles: 12,
  //     drivers: 15,
  //     joinDate: "Jan 15, 2020",
  //     lastPayment: "Jul 10, 2023",
  //   },
  //   {
  //     id: "OWN-102",
  //     name: "Express Carriers Inc",
  //     contactPerson: "Jennifer Smith",
  //     avatar: "https://api.dicebear.com/7.x/initials/svg?seed=EC",
  //     phone: "(555) 234-5678",
  //     email: "jennifer@expresscarriers.com",
  //     location: "Detroit, MI",
  //     status: "active",
  //     vehicles: 8,
  //     drivers: 10,
  //     joinDate: "Mar 22, 2021",
  //     lastPayment: "Jul 5, 2023",
  //   },
  //   {
  //     id: "OWN-103",
  //     name: "Reliable Transport Co",
  //     contactPerson: "Michael Brown",
  //     avatar: "https://api.dicebear.com/7.x/initials/svg?seed=RT",
  //     phone: "(555) 345-6789",
  //     email: "michael@reliabletransport.com",
  //     location: "Indianapolis, IN",
  //     status: "pending_approval",
  //     vehicles: 5,
  //     drivers: 6,
  //     joinDate: "Jun 10, 2022",
  //     lastPayment: "Jun 28, 2023",
  //   },
  //   {
  //     id: "OWN-104",
  //     name: "Precision Logistics Group",
  //     contactPerson: "Sarah Davis",
  //     avatar: "https://api.dicebear.com/7.x/initials/svg?seed=PL",
  //     phone: "(555) 456-7890",
  //     email: "sarah@precisionlogistics.com",
  //     location: "Columbus, OH",
  //     status: "active",
  //     vehicles: 15,
  //     drivers: 18,
  //     joinDate: "Nov 5, 2019",
  //     lastPayment: "Jul 12, 2023",
  //   },
  // ];

  // const inactiveOwners = [
  //   {
  //     id: "OWN-105",
  //     name: "Rapid Delivery Services",
  //     contactPerson: "David Wilson",
  //     avatar: "https://api.dicebear.com/7.x/initials/svg?seed=RD",
  //     phone: "(555) 567-8901",
  //     email: "david@rapiddelivery.com",
  //     location: "St. Louis, MO",
  //     status: "inactive",
  //     vehicles: 3,
  //     drivers: 4,
  //     joinDate: "Aug 15, 2021",
  //     lastPayment: "May 20, 2023",
  //     terminationDate: "Jun 30, 2023",
  //     terminationReason: "Contract expired",
  //   },
  //   {
  //     id: "OWN-106",
  //     name: "Horizon Freight LLC",
  //     contactPerson: "Emily Taylor",
  //     avatar: "https://api.dicebear.com/7.x/initials/svg?seed=HF",
  //     phone: "(555) 678-9012",
  //     email: "emily@horizonfreight.com",
  //     location: "Milwaukee, WI",
  //     status: "suspended",
  //     vehicles: 7,
  //     drivers: 9,
  //     joinDate: "Feb 28, 2020",
  //     lastPayment: "Apr 15, 2023",
  //     terminationDate: "Jul 1, 2023",
  //     terminationReason: "Payment issues",
  //   },
  // ];

  // Get status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500">Active</Badge>;
      case "pending_approval":
        return <Badge className="bg-yellow-500">Pending Approval</Badge>;
      case "inactive":
        return <Badge variant="outline">Inactive</Badge>;
      case "suspended":
        return <Badge className="bg-red-500">Suspended</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Owners</h1>
          {user.role == "admin" && (
            <Button onClick={() => setShowAddOwner(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Add Owner
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Owners
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Building className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-2xl font-bold">
                  {activeOwners.length}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Active Owners
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-2xl font-bold">
                  {
                    activeOwners.filter((owner) => owner.status === "active")
                      .length
                  }
                </span>
              </div>
            </CardContent>
          </Card> */}

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Vehicles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Truck className="h-5 w-5 text-teal-500 mr-2" />
                <span className="text-2xl font-bold">
                  {activeOwners.reduce(
                    (acc, owner) => acc + owner.trucks.length,
                    0
                  )}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Drivers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-purple-500 mr-2" />
                <span className="text-2xl font-bold">
                  {activeOwners.reduce((acc, owner) => acc + owner.drivers, 0) +
                    inactiveOwners.reduce(
                      (acc, owner) => acc + owner.drivers,
                      0,
                    )}
                </span>
              </div>
            </CardContent>
          </Card> */}
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Input placeholder="Search owners..." className="w-full pl-10" />
            <div className="absolute left-3 top-2.5">
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          {/* <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" /> Filter
            </Button>
            <Button variant="outline">
              <FileText className="h-4 w-4 mr-2" /> Export
            </Button>
          </div> */}
        </div>

        <Tabs defaultValue="active" className="w-full">
          {/* <TabsList className="grid w-full grid-cols-2 mb-6 max-w-md">
            <TabsTrigger value="active">Active Owners</TabsTrigger>
            <TabsTrigger value="inactive">Inactive Owners</TabsTrigger>
          </TabsList> */}

          <TabsContent value="active">
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Company</TableHead>
                      {/* <TableHead>Status</TableHead> */}
                      <TableHead>Name</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Vehicles</TableHead>
                      {/* <TableHead>Drivers</TableHead>
                      <TableHead>Join Date</TableHead> */}
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {activeOwners.map((owner) => (
                      <TableRow key={owner.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                              {owner.avatar ? (
                                <img
                                  src={owner.avatar}
                                  alt={owner.company.name}
                                  className="h-full w-full object-cover"
                                />
                              ) : (
                                <Building className="h-5 w-5 text-gray-600" />
                              )}
                            </div>
                            <div>
                              <div className="font-medium">
                                {owner.company.name ?? "Not Registered"}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        {/* <TableCell>{getStatusBadge(owner.status)}</TableCell> */}
                        <TableCell>
                          <div className="flex items-center">{owner.name}</div>
                          <div className="text-sm text-muted-foreground">
                            OWN-{owner.id}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            {/* <div className="text-sm font-medium">
                              {owner.name}
                            </div> */}
                            <div className="flex items-center text-sm">
                              <Phone className="h-3 w-3 mr-1 text-muted-foreground" />
                              {owner.phone}
                            </div>
                            <div className="flex items-center text-sm">
                              <Mail className="h-3 w-3 mr-1 text-muted-foreground" />
                              {owner.email}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                            {owner.address}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Truck className="h-4 w-4 mr-1 text-muted-foreground" />
                            {owner.trucks.length}
                          </div>
                        </TableCell>
                        {/* <TableCell>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                            {owner.drivers}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                            {owner.joinDate}
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
                                  {/* <DropdownMenuItem>
                                      <Truck className="h-4 w-4 mr-2" /> View
                                      Vehicles
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <Users className="h-4 w-4 mr-2" /> View
                                      Drivers
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <DollarSign className="h-4 w-4 mr-2" />{" "}
                                      Payment History
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <FileText className="h-4 w-4 mr-2" /> View
                                      Documents
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <AlertTriangle className="h-4 w-4 mr-2" />{" "}
                                      Suspend
                                    </DropdownMenuItem> */}
                                  <DropdownMenuItem
                                    onClick={() => handleDelete(owner.id)}
                                  >
                                    <AlertTriangle className="h-4 w-4 mr-2" />{" "}
                                    <span className="text-red">
                                      Delete Owner
                                    </span>
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

          {/* <TabsContent value="inactive">
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Owner</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Termination Date</TableHead>
                      <TableHead>Reason</TableHead>
                      <TableHead>Vehicles</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {inactiveOwners.map((owner) => (
                      <TableRow key={owner.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                              {owner.avatar ? (
                                <img
                                  src={owner.avatar}
                                  alt={owner.name}
                                  className="h-full w-full object-cover"
                                />
                              ) : (
                                <Building className="h-5 w-5 text-gray-600" />
                              )}
                            </div>
                            <div>
                              <div className="font-medium">{owner.name}</div>
                              <div className="text-sm text-muted-foreground">
                                {owner.id}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{getStatusBadge(owner.status)}</TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="text-sm font-medium">
                              {owner.contactPerson}
                            </div>
                            <div className="flex items-center text-sm">
                              <Phone className="h-3 w-3 mr-1 text-muted-foreground" />
                              {owner.phone}
                            </div>
                            <div className="flex items-center text-sm">
                              <Mail className="h-3 w-3 mr-1 text-muted-foreground" />
                              {owner.email}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                            {owner.location}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                            {owner.terminationDate}
                          </div>
                        </TableCell>
                        <TableCell>{owner.terminationReason}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Truck className="h-4 w-4 mr-1 text-muted-foreground" />
                            {owner.vehicles}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="outline" size="sm">
                              Details
                            </Button>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreVertical className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <CheckCircle className="h-4 w-4 mr-2" />{" "}
                                  Reactivate
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <FileText className="h-4 w-4 mr-2" /> View
                                  Documents
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <DollarSign className="h-4 w-4 mr-2" />{" "}
                                  Payment History
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <XCircle className="h-4 w-4 mr-2 text-red-500" />{" "}
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent> */}
        </Tabs>

        {showAddOwner && (
          <AddOwnerForm
            onOpenChange={(value) => setShowAddOwner(value)}
            onSave={handleAddOwner}
            open={true}
          />
        )}
      </div>
    </DashboardLayout>
  );
};

export default OwnersPage;
