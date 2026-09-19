import React from 'react';
import { Search, X, Filter, RotateCcw, Languages } from 'lucide-react';
import { MAJOR_MOVEMENTS } from '../data/freedomFighters';
import { LanguageCode } from '../types';
import { t, SUPPORTED_LANGUAGES } from '../data/translations';

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedMovement: string;
  onSelectMovement: (movement: string) => void;
  selectedEra: string;
  onSelectEra: (era: string) => void;
  selectedRole: string;
  onSelectRole: (role: string) => void;
  totalCount: number;
  filteredCount: number;
  onResetFilters: () => void;
  hasActiveFilters: boolean;
  currentLanguage: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedMovement,
  onSelectMovement,
  selectedEra,
  onSelectEra,
  selectedRole,
  onSelectRole,
  totalCount,
  filteredCount,
  onResetFilters,
  hasActiveFilters,
  currentLanguage,
  onLanguageChange,
}) => {
  return (
    <div className="bg-white rounded-2xl border border-stone-200/90 p-4 sm:p-5 shadow-xs space-y-4">
      {/* Top Row: Regional Language Quick Switcher */}
      <div className="flex items-center justify-between gap-2 overflow-x-auto pb-1 text-xs border-b border-stone-100">
        <div className="flex items-center gap-1.5 shrink-0 text-stone-500 font-semibold">
          <Languages className="w-3.5 h-3.5 text-amber-700" />
          <span className="text-[11px] uppercase tracking-wider text-stone-400">
            {t('languageSelectorLabel', currentLanguage)}:
          </span>
        </div>

        <div className="flex items-center gap-1 overflow-x-auto scrollbar-none">
          {SUPPORTED_LANGUAGES.map((lang) => {
            const isSelected = lang.code === currentLanguage;
            return (
              <button
                key={lang.code}
                id={`chip-lang-${lang.code}`}
                onClick={() => onLanguageChange(lang.code)}
                className={`px-2 py-0.5 rounded-lg text-xs transition-all shrink-0 ${
                  isSelected
                    ? 'bg-amber-700 text-white font-bold shadow-2xs'
                    : 'bg-stone-50 text-stone-700 hover:bg-stone-100 hover:text-stone-900 border border-stone-200/60'
                }`}
                title={`Switch display & audio narration to ${lang.name} (${lang.nativeName})`}
              >
                <span className="font-semibold">{lang.nativeName}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Search Input Bar */}
      <div className="relative flex items-center">
        <div className="absolute left-3.5 pointer-events-none text-stone-400">
          <Search className="w-5 h-5 text-amber-700/80" />
        </div>
        <input
          id="search-freedom-fighters"
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={t('searchPlaceholder', currentLanguage)}
          className="w-full pl-11 pr-10 py-3 rounded-xl border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-sm text-stone-900 placeholder:text-stone-400 outline-none transition-all bg-stone-50/50 focus:bg-white"
        />
        {searchQuery && (
          <button
            id="btn-clear-search"
            onClick={() => onSearchChange('')}
            className="absolute right-3 p-1 rounded-md text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Secondary Row: Select Dropdowns & Results count */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {/* Era Filter Dropdown */}
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-stone-500 hidden sm:inline">
              {t('filterEra', currentLanguage)}
            </span>
            <select
              id="select-filter-era"
              value={selectedEra}
              onChange={(e) => onSelectEra(e.target.value)}
              className="px-2.5 py-1.5 rounded-lg border border-stone-200 bg-white text-stone-800 font-medium focus:border-amber-500 outline-none cursor-pointer text-xs"
            >
              <option value="all">{t('allEras', currentLanguage)}</option>
              <option value="1857-1885">1857–1885 (The Great Revolt)</option>
              <option value="1885-1919">1885–1919 (Swadeshi & Moderates)</option>
              <option value="1919-1939">1919–1939 (Mass Satyagraha & HSRA)</option>
              <option value="1939-1947">1939–1947 (Quit India & INA)</option>
            </select>
          </div>

          {/* Role Filter Dropdown */}
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-stone-500 hidden sm:inline">
              {t('filterRole', currentLanguage)}
            </span>
            <select
              id="select-filter-role"
              value={selectedRole}
              onChange={(e) => onSelectRole(e.target.value)}
              className="px-2.5 py-1.5 rounded-lg border border-stone-200 bg-white text-stone-800 font-medium focus:border-amber-500 outline-none cursor-pointer text-xs"
            >
              <option value="all">{t('allRoles', currentLanguage)}</option>
              <option value="Revolutionary">Revolutionaries & HSRA</option>
              <option value="National Leader">National & Mass Leaders</option>
              <option value="Armed Resistance">Armed & Royal Resistance</option>
              <option value="Pioneer Martyr">Pioneer Martyrs</option>
              <option value="Social Reformer & Leader">Social Reformers & Jurists</option>
            </select>
          </div>

          {/* Reset Filters button if any filter is active */}
          {hasActiveFilters && (
            <button
              id="btn-reset-filters"
              onClick={onResetFilters}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-amber-800 hover:text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 font-semibold transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>{t('resetFilters', currentLanguage)}</span>
            </button>
          )}
        </div>

        {/* Results Counter */}
        <div className="text-stone-500 font-mono text-xs">
          {t('showingCount', currentLanguage)}{' '}
          <strong className="text-stone-900">{filteredCount}</strong>{' '}
          {t('ofCount', currentLanguage)} {totalCount}
        </div>
      </div>

      {/* Movement Filter Quick Chips */}
      <div className="pt-2 border-t border-stone-100">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider shrink-0 mr-1">
            {t('keyMovementsLabel', currentLanguage)}:
          </span>
          {MAJOR_MOVEMENTS.map((mov) => {
            const isSelected =
              (mov === 'All Movements' && selectedMovement === 'all') ||
              selectedMovement === mov;
            return (
              <button
                key={mov}
                id={`chip-movement-${mov.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => onSelectMovement(mov === 'All Movements' ? 'all' : mov)}
                className={`px-2.5 py-1 rounded-full whitespace-nowrap transition-all font-medium border ${
                  isSelected
                    ? 'bg-amber-600 text-white border-amber-600 shadow-2xs'
                    : 'bg-stone-50 text-stone-700 border-stone-200/80 hover:border-amber-300 hover:bg-stone-100'
                }`}
              >
                {mov}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

