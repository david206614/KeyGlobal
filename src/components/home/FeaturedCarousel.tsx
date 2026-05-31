import type { Product } from '../../types';
import { ImageWithPlaceholder } from '../ui/ImageWithPlaceholder';
import { assetUrl } from '../../lib/assets';

interface FeaturedCarouselProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export function FeaturedCarousel({ products: featured, onProductClick }: FeaturedCarouselProps) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="font-display text-2xl md:text-3xl font-light text-gray-900 text-center mb-8">
        Destacados
      </h2>
      <div
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-4 -mx-4"
        style={{ scrollbarWidth: 'none' }}
      >
        {featured.map((product) => (
          <button
            key={product.id}
            onClick={() => onProductClick(product)}
            className="snap-start shrink-0 w-48 sm:w-56 bg-white rounded-xl overflow-hidden border border-gray-100 cursor-pointer text-left"
          >
            <div className="aspect-square bg-[#E8D5D9] overflow-hidden relative">
              {product.images.length > 0 ? (
                <ImageWithPlaceholder
                  src={assetUrl(product.images[0])}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-[#E8D5D9]" />
              )}
            </div>
            <div className="p-3">
              <p className="font-medium text-gray-900 text-sm truncate">{product.title}</p>
              <p className="text-xs text-brand font-medium mt-1 capitalize">
                {product.category}
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
