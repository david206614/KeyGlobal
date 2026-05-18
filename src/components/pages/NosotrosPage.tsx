import { Building2, Eye, Target, Sparkles, Clock, Lightbulb } from 'lucide-react';

export function NosotrosPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      {/* Title */}
      <div className="text-center">
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-gray-900">
          Nosotros
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Conoce más sobre nuestra historia, visión y valores
        </p>
      </div>

      {/* Nuestra Historia */}
      <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-brand-subtle rounded-xl flex items-center justify-center">
            <Building2 className="w-6 h-6 text-brand" />
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-light text-gray-900 mb-4">
              Nuestra Historia
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Con varios años de experiencia y trayectoria en el mercado, en KEY GLOBAL nos hemos consolidado como una organización que impulsa la imagen de nuestros clientes mediante productos de alta calidad, servicio cercano y respaldo permanente. Nuestro equipo humano trabaja con compromiso, cuidando cada detalle para generar valor, fortalecer relaciones de confianza y aportar al crecimiento de nuestros clientes, aliados y grupos de interés.
            </p>
          </div>
        </div>
      </section>

      {/* Visión */}
      <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-subtle rounded-full mb-6">
            <Eye className="w-8 h-8 text-[#C1304D]" />
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-light text-gray-900 mb-4">
            Visión
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-3xl mx-auto">
            Ser reconocidos a nivel nacional e internacional como aliados estratégicos de nuestros clientes, ofreciendo productos que aporten valor real a sus marcas. En KEY GLOBAL nos inspira potenciar la imagen de cada cliente mediante procesos cuidadosos, atención a los detalles y un servicio cercano, personalizado y accesible, que contribuya al crecimiento y posicionamiento de sus negocios.
          </p>
        </div>
      </section>

      {/* Misión - 4 Pilares */}
      <section>
        <h2 className="font-display text-2xl md:text-3xl font-light text-gray-900 text-center mb-8">
          Misión
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Calidad */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center">
            <div className="w-14 h-14 bg-brand-subtle rounded-full flex items-center justify-center mb-4">
              <Target className="w-7 h-7 text-brand" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Calidad</h3>
            <p className="text-gray-600 text-sm">
              Materiales premium y acabado perfecto en cada producto.
            </p>
          </div>

          {/* Personalización */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center">
            <div className="w-14 h-14 bg-brand-subtle rounded-full flex items-center justify-center mb-4">
              <Sparkles className="w-7 h-7 text-brand" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Personalización</h3>
            <p className="text-gray-600 text-sm">
              Diseños únicos que reflejan la identidad de cada cliente.
            </p>
          </div>

          {/* Entrega puntual */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center">
            <div className="w-14 h-14 bg-brand-subtle rounded-full flex items-center justify-center mb-4">
              <Clock className="w-7 h-7 text-brand" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Entrega puntual</h3>
            <p className="text-gray-600 text-sm">
              Compromiso con los tiempos acordados, sin excepciones.
            </p>
          </div>

          {/* Innovación */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center">
            <div className="w-14 h-14 bg-brand-subtle rounded-full flex items-center justify-center mb-4">
              <Lightbulb className="w-7 h-7 text-brand" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Innovación</h3>
            <p className="text-gray-600 text-sm">
              Siempre buscando nuevas técnicas y materiales.
            </p>
          </div>
        </div>
      </section>

      {/* Nuestros Valores */}
      <section>
        <h2 className="font-display text-2xl md:text-3xl font-light text-gray-900 text-center mb-8">
          Nuestros Valores
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Compromiso */}
          <div className="border-l-4 border-[#C1304D] bg-gray-50/50 p-6 rounded-r-xl">
            <h3 className="font-display text-xl text-gray-900 mb-3">Compromiso</h3>
            <p className="text-gray-600">
              Con cada cliente, cada proyecto, cada plazo.
            </p>
          </div>

          {/* Creatividad */}
          <div className="border-l-4 border-[#C1304D] bg-gray-50/50 p-6 rounded-r-xl">
            <h3 className="font-display text-xl text-gray-900 mb-3">Creatividad</h3>
            <p className="text-gray-600">
              Soluciones innovadoras que destacan del común.
            </p>
          </div>

          {/* Transparencia */}
          <div className="border-l-4 border-[#C1304D] bg-gray-50/50 p-6 rounded-r-xl">
            <h3 className="font-display text-xl text-gray-900 mb-3">Transparencia</h3>
            <p className="text-gray-600">
              Comunicación clara y procesos honestos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}