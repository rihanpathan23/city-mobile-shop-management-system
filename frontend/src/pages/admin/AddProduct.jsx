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
  <label>Product Name</label>
  <input type="text" placeholder="Enter Product Name" />

  <label>Brand</label>
  <input type="text" placeholder="Enter Brand Name" />

  <label>Category</label>
  <input type="text" placeholder="Select Category" />

  <label>Price (₹)</label>
  <input type="number" placeholder="Enter Price" />

  <label>Quantity</label>
  <input type="number" placeholder="Enter Quantity" />

  <label>Description</label>
  <textarea placeholder="Write Product Description"></textarea>

  <button type="submit">Save Product</button>
</form>
     
    </div>
  );
}

export default AddProduct;