import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from './index';
import { sortProducts } from '../utils/sorting';

export const selectProducts = (state: RootState) => state.products.items;
export const selectProductsStatus = (state: RootState) => state.products.status;
export const selectProductsError = (state: RootState) => state.products.error;
export const selectSearchQuery = (state: RootState) => state.filter.searchQuery;
export const selectCurrentPage = (state: RootState) => state.filter.currentPage;
export const selectSortOption = (state: RootState) => state.filter.sortOption;

export const selectFilteredProducts = createSelector(
  [selectProducts, selectSearchQuery],
  (products, searchQuery) => {
    if (!searchQuery) return products;
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
);

export const selectSortedAndFilteredProducts = createSelector(
  [selectFilteredProducts, selectSortOption],
  (filteredProducts, sortOption) => sortProducts(filteredProducts, sortOption)
);