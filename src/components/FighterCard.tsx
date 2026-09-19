import React from 'react';
import { FreedomFighter, LanguageCode } from '../types';
import { FighterImage } from './FighterImage';
import { getLocalizedFighter, t } from '../data/translations';
import { MapPin, Calendar, Star, ChevronRight, Bookmark, BookmarkCheck } from 'lucide-react';

interface FighterCardProps {
  fighter: FreedomFighter;
  onSelect: (fighter: FreedomFighter) => void;
  onEventClick?: (event: string) => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  currentLanguage?: LanguageCode;
}

export const FighterCard: React.FC<FighterCardProps> = ({
  fighter,
  onSelect,
  onEventClick,
  isBookmarked,
  onToggleBookmark,
  currentLanguage = 'en',
}) => {
  const locFighter = getLocalizedFighter(fighter, currentLanguage);

  const getRoleBadgeColor = (role: FreedomFighter['role']) => {
    switch (role) {
      case 'Revolutionary':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'National Leader':
        return 'bg-blue-50 text-blue-800 border-blue-200';
      case 'Armed Resistance':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'Pioneer Martyr':
        return 'bg-purple-50 text-purple-800 border-purple-200';
      default:
        return 'bg-emerald-50 text-emerald-800 border-emerald-200';
    }
  };

  return (
    <article
      id={`fighter-card-${fighter.id}`}
      className="group relative flex flex-col bg-white rounded-xl border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 overflow-hidden"
    >
      {/* Top subtle tricolor accent border line on hover */}
      <div className="h-1 w-full bg-stone-100 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:via-blue-800 group-hover:to-emerald-600 transition-all duration-300" />

      {/* Image and Header Header */}
      <div className="relative p-4 pb-3">
        <div className="flex gap-4">
          {/* Portrait Container with regal frame */}
          <div className="relative shrink-0 w-24 h-32 sm:w-28 sm:h-36 rounded-lg overflow-hidden border-2 border-stone-200 shadow-sm group-hover:border-amber-500 transition-colors">
            <FighterImage
              src={fighter.photo_url}
              alt={fighter.name}
              fighterName={fighter.name}
              years={fighter.years}
              className="w-full h-full"
            />
            {/* Lifespan pill overlay at bottom of portrait */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-1 pt-3 text-center">
              <span className="text-[10px] font-mono font-medium text-white tracking-wider">
                {fighter.years}
              </span>
            </div>
          </div>

          {/* Core Info */}
          <div className="flex-1 flex flex-col min-w-0 justify-between">
            <div>
              {/* Top row: role badge and bookmark */}
              <div className="flex items-center justify-between gap-1 mb-1">
                <span
                  className={`inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full border ${getRoleBadgeColor(
                    fighter.role
                  )}`}
                >
                  {fighter.role}
                </span>

                <button
                  id={`btn-bookmark-${fighter.id}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleBookmark(fighter.id);
                  }}
                  title={isBookmarked ? 'Remove from Bookmarks' : 'Add to Bookmarks'}
                  className="p-1.5 rounded-full text-stone-400 hover:text-amber-600 hover:bg-amber-50 transition-colors"
                  aria-label="Bookmark freedom fighter"
                >
                  {isBookmarked ? (
                    <BookmarkCheck className="w-4 h-4 text-amber-600 fill-amber-500" />
                  ) : (
                    <Bookmark className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Epithet / Title */}
              {(locFighter.titleOrEpithet || fighter.titleOrEpithet) && (
                <p className="text-[11px] font-semibold tracking-wide text-amber-800 uppercase line-clamp-1 mb-0.5">
                  {locFighter.titleOrEpithet || fighter.titleOrEpithet}
                </p>
              )}

              {/* Full Name */}
              <h3
                id={`fighter-name-${fighter.id}`}
                onClick={() => onSelect(locFighter)}
                className="font-cinzel text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors cursor-pointer line-clamp-2 leading-snug"
              >
                {locFighter.name}
              </h3>
              {currentLanguage !== 'en' && locFighter.name !== fighter.name && (
                <span className="text-[11px] text-stone-400 font-sans-modern line-clamp-1">
                  {fighter.name}
                </span>
              )}

              {/* Region */}
              <div className="flex items-center gap-1 mt-1 text-xs text-stone-600">
                <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                <span className="line-clamp-1 font-medium">{fighter.region}</span>
              </div>
            </div>

            {/* Historical Era tag */}
            <div className="mt-2 text-[11px] text-stone-500 font-mono">
              Active Era: <span className="font-medium text-stone-700">{fighter.era}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Body: Contribution */}
      <div className="px-4 pb-3 flex-1 flex flex-col justify-between">
        <div className="border-t border-stone-100 pt-2.5">
          <p className="text-xs text-stone-700 line-clamp-3 leading-relaxed">
            <span className="font-semibold text-stone-900">
              {t('contributionLabel', currentLanguage)}{' '}
            </span>
            {locFighter.contribution}
          </p>
        </div>

        {/* Major Events Tags */}
        <div className="mt-3">
          <p className="text-[10px] uppercase font-semibold text-stone-400 tracking-wider mb-1.5">
            {t('keyMovementsLabel', currentLanguage)}
          </p>
          <div className="flex flex-wrap gap-1">
            {fighter.events.slice(0, 3).map((event) => (
              <button
                key={event}
                id={`btn-event-${fighter.id}-${event.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onEventClick?.(event);
                }}
                className="text-[11px] px-2 py-0.5 rounded bg-stone-100 text-stone-700 hover:bg-amber-100 hover:text-amber-900 border border-stone-200 transition-colors text-left"
              >
                {event}
              </button>
            ))}
            {fighter.events.length > 3 && (
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-stone-50 text-stone-500">
                +{fighter.events.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer: Action Button */}
      <div className="p-3 bg-stone-50/80 border-t border-stone-100 flex items-center justify-between">
        {locFighter.famousQuote ? (
          <span className="text-[11px] italic text-stone-500 line-clamp-1 max-w-[55%]">
            "{locFighter.famousQuote}"
          </span>
        ) : (
          <span className="text-[11px] text-stone-400">1857–1947 Freedom Legacy</span>
        )}

        <button
          id={`btn-view-bio-${fighter.id}`}
          onClick={() => onSelect(locFighter)}
          className="inline-flex items-center gap-1 text-xs font-semibold text-amber-800 hover:text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200/80 px-2.5 py-1.5 rounded-lg transition-colors"
        >
          <span>{t('viewBioBtn', currentLanguage)}</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </article>
  );
};

