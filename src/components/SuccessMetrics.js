import { CheckCircle2, Users, MapPin, Zap } from "lucide-react";
import { Card } from "./Card";
import { useEffect, useRef, useState } from "react";

const metrics = [
  {
    icon: CheckCircle2,
    value: "500+",
    label: "BIS Certified Chargers",
    color: "text-success",
  },
  {
    icon: Users,
    value: "10,000+",
    label: "Happy Customers",
    color: "text-primary",
  },
  {
    icon: MapPin,
    value: "150+",
    label: "Cities Covered",
    color: "text-accent",
  },
  {
    icon: Zap,
    value: "50,000+",
    label: "Installations Completed",
    color: "text-trust",
  },
];

const CounterAnimation = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
          const increment = numericValue / (duration / 16);
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
              setCount(numericValue);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  const suffix = value.replace(/[0-9,]/g, "");

  return (
    <p ref={ref} className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
      {count.toLocaleString()}
      {suffix}
    </p>
  );
};

const SuccessMetrics = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card
                key={metric.label}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4">
                  <Icon className={`h-6 w-6 ${metric.color}`} />
                </div>

                <CounterAnimation value={metric.value} />

                <p className="text-sm text-muted-foreground">
                  {metric.label}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SuccessMetrics;
