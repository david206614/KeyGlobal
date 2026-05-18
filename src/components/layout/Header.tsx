import { useState } from 'react';
import type { View } from '../../types';

interface HeaderProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

export function Header({ currentView, onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (view: View) => {
    onNavigate(view);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-3 sm:py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center"
        >
          <img
            src="/images/Logo%20key%20global.png"
            alt="KeyGlobal"
            className="h-11 sm:h-12 md:h-16 lg:h-20 w-auto object-contain transition-all duration-300"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />
        </button>

        {/* Desktop nav */}
        <nav className="hidden sm:flex gap-6">
          <button
            onClick={() => handleNav('home')}
            className={`text-sm font-medium transition-colors ${
              currentView === 'home'
                ? 'text-brand border-b-2 border-brand'
                : 'text-gray-600 hover:text-brand'
            }`}
          >
            Inicio
          </button>
          <button
            onClick={() => handleNav('catalog')}
            className={`text-sm font-medium transition-colors ${
              currentView === 'catalog'
                ? 'text-brand border-b-2 border-brand'
                : 'text-gray-600 hover:text-brand'
            }`}
          >
            Catálogo
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col justify-center items-center gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-transform ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-opacity ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-transform ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="sm:hidden border-t border-gray-100 bg-white px-4 py-3 flex flex-col gap-2">
          <button
            onClick={() => handleNav('home')}
            className={`text-left text-sm font-medium py-2 transition-colors ${
              currentView === 'home' ? 'text-brand' : 'text-gray-600 hover:text-brand'
            }`}
          >
            Inicio
          </button>
          <button
            onClick={() => handleNav('catalog')}
            className={`text-left text-sm font-medium py-2 transition-colors ${
              currentView === 'catalog' ? 'text-brand' : 'text-gray-600 hover:text-brand'
            }`}
          >
            Catálogo
          </button>
        </nav>
      )}
    </header>
  );
}
