import React from 'react';

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  subtitle,
  align = 'left',
  dark = false,
  className = '',
}) => {
  return (
    <div
      className={`max-w-3xl ${
        align === 'center' ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {kicker && (
        <div
          className={`text-xs uppercase tracking-[0.2em] font-medium mb-3 ${
            dark ? 'text-[#B8976C]' : 'text-[#8A6D44]'
          }`}
        >
          {kicker}
        </div>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl tracking-[-0.01em] leading-[1.15] font-normal ${
          dark ? 'text-[#FAF8F5]' : 'text-[#0B192C]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            dark ? 'text-[#D5D2CA]' : 'text-[#5C6472]'
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`w-12 h-px mt-6 ${
          align === 'center' ? 'mx-auto' : ''
        } ${dark ? 'bg-[#B8976C]/40' : 'bg-[#0B192C]/20'}`}
      />
    </div>
  );
};
