import type { Category } from '../../types';
import { products } from '../../data/products';

interface CategoryCardsProps {
  categories: Category[];
  onSelectCategory: (categoryId: string) => void;
}

const categoryIcons: Record<string, string> = {
  indumentaria: '👕',
  medallas: '🏅',
  institucional: '🎁',
};

const categoryDescriptions: Record<string, string> = {
  indumentaria: 'Camisetas, polos, gorras y más con tu logo.',
  medallas: 'Reconocimientos, medallas y placas personalizadas.',
  institucional: 'Tazas, bolsos, termos y artículos promocionales.',
};

export function CategoryCards({ categories, onSelectCategory }: CategoryCardsProps) {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="font-display text-2xl md:text-3xl font-light text-gray-900 text-center mb-8">
        Nuestras Categorías
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {categories.map((cat) => {
          const count = products.filter((p) => p.category === cat.id).length;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 hover:border-brand/30 transition-colors cursor-pointer flex flex-col items-center gap-3"
            >
              <span className="text-4xl" role="img" aria-hidden="true">
                {categoryIcons[cat.id] || '📦'}
              </span>
              <div>
                <h3 className="font-medium text-gray-900 text-lg">{cat.name}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {categoryDescriptions[cat.id] || ''}
                </p>
                <p className="text-xs text-brand font-medium mt-2">
                  {count} producto{count !== 1 ? 's' : ''}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
