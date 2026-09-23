import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { SOURCING_PROCESS_STEPS, IMAGES } from '../data/content';
import { ArrowRight, Search, ShieldCheck, Microscope, PackageCheck, FileText, CheckCircle2 } from 'lucide-react';

export const SourcingPage: React.FC = () => {
  const { navigate } = useNavigation();

  const stepIcons = [
    <Search key="1" className="w-5 h-5 text-[#B8976C]" />,
    <ShieldCheck key="2" className="w-5 h-5 text-[#B8976C]" />,
    <Microscope key="3" className="w-5 h-5 text-[#B8976C]" />,
    <PackageCheck key="4" className="w-5 h-5 text-[#B8976C]" />,
    <FileText key="5" className="w-5 h-5 text-[#B8976C]" />,
    <CheckCircle2 key="6" className="w-5 h-5 text-[#B8976C]" />,
  ];

  return (
    <div className="bg-[#FAF8F5] text-[#1E2229] pt-24 sm:pt-28">
      {/* Header Banner */}
      <section className="bg-[#FAF8F5] border-b border-[#E7E5E0] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Sourcing Philosophy' }]} />
          <div className="max-w-3xl mt-6">
            <div className="text-xs uppercase tracking-[0.25em] text-[#8A6D44] font-semibold mb-3">
              Quality Assurance at Origin
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0B192C] font-normal leading-[1.12]">
              Quality starts before the shipment.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#5C6472] leading-relaxed">
              Every category we export follows the same discipline, regardless of what’s inside
              the container.
            </p>
          </div>
        </div>
      </section>

      {/* Core Philosophy Statement */}
      <section className="py-16 sm:py-20 bg-[#FAF8F5] border-b border-[#E7E5E0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-base sm:text-lg text-[#3E4552] leading-relaxed">
            <p className="text-xl sm:text-2xl font-serif text-[#0B192C] font-normal leading-snug border-l-2 border-[#B8976C] pl-6 py-1">
              Every category we export follows the same discipline, regardless of what’s inside the
              container.
            </p>
            <p>
              We identify and vet suppliers directly — no unverified intermediaries between us and
              the producer.
            </p>
            <p>
              We inspect, grade, and where relevant, test product ourselves before it’s offered to a
              buyer, so what’s written on a spec sheet is what actually ships.
            </p>
            <p>
              We handle documentation and export compliance as our job, not the buyer’s problem to
              untangle after the fact.
            </p>
            <p>
              And we stay involved after the container leaves — because a shipment that arrives
              correctly is the only kind worth making twice.
            </p>

            <div className="pt-6 border-t border-[#E7E5E0] space-y-4">
              <p className="text-[#0B192C] font-serif text-xl sm:text-2xl italic">
                This is slower than simply reselling whatever’s available.
              </p>
              <p className="text-base text-[#5C6472]">
                It is also the only way a young export house earns the right to be trusted with a
                buyer’s next order, and the one after that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Sourcing Process: Discover → Verify → Assess → Prepare → Export → Follow Through */}
      <section className="py-20 sm:py-28 bg-[#F4F1EA] border-b border-[#E7E5E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="6-Stage Framework"
            title="The Sourcing Pipeline"
            subtitle="How we manage risk, enforce grading specifications, and preserve traceability from farmgate to freight container."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SOURCING_PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.name}
                className="bg-white p-8 border border-[#E7E5E0] flex flex-col justify-between hover:border-[#0B192C] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#E7E5E0] mb-6">
                    <div className="font-serif text-2xl text-[#8A6D44] font-medium">
                      0{idx + 1}
                    </div>
                    <div>{stepIcons[idx]}</div>
                  </div>

                  <div className="text-xs uppercase tracking-[0.2em] font-medium text-[#8A6D44] mb-1">
                    {step.tagline}
                  </div>
                  <h3 className="font-serif text-2xl text-[#0B192C] font-normal mb-3">
                    {step.name}
                  </h3>
                  <p className="text-sm text-[#5C6472] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E7E5E0] text-[11px] text-[#8A94A6] uppercase tracking-wider">
                  Stage 0{idx + 1} of 06
                </div>
              </div>
            ))}
          </div>

          {/* Sourcing Summary Banner */}
          <div className="mt-16 bg-[#0B192C] text-[#FAF8F5] p-8 sm:p-12 border border-[#0B192C]">
            <div className="max-w-3xl">
              <div className="text-xs uppercase tracking-[0.25em] text-[#B8976C] font-semibold mb-3">
                Accountability Summary
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal leading-snug">
                One standard of quality control, regardless of category.
              </h3>
              <p className="mt-4 text-sm sm:text-base text-[#D5D2CA] leading-relaxed">
                Whether assessing botanical lots, agricultural commodities, or specialty harvests,
                the methodology remains unbroken: independent origin grading, export packaging
                integrity, and comprehensive shipment documentation.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  variant="gold"
                  size="md"
                  onClick={() => navigate('/sample')}
                >
                  Request a Sample
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => navigate('/shipping')}
                  className="text-[#FAF8F5] border-white/30 hover:bg-white hover:text-[#0B192C]"
                >
                  See How We Ship
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
