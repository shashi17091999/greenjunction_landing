import Navbar from "./Navbar";
import Hero from "./Hero";
import TrustBanner from "./TrustBanner";
import CategoryCards from "./CategoryCards";
import FeaturedProducts from "./FeaturedProducts";
import HowItWorks from "./HowItWorks";
import CTASection from "./CTASection";
import Footer from "./Footer";
import TrustedBrands from "./TrustedBrands";
import SuccessMetrics from "./SuccessMetrics";
import Testimonials from "./Testimonials";
import ChatWidget from "./ChatWidget";
import Newsletter from "./Newsletter";
import ExploreByUseCase from "./ExploreByUseCase";
import RecentlyViewed from "./RecentlyViewed";
import InstallationGallery from "./InstallationGallery";

const MainPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBanner />
      <TrustedBrands />
      <SuccessMetrics />
      <CategoryCards />
      <FeaturedProducts />
      <ExploreByUseCase />
      <Testimonials />
      <HowItWorks />
      <InstallationGallery />
      <RecentlyViewed />
      <CTASection />
      <Newsletter />
      <ChatWidget />
      <Footer />
    </div>
  );
};

export default MainPage;