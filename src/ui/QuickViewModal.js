import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/Dialog";
import { Button } from "../components/Button";
import { Badge } from "../components/Badge";
import { Star, Zap, Cable, Shield, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom"; 

const QuickViewModal = ({ product, open, onOpenChange }) => {
  if (!product) return null;

  const priceDisplay = typeof product.price === 'number' 
    ? `₹${product.price.toLocaleString()}` 
    : product.price;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Image */}
          <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
            <img 
              src={product.images?.[0] || "/placeholder.svg"} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {(product.certified || product.bis_certified) && (
              <Badge className="absolute top-3 left-3 bg-success">
                <CheckCircle2 className="h-3 w-3 mr-1" />
                BIS Certified
              </Badge>
            )}
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">{product.oem}</p>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-warning text-warning" />
                  <span className="font-medium">{product.rating}</span>
                </div>
                <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <span>{product.power}</span>
              </div>
              <div className="flex items-center gap-2">
                <Cable className="h-5 w-5 text-accent" />
                <span>{product.connector}</span>
              </div>
              {product.warranty && (
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-success" />
                  <span>{product.warranty}</span>
                </div>
              )}
            </div>

            {product.features && product.features.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2">Key Features</h4>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <Badge key={feature} variant="secondary">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-4 border-t">
              <p className="text-3xl font-bold text-primary mb-1">{priceDisplay}</p>
              <p className="text-sm text-muted-foreground">Inclusive of all taxes</p>
            </div>

            <div className="flex gap-3 pt-4">
              <Link to={`/product/${product.id}`} className="flex-1">
                <Button variant="cta" size="lg" className="w-full">
                  View Full Details
                </Button>
              </Link>
              <Link to={`/product/${product.id}`}>
                <Button variant="outline" size="lg">
                  Buy Now
                </Button>
              </Link>
            </div>

            <p className="text-xs text-center text-muted-foreground">
              Free site assessment • Expert installation • 3-year warranty
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickViewModal;