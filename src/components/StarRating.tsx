import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 5 }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(maxRating)].map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${
            index < rating
              ? 'text-yellow-400 fill-yellow-400'
              : 'text-gray-300'
          }`}
        />
      ))}
      <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};