import React, { useState } from 'react';
import { FreedomFighter, LanguageCode } from '../types';
import { MapPin, Compass, ArrowRight, UserCheck } from 'lucide-react';
import { FighterImage } from './FighterImage';
import { getLocalizedFighter, t } from '../data/translations';

interface RegionalExplorerProps {
  fighters: FreedomFighter[];
  onSelectFighter: (fighter: FreedomFighter) => void;
  onFilterByRegion: (region: string) => void;
  currentLanguage?: LanguageCode;
}

export const RegionalExplorer: React.FC<RegionalExplorerProps> = ({
  fighters,
  onSelectFighter,
  onFilterByRegion,
  currentLanguage = 'en',
}) => {
  // Extract canonical states/regions
  const regionMap: { [key: string]: FreedomFighter[] } = {};

  fighters.forEach((fighter) => {
    // Normalizing region string to primary state name
    let primaryRegion = 'Other Regions';
    const r = fighter.region.toLowerCase();
    if (r.includes('punjab')) primaryRegion = 'Punjab';
    else if (r.includes('uttar pradesh') || r.includes('awadh') || r.includes('ballia')) primaryRegion = 'Uttar Pradesh';
    else if (r.includes('bengal') || r.includes('calcutta') || r.includes('chittagong')) primaryRegion = 'Bengal Presidency';
    else if (r.includes('gujarat')) primaryRegion = 'Gujarat';
    else if (r.includes('maharashtra') || r.includes('pune') || r.includes('mumbai')) primaryRegion = 'Maharashtra';
    else if (r.includes('tamil nadu')) primaryRegion = 'Tamil Nadu';
    else if (r.includes('andhra')) primaryRegion = 'Andhra Pradesh';
    else if (r.includes('bihar')) primaryRegion = 'Bihar';
    else if (r.includes('jharkhand')) primaryRegion = 'Jharkhand';
    else if (r.includes('manipur') || r.includes('nagaland')) primaryRegion = 'North-East (Manipur/Nagaland)';
    else if (r.includes('madhya pradesh')) primaryRegion = 'Madhya Pradesh';
    else if (r.includes('north-west frontier')) primaryRegion = 'North-West Frontier';
    else if (r.includes('odisha')) primaryRegion = 'Odisha';
    else if (r.includes('delhi')) primaryRegion = 'Delhi';

    if (!regionMap[primaryRegion]) {
      regionMap[primaryRegion] = [];
    }
    regionMap[primaryRegion].push(fighter);
  });

  const regions = Object.keys(regionMap).sort(
    (a, b) => regionMap[b].length - regionMap[a].length
  );

  const [activeRegion, setActiveRegion] = useState<string>(regions[0] || 'Punjab');

  const selectedFighters = regionMap[activeRegion] || [];

  return (
    <div id="regional-explorer-container" className="space-y-6">
      {/* Overview Banner */}
      <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="font-cinzel text-xl font-bold text-stone-900 flex items-center gap-2">
            <Compass className="w-5 h-5 text-emerald-700" />
            <span>Regional Epicenters of the Independence Struggle</span>
          </h2>
          <p className="text-xs text-stone-600 mt-1">
            Discover how every corner of the Indian subcontinent contributed fearless leaders, revolutionaries, and martyrs to the struggle between 1857 and 1947.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-stone-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
          <UserCheck className="w-4 h-4 text-emerald-700" />
          <span>{regions.length} Distinct Regions Represented</span>
        </div>
      </div>

      {/* Two-column layout: Region selector pill grid & Selected Region Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Region Pills */}
        <div className="lg:col-span-4 space-y-2">
          <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider px-1">
            Select State or Territory
          </h3>
          <div className="flex flex-row lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {regions.map((reg) => {
              const count = regionMap[reg].length;
              const isSelected = activeRegion === reg;
              return (
                <button
                  key={reg}
                  id={`btn-region-tab-${reg.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  onClick={() => setActiveRegion(reg)}
                  className={`flex items-center justify-between p-3 rounded-xl text-left text-xs font-medium border transition-all shrink-0 lg:shrink ${
                    isSelected
                      ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                      : 'bg-white text-stone-700 border-stone-200 hover:border-amber-300 hover:bg-stone-50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <MapPin
                      className={`w-3.5 h-3.5 ${
                        isSelected ? 'text-amber-200' : 'text-amber-700'
                      }`}
                    />
                    <span className="font-semibold">{reg}</span>
                  </div>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full font-mono font-bold ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-stone-100 text-stone-600'
                    }`}
                  >
                    {count} {count === 1 ? 'Hero' : 'Heroes'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Active Region Freedom Fighters */}
        <div className="lg:col-span-8 bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                Regional Spotlight
              </span>
              <h3 className="font-cinzel text-xl font-bold text-stone-900 mt-0.5">
                {activeRegion} ({selectedFighters.length} Freedom Fighters)
              </h3>
            </div>

            <button
              onClick={() => onFilterByRegion(activeRegion)}
              className="text-xs font-semibold text-amber-800 hover:text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-3 py-1.5 rounded-lg flex items-center gap-1 transition-colors"
            >
              <span>Filter in Card Grid</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* List of fighters from this region */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedFighters.map((f) => {
              const locF = getLocalizedFighter(f, currentLanguage);
              return (
                <div
                  key={f.id}
                  id={`regional-card-${f.id}`}
                  onClick={() => onSelectFighter(locF)}
                  className="group flex gap-3.5 p-3 rounded-xl border border-stone-200/80 hover:border-amber-400 hover:shadow-md transition-all cursor-pointer bg-stone-50/50 hover:bg-white"
                >
                  <div className="shrink-0 w-16 h-20 rounded-lg overflow-hidden border border-stone-200 group-hover:border-amber-500 transition-colors">
                    <FighterImage
                      src={f.photo_url}
                      alt={f.name}
                      fighterName={f.name}
                      years={f.years}
                      className="w-full h-full"
                    />
                  </div>

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-stone-500 font-semibold">
                        {f.years}
                      </span>
                      <h4 className="font-cinzel text-sm font-bold text-stone-900 group-hover:text-amber-800 line-clamp-1">
                        {locF.name}
                      </h4>
                      {currentLanguage !== 'en' && locF.name !== f.name && (
                        <p className="text-[10px] text-stone-400 font-sans-modern">
                          {f.name}
                        </p>
                      )}
                      <p className="text-[11px] text-stone-600 line-clamp-2 mt-0.5 leading-snug font-sans-modern">
                        {locF.contribution}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-amber-700 font-semibold mt-1">
                      <span>{f.role}</span>
                      <span className="group-hover:translate-x-0.5 transition-transform flex items-center">
                        {t('viewBioBtn', currentLanguage)} &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

