import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo_greenjunction.jpeg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            {/* <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">⚡</span>
              </div> */}
              <div className="flex items-center space-x-2 mb-4">
              <img 
                src={Logo} 
                alt="Green Junction Logo" 
                className="w-9 h-9 rounded-lg object-cover"
              />
              <span className="text-xl font-bold">Green Junction</span>
            </div>
            <p className="text-background/70 mb-4">
              India's most trusted marketplace for EV chargers and professional installation services.
            </p>
            <div className="flex space-x-3">
              <a
  href="https://www.facebook.com/p/ChargingAdda-100090197676085/"
  className="w-9 h-9 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
>
  <Facebook className="h-4 w-4" />
</a>

<a
  href="https://x.com/chargingadda?s=21&t=nxSokZTv4EzevVn2IMhc4w"
  className="w-9 h-9 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
>
  <Twitter className="h-4 w-4" />
</a>

<a
  href="https://www.instagram.com/chargingadda?igsh=NWdxenBqOGY4bGRt"
  className="w-9 h-9 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
>
  <Instagram className="h-4 w-4" />
</a>

<a
  href="https://www.linkedin.com/company/chargingadda/"
  className="w-9 h-9 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
>
  <Linkedin className="h-4 w-4" />
</a>

            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2 text-background/70">
              <li><Link to="/products" onClick={() => window.scrollTo(0, 0)} className="hover:text-background transition-colors">All Chargers</Link></li>
              <li><Link to="/products" onClick={() => window.scrollTo(0, 0)} className="hover:text-background transition-colors">Home Chargers</Link></li>
              <li><Link to="/products" onClick={() => window.scrollTo(0, 0)} className="hover:text-background transition-colors">Commercial Solutions</Link></li>
              <li><Link to="/products" onClick={() => window.scrollTo(0, 0)} className="hover:text-background transition-colors">DC Fast Chargers</Link></li>
              <li><Link to="/compare" onClick={() => window.scrollTo(0, 0)} className="hover:text-background transition-colors">Compare Chargers</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-background/70">
              <li><Link to="/about" onClick={() => window.scrollTo(0, 0)} className="hover:text-background transition-colors">About Us</Link></li>
              <li><Link to="/oem-dashboard" onClick={() => window.scrollTo(0, 0)} className="hover:text-background transition-colors">OEM Partners</Link></li>
              <li><Link to="/become-technician" onClick={() => window.scrollTo(0, 0)} className="hover:text-background transition-colors">Become a Technician</Link></li>
              <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="hover:text-background transition-colors">Contact Us</Link></li>
              <li><Link to="/knowledge-hub" onClick={() => window.scrollTo(0, 0)} className="hover:text-background transition-colors">Knowledge Hub</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-background/70">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>123 EV Hub, Bangalore, Karnataka 560001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span>1800-123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span>support@greenjunction.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/70 text-sm">
              © 2025 Green Junction. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-background/70">
              <Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)} className="hover:text-background transition-colors">Privacy Policy</Link>
              <Link to="/terms-and-conditions" onClick={() => window.scrollTo(0, 0)} className="hover:text-background transition-colors">Terms and Conditions</Link>
              <Link to="/return-policy" onClick={() => window.scrollTo(0, 0)} className="hover:text-background transition-colors">Return Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;