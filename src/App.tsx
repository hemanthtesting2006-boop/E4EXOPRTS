import React from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { SpecialtyCoffeePage } from './pages/SpecialtyCoffeePage';
import { SourcingPage } from './pages/SourcingPage';
import { InsightsPage } from './pages/InsightsPage';
import { ShippingPage } from './pages/ShippingPage';
import { RequestPage } from './pages/RequestPage';
import { ContactPage } from './pages/ContactPage';

const AppContent: React.FC = () => {
  const { currentRoute } = useNavigation();

  const renderPage = () => {
    switch (currentRoute) {
      case '/':
        return <HomePage />;
      case '/about':
        return <AboutPage />;
      case '/products':
        return <ProductsPage />;
      case '/specialty-coffee':
        return <SpecialtyCoffeePage />;
      case '/sourcing':
        return <SourcingPage />;
      case '/insights':
        return <InsightsPage />;
      case '/shipping':
        return <ShippingPage />;
      case '/sample':
      case '/quote':
        return <RequestPage />;
      case '/contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1E2229] font-sans selection:bg-[#B8976C]/20 selection:text-[#0B192C]">
      <Navbar />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}
