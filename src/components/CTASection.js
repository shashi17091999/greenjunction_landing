import { Button } from "./Button";
import { ArrowRight, Building2 } from "lucide-react";
import fleetImage from "../assets/fleet-charging.jpg";

const CTASection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary to-accent p-8 md:p-12 shadow-2xl">
          <div className="absolute inset-0 opacity-10">
            <img
              src={fleetImage}
              alt="Fleet charging"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div className="text-primary-foreground space-y-6">
              <div className="inline-block">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-background/20 backdrop-blur-sm">
                  <Building2 className="h-4 w-4 mr-2" />
                  For Businesses
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold">
                Need Bulk Orders or Fleet Solutions?
              </h2>
              
              <p className="text-lg text-primary-foreground/90">
                Get custom quotes, dedicated account management, and priority installation 
                for commercial deployments. Perfect for workplace charging, fleet operators, 
                and public infrastructure.
              </p>

              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-accent-foreground/20 flex items-center justify-center">
                    <span className="text-xs">✓</span>
                  </div>
                  <span>Volume discounts on bulk orders</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-accent-foreground/20 flex items-center justify-center">
                    <span className="text-xs">✓</span>
                  </div>
                  <span>Dedicated project manager</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-accent-foreground/20 flex items-center justify-center">
                    <span className="text-xs">✓</span>
                  </div>
                  <span>AMC & SLA-backed support</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-background text-primary hover:bg-background/90 shadow-lg"
                >
                  Request Business Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-primary-foreground/30 text-primary hover:bg-primary-foreground/10"
                >
                  View Solutions
                </Button>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-3xl"></div>
                <img
                  src={fleetImage}
                  alt="Fleet of electric vehicles charging"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;