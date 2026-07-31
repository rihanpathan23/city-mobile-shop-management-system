function ProductList() {
  const products = [
    {
      id: "CMS001",
      name: "Samsung A52s",
      price: 18000,
      quantity: 2,
    },
    {
      id: "CMS002",
      name: "iPhone 12",
      price: 35000,
      quantity: 1,
    },
  ];

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
          <h3>{product.name}</h3>
          <p>ID: {product.id}</p>
          <p>Price: ₹{product.price}</p>
          <p>Quantity: {product.quantity}</p>

          <button>Edit</button>
          <button style={{ marginLeft: "10px" }}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;