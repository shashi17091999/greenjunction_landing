import { Package, MapPin, Calendar, FileText } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import { Badge } from "../components/Badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs";

const orders = [
  {
    id: "EVG-2025-001234",
    date: "2025-10-08",
    product: "Tata Power EZ Home 7.4kW",
    status: "assessment_scheduled",
    total: 49000,
    assessmentDate: "2025-10-10",
    image: "/placeholder.svg"
  },
  {
    id: "EVG-2025-001120",
    date: "2025-09-15",
    product: "Delta AC Max 22kW",
    status: "installed",
    total: 93000,
    installDate: "2025-09-28",
    image: "/placeholder.svg"
  }
];

const MyOrders = () => {
  const getStatusBadge = (status) => {
    const variants = {
      assessment_scheduled: { label: "Assessment Scheduled", variant: "default" },
      installed: { label: "Installed", variant: "secondary" },
      in_progress: { label: "In Progress", variant: "outline" }
    };

    const config = variants[status] || variants.in_progress;
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">My Orders</h1>
            <p className="text-muted-foreground mb-8">
              Track and manage your EV charger orders
            </p>

            <Tabs defaultValue="all" className="mb-6">
              <TabsList>
                <TabsTrigger value="all">All Orders</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4 mt-6">
                {orders.map((order) => (
                  <Card key={order.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg mb-1">Order {order.id}</CardTitle>
                          <p className="text-sm text-muted-foreground">
                            Placed on{" "}
                            {new Date(order.date).toLocaleDateString("en-IN", {
                              year: "numeric",
                              month: "long",
                              day: "numeric"
                            })}
                          </p>
                        </div>
                        {getStatusBadge(order.status)}
                      </div>
                    </CardHeader>

                    <CardContent>
                      <div className="flex gap-4 mb-4">
                        <div className="w-24 h-24 bg-muted rounded-md flex-shrink-0" />
                        <div className="flex-1">
                          <h3 className="font-medium mb-2">{order.product}</h3>
                          <p className="text-2xl font-bold mb-2">₹{order.total.toLocaleString()}</p>
                        </div>
                      </div>

                      {/* Timeline */}
                      <div className="border-t pt-4 mb-4">
                        <div className="space-y-3">
                          {order.status === "assessment_scheduled" && (
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                <Calendar className="h-4 w-4 text-primary" />
                              </div>
                              <div>
                                <p className="font-medium text-sm">Site assessment scheduled</p>
                                <p className="text-xs text-muted-foreground">
                                  {new Date(order.assessmentDate).toLocaleDateString("en-IN", {
                                    month: "long",
                                    day: "numeric"
                                  })}{" "}
                                  • 10:00 AM - 12:00 PM
                                </p>
                              </div>
                            </div>
                          )}

                          {order.status === "installed" && (
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center">
                                <Package className="h-4 w-4 text-success" />
                              </div>
                              <div>
                                <p className="font-medium text-sm">Successfully installed</p>
                                <p className="text-xs text-muted-foreground">
                                  Installed on{" "}
                                  {new Date(order.installDate).toLocaleDateString("en-IN")}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-2">
                          <FileText className="h-4 w-4" />
                          View Details
                        </Button>

                        {order.status === "installed" && (
                          <Button variant="outline" size="sm" className="gap-2">
                            <MapPin className="h-4 w-4" />
                            Warranty Certificate
                          </Button>
                        )}

                        {order.status === "assessment_scheduled" && (
                          <Button variant="cta" size="sm">
                            Reschedule Assessment
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="active" className="mt-6">
                <p className="text-center text-muted-foreground py-12">No active orders</p>
              </TabsContent>

              <TabsContent value="completed" className="mt-6">
                <p className="text-center text-muted-foreground py-12">No completed orders</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MyOrders;
