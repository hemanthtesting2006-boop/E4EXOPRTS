import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Button } from '../components/Button';
import { ArrowRight, MessageSquareCode, ShieldCheck } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="bg-[#FAF8F5] text-[#1E2229] pt-24 sm:pt-28 min-h-[80vh] flex flex-col justify-between">
      <div>
        {/* Header Banner */}
        <section className="bg-[#FAF8F5] border-b border-[#E7E5E0] py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: 'Contact' }]} />
            <div className="max-w-3xl mt-6">
              <div className="text-xs uppercase tracking-[0.25em] text-[#8A6D44] font-semibold mb-3">
                Direct Communications
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0B192C] font-normal leading-[1.12]">
                Let’s talk sourcing.
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-[#5C6472] leading-relaxed">
                Contact details and preferred enquiry channels will be added once finalised.
              </p>
            </div>
          </div>
        </section>

        {/* Minimal Honest Content Body */}
        <section className="py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 sm:p-12 border border-[#E7E5E0] space-y-8 text-center">
              <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#E7E5E0] flex items-center justify-center mx-auto text-[#0B192C]">
                <MessageSquareCode className="w-6 h-6 text-[#8A6D44]" />
              </div>

              <div className="space-y-3">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#0B192C] font-medium">
                  Connect with our Trade Desk
                </h2>
                <p className="text-sm sm:text-base text-[#5C6472] max-w-lg mx-auto leading-relaxed">
                  For sample evaluations, commercial quotes, or preliminary supplier vetting
                  discussions, please use our commercial enquiry portal.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => navigate('/sample')}
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  Request a Sample
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => navigate('/quote')}
                >
                  Get a Quote
                </Button>
              </div>

              <div className="pt-8 border-t border-[#E7E5E0] text-xs text-[#8A94A6] space-y-1">
                <p>Sourcing &amp; Quality Operations: India</p>
                <p>Buyer Relationships &amp; Commercial Operations: United Kingdom</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
