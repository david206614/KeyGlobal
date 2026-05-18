import type { Category } from '../../types';

interface FilterCarouselProps {
  categories: Category[];
  activeFilter: string | null;
  onFilterChange: (categoryId: string | null) => void;
}

export function FilterCarousel({ categories, activeFilter, onFilterChange }: FilterCarouselProps) {
  return (
    <div
      className="flex overflow-x-auto snap-x snap-mandatory gap-2 px-4 py-3 -mx-4"
      style={{ scrollbarWidth: 'none' }}
    >
      {/* "Todos" button */}
      <button
        onClick={() => onFilterChange(null)}
        className={`snap-start shrink-0 px-5 py-2.5 rounded-full border text-sm font-medium transition-colors ${
          activeFilter === null
            ? 'bg-brand text-white border-brand'
            : 'bg-white text-gray-700 border-gray-200 hover:border-brand/50'
        }`}
      >
        Todos
      </button>

      {/* Category buttons */}
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onFilterChange(cat.id)}
          className={`snap-start shrink-0 px-5 py-2.5 rounded-full border text-sm font-medium transition-colors ${
            activeFilter === cat.id
              ? 'bg-brand text-white border-brand'
              : 'bg-white text-gray-700 border-gray-200 hover:border-brand/50'
          }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}
