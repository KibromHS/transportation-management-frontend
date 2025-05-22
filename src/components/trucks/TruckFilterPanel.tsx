import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";
import { cn } from "@/lib/utils";
import { ChevronDown, Filter, X, CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { getRequest } from "@/api/request";

export interface TruckFilterPanelProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onApplyFiltersAndSearch: (filters: any) => void;
  onResetFilters: () => void;
}

interface FilterType {
  // General Information
  id: number;
  // trailerNumber: "";
  city: string;
  state: string;
  zip: string;

  // Availability Info
  // availabilityFrom: null;
  // availabilityTo: null;
  status: string;
  is_reserved: boolean;
  // assignedUser: "";

  // Truck Details
  length: number;
  width: number;
  height: number;
  weightUnit: "";
  payload_capacity: number;
  gross: number;
  truck_type_id: number;
  trailer_type_id: number;
  // yearFrom: "";

  // Owner and Driver
  owner_id: number;
  driver_id: number;
  // company_id: "";
  // homeState: "";
  citizenship: string;
  phone: string;
  // certificates: "";

  // More Details
  // tempRangeFrom: "";
  // tempRangeTo: "";
  equipment_id: number;
  door_type: string;
  // crossBorder: "";
  signs: string;
  preferred_load: string;
  team: boolean;

  // Registration and Expiration
  // crmId: "";
  // expirationDocuments: "";
}

const TruckFilterPanel: React.FC<TruckFilterPanelProps> = ({
  searchQuery,
  onSearchChange,
  onApplyFiltersAndSearch,
  onResetFilters,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filters, setFilters] = useState<FilterType>({
    // General Information
    id: null,
    // trailerNumber: "",
    city: "",
    state: "",
    zip: "",

    // // Availability Info
    // availabilityFrom: null,
    // availabilityTo: null,
    status: "",
    is_reserved: null,
    // assignedUser: "",

    // Truck Details
    length: null,
    width: null,
    height: null,
    weightUnit: "",
    payload_capacity: null,
    gross: null,
    truck_type_id: null,
    trailer_type_id: null,
    // yearFrom: "",

    // Owner and Driver
    owner_id: null,
    driver_id: null,
    // company_id: "",
    // homeState: "",
    citizenship: "",
    phone: "",
    // certificates: "",

    // More Details
    // tempRangeFrom: "",
    // tempRangeTo: "",
    equipment_id: null,
    door_type: "",
    // crossBorder: "",
    signs: "",
    preferred_load: null,
    team: null,

    // Registration and Expiration
    // crmId: "",
    // expirationDocuments: "",
  });
  const [drivers, setDrivers] = useState([]);
  const [owners, setOwners] = useState([]);
  // const [companies, setCompanies] = useState([]);
  const [truckTypes, setTruckTypes] = useState([]);
  const [trailerTypes, setTrailerTypes] = useState([]);
  const [equipments, setEquipments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          driversResponse,
          ownersResponse,
          truckTypesResponse,
          trailerTypesResponse,
          equipmentsResponse,
        ] = await Promise.all([
          getRequest(`${import.meta.env.VITE_API_URL}/drivers`),
          getRequest(`${import.meta.env.VITE_API_URL}/owners`),
          // getRequest(`${import.meta.env.VITE_API_URL}/companies`),
          getRequest(`${import.meta.env.VITE_API_URL}/truck-types`),
          getRequest(`${import.meta.env.VITE_API_URL}/trailer-types`),
          getRequest(`${import.meta.env.VITE_API_URL}/equipments`),
        ]);

        if (driversResponse.ok) {
          const driversData = await driversResponse.json();
          setDrivers(driversData.data);
        }

        if (ownersResponse.ok) {
          const ownersData = await ownersResponse.json();
          setOwners(ownersData.data);
        }

        // if (companiesResponse.ok) {
        //   const companiesData = await companiesResponse.json();
        //   setCompanies(companiesData.data);
        // }

        if (truckTypesResponse.ok) {
          const truckTypesData = await truckTypesResponse.json();
          setTruckTypes(truckTypesData);
        }
        if (trailerTypesResponse.ok) {
          const trailerTypeData = await trailerTypesResponse.json();
          setTrailerTypes(trailerTypeData);
        }
        if (equipmentsResponse.ok) {
          const equipmentsData = await equipmentsResponse.json();
          setEquipments(equipmentsData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Count active filters
  const getActiveFilterCount = () => {
    return Object.entries(filters).filter(([key, value]) => {
      if (typeof value === "boolean") return value === true;
      if (value === null) return false;
      return value !== "";
    }).length;
  };

  const handleFilterChange = (field: string, value: any) => {
    setFilters((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleApplyFiltersAndSearch = () => {
    onApplyFiltersAndSearch(filters);
  };

  const handleResetFilters = () => {
    setFilters({
      id: null,
      city: "",
      state: "",
      zip: "",
      status: "",
      is_reserved: null,
      length: null,
      width: null,
      height: null,
      weightUnit: "",
      payload_capacity: null,
      gross: null,
      truck_type_id: null,
      trailer_type_id: null,
      owner_id: null,
      driver_id: null,
      citizenship: "",
      phone: "",
      equipment_id: null,
      door_type: "",
      signs: "",
      preferred_load: null,
      team: null,
    });
    onResetFilters();
  };

  return (
    <div className="bg-background rounded-md border shadow-sm mb-6">
      <div
        className="p-4 flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-muted-foreground" />
          <h3 className="font-medium">Truck Filters</h3>
          {getActiveFilterCount() > 0 && (
            <Badge variant="secondary" className="ml-2">
              {getActiveFilterCount()}
            </Badge>
          )}
        </div>
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground transition-transform ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </div>

      {isExpanded && (
        <div className="p-4 border-t">
          <Accordion
            type="multiple"
            defaultValue={["general"]}
            className="w-full"
          >
            {/* General Information */}
            <AccordionItem value="general">
              <AccordionTrigger className="text-sm font-medium">
                General Information
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 pt-2">
                  <div className="space-y-2">
                    <Label htmlFor="truckNumber">Truck #</Label>
                    <Input
                      id="truckNumber"
                      placeholder="Enter truck number"
                      value={filters.id}
                      onChange={(e) => handleFilterChange("id", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="trailer_type_id">Trailer #</Label>
                    <Input
                      id="trailer_type_id"
                      placeholder="Enter trailer number"
                      value={filters.trailer_type_id}
                      onChange={(e) =>
                        handleFilterChange("trailer_type_id", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="locationCity">Location City</Label>
                    <Input
                      id="locationCity"
                      placeholder="Enter city"
                      value={filters.city}
                      onChange={(e) =>
                        handleFilterChange("city", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="locationState">Location State</Label>
                    <Select
                      value={filters.state}
                      onValueChange={(value) =>
                        handleFilterChange("state", value)
                      }
                    >
                      <SelectTrigger id="locationState">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="AL">Alabama</SelectItem>
                        <SelectItem value="AK">Alaska</SelectItem>
                        <SelectItem value="AZ">Arizona</SelectItem>
                        <SelectItem value="CA">California</SelectItem>
                        <SelectItem value="CO">Colorado</SelectItem>
                        <SelectItem value="FL">Florida</SelectItem>
                        <SelectItem value="GA">Georgia</SelectItem>
                        <SelectItem value="IL">Illinois</SelectItem>
                        <SelectItem value="NY">New York</SelectItem>
                        <SelectItem value="TX">Texas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">ZIP</Label>
                    <Input
                      id="zip"
                      placeholder="Enter ZIP code"
                      value={filters.zip}
                      onChange={(e) =>
                        handleFilterChange("zip", e.target.value)
                      }
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Availability Info */}
            <AccordionItem value="availability">
              <AccordionTrigger className="text-sm font-medium">
                Availability Info
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                  {/* <div className="space-y-2">
                    <Label>From</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !filters.availabilityFrom && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {filters.availabilityFrom ? (
                            format(filters.availabilityFrom, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={filters.availabilityFrom}
                          onSelect={(date) =>
                            handleFilterChange("availabilityFrom", date)
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div> */}
                  {/* <div className="space-y-2">
                    <Label>To</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !filters.availabilityTo && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {filters.availabilityTo ? (
                            format(filters.availabilityTo, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={filters.availabilityTo}
                          onSelect={(date) =>
                            handleFilterChange("availabilityTo", date)
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div> */}
                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <Select
                      value={filters.status}
                      onValueChange={(value) =>
                        handleFilterChange("status", value)
                      }
                    >
                      <SelectTrigger id="status">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="available">Available</SelectItem>
                        <SelectItem value="on-route">On Route</SelectItem>
                        <SelectItem value="maintenance">Maintenance</SelectItem>
                        <SelectItem value="offline">Offline</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {/* <div className="space-y-2">
                    <Label htmlFor="assignedUser">Assigned User</Label>
                    <Select
                      value={filters.assignedUser}
                      onValueChange={(value) =>
                        handleFilterChange("assignedUser", value)
                      }
                    >
                      <SelectTrigger id="assignedUser">
                        <SelectValue placeholder="Select user" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="user1">John Smith</SelectItem>
                        <SelectItem value="user2">Jane Doe</SelectItem>
                        <SelectItem value="user3">Robert Johnson</SelectItem>
                        <SelectItem value="user4">Emily Williams</SelectItem>
                      </SelectContent>
                    </Select>
                  </div> */}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Truck Details */}
            <AccordionItem value="truckDetails">
              <AccordionTrigger className="text-sm font-medium">
                Truck Details
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4 pt-2">
                  <div className="space-y-2">
                    <Label htmlFor="length">Length</Label>
                    <Input
                      id="length"
                      type="number"
                      placeholder="Length"
                      value={filters.length}
                      onChange={(e) =>
                        handleFilterChange("length", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="width">Width</Label>
                    <Input
                      id="width"
                      type="number"
                      placeholder="Width"
                      value={filters.width}
                      onChange={(e) =>
                        handleFilterChange("width", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="height">Height</Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="Height"
                      value={filters.height}
                      onChange={(e) =>
                        handleFilterChange("height", e.target.value)
                      }
                    />
                  </div>
                  {/* <div className="space-y-2">
                    <Label htmlFor="weightUnit">Weight In</Label>
                    <Select
                      value={filters.weightUnit}
                      onValueChange={(value) =>
                        handleFilterChange("weightUnit", value)
                      }
                    >
                      <SelectTrigger id="weightUnit">
                        <SelectValue placeholder="Select unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lbs">lbs</SelectItem>
                        <SelectItem value="kg">kg</SelectItem>
                      </SelectContent>
                    </Select>
                  </div> */}
                  <div className="space-y-2">
                    <Label htmlFor="payload_capacity">Payload</Label>
                    <Input
                      id="payload_capacity"
                      type="number"
                      placeholder="Payload"
                      value={filters.payload_capacity}
                      onChange={(e) =>
                        handleFilterChange("payload_capacity", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gross">Gross</Label>
                    <Input
                      id="gross"
                      type="number"
                      placeholder="Gross"
                      value={filters.gross}
                      onChange={(e) =>
                        handleFilterChange("gross", e.target.value)
                      }
                    />
                  </div>
                  {/* <div className="space-y-2">
                    <Label htmlFor="yearFrom">Year From</Label>
                    <Select
                      value={filters.yearFrom}
                      onValueChange={(value) =>
                        handleFilterChange("yearFrom", value)
                      }
                    >
                      <SelectTrigger id="yearFrom">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 30 }, (_, i) => {
                          const year = new Date().getFullYear() - i;
                          return (
                            <SelectItem key={year} value={year.toString()}>
                              {year}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </div> */}
                  <div className="space-y-2 lg:col-span-3">
                    <Label htmlFor="truckType">Truck Type</Label>
                    <Select
                      value={filters.truck_type_id?.toString()}
                      onValueChange={(value) =>
                        handleFilterChange("truckType", Number(value))
                      }
                    >
                      <SelectTrigger id="truckType">
                        <SelectValue placeholder="Select truck type" />
                      </SelectTrigger>
                      <SelectContent>
                        {truckTypes.map((type) => (
                          <SelectItem value={type.id.toString()}>
                            {type.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 lg:col-span-3">
                    <Label htmlFor="trailer_type_id">Trailer Type</Label>
                    <Select
                      value={filters.trailer_type_id?.toString()}
                      onValueChange={(value) =>
                        handleFilterChange("trailer_type_id", Number(value))
                      }
                    >
                      <SelectTrigger id="trailer_type_id">
                        <SelectValue placeholder="Select trailer type" />
                      </SelectTrigger>
                      <SelectContent>
                        {trailerTypes.map((type) => (
                          <SelectItem value={type.id.toString()}>
                            {type.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Owner and Driver */}
            <AccordionItem value="ownerDriver">
              <AccordionTrigger className="text-sm font-medium">
                Owner and Driver
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                  <div className="space-y-2">
                    <Label htmlFor="owner_id">Owner</Label>
                    <Select
                      value={filters.owner_id?.toString()}
                      onValueChange={(value) =>
                        handleFilterChange("owner_id", Number(value))
                      }
                    >
                      <SelectTrigger id="owner_id">
                        <SelectValue placeholder="Select owner" />
                      </SelectTrigger>
                      <SelectContent>
                        {owners.length == 0 ? (
                          <SelectItem disabled value="">
                            No owners found
                          </SelectItem>
                        ) : (
                          owners.map((o) => (
                            <SelectItem value={o.id.toString()}>
                              {o.name}
                            </SelectItem>
                          ))
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="driver">Driver</Label>
                    <Select
                      value={filters.driver_id?.toString()}
                      onValueChange={(value) =>
                        handleFilterChange("driver_id", Number(value))
                      }
                    >
                      <SelectTrigger id="driver">
                        <SelectValue placeholder="Select driver" />
                      </SelectTrigger>
                      <SelectContent>
                        {drivers.length == 0 ? (
                          <SelectItem disabled value="">
                            No drivers found
                          </SelectItem>
                        ) : (
                          drivers.map((d) => (
                            <SelectItem value={d.id.toString()}>
                              {d.name}
                            </SelectItem>
                          ))
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                  {/* <div className="space-y-2">
                    <Label htmlFor="company_id">Owner's Company Name</Label>
                    <Select
                      value={filters.company_id}
                      onValueChange={(value) =>
                        handleFilterChange("company_id", value)
                      }
                    >
                      <SelectTrigger id="company_id">
                        <SelectValue placeholder="Select company" />
                      </SelectTrigger>
                      <SelectContent>
                        {companies.length == 0 ? (
                          <p>No companies found</p>
                        ) : (
                          companies.map((c) => (
                            <SelectItem value={c.id}>{c.name}</SelectItem>
                          ))
                        )}
                      </SelectContent>
                    </Select>
                  </div> */}
                  {/* <div className="space-y-2">
                    <Label htmlFor="ownerCompany">Owner's Company Name</Label>
                    <Input
                      id="ownerCompany"
                      placeholder="Enter company name"
                      value={filters.company_id}
                      onChange={(e) =>
                        handleFilterChange("company_id", e.target.value)
                      }
                    />
                  </div> */}
                  {/* <div className="space-y-2">
                    <Label htmlFor="homeState">Home State</Label>
                    <Select
                      value={filters.homeState}
                      onValueChange={(value) =>
                        handleFilterChange("homeState", value)
                      }
                    >
                      <SelectTrigger id="homeState">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="AL">Alabama</SelectItem>
                        <SelectItem value="AK">Alaska</SelectItem>
                        <SelectItem value="AZ">Arizona</SelectItem>
                        <SelectItem value="CA">California</SelectItem>
                        <SelectItem value="TX">Texas</SelectItem>
                        <SelectItem value="NY">New York</SelectItem>
                      </SelectContent>
                    </Select>
                  </div> */}
                  <div className="space-y-2">
                    <Label htmlFor="citizenship">Citizenship</Label>
                    <Select
                      value={filters.citizenship}
                      onValueChange={(value) =>
                        handleFilterChange("citizenship", value)
                      }
                    >
                      <SelectTrigger id="citizenship">
                        <SelectValue placeholder="Select citizenship" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="citizen">Citizen</SelectItem>
                        <SelectItem value="resident">Resident</SelectItem>
                        <SelectItem value="NL">NL</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone #</Label>
                    <Input
                      id="phone"
                      placeholder="Enter phone number"
                      value={filters.phone}
                      onChange={(e) =>
                        handleFilterChange("phone", e.target.value)
                      }
                    />
                  </div>
                  {/* <div className="space-y-2">
                    <Label htmlFor="certificates">Certificates</Label>
                    <Select
                      value={filters.certificates}
                      onValueChange={(value) =>
                        handleFilterChange("certificates", value)
                      }
                    >
                      <SelectTrigger id="certificates">
                        <SelectValue placeholder="Select certificates" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cdl">CDL</SelectItem>
                        <SelectItem value="hazmat">HAZMAT</SelectItem>
                        <SelectItem value="tanker">Tanker</SelectItem>
                        <SelectItem value="doubles">Doubles/Triples</SelectItem>
                      </SelectContent>
                    </Select>
                  </div> */}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* More Details */}
            <AccordionItem value="moreDetails">
              <AccordionTrigger className="text-sm font-medium">
                More Details
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                  {/* <div className="space-y-2 lg:col-span-2">
                    <Label>Temperature Range</Label>
                    <div className="flex items-center space-x-2">
                      <Input
                        type="number"
                        placeholder="From"
                        value={filters.tempRangeFrom}
                        onChange={(e) =>
                          handleFilterChange("tempRangeFrom", e.target.value)
                        }
                      />
                      <span>-</span>
                      <Input
                        type="number"
                        placeholder="To"
                        value={filters.tempRangeTo}
                        onChange={(e) =>
                          handleFilterChange("tempRangeTo", e.target.value)
                        }
                      />
                      <span>°F</span>
                    </div>
                  </div> */}
                  <div className="space-y-2">
                    <Label htmlFor="equipment_id">Equipment</Label>
                    <Select
                      value={filters.equipment_id?.toString()}
                      onValueChange={(value) =>
                        handleFilterChange("equipment_id", Number(value))
                      }
                    >
                      <SelectTrigger id="equipment_id">
                        <SelectValue placeholder="Select equipment" />
                      </SelectTrigger>
                      <SelectContent>
                        {equipments.map((e) => (
                          <SelectItem value={e.id.toString()}>
                            {e.name}
                          </SelectItem>
                        ))}
                        {/* <SelectItem value="liftgate">Liftgate</SelectItem>
                        <SelectItem value="pallet-jack">Pallet Jack</SelectItem>
                        <SelectItem value="straps">Straps</SelectItem>
                        <SelectItem value="blankets">Blankets</SelectItem> */}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="doorType">Door Type</Label>
                    <Select
                      value={filters.door_type}
                      onValueChange={(value) =>
                        handleFilterChange("door_type", value)
                      }
                    >
                      <SelectTrigger id="doorType">
                        <SelectValue placeholder="Select door type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="roll">Roll</SelectItem>
                        <SelectItem value="swing">Swing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {/* <div className="space-y-2">
                    <Label htmlFor="crossBorder">Cross Border</Label>
                    <Select
                      value={filters.crossBorder}
                      onValueChange={(value) =>
                        handleFilterChange("crossBorder", value)
                      }
                    >
                      <SelectTrigger id="crossBorder">
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                        <SelectItem value="canada-only">Canada Only</SelectItem>
                        <SelectItem value="mexico-only">Mexico Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div> */}
                  <div className="space-y-2">
                    <Label htmlFor="signs">Signs</Label>
                    <Select
                      value={filters.signs}
                      onValueChange={(value) =>
                        handleFilterChange("signs", value)
                      }
                    >
                      <SelectTrigger id="signs">
                        <SelectValue placeholder="Select signs" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="with_signs">With Signs</SelectItem>
                        <SelectItem value="without_signs">
                          Without Signs
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferred_load">Preferred Load</Label>
                    <Select
                      value={filters.preferred_load}
                      onValueChange={(value) =>
                        handleFilterChange("preferred_load", value)
                      }
                    >
                      <SelectTrigger id="preferred_load">
                        <SelectValue placeholder="Select preferred load" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="local">Local</SelectItem>
                        <SelectItem value="long">Long</SelectItem>
                        <SelectItem value="any">Any</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center space-x-8 pt-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="team"
                        checked={filters.team}
                        onCheckedChange={(checked) =>
                          handleFilterChange("team", checked)
                        }
                      />
                      <Label htmlFor="team">Team</Label>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Registration and Expiration */}
            {/* <AccordionItem value="registration">
              <AccordionTrigger className="text-sm font-medium">
                Registration and Expiration
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                   <div className="space-y-2">
                    <Label htmlFor="crmId">CRM ID</Label>
                    <Input
                      id="crmId"
                      placeholder="Enter CRM ID"
                      value={filters.crmId}
                      onChange={(e) =>
                        handleFilterChange("crmId", e.target.value)
                      }
                    />
                  </div> */}
            {/* <div className="space-y-2">
                    <Label htmlFor="expirationDocuments">
                      Expiration Documents
                    </Label>
                    <Select
                      value={filters.expirationDocuments}
                      onValueChange={(value) =>
                        handleFilterChange("expirationDocuments", value)
                      }
                    >
                      <SelectTrigger id="expirationDocuments">
                        <SelectValue placeholder="Select document type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="registration">
                          Registration
                        </SelectItem>
                        <SelectItem value="insurance">Insurance</SelectItem>
                        <SelectItem value="inspection">Inspection</SelectItem>
                        <SelectItem value="license">License</SelectItem>
                      </SelectContent>
                    </Select>
                  </div> 
                </div>
              </AccordionContent>
            </AccordionItem> */}
          </Accordion>

          <div className="flex justify-end space-x-2 mt-4">
            <Button
              variant="outline"
              onClick={handleResetFilters}
              className="flex items-center"
            >
              <X className="mr-1 h-4 w-4" /> Reset
            </Button>
            <Button
              onClick={handleApplyFiltersAndSearch}
              className="flex items-center"
            >
              <Filter className="mr-1 h-4 w-4" /> Apply and Search
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TruckFilterPanel;
