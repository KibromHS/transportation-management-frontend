import React, { memo } from "react";
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

interface AddTruckFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (data: any) => void;
}

const AddFacilityForm: React.FC<AddTruckFormProps> = ({
  open,
  onOpenChange,
  onSave,
}) => {
  const [formData, setFormData] = React.useState({
    name: "",
    address_line1: "",
    location: "",
  });

  const handleChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    onSave(formData);
    setFormData({
      name: "",
      address_line1: "",
      location: "",
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

  //         const facilityResponse = await getRequest(`${import.meta.env.VITE_API_URL}/facilitys`);
  //         const facilityData = await facilityResponse.json();
  //         if (facilityResponse.ok) {
  //           setFacilitys(facilityData['data']);
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
          <DialogTitle>Add New Facility</DialogTitle>
          <DialogDescription>
            Enter the details for the new facility. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Facility name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address_line1">Address Line</Label>
            <Input
              id="address_line1"
              value={formData.address_line1}
              onChange={(e) => handleChange("address_line1", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => handleChange("location", e.target.value)}
            />
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
          <Button onClick={handleSubmit}>Save Facility</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default memo(AddFacilityForm);
