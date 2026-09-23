import React, { useEffect, useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Button } from '../components/Button';
import { INSIGHT_ARTICLES } from '../data/content';
import { ArrowRight, BookOpen, Clock, ArrowUpRight } from 'lucide-react';

export const InsightsPage: React.FC = () => {
  const { navigate, activeArticleSlug, setActiveArticleSlug } = useNavigation();
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  useEffect(() => {
    if (activeArticleSlug) {
      const match = INSIGHT_ARTICLES.find((a) => a.slug === activeArticleSlug);
      if (match) {
        setSelectedArticleId(match.id);
        const element = document.getElementById(`article-${match.id}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  }, [activeArticleSlug]);

  return (
    <div className="bg-[#FAF8F5] text-[#1E2229] pt-24 sm:pt-28">
      {/* Header Banner */}
      <section className="bg-[#FAF8F5] border-b border-[#E7E5E0] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Expert Insights' }]} />
          <div className="max-w-3xl mt-6">
            <div className="text-xs uppercase tracking-[0.25em] text-[#8A6D44] font-semibold mb-3">
              Trade &amp; Sourcing Intelligence
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0B192C] font-normal leading-[1.12]">
              The details behind better international sourcing.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#5C6472] leading-relaxed">
              Perspectives on cross-border supply chains, origin quality verification, and Indian
              export mechanics for global B2B procurement teams.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Stream */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {INSIGHT_ARTICLES.map((article, index) => (
            <article
              key={article.id}
              id={`article-${article.id}`}
              className="bg-white p-8 sm:p-12 border border-[#E7E5E0] shadow-2xs hover:border-[#0B192C]/40 transition-all duration-200"
            >
              {/* Meta row: Zero-pill discipline */}
              <div className="flex items-center gap-3 text-xs text-[#707886] mb-6 pb-4 border-b border-[#E7E5E0]">
                <span className="uppercase tracking-widest text-[#8A6D44] font-semibold">
                  Essay 0{index + 1}
                </span>
                <span aria-hidden="true">·</span>
                <span>{article.category}</span>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#0B192C] font-normal leading-snug mb-8">
                {article.title}
              </h2>

              {/* Paragraphs */}
              <div className="space-y-6 text-base sm:text-lg text-[#3E4552] leading-relaxed">
                {article.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}

                {article.closing && (
                  <div className="mt-8 pt-6 border-t border-[#E7E5E0] bg-[#FAF8F5] p-6 text-[#0B192C] font-medium italic">
                    {article.closing}
                  </div>
                )}
              </div>

              {/* Article Footer CTA */}
              <div className="mt-10 pt-6 border-t border-[#E7E5E0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-xs text-[#707886]">
                  Category: {article.category} · Published for international procurement
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate('/sample')}
                  iconRight={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Request a Sample
                </Button>
              </div>
            </article>
          ))}

          {/* Bottom Callout */}
          <div className="p-8 sm:p-10 bg-[#0B192C] text-[#FAF8F5] border border-[#0B192C] text-center">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal mb-3">
              Have specific sourcing requirements?
            </h3>
            <p className="text-sm text-[#D5D2CA] max-w-xl mx-auto leading-relaxed mb-6">
              Our team evaluates agricultural and specialty categories based on buyer
              specifications, origin capacity, and destination import regulations.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                variant="gold"
                size="md"
                onClick={() => navigate('/quote')}
              >
                Get a Quote
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={() => navigate('/shipping')}
                className="text-[#FAF8F5] border-white/30 hover:bg-white hover:text-[#0B192C]"
              >
                Learn How We Ship
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
