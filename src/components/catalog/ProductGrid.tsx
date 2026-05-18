import type { Product } from '../../types';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export function ProductGrid({ products, onProductClick }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="col-span-full text-center py-12 text-gray-500">
        <p className="text-lg">No hay productos en esta categoría</p>
      </div>
    );
  }

  return (
    <>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={onProductClick}
        />
      ))}
    </>
  );
}
