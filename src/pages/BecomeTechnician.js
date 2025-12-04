import { useState, useEffect } from "react";
import { 
  Wrench, 
  IndianRupee, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  MapPin, 
  Calendar,
  Phone,
  Mail,
  Upload,
  Clock,
  User,
  Briefcase
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Button } from "../components/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/Card";
import { Input } from "../components/Input";
import { Label } from "../components/Label";
import { Textarea } from "../ui/Textar";
import { Checkbox } from "../ui/Checkbox";
import { Badge } from "../components/Badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../components/Dialog";

const heroImages = [
  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800",
  "https://images.unsplash.com/photo-1581092918484-8313e1b5e8b4?w=800",
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800",
];

const benefits = [
  {
    icon: Briefcase,
    title: "Consistent Job Flow",
    description: "Get regular installation jobs from our nationwide EV charger marketplace",
  },
  {
    icon: IndianRupee,
    title: "Competitive Earnings",
    description: "Earn ₹800–₹2,500 per installation with quick payment processing",
  },
  {
    icon: Award,
    title: "BIS & OEM Certification",
    description: "Access certification programs and become a verified installer",
  },
  {
    icon: BookOpen,
    title: "Knowledge Hub Access",
    description: "Free training resources, guides, and technical documentation",
  },
];

const availableJobs = [
  {
    id: "JOB-2345",
    location: "JP Nagar, Bangalore",
    jobType: "AC 7.4kW Charger Installation",
    pay: 1200,
    deadline: "21 Oct 2025",
    status: "Available",
  },
  {
    id: "JOB-2346",
    location: "Koramangala, Bangalore",
    jobType: "AC 11kW Charger Installation",
    pay: 1500,
    deadline: "22 Oct 2025",
    status: "Available",
  },
  {
    id: "JOB-2347",
    location: "Whitefield, Bangalore",
    jobType: "DC Fast Charger 50kW Installation",
    pay: 2500,
    deadline: "25 Oct 2025",
    status: "Available",
  },
];

const trainingPrograms = [
  {
    title: "BIS Certified: EVSE Level 1 & 2",
    description: "Complete certification program for AC charging systems",
    duration: "3 days",
    nextBatch: "25 Oct 2025",
    badge: "BIS Certified",
  },
  {
    title: "Zerova Partner Training",
    description: "OEM-specific installation and maintenance training",
    duration: "2 days",
    nextBatch: "28 Oct 2025",
    badge: "OEM Training",
  },
  {
    title: "DC Fast Charging Specialist",
    description: "Advanced training for high-power DC charger installation",
    duration: "5 days",
    nextBatch: "1 Nov 2025",
    badge: "Advanced",
  },
];

const BecomeTechnician = () => {
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    experience: "",
    expertise: [],
    termsAccepted: false,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const selectedJobDetails = availableJobs.find(job => job.id === selectedJob);

  const handleExpertiseToggle = (expertise) => {
    setFormData(prev => ({
      ...prev,
      expertise: prev.expertise.includes(expertise)
        ? prev.expertise.filter(e => e !== expertise)
        : [...prev.expertise, expertise]
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[500px] overflow-hidden">
        {heroImages.map((image, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentHeroImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70 z-10" />
            <img src={image} className="w-full h-full object-cover" />
          </div>
        ))}

        <div className="relative z-20 container mx-auto h-full flex items-center px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Join India's Fastest-Growing EV Technician Network</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Become a certified installer, earn per job, and power the EV revolution.
            </p>

            <div className="flex gap-4">
              <a href="#registration">
                <Button size="lg" variant="hero" className="gap-2">
                  <User className="h-5 w-5" /> Apply Now
                </Button>
              </a>
              <a href="#jobs">
                <Button size="lg" variant="outline" className="gap-2">
                  <Briefcase className="h-5 w-5" /> View Open Jobs
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join Green Junction Network?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Be part of India's most trusted EV charging installation network
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="registration" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technician Registration</h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below to join our network
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Application Form</CardTitle>
              <CardDescription>Please provide accurate information for verification</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Contact Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City & Area of Operation *</Label>
                  <Input
                    id="city"
                    placeholder="e.g., Bangalore, Karnataka"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Experience *</Label>
                  <Input
                    id="experience"
                    placeholder="e.g., 3 years"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Vehicle Type Expertise *</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {["2W", "3W", "4W", "DC Fast"].map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox
                        id={type}
                        checked={formData.expertise.includes(type)}
                        onCheckedChange={() => handleExpertiseToggle(type)}
                      />
                      <Label htmlFor={type} className="cursor-pointer">{type}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="aadhar">Upload Aadhar & PAN *</Label>
                <Input id="aadhar" type="file" accept=".pdf,.jpg,.jpeg,.png" />
                <p className="text-xs text-muted-foreground">PDF, JPG, or PNG. Max 5MB</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="workPhotos">Upload Previous Work Photos (Optional)</Label>
                <Input id="workPhotos" type="file" accept=".jpg,.jpeg,.png" multiple />
                <p className="text-xs text-muted-foreground">Upload up to 5 images of your previous installations</p>
              </div>

              <div className="flex items-center space-x-2">
  <Checkbox
    id="terms"
    checked={formData.termsAccepted}
    onCheckedChange={(checked) =>
      setFormData({ 
        ...formData, 
        termsAccepted: checked === true  // convert to boolean in JS
      })
    }
  />
  <Label htmlFor="terms" className="cursor-pointer">
    I accept the Terms & Conditions and Privacy Policy *
  </Label>
</div>

            </CardContent>
            <CardFooter>
              <Button size="lg" className="w-full" disabled={!formData.termsAccepted}>
                Submit Application
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Available Jobs */}
      <section id="jobs" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Available Jobs</h2>
            <p className="text-lg text-muted-foreground">
              Browse and apply for installation jobs in your area
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary">{job.id}</Badge>
                    <Badge className="bg-[#00B67A] text-white">{job.status}</Badge>
                  </div>
                  <CardTitle className="text-lg">{job.jobType}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {job.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <IndianRupee className="h-4 w-4" />
                      Pay:
                    </span>
                    <span className="font-semibold text-lg">₹{job.pay}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Deadline:
                    </span>
                    <span className="font-medium">{job.deadline}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    variant="hero"
                    onClick={() => setSelectedJob(job.id)}
                  >
                    View Job Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Certification */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Training & Certification</h2>
            <p className="text-lg text-muted-foreground">
              Enhance your skills with our certified training programs
            </p>
          </div>

          <Tabs defaultValue="bis" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="bis">BIS-Certified Training</TabsTrigger>
              <TabsTrigger value="oem">OEM-Specific Guides</TabsTrigger>
            </TabsList>
            
            <TabsContent value="bis" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trainingPrograms.map((program, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <Badge className="w-fit mb-2">{program.badge}</Badge>
                      <CardTitle className="text-lg">{program.title}</CardTitle>
                      <CardDescription>{program.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>Duration: {program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Next Batch: {program.nextBatch}</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">Enroll Now</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="oem" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-center text-muted-foreground">
                    OEM-specific training modules and installer guides will be available after registration.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have Questions?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team is here to help you get started with your technician journey
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-lg">+91 80-XXXX-XXXX</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-lg">technician@greenjunction.in</span>
            </div>
          </div>
        </div>
      </section>

      {/* Job Details Dialog */}
      <Dialog open={!!selectedJob} onOpenChange={() => setSelectedJob(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Job Details – {selectedJobDetails?.id}</DialogTitle>
            <DialogDescription>
              Review the job requirements and checklist before accepting
            </DialogDescription>
          </DialogHeader>
          
          {selectedJobDetails && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Client</p>
                  <p className="font-medium">Green Junction Apartments</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">{selectedJobDetails.location}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Expected Duration</p>
                  <p className="font-medium">2 hours</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Payment</p>
                  <p className="font-medium text-lg text-primary">₹{selectedJobDetails.pay}</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Installation Checklist</h4>
                <div className="space-y-2">
                  {[
                    "Verify electrical capacity and safety measures",
                    "Check mounting location and wall structure",
                    "Install wall bracket and secure mounting",
                    "Connect wiring and earthing properly",
                    "Test charging functionality",
                    "Demonstrate usage to customer",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2 p-3 bg-muted rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1" variant="hero">
                  Accept Job
                </Button>
                <Button className="flex-1" variant="outline" onClick={() => setSelectedJob(null)}>
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default BecomeTechnician;
