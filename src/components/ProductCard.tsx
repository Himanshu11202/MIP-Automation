import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  onClick: () => void; // Add onClick handler
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, imageUrl, videoUrl, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden w-full transition-transform duration-300 hover:scale-105 cursor-pointer"
    >
      {/* Image Container - This will fill the entire card */}
      <div className="relative w-full h-80">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          className="object-cover"
          loading="lazy"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>

      {/* Text and Button Container - Absolutely Positioned */}
      <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-center text-center">
        <h2 className="text-xl font-bold text-white mb-2">
          {title}
        </h2>
        <p className="text-gray-200 text-sm mb-4">
          {description}
        </p>
        {videoUrl && (
          <span className="inline-block mt-2 px-6 py-2 rounded-full bg-gradient-to-r from-green-800 to-yellow-600 text-white font-bold shadow-lg transition duration-300">
            Watch Now
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
