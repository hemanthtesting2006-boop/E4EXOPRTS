import { CoffeeGrade, ProductCategory, InsightArticle } from '../types';

export const BRAND = {
  name: 'E4 Exports',
  legalType: 'Merchant Export House',
  positioning: 'India sources the world. E4 Exports makes it simple.',
  message: 'Source. Export. Grow.',
  description: 'A merchant export house connecting verified Indian suppliers with buyers worldwide.',
  operatingSummary:
    'E4 Exports is a merchant export house that identifies verified Indian suppliers, assesses product quality, manages export documentation and logistics, and connects international buyers with export-ready Indian products.',
};

export const HERO_HEADLINES = [
  'India sources the world. We make it simple.',
  'Every export-grade product India makes — sourced, verified, delivered.',
  "From India's producers to the world's buyers. Direct.",
];

export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=2000&q=85', // Serene Indian highland terroir mist
  originAgriculture: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1600&q=80', // Kerala/Western/Eastern Ghats spice & plantation canopy
  coffeeHills: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=80', // High altitude mountain landscape (Araku valley elevation)
  coffeeBeansGreen: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=1600&q=80', // Specialty green coffee bean sorting
  coffeeCherries: 'https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?auto=format&fit=crop&w=1600&q=80', // Fresh coffee cherries on branch
  cupping: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1600&q=80', // Specialty cupping and grading
  shippingPort: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1800&q=80', // Clean commercial container port / export terminal
  inspection: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80', // Professional quality testing / origin inspection
  spicesPreview: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1600&q=80', // Whole natural spices origin
  grainsPreview: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1600&q=80', // Premium golden grains
};

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Source',
    description: 'Identify verified producers and suppliers across India.',
  },
  {
    step: '02',
    title: 'Verify',
    description: 'Assess suppliers, inspect products and establish quality expectations.',
  },
  {
    step: '03',
    title: 'Export',
    description: 'Manage documentation, packing, logistics and shipment coordination.',
  },
  {
    step: '04',
    title: 'Deliver',
    description: 'Keep accountability through the export journey to destination.',
  },
];

export const WHY_E4_POINTS = [
  {
    title: 'Verified sourcing',
    description: 'We work directly with verified suppliers rather than relying on unknown intermediaries.',
  },
  {
    title: 'Quality at origin',
    description: 'Product quality is assessed before it becomes a shipment.',
  },
  {
    title: 'Export handled properly',
    description: 'Documentation and logistics are managed as part of the export process.',
  },
  {
    title: 'One accountable relationship',
    description: 'International buyers have one partner responsible for coordinating the journey from origin to destination.',
  },
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'specialty-coffee',
    name: 'Specialty Coffee',
    status: 'Live',
    description: 'Grade-assessed Arabica from India’s high-altitude growing regions.',
    ctaText: 'Explore Coffee',
    route: '/specialty-coffee',
    image: IMAGES.coffeeBeansGreen,
    imageAlt: 'Grade-assessed Arabica green coffee beans from India',
  },
  {
    id: 'spices-extracts',
    name: 'Spices, Botanicals & Nutraceutical Extracts',
    status: 'In Development',
    description: 'Specialty and agricultural ingredients sourced through verified Indian supply relationships.',
    image: IMAGES.spicesPreview,
    imageAlt: 'Specialty Indian spices and botanical ingredients at origin',
  },
  {
    id: 'grains-commodities',
    name: 'Grains & Agricultural Commodities',
    status: 'In Development',
    description: 'Export-ready agricultural commodities sourced according to buyer specifications.',
    image: IMAGES.grainsPreview,
    imageAlt: 'Export-ready grains and agricultural commodities in India',
  },
  {
    id: 'additional-categories',
    name: 'Additional Categories',
    status: 'Coming Next',
    description: 'New categories are added as sourcing relationships are established.',
    image: IMAGES.originAgriculture,
    imageAlt: 'Agricultural origin canopy representing forthcoming sourcing categories',
  },
];

export const INSIGHT_ARTICLES: InsightArticle[] = [
  {
    id: '1',
    slug: 'direct-trade-sourcing-vs-traditional-trading-house',
    title: 'Why Direct-Trade Sourcing Beats the Traditional Trading House Model',
    category: 'Sourcing Architecture',
    readTime: '4 min read',
    excerpt:
      'For decades, the default way to buy from India has run through layers of trading houses and agents — each one adding margin, and each one adding distance between the buyer and the producer.',
    content: [
      'For decades, the default way to buy from India has run through layers of trading houses and agents — each one adding margin, and each one adding distance between the buyer and the actual producer.',
      'That model isn’t dishonest, but it is opaque: by the time a product reaches a buyer, it’s often impossible to verify who grew or made it, under what conditions, or at what real quality.',
      'Direct-trade sourcing inverts that.',
      'When an exporter deals with verified producers directly, quality control happens at the source instead of being inferred from paperwork three hands removed from it — and problems get caught before they become a buyer’s problem.',
    ],
  },
  {
    id: '2',
    slug: 'what-export-ready-actually-means',
    title: 'What "Export-Ready" Actually Means',
    category: 'Quality & Compliance',
    readTime: '5 min read',
    excerpt:
      'The phrase gets used loosely, but export-ready is a specific standard: product graded to a stated specification, documented to the destination country’s import requirements, and packed to survive the journey.',
    content: [
      'The phrase gets used loosely, but export-ready is a specific standard: product graded to a stated specification, documented to the destination country’s import requirements, and packed to survive the journey it’s about to take — not just the domestic market it was originally intended for.',
      'A surprising amount of good Indian product fails at exactly this step: excellent quality, but under-documented, inconsistently graded, or packed for a local market rather than an international one.',
    ],
    closing:
      'Closing that gap — not finding good product, which is rarely the hard part — is most of what a serious export partner is actually for.',
  },
  {
    id: '3',
    slug: 'india-export-potential-breadth',
    title: 'India’s Export Potential Is Bigger Than Most Buyers Realise',
    category: 'Market Intelligence',
    readTime: '4 min read',
    excerpt:
      'Ask an international buyer what they associate with Indian exports and you’ll usually get two or three categories — textiles, spices, maybe rice. That list understates the country by an order of magnitude.',
    content: [
      'Ask an international buyer what they associate with Indian exports and you’ll usually get two or three categories — textiles, spices, maybe rice.',
      'That list understates the country by an order of magnitude.',
      'India’s climatic range, from Himalayan foothills to tropical coastline, supports an extraordinary breadth of agricultural and specialty categories, most of which never reach an international buyer’s radar simply because no one has built the sourcing and export infrastructure to bring them out.',
    ],
    closing:
      'That gap — between what India can supply and what the world currently sources from it — is where an export house like E4 operates.',
  },
];

export const SOURCING_PROCESS_STEPS = [
  {
    name: 'Discover',
    tagline: 'Direct producer mapping',
    description: 'We identify and vet producers directly — no unverified intermediaries between us and the producer.',
  },
  {
    name: 'Verify',
    tagline: 'Operational vetting',
    description: 'Supplier credibility, track record, facility hygiene and capacity are validated on-site.',
  },
  {
    name: 'Assess',
    tagline: 'Origin grading & testing',
    description:
      'We inspect, grade, and where relevant, test product ourselves before it’s offered to a buyer, so what’s written on a spec sheet is what actually ships.',
  },
  {
    name: 'Prepare',
    tagline: 'Export-ready packaging',
    description: 'Packaging engineered for international ocean transit and destination climate conditions.',
  },
  {
    name: 'Export',
    tagline: 'Compliance & documentation',
    description:
      'We handle documentation and export compliance as our job, not the buyer’s problem to untangle after the fact.',
  },
  {
    name: 'Follow Through',
    tagline: 'Destination accountability',
    description:
      'And we stay involved after the container leaves — because a shipment that arrives correctly is the only kind worth making twice.',
  },
];

export const LOGISTICS_JOURNEY_STEPS = [
  { step: '01', title: 'Supplier', detail: 'Verified Indian origin partner' },
  { step: '02', title: 'Quality Check', detail: 'Independent inspection & grading' },
  { step: '03', title: 'Packing', detail: 'Export-grade protective packaging' },
  { step: '04', title: 'Origin', detail: 'Inland transport & customs clearance' },
  { step: '05', title: 'Port', detail: 'Indian gateway port loading' },
  { step: '06', title: 'Ocean Freight', detail: 'FCL standard / LCL upon request' },
  { step: '07', title: 'Destination', detail: 'Arrival at buyer destination port' },
];

export const COFFEE_GRADES: CoffeeGrade[] = [
  {
    rank: 1,
    grade: 'Parchment PB',
    process: 'Washed · Peaberry',
    description:
      'Rare single round bean + washed processing. The cleanest, most concentrated cup — the grade specialty buyers ask for first.',
  },
  {
    rank: 2,
    grade: 'Parchment AA',
    process: 'Washed · Screen 17–18',
    description:
      'Largest, densest flat beans, fully washed. Even roast, clean cup — the reference top-size grade.',
  },
  {
    rank: 3,
    grade: 'Cherry PB',
    process: 'Natural · Peaberry',
    description:
      'Same rare peaberry shape, naturally dried. Fuller body and fruit, sometimes priced level with Parchment AA by micro-lot buyers.',
  },
  {
    rank: 4,
    grade: 'Parchment A',
    process: 'Washed · Screen 16',
    description:
      'A step down in size from AA, still washed and dense. Dependable, high-quality blend-builder.',
  },
  {
    rank: 5,
    grade: 'Cherry AB',
    process: 'Natural · Screen 15–16',
    description:
      'Mid-size, naturally processed. Fuller-bodied, less uniform cup-to-cup, valued for character.',
  },
  {
    rank: 6,
    grade: 'Parchment B',
    process: 'Washed · Screen 14',
    description:
      'Smaller, lower-density washed bean. The reliable commercial entry point on price.',
  },
];

export const COFFEE_INSIGHTS = [
  {
    title: 'Why Altitude Matters in Specialty Coffee',
    paragraphs: [
      'Altitude slows everything down — and in coffee, slow is good.',
      'At higher elevations, cooler temperatures extend the time a coffee cherry takes to ripen, giving the bean more time to develop sugars and complex acids.',
      'This is why high-grown Arabica, like the Araku Valley’s, consistently cups with brighter acidity and more layered flavour than coffee grown at lower elevations.',
      'It’s one of the simplest, most reliable predictors of cup quality in the industry — and one buyers should always ask about.',
    ],
  },
  {
    title: 'Reading a Coffee Grade Sheet: Parchment vs. Cherry',
    paragraphs: [
      'Two things determine most of what you see on a green coffee grade sheet: how the coffee was processed, and how large the beans are.',
      '“Parchment” means the coffee was washed — the fruit removed before drying — which tends to produce a cleaner, more consistent cup.',
      '“Cherry” means it was dried naturally inside the whole fruit, which adds body and fruit-forward character but more lot-to-lot variation.',
      'Size grades (AA, A, AB, B) and the peaberry (PB) designation layer on top of that.',
      'None of this replaces an actual cupping score — but it tells you, at a glance, roughly what style of cup to expect.',
    ],
  },
  {
    title: 'Why Global Roasters Are Looking at India Right Now',
    paragraphs: [
      'Indian specialty coffee has spent the last decade building the kind of track record that gets noticed — Geographical Indication recognition, international cupping awards, and growing attention from roasters looking for origins beyond the usual East African and Latin American names.',
      'Add to that strengthening trade relationships between India and major coffee-consuming markets, and the timing for international buyers to build direct origin relationships in India has rarely been better.',
    ],
  },
];
