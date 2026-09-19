import React, { useEffect, useState } from 'react';
import { FreedomFighter, LanguageCode } from '../types';
import { FighterImage } from './FighterImage';
import { getLocalizedFighter, t, SUPPORTED_LANGUAGES } from '../data/translations';
import { LanguageSelector } from './LanguageSelector';
import {
  X,
  MapPin,
  Calendar,
  Volume2,
  VolumeX,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Quote,
  Clock,
  Award,
} from 'lucide-react';

interface FighterModalProps {
  fighter: FreedomFighter | null;
  onClose: () => void;
  onNavigate?: (direction: 'prev' | 'next') => void;
  hasPrev?: boolean;
  hasNext?: boolean;
  currentLanguage?: LanguageCode;
  onLanguageChange?: (lang: LanguageCode) => void;
}

export const FighterModal: React.FC<FighterModalProps> = ({
  fighter,
  onClose,
  onNavigate,
  hasPrev = true,
  hasNext = true,
  currentLanguage = 'en',
  onLanguageChange,
}) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Localized fighter instance
  const locFighter = fighter ? getLocalizedFighter(fighter, currentLanguage) : null;

  // Stop speech when closing or changing fighter or language
  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, [fighter, currentLanguage]);

  // Keyboard shortcut support: Esc to close, Left/Right arrows to navigate
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && onNavigate && hasPrev) {
        onNavigate('prev');
      } else if (e.key === 'ArrowRight' && onNavigate && hasNext) {
        onNavigate('next');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNavigate, hasPrev, hasNext]);

  if (!fighter || !locFighter) return null;

  const toggleSpeech = () => {
    if (!('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const activeLangObj = SUPPORTED_LANGUAGES.find((l) => l.code === currentLanguage);
      const speechLang = activeLangObj?.speechCode || 'en-IN';

      const textToRead = `${locFighter.name}. ${locFighter.titleOrEpithet || ''}. ${
        locFighter.contribution
      }. ${locFighter.bio}`;

      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.lang = speechLang;
      utterance.rate = 0.92;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  const handleCopyJson = () => {
    const jsonStr = JSON.stringify(
      {
        name: locFighter.name,
        original_name: fighter.name,
        language: currentLanguage,
        years: fighter.years,
        region: fighter.region,
        contribution: locFighter.contribution,
        events: fighter.events,
        bio: locFighter.bio,
        photo_url: fighter.photo_url,
      },
      null,
      2
    );
    navigator.clipboard.writeText(jsonStr);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div
      id="fighter-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-fighter-name"
    >
      {/* Modal Container */}
      <div
        id="fighter-modal-content"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-auto max-h-[92vh] flex flex-col"
      >
        {/* Tricolor top border accent */}
        <div className="h-1.5 w-full tricolor-stripe shrink-0" />

        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-stone-200/80 bg-stone-50/80 shrink-0 gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
              {fighter.role}
            </span>
            <span className="text-xs text-stone-500 font-mono hidden sm:inline">
              Era: {fighter.era}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Modal Language Selector */}
            {onLanguageChange && (
              <LanguageSelector
                currentLanguage={currentLanguage}
                onLanguageChange={onLanguageChange}
                compact={true}
              />
            )}

            {/* Audio narrator button */}
            {'speechSynthesis' in window && (
              <button
                id="btn-modal-speech"
                onClick={toggleSpeech}
                title={
                  isSpeaking
                    ? t('stopAudio', currentLanguage)
                    : t('listenAudio', currentLanguage)
                }
                className={`p-2 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
                  isSpeaking
                    ? 'bg-red-100 text-red-700 hover:bg-red-200'
                    : 'bg-stone-200/70 text-stone-700 hover:bg-amber-100 hover:text-amber-900'
                }`}
              >
                {isSpeaking ? (
                  <>
                    <VolumeX className="w-4 h-4 animate-pulse text-red-600" />
                    <span className="hidden sm:inline">
                      {t('stopAudio', currentLanguage)}
                    </span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4 text-stone-600" />
                    <span className="hidden sm:inline">
                      {t('listenAudio', currentLanguage)}
                    </span>
                  </>
                )}
              </button>
            )}

            {/* Copy JSON button */}
            <button
              id="btn-modal-copy-json"
              onClick={handleCopyJson}
              title="Copy structured JSON entry"
              className="p-2 rounded-lg text-xs font-medium flex items-center gap-1.5 bg-stone-200/70 text-stone-700 hover:bg-stone-200 transition-colors"
            >
              {isCopied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="hidden sm:inline text-emerald-700">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-stone-600" />
                  <span className="hidden sm:inline">JSON</span>
                </>
              )}
            </button>

            {/* Close Button */}
            <button
              id="btn-modal-close"
              onClick={onClose}
              className="p-2 rounded-lg text-stone-500 hover:text-stone-800 hover:bg-stone-200/80 transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body Content */}
        <div className="overflow-y-auto px-6 py-5 space-y-6">
          {/* Header Row: Portrait + Identity Details */}
          <div className="flex flex-col sm:flex-row gap-5 items-start">
            {/* High-res Portrait */}
            <div className="relative shrink-0 w-32 h-44 sm:w-40 sm:h-52 rounded-xl overflow-hidden border-2 border-stone-200 shadow-md mx-auto sm:mx-0">
              <FighterImage
                src={fighter.photo_url}
                alt={fighter.name}
                fighterName={fighter.name}
                years={fighter.years}
                className="w-full h-full"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-2 text-center">
                <span className="text-xs font-mono font-semibold text-white">
                  {fighter.years}
                </span>
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center sm:text-left">
              {(locFighter.titleOrEpithet || fighter.titleOrEpithet) && (
                <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60 mb-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>{locFighter.titleOrEpithet || fighter.titleOrEpithet}</span>
                </div>
              )}

              <h2
                id="modal-fighter-name"
                className="font-cinzel text-2xl sm:text-3xl font-bold text-stone-950 leading-tight"
              >
                {locFighter.name}
              </h2>
              {currentLanguage !== 'en' && locFighter.name !== fighter.name && (
                <p className="text-xs text-stone-500 font-sans-modern mt-0.5">
                  Original: {fighter.name}
                </p>
              )}

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-2.5 text-sm text-stone-600">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-amber-700" />
                  <span className="font-medium text-stone-800">{fighter.region}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-amber-700" />
                  <span className="font-mono text-stone-800">
                    {fighter.birthYear} – {fighter.deathYear} ({fighter.deathYear - fighter.birthYear} years)
                  </span>
                </div>
              </div>

              {/* Famous Slogan / Quote Banner */}
              {(locFighter.famousQuote || fighter.famousQuote) && (
                <div className="mt-4 p-3.5 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border-l-4 border-amber-500 border-y border-r border-amber-200/50 text-stone-800 text-sm font-serif italic relative">
                  <Quote className="w-4 h-4 text-amber-400 absolute top-2 right-2 opacity-60" />
                  <p className="pr-4">"{locFighter.famousQuote || fighter.famousQuote}"</p>
                </div>
              )}
            </div>
          </div>

          {/* Section: Short Factual Biography */}
          <div className="border-t border-stone-200/80 pt-4">
            <h3 className="flex items-center gap-2 font-cinzel text-base font-bold text-stone-900 mb-2">
              <Award className="w-4 h-4 text-amber-700" />
              <span>{t('modalHistoricalBio', currentLanguage)}</span>
            </h3>
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed bg-stone-50/60 p-4 rounded-xl border border-stone-200/60 font-sans-modern">
              {locFighter.bio}
            </p>
          </div>

          {/* Section: Key Contributions */}
          <div>
            <h3 className="font-cinzel text-sm font-bold text-stone-900 uppercase tracking-wider mb-2">
              {t('modalContributions', currentLanguage)}
            </h3>
            <div className="p-3.5 bg-blue-50/50 rounded-xl border border-blue-100 text-stone-800 text-sm leading-relaxed font-sans-modern">
              {locFighter.contribution}
            </div>
          </div>

          {/* Section: Major Events Participated In */}
          <div>
            <h3 className="font-cinzel text-sm font-bold text-stone-900 uppercase tracking-wider mb-2">
              {t('modalEvents', currentLanguage)}
            </h3>
            <div className="flex flex-wrap gap-2">
              {fighter.events.map((event) => (
                <div
                  key={event}
                  className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200/80 text-xs font-semibold flex items-center gap-1.5 shadow-2xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>{event}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Key Life Milestones */}
          {fighter.keyMilestones && fighter.keyMilestones.length > 0 && (
            <div className="border-t border-stone-200/80 pt-4">
              <h3 className="flex items-center gap-2 font-cinzel text-sm font-bold text-stone-900 uppercase tracking-wider mb-3">
                <Clock className="w-4 h-4 text-stone-600" />
                <span>{t('modalMilestones', currentLanguage)}</span>
              </h3>
              <div className="space-y-3 pl-2 border-l-2 border-amber-300 ml-2">
                {fighter.keyMilestones.map((m, idx) => (
                  <div key={idx} className="relative pl-4">
                    <div className="absolute -left-[13px] top-1.5 w-2.5 h-2.5 rounded-full bg-amber-600 border-2 border-white shadow-xs" />
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-xs font-bold text-amber-900 bg-amber-100 px-1.5 py-0.5 rounded">
                        {m.year}
                      </span>
                      <h4 className="text-xs font-bold text-stone-900">{m.title}</h4>
                    </div>
                    <p className="text-xs text-stone-600 mt-0.5 leading-normal">
                      {m.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Bar: Navigation */}
        <div className="flex items-center justify-between px-6 py-3 bg-stone-100/90 border-t border-stone-200 shrink-0">
          <button
            id="btn-modal-prev"
            onClick={() => onNavigate?.('prev')}
            disabled={!hasPrev}
            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
              hasPrev
                ? 'bg-white text-stone-800 border-stone-300 hover:bg-stone-50'
                : 'opacity-40 cursor-not-allowed bg-stone-100 text-stone-400 border-stone-200'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>{t('prevHero', currentLanguage)}</span>
          </button>

          <span className="text-[11px] text-stone-500 hidden sm:inline font-mono">
            Arrow keys <kbd className="px-1 py-0.5 bg-stone-200 rounded">←</kbd> /{' '}
            <kbd className="px-1 py-0.5 bg-stone-200 rounded">→</kbd> to navigate
          </span>

          <button
            id="btn-modal-next"
            onClick={() => onNavigate?.('next')}
            disabled={!hasNext}
            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
              hasNext
                ? 'bg-white text-stone-800 border-stone-300 hover:bg-stone-50'
                : 'opacity-40 cursor-not-allowed bg-stone-100 text-stone-400 border-stone-200'
            }`}
          >
            <span>{t('nextHero', currentLanguage)}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

