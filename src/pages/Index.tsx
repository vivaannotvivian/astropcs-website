import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedBuilds from "@/components/FeaturedBuilds";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedBuilds />
      <Services />
      <Footer />
    </div>
  );
};

export default Index;
