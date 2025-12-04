import { Users, Target, Award, TrendingUp } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent } from "../components/Card";

const About = () => {
  const stats = [
    { label: "OEM Partners", value: "50+", icon: Users },
    { label: "Chargers Installed", value: "10,000+", icon: Award },
    { label: "Cities Covered", value: "100+", icon: TrendingUp },
    { label: "Customer Satisfaction", value: "98%", icon: Target },
  ];

  const values = [
    {
      title: "Sustainability First",
      description:
        "Driving India's electric vehicle revolution with clean, reliable charging infrastructure",
    },
    {
      title: "Quality Assured",
      description:
        "Only BIS-certified products from trusted global and Indian manufacturers",
    },
    {
      title: "Customer Centric",
      description:
        "End-to-end support from purchase to installation to after-sales service",
    },
    {
      title: "Innovation Driven",
      description:
        "Leveraging technology to make EV charging accessible, affordable, and efficient",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-transparent py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Powering India's Electric Future
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're building India's most trusted marketplace for EV charging
              solutions, connecting manufacturers, installers, and EV owners in
              one seamless platform.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <Card key={idx} className="text-center">
                    <CardContent className="p-6">
                      <Icon className="h-10 w-10 mx-auto mb-3 text-primary" />
                      <p className="text-4xl font-bold mb-2">{stat.value}</p>
                      <p className="text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                To accelerate EV adoption in India by making charging
                infrastructure accessible, reliable, and affordable for
                everyone — from individual EV owners to large fleet operators.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, idx) => (
                  <Card key={idx}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2023, our platform emerged from a simple
                  observation: India's EV revolution needed a trusted, unified
                  marketplace for charging infrastructure. EV owners struggled to
                  find certified chargers, compare options, and book reliable
                  installations.
                </p>
                <p>
                  We brought together leading OEMs like Tata Power, ABB, Delta,
                  and Exicom with a nationwide network of certified technicians.
                  Today, we're India's fastest-growing EV charging marketplace,
                  serving thousands of customers across 100+ cities.
                </p>
                <p>
                  Our vision extends beyond just selling chargers. We're
                  building the infrastructure ecosystem that will power millions
                  of electric vehicles, reduce carbon emissions, and make
                  sustainable transportation accessible to every Indian.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for passionate individuals who want to
              contribute to India's electric vehicle revolution. Explore career
              opportunities with us.
            </p>
            <a href="/careers">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                View Open Positions
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
