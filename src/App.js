import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage';
import Products from "./pages/Products";
import MarketPlace from "./components/MarketPlace";
import ProductDetail from "./components/ProductDetail";
import Compare from "./components/Compare";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import MyOrders from "./pages/MyOrders";
import CustomerAccount from "./pages/CustomerAccount";
import ServiceTickets from "./pages/ServiceTickets";
import KnowledgeHub from "./pages/KnowledgeHub";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BecomeTechnician from "./pages/BecomeTechnician";
import OEMDashboard from "./pages/OEMDashboard";
import TechnicianApp from "./pages/TechnicianApp";
import AdminConsole from "./pages/AdminConsole";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ReturnPolicy from "./components/ReturnPolicy";
import TermsAndConditions from "./components/TermsAndConditions";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products" element={<Products />} /> 
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/account" element={<CustomerAccount />} />
          <Route path="/service-tickets" element={<ServiceTickets />} />
          <Route path="/knowledge-hub" element={<KnowledgeHub />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/become-technician" element={<BecomeTechnician />} />
          <Route path="/oem-dashboard" element={<OEMDashboard />} />
          <Route path="/technician" element={<TechnicianApp />} />
          <Route path="/admin" element={<AdminConsole />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
          <Route path="/return-policy" element={<ReturnPolicy/>}/>
          <Route path="/terms-and-conditions" element={<TermsAndConditions/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;