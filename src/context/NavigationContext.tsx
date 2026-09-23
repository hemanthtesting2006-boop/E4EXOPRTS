import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { RoutePath } from '../types';

interface NavigationContextType {
  currentRoute: RoutePath;
  navigate: (route: RoutePath, params?: Record<string, string>) => void;
  queryParams: Record<string, string>;
  activeArticleSlug: string | null;
  setActiveArticleSlug: (slug: string | null) => void;
}

const SEO_META: Record<RoutePath, { title: string; description: string }> = {
  '/': {
    title: 'E4 Exports | Verified Indian Sourcing & Global Export',
    description:
      'E4 Exports connects international buyers with verified, export-ready products sourced from India, with quality control, documentation and logistics managed from origin to destination.',
  },
  '/about': {
    title: 'About E4 Exports | Indian Merchant Export House',
    description:
      'E4 Exports is a merchant export house built on a simple conviction: India’s producers rarely need better products — they need a shorter, more honest route to the people who want to buy them.',
  },
  '/products': {
    title: 'Products | Export-Ready Indian Products | E4 Exports',
    description:
      'E4 Exports sources and exports verified, export-ready products across India’s agricultural and specialty categories.',
  },
  '/specialty-coffee': {
    title: 'Specialty Coffee from Araku Valley | E4 Exports',
    description:
      'Grade-assessed Arabica from India’s Eastern Ghats. Araku Valley Arabica cultivated by smallholder tribal farmers, available across washed and natural processing.',
  },
  '/sourcing': {
    title: 'Our Sourcing Philosophy | E4 Exports',
    description:
      'Quality starts before the shipment. Every category we export follows the same discipline, regardless of what is inside the container.',
  },
  '/insights': {
    title: 'Expert Insights | India Sourcing & International Trade',
    description:
      'The details behind better international sourcing. Editorial analysis on direct-trade sourcing, export readiness, and India’s global trade potential.',
  },
  '/shipping': {
    title: 'How We Ship | E4 Exports',
    description:
      'From origin to destination, handled. Full container loads (FCL) and LCL shipping terms, export packing, and logistics from India to international ports.',
  },
  '/sample': {
    title: 'Request a Sample or Quote | E4 Exports',
    description:
      'Start with a sample. Build from there. Request product samples and indicative export quotes for international B2B procurement.',
  },
  '/quote': {
    title: 'Request a Sample or Quote | E4 Exports',
    description:
      'Start with a sample. Build from there. Request product samples and indicative export quotes for international B2B procurement.',
  },
  '/contact': {
    title: 'Contact E4 Exports',
    description:
      'Let’s talk sourcing. Connect with E4 Exports regarding international trade and Indian supplier partnerships.',
  },
};

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

function parseHash(): { route: RoutePath; params: Record<string, string> } {
  const hash = window.location.hash.replace(/^#\/?/, '');
  const [pathPart, queryPart] = hash.split('?');
  const path = ('/' + (pathPart || '')).replace(/\/+$/, '') || '/';

  const params: Record<string, string> = {};
  if (queryPart) {
    const searchParams = new URLSearchParams(queryPart);
    searchParams.forEach((val, key) => {
      params[key] = val;
    });
  }

  const validRoutes: RoutePath[] = [
    '/',
    '/about',
    '/products',
    '/specialty-coffee',
    '/sourcing',
    '/insights',
    '/shipping',
    '/sample',
    '/quote',
    '/contact',
  ];

  const matched = validRoutes.includes(path as RoutePath) ? (path as RoutePath) : '/';
  return { route: matched, params };
}

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const initial = parseHash();
  const [currentRoute, setCurrentRoute] = useState<RoutePath>(initial.route);
  const [queryParams, setQueryParams] = useState<Record<string, string>>(initial.params);
  const [activeArticleSlug, setActiveArticleSlug] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const parsed = parseHash();
      setCurrentRoute(parsed.route);
      setQueryParams(parsed.params);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const meta = SEO_META[currentRoute] || SEO_META['/'];
    document.title = meta.title;

    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', meta.description);

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', meta.title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', meta.description);
  }, [currentRoute]);

  const navigate = (route: RoutePath, params?: Record<string, string>) => {
    const searchStr = params ? '?' + new URLSearchParams(params).toString() : '';
    window.location.hash = '#' + route + searchStr;
    setCurrentRoute(route);
    setQueryParams(params || {});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <NavigationContext.Provider
      value={{
        currentRoute,
        navigate,
        queryParams,
        activeArticleSlug,
        setActiveArticleSlug,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
