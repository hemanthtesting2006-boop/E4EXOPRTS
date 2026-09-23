import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Button } from '../components/Button';
import { PRODUCT_CATEGORIES } from '../data/content';
import { ArrowRight, AlertCircle, Sparkles } from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="bg-[#FAF8F5] text-[#1E2229] pt-24 sm:pt-28">
      {/* Header Banner */}
      <section className="bg-[#FAF8F5] border-b border-[#E7E5E0] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Products' }]} />
          <div className="max-w-3xl mt-6">
            <div className="text-xs uppercase tracking-[0.25em] text-[#8A6D44] font-semibold mb-3">
              Export Portfolio
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0B192C] font-normal leading-[1.12]">
              Products built around verified sourcing.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#5C6472] leading-relaxed">
              E4 Exports sources and exports verified, export-ready products across India’s
              agricultural and specialty categories.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {PRODUCT_CATEGORIES.map((category) => {
              const isLive = category.status === 'Live';

              return (
                <div
                  key={category.id}
                  className={`border transition-all duration-300 flex flex-col justify-between ${
                    isLive
                      ? 'border-[#0B192C] bg-white shadow-sm ring-1 ring-[#0B192C]/10'
                      : 'border-[#E7E5E0] bg-[#FAF8F5]'
                  }`}
                >
                  <div>
                    {/* Visual Banner */}
                    <div className="relative aspect-[16/9] overflow-hidden bg-[#E7E5E0] border-b border-[#E7E5E0]">
                      <img
                        src={category.image}
                        alt={category.imageAlt}
                        className={`w-full h-full object-cover ${
                          isLive ? 'contrast-[1.05]' : 'grayscale-[40%] opacity-85'
                        }`}
                        loading="lazy"
                      />
                      <div className="absolute top-4 right-4 text-xs uppercase tracking-widest font-semibold px-2.5 py-1 bg-[#07101C]/90 text-[#FAF8F5]">
                        {category.status}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 sm:p-10">
                      <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8A6D44] mb-2">
                        {isLive ? 'Active Export Program' : 'Pipeline Category'}
                      </div>
                      <h2 className="font-serif text-2xl sm:text-3xl text-[#0B192C] font-medium mb-4">
                        {category.name}
                      </h2>
                      <p className="text-base text-[#5C6472] leading-relaxed">
                        {category.description}
                      </p>

                      {!isLive && (
                        <p className="mt-4 text-xs text-[#707886] italic">
                          Supplier verification and quality protocol development currently underway.
                          Buyer enquiries for prospective supply welcome.
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-8 sm:p-10 pt-0">
                    {isLive && category.route ? (
                      <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-[#E7E5E0]">
                        <Button
                          variant="primary"
                          size="md"
                          onClick={() => navigate(category.route!)}
                          iconRight={<ArrowRight className="w-4 h-4" />}
                          className="flex-1"
                        >
                          Explore Coffee
                        </Button>
                        <Button
                          variant="secondary"
                          size="md"
                          onClick={() => navigate('/sample', { product: 'specialty-coffee' })}
                          className="flex-1"
                        >
                          Request a Sample
                        </Button>
                      </div>
                    ) : (
                      <div className="pt-6 border-t border-[#E7E5E0] flex items-center justify-between text-xs text-[#707886]">
                        <span className="uppercase tracking-wider font-medium">Status · {category.status}</span>
                        <button
                          onClick={() => navigate('/quote', { product: category.name })}
                          className="text-[#0B192C] hover:text-[#B8976C] font-medium underline underline-offset-4 cursor-pointer"
                        >
                          Submit Sourcing Interest →
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sourcing Discipline Notice */}
          <div className="mt-16 p-8 sm:p-10 bg-[#F4F1EA] border border-[#E7E5E0] max-w-4xl mx-auto">
            <h3 className="font-serif text-xl sm:text-2xl text-[#0B192C] mb-3">
              Why only select categories are live
            </h3>
            <p className="text-sm text-[#5C6472] leading-relaxed">
              We do not list speculative products. A category only opens for active export once our
              on-ground team has vetted producer hygiene, established independent grading
              benchmarks, and tested export packing for sea-transit resilience.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-[#E7E5E0]">
              <span className="text-xs text-[#707886]">
                Looking for a specific Indian commodity or specialty export?
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate('/quote')}
              >
                Inquire on Custom Sourcing
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
