import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Eye } from "lucide-react";

const RecentlyViewed = () => {
  const [recentProducts, setRecentProducts] = useState([]);

  useEffect(() => {
    // Mock recently viewed products - in production, load from localStorage or API
    const mockRecent = [
      {
        id: 1,
        name: "Tata Power EZ Home 7.4kW",
        oem: "Tata Power",
        price: 45000,
        rating: 4.5,
        reviews: 128,
        power: "7.4kW",
        connector: "Type 2",
        images: ["/placeholder.svg"],
        certified: true,
        features: ["Smart Charging", "WiFi", "RFID"],
      },
      {
        id: 2,
        name: "Delta AC Max 11kW",
        oem: "Delta Electronics",
        price: 58000,
        rating: 4.7,
        reviews: 94,
        power: "11kW",
        connector: "Type 2",
        images: ["/placeholder.svg"],
        certified: true,
        features: ["Dynamic Load", "OCPP"],
      },
    ];

    setRecentProducts(mockRecent);
  }, []);

  if (recentProducts.length === 0) return null;

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <Eye className="h-6 w-6 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold">Recently Viewed</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyViewed;
