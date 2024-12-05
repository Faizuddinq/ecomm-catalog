import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { SortOption } from '../../types/sorting';

interface FilterState {
  searchQuery: string;
  currentPage: number;
  sortOption: SortOption;
}

const initialState: FilterState = {
  searchQuery: '',
  currentPage: 1,
  sortOption: 'price-asc',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.currentPage = 1; // Reset page when search changes
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setSortOption: (state, action: PayloadAction<SortOption>) => {
      state.sortOption = action.payload;
      state.currentPage = 1; // Reset page when sort changes
    },
  },
});

export const { setSearchQuery, setCurrentPage, setSortOption } = filterSlice.actions;
export default filterSlice.reducer;