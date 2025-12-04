import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Shield, Truck, Award, CheckCircle, ChevronRight } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Button } from "./Button";
import { Card, CardContent } from "./Card";
import { Badge } from "./Badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs";
import { Checkbox } from "../ui/Checkbox";
import ProfilePic7KW from "../assets/7.4Kw_Charger/7.4Kw_Profile_Pic.png";
import SecondPic7KW from "../assets/7.4Kw_Charger/7.4Kw_2nd_Pic.png";
import StandPic7KW from "../assets/7.4Kw_Charger/7.4Kw_With_Stand_Pic.png";
import StandView7KW from "../assets/7.4Kw_Charger/Stand_View.jpeg";

const ProductDetail = () => {
  const { id } = useParams();
  const [includeInstallation, setIncludeInstallation] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: "Tata Power EZ Home 7.4kW",
    oem: "Tata Power",
    price: 45000,
    installationCost: 4000,
    rating: 4.5,
    reviews: 128,
    certified: true,
    warranty: "3 Years",
    image: ProfilePic7KW,
    specs: {
      power: "7.4kW",
      voltage: "230V AC",
      connector: "Type 2",
      cable: "5 meters",
      protection: "IP65",
      charging: "32A max"
    }
  };

  const images = [
  ProfilePic7KW,
  SecondPic7KW,
  StandPic7KW,
  StandView7KW
];


  const totalPrice =
    product.price * quantity +
    (includeInstallation ? product.installationCost : 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/products" className="hover:text-foreground">
                Products
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">{product.name}</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Image Gallery */}
            <div>
              <div className="aspect-square bg-muted rounded-lg mb-4 relative flex items-center justify-center">
  <img
    src={product.image}
    alt={product.name}
    className="w-full h-full object-contain rounded-lg"
  />

                {product.certified && (
                  <Badge className="absolute top-4 right-4 bg-success">
                    BIS Certified
                  </Badge>
                )}
              </div>
              <div className="grid grid-cols-4 gap-2">
  {images.map((img, index) => (
    <div
      key={index}
      className="aspect-square bg-muted rounded-md cursor-pointer hover:ring-2 ring-primary flex items-center justify-center overflow-hidden"
    >
      <img
        src={img}
        alt={`Thumbnail ${index}`}
        className="w-full h-full object-contain"
      />
    </div>
  ))}
</div>
</div>

            {/* Product Info */}
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                {product.oem}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-warning text-warning" />
                  <span className="font-medium">{product.rating}</span>
                </div>
                <span className="text-muted-foreground">
                  ({product.reviews} reviews)
                </span>
                <Badge variant="outline" className="ml-2">
                  In Stock
                </Badge>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>{product.warranty} Warranty</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Award className="h-5 w-5 text-primary" />
                  <span>BIS Certified</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Truck className="h-5 w-5 text-primary" />
                  <span>Nationwide Service</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Expert Installation</span>
                </div>
              </div>

              {/* Price */}
              <div className="border-t border-b py-4 mb-6">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-4xl font-bold">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className="text-muted-foreground line-through">
                    ₹52,000
                  </span>
                  <Badge variant="outline" className="text-success">
                    13% off
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Inclusive of all taxes
                </p>
              </div>

              {/* Installation Option */}
              <Card className="mb-6 border-2 border-primary/20">
                <CardContent className="p-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <Checkbox
                      checked={includeInstallation}
                      onCheckedChange={checked =>
                        setIncludeInstallation(!!checked)
                      }
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium">
                          Add Standard Installation
                        </span>
                        <span className="font-bold">
                          ₹{product.installationCost.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Includes site assessment, wall mounting, wiring up to
                        10m, and testing
                      </p>
                    </div>
                  </label>
                </CardContent>
              </Card>

              {/* Quantity */}
              <div className="flex items-center gap-4 mb-6">
                <label className="font-medium">Quantity:</label>
                <div className="flex items-center border rounded-md">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <span className="px-4 font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
                {quantity >= 5 && (
                  <Badge variant="outline" className="text-success">
                    Bulk discount available
                  </Badge>
                )}
              </div>

              {/* Total Price */}
              <div className="bg-muted/50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span>Product ({quantity}x)</span>
                  <span>
                    ₹{(product.price * quantity).toLocaleString()}
                  </span>
                </div>
                {includeInstallation && (
                  <div className="flex items-center justify-between mb-2">
                    <span>Installation</span>
                    <span>
                      ₹{product.installationCost.toLocaleString()}
                    </span>
                  </div>
                )}
                <div className="border-t pt-2 flex items-center justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>₹{totalPrice.toLocaleString()}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Link to="/checkout" className="flex-1">
                  <Button variant="cta" size="lg" className="w-full">
                    Buy Now
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  Request Quote
                </Button>
              </div>

              <p className="text-sm text-center text-muted-foreground mt-4">
                Site assessment within 48 hours • Installation in 7-10 days
              </p>
            </div>
          </div>

          {/* Tabs Section */}
          <Tabs defaultValue="specs" className="mb-12">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="installation">Installation</TabsTrigger>
              <TabsTrigger value="warranty">Warranty</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="specs" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Technical Specifications
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between border-b pb-2"
                      >
                        <span className="text-muted-foreground capitalize">
                          {key}
                        </span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="installation" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Installation Process
                  </h3>
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map(step => (
                      <div key={step} className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                          {step}
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">
                            {
                              [
                                "Site Assessment",
                                "Installation Scheduling",
                                "Professional Setup",
                                "Warranty Activation"
                              ][step - 1]
                            }
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {
                              [
                                "Our technician visits your location to assess electrical capacity and optimal placement",
                                "Pick a convenient time slot for installation (typically 3-4 hours)",
                                "Certified technician installs, tests, and demonstrates the charger",
                                "Automatic warranty registration with digital certificate"
                              ][step - 1]
                            }
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="warranty" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Warranty Information
                  </h3>
                  <div className="space-y-3">
                    <p>
                      <strong>{product.warranty} Comprehensive Warranty</strong>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Covers manufacturing defects, hardware failures, and
                      functional issues
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✓ Free replacement of defective parts</li>
                      <li>✓ On-site service within 48 hours</li>
                      <li>✓ Extended warranty options available</li>
                      <li>✓ 24/7 helpline support</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Customer Reviews
                  </h3>
                  <p className="text-muted-foreground">
                    Reviews will be displayed here
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Related Products */}
          <div className="border-t pt-12">
            <h3 className="text-2xl font-bold mb-6">You May Also Like</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map(i => (
                <Card
                  key={i}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-square bg-muted rounded-t-lg" />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground mb-1">
                      OEM Brand
                    </p>
                    <h4 className="font-semibold mb-2">Similar Charger {i}</h4>
                    <div className="flex items-center gap-2 text-sm mb-3">
                      <Star className="h-4 w-4 fill-warning text-warning" />
                      <span>4.5</span>
                    </div>
                    <p className="text-xl font-bold text-primary mb-3">
                      ₹{(42000 + i * 3000).toLocaleString()}
                    </p>
                    <Link to={`/product/${i}`}>
                      <Button variant="outline" size="sm" className="w-full">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
