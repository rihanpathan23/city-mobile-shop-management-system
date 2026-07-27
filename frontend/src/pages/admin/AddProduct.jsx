function AddProduct() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Add New Product</h1>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          maxWidth: "400px",
          marginTop: "20px",
        }}
      >
        <input type="text" placeholder="Product Name" />

        <input type="text" placeholder="Brand" />

        <input type="text" placeholder="Category" />

        <input type="number" placeholder="Price" />

        <input type="number" placeholder="Quantity" />

        <textarea placeholder="Description"></textarea>

        <button type="submit">
          Save Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;