import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { RoutePath } from '../types';

export const Footer: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <footer className="bg-[#07101C] text-[#FAF8F5] border-t border-[#1E2738]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-14 border-b border-[#1E2738]">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <button
              onClick={() => navigate('/')}
              className="text-left group cursor-pointer focus-visible:outline-2 focus-visible:outline-[#B8976C]"
              aria-label="E4 Exports footer home link"
            >
              <span className="font-serif text-2xl font-bold tracking-[0.16em] uppercase text-[#FAF8F5] block">
                E4 EXPORTS
              </span>
              <span className="text-xs tracking-[0.25em] uppercase text-[#B8976C] font-medium mt-1 block">
                Source. Export. Grow.
              </span>
            </button>
            <p className="text-sm text-[#A0A8B8] leading-relaxed max-w-sm pt-2">
              A merchant export house connecting verified Indian suppliers with buyers worldwide.
            </p>
            <div className="pt-2 text-xs text-[#8A94A6] space-y-1">
              <p>Sourcing and quality operations: India</p>
              <p>Buyer relationships and international operations: United Kingdom</p>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Company */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[#B8976C] mb-4">
                Company
              </h3>
              <ul className="space-y-2.5 text-sm text-[#C4CAD4]">
                <li>
                  <button
                    onClick={() => navigate('/about')}
                    className="hover:text-[#FAF8F5] transition-colors cursor-pointer text-left focus-visible:outline-1 focus-visible:outline-[#B8976C]"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/sourcing')}
                    className="hover:text-[#FAF8F5] transition-colors cursor-pointer text-left focus-visible:outline-1 focus-visible:outline-[#B8976C]"
                  >
                    Sourcing Philosophy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/insights')}
                    className="hover:text-[#FAF8F5] transition-colors cursor-pointer text-left focus-visible:outline-1 focus-visible:outline-[#B8976C]"
                  >
                    Expert Insights
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/shipping')}
                    className="hover:text-[#FAF8F5] transition-colors cursor-pointer text-left focus-visible:outline-1 focus-visible:outline-[#B8976C]"
                  >
                    How We Ship
                  </button>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[#B8976C] mb-4">
                Products
              </h3>
              <ul className="space-y-2.5 text-sm text-[#C4CAD4]">
                <li>
                  <button
                    onClick={() => navigate('/products')}
                    className="hover:text-[#FAF8F5] transition-colors cursor-pointer text-left focus-visible:outline-1 focus-visible:outline-[#B8976C]"
                  >
                    Products
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/specialty-coffee')}
                    className="hover:text-[#FAF8F5] transition-colors cursor-pointer text-left focus-visible:outline-1 focus-visible:outline-[#B8976C]"
                  >
                    Specialty Coffee
                  </button>
                </li>
              </ul>
            </div>

            {/* Enquiries */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[#B8976C] mb-4">
                Enquiries
              </h3>
              <ul className="space-y-2.5 text-sm text-[#C4CAD4]">
                <li>
                  <button
                    onClick={() => navigate('/sample')}
                    className="hover:text-[#FAF8F5] transition-colors cursor-pointer text-left focus-visible:outline-1 focus-visible:outline-[#B8976C]"
                  >
                    Request a Sample
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/quote')}
                    className="hover:text-[#FAF8F5] transition-colors cursor-pointer text-left focus-visible:outline-1 focus-visible:outline-[#B8976C]"
                  >
                    Get a Quote
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate('/contact')}
                    className="hover:text-[#FAF8F5] transition-colors cursor-pointer text-left focus-visible:outline-1 focus-visible:outline-[#B8976C]"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Clean, transparent, no fake credentials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#707B8E]">
          <p>© {new Date().getFullYear()} E4 Exports. All rights reserved.</p>
          <p className="tracking-wide">
            E4 Exports is a merchant export house. Not a manufacturer, grower, or marketplace.
          </p>
        </div>
      </div>
    </footer>
  );
};
