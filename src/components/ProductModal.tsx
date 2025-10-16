import React from 'react';
import Image from 'next/image';
import { X } from 'lucide-react'; // Optional: for close icon, or use regular X text

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    title: string;
    description: string;
    imageUrl: string;
    videoUrl?: string;
    fullDescription?: string;
    features?: string[];
    specifications?: string[];
    price?: string;
    category?: string;
  } | null;
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null;

  // Prevent background scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on outside click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Close on Escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fadeIn"
      onClick={handleBackdropClick}
    >
      {/* Modal Container */}
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/90 dark:bg-gray-800/90 rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-lg"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Content */}
        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Left Side - Image */}
          <div className="relative w-full h-80 md:h-full min-h-[300px] rounded-xl overflow-hidden">
            <Image
              src={product.imageUrl}
              alt={product.title}
              layout="fill"
              className="object-cover"
              priority
            />
          </div>

          {/* Right Side - Details */}
          <div className="flex flex-col space-y-4">
            {/* Category Badge */}
            {product.category && (
              <span className="inline-block w-fit px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-green-600 to-yellow-500 text-white">
                {product.category}
              </span>
            )}

            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {product.title}
            </h2>

            {/* Price */}
            {product.price && (
              <p className="text-2xl font-bold bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
                {product.price}
              </p>
            )}

            {/* Short Description */}
            <p className="text-gray-600 dark:text-gray-300 text-base">
              {product.description}
            </p>

            {/* Full Description */}
            {product.fullDescription && (
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  About This Product
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>
            )}

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                      <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Specifications */}
            {product.specifications && product.specifications.length > 0 && (
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Specifications
                </h3>
                <ul className="space-y-2">
                  {product.specifications.map((spec, idx) => (
                    <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Watch Now Button */}
            {product.videoUrl && (
              <div className="pt-4">
                <a
                  href={product.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center px-8 py-3 rounded-full bg-gradient-to-r from-green-600 to-yellow-500 text-white font-bold shadow-lg hover:from-green-700 hover:to-yellow-600 transition duration-300"
                >
                  Watch Now
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
