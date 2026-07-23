function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <h2>📱 City Mobile Shop</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="/">Home</a>
        <a href="/">Products</a>
        <a href="/">Contact</a>
      </div>

      <button>WhatsApp</button>
    </nav>
  );
}

export default Navbar;