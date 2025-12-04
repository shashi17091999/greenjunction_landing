import React, { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import { Checkbox } from "../ui/Checkbox";
import { Slider } from "../ui/Slider";
import ProductCard from "../components/ProductCard";

const products = [
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
    images: [
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400",
      "https://images.unsplash.com/photo-1581092918484-8313e1b5e8b4?w=400",
    ],
    rating: 4.5,
    reviews: 128,
    features: ["Smart WiFi", "RFID Card"],
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
    images: [
      "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=400",
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400",
    ],
    rating: 4.7,
    reviews: 85,
    features: ["Dual Connector", "Cloud Connect"],
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
    images: [
      "https://images.unsplash.com/photo-1617704548623-340376564e68?w=400",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    ],
    rating: 4.6,
    reviews: 210,
    features: ["Load Balancing", "Weather Resistant"],
  },
  {
    id: 4,
    name: "Exicom Home Pro 3.3kW",
    oem: "Exicom",
    power: "3.3kW",
    connector: "Type 2",
    price: 32000,
    warranty: "2 Years",
    bis_certified: false,
    images: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400",
    ],
    rating: 4.3,
    reviews: 95,
    features: ["Compact Design", "LED Display"],
  }
];

const Products = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 100000]);

  return (
    React.createElement("div", { className: "min-h-screen flex flex-col" },
      React.createElement(Navbar),
      
      React.createElement("main", { className: "flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8" },
        // Header
        React.createElement("div", { className: "mb-8" },
          React.createElement("h1", { className: "text-3xl md:text-4xl font-bold mb-2" }, "EV Chargers"),
          React.createElement("p", { className: "text-muted-foreground" }, "Browse our certified collection of AC and DC chargers")
        ),

        // Search and Filter Bar
        React.createElement("div", { className: "flex gap-4 mb-6" },
          React.createElement("div", { className: "flex-1 relative" },
            React.createElement(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
            React.createElement(Input, {
              placeholder: "Search by brand, power, connector type...",
              className: "pl-10"
            })
          ),
          React.createElement(Button, {
            variant: "outline",
            onClick: () => setShowFilters(!showFilters),
            className: "gap-2"
          },
            React.createElement(SlidersHorizontal, { className: "h-4 w-4" }),
            "Filters"
          )
        ),

        React.createElement("div", { className: "flex gap-6" },
          // Filters Sidebar
          showFilters && React.createElement("aside", { className: "w-64 shrink-0" },
            React.createElement(Card, null,
              React.createElement(CardHeader, { className: "flex flex-row items-center justify-between" },
                React.createElement(CardTitle, { className: "text-lg" }, "Filters"),
                React.createElement(Button, {
                  variant: "ghost",
                  size: "icon",
                  onClick: () => setShowFilters(false),
                  className: "h-8 w-8"
                },
                  React.createElement(X, { className: "h-4 w-4" })
                )
              ),
              React.createElement(CardContent, { className: "space-y-6" },
                // Price Range
                React.createElement("div", null,
                  React.createElement("h3", { className: "font-medium mb-3" }, "Price Range"),
                  React.createElement(Slider, {
                    value: priceRange,
                    onValueChange: setPriceRange,
                    max: 100000,
                    step: 1000,
                    className: "mb-2"
                  }),
                  React.createElement("div", { className: "flex justify-between text-sm text-muted-foreground" },
                    React.createElement("span", null, `₹${priceRange[0].toLocaleString()}`),
                    React.createElement("span", null, `₹${priceRange[1].toLocaleString()}`)
                  )
                ),

                // Power Rating
                React.createElement("div", null,
                  React.createElement("h3", { className: "font-medium mb-3" }, "Power Rating"),
                  React.createElement("div", { className: "space-y-2" },
                    ["3.3kW", "7.4kW", "11kW", "22kW", "50kW+"].map((power) =>
                      React.createElement("label", { key: power, className: "flex items-center gap-2 cursor-pointer" },
                        React.createElement(Checkbox),
                        React.createElement("span", { className: "text-sm" }, power)
                      )
                    )
                  )
                ),

                // Connector Type
                React.createElement("div", null,
                  React.createElement("h3", { className: "font-medium mb-3" }, "Connector Type"),
                  React.createElement("div", { className: "space-y-2" },
                    ["Type 2", "CCS", "CHAdeMO", "GB/T"].map((connector) =>
                      React.createElement("label", { key: connector, className: "flex items-center gap-2 cursor-pointer" },
                        React.createElement(Checkbox),
                        React.createElement("span", { className: "text-sm" }, connector)
                      )
                    )
                  )
                ),

                // Certification
                React.createElement("div", null,
                  React.createElement("h3", { className: "font-medium mb-3" }, "Certification"),
                  React.createElement("label", { className: "flex items-center gap-2 cursor-pointer" },
                    React.createElement(Checkbox, { defaultChecked: true }),
                    React.createElement("span", { className: "text-sm" }, "BIS Certified Only")
                  )
                )
              )
            )
          ),

          // Product Grid
          React.createElement("div", { className: "flex-1" },
            React.createElement("div", { className: "mb-4 flex items-center justify-between" },
              React.createElement("p", { className: "text-sm text-muted-foreground" }, `Showing ${products.length} products`),
              React.createElement("select", { className: "text-sm border rounded-md px-3 py-1.5" },
                React.createElement("option", null, "Sort by: Popular"),
                React.createElement("option", null, "Price: Low to High"),
                React.createElement("option", null, "Price: High to Low"),
                React.createElement("option", null, "Rating")
              )
            ),

            React.createElement("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6" },
              products.map((product, index) =>
                React.createElement(ProductCard, { key: product.id, product: product, index: index })
              )
            )
          )
        )
      ),

      React.createElement(Footer)
    )
  );
};

export default Products;