import { Home, Building2, Truck, Zap } from "lucide-react";
import { Card, CardContent } from "./Card";
import { Button } from "./Button";
import { Link } from "react-router-dom";

const useCases = [
  {
    icon: Home,
    title: "Home Charging",
    description: "Convenient overnight charging for personal EVs",
    power: "3.3kW - 7.4kW",
    link: "/marketplace?category=Home",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Building2,
    title: "Commercial Buildings",
    description: "Fast charging for office complexes and apartments",
    power: "11kW - 22kW",
    link: "/marketplace?category=Commercial",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Truck,
    title: "Fleet Operations",
    description: "High-power charging for commercial fleets",
    power: "30kW - 150kW",
    link: "/marketplace?category=Fleet",
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    icon: Zap,
    title: "Public Charging",
    description: "DC fast charging for highways and public spaces",
    power: "60kW - 240kW",
    link: "/marketplace?category=Public",
    color: "text-trust",
    bgColor: "bg-trust/10",
  },
];

const ExploreByUseCase = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore by Use Case</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find the perfect charging solution tailored to your specific needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Card
                key={useCase.title}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${useCase.bgColor} mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className={`h-8 w-8 ${useCase.color}`} />
                  </div>

                  <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>

                  <p className="text-sm text-muted-foreground mb-3">
                    {useCase.description}
                  </p>

                  <p className="text-sm font-semibold text-primary mb-4">
                    {useCase.power}
                  </p>

                  <Link to={useCase.link}>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                    >
                      Explore Options
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExploreByUseCase;
