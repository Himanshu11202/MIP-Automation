import React from "react";
import ProductCard from "@/components/ProductCard";
import { Title } from "@/components/Shared/BlogUIKit";
import products from "../../../data/products.json";

export default function ProductsPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 ">
      <Title align="center" className="py-10">
        our Products
      </Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products && products.length ? (
          products.map((product: any, idx: number) => (
            <ProductCard key={idx} {...product} />
          ))
        ) : (
          <p className="col-span-full text-center text-muted">
            No products available.
          </p>
        )}
      </div>
    </main>
  );
}
