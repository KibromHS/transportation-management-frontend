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

const AddDriverForm: React.FC<AddTruckFormProps> = ({
  open,
  onOpenChange,
  onSave,
}) => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    citizenship: "",
    language: "",
    password: "",
  });

  const handleChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    onSave(formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      citizenship: "",
      language: "",
      password: "",
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
          <DialogTitle>Add New Driver</DialogTitle>
          <DialogDescription>
            Enter the details for the new driver. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Driver full name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="Driver email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Driver phone number"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              placeholder="City, State"
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="citizenship">Citizenship</Label>
              <Select
                value={formData.citizenship}
                onValueChange={(value) => handleChange("citizenship", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="citizen">Citizen</SelectItem>
                  <SelectItem value="resident">Resident</SelectItem>
                  <SelectItem value="NL">NL</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <Select
                value={formData.language}
                onValueChange={(value) => handleChange("language", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="EN">EN</SelectItem>
                  <SelectItem value="RU">RU</SelectItem>
                </SelectContent>
              </Select>
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
          <Button onClick={handleSubmit}>Save Driver</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default memo(AddDriverForm);
