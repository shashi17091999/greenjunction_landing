import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "./Button";
import { Input } from "./Input";
import { Label } from "./Label";
import { Textarea } from "../ui/Textar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/Select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./Dialog";
import { useToast } from "../hooks/use-toast";
import { supabase } from "../integrations/client";

const AddProductModal = ({ open, onClose }) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [oemId, setOemId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    sku: "",
    power: "",
    connector: "",
    price: "",
    stock: "",
    warranty: "",
    description: ""
  });

  useEffect(() => {
    if (open) {
      fetchOEMProfile();
    }
  }, [open]);

  const fetchOEMProfile = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;

      const { data, error } = await supabase
        .from('oem_profiles')
        .select('id')
        .eq('user_id', session.user.id)
        .eq('status', 'approved')
        .maybeSingle();

      if (error) throw error;
      setOemId(data?.id || null);
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!oemId) {
      toast({
        title: "Error",
        description: "OEM profile not found",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase
        .from('products')
        .insert({
          oem_id: oemId,
          name: formData.name,
          sku: formData.sku,
          power_rating: formData.power,
          connector_type: formData.connector,
          price: parseFloat(formData.price),
          stock_quantity: parseInt(formData.stock),
          warranty_period: formData.warranty,
          description: formData.description,
          status: 'pending_review',
        });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Product submitted for review. Admin will approve it soon.",
      });

      onClose();
      setFormData({
        name: "",
        sku: "",
        power: "",
        connector: "",
        price: "",
        stock: "",
        warranty: "",
        description: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
          <DialogDescription>
            Add a new charger to your product catalog
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Product Name *</Label>
              <Input
                id="name"
                placeholder="e.g., EZ Home 7.4kW"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="sku">SKU / Model Number *</Label>
              <Input
                id="sku"
                placeholder="e.g., EZH-7.4-001"
                value={formData.sku}
                onChange={(e) => handleChange("sku", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="power">Power Rating *</Label>
              <Select value={formData.power} onValueChange={(value) => handleChange("power", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select power rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3.3kW">3.3kW</SelectItem>
                  <SelectItem value="7.4kW">7.4kW</SelectItem>
                  <SelectItem value="11kW">11kW</SelectItem>
                  <SelectItem value="22kW">22kW</SelectItem>
                  <SelectItem value="50kW">50kW</SelectItem>
                  <SelectItem value="100kW+">100kW+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="connector">Connector Type *</Label>
              <Select value={formData.connector} onValueChange={(value) => handleChange("connector", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select connector" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Type 2">Type 2</SelectItem>
                  <SelectItem value="CCS">CCS</SelectItem>
                  <SelectItem value="CHAdeMO">CHAdeMO</SelectItem>
                  <SelectItem value="GB/T">GB/T</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">Price (₹) *</Label>
              <Input
                id="price"
                type="number"
                placeholder="e.g., 45000"
                value={formData.price}
                onChange={(e) => handleChange("price", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="stock">Initial Stock *</Label>
              <Input
                id="stock"
                type="number"
                placeholder="e.g., 50"
                value={formData.stock}
                onChange={(e) => handleChange("stock", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="warranty">Warranty Period *</Label>
              <Select value={formData.warranty} onValueChange={(value) => handleChange("warranty", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select warranty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1 Year">1 Year</SelectItem>
                  <SelectItem value="2 Years">2 Years</SelectItem>
                  <SelectItem value="3 Years">3 Years</SelectItem>
                  <SelectItem value="5 Years">5 Years</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Product Description</Label>
            <Textarea
              id="description"
              placeholder="Describe the key features and specifications..."
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              rows={4}
            />
          </div>

          <div className="flex justify-end gap-3">
            <Button type="button" variant="outline" onClick={onClose} disabled={loading}>
              Cancel
            </Button>
            <Button type="submit" variant="cta" disabled={loading}>
              {loading ? "Adding..." : "Add Product"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProductModal;
