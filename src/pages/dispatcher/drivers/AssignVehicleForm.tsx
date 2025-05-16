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
import { getRequest } from "@/api/request";

interface AddTruckFormProps {
  driverId: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (data: any, driverId: number) => void;
}

const AssignVehicleForm: React.FC<AddTruckFormProps> = ({
  driverId,
  open,
  onOpenChange,
  onSave,
}) => {
  const [formData, setFormData] = React.useState({
    truck_id: 0,
  });
  const [trucks, setTrucks] = React.useState([]);

  useEffect(() => {
    const fetchTrucks = async () => {
      const response = await getRequest(
        `${import.meta.env.VITE_API_URL}/trucks`
      );
      const data = await response.json();
      if (response.ok) {
        setTrucks(data);
      }
    };

    fetchTrucks();
  }, []);

  const handleChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    onSave(formData, driverId);
    setFormData({
      truck_id: 0,
    });
  };

  //   useEffect(() => {
  //     setLoading(true);
  //     const fetchTruckTypes = async () => {

  //       try {

  //         const response = await getRequest(`${import.meta.env.VITE_API_URL}/truck-types`)
  //         const data = await response.json();
  //         if (response.ok) {
  //           setTruckTypes(data);
  //         }

  //         const ownerResponse = await getRequest(`${import.meta.env.VITE_API_URL}/owners`);
  //         const ownerData = await ownerResponse.json();
  //         if (ownerResponse.ok) {
  //           setOwners(ownerData['data']);
  //         }

  //         const driverResponse = await getRequest(`${import.meta.env.VITE_API_URL}/drivers`);
  //         const driverData = await driverResponse.json();
  //         if (driverResponse.ok) {
  //           setDrivers(driverData['data']);
  //         }

  //       } catch (e) {
  //         console.error(e);
  //       } finally {
  //         setLoading(false);
  //       }
  //     }

  //     fetchTruckTypes();
  //   }, []);

  //   if (loading) {
  //     return <LoadingSpinner />
  //   }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Assign Truck</DialogTitle>
          <DialogDescription>
            Select truck for the driver. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-1 gap-4">
            <Label htmlFor="truck_id">Trucks</Label>
            <Select
              value={formData.truck_id.toString()}
              onValueChange={(value) => handleChange("truck_id", Number(value))}
            >
              <SelectTrigger>
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                {trucks.length == 0 ? (
                  <p>No trucks registered</p>
                ) : (
                  trucks.map((t) => (
                    <SelectItem key={t.id} value={t.id.toString()}>
                      #{t.id} {t.model}
                    </SelectItem>
                  ))
                )}
              </SelectContent>
            </Select>
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
          <Button onClick={handleSubmit}>Assign Truck</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default memo(AssignVehicleForm);
