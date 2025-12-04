import { Card } from "./Card";
import { Badge } from "./Badge";
import { MapPin, CheckCircle } from "lucide-react";

const installations = [
  {
    image: "/placeholder.svg",
    location: "Mumbai, Maharashtra",
    type: "Residential",
    power: "7.4kW",
  },
  {
    image: "/placeholder.svg",
    location: "Bangalore, Karnataka",
    type: "Commercial",
    power: "22kW",
  },
  {
    image: "/placeholder.svg",
    location: "Delhi NCR",
    type: "Fleet",
    power: "60kW DC",
  },
  {
    image: "/placeholder.svg",
    location: "Pune, Maharashtra",
    type: "Residential",
    power: "11kW",
  },
];

const InstallationGallery = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <CheckCircle className="h-8 w-8 text-success" />
            <h2 className="text-3xl md:text-4xl font-bold">Successful Installations</h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See our professional installations across India
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {installations.map((install, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={install.image}
                  alt={`Installation in ${install.location}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-1 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span className="font-medium">{install.location}</span>
                    </div>
                    <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                      {install.power}
                    </Badge>
                  </div>
                  <p className="text-xs text-white/90">{install.type} Installation</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstallationGallery;
