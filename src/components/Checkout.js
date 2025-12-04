import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, MapPin, Calendar, CreditCard } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Button } from "./Button";
import { Input } from "./Input";
import { Label } from "./Label";
import { Card, CardContent, CardHeader, CardTitle } from "./Card";
import { Textarea } from "../ui/Textar";
import { RadioGroup, RadioGroupItem } from "../ui/Radiogroup";

const Checkout = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-muted/30">
        {/* Breadcrumb */}
        <div className="border-b bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Checkout</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Enhanced Progress Bar */}
          <div className="mb-8">
            <div className="max-w-3xl mx-auto">
              {/* Progress Bar */}
              <div className="relative mb-6">
                <div className="absolute top-5 left-0 right-0 h-1 bg-muted" />
                <div 
                  className="absolute top-5 left-0 h-1 bg-primary transition-all duration-500"
                  style={{ width: `${((step - 1) / 2) * 100}%` }}
                />
                
                <div className="relative flex items-center justify-between">
                  {[
                    { num: 1, label: "Delivery", icon: MapPin },
                    { num: 2, label: "Site Info", icon: Calendar },
                    { num: 3, label: "Payment", icon: CreditCard }
                  ].map((s) => {
                    const StepIcon = s.icon;
                    return (
                      <div key={s.num} className="flex flex-col items-center">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold mb-2 transition-all duration-300 ${
                          step >= s.num 
                            ? "bg-primary text-primary-foreground shadow-md scale-110" 
                            : "bg-muted text-muted-foreground"
                        }`}>
                          {step > s.num ? (
                            <ChevronRight className="h-5 w-5" />
                          ) : (
                            <StepIcon className="h-5 w-5" />
                          )}
                        </div>
                        <span className={`font-medium text-sm ${step >= s.num ? "text-foreground" : "text-muted-foreground"}`}>
                          {s.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Progress Percentage */}
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Step {step} of 3 - <span className="font-medium text-primary">{Math.round((step / 3) * 100)}% Complete</span>
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Step 1: Delivery Address */}
              {step === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      Delivery Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <Label htmlFor="address">Street Address</Label>
                      <Input id="address" placeholder="House no., Building name" />
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="Mumbai" />
                      </div>
                      <div>
                        <Label htmlFor="state">State</Label>
                        <Input id="state" placeholder="Maharashtra" />
                      </div>
                      <div>
                        <Label htmlFor="pincode">Pincode</Label>
                        <Input id="pincode" placeholder="400001" />
                      </div>
                    </div>
                    <Button onClick={() => setStep(2)} className="w-full" size="lg" variant="cta">
                      Continue to Site Assessment
                    </Button>
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Site Assessment */}
              {step === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Site Assessment Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="electricalCapacity">Electrical Capacity</Label>
                      <select id="electricalCapacity" className="w-full border rounded-md px-3 py-2">
                        <option>Select capacity</option>
                        <option>Single Phase (230V)</option>
                        <option>Three Phase (415V)</option>
                        <option>Not sure</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="parkingType">Parking Type</Label>
                      <RadioGroup defaultValue="covered">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="covered" id="covered" />
                          <Label htmlFor="covered">Covered parking</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="open" id="open" />
                          <Label htmlFor="open">Open parking</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="basement" id="basement" />
                          <Label htmlFor="basement">Basement</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div>
                      <Label htmlFor="distance">Distance from Meter to Parking (meters)</Label>
                      <Input id="distance" type="number" placeholder="10" />
                    </div>
                    <div>
                      <Label htmlFor="notes">Additional Notes</Label>
                      <Textarea id="notes" placeholder="Any special requirements or concerns..." rows={4} />
                    </div>
                    <div>
                      <Label>Preferred Installation Date</Label>
                      <Input type="date" />
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                        Back
                      </Button>
                      <Button onClick={() => setStep(3)} className="flex-1" variant="cta">
                        Continue to Payment
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 3: Payment */}
              {step === 3 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5" />
                      Payment Method
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <RadioGroup defaultValue="full">
                      <div className="border rounded-lg p-4 cursor-pointer hover:border-primary">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="full" id="full" />
                          <Label htmlFor="full" className="cursor-pointer flex-1">
                            <div className="font-medium">Pay Full Amount</div>
                            <div className="text-sm text-muted-foreground">₹49,000 (Pay now)</div>
                          </Label>
                        </div>
                      </div>
                      <div className="border rounded-lg p-4 cursor-pointer hover:border-primary">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="advance" id="advance" />
                          <Label htmlFor="advance" className="cursor-pointer flex-1">
                            <div className="font-medium">Pay Advance (Recommended)</div>
                            <div className="text-sm text-muted-foreground">₹10,000 now • Balance after site assessment</div>
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>

                    <div className="pt-4 border-t">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" type="password" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="cardName">Cardholder Name</Label>
                      <Input id="cardName" placeholder="John Doe" />
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                        Back
                      </Button>
                      <Link to="/order-confirmation" className="flex-1">
                        <Button className="w-full" variant="cta" size="lg">
                          Complete Order
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-20 h-20 bg-muted rounded-md"></div>
                    <div>
                      <h4 className="font-medium">Tata Power EZ Home 7.4kW</h4>
                      <p className="text-sm text-muted-foreground">Qty: 1</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm pt-4 border-t">
                    <div className="flex justify-between">
                      <span>Product</span>
                      <span>₹45,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Installation</span>
                      <span>₹4,000</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Taxes</span>
                      <span>Included</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>₹49,000</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <span>✓</span>
                      <span>Site assessment within 48 hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>✓</span>
                      <span>Installation in 7-10 days</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>✓</span>
                      <span>3-year comprehensive warranty</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;