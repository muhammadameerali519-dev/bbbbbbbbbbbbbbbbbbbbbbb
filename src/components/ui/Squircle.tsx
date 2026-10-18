import React from 'react';

export type SquircleVariant = 'gold' | 'dark' | 'emerald' | 'crimson' | 'glass';
export type SquircleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface SquircleIconProps {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  variant?: SquircleVariant;
  size?: SquircleSize;
  className?: string;
  onClick?: () => void;
  title?: string;
  ariaLabel?: string;
}

const sizeClasses: Record<SquircleSize, string> = {
  xs: 'w-7 h-7',
  sm: 'w-9 h-9',
  md: 'w-11 h-11',
  lg: 'w-13 h-13',
  xl: 'w-16 h-16',
};

const variantStyles: Record<SquircleVariant, string> = {
  gold: 'bg-gradient-to-b from-[#FFD54F] via-[#FFC107] to-[#C79100] text-[#0A0A0A] border-t border-white/50 shadow-[0_6px_16px_rgba(255,193,7,0.3),inset_0_1px_1px_rgba(255,255,255,0.6)]',
  dark: 'bg-gradient-to-b from-[#24211D] to-[#141210] text-[#FFC107] border border-gold/25 border-t-white/20 shadow-[0_6px_20px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.12)]',
  emerald: 'bg-gradient-to-b from-[#34D399] via-[#10B981] to-[#059669] text-white border-t border-white/40 shadow-[0_8px_24px_rgba(16,185,129,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)]',
  crimson: 'bg-gradient-to-b from-[#EF4444] to-[#B91C1C] text-white border-t border-white/30 shadow-[0_6px_16px_rgba(220,38,38,0.35),inset_0_1px_1px_rgba(255,255,255,0.3)]',
  glass: 'bg-white/10 backdrop-blur-md text-white border border-white/15 border-t-white/30 shadow-[0_6px_20px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.15)]',
};

export default function Squircle({
  icon,
  children,
  variant = 'dark',
  size = 'md',
  className = '',
  onClick,
  title,
  ariaLabel,
}: SquircleIconProps) {
  const content = icon || children;

  const baseStyle: React.CSSProperties = {
    borderRadius: '24%', // Apple standard squircle approximation
    transformStyle: 'preserve-3d',
  };

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        title={title}
        aria-label={ariaLabel || title}
        style={baseStyle}
        className={`relative inline-flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-[1.04] active:scale-[0.96] active:translate-y-0.5 select-none shrink-0 ${sizeClasses[size]} ${variantStyles[variant]} ${className}`}
      >
        <span className="relative z-10 flex items-center justify-center">
          {content}
        </span>
      </button>
    );
  }

  return (
    <div
      title={title}
      aria-label={ariaLabel || title}
      style={baseStyle}
      className={`relative inline-flex items-center justify-center transition-transform duration-200 select-none shrink-0 ${sizeClasses[size]} ${variantStyles[variant]} ${className}`}
    >
      <span className="relative z-10 flex items-center justify-center">
        {content}
      </span>
    </div>
  );
}
