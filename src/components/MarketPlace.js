import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Search, SlidersHorizontal, X, Zap, Building2 } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Button } from "./Button";
import { Input } from "./Input";
import { Card, CardContent, CardHeader, CardTitle } from "./Card";
import { Checkbox } from "../ui/Checkbox";
import { Slider } from "../ui/Slider";
import { Badge } from "./Badge";
import ProductCard from "./ProductCard";
import QuickViewModal from "../ui/QuickViewModal";

const allProducts = [
  {
    id: 1,
    name: "Tata Power EZ Home 7.4kW",
    oem: "Tata Power",
    power: "7.4kW",
    connector: "Type 2",
    price: 45000,
    warranty: "3 Years",
    bis_certified: true,
    certification_number: "R-11223344",
    images: ["https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400"],
    rating: 4.5,
    reviews: 128,
    features: ["Smart WiFi", "RFID Card"],
    category: "residential",
    type: "ac",
    powerKw: 7.4,
  },
  {
    id: 2,
    name: "Delta AC Max 22kW",
    oem: "Delta Electronics",
    power: "22kW",
    connector: "Type 2",
    price: 89000,
    warranty: "5 Years",
    bis_certified: true,
    certification_number: "R-55667788",
    images: ["https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=400"],
    rating: 4.7,
    reviews: 85,
    features: ["Dual Connector", "Cloud Connect"],
    category: "residential",
    type: "ac",
    powerKw: 22,
  },
  {
    id: 3,
    name: "ABB Terra AC 11kW",
    oem: "ABB",
    power: "11kW",
    connector: "Type 2",
    price: 65000,
    warranty: "3 Years",
    bis_certified: true,
    certification_number: "R-99887766",
    images: ["https://images.unsplash.com/photo-1617704548623-340376564e68?w=400"],
    rating: 4.6,
    reviews: 210,
    features: ["Load Balancing", "Weather Resistant"],
    category: "residential",
    type: "ac",
    powerKw: 11,
  },
  {
    id: 4,
    name: "ABB Terra DC 50kW Fast Charger",
    oem: "ABB",
    power: "50kW",
    connector: "CCS",
    price: 450000,
    warranty: "5 Years",
    bis_certified: true,
    certification_number: "R-11998877",
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400"],
    rating: 4.8,
    reviews: 156,
    features: ["Dual CCS/CHAdeMO", "Cloud Management", "Payment Gateway"],
    category: "commercial",
    type: "dc",
    powerKw: 50,
  },
  {
    id: 5,
    name: "Delta DC Wallbox 60kW",
    oem: "Delta Electronics",
    power: "60kW",
    connector: "CCS",
    price: 550000,
    warranty: "5 Years",
    bis_certified: true,
    certification_number: "R-22334455",
    images: ["https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400"],
    rating: 4.7,
    reviews: 98,
    features: ["Fleet Management", "OCPP Compatible", "Load Balancing"],
    category: "commercial",
    type: "dc",
    powerKw: 60,
  },
  {
    id: 6,
    name: "Tritium RT50 DC Fast Charger",
    oem: "Tritium",
    power: "50kW",
    connector: "CCS + CHAdeMO",
    price: 480000,
    warranty: "4 Years",
    bis_certified: true,
    certification_number: "R-66778899",
    images: ["https://images.unsplash.com/photo-1581092918484-8313e1b5e8b4?w=400"],
    rating: 4.9,
    reviews: 203,
    features: ["Dual Protocol", "Compact Design", "Remote Monitoring"],
    category: "commercial",
    type: "dc",
    powerKw: 50,
  },
  {
    id: 7,
    name: "Exicom Fleet AC 22kW",
    oem: "Exicom",
    power: "22kW",
    connector: "Type 2",
    price: 95000,
    warranty: "3 Years",
    bis_certified: true,
    certification_number: "R-33445566",
    images: ["https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400"],
    rating: 4.5,
    reviews: 124,
    features: ["Fleet Ready", "RFID Access", "Energy Metering"],
    category: "commercial",
    type: "ac",
    powerKw: 22,
  },
];

const Marketplace = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 600000]);
  const [searchQuery, setSearchQuery] = useState("");
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [selectedPower, setSelectedPower] = useState([]);
  const [selectedConnector, setSelectedConnector] = useState([]);
  const [bisOnly, setBisOnly] = useState(false);

  // Initialize filters from URL params
  useEffect(() => {
    const category = searchParams.get("category");
    const type = searchParams.get("type");
    const power = searchParams.get("power");
    const usecase = searchParams.get("usecase");
    const search = searchParams.get("search");

    const newCategory = [];
    const newType = [];
    const newPower = [];

    if (category === "commercial" || usecase === "fleet") {
      newCategory.push("commercial");
    }

    if (type === "dc-fast") {
      newType.push("dc");
    } else if (type === "ac" || type === "dc") {
      newType.push(type);
    }

    if (power === "30kw-plus") {
      newPower.push("30kW+", "50kW+", "60kW+");
    }

    setSelectedCategory(newCategory);
    setSelectedType(newType);
    setSelectedPower(newPower);
    
    // Set search query from URL
    if (search) {
      setSearchQuery(search);
    }
  }, [searchParams]);

  // Filter products
  const filteredProducts = allProducts.filter((product) => {
    // Category filter
    if (selectedCategory.length > 0 && !selectedCategory.includes(product.category || "")) {
      return false;
    }

    // Type filter
    if (selectedType.length > 0 && !selectedType.includes(product.type || "")) {
      return false;
    }

    // Power filter
    if (selectedPower.length > 0) {
      const powerKw = product.powerKw || 0;
      let matchesPower = false;
      
      if (selectedPower.includes("3.3kW") && powerKw <= 3.3) matchesPower = true;
      if (selectedPower.includes("7.4kW") && powerKw > 3.3 && powerKw <= 7.4) matchesPower = true;
      if (selectedPower.includes("11kW") && powerKw > 7.4 && powerKw <= 11) matchesPower = true;
      if (selectedPower.includes("22kW") && powerKw > 11 && powerKw <= 22) matchesPower = true;
      if (selectedPower.includes("30kW+") && powerKw >= 30) matchesPower = true;
      if (selectedPower.includes("50kW+") && powerKw >= 50) matchesPower = true;
      if (selectedPower.includes("60kW+") && powerKw >= 60) matchesPower = true;
      
      if (!matchesPower) return false;
    }

    // Connector filter
    if (selectedConnector.length > 0 && !selectedConnector.includes(product.connector || "")) {
      return false;
    }

    // Price filter
    const productPrice = typeof product.price === 'number' ? product.price : 0;
    if (productPrice < priceRange[0] || productPrice > priceRange[1]) {
      return false;
    }

    // BIS certification
    if (bisOnly && !product.bis_certified) {
      return false;
    }

    // Search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        product.name.toLowerCase().includes(query) ||
        product.oem.toLowerCase().includes(query) ||
        product.power.toLowerCase().includes(query)
      );
    }

    return true;
  });

  const toggleFilter = (filterArray, setFilter, value) => {
    if (filterArray.includes(value)) {
      setFilter(filterArray.filter((v) => v !== value));
    } else {
      setFilter([...filterArray, value]);
    }
  };

  const clearAllFilters = () => {
    setSelectedCategory([]);
    setSelectedType([]);
    setSelectedPower([]);
    setSelectedConnector([]);
    setBisOnly(false);
    setPriceRange([0, 600000]);
    setSearchParams({});
  };

  const activeFilterCount =
    selectedCategory.length +
    selectedType.length +
    selectedPower.length +
    selectedConnector.length +
    (bisOnly ? 1 : 0);

  const handleQuickView = (product) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Marketplace</h1>
          <p className="text-muted-foreground">
            Find the perfect EV charger for your needs - residential or commercial
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <Link to="/marketplace?category=commercial&usecase=fleet">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Commercial Solutions</h3>
                  <p className="text-sm text-muted-foreground">Fleet & business charging</p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/marketplace?type=dc-fast&power=30kw-plus">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">DC Fast Chargers</h3>
                  <p className="text-sm text-muted-foreground">High-power charging solutions</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by brand, power, connector type..."
              className="pl-10 pr-10"
              value={searchQuery}
              onChange={(e) => {
                const newQuery = e.target.value;
                setSearchQuery(newQuery);
                // Update URL params
                const params = new URLSearchParams(searchParams);
                if (newQuery) {
                  params.set('search', newQuery);
                } else {
                  params.delete('search');
                }
                setSearchParams(params);
              }}
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  const params = new URLSearchParams(searchParams);
                  params.delete('search');
                  setSearchParams(params);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="gap-2"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
            {activeFilterCount > 0 && (
              <Badge variant="secondary" className="ml-1">
                {activeFilterCount}
              </Badge>
            )}
          </Button>
        </div>

        {/* Active Filters Display */}
        {(activeFilterCount > 0 || searchQuery) && (
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-sm text-muted-foreground">Active filters:</span>
            {searchQuery && (
              <Badge variant="secondary">
                Search: "{searchQuery}"
                <button
                  onClick={() => {
                    setSearchQuery("");
                    const params = new URLSearchParams(searchParams);
                    params.delete('search');
                    setSearchParams(params);
                  }}
                  className="ml-1"
                >
                  ×
                </button>
              </Badge>
            )}
            {selectedCategory.map((cat) => (
              <Badge key={cat} variant="secondary">
                {cat === "commercial" ? "Commercial/Fleet" : cat}
                <button
                  onClick={() => toggleFilter(selectedCategory, setSelectedCategory, cat)}
                  className="ml-1"
                >
                  ×
                </button>
              </Badge>
            ))}
            {selectedType.map((type) => (
              <Badge key={type} variant="secondary">
                {type === "dc" ? "DC Fast" : type.toUpperCase()}
                <button onClick={() => toggleFilter(selectedType, setSelectedType, type)} className="ml-1">
                  ×
                </button>
              </Badge>
            ))}
            {selectedPower.map((power) => (
              <Badge key={power} variant="secondary">
                {power}
                <button onClick={() => toggleFilter(selectedPower, setSelectedPower, power)} className="ml-1">
                  ×
                </button>
              </Badge>
            ))}
            {bisOnly && (
              <Badge variant="secondary">
                BIS Certified
                <button onClick={() => setBisOnly(false)} className="ml-1">
                  ×
                </button>
              </Badge>
            )}
            <Button variant="ghost" size="sm" onClick={clearAllFilters} className="h-6 text-xs">
              Clear All
            </Button>
          </div>
        )}

        <div className="flex gap-6">
          {/* Filters Sidebar - Sticky on Desktop */}
          {showFilters && (
            <aside className="w-64 shrink-0">
              <Card className="sticky top-4 max-h-[calc(100vh-2rem)] overflow-y-auto">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg">Filters</CardTitle>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowFilters(false)}
                    className="h-8 w-8"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Category */}
                  <div>
                    <h3 className="font-medium mb-3">Category</h3>
                    <div className="space-y-2">
                      {[
                        { value: "residential", label: "Residential" },
                        { value: "commercial", label: "Commercial/Fleet" },
                      ].map(({ value, label }) => (
                        <label key={value} className="flex items-center gap-2 cursor-pointer">
                          <Checkbox
                            checked={selectedCategory.includes(value)}
                            onCheckedChange={() => toggleFilter(selectedCategory, setSelectedCategory, value)}
                          />
                          <span className="text-sm">{label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Charger Type */}
                  <div>
                    <h3 className="font-medium mb-3">Charger Type</h3>
                    <div className="space-y-2">
                      {[
                        { value: "ac", label: "AC Charger" },
                        { value: "dc", label: "DC Fast Charger" },
                      ].map(({ value, label }) => (
                        <label key={value} className="flex items-center gap-2 cursor-pointer">
                          <Checkbox
                            checked={selectedType.includes(value)}
                            onCheckedChange={() => toggleFilter(selectedType, setSelectedType, value)}
                          />
                          <span className="text-sm">{label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h3 className="font-medium mb-3">Price Range</h3>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={600000}
                      step={10000}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>₹{priceRange[0].toLocaleString()}</span>
                      <span>₹{priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Power Rating */}
                  <div>
                    <h3 className="font-medium mb-3">Power Rating</h3>
                    <div className="space-y-2">
                      {["3.3kW", "7.4kW", "11kW", "22kW", "30kW+", "50kW+", "60kW+"].map((power) => (
                        <label key={power} className="flex items-center gap-2 cursor-pointer">
                          <Checkbox
                            checked={selectedPower.includes(power)}
                            onCheckedChange={() => toggleFilter(selectedPower, setSelectedPower, power)}
                          />
                          <span className="text-sm">{power}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Connector Type */}
                  <div>
                    <h3 className="font-medium mb-3">Connector Type</h3>
                    <div className="space-y-2">
                      {["Type 2", "CCS", "CHAdeMO", "GB/T"].map((connector) => (
                        <label key={connector} className="flex items-center gap-2 cursor-pointer">
                          <Checkbox
                            checked={selectedConnector.includes(connector)}
                            onCheckedChange={() =>
                              toggleFilter(selectedConnector, setSelectedConnector, connector)
                            }
                          />
                          <span className="text-sm">{connector}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Certification */}
                  <div>
                    <h3 className="font-medium mb-3">Certification</h3>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <Checkbox checked={bisOnly} onCheckedChange={(checked) => setBisOnly(!!checked)} />
                      <span className="text-sm">BIS Certified Only</span>
                    </label>
                  </div>
                </CardContent>
              </Card>
            </aside>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
              </p>
              <select className="text-sm border rounded-md px-3 py-1.5">
                <option>Sort by: Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
              </select>
            </div>

            {filteredProducts.length === 0 ? (
              <Card className="p-12 text-center">
                <p className="text-muted-foreground mb-4">No products match your filters</p>
                <Button onClick={clearAllFilters}>Clear All Filters</Button>
              </Card>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    index={index}
                    onQuickView={handleQuickView}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <QuickViewModal
        product={quickViewProduct}
        open={isQuickViewOpen}
        onOpenChange={setIsQuickViewOpen}
      />

      <Footer />
    </div>
  );
};

export default Marketplace;