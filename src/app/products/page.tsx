import React from "react";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    title: "Dough Making Machine",
    description:
      "An efficient machine for kneading dough for various food products.",
    imageUrl: "/img/products/dough-making-machine.png",
    videoUrl: "https://youtu.be/oO1yHCi4DY8?si=MAoNfjm-zLIt_2Re",
  },
  {
    title: "Electric Kadhai",
    description: "An efficient machine for cooking food without fire.",
    imageUrl: "/img/products/Electric Kadhai.jpg",
    videoUrl: "https://youtu.be/5sc1aOhTYYg?si=r8Yev62PqtclUYdZ",
  },
  {
    title: "Papad Machine",
    description: "An efficient machine for making papad.",
    imageUrl: "/img/products/Papad machine.jpg",
    videoUrl: "https://youtu.be/z5fGsfPsG5Y?si=0uguWzu4yg8z8nNJ",
  },
  {
    title: "Coating Flouring Machine",
    description:
      "An efficient machine for coating the any wafers or chips with masala.",
    imageUrl: "/img/products/Coating Flouring Machine.jpg",
    videoUrl: "https://youtu.be/iYUsS5hp0VE?si=Q4_KhOZmAk0D-U2h",
  },
  {
    title: "Potato Chips Machine",
    description: "An efficient machine for cutting potatos to chips.",
    imageUrl: "/img/products/Potato Chips Machine.jpg",
    videoUrl: "https://youtu.be/_u6pXmNu9nE?si=79v080psWVzhSaHH",
  },
  {
    title: "Potato Wafer Machine",
    description: "An efficient machine for making Potato Wafers.",
    imageUrl: "/img/products/Potato Wafer Machine.jpg",
    videoUrl: "https://youtu.be/_u6pXmNu9nE?si=79v080psWVzhSaHH",
  },
  // We will add more products here
];

export default function ProductsPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-nav">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, idx) => (
          <ProductCard key={idx} {...product} />
        ))}
      </div>
    </main>
  );
}
