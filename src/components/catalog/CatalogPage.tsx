import { useState } from 'react';
import type { Product } from '../../types';
import type { Category } from '../../types';
import { FilterCarousel } from './FilterCarousel';
import { ProductGrid } from './ProductGrid';
import { products } from '../../data/products';

interface CatalogPageProps {
  categories: Category[];
  onOpenProduct: (product: Product) => void;
}

// Lazy initializer: read selectedCategory from sessionStorage on mount
function getInitialFilter(): string | null {
  const selected = sessionStorage.getItem('selectedCategory');
  if (selected) {
    sessionStorage.removeItem('selectedCategory');
    return selected;
  }
  return null;
}

export function CatalogPage({ categories, onOpenProduct }: CatalogPageProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(getInitialFilter);

  const filteredProducts = activeFilter
    ? products.filter((p) => p.category === activeFilter)
    : products;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="font-display text-2xl md:text-3xl font-light text-gray-900 mb-4">
        Catálogo
      </h1>

      <FilterCarousel
        categories={categories}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
        <ProductGrid
          products={filteredProducts}
          onProductClick={onOpenProduct}
        />
      </div>
    </div>
  );
}
