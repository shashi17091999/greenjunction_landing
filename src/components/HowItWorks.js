import { Search, ShoppingCart, Wrench, CheckCircle } from "lucide-react";
import installImage from "../assets/installation-service.jpg";

const steps = [
  {
    icon: Search,
    title: "Browse & Compare",
    description: "Explore certified chargers from trusted OEMs. Filter by power, connector, and price.",
    step: "01",
  },
  {
    icon: ShoppingCart,
    title: "Buy & Book Installation",
    description: "Purchase your charger and schedule professional installation in one checkout.",
    step: "02",
  },
  {
    icon: Wrench,
    title: "Expert Installation",
    description: "Certified technicians install at your location with complete site assessment.",
    step: "03",
  },
  {
    icon: CheckCircle,
    title: "Warranty & Support",
    description: "Activate warranty and access 24/7 support for peace of mind.",
    step: "04",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From browsing to installation, we've simplified the entire journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-6 animate-slide-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative animate-scale-in lg:pl-8">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl blur-2xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={installImage}
                alt="Professional technician installing EV charger"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 to-transparent p-6">
                <p className="text-sm font-medium text-primary mb-1">Professional Installation</p>
                <p className="text-xs text-muted-foreground">Certified technicians ensure safe, compliant setup</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;