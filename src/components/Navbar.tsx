import React, { useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { RoutePath } from '../types';
import { Button } from './Button';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavItem {
  label: string;
  path: RoutePath;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Sourcing Philosophy', path: '/sourcing' },
  { label: 'Expert Insights', path: '/insights' },
  { label: 'How We Ship', path: '/shipping' },
  { label: 'Request a Sample', path: '/sample' },
  { label: 'Contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const { currentRoute, navigate } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change or ESC
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentRoute]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (path: RoutePath) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#E7E5E0] py-3'
            : 'bg-[#FAF8F5] border-b border-[#E7E5E0]/70 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavigate('/')}
            className="group flex flex-col text-left focus-visible:outline-2 focus-visible:outline-[#0B192C] focus-visible:outline-offset-4 cursor-pointer"
            aria-label="E4 Exports - Return to homepage"
          >
            <span className="font-serif text-2xl sm:text-2xl font-bold tracking-[0.14em] text-[#0B192C] uppercase leading-none">
              E4 EXPORTS
            </span>
            <span className="text-[10px] tracking-[0.24em] uppercase text-[#7D6B53] font-medium mt-1">
              Merchant Export House
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-7" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = currentRoute === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavigate(item.path)}
                  className={`text-[13px] tracking-[0.04em] font-medium transition-colors duration-150 relative py-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0B192C] ${
                    isActive
                      ? 'text-[#0B192C] font-semibold'
                      : 'text-[#4A5260] hover:text-[#0B192C]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#B8976C]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Primary Action & Mobile Menu Trigger */}
          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              size={isScrolled ? 'sm' : 'md'}
              onClick={() => handleNavigate('/quote')}
              className="hidden sm:inline-flex"
            >
              Request a Quote
            </Button>

            {/* Mobile / Tablet Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              className="xl:hidden p-2 text-[#0B192C] hover:bg-[#E7E5E0]/60 rounded-xs focus-visible:outline-2 focus-visible:outline-[#0B192C] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Navigation Drawer */}
      <div
        className={`fixed inset-0 z-50 xl:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-[#07101C]/60 backdrop-blur-xs transition-opacity"
        />

        {/* Drawer panel */}
        <div
          className={`fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#FAF8F5] shadow-2xl flex flex-col justify-between p-6 sm:p-8 transform transition-transform duration-300 ease-out border-l border-[#E7E5E0] ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#E7E5E0]">
              <div>
                <span className="font-serif text-xl font-bold tracking-[0.14em] text-[#0B192C] uppercase block">
                  E4 EXPORTS
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#7D6B53] font-medium">
                  Source. Export. Grow.
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#4A5260] hover:text-[#0B192C] hover:bg-[#E7E5E0]/60 rounded-xs focus-visible:outline-2 focus-visible:outline-[#0B192C] cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col space-y-4" aria-label="Mobile Navigation">
              {NAV_ITEMS.map((item) => {
                const isActive = currentRoute === item.path;
                return (
                  <button
                    key={item.path}
                    onClick={() => handleNavigate(item.path)}
                    className={`flex items-center justify-between py-2 text-base text-left tracking-wide font-medium border-b border-[#E7E5E0]/50 transition-colors ${
                      isActive
                        ? 'text-[#0B192C] font-semibold'
                        : 'text-[#5C6472] hover:text-[#0B192C]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#B8976C]" />}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="pt-8 border-t border-[#E7E5E0] space-y-3">
            <Button
              variant="primary"
              size="lg"
              fullWidth
              onClick={() => handleNavigate('/quote')}
              iconRight={<ArrowRight className="w-4 h-4" />}
            >
              Request a Quote
            </Button>
            <Button
              variant="secondary"
              size="md"
              fullWidth
              onClick={() => handleNavigate('/sample')}
            >
              Request a Sample
            </Button>
            <p className="text-[11px] text-center text-[#707886] tracking-wide pt-2">
              India operations · UK operations
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
