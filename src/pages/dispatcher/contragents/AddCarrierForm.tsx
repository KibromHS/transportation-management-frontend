import React, { memo, useEffect, useState } from "react";
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
import LoadingSpinner from "@/components/common/LoadingSpinner";

interface AddTruckFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (data: any) => void;
}

const AddCarrierForm: React.FC<AddTruckFormProps> = ({
  open,
  onOpenChange,
  onSave,
}) => {
  const [formData, setFormData] = React.useState({
    name: "",
    customer_type: "",
    address_line1: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
    fax: "",
    email: "",
    website: "",
    billing_method: "",
    payment_term: "",
    owner_id: 0,
  });

  const handleChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const [owners, setOwners] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    onSave(formData);
    setFormData({
      name: "",
      customer_type: "",
      address_line1: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      phone: "",
      fax: "",
      email: "",
      website: "",
      billing_method: "",
      payment_term: "",
      owner_id: 0,
    });
  };

  useEffect(() => {
    setLoading(true);
    const fetchTruckTypes = async () => {
      try {
        const ownerResponse = await getRequest(
          `${import.meta.env.VITE_API_URL}/owners`
        );
        const ownerData = await ownerResponse.json();
        if (ownerResponse.ok) {
          setOwners(ownerData["data"]);
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
          <DialogTitle>Add New Carrier</DialogTitle>
          <DialogDescription>
            Enter the details for the new carrier. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Carrier name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="Carrier email"
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
              placeholder="Carrier phone number"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              placeholder="City, State"
              value={formData.address_line1}
              onChange={(e) => handleChange("address_line1", e.target.value)}
            />
          </div>

          <div className="grid grid-cols-4 gap-2">
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => handleChange("city", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">State</Label>
              <Input
                id="state"
                value={formData.state}
                onChange={(e) => handleChange("state", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="zip">Zip</Label>
              <Input
                id="zip"
                value={formData.zip}
                onChange={(e) => handleChange("zip", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Input
                id="country"
                value={formData.country}
                onChange={(e) => handleChange("country", e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="owner_id">Owner</Label>
              <Select
                value={formData.owner_id.toString()}
                onValueChange={(value) =>
                  handleChange("owner_id", Number(value))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  {owners.map((o) => (
                    <SelectItem key={o.id} value={o.id.toString()}>
                      {o.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="customer_type">Type</Label>
              <Select
                value={formData.customer_type}
                onValueChange={(value) => handleChange("customer_type", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="customer">Customer</SelectItem>
                  <SelectItem value="supplier">Supplier</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="billing_method">Billing Method</Label>
              <Select
                value={formData.billing_method}
                onValueChange={(value) => handleChange("billing_method", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Factored">Factored</SelectItem>
                  <SelectItem value="Direct">Direct</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="payment_term">Payment Terms</Label>
              <Select
                value={formData.payment_term}
                onValueChange={(value) => handleChange("payment_term", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Due on receipt">Due on receipt</SelectItem>
                  <SelectItem value="Net 10">Net 10 Days</SelectItem>
                  <SelectItem value="Net 15">Net 15 Days</SelectItem>
                  <SelectItem value="Net 30">Net 30 Days</SelectItem>
                  <SelectItem value="Net 45">Net 45 Days</SelectItem>
                  <SelectItem value="Net 60">Net 60 Days</SelectItem>
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
          <Button onClick={handleSubmit}>Save Carrier</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default memo(AddCarrierForm);
