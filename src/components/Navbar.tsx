import React from 'react';
import { ViewMode, LanguageCode } from '../types';
import { AshokaChakra } from './AshokaChakra';
import { LanguageSelector } from './LanguageSelector';
import { t } from '../data/translations';
import {
  LayoutGrid,
  Calendar,
  Compass,
  FileJson,
  Bookmark,
  Music,
  Sparkles,
} from 'lucide-react';

interface NavbarProps {
  currentView: ViewMode;
  onSelectView: (view: ViewMode) => void;
  bookmarksCount: number;
  showOnlyBookmarks: boolean;
  onToggleShowBookmarks: () => void;
  onOpenJsonModal: () => void;
  currentLanguage: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
  isMusicPlaying?: boolean;
  onToggleMusic?: () => void;
  onOpenMusicModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onSelectView,
  bookmarksCount,
  showOnlyBookmarks,
  onToggleShowBookmarks,
  onOpenJsonModal,
  currentLanguage,
  onLanguageChange,
  isMusicPlaying = false,
  onToggleMusic,
  onOpenMusicModal,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/90 shadow-2xs">
      {/* Patriotic Tricolor Top Line */}
      <div className="h-1.5 w-full tricolor-stripe" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3">
          {/* Brand & Emblem */}
          <div
            id="brand-logo"
            onClick={() => onSelectView('grid')}
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group shrink-0"
          >
            <div className="relative flex items-center justify-center">
              <AshokaChakra size={34} animate={true} className="text-blue-900" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-cinzel text-base sm:text-lg lg:text-xl font-black tracking-tight text-stone-900 group-hover:text-amber-800 transition-colors">
                  {t('appTitle', currentLanguage)}
                </h1>
                <span className="hidden lg:inline-flex items-center text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
                  1857 – 1947
                </span>
              </div>
              <p className="text-[11px] text-stone-500 hidden md:block">
                {t('appSubtitle', currentLanguage)}
              </p>
            </div>
          </div>

          {/* Center/Right Navigation Views & Language Selector */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* View Switchers */}
            <div className="flex bg-stone-100 p-1 rounded-xl border border-stone-200 text-xs font-semibold">
              <button
                id="tab-view-grid"
                onClick={() => onSelectView('grid')}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg transition-all ${
                  currentView === 'grid'
                    ? 'bg-white text-stone-900 shadow-xs font-bold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
                title="Grid Card View"
              >
                <LayoutGrid className="w-3.5 h-3.5 text-amber-700" />
                <span className="hidden sm:inline">{t('cardsTab', currentLanguage)}</span>
              </button>

              <button
                id="tab-view-timeline"
                onClick={() => onSelectView('timeline')}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg transition-all ${
                  currentView === 'timeline'
                    ? 'bg-white text-stone-900 shadow-xs font-bold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
                title="Chronological Timeline (1857 → 1947)"
              >
                <Calendar className="w-3.5 h-3.5 text-blue-800" />
                <span>{t('timelineTab', currentLanguage)}</span>
              </button>

              <button
                id="tab-view-regions"
                onClick={() => onSelectView('regions')}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg transition-all ${
                  currentView === 'regions'
                    ? 'bg-white text-stone-900 shadow-xs font-bold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
                title="Regional State Breakdown"
              >
                <Compass className="w-3.5 h-3.5 text-emerald-700" />
                <span className="hidden sm:inline">{t('regionsTab', currentLanguage)}</span>
              </button>
            </div>

            {/* Background Music Quick Button */}
            {onToggleMusic && (
              <button
                id="btn-nav-music-toggle"
                onClick={onToggleMusic}
                title={isMusicPlaying ? 'Pause Freedom Anthem' : 'Play Background Music (Goosebumps Audio)'}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                  isMusicPlaying
                    ? 'bg-gradient-to-r from-amber-600 to-orange-500 text-white border-amber-500 shadow-sm animate-pulse'
                    : 'bg-white text-stone-700 border-stone-200 hover:border-amber-400 hover:bg-stone-50'
                }`}
              >
                <Music className={`w-3.5 h-3.5 ${isMusicPlaying ? 'text-white' : 'text-amber-600'}`} />
                <span className="hidden md:inline">
                  {isMusicPlaying ? 'Anthem On' : 'Music'}
                </span>
                {isMusicPlaying && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                )}
              </button>
            )}

            {/* Language Selector Dropdown */}
            <LanguageSelector
              currentLanguage={currentLanguage}
              onLanguageChange={onLanguageChange}
              compact={false}
            />

            {/* Bookmarks Toggle */}
            <button
              id="btn-nav-bookmarks"
              onClick={onToggleShowBookmarks}
              title={showOnlyBookmarks ? 'Show All Fighters' : 'Show Saved Bookmarks'}
              className={`flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                showOnlyBookmarks
                  ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                  : 'bg-white text-stone-700 border-stone-200 hover:border-amber-300'
              }`}
            >
              <Bookmark
                className={`w-3.5 h-3.5 ${
                  showOnlyBookmarks ? 'fill-white' : 'text-stone-500'
                }`}
              />
              <span className="hidden xl:inline">{t('savedTab', currentLanguage)}</span>
              {bookmarksCount > 0 && (
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
                    showOnlyBookmarks
                      ? 'bg-white/20 text-white'
                      : 'bg-amber-100 text-amber-900'
                  }`}
                >
                  {bookmarksCount}
                </span>
              )}
            </button>

            {/* JSON Output Button */}
            <button
              id="btn-nav-json"
              onClick={onOpenJsonModal}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-stone-900 text-stone-100 hover:bg-stone-800 text-xs font-semibold transition-colors border border-stone-700 shadow-xs"
              title="View & Export Structured JSON"
            >
              <FileJson className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden lg:inline">{t('jsonDataTab', currentLanguage)}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};


