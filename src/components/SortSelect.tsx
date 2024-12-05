import React from 'react';
import { SORT_OPTIONS } from '../types/sorting';
import type { SortOption } from '../types/sorting';

interface SortSelectProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export const SortSelect: React.FC<SortSelectProps> = ({ value, onChange }) => {
  return (
    <div className="flex items-center gap-2 mb-4">
      <label htmlFor="sort" className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Sort by:
      </label>
      <select
        id="sort"
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="p-2 text-sm border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};