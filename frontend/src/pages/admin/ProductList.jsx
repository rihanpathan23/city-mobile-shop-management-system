import { products } from "../../data/products";
function ProductList() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Product List</h1>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginTop: "10px",
          }}
        >
            <img
  src={product.image}
  alt={product.name}
  style={{
    width: "150px",
    height: "150px",
    objectFit: "cover",
    borderRadius: "10px",
  }}
/>
          <h3>{product.name}</h3>
          <p>ID: {product.id}</p>
          <p>Price: ₹{product.price}</p>
          <p>Quantity: {product.quantity}</p>
          <p>Brand: {product.brand}</p>
          <p>Category: {product.category}</p>
          <button
         onClick={() => console.log("Edit clicked")}
              >
              Edit
          </button>
          <button
  onClick={() => console.log("Delete clicked")}
  style={{ marginLeft: "10px" }}
>
  Delete
</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;