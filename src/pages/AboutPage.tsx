import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { IMAGES } from '../data/content';
import { ArrowRight, ShieldCheck, MapPin, Building2, CheckCircle2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="bg-[#FAF8F5] text-[#1E2229] pt-24 sm:pt-28">
      {/* Header Banner */}
      <section className="bg-[#FAF8F5] border-b border-[#E7E5E0] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'About E4 Exports' }]} />
          <div className="max-w-4xl mt-6">
            <div className="text-xs uppercase tracking-[0.25em] text-[#8A6D44] font-semibold mb-3">
              Our Story &amp; Model
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0B192C] font-normal leading-[1.12]">
              Built to make sourcing from India simpler.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#5C6472] leading-relaxed">
              A merchant export house providing direct origin vetting, quality inspection, and
              accountable export management between India and global markets.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Content Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="space-y-8 text-base sm:text-lg text-[#3E4552] leading-relaxed">
            {/* Opening Conviction */}
            <p className="text-xl sm:text-2xl font-serif text-[#0B192C] font-normal leading-snug border-l-2 border-[#B8976C] pl-6 py-1">
              E4 Exports is a merchant export house built on a simple conviction: India’s producers
              rarely need better products — they need a shorter, more honest route to the people who
              want to buy them.
            </p>

            <p>
              We are not manufacturers, and we are not growers. We are the connective layer between
              origin and destination — the party that finds verified suppliers across India’s
              producing landscape, inspects and grades what they make, and carries full
              accountability for what leaves an Indian port and what arrives at a buyer’s door,
              wherever in the world that door happens to be.
            </p>

            {/* Visual Break with Authentic Origin Inspection */}
            <div className="my-12 border border-[#E7E5E0] bg-[#F4F1EA]">
              <div className="relative aspect-[21/9] sm:aspect-[2.4/1] overflow-hidden">
                <img
                  src={IMAGES.inspection}
                  alt="Quality assessment at origin"
                  className="w-full h-full object-cover filter contrast-[1.05]"
                  loading="lazy"
                />
              </div>
              <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#5C6472] border-t border-[#E7E5E0]">
                <span>On-ground supplier verification and origin assessment</span>
                <span className="text-[#8A6D44] font-medium">India Origin Operations</span>
              </div>
            </div>

            <p>
              India is one of the least-understood sourcing markets in global trade — not for lack
              of quality, but because navigating it from the outside is genuinely difficult.
            </p>

            <p>
              Regional fragmentation, inconsistent documentation standards, and a trading
              landscape still dominated by opaque intermediaries mean that even experienced
              international buyers routinely under-source from a country capable of supplying
              almost anything they need.
            </p>

            <p className="text-[#0B192C] font-medium">
              E4 Exports was built to remove that friction: one accountable partner, one point of
              contact, one standard of quality control, across categories.
            </p>

            {/* Operating Structure Highlight */}
            <div className="my-12 p-8 sm:p-10 bg-[#0B192C] text-[#FAF8F5] border border-[#0B192C]">
              <div className="text-xs uppercase tracking-[0.2em] text-[#B8976C] font-semibold mb-3">
                Dual Geographic Presence
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF8F5] font-normal mb-6">
                Our operating structure reflects that ambition.
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/15">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#FAF8F5]">
                    <MapPin className="w-4 h-4 text-[#B8976C]" />
                    <span>India Origin Operations</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#A0A8B8] leading-relaxed">
                    Sourcing, supplier verification, and on-ground quality control run out of India,
                    close to the producers themselves.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#FAF8F5]">
                    <Building2 className="w-4 h-4 text-[#B8976C]" />
                    <span>UK International Operations</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#A0A8B8] leading-relaxed">
                    Buyer relationships, market strategy, and international operations run out of the
                    UK — giving us a genuine foothold in two of the world’s most demanding trading
                    environments, rather than a foreign sales desk bolted onto a domestic supplier.
                  </p>
                </div>
              </div>
            </div>

            <p>
              We started with a single category, built the sourcing, grading, and export process
              around it properly, and are now extending that same discipline — verified sourcing,
              independent quality assessment, full export documentation, direct buyer relationships
              — across new categories, one at a time.
            </p>

            <p>Our approach doesn’t scale by moving faster.</p>

            <p className="text-[#0B192C] font-medium">
              It scales by doing it right, repeatably, category by category.
            </p>

            {/* Final Statement Card */}
            <div className="mt-14 p-8 bg-[#F4F1EA] border border-[#E7E5E0] text-center">
              <span className="text-xs uppercase tracking-[0.25em] text-[#8A6D44] font-semibold block mb-2">
                Brand Principle
              </span>
              <blockquote className="font-serif text-xl sm:text-2xl text-[#0B192C] italic">
                “Source. Export. Grow.” isn’t a tagline we chose because it sounded good. It’s the
                order of operations.
              </blockquote>
            </div>
          </article>

          {/* Navigation to next actions */}
          <div className="mt-16 pt-10 border-t border-[#E7E5E0] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-serif text-xl text-[#0B192C]">Explore our methodology</h4>
              <p className="text-xs text-[#5C6472] mt-1">
                Learn how we inspect, pack, and coordinate export compliance.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="secondary"
                size="md"
                onClick={() => navigate('/sourcing')}
              >
                Sourcing Philosophy
              </Button>
              <Button
                variant="primary"
                size="md"
                onClick={() => navigate('/sample')}
                iconRight={<ArrowRight className="w-4 h-4" />}
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
