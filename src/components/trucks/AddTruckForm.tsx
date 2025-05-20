import React, { memo, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getRequest } from "../../api/request";
import LoadingSpinner from "../common/LoadingSpinner";

interface AddTruckFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (data: any, driverId: number) => void;
}

interface TruckType {
  id: number;
  name: string;
}

const AddTruckForm: React.FC<AddTruckFormProps> = ({
  open,
  onOpenChange,
  onSave,
}) => {
  const [formData, setFormData] = React.useState({
    owner_id: 0,
    license_plate: "",
    model: "",
    color: "",
    year: 2000,
    dimensions: "",
    payload_capacity: 0,
    door_type: "",
    team: false,
    address: "",
    status: "available",
    preferred_load: "any",
    canada: false,
    mexico: false,
    signs: "without_signs",
    is_reserved: false,
    truck_type_id: 0,
  });
  const [truckTypes, setTruckTypes] = React.useState<TruckType[]>([]);
  const [drivers, setDrivers] = React.useState<
    {
      id: number;
      name: string;
    }[]
  >([]);
  const [owners, setOwners] = React.useState<
    {
      id: number;
      name: string;
    }[]
  >([]);
  const [driverId, setDriverId] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  const handleChange = (field: string, value: string | number) => {
    if (field == "driverId") setDriverId(Number(value));
    else setFormData((prev) => ({ ...prev, [field]: value }));

    console.log("form data", formData);
  };

  const handleSubmit = () => {
    onSave(formData, driverId);
    setFormData({
      owner_id: 0,
      license_plate: "",
      model: "",
      color: "",
      year: 2000,
      dimensions: "",
      payload_capacity: 0,
      door_type: "",
      team: false,
      address: "",
      status: "available",
      preferred_load: "any",
      canada: false,
      mexico: false,
      signs: "without_signs",
      is_reserved: false,
      truck_type_id: 0,
    });
  };

  useEffect(() => {
    // setLoading(true);
    const fetchTruckTypes = async () => {
      try {
        const response = await getRequest(
          `${import.meta.env.VITE_API_URL}/truck-types`
        );
        const data = await response.json();
        if (response.ok) {
          setTruckTypes(data);
        }

        const ownerResponse = await getRequest(
          `${import.meta.env.VITE_API_URL}/owners`
        );
        const ownerData = await ownerResponse.json();
        if (ownerResponse.ok) {
          setOwners(ownerData["data"]);
        }

        const driverResponse = await getRequest(
          `${import.meta.env.VITE_API_URL}/drivers`
        );
        const driverData = await driverResponse.json();
        if (driverResponse.ok) {
          setDrivers(driverData["data"]);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchTruckTypes();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Truck</DialogTitle>
          <DialogDescription>
            Enter the details for the new truck. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="license-plate">License Plate</Label>
              <Input
                id="license-plate"
                placeholder="Plate No."
                value={formData.license_plate}
                onChange={(e) => handleChange("license_plate", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="truck-type">Type</Label>
              <Select
                value={formData.truck_type_id.toString()}
                onValueChange={(value) =>
                  handleChange("truck_type_id", Number(value))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  {truckTypes.map((t) => {
                    return (
                      <SelectItem key={t.id} value={t.id.toString()}>
                        {t.name}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="model">Model</Label>
              <Input
                id="model"
                placeholder="Model"
                value={formData.model}
                onChange={(e) => handleChange("model", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="color">Color</Label>
              <Input
                id="color"
                placeholder="Color"
                value={formData.color}
                onChange={(e) => handleChange("color", e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="owner">Truck Owner</Label>
              <Select
                value={formData.owner_id.toString()}
                onValueChange={(value) =>
                  handleChange("owner_id", Number(value))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select owner" />
                </SelectTrigger>
                <SelectContent>
                  {owners.length == 0 ? (
                    <p>No owners found</p>
                  ) : (
                    owners.map((d) => {
                      return (
                        <SelectItem key={d.id} value={d.id.toString()}>
                          {d.name}
                        </SelectItem>
                      );
                    })
                  )}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="owner">Assign Driver</Label>
              <Select
                value={driverId.toString()}
                onValueChange={(value) =>
                  handleChange("driverId", Number(value))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select driver" />
                </SelectTrigger>
                <SelectContent>
                  {drivers.length == 0 ? (
                    <p>No drivers found</p>
                  ) : (
                    drivers.map((d) => {
                      return (
                        <SelectItem key={d.id} value={d.id.toString()}>
                          {d.name}
                        </SelectItem>
                      );
                    })
                  )}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="dimensions">Dimensions</Label>
              <Input
                id="dimensions"
                placeholder="Dimensions"
                value={formData.dimensions}
                onChange={(e) => handleChange("dimensions", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="door-type">Door Type</Label>
              <Select
                value={formData.door_type}
                onValueChange={(value) => handleChange("door_type", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Door type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="swing">Swing</SelectItem>
                  <SelectItem value="roll">Roll</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="signs">Signs</Label>
              <Select
                value={formData.signs}
                onValueChange={(value) => handleChange("signs", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="with_signs">With Signs</SelectItem>
                  <SelectItem value="without_signs">Without Signs</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="preferred_load">Preferred Load</Label>
              <Select
                value={formData.preferred_load}
                onValueChange={(value) => handleChange("preferred_load", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Preferred load" />
                </SelectTrigger>
                <SelectContent defaultValue="any">
                  <SelectItem value="long">Long</SelectItem>
                  <SelectItem value="local">Local</SelectItem>
                  <SelectItem value="any">Any</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Current Location</Label>
            <Input
              id="address"
              placeholder="City, State"
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="payload-capacity">Payload Capacity (lbs)</Label>
              <Input
                id="payload-capacity"
                type="number"
                min="0"
                placeholder="0 lbs"
                value={formData.payload_capacity}
                onChange={(e) =>
                  handleChange("payload_capacity", Number(e.target.value))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mileage">Year</Label>
              <Input
                id="year"
                type="number"
                placeholder="2000"
                value={formData.year}
                onChange={(e) => handleChange("year", e.target.value)}
              />
            </div>
          </div>

          {/* <div className="space-y-2">
            <Label htmlFor="next-maintenance">Next Maintenance Date</Label>
            <Input
              id="next-maintenance"
              type="date"
              value={formData.nextMaintenance}
              onChange={(e) => handleChange("nextMaintenance", e.target.value)}
            />
          </div> */}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Save Truck</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default memo(AddTruckForm);
