import React, { useState, useRef, useEffect } from 'react';
import { LanguageCode } from '../types';
import { SUPPORTED_LANGUAGES } from '../data/translations';
import { Languages, Check, Globe, ChevronDown } from 'lucide-react';

interface LanguageSelectorProps {
  currentLanguage: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
  compact?: boolean;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onLanguageChange,
  compact = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeLang =
    SUPPORTED_LANGUAGES.find((l) => l.code === currentLanguage) ||
    SUPPORTED_LANGUAGES[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        id="btn-language-selector"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 rounded-xl border transition-all ${
          isOpen
            ? 'bg-amber-50 border-amber-400 text-amber-900 shadow-xs'
            : 'bg-white hover:bg-stone-50 border-stone-200 text-stone-800'
        } ${compact ? 'px-2.5 py-1.5 text-xs' : 'px-3 py-2 text-xs sm:text-sm font-medium'}`}
        title="Select regional language for translation and reading"
      >
        <Languages className="w-4 h-4 text-amber-700 shrink-0" />
        <span className="font-semibold">{activeLang.nativeName}</span>
        <span className="text-[11px] text-stone-400 hidden sm:inline">
          ({activeLang.name})
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-stone-500 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div
          id="language-dropdown-menu"
          className="absolute right-0 mt-2 w-72 sm:w-80 rounded-2xl bg-white shadow-xl border border-stone-200/90 py-2 z-50 animate-in fade-in zoom-in-95 duration-100"
        >
          <div className="px-3.5 py-2 border-b border-stone-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-amber-700" />
              <span className="text-xs font-bold text-stone-900">
                Regional Indian Languages
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-wider font-bold text-stone-400 font-mono">
              8 Languages
            </span>
          </div>

          <div className="max-h-80 overflow-y-auto py-1 divide-y divide-stone-50">
            {SUPPORTED_LANGUAGES.map((lang) => {
              const isSelected = lang.code === currentLanguage;
              return (
                <button
                  key={lang.code}
                  id={`lang-option-${lang.code}`}
                  onClick={() => {
                    onLanguageChange(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 text-left transition-colors ${
                    isSelected
                      ? 'bg-amber-50/80 text-amber-950 font-semibold'
                      : 'hover:bg-stone-50 text-stone-700'
                  }`}
                >
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-stone-900">
                        {lang.nativeName}
                      </span>
                      <span className="text-xs text-stone-500 font-medium">
                        ({lang.name})
                      </span>
                    </div>
                    <span className="text-[11px] text-stone-400 mt-0.5">
                      {lang.region}
                    </span>
                  </div>

                  {isSelected ? (
                    <div className="w-5 h-5 rounded-full bg-amber-600 text-white flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                  ) : null}
                </button>
              );
            })}
          </div>

          <div className="px-3.5 py-2 border-t border-stone-100 bg-stone-50/80 rounded-b-2xl">
            <p className="text-[11px] text-stone-500 leading-tight">
              Translates freedom fighter biographies, contributions, quotes, and navigation into your regional language with native audio speech.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
