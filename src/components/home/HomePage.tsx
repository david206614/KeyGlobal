import type { Product } from '../../types';
import type { View } from '../../types';
import { HeroSection } from './HeroSection';
import { ServicesGrid } from './ServicesGrid';
import { FeaturedCarousel } from './FeaturedCarousel';
import { products } from '../../data/products';

interface HomePageProps {
  onNavigate: (view: View) => void;
  onOpenProduct: (product: Product) => void;
}

// Show first 6 products as featured
const featuredProducts = products.slice(0, 6);

export function HomePage({ onNavigate, onOpenProduct }: HomePageProps) {
  return (
    <div>
      <HeroSection onCTAClick={() => onNavigate('catalog')} />
      <ServicesGrid />
      <FeaturedCarousel
        products={featuredProducts}
        onProductClick={onOpenProduct}
      />
      {/* CTA Banner */}
      <section className="bg-brand-subtle py-12 px-4 text-center">
        <h2 className="font-display text-2xl md:text-3xl font-light text-gray-900 mb-4">
          ¿Necesitás algo personalizado?
        </h2>
        <p className="text-gray-600 mb-6 max-w-lg mx-auto">
          Contactanos por WhatsApp y te ayudamos a diseñar el producto perfecto para tu organización.
        </p>
      </section>
    </div>
  );
}
