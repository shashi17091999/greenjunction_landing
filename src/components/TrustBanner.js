import { Shield, Award, Wrench, Clock } from "lucide-react";

const trustFeatures = [
  {
    icon: Shield,
    title: "BIS Certified",
    description: "All products meet Indian safety standards",
  },
  {
    icon: Award,
    title: "2-Year Warranty",
    description: "Comprehensive coverage on all chargers",
  },
  {
    icon: Wrench,
    title: "Professional Install",
    description: "Certified technicians nationwide",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock service assistance",
  },
];

const TrustBanner = () => {
  return (
    <section className="py-12 bg-primary/5 border-y border-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;