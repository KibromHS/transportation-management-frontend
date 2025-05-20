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

const AddAuctionForm: React.FC<AddTruckFormProps> = ({
  open,
  onOpenChange,
  onSave,
}) => {
  const [formData, setFormData] = React.useState({
    origin: "",
    destination: "",
    pickup_time: "",
    delivery_time: "",
    milage: 0,
    weight: 0,
    dispatcher_notes: "",
    expires_at: "",
  });

  const handleChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    onSave(formData);
    setFormData({
      origin: "",
      destination: "",
      pickup_time: "",
      delivery_time: "",
      milage: 0,
      weight: 0,
      dispatcher_notes: "",
      expires_at: "",
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

  //         const auctionResponse = await getRequest(`${import.meta.env.VITE_API_URL}/auctions`);
  //         const auctionData = await auctionResponse.json();
  //         if (auctionResponse.ok) {
  //           setAuctions(auctionData['data']);
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
          <DialogTitle>Add New Auction</DialogTitle>
          <DialogDescription>
            Enter the details for the new auction. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="origin">Origin</Label>
              <Input
                id="origin"
                placeholder="Origin Location"
                value={formData.origin}
                onChange={(e) => handleChange("origin", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="destination">Destination</Label>
              <Input
                id="destination"
                placeholder="Destination Location"
                value={formData.destination}
                onChange={(e) => handleChange("destination", e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="pickup_time">Pickup Time</Label>
              <Input
                id="pickup_time"
                placeholder="Pickup Time"
                type="date"
                value={formData.pickup_time}
                onChange={(e) => handleChange("pickup_time", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="destination">Delivery Time</Label>
              <Input
                id="delivery_time"
                placeholder="Delivery Time"
                type="date"
                value={formData.delivery_time}
                onChange={(e) => handleChange("delivery_time", e.target.value)}
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
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="milage">Distance</Label>
              <Input
                id="milage"
                placeholder=""
                type="number"
                value={formData.milage}
                onChange={(e) => handleChange("milage", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="weight">Weight</Label>
              <Input
                id="weight"
                placeholder=""
                type="number"
                value={formData.weight}
                onChange={(e) => handleChange("weight", e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="dispatcher_notes">Notes</Label>
            <Input
              id="dispatcher_notes"
              multiline
              rows={4}
              placeholder="Your note..."
              value={formData.dispatcher_notes}
              onChange={(e) => handleChange("dispatcher_notes", e.target.value)}
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Save Auction</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default memo(AddAuctionForm);
