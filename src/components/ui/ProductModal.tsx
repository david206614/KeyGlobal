import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { Product } from '../../types';
import { getWhatsAppLink } from '../../lib/whatsapp';
import { svgPlaceholder } from '../../lib/placeholders';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState(0);

  const waLink = getWhatsAppLink(product.category, product.title);

  // Scroll lock
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  // Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // Track active image on scroll
  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const onScroll = () => {
      const scrollLeft = gallery.scrollLeft;
      const width = gallery.offsetWidth;
      const index = Math.round(scrollLeft / width);
      setActiveImage(index);
    };

    gallery.addEventListener('scroll', onScroll, { passive: true });
    return () => gallery.removeEventListener('scroll', onScroll);
  }, []);

  const images = product.images.length > 0 ? product.images : [];

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={product.title}
    >
      {/* Content */}
      <div className="relative z-[51] bg-white rounded-t-2xl sm:rounded-2xl w-full sm:max-w-2xl max-h-[90svh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-[52] w-11 h-11 rounded-full bg-white/90 shadow flex items-center justify-center cursor-pointer"
          aria-label="Cerrar"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 5L15 15M15 5L5 15" stroke="#374151" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Gallery */}
        {images.length > 0 ? (
          <>
            <div
              ref={galleryRef}
              className="flex overflow-x-auto snap-x snap-mandatory gap-0"
              style={{ scrollbarWidth: 'none' }}
            >
              {images.map((img, i) => (
                <div key={i} className="snap-center shrink-0 w-full aspect-square bg-[#E8D5D9] overflow-hidden relative">
                  <img
                    src={img}
                    alt={`${product.title} — imagen ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading={i === 0 ? 'eager' : 'lazy'}
                    onError={(e) => {
                      // Show placeholder on error
                      (e.target as HTMLImageElement).src = svgPlaceholder(600, 600, '#E8D5D9');
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Dot indicators */}
            {images.length > 1 && (
              <div className="flex justify-center gap-2 py-3">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      galleryRef.current?.scrollTo({ left: i * galleryRef.current.offsetWidth, behavior: 'smooth' });
                    }}
                    className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                      i === activeImage ? 'bg-brand' : 'bg-gray-300'
                    }`}
                    aria-label={`Ver imagen ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          /* No images fallback */
          <div className="aspect-square bg-[#E8D5D9] flex items-center justify-center">
            <img
              src={svgPlaceholder(600, 600, '#E8D5D9')}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Details */}
        <div className="p-5 sm:p-6">
          <span className="text-xs text-brand font-medium bg-brand-subtle px-2.5 py-1 rounded-full capitalize">
            {product.category}
          </span>
          <h2 className="font-display text-xl sm:text-2xl font-light text-gray-900 mt-3">
            {product.title}
          </h2>

          {product.description && (
            <p className="text-gray-600 mt-3 text-sm leading-relaxed">{product.description}</p>
          )}

          <div className="mt-4 space-y-2 text-sm">
            {product.materials && (
              <p className="text-gray-700">
                <span className="font-medium">Materiales:</span> {product.materials}
              </p>
            )}
            {product.techniques && (
              <p className="text-gray-700">
                <span className="font-medium">Técnicas:</span> {product.techniques}
              </p>
            )}
          </div>

          {/* WhatsApp CTA */}
          <a
            href={waLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-full block text-center bg-whatsapp text-white font-medium py-3 rounded-xl hover:bg-whatsapp/90 transition-colors text-sm"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
}
