import { Link } from "react-router-dom";
import { Button } from "./Button";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Delta AC Max 7.4kW",
    oem: "Delta Electronics",
    price: "₹34,999",
    rating: 4.8,
    reviews: 156,
    power: "7.4kW",
    connector: "Type 2",
    images: [
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400",
      "https://images.unsplash.com/photo-1581092918484-8313e1b5e8b4?w=400",
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400",
    ],
    bis_certified: true,
    certification_number: "R-12345678",
    features: ["Smart WiFi", "RFID Card", "OCPP Ready"],
  },
  {
    id: 2,
    name: "Tata Power EZ 11kW",
    oem: "Tata Power",
    price: "₹48,999",
    rating: 4.9,
    reviews: 243,
    power: "11kW",
    connector: "Type 2",
    images: [
      "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=400",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400",
    ],
    bis_certified: true,
    certification_number: "R-87654321",
    features: ["Mobile App", "Load Balancing", "Weather Resistant"],
  },
  {
    id: 3,
    name: "Exicom Home Pro 3.3kW",
    oem: "Exicom",
    price: "₹24,999",
    rating: 4.7,
    reviews: 89,
    power: "3.3kW",
    connector: "Type 2",
    images: [
      "https://images.unsplash.com/photo-1617704548623-340376564e68?w=400",
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400",
    ],
    bis_certified: false,
    features: ["Compact Design", "LED Display", "Cable Lock"],
  },
  {
    id: 4,
    name: "ABB Terra AC 22kW",
    oem: "ABB",
    price: "₹89,999",
    rating: 4.9,
    reviews: 178,
    power: "22kW",
    connector: "Type 2",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400",
      "https://images.unsplash.com/photo-1581092918484-8313e1b5e8b4?w=400",
    ],
    bis_certified: true,
    certification_number: "R-11223344",
    features: ["Dual Connector", "Dynamic Power", "Cloud Connect"],
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12 animate-fade-in">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Featured Chargers
            </h2>
            <p className="text-muted-foreground text-lg">
              Top-rated products from certified OEMs
            </p>
          </div>
          <Link to="/products">
            <Button variant="outline-primary" className="hidden md:inline-flex">
              View All Products
            </Button>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link to="/products">
            <Button variant="outline-primary" className="w-full sm:w-auto">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;