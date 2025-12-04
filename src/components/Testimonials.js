import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./Card";
import { Avatar, AvatarFallback } from "../ui/Avatar";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Tesla Model 3 Owner",
    location: "Bangalore",
    rating: 5,
    text: "Seamless installation experience! The technician was professional, and my 7.4kW charger was up and running in just 3 hours. Highly recommend!",
    initials: "RK",
  },
  {
    name: "Priya Sharma",
    role: "Tata Nexon EV Owner",
    location: "Mumbai",
    rating: 5,
    text: "Great product selection and transparent pricing. The BIS certification gave me confidence. Customer support was responsive throughout.",
    initials: "PS",
  },
  {
    name: "Arjun Mehta",
    role: "MG ZS EV Owner",
    location: "Delhi",
    rating: 5,
    text: "I compared 5 different chargers on the platform before making my choice. The detailed specs and reviews helped me make an informed decision.",
    initials: "AM",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of satisfied EV owners who trusted us with their charging needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-trust text-trust"
                    />
                  ))}
                </div>

                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary text-primary-foreground text-sm font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role} • {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
