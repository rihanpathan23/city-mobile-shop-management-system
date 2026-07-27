import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/layout/Hero";
import CategorySection from "../../components/products/CategorySection";
import SearchBar from "../../components/products/SearchBar";
import ProductGrid from "../../components/products/ProductGrid";
import Footer from "../../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategorySection />
      <ProductGrid />
      <Footer />
    </>
    
  );
}

export default Home;