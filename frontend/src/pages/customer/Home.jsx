import Navbar from "../../components/layout/Navbar";
import CategorySection from "../../components/product/CategorySection";
import Footer from "../../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <div style={{ padding: "40px" }}>
        <h1>Welcome to City Mobile Shop</h1>

        <p>
          Buy Second-Hand Phones, Covers, Chargers, Earphones and Accessories.
        </p>
      </div>
       <CategorySection />
       <Footer />
    </>
  );
}

export default Home;