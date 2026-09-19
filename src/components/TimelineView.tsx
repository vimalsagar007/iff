import React, { useState } from 'react';
import { FreedomFighter, LanguageCode } from '../types';
import { HISTORICAL_MILESTONES } from '../data/freedomFighters';
import { FighterImage } from './FighterImage';
import { getLocalizedFighter, t } from '../data/translations';
import { Calendar, ChevronRight, Flag, Compass, Award } from 'lucide-react';

interface TimelineViewProps {
  fighters: FreedomFighter[];
  onSelectFighter: (fighter: FreedomFighter) => void;
  currentLanguage?: LanguageCode;
}

export const TimelineView: React.FC<TimelineViewProps> = ({
  fighters,
  onSelectFighter,
  currentLanguage = 'en',
}) => {
  const [selectedMilestone, setSelectedMilestone] = useState<string>('all');

  // Sort fighters chronologically by birthYear
  const sortedFighters = [...fighters].sort((a, b) => a.birthYear - b.birthYear);

  const filterByEra = (era: string) => {
    if (selectedMilestone === 'all') return sortedFighters;
    return sortedFighters.filter((f) => f.era === selectedMilestone);
  };

  const currentFighters = filterByEra(selectedMilestone);

  return (
    <div id="timeline-view-container" className="space-y-8">
      {/* Timeline Header & Era Filter Chips */}
      <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-stone-100">
          <div>
            <h2 className="font-cinzel text-xl font-bold text-stone-900 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-amber-600" />
              <span>{t('timelineTitle', currentLanguage)}</span>
            </h2>
            <p className="text-xs text-stone-600 mt-1">
              {t('timelineSubtitle', currentLanguage)}
            </p>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs font-semibold text-stone-500 mr-1">
              {t('filterEra', currentLanguage)}:
            </span>
            <button
              id="timeline-filter-all"
              onClick={() => setSelectedMilestone('all')}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                selectedMilestone === 'all'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {t('allEras', currentLanguage)}
            </button>
            <button
              id="timeline-filter-1857"
              onClick={() => setSelectedMilestone('1857-1885')}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                selectedMilestone === '1857-1885'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              1857–1885: The Great Revolt
            </button>
            <button
              id="timeline-filter-1885"
              onClick={() => setSelectedMilestone('1885-1919')}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                selectedMilestone === '1885-1919'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              1885–1919: Early Swadeshi
            </button>
            <button
              id="timeline-filter-1919"
              onClick={() => setSelectedMilestone('1919-1939')}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                selectedMilestone === '1919-1939'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              1919–1939: Mass Satyagraha & HSRA
            </button>
            <button
              id="timeline-filter-1939"
              onClick={() => setSelectedMilestone('1939-1947')}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                selectedMilestone === '1939-1947'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              1939–1947: Quit India & Freedom
            </button>
          </div>
        </div>

        {/* Milestone Epoch Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 pt-4">
          {HISTORICAL_MILESTONES.map((m) => (
            <div
              key={m.year}
              className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/70 hover:border-amber-400 hover:bg-amber-50/50 transition-colors"
            >
              <span className="font-mono text-xs font-extrabold text-amber-700">
                {m.year}
              </span>
              <h4 className="text-[11px] font-bold text-stone-900 line-clamp-1 mt-0.5">
                {m.title}
              </h4>
              <p className="text-[10px] text-stone-500 line-clamp-2 mt-1 leading-tight">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Chronological Vertical Spine with Fighters */}
      <div className="relative pl-6 md:pl-10 space-y-6">
        {/* The Central / Left Timeline Spine */}
        <div className="absolute top-4 bottom-4 left-3 md:left-5 w-1 bg-gradient-to-b from-amber-500 via-blue-900 to-emerald-600 rounded-full" />

        {currentFighters.map((fighter) => {
          const locFighter = getLocalizedFighter(fighter, currentLanguage);
          return (
            <div
              key={fighter.id}
              id={`timeline-node-${fighter.id}`}
              className="relative flex flex-col md:flex-row items-start gap-4 p-4 md:p-5 bg-white rounded-2xl border border-stone-200 shadow-xs hover:shadow-md hover:border-amber-400 transition-all duration-200 ml-4 group"
            >
              {/* Timeline Node Bead */}
              <div className="absolute -left-[30px] md:-left-[38px] top-6 w-5 h-5 rounded-full bg-white border-4 border-amber-600 shadow-sm flex items-center justify-center group-hover:scale-125 transition-transform" />

              {/* Year Tag on Timeline */}
              <div className="shrink-0 flex flex-col items-start md:items-center justify-center md:w-28 text-left md:text-center border-b md:border-b-0 md:border-r border-stone-100 pb-2 md:pb-0 md:pr-4">
                <span className="font-mono text-base font-extrabold text-amber-900 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60">
                  {fighter.years}
                </span>
                <span className="text-[11px] font-medium text-stone-500 mt-1">
                  Born {fighter.birthYear}
                </span>
                <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider mt-0.5">
                  {fighter.era}
                </span>
              </div>

              {/* Fighter Small Portrait */}
              <div
                onClick={() => onSelectFighter(locFighter)}
                className="relative shrink-0 w-20 h-28 rounded-lg overflow-hidden border border-stone-200 shadow-xs cursor-pointer group-hover:border-amber-500 transition-colors"
              >
                <FighterImage
                  src={fighter.photo_url}
                  alt={fighter.name}
                  fighterName={fighter.name}
                  years={fighter.years}
                  className="w-full h-full"
                />
              </div>

              {/* Details */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    {(locFighter.titleOrEpithet || fighter.titleOrEpithet) && (
                      <span className="text-[11px] font-bold text-amber-800 tracking-wide uppercase mr-2">
                        {locFighter.titleOrEpithet || fighter.titleOrEpithet}
                      </span>
                    )}
                    <h3
                      onClick={() => onSelectFighter(locFighter)}
                      className="font-cinzel text-lg font-bold text-stone-900 hover:text-amber-800 cursor-pointer inline transition-colors"
                    >
                      {locFighter.name}
                    </h3>
                    {currentLanguage !== 'en' && locFighter.name !== fighter.name && (
                      <span className="text-xs text-stone-400 ml-2 font-sans-modern">
                        ({fighter.name})
                      </span>
                    )}
                  </div>

                  <span className="text-xs px-2.5 py-0.5 rounded-full font-medium bg-stone-100 text-stone-700 border border-stone-200">
                    {fighter.region}
                  </span>
                </div>

                {/* Biography snippet */}
                <p className="text-xs text-stone-700 mt-2 leading-relaxed line-clamp-2 font-sans-modern">
                  {locFighter.bio}
                </p>

                {/* Key Contribution */}
                <div className="mt-2 text-xs bg-stone-50 p-2 rounded-lg border border-stone-100 text-stone-800 font-sans-modern">
                  <span className="font-semibold text-stone-900">
                    {t('contributionLabel', currentLanguage)}:{' '}
                  </span>
                  {locFighter.contribution}
                </div>

                {/* Major Events & Explore Button */}
                <div className="flex flex-wrap items-center justify-between gap-2 mt-3 pt-2 border-t border-stone-100">
                  <div className="flex flex-wrap gap-1">
                    {fighter.events.map((ev) => (
                      <span
                        key={ev}
                        className="text-[10px] px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200/50"
                      >
                        {ev}
                      </span>
                    ))}
                  </div>

                  <button
                    id={`timeline-btn-bio-${fighter.id}`}
                    onClick={() => onSelectFighter(locFighter)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 hover:text-amber-900"
                  >
                    <span>{t('viewBioBtn', currentLanguage)}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

