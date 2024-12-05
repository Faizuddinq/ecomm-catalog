import { Product } from '../types/product';
import { SortOption, SortConfig } from '../types/sorting';

export const getSortConfig = (sortOption: SortOption): SortConfig => {
  const [field, direction] = sortOption.split('-') as [
    'price' | 'rating',
    'asc' | 'desc'
  ];
  return { field, direction };
};

export const sortProducts = (products: Product[], sortOption: SortOption): Product[] => {
  const { field, direction } = getSortConfig(sortOption);
  
  return [...products].sort((a, b) => {
    const valueA = field === 'rating' ? a.rating.rate : a.price;
    const valueB = field === 'rating' ? b.rating.rate : b.price;
    
    return direction === 'asc' ? valueA - valueB : valueB - valueA;
  });
};