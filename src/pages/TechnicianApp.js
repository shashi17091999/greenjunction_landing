import { useState } from "react";
import { 
  MapPin, Clock, CheckCircle, Camera, FileText, DollarSign, 
  Bell, Settings, LogOut, User, Upload, Download, MessageCircle,
  Award, BookOpen, ChevronRight, Filter, Navigation, Phone, Mail,
  Calendar, IndianRupee, TrendingUp, CheckCircle2, AlertCircle
} from "lucide-react";
import { Button } from "../components/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/Card";
import { Badge } from "../components/Badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs";
import { Checkbox } from "../ui/Checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/Avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../components/Dialog";
import { Input } from "../components/Input";
import { Label } from "../components/Label";
import { Textarea } from "../ui/Textar";
import { Separator } from "../ui/Separator";
import { ScrollArea } from "../ui/ScrollArea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/Table";

const jobs = [
  { id: "JOB-2345", type: "Installation", customer: "Rajesh Kumar", phone: "+91 98765 43210", address: "Green Avenue, Andheri West, Mumbai", product: "7.4kW AC Type 2 Charger", connectorType: "Type 2", date: "Today", time: "10:00 AM - 12:00 PM", distance: "2.3 km", status: "assigned", payment: 4000, estimatedDuration: "2 hours" },
  { id: "JOB-2346", type: "Service", customer: "Mumbai Housing Society", phone: "+91 98123 45678", address: "Powai Lake Road, Powai, Mumbai", product: "22kW AC Charger", connectorType: "CCS", date: "Today", time: "2:00 PM - 4:00 PM", distance: "5.1 km", status: "in-progress", payment: 2500, estimatedDuration: "1.5 hours" },
  { id: "JOB-2347", type: "Installation", customer: "Priya Sharma", phone: "+91 99887 76543", address: "Bandra West, Mumbai", product: "11kW AC Charger", connectorType: "Type 2", date: "Tomorrow", time: "11:00 AM - 1:00 PM", distance: "4.2 km", status: "assigned", payment: 3500, estimatedDuration: "2 hours" }
];

const completedJobs = [
  { id: "JOB-2340", customer: "Tech Park Pvt Ltd", date: "20 Oct 2025", amount: 5000, status: "Verified" },
  { id: "JOB-2338", customer: "Residential Complex A", date: "18 Oct 2025", amount: 4000, status: "Verified" },
  { id: "JOB-2335", customer: "Green Apartments", date: "15 Oct 2025", amount: 3500, status: "Verified" }
];

const transactions = [
  { id: "TXN-001", jobId: "JOB-2340", date: "21 Oct 2025", amount: 5000, status: "Paid" },
  { id: "TXN-002", jobId: "JOB-2338", date: "19 Oct 2025", amount: 4000, status: "Paid" },
  { id: "TXN-003", jobId: "JOB-2335", date: "16 Oct 2025", amount: 3500, status: "Paid" },
  { id: "TXN-004", jobId: "JOB-2330", date: "12 Oct 2025", amount: 4500, status: "Paid" },
  { id: "TXN-005", jobId: "JOB-2325", date: "8 Oct 2025", amount: 3000, status: "Paid" }
];

const notifications = [
  { id: 1, type: "job", title: "New Job Assigned", message: "JOB-2347 has been assigned to you for tomorrow", time: "10 mins ago", read: false },
  { id: 2, type: "payment", title: "Payment Received", message: "₹5,000 for JOB-2340 has been credited", time: "2 hours ago", read: false },
  { id: 3, type: "alert", title: "SLA Reminder", message: "JOB-2346 deadline approaching in 2 hours", time: "3 hours ago", read: true }
];

const statusColors = {
  "assigned": "bg-blue-500/10 text-blue-500 border-blue-500/20",
  "in-progress": "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  "completed": "bg-green-500/10 text-green-500 border-green-500/20",
  "verified": "bg-green-500/10 text-green-500 border-green-500/20",
  "overdue": "bg-red-500/10 text-red-500 border-red-500/20"
};

const TechnicianApp = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showSupport, setShowSupport] = useState(false);
  const [jobFilter, setJobFilter] = useState("today");
  const [checklist, setChecklist] = useState({
    electricalCapacity: false,
    mountingLocation: false,
    wallBracket: false,
    wiring: false,
    testing: false,
    demonstration: false
  });

  const filteredJobs = jobs.filter(job => {
    if (jobFilter === "today") return job.date === "Today";
    if (jobFilter === "upcoming") return job.date !== "Today";
    if (jobFilter === "completed") return job.status === "completed";
    return true;
  });

  const unreadNotifications = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-muted/30">
       <header className="bg-background border-b sticky top-0 z-10 shadow-sm">
        <div className="px-4 py-3">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12 border-2 border-primary">
                <AvatarImage src="/placeholder.svg" alt="Amit" />
                <AvatarFallback className="bg-primary text-primary-foreground">AS</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-lg font-bold">Hi Amit 👋</h1>
                <p className="text-xs text-muted-foreground">TECH-1234</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative"
                onClick={() => setShowNotifications(true)}
              >
                <Bell className="h-5 w-5" />
                {unreadNotifications > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-destructive text-destructive-foreground text-xs flex items-center justify-center">
                    {unreadNotifications}
                  </span>
                )}
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setShowProfile(true)}>
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Welcome Message */}
          <div className="mb-4">
            <p className="text-sm text-muted-foreground">Ready for your next job?</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-2">
            <Card className="bg-blue-500/10 border-blue-500/20">
              <CardContent className="p-3 text-center">
                <p className="text-xl font-bold text-blue-600">2</p>
                <p className="text-xs text-muted-foreground">Today</p>
              </CardContent>
            </Card>
            <Card className="bg-yellow-500/10 border-yellow-500/20">
              <CardContent className="p-3 text-center">
                <p className="text-xl font-bold text-yellow-600">1</p>
                <p className="text-xs text-muted-foreground">Pending</p>
              </CardContent>
            </Card>
            <Card className="bg-green-500/10 border-green-500/20">
              <CardContent className="p-3 text-center">
                <p className="text-xl font-bold text-green-600">28</p>
                <p className="text-xs text-muted-foreground">Month</p>
              </CardContent>
            </Card>
            <Card className="bg-primary/10 border-primary/20">
              <CardContent className="p-3 text-center">
                <p className="text-xl font-bold text-primary">₹48k</p>
                <p className="text-xs text-muted-foreground">MTD</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </header>

      <main className="px-4 py-6">
        <Tabs defaultValue="jobs" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="jobs">Jobs</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="support">Support</TabsTrigger>
          </TabsList>

          <TabsContent value="jobs" className="space-y-4">
            {/* Job Filters */}
            <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
              <Button
                variant={jobFilter === "today" ? "default" : "outline"}
                size="sm"
                onClick={() => setJobFilter("today")}
              >
                Today
              </Button>
              <Button
                variant={jobFilter === "upcoming" ? "default" : "outline"}
                size="sm"
                onClick={() => setJobFilter("upcoming")}
              >
                Upcoming
              </Button>
              <Button
                variant={jobFilter === "completed" ? "default" : "outline"}
                size="sm"
                onClick={() => setJobFilter("completed")}
              >
                Completed
              </Button>
              <Button
                variant={jobFilter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setJobFilter("all")}
              >
                All
              </Button>
            </div>

            {/* Job List */}
            {filteredJobs.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">No jobs found for this filter</p>
                </CardContent>
              </Card>
            ) : (
              filteredJobs.map((job) => (
                <Card 
                  key={job.id} 
                  className="cursor-pointer hover:shadow-lg transition-all border-l-4"
                  style={{ borderLeftColor: job.status === "assigned" ? "#3b82f6" : job.status === "in-progress" ? "#eab308" : "#22c55e" }}
                  onClick={() => setSelectedJob(job)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <CardTitle className="text-base">{job.type}</CardTitle>
                          <Badge className={statusColors[job.status]}>
                            {job.status.replace("-", " ")}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">{job.id}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="font-medium mb-1">{job.customer}</p>
                      <div className="flex items-center gap-2">
                        <Phone className="h-3 w-3 text-muted-foreground" />
                        <p className="text-xs text-muted-foreground">{job.phone}</p>
                      </div>
                    </div>

                    <div className="bg-muted/50 p-2 rounded-lg">
                      <p className="text-sm font-medium mb-1">{job.product}</p>
                      <p className="text-xs text-muted-foreground">Connector: {job.connectorType}</p>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      <span className="text-muted-foreground text-xs flex-1">{job.address}</span>
                      <Badge variant="outline" className="text-xs">{job.distance}</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground text-xs">{job.date} • {job.time}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">~{job.estimatedDuration}</span>
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Payment</span>
                      <span className="font-bold text-lg text-primary">₹{job.payment.toLocaleString()}</span>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" className="flex-1 gap-2" size="sm">
                        <Navigation className="h-4 w-4" />
                        Navigate
                      </Button>
                      <Button 
                        variant={job.status === "assigned" ? "default" : "cta"} 
                        className="flex-1" 
                        size="sm"
                      >
                        {job.status === "assigned" ? "Start Job" : "Continue"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}

            {/* Job Detail Dialog */}
            {selectedJob && (
              <Dialog open={!!selectedJob} onOpenChange={() => setSelectedJob(null)}>
                <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Job Details - {selectedJob.id}</DialogTitle>
                    <DialogDescription>{selectedJob.customer}</DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-4">
                    {/* Customer & Location Info */}
                    <Card>
                      <CardContent className="pt-4 space-y-3">
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium">Location</p>
                            <p className="text-xs text-muted-foreground">{selectedJob.address}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium">Contact</p>
                            <p className="text-xs text-muted-foreground">{selectedJob.phone}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium">Schedule</p>
                            <p className="text-xs text-muted-foreground">{selectedJob.date} • {selectedJob.time}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Map Placeholder */}
                    <Card className="bg-muted">
                      <CardContent className="p-4">
                        <div className="h-32 rounded-lg bg-muted-foreground/10 flex items-center justify-center">
                          <div className="text-center">
                            <MapPin className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                            <p className="text-xs text-muted-foreground">Map view integration</p>
                          </div>
                        </div>
                        <Button variant="outline" className="w-full mt-3 gap-2" size="sm">
                          <Navigation className="h-4 w-4" />
                          Open in Maps
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Installation Checklist */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Installation Checklist</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {Object.entries({
                          electricalCapacity: "Verify electrical capacity",
                          mountingLocation: "Check mounting location",
                          wallBracket: "Install wall bracket",
                          wiring: "Connect wiring",
                          testing: "Test charging",
                          demonstration: "Customer demonstration"
                        }).map(([key, label]) => (
                          <label key={key} className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-muted transition-colors">
                            <Checkbox 
                              checked={checklist[key]}
                              onCheckedChange={(checked) => 
                                setChecklist(prev => ({ ...prev, [key]: checked }))
                              }
                            />
                            <span className="text-sm flex-1">{label}</span>
                            {checklist[key] && (
                              <CheckCircle2 className="h-4 w-4 text-green-600" />
                            )}
                          </label>
                        ))}
                      </CardContent>
                    </Card>

                    {/* Photo Documentation */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Photo Documentation</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-3 gap-2">
                          <Button variant="outline" className="h-24 flex-col gap-2">
                            <Camera className="h-6 w-6" />
                            <span className="text-xs">Before</span>
                          </Button>
                          <Button variant="outline" className="h-24 flex-col gap-2">
                            <Camera className="h-6 w-6" />
                            <span className="text-xs">During</span>
                          </Button>
                          <Button variant="outline" className="h-24 flex-col gap-2">
                            <Camera className="h-6 w-6" />
                            <span className="text-xs">After</span>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Customer Signature */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Customer Signature</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="border-2 border-dashed rounded-lg h-32 flex items-center justify-center bg-muted/30">
                          <p className="text-sm text-muted-foreground">Tap to capture signature</p>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Notes */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Notes / Feedback</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Textarea 
                          placeholder="Add any notes or observations..." 
                          rows={3}
                          className="resize-none"
                        />
                      </CardContent>
                    </Card>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" className="flex-1" onClick={() => setSelectedJob(null)}>
                        Cancel
                      </Button>
                      <Button variant="cta" className="flex-1 gap-2">
                        <CheckCircle className="h-4 w-4" />
                        Complete Job
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Completed Jobs</CardTitle>
                <CardDescription>History of verified installations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {completedJobs.map((job) => (
                    <div 
                      key={job.id} 
                      className="flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-medium text-sm">{job.id}</p>
                          <Badge className="bg-green-500/10 text-green-600 border-green-500/20 text-xs">
                            {job.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{job.customer}</p>
                        <p className="text-xs text-muted-foreground mt-1">{job.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">₹{job.amount.toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="earnings" className="space-y-4">
            {/* Summary Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <p className="text-xs text-muted-foreground">This Week</p>
                  </div>
                  <p className="text-2xl font-bold text-primary">₹12,500</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5">
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <IndianRupee className="h-5 w-5 text-green-600" />
                    <p className="text-xs text-muted-foreground">This Month</p>
                  </div>
                  <p className="text-2xl font-bold text-green-600">₹48,200</p>
                </CardContent>
              </Card>
            </div>

            {/* Additional Stats */}
            <div className="grid grid-cols-3 gap-2">
              <Card>
                <CardContent className="pt-4 text-center">
                  <p className="text-lg font-bold">₹3,200</p>
                  <p className="text-xs text-muted-foreground">Today</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4 text-center">
                  <p className="text-lg font-bold">₹8,500</p>
                  <p className="text-xs text-muted-foreground">Pending</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4 text-center">
                  <p className="text-lg font-bold">45</p>
                  <p className="text-xs text-muted-foreground">Jobs</p>
                </CardContent>
              </Card>
            </div>

            {/* Transaction History */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Transaction History</CardTitle>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" />
                    Export
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px]">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Job ID</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {transactions.map((txn) => (
                        <TableRow key={txn.id}>
                          <TableCell className="font-medium text-sm">{txn.jobId}</TableCell>
                          <TableCell className="text-xs text-muted-foreground">{txn.date}</TableCell>
                          <TableCell className="text-right font-bold text-sm">₹{txn.amount.toLocaleString()}</TableCell>
                          <TableCell>
                            <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                              {txn.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile & Certification Tab */}
          <TabsContent value="profile" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-20 w-20 border-2 border-primary">
                    <AvatarImage src="/placeholder.svg" alt="Amit" />
                    <AvatarFallback className="bg-primary text-primary-foreground text-xl">AS</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Upload className="h-4 w-4" />
                    Change Photo
                  </Button>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <Label className="text-xs text-muted-foreground">Full Name</Label>
                    <Input value="Amit Sharma" className="mt-1" />
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground">Contact Number</Label>
                    <Input value="+91 98765 43210" className="mt-1" />
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground">Email</Label>
                    <Input value="amit.sharma@email.com" className="mt-1" />
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground">Address</Label>
                    <Textarea value="Mumbai, Maharashtra" rows={2} className="mt-1" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Certifications & Documents</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="text-sm font-medium">Electrical Safety License</p>
                      <p className="text-xs text-muted-foreground">Valid until Dec 2026</p>
                    </div>
                  </div>
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="text-sm font-medium">EV Installer Certificate</p>
                      <p className="text-xs text-muted-foreground">BIS Certified</p>
                    </div>
                  </div>
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg border-dashed">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-yellow-600" />
                    <div>
                      <p className="text-sm font-medium">Advanced Training</p>
                      <p className="text-xs text-muted-foreground">Renewal due soon</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Upload
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Bank Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <Label className="text-xs text-muted-foreground">Account Holder Name</Label>
                  <Input value="Amit Sharma" className="mt-1" />
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">Account Number</Label>
                  <Input value="XXXX XXXX 1234" className="mt-1" />
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">IFSC Code</Label>
                  <Input value="HDFC0001234" className="mt-1" />
                </div>
              </CardContent>
            </Card>

            <Button variant="cta" className="w-full">
              Save Changes
            </Button>
          </TabsContent>

          {/* Support Tab */}
          <TabsContent value="support" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Contact Support</CardTitle>
                <CardDescription>Get help from Green Junction team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start gap-3 h-auto py-4">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <div className="text-left">
                    <p className="font-medium">Live Chat</p>
                    <p className="text-xs text-muted-foreground">Get instant help</p>
                  </div>
                  <ChevronRight className="h-5 w-5 ml-auto" />
                </Button>
                
                <Button variant="outline" className="w-full justify-start gap-3 h-auto py-4" asChild>
                  <a href="tel:+918069112233">
                    <Phone className="h-5 w-5 text-primary" />
                    <div className="text-left">
                      <p className="font-medium">Call Support</p>
                      <p className="text-xs text-muted-foreground">+91 80691 12233</p>
                    </div>
                    <ChevronRight className="h-5 w-5 ml-auto" />
                  </a>
                </Button>
                
                <Button variant="outline" className="w-full justify-start gap-3 h-auto py-4" asChild>
                  <a href="mailto:technician@greenjunction.in">
                    <Mail className="h-5 w-5 text-primary" />
                    <div className="text-left">
                      <p className="font-medium">Email Us</p>
                      <p className="text-xs text-muted-foreground">technician@greenjunction.in</p>
                    </div>
                    <ChevronRight className="h-5 w-5 ml-auto" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Help Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start gap-3" asChild>
                  <a href="/knowledge-hub">
                    <BookOpen className="h-5 w-5" />
                    <span>Installation Guides</span>
                    <ChevronRight className="h-5 w-5 ml-auto" />
                  </a>
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3">
                  <FileText className="h-5 w-5" />
                  <span>FAQs</span>
                  <ChevronRight className="h-5 w-5 ml-auto" />
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3">
                  <Camera className="h-5 w-5" />
                  <span>Video Tutorials</span>
                  <ChevronRight className="h-5 w-5 ml-auto" />
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Notifications Dialog */}
      <Dialog open={showNotifications} onOpenChange={setShowNotifications}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Notifications</DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-[400px]">
            <div className="space-y-3">
              {notifications.map((notif) => (
                <div 
                  key={notif.id}
                  className={`p-4 rounded-lg border ${notif.read ? 'bg-muted/50' : 'bg-card border-primary/20'}`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <p className="font-medium text-sm">{notif.title}</p>
                    {!notif.read && (
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{notif.message}</p>
                  <p className="text-xs text-muted-foreground">{notif.time}</p>
                </div>
              ))}
            </div>
          </ScrollArea>
          <Button variant="outline" className="w-full" onClick={() => setShowNotifications(false)}>
            Close
          </Button>
        </DialogContent>
      </Dialog>

      {/* Logout Confirmation (can be added to settings) */}
      <div className="fixed bottom-4 right-4">
        <Button 
          variant="outline" 
          size="icon" 
          className="h-12 w-12 rounded-full shadow-lg"
          title="Logout"
        >
          <LogOut className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default TechnicianApp;
