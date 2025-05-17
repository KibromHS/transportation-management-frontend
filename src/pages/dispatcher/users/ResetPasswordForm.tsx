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
  userId: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (data: any, driverId: number) => void;
}

const ResetPasswordForm: React.FC<AddTruckFormProps> = ({
  userId,
  open,
  onOpenChange,
  onSave,
}) => {
  const [formData, setFormData] = React.useState({
    password: "",
  });

  const handleChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    onSave(formData, userId);
    setFormData({
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
          <DialogTitle>Reset Password</DialogTitle>
          <DialogDescription>
            Set password for the user. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
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
          <Button onClick={handleSubmit}>Change Password</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default memo(ResetPasswordForm);
