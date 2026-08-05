function Sales() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Sales Entry</h1>

      <input type="text" placeholder="Product Name" />
      <br /><br />

      <input type="number" placeholder="Quantity Sold" />
      <br /><br />

      <button>Save Sale</button>
    </div>
  );
}

export default Sales;