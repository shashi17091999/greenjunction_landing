import { useState } from "react";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Button } from "./Button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "./Card";
import { Checkbox } from "../ui/Checkbox";
import { Separator } from "../ui/Separator";
import { Badge } from "./Badge";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      productId: 1,
      name: "Tata Power EZ Home 7.4kW",
      oem: "Tata Power",
      image: "/placeholder.svg",
      price: 45000,
      quantity: 1,
      power: "7.4kW",
      connector: "Type 2",
      includeInstallation: true,
      installationCost: 4000,
    },
    {
      id: 2,
      productId: 3,
      name: "ABB Terra AC 11kW",
      oem: "ABB",
      image: "/placeholder.svg",
      price: 65000,
      quantity: 2,
      power: "11kW",
      connector: "Type 2",
      includeInstallation: false,
      installationCost: 5500,
    },
  ]);

  const updateQuantity = (id, delta) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const toggleInstallation = (id) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, includeInstallation: !item.includeInstallation }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const installationTotal = cartItems.reduce(
    (sum, item) =>
      sum + (item.includeInstallation ? item.installationCost * item.quantity : 0),
    0
  );

  const gst = (subtotal + installationTotal) * 0.18;
  const total = subtotal + installationTotal + gst;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Shopping Cart</h1>
          <p className="text-muted-foreground">Review your items and proceed to checkout</p>
        </div>

        {cartItems.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">Add some chargers to get started</p>
              <Link to="/products">
                <Button variant="cta">Browse Products</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6">

            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 bg-muted rounded-lg overflow-hidden shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">{item.oem}</p>
                            <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                            <div className="flex gap-3 text-sm text-muted-foreground">
                              <span>{item.power}</span>
                              <span>•</span>
                              <span>{item.connector}</span>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(item.id)}
                            className="shrink-0"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>

                        <Separator className="my-4" />

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, -1)}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          
                          <p className="text-xl font-bold">
                            ₹{(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>

                        <div className="mt-4 flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
                          <Checkbox
                            id={`install-${item.id}`}
                            checked={item.includeInstallation}
                            onCheckedChange={() => toggleInstallation(item.id)}
                          />
                          <div className="flex-1">
                            <label
                              htmlFor={`install-${item.id}`}
                              className="text-sm font-medium cursor-pointer"
                            >
                              Include Professional Installation
                            </label>
                            <p className="text-xs text-muted-foreground mt-1">
                              +₹{(item.installationCost * item.quantity).toLocaleString()} • Site assessment + certified technician
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">₹{subtotal.toLocaleString()}</span>
                  </div>
                  
                  {installationTotal > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Installation</span>
                      <span className="font-medium">₹{installationTotal.toLocaleString()}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">GST (18%)</span>
                    <span className="font-medium">₹{gst.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between">
                    <span className="font-semibold">Total</span>
                    <span className="text-2xl font-bold text-primary">
                      ₹{total.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                    </span>
                  </div>

                  <Badge variant="outline" className="w-full justify-center py-2">
                    🎉 Free shipping on all orders
                  </Badge>
                </CardContent>
                <CardFooter className="flex-col gap-3">
                  <Link to="/checkout" className="w-full">
                    <Button variant="cta" className="w-full gap-2">
                      Proceed to Checkout
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/products" className="w-full">
                    <Button variant="outline" className="w-full">
                      Continue Shopping
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>

          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
