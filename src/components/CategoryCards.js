import { Home, Building2, Zap, Truck } from "lucide-react";
import { Card, CardContent } from "./Card";
import { Button } from "./Button";
import { Link } from "react-router-dom";

const categories = [
  {
    icon: Home,
    title: "Home Chargers",
    description: "AC chargers best for residential use",
    power: "3.3kW - 22kW",
    color: "primary",
  },
  {
    icon: Building2,
    title: "Commercial",
    description: "High-power solutions for businesses",
    power: "22kW - 50kW",
    color: "accent",
  },
  {
    icon: Zap,
    title: "DC Fast Charging",
    description: "Ultra-fast charging for public stations",
    power: "50kW - 240kW",
    color: "trust",
  },
  {
    icon: Truck,
    title: "Fleet Solutions",
    description: "Bulk orders & deployment support",
    power: "Custom",
    color: "primary",
  },
];

const CategoryCards = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find the perfect charging solution for your needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link to="/products" key={category.title}>
              <Card
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/50 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-${category.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <category.icon className={`h-7 w-7 text-${category.color}`} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-3">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <span className="text-sm font-medium text-primary">
                      {category.power}
                    </span>
                    <Button variant="ghost" size="sm" className="group-hover:translate-x-1 transition-transform">
                      Explore →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;