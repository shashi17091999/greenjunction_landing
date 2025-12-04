import React from "react";
import { CheckCircle, Download, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

// Update these paths based on your project structure
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";

const OrderConfirmation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto">

            {/* Success Message */}
            <div className="text-center mb-8 animate-fade-in">
              <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-10 w-10 text-success" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Order Confirmed!</h1>
              <p className="text-lg text-muted-foreground mb-1">Thank you for your purchase</p>
              <p className="text-sm text-muted-foreground">
                Order ID: <span className="font-mono font-medium">#EVG-2025-001234</span>
              </p>
            </div>

            {/* Order Details */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Order Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">

                <div className="flex items-start gap-4 pb-4 border-b">
                  <div className="w-20 h-20 bg-muted rounded-md"></div>
                  <div className="flex-1">
                    <h3 className="font-medium mb-1">Tata Power EZ Home 7.4kW</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      7.4kW • Type 2 Connector
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span>Qty: 1</span>
                      <span className="font-medium">₹45,000</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between text-sm">
                  <span>Installation Service</span>
                  <span>₹4,000</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span>Taxes & Fees</span>
                  <span className="text-muted-foreground">Included</span>
                </div>

                <div className="flex justify-between font-bold text-lg pt-2 border-t">
                  <span>Total Paid</span>
                  <span>₹49,000</span>
                </div>

              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>What Happens Next?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-sm">1</div>
                  <div>
                    <h4 className="font-medium mb-1">Site Assessment (Within 48 hours)</h4>
                    <p className="text-sm text-muted-foreground">
                      Our technician will assess your electrical setup and finalize installation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-sm">2</div>
                  <div>
                    <h4 className="font-medium mb-1">Confirmation Call</h4>
                    <p className="text-sm text-muted-foreground">
                      We’ll call to confirm findings and schedule installation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-sm">3</div>
                  <div>
                    <h4 className="font-medium mb-1">Installation (7–10 days)</h4>
                    <p className="text-sm text-muted-foreground">
                      Professional installation with testing + warranty activation.
                    </p>
                  </div>
                </div>

              </CardContent>
            </Card>

            {/* Delivery & Support */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">

              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Delivery Address</h4>
                  <p className="text-sm text-muted-foreground">
                    John Doe<br />
                    +91 98765 43210<br />
                    123 Green Avenue<br />
                    Mumbai, Maharashtra - 400001
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium mb-3">Need Help?</h4>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2 text-muted-foreground">
                      <Phone className="h-4 w-4 mt-0.5" />
                      <div>
                        <span>Support (24/7): +91 96869 81633</span><br />
                        <span>Sales: +91 80734 46048</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 text-muted-foreground">
                      <Mail className="h-4 w-4 mt-0.5" />
                      <div>
                        <span>support@greenjunction.in</span><br />
                        <span>sales@greenjunction.in</span>
                      </div>
                    </div>
                  </div>

                </CardContent>
              </Card>

            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline" className="flex-1 gap-2">
                <Download className="h-4 w-4" />
                Download Invoice
              </Button>

              <Link to="/my-orders" className="flex-1">
                <Button variant="cta" className="w-full">
                  Track Order
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrderConfirmation;
