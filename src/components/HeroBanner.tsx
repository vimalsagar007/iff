import React from 'react';
import { AshokaChakra } from './AshokaChakra';
import { Flame } from 'lucide-react';
import { LanguageCode } from '../types';
import { t } from '../data/translations';

interface HeroBannerProps {
  currentLanguage?: LanguageCode;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ currentLanguage = 'en' }) => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-900 via-stone-900 to-emerald-950 text-white p-6 sm:p-10 shadow-lg border border-stone-800">
      {/* Background Ashoka Chakra Watermark */}
      <div className="absolute -right-16 -bottom-16 opacity-10 pointer-events-none">
        <AshokaChakra size={340} animate={true} />
      </div>

      {/* Subtle tricolor gradient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-semibold mb-4">
          <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span>{t('heroTag', currentLanguage)}</span>
        </div>

        {/* Headline */}
        <h1 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          {t('heroTitle', currentLanguage)}
        </h1>

        <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans-modern">
          {t('heroDescription', currentLanguage)}
        </p>

        {/* Historical Impact Metric Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-white/15">
          <div className="bg-white/5 backdrop-blur-xs p-3 rounded-xl border border-white/10">
            <span className="font-mono text-xl font-bold text-amber-400">90 Years</span>
            <p className="text-[11px] text-stone-300 mt-0.5">Epic Struggle (1857–1947)</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xs p-3 rounded-xl border border-white/10">
            <span className="font-mono text-xl font-bold text-emerald-400">All India</span>
            <p className="text-[11px] text-stone-300 mt-0.5">North, South, East & West</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xs p-3 rounded-xl border border-white/10">
            <span className="font-mono text-xl font-bold text-blue-400">Diverse Ideals</span>
            <p className="text-[11px] text-stone-300 mt-0.5">Satyagraha to Armed Revolt</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xs p-3 rounded-xl border border-white/10">
            <span className="font-mono text-xl font-bold text-stone-200">Immortal</span>
            <p className="text-[11px] text-stone-300 mt-0.5">Documented Legacies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

