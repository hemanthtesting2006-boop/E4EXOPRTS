import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigation } from '../context/NavigationContext';
import {
  HERO_HEADLINES,
  IMAGES,
  HOW_IT_WORKS_STEPS,
  WHY_E4_POINTS,
  PRODUCT_CATEGORIES,
  INSIGHT_ARTICLES,
} from '../data/content';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { ArrowRight, CheckCircle2, ShieldCheck, FileCheck, Anchor, ArrowUpRight } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate, setActiveArticleSlug } = useNavigation();
  const [headlineIndex, setHeadlineIndex] = useState(0);

  const trustIcons = [
    <ShieldCheck key="1" className="w-5 h-5 text-[#B8976C]" />,
    <CheckCircle2 key="2" className="w-5 h-5 text-[#B8976C]" />,
    <FileCheck key="3" className="w-5 h-5 text-[#B8976C]" />,
    <Anchor key="4" className="w-5 h-5 text-[#B8976C]" />,
  ];

  return (
    <div className="bg-[#FAF8F5] text-[#1E2229]">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32 overflow-hidden border-b border-[#E7E5E0]">
        {/* Background editorial image with refined dark scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.hero}
            alt="Indian agricultural terroir and plantation landscape"
            className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.05]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07101C]/95 via-[#07101C]/85 to-[#0B192C]/75" />
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Merchant Positioning Kicker */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B8976C] font-semibold">
                Merchant Export House · India &amp; UK Operations
              </span>
            </div>

            {/* Headline */}
            <motion.h1
              key={headlineIndex}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FAF8F5] font-normal leading-[1.12] tracking-[-0.01em]"
            >
              {HERO_HEADLINES[headlineIndex]}
            </motion.h1>

            {/* A/B Headline Subtle Switcher for international buyers */}
            <div className="flex items-center gap-2 mt-4 text-xs text-[#A0A8B8]">
              <span className="text-[11px] uppercase tracking-wider text-[#707B8E]">Perspective:</span>
              {HERO_HEADLINES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setHeadlineIndex(idx)}
                  className={`px-2 py-0.5 text-xs transition-colors cursor-pointer border ${
                    headlineIndex === idx
                      ? 'border-[#B8976C] text-[#FAF8F5] bg-[#B8976C]/10 font-medium'
                      : 'border-transparent text-[#8A94A6] hover:text-[#FAF8F5]'
                  }`}
                  aria-label={`View headline variant ${idx + 1}`}
                >
                  0{idx + 1}
                </button>
              ))}
            </div>

            {/* Supporting Copy */}
            <p className="mt-8 text-lg sm:text-xl text-[#D5D2CA] leading-relaxed font-normal max-w-2xl">
              E4 Exports is a merchant export house sourcing verified, export-ready Indian products
              for buyers across the globe — quality-checked at origin, delivered without the
              guesswork.
            </p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <Button
                variant="gold"
                size="lg"
                onClick={() => navigate('/sample')}
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                Request a Sample
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/products')}
                className="text-[#FAF8F5] border-[#FAF8F5]/50 hover:bg-[#FAF8F5] hover:text-[#0B192C]"
              >
                Explore Products
              </Button>
            </motion.div>

            {/* Brand Philosophy Anchor */}
            <div className="mt-14 pt-8 border-t border-white/10 flex items-center gap-6 text-xs text-[#A0A8B8] tracking-widest uppercase">
              <span className="text-[#B8976C] font-semibold">Source.</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <span className="text-[#B8976C] font-semibold">Export.</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <span className="text-[#B8976C] font-semibold">Grow.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-20 sm:py-28 lg:py-32 bg-[#FAF8F5] border-b border-[#E7E5E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <SectionHeading
                kicker="The Sourcing Gap"
                title="India has the products. We build the bridge."
              />
              <div className="mt-8 relative aspect-[4/3] overflow-hidden border border-[#E7E5E0]">
                <img
                  src={IMAGES.originAgriculture}
                  alt="Verified Indian agricultural terroir"
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#07101C]/90 to-transparent text-[11px] text-[#FAF8F5] tracking-wide">
                  On-ground supplier verification · Agricultural origin
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 lg:pt-14 space-y-6 text-[#4A5260] text-base sm:text-lg leading-relaxed">
              <p className="text-xl sm:text-2xl font-serif text-[#0B192C] font-normal leading-snug">
                India produces more of what the world needs than most international buyers ever get
                to see clearly.
              </p>
              <p>
                Fragmented supply chains, inconsistent quality control, and unreliable
                intermediaries keep enormous volumes of genuinely excellent Indian product out of
                reach for buyers abroad.
              </p>
              <p className="text-[#0B192C] font-medium">
                E4 Exports exists to close that gap.
              </p>
              <p>
                We identify verified suppliers across India’s agricultural and specialty product
                categories, inspect and grade what they produce, and manage the full export process
                — documentation, logistics, and delivery — so a buyer sourcing from anywhere in
                the world can trade with India as confidently as they’d trade with a supplier down
                the road.
              </p>

              <div className="pt-4 flex items-center gap-4">
                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => navigate('/about')}
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  Our Full Story
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW E4 WORKS (4-STEP PROCESS) */}
      <section className="py-20 sm:py-28 bg-[#F4F1EA] border-b border-[#E7E5E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading
              kicker="Operating Discipline"
              title="How E4 Works"
              subtitle="A systematic, accountable export pipeline engineered from producer to destination port."
            />
            <button
              onClick={() => navigate('/sourcing')}
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#0B192C] hover:text-[#B8976C] transition-colors cursor-pointer group pb-2 self-start md:self-auto"
            >
              <span>See How We Work</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS_STEPS.map((item) => (
              <div
                key={item.step}
                className="bg-[#FAF8F5] p-8 border border-[#E7E5E0] hover:border-[#0B192C]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="font-serif text-3xl sm:text-4xl text-[#B8976C] font-light mb-6">
                    {item.step}
                  </div>
                  <h3 className="font-serif text-2xl text-[#0B192C] font-medium mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5C6472] leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[#E7E5E0] text-[11px] uppercase tracking-wider text-[#8A94A6]">
                  Stage {item.step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRODUCTS OVERVIEW */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#E7E5E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading
              kicker="Category Scope"
              title="What we source"
              subtitle="E4 Exports sources and exports verified, export-ready products across India's agricultural and specialty categories."
            />
            <Button
              variant="outline"
              size="md"
              onClick={() => navigate('/products')}
              className="self-start md:self-auto"
            >
              View Products Hub
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCT_CATEGORIES.map((category) => {
              const isLive = category.status === 'Live';
              return (
                <div
                  key={category.id}
                  className={`border flex flex-col justify-between transition-all duration-300 ${
                    isLive
                      ? 'border-[#0B192C] bg-white shadow-xs'
                      : 'border-[#E7E5E0] bg-[#FAF8F5]/80 opacity-90'
                  }`}
                >
                  <div>
                    {/* Category Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#E7E5E0] border-b border-[#E7E5E0]">
                      <img
                        src={category.image}
                        alt={category.imageAlt}
                        className="w-full h-full object-cover filter contrast-[1.05]"
                        loading="lazy"
                      />
                      {/* Zero-pill status text */}
                      <div className="absolute top-3 right-3 text-[11px] font-semibold tracking-wider uppercase px-2 py-0.5 bg-[#07101C]/85 text-[#FAF8F5]">
                        {category.status}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="font-serif text-xl sm:text-2xl text-[#0B192C] font-medium mb-3">
                        {category.name}
                      </h3>
                      <p className="text-sm text-[#5C6472] leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    {isLive && category.route ? (
                      <button
                        onClick={() => navigate(category.route!)}
                        className="w-full inline-flex items-center justify-between py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] bg-[#0B192C] hover:bg-[#152A47] transition-colors cursor-pointer"
                      >
                        <span>{category.ctaText} →</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <div className="py-2.5 text-xs text-[#8A94A6] uppercase tracking-wider font-medium border-t border-[#E7E5E0]">
                        Status · {category.status}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center text-xs text-[#707886]">
            Strict quality criteria: New categories are only launched once on-ground producer vetting and export pipelines are verified.
          </div>
        </div>
      </section>

      {/* 5. WHY E4 */}
      <section className="py-20 sm:py-28 bg-[#0B192C] text-[#FAF8F5] border-b border-[#1E2738]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="The Sourcing Advantage"
            title="One partner between origin and destination."
            subtitle="Bridging fragmented production with international buyer expectations."
            dark
            className="mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_E4_POINTS.map((point, index) => (
              <div
                key={point.title}
                className="p-8 bg-[#07101C]/60 border border-[#1E2738] flex flex-col justify-between"
              >
                <div>
                  <div className="mb-6">{trustIcons[index]}</div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#FAF8F5] mb-3">
                    {point.title}
                  </h3>
                  <p className="text-sm text-[#A0A8B8] leading-relaxed">
                    {point.description}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[#1E2738] text-[10px] tracking-[0.2em] uppercase text-[#B8976C]">
                  Trust Pillar 0{index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. UK + INDIA SECTION */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#E7E5E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                kicker="Operating Architecture"
                title="India at origin. The UK at the table."
              />
              <div className="space-y-4 text-base sm:text-lg text-[#4A5260] leading-relaxed">
                <p>Our operating structure connects two sides of international trade.</p>
                <p>
                  Sourcing, supplier verification and on-ground quality control run from India,
                  close to the producers themselves.
                </p>
                <p>
                  Buyer relationships, market strategy and international operations run from the
                  UK.
                </p>
                <p className="text-[#0B192C] font-medium pt-2">
                  The result is a business built around both origin knowledge and international
                  buyer expectations.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => navigate('/sample')}
                >
                  Request a Sample
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => navigate('/about')}
                >
                  Learn About Our Structure
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-8 bg-[#F4F1EA] border border-[#E7E5E0] space-y-3">
                  <div className="text-xs uppercase tracking-[0.2em] text-[#8A6D44] font-semibold">
                    Origin Operations
                  </div>
                  <h4 className="font-serif text-2xl text-[#0B192C]">India</h4>
                  <ul className="text-xs text-[#5C6472] space-y-2 pt-2 border-t border-[#E7E5E0]">
                    <li>· Direct producer verification</li>
                    <li>· Quality inspection &amp; grading</li>
                    <li>· Export packing &amp; port dispatch</li>
                    <li>· Indian customs &amp; compliance</li>
                  </ul>
                </div>

                <div className="p-8 bg-[#0B192C] text-[#FAF8F5] border border-[#0B192C] space-y-3">
                  <div className="text-xs uppercase tracking-[0.2em] text-[#B8976C] font-semibold">
                    Buyer Operations
                  </div>
                  <h4 className="font-serif text-2xl text-[#FAF8F5]">United Kingdom</h4>
                  <ul className="text-xs text-[#A0A8B8] space-y-2 pt-2 border-t border-white/15">
                    <li>· Direct buyer relationships</li>
                    <li>· International contract terms</li>
                    <li>· Market pricing &amp; specifications</li>
                    <li>· Destination accountability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. INSIGHTS PREVIEW */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#E7E5E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading
              kicker="Trade Intelligence"
              title="Trade, sourcing and the details that matter."
              subtitle="Editorial analysis on cross-border procurement, quality grading, and Indian export trade."
            />
            <Button
              variant="outline"
              size="md"
              onClick={() => navigate('/insights')}
              className="self-start md:self-auto"
            >
              Explore Expert Insights →
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INSIGHT_ARTICLES.map((article) => (
              <article
                key={article.id}
                className="bg-white p-8 border border-[#E7E5E0] hover:border-[#0B192C] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#707886] mb-4 pb-3 border-b border-[#E7E5E0]">
                    <span className="uppercase tracking-wider text-[#8A6D44] font-medium">
                      {article.category}
                    </span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#0B192C] font-normal leading-snug group-hover:text-[#B8976C] transition-colors mb-4">
                    {article.title}
                  </h3>

                  <p className="text-sm text-[#5C6472] leading-relaxed line-clamp-4">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E7E5E0]">
                  <button
                    onClick={() => {
                      setActiveArticleSlug(article.slug);
                      navigate('/insights');
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0B192C] group-hover:text-[#B8976C] transition-colors cursor-pointer"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-20 sm:py-28 bg-[#07101C] text-[#FAF8F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-[#B8976C] font-semibold mb-4">
            Direct Origin Sourcing
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#FAF8F5] leading-tight">
            Looking for a reliable route into India?
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[#A0A8B8] max-w-2xl mx-auto leading-relaxed">
            Tell us what you are looking to source, where it needs to go, and the volume you have
            in mind. We’ll take it from there.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="gold"
              size="lg"
              onClick={() => navigate('/sample')}
              iconRight={<ArrowRight className="w-4 h-4" />}
            >
              Request a Sample
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/quote')}
              className="text-[#FAF8F5] border-white/30 hover:bg-white hover:text-[#0B192C]"
            >
              Get a Quote
            </Button>
          </div>

          <p className="mt-8 text-xs text-[#707B8E] tracking-wide">
            E4 Exports operates as an independent merchant export house. India origin · UK operations.
          </p>
        </div>
      </section>
    </div>
  );
};
