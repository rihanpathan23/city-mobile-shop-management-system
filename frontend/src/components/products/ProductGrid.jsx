import React from 'react';
import ProductCard from './ProductCard'; // Adjust path according to your folder structure

// Dummy Mobile Shop Products Data
const dummyProducts = [
  {
    id: 1,
    name: 'iPhone 11 (64GB)',
    brand: 'Apple',
    condition: 'Excellent',
    sellingPrice: 7000,
    originalPrice: 35000,
    image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?q=80&w=600&auto=format&fit=crop',
    whatsappNumber: '919876543210',
  },
  {
    id: 2,
    name: 'Samsung Galaxy S22 Ultra',
    brand: 'Samsung',
    condition: 'Good',
    sellingPrice: 48000,
    originalPrice: 58000,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=600&auto=format&fit=crop',
    whatsappNumber: '919876543210',
  },
  {
    id: 3,
    name: 'OnePlus 11 5G (256GB)',
    brand: 'OnePlus',
    condition: 'Excellent',
    sellingPrice: 38500,
    originalPrice: 45000,
    image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?q=80&w=600&auto=format&fit=crop',
    whatsappNumber: '919876543210',
  },
  {
    id: 4,
    name: 'Google Pixel 7a',
    brand: 'Google',
    condition: 'Fair',
    sellingPrice: 24999,
    originalPrice: 31000,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=600&auto=format&fit=crop',
    whatsappNumber: '919876543210',
  },
  {
    id: 5,
    name: 'Nothing Phone (2)',
    brand: 'Nothing',
    condition: 'Excellent',
    sellingPrice: 32000,
    originalPrice: 39999,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600&auto=format&fit=crop',
    whatsappNumber: '919876543210',
  },
  {
    id: 6,
    name: 'Redmi Note 12 Pro+',
    brand: 'Xiaomi',
    condition: 'Good',
    sellingPrice: 18500,
    originalPrice: 24000,
    image: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?q=80&w=600&auto=format&fit=crop',
    whatsappNumber: '919876543210',
  },
  {
    id: 7,
    name: 'Vivo V27 Pro 5G',
    brand: 'Vivo',
    condition: 'Good',
    sellingPrice: 22500,
    originalPrice: 28000,
    image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?q=80&w=600&auto=format&fit=crop',
    whatsappNumber: '919876543210',
  },
  {
    id: 8,
    name: 'Realme GT Neo 3',
    brand: 'Realme',
    condition: 'Fair',
    sellingPrice: 16000,
    originalPrice: 21000,
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=600&auto=format&fit=crop',
    whatsappNumber: '919876543210',
  },
];

const ProductGrid = () => {
  return (
    <section className="w-full py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Available Stock
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Browse our latest second-hand and refurbished smartphones.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dummyProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              brand={product.brand}
              condition={product.condition}
              sellingPrice={product.sellingPrice}
              originalPrice={product.originalPrice}
              image={product.image}
              whatsappNumber={product.whatsappNumber}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ProductGrid;