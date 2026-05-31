import type { Product } from '../../types';
import { getWhatsAppLink } from '../../lib/whatsapp';
import { ImageWithPlaceholder } from '../ui/ImageWithPlaceholder';
import { assetUrl } from '../../lib/assets';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const waLink = getWhatsAppLink(product.category, product.title);

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100">
      {/* Image */}
      <button
        onClick={() => onClick(product)}
        className="w-full aspect-square bg-[#E8D5D9] overflow-hidden cursor-pointer block relative"
      >
        {product.images.length > 0 ? (
          <ImageWithPlaceholder
            src={assetUrl(product.images[0])}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-[#E8D5D9]" />
        )}
      </button>

      {/* Info */}
      <div className="p-3">
        <button
          onClick={() => onClick(product)}
          className="w-full text-left"
        >
          <p className="font-medium text-gray-900 truncate">{product.title}</p>
          <span className="text-xs text-brand font-medium bg-brand-subtle px-2 py-0.5 rounded-full mt-1 inline-block capitalize">
            {product.category}
          </span>
        </button>

        {/* WhatsApp CTA - href already contains the WhatsApp link with category message */}
        <a
          href={waLink.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 w-full block text-center bg-whatsapp/10 text-whatsapp font-medium py-2.5 rounded-lg text-sm"
        >
          Cotizar por WhatsApp
        </a>
      </div>
    </div>
  );
}
