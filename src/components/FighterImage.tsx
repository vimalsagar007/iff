import React, { useState } from 'react';
import { ShieldAlert } from 'lucide-react';

interface FighterImageProps {
  src: string;
  alt: string;
  className?: string;
  fighterName: string;
  years?: string;
}

export const FighterImage: React.FC<FighterImageProps> = ({
  src,
  alt,
  className = '',
  fighterName,
  years,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Derive initials
  const initials = fighterName
    .split(' ')
    .filter((n) => !['Dr.', 'V.O.', 'Madam', 'Pandit'].includes(n))
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();

  if (hasError || !src) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 via-stone-100 to-amber-100 text-stone-700 border border-amber-200/80 overflow-hidden ${className}`}
      >
        {/* Tricolor aura background */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="h-1/3 bg-amber-500 w-full" />
          <div className="h-1/3 bg-white w-full" />
          <div className="h-1/3 bg-emerald-600 w-full" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center p-3 text-center">
          <div className="w-16 h-16 rounded-full border-2 border-amber-700/30 flex items-center justify-center bg-white/80 shadow-inner mb-2">
            <span className="font-cinzel text-xl font-bold tracking-wider text-amber-900">
              {initials || 'IN'}
            </span>
          </div>
          <span className="text-xs font-semibold text-stone-800 line-clamp-1 max-w-[120px]">
            {fighterName}
          </span>
          {years && (
            <span className="text-[10px] text-stone-500 font-mono mt-0.5">
              {years}
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-stone-100 ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-stone-100 animate-pulse">
          <div className="w-8 h-8 rounded-full border-2 border-amber-500 border-t-transparent animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        className={`w-full h-full object-cover object-top transition-all duration-300 ${
          isLoading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
        }`}
      />
    </div>
  );
};
