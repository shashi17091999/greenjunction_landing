import { Building2 } from "lucide-react";

const brands = [
  { name: "Delta Electronics", logo: "Delta" },
  { name: "Tata Power", logo: "Tata" },
  { name: "ABB", logo: "ABB" },
  { name: "Exicom", logo: "Exicom" },
  { name: "Schneider Electric", logo: "Schneider" },
  { name: "Siemens", logo: "Siemens" },
];

const TrustedBrands = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 animate-fade-in">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
            Trusted by Leading OEMs
          </p>
          <h2 className="text-2xl md:text-3xl font-bold">
            Premium Brands, Verified Quality
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="flex items-center justify-center p-6 bg-background rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1 group animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <Building2 className="h-8 w-8 mx-auto mb-2 text-muted-foreground group-hover:text-primary transition-colors" />
                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  {brand.logo}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
