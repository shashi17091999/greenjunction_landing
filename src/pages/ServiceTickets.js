import { useState } from "react";
import { Plus, Search, Filter, Clock, CheckCircle2, AlertCircle, XCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/Card";
import { Badge } from "../components/Badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/Dialog";
import { Label } from "../components/Label";
import { Textarea } from "../ui/Textar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/Select";

const ServiceTickets = () => {
  const [tickets] = useState([
    {
      id: "TKT-001",
      title: "Charger not responding",
      description: "The charger screen is blank and not starting",
      status: "in-progress",
      priority: "high",
      category: "Technical Issue",
      createdDate: "2024-01-15",
      productName: "Tata Power EZ Home 7.4kW",
      orderId: "ORD-2024-001",
    },
    {
      id: "TKT-002",
      title: "Installation rescheduling",
      description: "Need to reschedule installation to next week",
      status: "open",
      priority: "medium",
      category: "Installation",
      createdDate: "2024-01-14",
      productName: "ABB Terra AC 11kW",
      orderId: "ORD-2024-003",
    },
    {
      id: "TKT-003",
      title: "Warranty claim",
      description: "Cable connector is damaged, need replacement",
      status: "resolved",
      priority: "medium",
      category: "Warranty",
      createdDate: "2024-01-10",
      productName: "Delta AC Max 22kW",
      orderId: "ORD-2023-089",
    },
  ]);

  const getStatusIcon = (status) => {
    switch (status) {
      case "open":
        return <AlertCircle className="h-4 w-4" />;
      case "in-progress":
        return <Clock className="h-4 w-4" />;
      case "resolved":
        return <CheckCircle2 className="h-4 w-4" />;
      case "closed":
        return <XCircle className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "open":
        return "bg-blue-500/10 text-blue-500";
      case "in-progress":
        return "bg-yellow-500/10 text-yellow-600";
      case "resolved":
        return "bg-green-500/10 text-green-600";
      case "closed":
        return "bg-gray-500/10 text-gray-600";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-500/10 text-red-600";
      case "medium":
        return "bg-orange-500/10 text-orange-600";
      case "low":
        return "bg-blue-500/10 text-blue-600";
    }
  };

  const filterTicketsByStatus = (status) => {
    if (status === "all") return tickets;
    return tickets.filter((ticket) => ticket.status === status);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Service Tickets</h1>
            <p className="text-muted-foreground">Manage your support requests and warranty claims</p>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="cta" className="gap-2">
                <Plus className="h-4 w-4" />
                New Ticket
              </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Create Support Ticket</DialogTitle>
                <DialogDescription>
                  Describe your issue and we'll help you resolve it
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="order">Select Order</Label>
                  <Select>
                    <SelectTrigger id="order">
                      <SelectValue placeholder="Choose an order" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ord1">ORD-2024-001 - Tata Power EZ Home 7.4kW</SelectItem>
                      <SelectItem value="ord2">ORD-2024-003 - ABB Terra AC 11kW</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technical">Technical Issue</SelectItem>
                      <SelectItem value="installation">Installation</SelectItem>
                      <SelectItem value="warranty">Warranty Claim</SelectItem>
                      <SelectItem value="billing">Billing</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" placeholder="Brief description of the issue" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Provide detailed information about your issue"
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="priority">Priority</Label>
                  <Select>
                    <SelectTrigger id="priority">
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="cta" className="flex-1">Submit Ticket</Button>
                <Button variant="outline" className="flex-1">Cancel</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Search and Filter */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search tickets by ID, product, or description..."
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">All ({tickets.length})</TabsTrigger>
            <TabsTrigger value="open">Open ({filterTicketsByStatus("open").length})</TabsTrigger>
            <TabsTrigger value="in-progress">
              In Progress ({filterTicketsByStatus("in-progress").length})
            </TabsTrigger>
            <TabsTrigger value="resolved">
              Resolved ({filterTicketsByStatus("resolved").length})
            </TabsTrigger>
          </TabsList>

          {/* ALL Tickets */}
          <TabsContent value="all" className="space-y-4">
            {tickets.map((ticket) => (
              <Card key={ticket.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg">{ticket.title}</CardTitle>
                        <Badge className={getPriorityColor(ticket.priority)}>
                          {ticket.priority}
                        </Badge>
                      </div>
                      <CardDescription>
                        {ticket.id} • {ticket.productName} • Order: {ticket.orderId}
                      </CardDescription>
                    </div>
                    <Badge className={getStatusColor(ticket.status) + " gap-1"}>
                      {getStatusIcon(ticket.status)}
                      {ticket.status}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{ticket.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{ticket.category}</span>
                      <span>•</span>
                      <span>Created {new Date(ticket.createdDate).toLocaleDateString()}</span>
                    </div>
                    <Button variant="outline" size="sm">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Filtered Tabs */}
          {["open", "in-progress", "resolved"].map((status) => (
            <TabsContent key={status} value={status} className="space-y-4">
              {filterTicketsByStatus(status).map((ticket) => (
                <Card key={ticket.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-lg">{ticket.title}</CardTitle>
                          <Badge className={getPriorityColor(ticket.priority)}>
                            {ticket.priority}
                          </Badge>
                        </div>
                        <CardDescription>
                          {ticket.id} • {ticket.productName} • Order: {ticket.orderId}
                        </CardDescription>
                      </div>

                      <Badge className={getStatusColor(ticket.status) + " gap-1"}>
                        {getStatusIcon(ticket.status)}
                        {ticket.status}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{ticket.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{ticket.category}</span>
                        <span>•</span>
                        <span>Created {new Date(ticket.createdDate).toLocaleDateString()}</span>
                      </div>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceTickets;
