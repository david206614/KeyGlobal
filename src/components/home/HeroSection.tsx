interface HeroSectionProps {
  onCTAClick: () => void;
}

export function HeroSection({ onCTAClick }: HeroSectionProps) {
  return (
    <section className="relative bg-brand text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
          <circle cx="100" cy="100" r="80" fill="white" />
          <circle cx="700" cy="300" r="120" fill="white" />
          <circle cx="400" cy="50" r="60" fill="white" />
          <circle cx="550" cy="350" r="90" fill="white" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24 flex flex-col items-center justify-center text-center min-h-[50vh] md:min-h-[60vh]">
        <h1 className="font-display text-3xl md:text-5xl font-light mb-4 leading-tight">
          Merchandising y Productos<br className="hidden sm:block" /> Personalizados
        </h1>
        <p className="text-white/80 text-base md:text-lg max-w-xl mb-8">
          Indumentaria, medallas y artículos institucionales diseñados para tu marca.
        </p>
        <button
          onClick={onCTAClick}
          className="bg-white text-brand px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors min-h-[44px] shadow-lg"
        >
          Ver Catálogo
        </button>
      </div>
    </section>
  );
}
