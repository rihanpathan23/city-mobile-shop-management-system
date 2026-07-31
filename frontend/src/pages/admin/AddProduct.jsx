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
  <label>Product ID</label>
<input
  type="text"
  placeholder="Auto Generated (e.g. CMS001)"
  disabled
/>

  <label>Brand</label>
  <input type="text" placeholder="Enter Brand Name" />

  <label>Category</label>
 <select>
  <option value="">Select Category</option>
  <option value="Mobile">Mobile</option>
  <option value="Mobile Cover">Mobile Cover</option>
  <option value="Charger">Charger</option>
  <option value="Earphones">Earphones</option>
  <option value="Smart Watch">Smart Watch</option>
  <option value="Power Bank">Power Bank</option>
  <option value="Tempered Glass">Tempered Glass</option>
  <option value="Cable">Cable</option>
</select>

  <label>Price (₹)</label>
  <input type="number" placeholder="Enter Price" />

  <label>Quantity</label>
  <input type="number" placeholder="Enter Quantity" />

  <label>Description</label>
  <textarea placeholder="Write Product Description"></textarea>
  <input
  type="text"
  placeholder="Paste product image URL"
/>
<img
  src="https://via.placeholder.com/200"
  alt="Preview"
  width="200"
/>

  <button type="submit">Save Product</button>
  <label>Image URL</label>

</form>
     
    </div>
    
  );
}

export default AddProduct;