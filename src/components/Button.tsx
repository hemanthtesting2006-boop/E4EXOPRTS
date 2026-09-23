import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  iconRight?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  iconRight,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-sans font-medium tracking-[0.03em] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B192C] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const sizeStyles = {
    sm: 'text-xs py-2 px-3.5 gap-1.5',
    md: 'text-sm py-2.5 px-5 gap-2',
    lg: 'text-base py-3.5 px-7 gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-[#0B192C] text-[#FAF8F5] hover:bg-[#152A47] active:bg-[#07101C] border border-[#0B192C]',
    secondary:
      'bg-[#FAF8F5] text-[#0B192C] border border-[#D5D2CA] hover:border-[#0B192C] hover:bg-[#F2EFEB]',
    outline:
      'bg-transparent text-[#0B192C] border border-[#0B192C] hover:bg-[#0B192C] hover:text-[#FAF8F5]',
    dark:
      'bg-[#B8976C] text-[#07101C] hover:bg-[#9E7D52] active:bg-[#8A6D44] border border-[#B8976C] font-semibold',
    gold:
      'bg-[#B8976C] text-[#07101C] hover:bg-[#9E7D52] active:bg-[#8A6D44] border border-[#B8976C] font-semibold',
    ghost:
      'bg-transparent text-[#0B192C] hover:text-[#B8976C] hover:bg-black/5 border border-transparent',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
      {...props}
    >
      <span>{children}</span>
      {iconRight && <span className="transition-transform duration-150 group-hover:translate-x-0.5">{iconRight}</span>}
    </button>
  );
};
