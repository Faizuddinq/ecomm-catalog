import React from 'react';
import { StarRating } from './StarRating';
import type { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative pt-[100%]">
        <img
          src={product.image}
          alt={product.title}
          className="absolute top-0 left-0 w-full h-full object-contain p-4"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 line-clamp-2">
          {product.title}
        </h3>
        <div className="flex items-center justify-between mb-2">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            ${product.price.toFixed(2)}
          </span>
          <StarRating rating={product.rating.rate} />
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
          {product.description}
        </p>
      </div>
    </div>
  );
};