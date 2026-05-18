import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { Product } from '../../types';
import { buildQuoteMessage } from '../../lib/whatsapp';
import { svgPlaceholder } from '../../lib/placeholders';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

type TabType = 'description' | 'specs';

export function ProductModal({ product, onClose }: ProductModalProps) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState<TabType>('description');
  
  // Quote form state
  const [quantity, setQuantity] = useState('');
  const [variants, setVariants] = useState('');
  const [specialRequirements, setSpecialRequirements] = useState('');

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

  // MOQ validation
  const qty = parseInt(quantity);
  const moq = product.moq || 0;
  const isQtyInvalid = quantity && qty < moq;
  const isFormValid = quantity && qty >= moq && qty > 0;

  const handleQuoteSubmit = () => {
    if (!isFormValid) return;
    const url = buildQuoteMessage(
      product.title,
      qty,
      variants,
      specialRequirements
    );
    window.open(url, '_blank');
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

          {/* Tabs */}
          <div className="flex border-b border-gray-200 mt-4">
            <button
              onClick={() => setActiveTab('description')}
              className={`py-2 px-4 text-sm font-medium transition-colors border-b-2 cursor-pointer ${
                activeTab === 'description'
                  ? 'border-brand text-brand'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Descripción
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`py-2 px-4 text-sm font-medium transition-colors border-b-2 cursor-pointer ${
                activeTab === 'specs'
                  ? 'border-brand text-brand'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Ficha Técnica
            </button>
          </div>

          {/* Tab Content */}
          <div className="mt-4">
            {activeTab === 'description' ? (
              <div>
                {product.description && (
                  <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                )}
                {!product.description && (
                  <p className="text-gray-400 text-sm">Sin descripción disponible.</p>
                )}
              </div>
            ) : (
              <div>
                {product.materials || product.dimensions || product.printArea ? (
                  <div className="space-y-3">
                    {product.materials && (
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Materiales</span>
                        <span className="text-sm text-gray-900 text-right">{product.materials}</span>
                      </div>
                    )}
                    {product.dimensions && (
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Dimensiones</span>
                        <span className="text-sm text-gray-900 text-right">{product.dimensions}</span>
                      </div>
                    )}
                    {product.printArea && (
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Área de Impresión</span>
                        <span className="text-sm text-gray-900 text-right">{product.printArea}</span>
                      </div>
                    )}
                    {product.moq && (
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Cantidad Mínima</span>
                        <span className="text-sm text-gray-900 font-medium">{product.moq} unidades</span>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-gray-400 text-sm">Información técnica no disponible.</p>
                )}
              </div>
            )}
          </div>

          {/* Quote Form */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">Solicitar Cotización</h3>
            
            <div className="space-y-4">
              {/* Quantity */}
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Cantidad {product.moq && <span className="text-gray-400">(Mín: {product.moq})</span>}
                </label>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 ${
                    isQtyInvalid
                      ? 'border-red-500 focus:ring-red-200'
                      : 'border-gray-300 focus:ring-brand/20'
                  }`}
                  placeholder={`Mínimo ${product.moq || 1}`}
                  min={product.moq || 1}
                />
                {isQtyInvalid && (
                  <p className="text-red-500 text-xs mt-1">
                    La cantidad mínima de pedido es {moq} unidades
                  </p>
                )}
              </div>

              {/* Variants */}
              <div>
                <label className="block text-sm text-gray-700 mb-1">Variantes (color/material)</label>
                <input
                  type="text"
                  value={variants}
                  onChange={(e) => setVariants(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand/20"
                  placeholder="Ej: Azul, metal dorado"
                />
              </div>

              {/* Special Requirements */}
              <div>
                <label className="block text-sm text-gray-700 mb-1">Detalles adicionales</label>
                <textarea
                  value={specialRequirements}
                  onChange={(e) => setSpecialRequirements(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 resize-none"
                  rows={2}
                  placeholder="Otros requerimientos especiales..."
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleQuoteSubmit}
                disabled={!isFormValid}
                className={`w-full py-3 rounded-xl font-medium text-sm transition-colors cursor-pointer ${
                  isFormValid
                    ? 'bg-whatsapp text-white hover:bg-whatsapp/90'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
              >
                Cotizar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}