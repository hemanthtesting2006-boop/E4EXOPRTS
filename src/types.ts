export type RoutePath =
  | '/'
  | '/about'
  | '/products'
  | '/specialty-coffee'
  | '/sourcing'
  | '/insights'
  | '/shipping'
  | '/sample'
  | '/quote'
  | '/contact';

export interface CoffeeGrade {
  rank: number;
  grade: string;
  process: string;
  description: string;
  score?: number;
}

export interface ProductCategory {
  id: string;
  name: string;
  status: 'Live' | 'In Development' | 'Coming Next';
  description: string;
  ctaText?: string;
  route?: RoutePath;
  image: string;
  imageAlt: string;
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  closing?: string;
  category: string;
  readTime: string;
}

export interface EnquiryFormData {
  companyName: string;
  contactPerson: string;
  role: string;
  email: string;
  phoneWhatsapp: string;
  country: string;
  destinationPort: string;
  categoryInterest: string;
  approxVolume: string;
  volumeUnit: string;
  preferredIncoterm: string;
  enquiryType: 'sample' | 'quote' | 'both';
  message: string;
}
