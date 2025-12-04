import { useState } from "react";
import { Search, Book, Video, FileText, TrendingUp, Zap, Battery, Shield, ThumbsUp, ThumbsDown, Share2, Award, Users, BookOpen, PlayCircle, Download, ArrowRight, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/Card";
import { Badge } from "../components/Badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs";
import { useToast } from "../hooks/use-toast";

const articles = [
  {
    id: 1,
    title: "Complete Guide to EV Charging Standards in India",
    description: "Understanding Type 2, CCS, CHAdeMO, and GB/T connectors for Indian EVs",
    category: "Guides",
    readTime: "8 min read",
    icon: Book,
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "How to Choose the Right Charger for Your EV",
    description: "Factors to consider when selecting between AC and DC charging solutions",
    category: "Buying Guide",
    readTime: "6 min read",
    icon: Battery,
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Installation Best Practices for Home Chargers",
    description: "Essential requirements and safety guidelines for residential EV charging setup",
    category: "Installation",
    readTime: "10 min read",
    icon: Shield,
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Understanding EV Charging Speeds and Power Levels",
    description: "Comparison of 3.3kW, 7.4kW, 11kW, 22kW, and DC fast charging",
    category: "Technical",
    readTime: "7 min read",
    icon: Zap,
    image: "/placeholder.svg",
  },
];

const videos = [
  {
    id: 1,
    title: "How EV Charging Works: Complete Explanation",
    duration: "12:45",
    views: "45K views",
    thumbnail: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Installing Your Home EV Charger - Step by Step",
    duration: "18:30",
    views: "32K views",
    thumbnail: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Comparing AC vs DC Charging for Your Fleet",
    duration: "15:20",
    views: "28K views",
    thumbnail: "/placeholder.svg",
  },
];

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What is the difference between AC and DC charging?",
        a: "AC charging uses alternating current and is slower (3-22kW), typically used for home and workplace charging. DC fast charging converts AC to DC before reaching the battery, allowing much faster charging (50-350kW) for commercial and highway applications.",
      },
      {
        q: "How long does it take to charge an electric vehicle?",
        a: "Charging time depends on battery capacity and charger power. A 7.4kW home charger typically takes 6-8 hours for a full charge, while a 50kW DC fast charger can charge 80% in 30-45 minutes.",
      },
    ],
  },
  {
    category: "Installation",
    questions: [
      {
        q: "Do I need a dedicated electrical connection for home charging?",
        a: "Yes, most home EV chargers require a dedicated circuit with appropriate amperage. A qualified electrician should assess your electrical panel capacity and install the required wiring and protection devices.",
      },
      {
        q: "Can I install a charger in my apartment?",
        a: "Installation in apartments requires approval from the housing society and adequate electrical infrastructure. We offer consultation services to help you work with your society for charger installation.",
      },
    ],
  },
  {
    category: "Costs & Savings",
    questions: [
      {
        q: "What are the electricity costs for charging at home?",
        a: "Home charging costs typically range from ₹8-12 per kWh depending on your electricity tariff. For a 40kWh battery, a full charge would cost approximately ₹320-480, significantly cheaper than petrol/diesel.",
      },
      {
        q: "Are there any government subsidies for EV chargers?",
        a: "Various state governments and FAME II scheme offer subsidies and incentives for EV charging infrastructure. Check our subsidies guide for region-specific information.",
      },
    ],
  },
];

const KnowledgeHub = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { toast } = useToast();

  const handleFeedback = (helpful) => {
  toast({
    title: helpful ? "Thank you!" : "Thanks for your feedback",
    description: helpful
      ? "Glad we could help!"
      : "We'll work on improving our content.",
  });

  };

  const handleShare = () => {
    toast({
      title: "Share link copied!",
      description: "Link has been copied to clipboard",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Enhanced Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-light via-accent-light to-background py-20 md:py-28">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent">
                <BookOpen className="h-4 w-4" />
                <span className="text-sm font-medium">India's Most Trusted EV Knowledge Platform</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Learn. Compare.{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  Charge Smarter.
                </span>
              </h1>
              
              {/* Subheading */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Explore expert guides, videos & FAQs on EV charging, installation & maintenance. Everything you need to make informed decisions.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search guides, videos, topics..."
                  className="pl-12 pr-4 h-14 text-lg bg-background shadow-lg border-2 focus-visible:border-primary"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button 
                  className="absolute right-2 top-1/2 -translate-y-1/2" 
                  size="sm"
                >
                  Search
                </Button>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Button variant="hero" size="lg">
                  Browse Guides
                  <Book className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline-primary" size="lg">
                  Watch Videos
                  <PlayCircle className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Trust Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">15K+</div>
                  <div className="text-sm text-muted-foreground">Monthly Readers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">50+</div>
                  <div className="text-sm text-muted-foreground">Expert Guides</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">Video Tutorials</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">24/7</div>
                  <div className="text-sm text-muted-foreground">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-8 bg-muted/50 border-y">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-8 text-center">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-trust" />
                <span className="text-sm font-medium">Verified by Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Join 10,000+ Readers</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">New Guides Weekly</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">Free Downloads</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Tabs defaultValue="articles" className="space-y-8">
            {/* Enhanced Tab Navigation */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
              <TabsList className="grid grid-cols-3 w-full sm:w-auto">
                <TabsTrigger value="articles" className="gap-2">
                  <Book className="h-4 w-4" />
                  <span className="hidden sm:inline">Articles</span>
                  <Badge variant="secondary" className="ml-1 hidden md:inline-flex">24</Badge>
                </TabsTrigger>
                <TabsTrigger value="videos" className="gap-2">
                  <Video className="h-4 w-4" />
                  <span className="hidden sm:inline">Videos</span>
                  <Badge variant="secondary" className="ml-1 hidden md:inline-flex">12</Badge>
                </TabsTrigger>
                <TabsTrigger value="faqs" className="gap-2">
                  <FileText className="h-4 w-4" />
                  <span className="hidden sm:inline">FAQs</span>
                  <Badge variant="secondary" className="ml-1 hidden md:inline-flex">30+</Badge>
                </TabsTrigger>
              </TabsList>

              {/* Category Filter */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <select 
                  className="flex h-10 w-full sm:w-[180px] rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  <option value="guides">Guides</option>
                  <option value="technical">Technical</option>
                  <option value="installation">Installation</option>
                  <option value="buying">Buying Guide</option>
                </select>
              </div>
            </div>

            {/* Enhanced Articles Tab */}
            <TabsContent value="articles" className="space-y-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Expert Articles & Guides</h2>
                  <p className="text-muted-foreground">In-depth knowledge from EV charging experts</p>
                </div>
                <Button variant="outline">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {articles.map((article) => {
                  const Icon = article.icon;
                  return (
                    <Card key={article.id} className="group hover:shadow-xl hover:border-primary/20 transition-all duration-300 overflow-hidden">
                      <CardHeader className="p-0">
                        <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-background/90 text-foreground backdrop-blur-sm border shadow-sm">
                              <Icon className="h-3 w-3 mr-1" />
                              {article.category}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Book className="h-3 w-3" />
                            {article.readTime}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            2.4K reads
                          </span>
                        </div>
                        
                        <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
                          {article.title}
                        </CardTitle>
                        
                        <CardDescription className="line-clamp-2 leading-relaxed">
                          {article.description}
                        </CardDescription>
                        
                        <div className="flex items-center justify-between pt-2 border-t">
                          <Button variant="link" className="p-0 h-auto font-semibold group/btn">
                            Read Full Article
                            <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                          
                          <div className="flex items-center gap-1">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="h-8 w-8 p-0"
                              onClick={() => handleFeedback(true)}
                            >
                              <ThumbsUp className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="h-8 w-8 p-0"
                              onClick={handleShare}
                            >
                              <Share2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Marketplace CTA within Articles */}
              <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-primary/20 mt-12">
                <CardContent className="p-8 text-center">
                  <Zap className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-2">Ready to Choose Your EV Charger?</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Browse our certified chargers from top OEMs. Compare specs, prices, and book professional installation.
                  </p>
                  <Link to="/products">
                    <Button variant="hero" size="lg" className="group">
                      Browse Our Marketplace
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Enhanced Videos Tab */}
            <TabsContent value="videos" className="space-y-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Video Tutorials</h2>
                  <p className="text-muted-foreground">Watch step-by-step installation and maintenance guides</p>
                </div>
                <Button variant="outline">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {videos.map((video) => (
                  <Card key={video.id} className="group hover:shadow-xl hover:border-primary/20 transition-all duration-300 overflow-hidden">
                    <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 cursor-pointer">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="object-cover w-full h-full"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-colors">
                        <div className="h-16 w-16 rounded-full bg-white/95 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                          <PlayCircle className="h-8 w-8 text-primary fill-primary/10" />
                        </div>
                      </div>
                      <Badge className="absolute bottom-3 right-3 bg-black/90 text-white border-0 shadow-lg">
                        {video.duration}
                      </Badge>
                      <Badge className="absolute top-3 left-3 bg-accent/90 text-white border-0 shadow-lg">
                        HD
                      </Badge>
                    </div>
                    <CardContent className="p-5 space-y-3">
                      <h3 className="font-semibold text-base leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {video.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {video.views}
                        </span>
                        <div className="flex gap-1">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-7 w-7 p-0"
                            onClick={() => handleFeedback(true)}
                          >
                            <ThumbsUp className="h-3 w-3" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-7 w-7 p-0"
                            onClick={handleShare}
                          >
                            <Share2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Video CTA */}
              <Card className="bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10 border-accent/20 mt-8">
                <CardContent className="p-8 text-center">
                  <PlayCircle className="h-12 w-12 mx-auto mb-4 text-accent" />
                  <h3 className="text-2xl font-bold mb-2">Watch Our Complete Installation Series</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Follow along with our expert technicians as they walk through every step of EV charger installation.
                  </p>
                  <Button variant="cta" size="lg">
                    Watch Full Series
                    <PlayCircle className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Enhanced FAQs Tab */}
            <TabsContent value="faqs" className="space-y-8">
              <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
                  <p className="text-muted-foreground">Quick answers to common EV charging questions</p>
                </div>
                
                {faqs.map((section, idx) => (
                  <div key={idx} className="mb-10">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="h-8 w-1 bg-primary rounded-full"></div>
                      <h3 className="text-2xl font-bold text-primary">
                        {section.category}
                      </h3>
                    </div>
                    <div className="space-y-4">
                      {section.questions.map((faq, qIdx) => (
                        <Card key={qIdx} className="hover:shadow-lg transition-all hover:border-primary/20">
                          <CardHeader>
                            <CardTitle className="text-lg leading-relaxed flex items-start gap-2">
                              <span className="text-primary font-bold mt-1">Q.</span>
                              <span>{faq.q}</span>
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <p className="text-muted-foreground leading-relaxed pl-6">{faq.a}</p>
                            <div className="flex items-center gap-2 pl-6 pt-2 border-t">
                              <span className="text-sm text-muted-foreground">Was this helpful?</span>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="h-8 gap-1"
                                onClick={() => handleFeedback(true)}
                              >
                                <ThumbsUp className="h-3 w-3" />
                                Yes
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="h-8 gap-1"
                                onClick={() => handleFeedback(false)}
                              >
                                <ThumbsDown className="h-3 w-3" />
                                No
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Support CTA */}
                <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 mt-12">
                  <CardContent className="p-8 text-center">
                    <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-2xl font-bold mb-2">Still Have Questions?</h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                      Our expert support team is available 24/7 to help you with any queries about EV charging, installation, or maintenance.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                      <Link to="/contact">
                        <Button variant="cta" size="lg">
                          Contact Support
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <Link to="/products">
                        <Button variant="outline-primary" size="lg">
                          Browse Chargers
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sticky Bottom CTA (appears on scroll) */}
        <div className="sticky bottom-0 z-40 border-t bg-background/95 backdrop-blur-sm shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="font-semibold">Ready to choose your EV charger?</p>
                <p className="text-sm text-muted-foreground">Browse our certified marketplace</p>
              </div>
              <Link to="/products">
                <Button variant="hero" size="lg" className="group w-full sm:w-auto">
                  Browse Marketplace
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default KnowledgeHub;