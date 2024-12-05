export type SortOption = 'price-asc' | 'price-desc' | 'rating-desc' | 'rating-asc';

export interface SortConfig {
  field: 'price' | 'rating';
  direction: 'asc' | 'desc';
}

export const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating-desc', label: 'Rating: High to Low' },
  { value: 'rating-asc', label: 'Rating: Low to High' },
];