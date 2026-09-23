import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { COFFEE_GRADES, COFFEE_INSIGHTS, IMAGES } from '../data/content';
import { ArrowRight, Mountain, ShieldCheck, Sun, Droplet, Coffee } from 'lucide-react';

export const SpecialtyCoffeePage: React.FC = () => {
  const { navigate } = useNavigation();
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);

  const handleSampleRequest = (gradeName?: string) => {
    navigate('/sample', {
      product: 'specialty-coffee',
      grade: gradeName || 'Araku Arabica',
      mode: 'sample',
    });
  };

  return (
    <div className="bg-[#FAF8F5] text-[#1E2229] pt-24 sm:pt-28">
      {/* 1. HERO SECTION */}
      <section className="relative py-16 sm:py-24 bg-[#0B192C] text-[#FAF8F5] overflow-hidden">
        {/* Editorial Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.coffeeHills}
            alt="Araku Valley elevation landscape in Eastern Ghats"
            className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.1]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07101C]/95 via-[#0B192C]/85 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Products', route: '/products' },
              { label: 'Specialty Coffee from Araku Valley' },
            ]}
            dark
          />

          <div className="max-w-3xl mt-8">
            <div className="text-xs uppercase tracking-[0.25em] text-[#B8976C] font-semibold mb-4">
              Geographical Indication · Eastern Ghats Origin
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FAF8F5] font-normal leading-[1.12]">
              Specialty Coffee from Araku Valley
            </h1>
            <p className="mt-6 text-xl sm:text-2xl text-[#D5D2CA] font-light">
              Grade-assessed Arabica from India’s Eastern Ghats.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                variant="gold"
                size="lg"
                onClick={() => handleSampleRequest()}
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                Request a Coffee Sample
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/quote', { product: 'specialty-coffee' })}
                className="text-[#FAF8F5] border-white/40 hover:bg-white hover:text-[#0B192C]"
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#E7E5E0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-base sm:text-lg text-[#3E4552] leading-relaxed">
            <p className="text-xl sm:text-2xl font-serif text-[#0B192C] font-normal leading-snug">
              Grown at altitudes above 3,000 feet in the Eastern Ghats, Araku Valley Arabica is
              cultivated by smallholder tribal farmers on small, shaded, biodiverse plots.
            </p>
            <p>
              The region’s cool climate and slow cherry ripening produce a bean known for gentle
              acidity, natural sweetness, and floral, fruit-forward aromatics — qualities that
              earned the region formal Geographical Indication recognition in 2019.
            </p>
            <p>
              E4 Exports offers this coffee across two processing methods — washed (Parchment) and
              natural (Cherry) — and six size and quality grades, each assessed and graded before
              export.
            </p>
          </div>

          {/* Quick origin stats */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#E7E5E0]">
            <div>
              <div className="text-xs uppercase tracking-wider text-[#8A6D44] font-medium mb-1">
                Altitude
              </div>
              <div className="font-serif text-2xl text-[#0B192C]">3,000+ ft</div>
              <div className="text-xs text-[#707886] mt-1">Eastern Ghats montane zone</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-[#8A6D44] font-medium mb-1">
                Processing
              </div>
              <div className="font-serif text-2xl text-[#0B192C]">Washed &amp; Natural</div>
              <div className="text-xs text-[#707886] mt-1">Parchment &amp; Cherry methods</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-[#8A6D44] font-medium mb-1">
                GI Status
              </div>
              <div className="font-serif text-2xl text-[#0B192C]">Awarded 2019</div>
              <div className="text-xs text-[#707886] mt-1">Formal Geographical Indication</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COFFEE GRADES TABLE */}
      <section className="py-16 sm:py-24 bg-[#F4F1EA] border-b border-[#E7E5E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Origin Grading Framework"
            title="Araku Valley Coffee Grades"
            subtitle="Six distinct grades across washed and natural processing, verified at origin prior to export packing."
            className="mb-12"
          />

          {/* Desktop Table View */}
          <div className="hidden lg:block bg-white border border-[#E7E5E0] shadow-xs overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0B192C] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold">
                  <th scope="col" className="py-4 px-6 w-16">Rank</th>
                  <th scope="col" className="py-4 px-6 w-48">Grade</th>
                  <th scope="col" className="py-4 px-6 w-52">Process</th>
                  <th scope="col" className="py-4 px-6">Description</th>
                  <th scope="col" className="py-4 px-6 w-32 text-center">Score /10*</th>
                  <th scope="col" className="py-4 px-6 w-36 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E7E5E0] text-sm text-[#1E2229]">
                {COFFEE_GRADES.map((row) => (
                  <tr
                    key={row.grade}
                    className="hover:bg-[#FAF8F5] transition-colors"
                  >
                    <td className="py-5 px-6 font-serif text-lg text-[#8A6D44] font-medium">
                      {row.rank}
                    </td>
                    <td className="py-5 px-6 font-medium text-[#0B192C]">
                      {row.grade}
                    </td>
                    <td className="py-5 px-6 text-[#5C6472]">
                      {row.process}
                    </td>
                    <td className="py-5 px-6 text-[#4A5260] leading-relaxed max-w-md">
                      {row.description}
                    </td>
                    <td className="py-5 px-6 text-center">
                      <span className="font-serif text-lg font-semibold text-[#0B192C]">
                        {row.score}
                      </span>
                      <span className="text-xs text-[#8A94A6]">/10</span>
                    </td>
                    <td className="py-5 px-6 text-right">
                      <button
                        onClick={() => handleSampleRequest(row.grade)}
                        className="text-xs font-semibold uppercase tracking-wider text-[#0B192C] hover:text-[#B8976C] transition-colors cursor-pointer"
                      >
                        Sample →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile & Tablet Card View */}
          <div className="lg:hidden space-y-4">
            {COFFEE_GRADES.map((row) => (
              <div
                key={row.grade}
                className="bg-white p-6 border border-[#E7E5E0] space-y-4"
              >
                <div className="flex items-center justify-between border-b border-[#E7E5E0] pb-3">
                  <div>
                    <span className="text-xs text-[#8A6D44] font-serif mr-2 font-semibold">
                      Rank 0{row.rank}
                    </span>
                    <span className="font-serif text-xl font-medium text-[#0B192C]">
                      {row.grade}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="font-serif text-lg font-bold text-[#0B192C]">
                      {row.score}<span className="text-xs font-normal text-[#8A94A6]">/10</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-wider text-[#707886] font-medium mb-1">
                    {row.process}
                  </div>
                  <p className="text-sm text-[#4A5260] leading-relaxed">
                    {row.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E7E5E0] flex justify-end">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleSampleRequest(row.grade)}
                  >
                    Request Sample for {row.grade}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Mandatory Disclaimers & Grading Framework Clarification */}
          <div className="mt-8 p-6 bg-white border border-[#E7E5E0] max-w-4xl space-y-3">
            <p className="text-sm text-[#4A5260] leading-relaxed font-medium">
              This ranking reflects trade convention (processing method and screen size). Actual
              pricing for specialty buyers is driven by cup score — available on a per-lot basis
              on request.
            </p>
            <div className="pt-3 border-t border-[#E7E5E0] text-xs text-[#707886] flex items-start gap-2">
              <span className="text-[#8A6D44] font-bold uppercase tracking-wider">*Note:</span>
              <span>
                Scores shown reflect the internal grading and size-ranking framework supplied by
                E4 Exports based on regional processing method and screen size convention. It is
                not an independently certified universal industry score. Formal SCA cupping notes
                and moisture analyses are provided with physical lot samples upon request.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SOURCING STORY */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#E7E5E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs uppercase tracking-[0.25em] text-[#8A6D44] font-semibold">
                Origin Terroir
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0B192C] font-normal leading-[1.15]">
                From the Eastern Ghats to the world’s roasters.
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-[#4A5260] leading-relaxed">
                <p>
                  Tucked into the Eastern Ghats on the border of Andhra Pradesh and Odisha, the
                  Araku Valley climbs to elevations that keep the air cool and the coffee cherries
                  ripening slowly.
                </p>
                <p>
                  It’s here, on small tribal-owned plots shaded by jackfruit, silver oak, and wild
                  pepper vines, that some of India’s finest Arabica is grown.
                </p>
                <p className="text-xl font-serif text-[#0B192C] italic">
                  This isn’t plantation coffee.
                </p>
                <p>
                  It’s cultivated by Adivasi smallholder farmers, many working under an acre, using
                  organic growing methods refined over two decades of dedicated agricultural
                  development — part of what makes this region one of the largest organic coffee
                  growing areas in the world.
                </p>
                <p className="text-[#0B192C] font-medium pt-2">
                  E4 Exports works to bring that quality directly to buyers, grading every lot by
                  hand and by cup, so they get full transparency on what they’re purchasing well
                  before it reaches their own senses.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="border border-[#E7E5E0] aspect-[4/5] overflow-hidden bg-[#E7E5E0]">
                    <img
                      src={IMAGES.coffeeCherries}
                      alt="Araku Valley coffee cherries ripening on shaded branches"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 bg-[#F4F1EA] border border-[#E7E5E0] text-xs text-[#5C6472]">
                    Shaded canopy cultivation under jackfruit and silver oak
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="border border-[#E7E5E0] aspect-[4/5] overflow-hidden bg-[#E7E5E0]">
                    <img
                      src={IMAGES.coffeeBeansGreen}
                      alt="Export-ready green Arabica beans graded by screen size"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 bg-[#0B192C] text-[#FAF8F5] text-xs">
                    Hand-assessed and cup-evaluated lot by lot
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COFFEE INSIGHTS (3 EDITORIAL SECTIONS) */}
      <section className="py-16 sm:py-24 bg-[#F4F1EA] border-b border-[#E7E5E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Roaster &amp; Buyer Notes"
            title="Understanding Araku Arabica"
            subtitle="The biological and processing details behind cup quality and market demand."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COFFEE_INSIGHTS.map((insight, idx) => (
              <div
                key={insight.title}
                className="bg-white p-8 border border-[#E7E5E0] flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#8A6D44] font-semibold mb-3">
                    Insight 0{idx + 1}
                  </div>
                  <h3 className="font-serif text-2xl text-[#0B192C] font-normal mb-6 leading-snug">
                    {insight.title}
                  </h3>
                  <div className="space-y-4 text-sm text-[#4A5260] leading-relaxed">
                    {insight.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E7E5E0] text-xs text-[#707886]">
                  Araku Valley Technical Brief
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. COFFEE DARK CTA */}
      <section className="py-20 sm:py-28 bg-[#07101C] text-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-[#B8976C] font-semibold mb-4">
            Direct Specialty Coffee Sourcing
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#FAF8F5] leading-tight">
            Looking for your next Indian coffee origin?
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[#D5D2CA] max-w-2xl mx-auto leading-relaxed">
            Tell us the grade, processing method, volume and destination you’re sourcing for.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="gold"
              size="lg"
              onClick={() => handleSampleRequest()}
              iconRight={<ArrowRight className="w-4 h-4" />}
            >
              Request a Coffee Sample
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/contact')}
              className="text-[#FAF8F5] border-white/30 hover:bg-white hover:text-[#0B192C]"
            >
              Talk to E4 Exports
            </Button>
          </div>

          <div className="mt-12 text-xs text-[#707B8E]">
            Samples dispatched in sealed, climate-controlled barrier bags with lot evaluation sheets.
          </div>
        </div>
      </section>
    </div>
  );
};
