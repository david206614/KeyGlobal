import { useState } from 'react';
import type { Product } from './types';
import { NavigationProvider } from './context/NavigationProvider';
import { useNavigation } from './hooks/useNavigation';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/layout/WhatsAppButton';
import { HomePage } from './components/home/HomePage';
import { CatalogPage } from './components/catalog/CatalogPage';
import { NosotrosPage } from './components/pages/NosotrosPage';
import { ProductModal } from './components/ui/ProductModal';
import { categories } from './data/categories';

function AppContent() {
  const { view, navigate } = useNavigation();
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

  const handleOpenProduct = (product: Product) => {
    setModalProduct(product);
  };

  const handleCloseModal = () => {
    setModalProduct(null);
  };

  return (
    <div className="min-h-svh flex flex-col bg-[#FAFAFA]">
      <Header currentView={view} onNavigate={navigate} />

      <main className="flex-1">
        {view === 'home' ? (
          <HomePage onNavigate={navigate} onOpenProduct={handleOpenProduct} />
        ) : view === 'nosotros' ? (
          <NosotrosPage />
        ) : (
          <CatalogPage categories={categories} onOpenProduct={handleOpenProduct} />
        )}
      </main>

      <Footer />
      <WhatsAppButton />

      {modalProduct && (
        <ProductModal product={modalProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
}

function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}

export default App;
