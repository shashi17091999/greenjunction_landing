import { useState, useEffect } from "react";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "./Button";
import { Input } from "./Input";
import { Link, useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";
import Logo from "../assets/logo_greenjunction.jpeg";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userPhone, setUserPhone] = useState("");

  useEffect(() => {
    const session = localStorage.getItem("userSession");
    if (session) {
      const userData = JSON.parse(session);
      setIsLoggedIn(true);
      setUserPhone(userData.phone);
    }
  }, []);

  const handleProfileClick = () => {
    if (isLoggedIn) {
      navigate("/account");
    } else {
      setIsLoginModalOpen(true);
    }
  };

  const handleLoginSuccess = (phone) => {
    setIsLoggedIn(true);
    setUserPhone(phone);
    navigate("/account");
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          {/* <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">⚡</span>
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Green Junction
            </span>
          </Link> */}
          {/* <Logo/> */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <img 
              src={Logo} 
              alt="Green Junction Logo" 
              className="w-9 h-9 rounded-lg object-cover"
            />
            <span className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Green Junction
            </span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search chargers, OEMs, power (kW), connector type..."
                className="pl-10 w-full"
              />
            </div>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-4">
            <Link to="/marketplace">
              <Button variant="ghost" size="sm" className="hidden lg:inline-flex">
                Products
              </Button>
            </Link>
            <Link to="/knowledge-hub">
              <Button variant="ghost" size="sm" className="hidden lg:inline-flex">
                K-Hub
              </Button>
            </Link>
            <Link to="/oem-dashboard">
              <Button variant="ghost" size="sm" className="hidden lg:inline-flex">
                OEM Portal
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
            <Button variant="ghost" size="icon" onClick={handleProfileClick}>
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Search Bar - Mobile */}
        <div className="md:hidden pb-3">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search chargers..."
              className="pl-10 w-full"
            />
          </div>
        </div>
      </div>

      <LoginModal 
        open={isLoginModalOpen}
        onOpenChange={setIsLoginModalOpen}
        onLoginSuccess={handleLoginSuccess}
      />
    </nav>
  );
};

export default Navbar;