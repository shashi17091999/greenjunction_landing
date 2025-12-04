import { useState, useEffect } from "react";
import { Package, ShoppingCart, DollarSign, TrendingUp, Plus, Upload, AlertCircle } from "lucide-react";
import { Button } from "../components/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/Table";
import { Badge } from "../components/Badge";
import AddProductModal from "../components/AddProductModal";
import { supabase } from "../integrations/client";
import { useToast } from "../hooks/use-toast";
import { Alert, AlertDescription } from "../ui/Alert";

const OEMDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [oemProfile, setOemProfile] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchOEMData();
  }, []);

  const fetchOEMData = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;

      const { data: profile, error: profileError } = await supabase
        .from('oem_profiles')
        .select('*')
        .eq('user_id', session.user.id)
        .maybeSingle();

      if (profileError) throw profileError;

      setOemProfile(profile);

      if (profile) {
        const { data: productsData, error: productsError } = await supabase
          .from('products')
          .select('*')
          .eq('oem_id', profile.id)
          .order('created_at', { ascending: false });

        if (productsError) throw productsError;
        setProducts(productsData || []);
      }
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!oemProfile) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardHeader>
            <CardTitle>No OEM Profile Found</CardTitle>
            <CardDescription>
              You need to register as an OEM to access this dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <a href="/oem-registration">
              <Button className="w-full">Register as OEM</Button>
            </a>
          </CardContent>
        </Card>
      </div>
    );
  }

  const approvedProducts = products.filter(p => p.status === 'approved').length;
  const pendingProducts = products.filter(p => p.status === 'pending').length;
  const rejectedProducts = products.filter(p => p.status === 'rejected').length;

  const stats = [
    { label: "Total Products", value: products.length.toString(), icon: Package, change: `${approvedProducts} approved` },
    { label: "Pending Review", value: pendingProducts.toString(), icon: ShoppingCart, change: `${rejectedProducts} rejected` },
    { label: "Profile Status", value: oemProfile.status, icon: DollarSign, change: oemProfile.status === 'approved' ? 'Active' : 'Under review' },
    { label: "Total Stock", value: products.reduce((sum, p) => sum + p.stock_quantity, 0).toString(), icon: TrendingUp, change: "units" }
  ];

  const getStatusBadge = (status) => {
    const variants = {
      approved: "default",
      pending: "secondary",
      draft: "outline",
      rejected: "destructive"
    };
    return <Badge variant={variants[status] || "outline"}>{status}</Badge>;
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="bg-background border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">OEM Dashboard</h1>
              <p className="text-sm text-muted-foreground">{oemProfile.company_name}</p>
            </div>
            <div className="flex items-center gap-3">
              {oemProfile.status === 'approved' && (
                <Button variant="cta" className="gap-2" onClick={() => setShowAddProduct(true)}>
                  <Plus className="h-4 w-4" />
                  Add Product
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {oemProfile.status !== 'approved' && (
          <Alert className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              {oemProfile.status === 'pending' &&
                "Your OEM profile is pending admin approval. You'll be able to add products once approved."}
              {oemProfile.status === 'rejected' &&
                `Your OEM profile was rejected. Reason: ${oemProfile.rejection_reason || 'Not specified'}`}
            </AlertDescription>
          </Alert>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Product Status Overview</CardTitle>
                <CardDescription>Summary of your product listings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Approved Products</span>
                    <Badge variant="default">{approvedProducts}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Pending Review</span>
                    <Badge variant="secondary">{pendingProducts}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Rejected</span>
                    <Badge variant="destructive">{rejectedProducts}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Product Catalog</CardTitle>
                <CardDescription>Manage your product listings and inventory</CardDescription>
              </CardHeader>
              <CardContent>
                {products.length === 0 ? (
                  <div className="text-center py-12">
                    <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">No products yet</p>
                    {oemProfile.status === 'approved' && (
                      <Button onClick={() => setShowAddProduct(true)}>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Your First Product
                      </Button>
                    )}
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Product Name</TableHead>
                        <TableHead>SKU</TableHead>
                        <TableHead>Stock</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {products.map((product) => (
                        <TableRow key={product.id}>
                          <TableCell className="font-medium">{product.name}</TableCell>
                          <TableCell className="font-mono text-sm">{product.sku}</TableCell>
                          <TableCell>
                            <Badge variant={product.stock_quantity < 20 ? "outline" : "secondary"}>
                              {product.stock_quantity} units
                            </Badge>
                          </TableCell>
                          <TableCell>₹{product.price.toLocaleString()}</TableCell>
                          <TableCell>
                            {getStatusBadge(product.status)}
                            {product.rejection_reason && (
                              <p className="text-xs text-destructive mt-1">{product.rejection_reason}</p>
                            )}
                          </TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm">View</Button>
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

      <AddProductModal
        open={showAddProduct}
        onClose={() => {
          setShowAddProduct(false);
          fetchOEMData();
        }}
      />
    </div>
  );
};

export default OEMDashboard;
