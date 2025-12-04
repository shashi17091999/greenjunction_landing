import { useState, useEffect } from "react";
import { Users, Package, CheckCircle2, XCircle, Clock } from "lucide-react";
import { Button } from "../components/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/Table";
import { Badge } from "../components/Badge";
import { supabase } from "../integrations/client";
import { useToast } from "../hooks/use-toast";
import { Textarea } from "../ui/Textar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "../components/Dialog";

const AdminConsole = () => {
  const [activeTab, setActiveTab] = useState("oem-approvals");
  const [pendingOEMs, setPendingOEMs] = useState([]);
  const [pendingProducts, setPendingProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [rejectionReason, setRejectionReason] = useState("");
  const [showRejectDialog, setShowRejectDialog] = useState(false);
  const [actionType, setActionType] = useState('oem');
  const { toast } = useToast();

  useEffect(() => {
    fetchPendingApprovals();
  }, []);

  const fetchPendingApprovals = async () => {
    try {
      // Fetch pending OEM profiles
      const { data: oemsData, error: oemsError } = await supabase
        .from('oem_profiles')
        .select('*')
        .eq('status', 'pending')
        .order('created_at', { ascending: false });

      if (oemsError) throw oemsError;
      setPendingOEMs(oemsData || []);

      // Fetch pending products
      const { data: productsData, error: productsError } = await supabase
        .from('products')
        .select(`
          *,
          oem_profiles (
            company_name
          )
        `)
        .eq('status', 'pending_review')
        .order('created_at', { ascending: false });

      if (productsError) throw productsError;
      setPendingProducts(productsData || []);
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

  const handleApproveOEM = async (oemId) => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;

      const { error } = await supabase
        .from('oem_profiles')
        .update({
          status: 'approved',
          approved_at: new Date().toISOString(),
          approved_by: session.user.id
        })
        .eq('id', oemId);

      if (error) throw error;

      toast({
        title: "Success",
        description: "OEM profile approved successfully",
      });

      fetchPendingApprovals();
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleRejectOEM = async () => {
    try {
      const { error } = await supabase
        .from('oem_profiles')
        .update({
          status: 'rejected',
          rejection_reason: rejectionReason
        })
        .eq('id', selectedItem.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "OEM profile rejected",
      });

      setShowRejectDialog(false);
      setRejectionReason("");
      fetchPendingApprovals();
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleApproveProduct = async (productId) => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;

      const { error } = await supabase
        .from('products')
        .update({
          status: 'approved',
          approved_at: new Date().toISOString(),
          reviewed_by: session.user.id
        })
        .eq('id', productId);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Product approved successfully",
      });

      fetchPendingApprovals();
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleRejectProduct = async () => {
    try {
      const { error } = await supabase
        .from('products')
        .update({
          status: 'rejected',
          rejection_reason: rejectionReason
        })
        .eq('id', selectedItem.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Product rejected",
      });

      setShowRejectDialog(false);
      setRejectionReason("");
      fetchPendingApprovals();
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const openRejectDialog = (item, type) => {
    setSelectedItem(item);
    setActionType(type);
    setShowRejectDialog(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading admin console...</p>
        </div>
      </div>
    );
  }

  const kpiStats = [
    { label: "Pending OEMs", value: pendingOEMs.length.toString(), icon: Users, color: "text-primary" },
    { label: "Pending Products", value: pendingProducts.length.toString(), icon: Package, color: "text-warning" },
    { label: "Total Pending", value: (pendingOEMs.length + pendingProducts.length).toString(), icon: Clock, color: "text-accent" },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-background border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Admin Console</h1>
              <p className="text-sm text-muted-foreground">Manage OEM & Product Approvals</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* KPI Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {kpiStats.map((stat) => (
            <Card key={stat.label}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="oem-approvals">
              OEM Approvals
              {pendingOEMs.length > 0 && (
                <Badge variant="secondary" className="ml-2">{pendingOEMs.length}</Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="product-approvals">
              Product Approvals
              {pendingProducts.length > 0 && (
                <Badge variant="secondary" className="ml-2">{pendingProducts.length}</Badge>
              )}
            </TabsTrigger>
          </TabsList>

          {/* OEM Approvals Tab */}
          <TabsContent value="oem-approvals" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Pending OEM Registrations</CardTitle>
                <CardDescription>Review and approve OEM applications</CardDescription>
              </CardHeader>
              <CardContent>
                {pendingOEMs.length === 0 ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No pending OEM approvals</p>
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Company Name</TableHead>
                        <TableHead>Contact Person</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>GST Number</TableHead>
                        <TableHead>Certifications</TableHead>
                        <TableHead>Applied Date</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {pendingOEMs.map((oem) => (
                        <TableRow key={oem.id}>
                          <TableCell className="font-medium">{oem.company_name}</TableCell>
                          <TableCell>
                            {oem.contact_name}
                            <br />
                            <span className="text-xs text-muted-foreground">{oem.contact_number}</span>
                          </TableCell>
                          <TableCell>{oem.company_email}</TableCell>
                          <TableCell className="font-mono text-sm">{oem.gst_number}</TableCell>
                          <TableCell>
                            <div className="flex gap-1">
                              {oem.bis_certification && <Badge variant="default" className="text-xs">BIS</Badge>}
                              {oem.arai_certification && <Badge variant="secondary" className="text-xs">ARAI</Badge>}
                            </div>
                          </TableCell>
                          <TableCell>{new Date(oem.created_at).toLocaleDateString()}</TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button 
                                variant="default" 
                                size="sm"
                                onClick={() => handleApproveOEM(oem.id)}
                              >
                                <CheckCircle2 className="h-4 w-4 mr-1" />
                                Approve
                              </Button>
                              <Button 
                                variant="destructive" 
                                size="sm"
                                onClick={() => openRejectDialog(oem, 'oem')}
                              >
                                <XCircle className="h-4 w-4 mr-1" />
                                Reject
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Product Approvals Tab */}
          <TabsContent value="product-approvals" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Pending Product Approvals</CardTitle>
                <CardDescription>Review and approve product submissions</CardDescription>
              </CardHeader>
              <CardContent>
                {pendingProducts.length === 0 ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No pending product approvals</p>
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Product Name</TableHead>
                        <TableHead>OEM</TableHead>
                        <TableHead>SKU</TableHead>
                        <TableHead>Power Rating</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Submitted</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {pendingProducts.map((product) => (
                        <TableRow key={product.id}>
                          <TableCell className="font-medium">{product.name}</TableCell>
                          <TableCell>{product.oem_profiles?.company_name}</TableCell>
                          <TableCell className="font-mono text-sm">{product.sku}</TableCell>
                          <TableCell>{product.power_rating || 'N/A'}</TableCell>
                          <TableCell>₹{product.price.toLocaleString()}</TableCell>
                          <TableCell>{new Date(product.created_at).toLocaleDateString()}</TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button 
                                variant="default" 
                                size="sm"
                                onClick={() => handleApproveProduct(product.id)}
                              >
                                <CheckCircle2 className="h-4 w-4 mr-1" />
                                Approve
                              </Button>
                              <Button 
                                variant="destructive" 
                                size="sm"
                                onClick={() => openRejectDialog(product, 'product')}
                              >
                                <XCircle className="h-4 w-4 mr-1" />
                                Reject
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Rejection Dialog */}
      <Dialog open={showRejectDialog} onOpenChange={setShowRejectDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reject {actionType === 'oem' ? 'OEM' : 'Product'}</DialogTitle>
            <DialogDescription>
              Please provide a reason for rejection
            </DialogDescription>
          </DialogHeader>
          <Textarea
            placeholder="Enter rejection reason..."
            value={rejectionReason}
            onChange={(e) => setRejectionReason(e.target.value)}
            rows={4}
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowRejectDialog(false)}>
              Cancel
            </Button>
            <Button 
              variant="destructive" 
              onClick={actionType === 'oem' ? handleRejectOEM : handleRejectProduct}
              disabled={!rejectionReason.trim()}
            >
              Reject
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminConsole;
