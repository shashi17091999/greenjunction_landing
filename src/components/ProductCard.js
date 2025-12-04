import { useState, useEffect } from "react";
import { Star, Zap, Cable, ChevronLeft, ChevronRight, CheckCircle2, Clock } from "lucide-react";
import { Card, CardContent, CardFooter } from "./Card";
import { Button } from "./Button";
import { Badge } from "./Badge";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

const ProductCard = ({ product, index = 0 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const images = product.images || ["/placeholder.svg"];

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    if (!isHovered && images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered, images.length]);

  const goToPrevious = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const priceDisplay = typeof product.price === 'number' 
    ? `₹${product.price.toLocaleString()}` 
    : product.price;

  return (
    <Card
      className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden animate-scale-in"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        {/* Image Carousel */}
        <div className="relative h-48 bg-muted">
          {images.map((image, idx) => (
            <img
              key={idx}
              src={image}
              alt={`${product.name} - Image ${idx + 1}`}
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
                idx === currentImageIndex ? "opacity-100" : "opacity-0"
              )}
              loading="lazy"
            />
          ))}

          {/* Navigation Arrows - Show on hover */}
          {images.length > 1 && isHovered && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-1.5 hover:bg-background transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-1.5 hover:bg-background transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </>
          )}

          {/* Progress Dots */}
          {images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentImageIndex(idx);
                  }}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    idx === currentImageIndex 
                      ? "w-6 bg-primary" 
                      : "w-1.5 bg-background/50 hover:bg-background/80"
                  )}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* BIS Certified Badge */}
        {(product.certified || product.bis_certified) && (
          <Badge className="absolute top-3 left-3 bg-[#00B67A] hover:bg-[#00A569] text-white border-0">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            BIS Certified
          </Badge>
        )}

        {/* Awaiting Certification */}
        {!product.certified && !product.bis_certified && (
          <Badge className="absolute top-3 left-3 bg-muted text-muted-foreground border-muted-foreground/20">
            <Clock className="h-3 w-3 mr-1" />
            Awaiting Certification
          </Badge>
        )}

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
          <Star className="h-3 w-3 fill-trust text-trust" />
          <span className="text-xs font-medium">{product.rating}</span>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="mb-2">
          <p className="text-xs text-muted-foreground mb-1">{product.oem}</p>
          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </div>

        <div className="flex items-center gap-3 mb-3 text-sm">
          <div className="flex items-center gap-1">
            <Zap className="h-4 w-4 text-primary" />
            <span>{product.power}</span>
          </div>
          <div className="flex items-center gap-1">
            <Cable className="h-4 w-4 text-accent" />
            <span>{product.connector}</span>
          </div>
        </div>

        {product.features && product.features.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {product.features.slice(0, 3).map((feature) => (
              <Badge key={feature} variant="secondary" className="text-xs">
                {feature}
              </Badge>
            ))}
          </div>
        )}

        <div className="flex items-baseline justify-between pt-3 border-t border-border">
          <div>
            <p className="text-2xl font-bold text-primary">{priceDisplay}</p>
            <p className="text-xs text-muted-foreground">{product.reviews} reviews</p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2">
        <Link to={`/product/${product.id}`} className="flex-1">
          <Button variant="hero" className="w-full" size="sm">
            Buy & Install
          </Button>
        </Link>
        <Link to={`/product/${product.id}`}>
          <Button variant="outline" size="sm">
            Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;