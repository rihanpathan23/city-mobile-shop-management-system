function ProductList() {
  const products = [
    {
        id: "CMS001",
         name: "Samsung A52s",
      brand: "Samsung",
      category: "Mobile",
       price: 18000,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
      },
      
    {
  id: "CMS002",
  name: "iPhone 12",
  brand: "Apple",
  category: "Mobile",
  price: 35000,
  quantity: 1,
  image: "https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd",
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
          <button>Edit</button>
          <button style={{ marginLeft: "10px" }}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;