import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { RoutePath } from '../types';

interface BreadcrumbItem {
  label: string;
  route?: RoutePath;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  dark?: boolean;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, dark = false }) => {
  const { navigate } = useNavigation();

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className={`flex items-center flex-wrap gap-2 text-xs tracking-wider uppercase font-medium ${
        dark ? 'text-[#A0A6B2]' : 'text-[#707886]'
      }`}>
        <li>
          <button
            onClick={() => navigate('/')}
            className={`transition-colors cursor-pointer ${
              dark ? 'hover:text-[#FAF8F5]' : 'hover:text-[#0B192C]'
            }`}
          >
            Home
          </button>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center gap-2">
              <span aria-hidden="true" className="opacity-40">/</span>
              {isLast || !item.route ? (
                <span className={dark ? 'text-[#FAF8F5]' : 'text-[#0B192C]'}>
                  {item.label}
                </span>
              ) : (
                <button
                  onClick={() => navigate(item.route!)}
                  className={`transition-colors cursor-pointer ${
                    dark ? 'hover:text-[#FAF8F5]' : 'hover:text-[#0B192C]'
                  }`}
                >
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
