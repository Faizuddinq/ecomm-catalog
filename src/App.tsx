import React, { useEffect, useMemo } from 'react';
import { SearchBar } from './components/SearchBar';
import { ProductGrid } from './components/ProductGrid';
import { Pagination } from './components/Pagination';
import { SortSelect } from './components/SortSelect';
import { ThemeToggle } from './components/ThemeToggle';
import { Loader2 } from 'lucide-react';
import { useAppDispatch } from './hooks/useAppDispatch';
import { useAppSelector } from './hooks/useAppSelector';
import { fetchProducts } from './store/slices/productsSlice';
import { setSearchQuery, setCurrentPage, setSortOption } from './store/slices/filterSlice';
import {
  selectProductsStatus,
  selectProductsError,
  selectSearchQuery,
  selectCurrentPage,
  selectSortOption,
  selectSortedAndFilteredProducts,
} from './store/selectors';

const ITEMS_PER_PAGE = 8;

function App() {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectProductsStatus);
  const error = useAppSelector(selectProductsError);
  const searchQuery = useAppSelector(selectSearchQuery);
  const currentPage = useAppSelector(selectCurrentPage);
  const sortOption = useAppSelector(selectSortOption);
  const sortedProducts = useAppSelector(selectSortedAndFilteredProducts);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return sortedProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [sortedProducts, currentPage]);

  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
        <div className="text-center text-red-600 dark:text-red-400">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <ThemeToggle />
      
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Wingman E-commerce Product Catalog
        </h1>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <SearchBar 
            value={searchQuery}
            onChange={(value) => dispatch(setSearchQuery(value))}
          />
          <SortSelect
            value={sortOption}
            onChange={(value) => dispatch(setSortOption(value))}
          />
        </div>

        {status === 'loading' ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
          </div>
        ) : (
          <>
            {sortedProducts.length === 0 ? (
              <div className="text-center text-gray-600 dark:text-gray-400">
                No products found
              </div>
            ) : (
              <>
                <ProductGrid products={paginatedProducts} />
                {totalPages > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(page) => dispatch(setCurrentPage(page))}
                  />
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;