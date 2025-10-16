'use client'; // Add this for client-side state management

import React, { useState } from "react";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import { Title } from "@/components/Shared/BlogUIKit";
import products from "../../../data/products.json";

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300); // Clear after animation
  };

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 ">
      <Title align="center" className="py-10 bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
        Our Products
      </Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products && products.length ? (
          products.map((product: any, idx: number) => (
            <ProductCard 
              key={idx} 
              {...product}
              onClick={() => handleProductClick(product)}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-muted">
            No products available.
          </p>
        )}
      </div>

      {/* Product Detail Modal */}
      <ProductModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </main>
  );
}
