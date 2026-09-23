import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { LOGISTICS_JOURNEY_STEPS, IMAGES } from '../data/content';
import { ArrowRight, Container, Ship, FileCheck, Compass, Info } from 'lucide-react';

export const ShippingPage: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="bg-[#FAF8F5] text-[#1E2229] pt-24 sm:pt-28">
      {/* Header Banner */}
      <section className="bg-[#FAF8F5] border-b border-[#E7E5E0] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'How We Ship' }]} />
          <div className="max-w-3xl mt-6">
            <div className="text-xs uppercase tracking-[0.25em] text-[#8A6D44] font-semibold mb-3">
              Export Logistics &amp; Freight
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0B192C] font-normal leading-[1.12]">
              From origin to destination, handled.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#5C6472] leading-relaxed">
              Export documentation, cargo protection, and container freight managed directly from
              Indian departure ports to international buyer terminals.
            </p>
          </div>
        </div>
      </section>

      {/* Main Copy & Terms Section */}
      <section className="py-16 sm:py-20 bg-[#FAF8F5] border-b border-[#E7E5E0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-base sm:text-lg text-[#3E4552] leading-relaxed">
            <p className="text-xl sm:text-2xl font-serif text-[#0B192C] font-normal leading-snug border-l-2 border-[#B8976C] pl-6 py-1">
              E4 Exports ships in full container loads (FCL) as standard, with smaller LCL volumes
              available on request.
            </p>
            <p>
              Shipping terms — FOB, CIF, and other Incoterms — are confirmed per order and per
              destination; we work with buyers across regions, not a single market.
            </p>
            <p>
              Lead times depend on origin readiness and destination port, and are confirmed at the
              time of quotation.
            </p>
          </div>

          {/* Freight Pillars */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#E7E5E0]">
            <div className="p-6 bg-white border border-[#E7E5E0]">
              <Container className="w-5 h-5 text-[#8A6D44] mb-3" />
              <h3 className="font-serif text-lg text-[#0B192C] font-medium mb-1">
                FCL &amp; LCL Modes
              </h3>
              <p className="text-xs text-[#5C6472] leading-relaxed">
                Full 20ft/40ft container loads standard. Consolidated LCL arrangements structured
                upon buyer request.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E7E5E0]">
              <Compass className="w-5 h-5 text-[#8A6D44] mb-3" />
              <h3 className="font-serif text-lg text-[#0B192C] font-medium mb-1">
                Flexible Incoterms
              </h3>
              <p className="text-xs text-[#5C6472] leading-relaxed">
                FOB Indian Port, CIF Destination, CFR, or bespoke trade terms confirmed
                transparently per contract.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#E7E5E0]">
              <FileCheck className="w-5 h-5 text-[#8A6D44] mb-3" />
              <h3 className="font-serif text-lg text-[#0B192C] font-medium mb-1">
                Full Export File
              </h3>
              <p className="text-xs text-[#5C6472] leading-relaxed">
                Phytosanitary certificates, certificates of origin, bills of lading, and packing
                slips provided before arrival.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Logistics Journey */}
      <section className="py-20 sm:py-28 bg-[#F4F1EA] border-b border-[#E7E5E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading
              kicker="The Transit Chain"
              title="Visual Logistics Journey"
              subtitle="Every shipment follows a verified chain of custody from regional supplier facility to international port of discharge."
            />
            <div className="text-xs text-[#707886] max-w-xs">
              Accountability maintained across origin inland dispatch and ocean freight stages.
            </div>
          </div>

          {/* Stepper Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {LOGISTICS_JOURNEY_STEPS.map((item, idx) => (
              <div
                key={item.step}
                className="bg-white p-5 border border-[#E7E5E0] relative flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-serif text-[#8A6D44] font-semibold mb-2">
                    {item.step}
                  </div>
                  <h4 className="font-serif text-base text-[#0B192C] font-medium mb-2 leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#5C6472] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
                {idx < LOGISTICS_JOURNEY_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-[#8A6D44]">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Visual Port Banner */}
          <div className="mt-12 border border-[#E7E5E0] bg-white">
            <div className="relative aspect-[21/9] sm:aspect-[3/1] overflow-hidden">
              <img
                src={IMAGES.shippingPort}
                alt="International ocean freight container port and maritime export logistics"
                className="w-full h-full object-cover filter contrast-[1.05]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07101C]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 text-xs text-[#FAF8F5]">
                Gateway loading ports: Mumbai (Nhava Sheva), Chennai, Visakhapatnam, Cochin
              </div>
            </div>
          </div>

          {/* Mandatory Disclaimers as required by Section 18 */}
          <div className="mt-12 p-6 bg-white border border-[#E7E5E0] max-w-4xl space-y-3">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[#8A6D44] shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs text-[#5C6472] leading-relaxed">
                <p className="font-semibold text-[#0B192C]">
                  Indicative Trade Terms &amp; Lead Time Policy
                </p>
                <p>
                  Shipping timelines and freight rates are governed by origin readiness, cargo
                  consolidation requirements, ocean carrier space, and prevailing maritime trade
                  routes. Exact transit lead times and specific Incoterms (FOB, CIF, CFR, DAP) are
                  quoted per enquiry and locked upon contract issuance.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Footer */}
          <div className="mt-14 text-center">
            <h3 className="font-serif text-2xl text-[#0B192C] mb-4">
              Ready to calculate freight and specifications?
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                variant="primary"
                size="md"
                onClick={() => navigate('/quote')}
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                Get a Quote
              </Button>
              <Button
                variant="secondary"
                size="md"
                onClick={() => navigate('/sample')}
              >
                Request a Sample
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
