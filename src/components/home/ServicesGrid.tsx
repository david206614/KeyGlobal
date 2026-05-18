import { useNavigation } from '../../hooks/useNavigation';
import { categories } from '../../data/categories';

export function ServicesGrid() {
  const { navigate } = useNavigation();

  const handleServiceClick = (slug: string) => {
    sessionStorage.setItem('selectedCategory', slug);
    navigate('catalog');
  };

  return (
    <section className="py-8">
      <h2 className="font-display text-2xl md:text-3xl font-light text-gray-900 text-center mb-8">
        Nuestros Servicios
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((service) => (
          <button
            key={service.id}
            onClick={() => handleServiceClick(service.slug)}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-md transition-shadow flex flex-col items-center gap-3"
          >
            <span className="text-4xl">{service.icon}</span>
            <h3 className="font-semibold text-brand text-lg">
              {service.name}
            </h3>
          </button>
        ))}
      </div>
    </section>
  );
}