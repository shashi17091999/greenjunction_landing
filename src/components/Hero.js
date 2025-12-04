import { Search } from "lucide-react";
import { Button } from "./Button";
import { Input } from "./Input";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-charging.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-light to-accent-light">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-block">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20">
                ⚡ India's Trusted EV Charging Marketplace
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Buy & Install{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                EV Chargers
              </span>{" "}
              in One Place
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Browse certified chargers from top OEMs. Book professional installation. 
              Get nationwide service support. Everything you need to power your EV journey.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-trust/10 rounded-full flex items-center justify-center">
                  <span className="text-trust font-bold text-xs">✓</span>
                </div>
                <span className="text-sm font-medium">BIS Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-accent font-bold text-xs">✓</span>
                </div>
                <span className="text-sm font-medium">2-Year Warranty</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-xs">✓</span>
                </div>
                <span className="text-sm font-medium">Nationwide Install</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/products">
                <Button variant="hero" size="lg" className="group">
                  Browse Chargers
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline-primary" size="lg">
                  Request Quote
                </Button>
              </Link>
            </div>

            {/* Quick Search */}
            <div className="pt-6">
              <div className="relative max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Quick search by power (e.g., 7kW)..."
                  className="pl-12 h-12 bg-background shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-50"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Modern EV charging station with electric vehicle"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;