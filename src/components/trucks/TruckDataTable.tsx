import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Lock,
  Clock,
  RefreshCw,
  CheckCircle,
  AlertTriangle,
  MoreVertical,
  ExternalLink,
  FileText,
  Archive,
  Edit,
  MapPin,
} from "lucide-react";
import { useAuthContext } from "@/context/AuthContext";

export interface TruckDataItem {
  id: number;
  documentStatus?: "expired" | "warning" | "valid";
  truck_type_name: string;
  preferred_load: string;
  payload_capacity: string;
  driver?: {
    name: string;
    phone: string;
    language: string;
    citizenship: string;
    is_available: number;
  };
  owner?: {
    name: string;
    phone: string;
    language: string;
    citizenship: string;
  };
  height: number;
  width: number;
  length: number;
  status: string;
  // address: string;
  state: string;
  city: string;
  is_reserved: number;
}

interface TruckDataTableProps {
  data: TruckDataItem[];
  onReserve?: (truckId: number) => void;
  onViewDetails?: (truckId: string) => void;
  onEdit?: (truckId: string) => void;
  onArchive?: (truckId: number) => void;
  onViewLogs?: (truckId: string) => void;
}

const TruckDataTable: React.FC<TruckDataTableProps> = ({
  data,
  onReserve,
  onViewDetails,
  onEdit,
  onArchive,
  onViewLogs,
}) => {
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const { user } = useAuthContext();

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  // Sort data based on current sort field and direction
  const sortedData = [...data].sort((a, b) => {
    if (!sortField) return 0;

    let valueA, valueB;

    switch (sortField) {
      case "id":
        valueA = a.id;
        valueB = b.id;
        break;
      // case "lastKnown":
      //   valueA = new Date(a.lastKnown.datetime).getTime();
      //   valueB = new Date(b.lastKnown.datetime).getTime();
      //   break;
      default:
        return 0;
    }

    if (valueA < valueB) return sortDirection === "asc" ? -1 : 1;
    if (valueA > valueB) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  const renderDocumentStatus = (status?: string) => {
    if (!status || status === "valid") return null;

    return (
      <div className="flex items-center text-xs bg-red-100 text-red-700 px-1 py-0.5 rounded mb-1">
        <AlertTriangle className="h-3 w-3 mr-1" />
        Doc exp
      </div>
    );
  };

  const renderStatusIcon = (status: string) => {
    switch (status) {
      case "available":
        return (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex justify-center">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
              </TooltipTrigger>
              <TooltipContent>Available</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      case "busy":
        return (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex justify-center">
                  <Clock className="h-5 w-5 text-amber-500" />
                </div>
              </TooltipTrigger>
              <TooltipContent>Busy</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      // case "maintenance":
      //   return (
      //     <TooltipProvider>
      //       <Tooltip>
      //         <TooltipTrigger asChild>
      //           <div className="flex justify-center">
      //             <RefreshCw className="h-5 w-5 text-blue-500" />
      //           </div>
      //         </TooltipTrigger>
      //         <TooltipContent>In Maintenance</TooltipContent>
      //       </Tooltip>
      //     </TooltipProvider>
      //   );
      case "not_available":
        return (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex justify-center">
                  <Lock className="h-5 w-5 text-gray-500" />
                </div>
              </TooltipTrigger>
              <TooltipContent>Offline</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      default:
        return null;
    }
  };

  const renderLanguageFlag = (language?: string) => {
    if (!language) return null;

    return (
      <Badge variant="outline" className="text-xs px-1 py-0.5 mr-1">
        {language}
      </Badge>
    );
  };

  const renderRateInfo = (rate?: number, unit?: string) => {
    if (!rate) return null;

    return (
      <div className="text-xs text-green-600 flex items-center">
        <span className="mr-1">$</span>
        {rate} / {unit || "mi"}
      </div>
    );
  };

  return (
    <div className="w-full overflow-auto">
      <Table className="border-collapse w-full">
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead
              className="cursor-pointer hover:bg-muted/80 transition-colors"
              onClick={() => handleSort("id")}
            >
              <div className="flex items-center">
                TRUCK#{" "}
                {sortField === "id" && (sortDirection === "asc" ? "↑" : "↓")}
              </div>
            </TableHead>
            <TableHead>MAIN CONTACT INFO</TableHead>
            <TableHead>TRUCK INFO</TableHead>
            <TableHead>DIMS / PAYLOAD</TableHead>
            <TableHead className="text-center">STATUS</TableHead>
            {/* <TableHead>AVAILABILITY LOCATION</TableHead> */}
            <TableHead
              className="cursor-pointer hover:bg-muted/80 transition-colors"
              onClick={() => handleSort("lastKnown")}
            >
              <div className="flex items-center">
                LAST KNOWN LOCATION{" "}
                {sortField === "lastKnown" &&
                  (sortDirection === "asc" ? "↑" : "↓")}
              </div>
            </TableHead>
            <TableHead className="text-center">ACTIONS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedData.length == 0 ? (
            <p className="p-5">No trucks found</p>
          ) : (
            sortedData.map((truck) => (
              <TableRow key={truck.id} className="border-b hover:bg-muted/30">
                <TableCell className="font-medium">
                  {renderDocumentStatus(truck.documentStatus)}
                  TRK-{truck.id}
                </TableCell>
                <TableCell>
                  <div className="text-gray-500">ow</div>
                  <div className="font-medium">{truck.owner?.name}</div>
                  {/* {truck.contact.company && (
                  <div className="text-xs text-gray-500">
                    {truck.contact.company}
                  </div>
                )} */}
                  <a
                    href={`tel:${truck.owner?.phone}`}
                    className="text-blue-600 hover:underline text-sm flex items-center"
                  >
                    {truck.owner?.phone}
                  </a>
                </TableCell>
                <TableCell>
                  <div className="flex items-center mb-1">
                    {renderLanguageFlag(truck.owner?.language)}
                    {truck.truck_type_name}
                  </div>
                  {/* {truck.info.features && truck.info.features.length > 0 && (
                  <div className="text-xs text-gray-500">
                    {truck.info.features.join(", ")}
                  </div>
                )} */}
                  {/* {renderRateInfo(
                  truck.info.flags?.rate,
                  truck.info.flags?.rateUnit,
                )} */}
                </TableCell>
                <TableCell>
                  <div className="flex items-center mb-2">
                    {truck.preferred_load == "long" && (
                      <Badge className="bg-blue-100 text-blue-800 mr-2 text-xs border-0">
                        LONG
                      </Badge>
                    )}
                    {truck.preferred_load == "local" && (
                      <Badge className="bg-blue-100 text-blue-800 mr-2 text-xs border-0">
                        LOCAL
                      </Badge>
                    )}
                    <span>
                      {truck.length}" x {truck.width}" x {truck.height}"
                    </span>
                  </div>
                  <div className="text-gray-600">
                    {truck.payload_capacity} lbs
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  {renderStatusIcon(truck.status)}
                </TableCell>
                {/* <TableCell>
                {truck.availability.needsUpdate ? (
                  <div className="text-gray-400 italic">need to update</div>
                ) : (
                  <>
                    <div>{truck.availability.location}</div>
                    <div className="text-xs text-gray-500">
                      {truck.availability.datetime}
                    </div>
                  </>
                )}
              </TableCell>  */}
                <TableCell>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-gray-400 mr-1 flex-shrink-0" />
                    <span>
                      {truck.city}, {truck.state}
                    </span>
                  </div>
                  {/* <div className="text-xs text-gray-500">
                  {truck.lastKnown.datetime}
                </div> */}
                </TableCell>
                <TableCell>
                  <div className="flex items-center justify-center space-x-2">
                    {truck.is_reserved == 0 ? (
                      <Button
                        className="bg-green-500 hover:bg-green-600 text-white text-xs py-1 h-8"
                        onClick={() => onReserve && onReserve(truck.id)}
                      >
                        RESERVE
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        className="text-gray-400 border-gray-200 text-xs py-1 h-8"
                        disabled
                      >
                        NO ACTIONS
                      </Button>
                    )}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                        >
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      {user.role == "admin" && (
                        <DropdownMenuContent align="end">
                          {/* <DropdownMenuItem
                            onClick={() =>
                              onViewDetails && onViewDetails(truck.id)
                            }
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem> */}
                          {/* <DropdownMenuItem
                            onClick={() => onViewLogs && onViewLogs(truck.id)}
                          >
                            <FileText className="mr-2 h-4 w-4" />
                            View Logs
                          </DropdownMenuItem> */}
                          {/* <DropdownMenuItem
                            onClick={() => onEdit && onEdit(truck.id)}
                          >
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem> */}
                          <DropdownMenuItem
                            onClick={() => onArchive && onArchive(truck.id)}
                            className="text-red-600"
                          >
                            <Archive className="mr-2 h-4 w-4" />
                            Delete Truck
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      )}
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default TruckDataTable;
