import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { DatePicker } from "@/components/ui/date-picker";
import { Plus, X, Calendar, Clock } from "lucide-react";
import { format } from "date-fns";
import { useAuthContext } from "@/context/AuthContext";
import { getRequest } from "@/api/request";
import UnitSelector from "./UnitSelector";
import Sel from "react-select";

interface LoadCreationFormProps {
  onSubmit?: (data1: any, data2: any) => void;
  onCancel?: () => void;
}

const LoadCreationForm = ({
  onSubmit = () => {},
  onCancel = () => {},
}: LoadCreationFormProps) => {
  const { user } = useAuthContext();
  const [currentStep, setCurrentStep] = useState(1);
  const [form1Data, setForm1Data] = useState({
    // Step 1: General
    booked_by: user.id,
    customer_company_id: null,
    // agent: "",
    // dispatcher: "",
    // sourceBoard: "",
    reference_number: "",
    total_charges: "",
    currency: "USD",
  });
  const [form2Data, setForm2Data] = useState({
    // Step 2: Load Info
    // pickupFacility: "",
    // pickupDate: null as Date | null,
    // pickupTime: "",
    // pickupTimeZone: "EDT",
    // pickupTimeFrame: "FCFS", // First Come, First Served
    // pickupAdditionalInfo: "",

    // deliveryFacility: "",
    // deliveryDate: null as Date | null,
    // deliveryTime: "",
    // deliveryTimeZone: "EDT",
    // deliveryTimeFrame: "FCFS",
    // deliveryAdditionalInfo: "",

    // commodity: "",
    // pieces: "1",
    // weight: "",
    // length: "",
    // width: "",
    // height: "",
    // stackable: false,
    // hazmat: false,

    pickup_facility_id: null,
    pickup_priority: "",
    pickup_timezone: "",
    pickup_date_from: "",
    pickup_date_to: "",
    pickup_time_from: "",
    pickup_time_to: "",
    pickup_additional_info: "",
    pickup_commodity: "",

    pieces: null,
    weight: null,
    length: null,
    width: null,
    height: null,
    stackable: false,
    hazmat: false,

    delivery_facility_id: null,
    delivery_priority: "",
    delivery_timezone: "",
    delivery_time_from: "",
    delivery_time_to: "",
    delivery_date_from: "",
    delivery_date_to: "",
    delivery_additional_info: "",

    checkin_company_id: form1Data.customer_company_id,
    driver_id: null,
    truck_type: "",
    trailer_type: "",
    equipment: [] as string[],
    general_notes: "",
    weight_unit_of_measeurement: "",
    length_unit_of_measeurement: "",

    // Truck Info
    // truckType: "Box truck",
    // trailerType: "",
    // truckEquipment: "",
    // teamDrivers: false,

    // // General Load Note
    // generalNote: "",

    // // Step 3: Files
    // files: [] as File[],
  });

  const [companies, setCompanies] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const [truckTypes, setTruckTypes] = useState([]);
  const [trailerTypes, setTrailerTypes] = useState([]);
  const [equipments, setEquipments] = useState([]);
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [
        companiesResponse,
        facilitiesResponse,
        truckTypesResponse,
        trailerTypesResponse,
        equipmentsResponse,
        driversResponse,
      ] = await Promise.all([
        getRequest(`${import.meta.env.VITE_API_URL}/companies`),
        getRequest(`${import.meta.env.VITE_API_URL}/facilities`),
        getRequest(`${import.meta.env.VITE_API_URL}/truck-types`),
        getRequest(`${import.meta.env.VITE_API_URL}/trailer-types`),
        getRequest(`${import.meta.env.VITE_API_URL}/equipments`),
        getRequest(`${import.meta.env.VITE_API_URL}/drivers`),
      ]);

      const companiesData = await companiesResponse.json();
      if (companiesResponse.ok) {
        setCompanies(companiesData.data);
      }

      const facilitiesData = await facilitiesResponse.json();
      if (facilitiesResponse.ok) {
        setFacilities(facilitiesData.data);
      }

      const truckTypesData = await truckTypesResponse.json();
      if (truckTypesResponse.ok) {
        setTruckTypes(truckTypesData);
      }

      const trailerTypesData = await trailerTypesResponse.json();
      if (trailerTypesResponse.ok) {
        setTrailerTypes(trailerTypesData);
      }

      const equipmentsData = await equipmentsResponse.json();
      if (equipmentsResponse.ok) {
        setEquipments(equipmentsData);
      }

      const driversData = await driversResponse.json();
      if (driversResponse.ok) {
        setDrivers(driversData.data);
      }
    };

    fetchData();
  }, []);

  const handleInput1Change = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm1Data((prev) => ({ ...prev, [name]: value }));
  };

  const handleInput2Change = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm2Data((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelect1Change = (name: string, value: any) => {
    setForm1Data((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelect2Change = (name: string, value: any) => {
    setForm2Data((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox2Change = (name: string, checked: boolean) => {
    setForm2Data((prev) => ({ ...prev, [name]: checked }));
  };

  // const handleDate2Change = (name: string, date: Date | undefined) => {
  //   const formattedDate = date
  //     ? date.toISOString().split("T")[0] // 'YYYY-MM-DD'
  //     : null;
  //   setForm2Data((prev) => ({ ...prev, [name]: formattedDate }));
  // };

  const handleDate2Change = (name: string, date: Date | undefined) => {
    const formattedDate = date
      ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
          2,
          "0"
        )}-${String(date.getDate()).padStart(2, "0")}`
      : null;
    setForm2Data((prev) => ({ ...prev, [name]: formattedDate }));
  };

  const parseLocalDate = (dateStr: string) => {
    const [year, month, day] = dateStr.split("-").map(Number);
    return new Date(year, month - 1, day); // local time, not UTC
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send a notification to all drivers
    // about the new load being available for bidding
    // const loadWithId = {
    //   ...formData,
    //   id: `LD-${Math.floor(Math.random() * 10000)}`,
    //   status: "open_for_bidding",
    //   createdAt: new Date().toISOString(),
    // };
    onSubmit(form1Data, form2Data);
  };

  const handleNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleWeight = (w: string) => {
    setForm2Data((prev) => ({ ...prev, weight_unit_of_measeurement: w }));
  };

  const handleLength = (l: string) => {
    setForm2Data((prev) => ({ ...prev, length_unit_of_measeurement: l }));
  };

  const renderTimeFrameOptions = () => (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="fcfs"
          name="timeFrame"
          value="FCFS"
          checked={form2Data.pickup_priority === "FCFS"}
          onChange={() => handleSelect2Change("pickup_priority", "FCFS")}
          className="h-4 w-4"
        />
        <label htmlFor="fcfs" className="text-sm">
          FCFS
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="appt"
          name="timeFrame"
          value="APPT"
          checked={form2Data.pickup_priority === "APPT"}
          onChange={() => handleSelect2Change("pickup_priority", "APPT")}
          className="h-4 w-4"
        />
        <label htmlFor="appt" className="text-sm">
          APPT
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="direct"
          name="timeFrame"
          value="DIRECT"
          checked={form2Data.pickup_priority === "DIRECT"}
          onChange={() => handleSelect2Change("pickup_priority", "DIRECT")}
          className="h-4 w-4"
        />
        <label htmlFor="direct" className="text-sm">
          DIRECT
        </label>
      </div>
    </div>
  );

  const renderDeliveryTimeFrameOptions = () => (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="fcfs-delivery"
          name="delivery_priority "
          value="FCFS"
          checked={form2Data.delivery_priority === "FCFS"}
          onChange={() => handleSelect2Change("delivery_priority", "FCFS")}
          className="h-4 w-4"
        />
        <label htmlFor="fcfs-delivery" className="text-sm">
          FCFS
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="appt-delivery"
          name="delivery_priority "
          value="APPT"
          checked={form2Data.delivery_priority === "APPT"}
          onChange={() => handleSelect2Change("delivery_priority", "APPT")}
          className="h-4 w-4"
        />
        <label htmlFor="appt-delivery" className="text-sm">
          APPT
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id="direct-delivery"
          name="delivery_priority "
          value="DIRECT"
          checked={form2Data.delivery_priority === "DIRECT"}
          onChange={() => handleSelect2Change("delivery_priority", "DIRECT")}
          className="h-4 w-4"
        />
        <label htmlFor="direct-delivery" className="text-sm">
          DIRECT
        </label>
      </div>
    </div>
  );

  // const renderUnitOptions = () => (
  //   <div className="flex space-x-2 mb-4">
  //     <Button
  //       variant="outline"
  //       size="sm"
  //       className="bg-primary/10 hover:bg-primary/20"
  //     >
  //       lbs
  //     </Button>
  //     <Button variant="outline" size="sm">
  //       kg
  //     </Button>
  //     <Button variant="outline" size="sm">
  //       ton
  //     </Button>
  //     <Button variant="outline" size="sm">
  //       ft
  //     </Button>
  //     <Button variant="outline" size="sm">
  //       in
  //     </Button>
  //     <Button variant="outline" size="sm">
  //       m
  //     </Button>
  //     <Button variant="outline" size="sm">
  //       cm
  //     </Button>
  //   </div>
  // );

  return (
    <Card className="w-full max-w-4xl mx-auto bg-background">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Create Load Card</CardTitle>
        <CardDescription>
          Enter the details to create a new load
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Tabs
          value={`step-${currentStep}`}
          onValueChange={(value) =>
            setCurrentStep(parseInt(value.split("-")[1]))
          }
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="step-1" disabled={currentStep !== 1}>
              Step 1. General
            </TabsTrigger>
            <TabsTrigger value="step-2" disabled={currentStep !== 2}>
              Step 2. Load Info
            </TabsTrigger>
            {/* <TabsTrigger value="step-3" disabled={currentStep !== 3}>
              Step 3. All files
            </TabsTrigger> */}
          </TabsList>

          <TabsContent value="step-1" className="space-y-6 mt-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Booked by:</h3>
              <div className="grid grid-cols-1 gap-4">
                {user.name}
                {/* <div className="space-y-2">
                  <Label htmlFor="bookingRep">BOOKING REP *</Label>
                  <div className="flex gap-2">
                    <Select
                      value={formData.bookingRep}
                      onValueChange={(value) =>
                        handleSelectChange("bookingRep", value)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="choose dispatcher from the list" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="david">David Solomon</SelectItem>
                        <SelectItem value="sarah">Sarah Smith</SelectItem>
                        <SelectItem value="mike">Mike Johnson</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="icon">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div> */}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Booked with:</h3>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="customer">CUSTOMER *</Label>
                  <div className="flex gap-2">
                    <Select
                      value={form1Data.customer_company_id?.toString()}
                      onValueChange={(value) =>
                        handleSelect1Change(
                          "customer_company_id",
                          Number(value)
                        )
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="choose company from the list" />
                      </SelectTrigger>
                      <SelectContent>
                        {companies.length == 0 ? (
                          <p>No companies registered</p>
                        ) : (
                          companies.map((c) => (
                            <SelectItem value={c.id?.toString()}>
                              {c.name}
                            </SelectItem>
                          ))
                        )}
                      </SelectContent>
                    </Select>
                    {/* <Button variant="outline" size="icon">
                      <Plus className="h-4 w-4" />
                    </Button> */}
                  </div>
                </div>

                {/* <div className="space-y-2">
                  <Label htmlFor="agent">AGENT</Label>
                  <div className="flex gap-2">
                    <Select
                      value={formData.agent}
                      onValueChange={(value) =>
                        handleSelectChange("agent", value)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="choose agent from the list" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="agent1">Agent One</SelectItem>
                        <SelectItem value="agent2">Agent Two</SelectItem>
                        <SelectItem value="agent3">Agent Three</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="icon">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div> */}
              </div>
              {/* 
              <div className="mt-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-medium">Send updates to:</h4>
                  <Button variant="outline" size="sm" className="h-8">
                    <Plus className="h-3 w-3 mr-1" /> add email
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  no selected dispatchers
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  no selected agents
                </p>
              </div> */}
            </div>

            {/* <div>
              <h3 className="text-lg font-medium mb-4">Assign to:</h3>
              <div className="space-y-2">
                <Label htmlFor="dispatcher">DISPATCHER NAME</Label>
                <Select
                  value={formData.dispatcher}
                  onValueChange={(value) =>
                    handleSelectChange("dispatcher", value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="choose dispatcher from the list" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="john">John Doe</SelectItem>
                    <SelectItem value="sarah">Sarah Smith</SelectItem>
                    <SelectItem value="mike">Mike Johnson</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div> */}

            {/* <div>
              <h3 className="text-lg font-medium mb-4">Source Boards:</h3>
              <div className="space-y-2">
                <Label htmlFor="sourceBoard">BOARD NAME</Label>
                <Select
                  value={formData.sourceBoard}
                  onValueChange={(value) =>
                    handleSelectChange("sourceBoard", value)
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="choose board source from the list" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="board1">DAT Board</SelectItem>
                    <SelectItem value="board2">Truckstop</SelectItem>
                    <SelectItem value="board3">123Loadboard</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div> */}

            <div>
              <h3 className="text-lg font-medium mb-4">Billing info:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="reference">REF#1 *</Label>
                  <Input
                    id="reference"
                    name="reference_number"
                    placeholder="enter reference number 1"
                    value={form1Data.reference_number}
                    onChange={handleInput1Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="totalCharges">TOTAL CHARGES *</Label>
                  <Input
                    id="totalCharges"
                    name="total_charges"
                    placeholder="total rate"
                    value={form1Data.total_charges}
                    onChange={handleInput1Change}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currency">CURRENCY *</Label>
                  <Select
                    value={form1Data.currency}
                    onValueChange={(value) =>
                      handleSelect1Change("currency", value)
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">
                        $ United States Dollar USD
                      </SelectItem>
                      <SelectItem value="CAD">$ Canadian Dollar CAD</SelectItem>
                      <SelectItem value="EUR">€ Euro EUR</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* <Button variant="outline" className="mt-4">
                <Plus className="h-4 w-4 mr-2" /> add another field
              </Button> */}
            </div>
          </TabsContent>

          <TabsContent value="step-2" className="space-y-6 mt-6">
            <div className="space-y-6">
              <h3 className="text-lg font-medium">Trip Info:</h3>

              {/* Pickup Section */}
              <div className="border rounded-md p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium">Step (1) Pick Up #1</h4>
                  {/* <Button variant="ghost" size="sm">
                    <Plus className="h-4 w-4 mr-1" />
                  </Button> */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="pickupFacility">FACILITY *</Label>
                    <div className="flex gap-2">
                      <Select
                        value={form2Data.pickup_facility_id?.toString()}
                        onValueChange={(value) =>
                          handleSelect2Change(
                            "pickup_facility_id",
                            Number(value)
                          )
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="choose facility name" />
                        </SelectTrigger>
                        <SelectContent>
                          {facilities.length == 0 ? (
                            <p>No facilities found</p>
                          ) : (
                            facilities.map((f) => (
                              <SelectItem value={f.id?.toString()}>
                                {f.name}
                              </SelectItem>
                            ))
                          )}
                        </SelectContent>
                      </Select>
                      {/* <Button variant="outline" size="icon">
                        <Plus className="h-4 w-4" />
                      </Button> */}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>PRIORITY *</Label>
                    {renderTimeFrameOptions()}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="px-3 py-2 bg-muted border-r">
                    <Select
                      value={form2Data.pickup_timezone}
                      onValueChange={(value) =>
                        handleSelect2Change("pickup_timezone", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select time zone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="EDT">EDT</SelectItem>
                        <SelectItem value="CDT">CDT</SelectItem>
                        <SelectItem value="MDT">MDT</SelectItem>
                        <SelectItem value="PDT">PDT</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="px-3 py-2 bg-muted border-r">
                    <div className="flex items-center border rounded-md">
                      <div className="px-3 py-2 bg-muted border-r">
                        <Calendar className="h-4 w-4 text-gray-500" />
                      </div>
                      <DatePicker
                        date={
                          form2Data.pickup_date_from
                            ? parseLocalDate(form2Data.pickup_date_from)
                            : undefined
                        }
                        setDate={(date) =>
                          handleDate2Change("pickup_date_from", date)
                        }
                        placeholder="Select date"
                        className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </div>
                  </div>

                  <div className="px-3 py-2 bg-muted border-r">
                    <div className="flex items-center border rounded-md">
                      <div className="px-3 py-2 bg-muted border-r">
                        <Clock className="h-4 w-4 text-gray-500" />
                      </div>
                      <Input
                        type="time"
                        name="pickup_time_from"
                        value={form2Data.pickup_time_from}
                        onChange={handleInput2Change}
                        className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="px-3 py-2 bg-muted border-r">
                    <div className="flex items-center border rounded-md">
                      <div className="px-3 py-2 bg-muted border-r">
                        <Calendar className="h-4 w-4 text-gray-500" />
                      </div>
                      <DatePicker
                        date={
                          form2Data.pickup_date_to
                            ? new Date(form2Data.pickup_date_to)
                            : undefined
                        }
                        setDate={(date) =>
                          handleDate2Change("pickup_date_to", date)
                        }
                        placeholder="Select date"
                        className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </div>
                  </div>

                  <div className="px-3 py-2 bg-muted border-r">
                    <div className="flex items-center border rounded-md">
                      <div className="px-3 py-2 bg-muted border-r">
                        <Clock className="h-4 w-4 text-gray-500" />
                      </div>
                      <Input
                        type="time"
                        name="pickup_time_to"
                        value={form2Data.pickup_time_to}
                        onChange={handleInput2Change}
                        className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>ADDITIONAL STOP INFO</Label>
                  <Textarea
                    name="pickup_additional_info"
                    value={form2Data.pickup_additional_info}
                    onChange={handleInput2Change}
                    placeholder="PUP, agent, contact person name and phone#, etc."
                    className="min-h-[80px]"
                  />
                </div>
              </div>

              {/* Units of Measure */}
              <div className="space-y-2">
                <Label>Set up units of measure in the stop</Label>
                {/* {renderUnitOptions()} */}
                <UnitSelector
                  handleLength={handleLength}
                  handleWeight={handleWeight}
                />
              </div>

              {/* Commodity */}
              <div className="space-y-2">
                <Label>COMMODITY</Label>
                <Input
                  name="pickup_commodity"
                  value={form2Data.pickup_commodity}
                  onChange={handleInput2Change}
                  placeholder="enter commodity"
                />
              </div>

              {/* Freight */}
              <div className="border rounded-md p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium">FREIGHT #1</h4>
                  {/* <Button variant="ghost" size="sm">
                    <Plus className="h-4 w-4 mr-1" />
                  </Button> */}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  <div className="space-y-2">
                    <Label>PIECES *</Label>
                    <Input
                      name="pieces"
                      value={form2Data.pieces}
                      onChange={handleInput2Change}
                      type="number"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>WEIGHT *</Label>
                    <div className="flex items-center">
                      <Input
                        name="weight"
                        value={form2Data.weight}
                        onChange={handleInput2Change}
                        type="number"
                      />
                      <div className="bg-gray-100 px-2 py-2 border border-l-0 rounded-r-md text-black">
                        {form2Data.weight_unit_of_measeurement}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>LENGTH</Label>
                    <div className="flex items-center">
                      <Input
                        name="length"
                        value={form2Data.length}
                        onChange={handleInput2Change}
                        type="number"
                        className="rounded-r-none"
                      />
                      <div className="bg-gray-100 px-2 py-2 border border-l-0 rounded-r-md text-black">
                        {form2Data.length_unit_of_measeurement}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>WIDTH</Label>
                    <div className="flex items-center">
                      <Input
                        name="width"
                        value={form2Data.width}
                        onChange={handleInput2Change}
                        type="number"
                        className="rounded-r-none"
                      />
                      <div className="bg-gray-100 px-2 py-2 border border-l-0 rounded-r-md text-black">
                        {form2Data.length_unit_of_measeurement}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>HEIGHT</Label>
                    <div className="flex items-center">
                      <Input
                        name="height"
                        value={form2Data.height}
                        onChange={handleInput2Change}
                        type="number"
                        className="rounded-r-none"
                      />
                      <div className="bg-gray-100 px-2 py-2 border border-l-0 rounded-r-md text-black">
                        {form2Data.length_unit_of_measeurement}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-end space-x-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="stackable"
                      checked={form2Data.stackable}
                      onCheckedChange={(checked) =>
                        handleCheckbox2Change("stackable", checked as boolean)
                      }
                    />
                    <Label htmlFor="stackable">STACKABLE</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hazmat"
                      checked={form2Data.hazmat}
                      onCheckedChange={(checked) =>
                        handleCheckbox2Change("hazmat", checked as boolean)
                      }
                    />
                    <Label htmlFor="hazmat">HAZMAT</Label>
                  </div>
                </div>
              </div>

              {/* Delivery Section */}
              <div className="border rounded-md p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium">Step (2) Delivery #1</h4>
                  {/* <Button variant="ghost" size="sm">
                    <Plus className="h-4 w-4 mr-1" />
                  </Button> */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="deliveryFacility">FACILITY *</Label>
                    <div className="flex gap-2">
                      <Select
                        value={form2Data.delivery_facility_id?.toString()}
                        onValueChange={(value) =>
                          handleSelect2Change(
                            "delivery_facility_id",
                            Number(value)
                          )
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="choose facility name" />
                        </SelectTrigger>
                        <SelectContent>
                          {facilities.length == 0 ? (
                            <p>No facilities found</p>
                          ) : (
                            facilities.map((f) => (
                              <SelectItem value={f.id?.toString()}>
                                {f.name}
                              </SelectItem>
                            ))
                          )}
                        </SelectContent>
                      </Select>
                      {/* <Button variant="outline" size="icon">
                        <Plus className="h-4 w-4" />
                      </Button> */}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>PRIORITY *</Label>
                    {renderDeliveryTimeFrameOptions()}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="px-3 py-2 bg-muted border-r">
                    <Select
                      value={form2Data.delivery_timezone}
                      onValueChange={(value) =>
                        handleSelect2Change("delivery_timezone", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select time zone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="EDT">EDT</SelectItem>
                        <SelectItem value="CDT">CDT</SelectItem>
                        <SelectItem value="MDT">MDT</SelectItem>
                        <SelectItem value="PDT">PDT</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="px-3 py-2 bg-muted border-r">
                    <div className="flex items-center border rounded-md">
                      <div className="px-3 py-2 bg-muted border-r">
                        <Calendar className="h-4 w-4 text-gray-500" />
                      </div>
                      <DatePicker
                        date={
                          form2Data.delivery_date_from
                            ? new Date(form2Data.delivery_date_from)
                            : undefined
                        }
                        setDate={(date) =>
                          handleDate2Change("delivery_date_from", date)
                        }
                        placeholder="Select date"
                        className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </div>
                  </div>

                  <div className="px-3 py-2 bg-muted border-r">
                    <div className="flex items-center border rounded-md">
                      <div className="px-3 py-2 bg-muted border-r">
                        <Clock className="h-4 w-4 text-gray-500" />
                      </div>
                      <Input
                        type="time"
                        name="delivery_time_from"
                        value={form2Data.delivery_time_from}
                        onChange={handleInput2Change}
                        className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="px-3 py-2 bg-muted border-r">
                    <div className="flex items-center border rounded-md">
                      <div className="px-3 py-2 bg-muted border-r">
                        <Calendar className="h-4 w-4 text-gray-500" />
                      </div>
                      <DatePicker
                        date={
                          form2Data.delivery_date_to
                            ? new Date(form2Data.delivery_date_to)
                            : undefined
                        }
                        setDate={(date) =>
                          handleDate2Change("delivery_date_to", date)
                        }
                        placeholder="Select date"
                        className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </div>
                  </div>

                  <div className="px-3 py-2 bg-muted border-r">
                    <div className="flex items-center border rounded-md">
                      <div className="px-3 py-2 bg-muted border-r">
                        <Clock className="h-4 w-4 text-gray-500" />
                      </div>
                      <Input
                        type="time"
                        name="delivery_time_to"
                        value={form2Data.delivery_time_to}
                        onChange={handleInput2Change}
                        className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>ADDITIONAL STOP INFO</Label>
                  <Textarea
                    name="delivery_additional_info"
                    value={form2Data.delivery_additional_info}
                    onChange={handleInput2Change}
                    placeholder="PUP, agent, contact person name and phone#, etc."
                    className="min-h-[80px]"
                  />
                </div>
              </div>

              {/* Check in as */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="agent">DRIVER</Label>
                  <div className="flex gap-2">
                    <Select
                      value={form2Data.driver_id?.toString()}
                      onValueChange={(value) =>
                        handleSelect2Change("driver_id", Number(value))
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="choose driver from the list" />
                      </SelectTrigger>
                      <SelectContent>
                        {drivers.length == 0 ? (
                          <p>No drivers found</p>
                        ) : (
                          drivers.map((d) => (
                            <SelectItem value={d.id.toString()}>
                              {d.name}
                            </SelectItem>
                          ))
                        )}
                      </SelectContent>
                    </Select>
                    {/* <Button variant="outline" size="icon">
                      <Plus className="h-4 w-4" />
                    </Button> */}
                  </div>
                </div>

                <h3 className="text-lg font-medium">Check in as:</h3>
                <div className="space-y-2">
                  <Label>CONTRAGENT NAME / COMPANY NAME</Label>
                  <div className="flex gap-2">
                    <Select
                      required
                      value={form2Data.checkin_company_id?.toString()}
                      onValueChange={(value) =>
                        handleSelect2Change("checkin_company_id", Number(value))
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select company" />
                      </SelectTrigger>
                      <SelectContent>
                        {companies.length == 0 ? (
                          <p>No companies found</p>
                        ) : (
                          companies.map((type) => (
                            <SelectItem
                              key={type.id}
                              value={type.id?.toString()}
                            >
                              {type.name}
                            </SelectItem>
                          ))
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Required Truck Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Required Truck Info:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>TRUCK TYPE</Label>
                    <div className="flex gap-2">
                      <Select
                        value={form2Data.truck_type}
                        onValueChange={(value) =>
                          handleSelect2Change("truck_type", value)
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select truck type" />
                        </SelectTrigger>
                        <SelectContent>
                          {truckTypes.length == 0 ? (
                            <p>No truck types found</p>
                          ) : (
                            truckTypes.map((type) => (
                              <SelectItem value={type.name}>
                                {type.name}
                              </SelectItem>
                            ))
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>TAILER TYPE</Label>
                    <div className="flex gap-2">
                      <Select
                        value={form2Data.trailer_type}
                        onValueChange={(value) =>
                          handleSelect2Change("trailer_type", value)
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select trailer type" />
                        </SelectTrigger>
                        <SelectContent>
                          {trailerTypes.length == 0 ? (
                            <p>No tailer types found</p>
                          ) : (
                            trailerTypes.map((type) => (
                              <SelectItem value={type.name}>
                                {type.name}
                              </SelectItem>
                            ))
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>TRUCK EQUIPMENT (optional)</Label>
                  <div className="flex gap-2">
                    <Sel
                      isMulti
                      className="w-full"
                      options={equipments.map((e) => ({
                        value: e.name,
                        label: e.name,
                      }))}
                      value={form2Data.equipment.map((name) => ({
                        value: name,
                        label: name,
                      }))}
                      onChange={(selected) =>
                        handleSelect2Change(
                          "equipment",
                          selected.map((item) => item.value)
                        )
                      }
                      styles={{
                        control: (base) => ({
                          ...base,
                          backgroundColor: "#f4f4f5", // light gray background
                          color: "#000", // black text
                          borderColor: "#d1d5db", // tailwind's gray-300
                          boxShadow: "none",
                        }),
                        menu: (base) => ({
                          ...base,
                          backgroundColor: "#f4f4f5", // menu dropdown background
                          color: "#000",
                        }),
                        option: (base, state) => ({
                          ...base,
                          backgroundColor: state.isSelected
                            ? "#3b82f6" // selected: Tailwind blue-500
                            : state.isFocused
                            ? "#e5e7eb" // hover: Tailwind gray-200
                            : "#f4f4f5", // default
                          color: state.isSelected ? "#fff" : "#000",
                        }),
                        multiValue: (base) => ({
                          ...base,
                          backgroundColor: "#e0f2fe", // Tailwind blue-100
                        }),
                        multiValueLabel: (base) => ({
                          ...base,
                          color: "#0369a1", // Tailwind blue-700
                        }),
                        multiValueRemove: (base) => ({
                          ...base,
                          color: "#0369a1",
                          ":hover": {
                            backgroundColor: "#bae6fd", // Tailwind blue-200
                            color: "#000",
                          },
                        }),
                      }}
                    />
                  </div>
                </div>

                {/* <div className="flex items-center space-x-2">
                  <Checkbox
                    id="teamDrivers"
                    checked={formData.teamDrivers}
                    onCheckedChange={(checked) =>
                      handleCheckboxChange("teamDrivers", checked as boolean)
                    }
                  />
                  <Label htmlFor="teamDrivers">Team Drivers</Label>
                </div> */}
              </div>

              {/* General Load Note */}
              <div className="space-y-2">
                <Label>General Load Note:</Label>
                <Textarea
                  name="general_notes"
                  value={form2Data.general_notes}
                  onChange={handleInput2Change}
                  placeholder="enter information about the current load"
                  className="min-h-[100px]"
                />
              </div>
            </div>
          </TabsContent>

          {/* <TabsContent value="step-3" className="space-y-6 mt-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Upload Documents</h3>
              <div className="border-2 border-dashed border-border rounded-md p-6 text-center">
                <div className="flex flex-col items-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    Drag and drop files here, or click to select files
                  </p>
                  <Button variant="outline" size="sm">
                    Select Files
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Uploaded Files</h4>
                <p className="text-sm text-muted-foreground">
                  No files uploaded yet
                </p>
              </div>
            </div>
          </TabsContent> */}
        </Tabs>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <div className="flex gap-2">
          {currentStep > 1 && (
            <Button variant="outline" onClick={handlePrevStep}>
              Previous Step
            </Button>
          )}
          {currentStep < 2 ? (
            <Button onClick={handleNextStep}>Next Step</Button>
          ) : (
            <Button onClick={handleSubmit}>Create Load</Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoadCreationForm;
