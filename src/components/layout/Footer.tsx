export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Contact */}
        <div>
          <h3 className="font-display text-white text-lg mb-3">Contacto</h3>
          <p className="text-sm">Merchandising y productos personalizados</p>
        </div>

        {/* Social placeholders */}
        <div>
          <h3 className="font-display text-white text-lg mb-3">Seguinos</h3>
          <div className="flex gap-4">
            <span className="text-sm text-gray-500">Instagram</span>
            <span className="text-sm text-gray-500">Facebook</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="md:text-right">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} KeyGlobal. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
