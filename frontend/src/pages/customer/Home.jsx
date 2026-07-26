import Navbar from "../../components/layout/Navbar";
import CategorySection from "../../components/products/CategorySection";
import SearchBar from "../../components/products/SearchBar";
import Footer from "../../components/layout/Footer";

function Home() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Hero Section (Temporary) */}
      <section
        style={{
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h1>Welcome to City Mobile Shop</h1>

        <p style={{ marginTop: "10px" }}>
          Buy Second-Hand Phones, Covers, Chargers, Earphones and Accessories.
        </p>
      </section>

      {/* Categories */}
      <CategorySection />

      {/* Search */}
      <SearchBar />

      {/* Product Grid (Coming Next) */}
      {/* <ProductGrid /> */}

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;