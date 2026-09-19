import React, { useState, useMemo, useEffect } from 'react';
import { FreedomFighter, ViewMode, LanguageCode } from './types';
import { FREEDOM_FIGHTERS } from './data/freedomFighters';
import { getLocalizedFighter } from './data/translations';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { FilterBar } from './components/FilterBar';
import { FighterCard } from './components/FighterCard';
import { FighterModal } from './components/FighterModal';
import { TimelineView } from './components/TimelineView';
import { RegionalExplorer } from './components/RegionalExplorer';
import { JsonExportModal } from './components/JsonExportModal';
import { AudioPlayer } from './components/AudioPlayer';
import { MusicGeneratorModal } from './components/MusicGeneratorModal';
import { audioEngine, FreedomTrack } from './utils/audioSynth';
import { AshokaChakra } from './components/AshokaChakra';
import { RefreshCw } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMovement, setSelectedMovement] = useState('all');
  const [selectedEra, setSelectedEra] = useState('all');
  const [selectedRole, setSelectedRole] = useState('all');
  const [selectedFighter, setSelectedFighter] = useState<FreedomFighter | null>(null);
  const [isJsonModalOpen, setIsJsonModalOpen] = useState(false);
  const [showOnlyBookmarks, setShowOnlyBookmarks] = useState(false);
  const [isMusicModalOpen, setIsMusicModalOpen] = useState(false);
  const [customTracks, setCustomTracks] = useState<FreedomTrack[]>([]);
  const [audioPlayerState, setAudioPlayerState] = useState(audioEngine.getState());

  useEffect(() => {
    const unsub = audioEngine.subscribe((state) => {
      setAudioPlayerState(state);
    });
    return unsub;
  }, []);

  // Persistent language preference
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>(() => {
    try {
      const saved = localStorage.getItem('iff_preferred_lang');
      return (saved as LanguageCode) || 'en';
    } catch {
      return 'en';
    }
  });

  const handleLanguageChange = (lang: LanguageCode) => {
    setCurrentLanguage(lang);
    try {
      localStorage.setItem('iff_preferred_lang', lang);
    } catch {
      // ignore
    }
  };

  // Persistent bookmarks via localStorage
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('iff_bookmarked_fighters');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('iff_bookmarked_fighters', JSON.stringify(bookmarkedIds));
    } catch {
      // ignore storage error
    }
  }, [bookmarkedIds]);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Filtered list of fighters (with multi-language search awareness)
  const filteredFighters = useMemo(() => {
    return FREEDOM_FIGHTERS.filter((fighter) => {
      // Bookmark filter
      if (showOnlyBookmarks && !bookmarkedIds.includes(fighter.id)) {
        return false;
      }

      // Era filter
      if (selectedEra !== 'all' && fighter.era !== selectedEra) {
        return false;
      }

      // Role filter
      if (selectedRole !== 'all' && fighter.role !== selectedRole) {
        return false;
      }

      // Movement filter
      if (selectedMovement !== 'all') {
        const matchesMovement = fighter.events.some((ev) =>
          ev.toLowerCase().includes(selectedMovement.toLowerCase())
        );
        if (!matchesMovement) return false;
      }

      // Search Query filter (matches both English and localized text)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const locF = getLocalizedFighter(fighter, currentLanguage);

        const matchesName =
          fighter.name.toLowerCase().includes(q) ||
          locF.name.toLowerCase().includes(q);
        const matchesRegion = fighter.region.toLowerCase().includes(q);
        const matchesContribution =
          fighter.contribution.toLowerCase().includes(q) ||
          locF.contribution.toLowerCase().includes(q);
        const matchesBio =
          fighter.bio.toLowerCase().includes(q) ||
          locF.bio.toLowerCase().includes(q);
        const matchesEvents = fighter.events.some((e) => e.toLowerCase().includes(q));
        const matchesEpithet =
          fighter.titleOrEpithet?.toLowerCase().includes(q) ||
          locF.titleOrEpithet?.toLowerCase().includes(q);

        if (
          !matchesName &&
          !matchesRegion &&
          !matchesContribution &&
          !matchesBio &&
          !matchesEvents &&
          !matchesEpithet
        ) {
          return false;
        }
      }

      return true;
    });
  }, [
    searchQuery,
    selectedMovement,
    selectedEra,
    selectedRole,
    showOnlyBookmarks,
    bookmarkedIds,
    currentLanguage,
  ]);

  const hasActiveFilters =
    searchQuery !== '' ||
    selectedMovement !== 'all' ||
    selectedEra !== 'all' ||
    selectedRole !== 'all' ||
    showOnlyBookmarks;

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedMovement('all');
    setSelectedEra('all');
    setSelectedRole('all');
    setShowOnlyBookmarks(false);
  };

  // Navigate next/prev in modal
  const handleModalNavigate = (direction: 'prev' | 'next') => {
    if (!selectedFighter) return;
    const currentIndex = filteredFighters.findIndex((f) => f.id === selectedFighter.id);
    if (currentIndex === -1) return;

    if (direction === 'prev' && currentIndex > 0) {
      setSelectedFighter(filteredFighters[currentIndex - 1]);
    } else if (direction === 'next' && currentIndex < filteredFighters.length - 1) {
      setSelectedFighter(filteredFighters[currentIndex + 1]);
    }
  };

  const currentFighterIndex = selectedFighter
    ? filteredFighters.findIndex((f) => f.id === selectedFighter.id)
    : -1;
  const hasPrev = currentFighterIndex > 0;
  const hasNext = currentFighterIndex !== -1 && currentFighterIndex < filteredFighters.length - 1;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-amber-100 selection:text-amber-900 font-sans-modern relative">
      {/* Top Navigation with Language Selector & Music Quick Toggle */}
      <Navbar
        currentView={currentView}
        onSelectView={(view) => {
          if (view === 'json') {
            setIsJsonModalOpen(true);
          } else {
            setCurrentView(view);
          }
        }}
        bookmarksCount={bookmarkedIds.length}
        showOnlyBookmarks={showOnlyBookmarks}
        onToggleShowBookmarks={() => setShowOnlyBookmarks(!showOnlyBookmarks)}
        onOpenJsonModal={() => setIsJsonModalOpen(true)}
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
        isMusicPlaying={audioPlayerState.isPlaying}
        onToggleMusic={() => audioEngine.togglePlay()}
        onOpenMusicModal={() => setIsMusicModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6 sm:space-y-8">
        {/* Hero Section Banner */}
        <HeroBanner currentLanguage={currentLanguage} />

        {/* Global Filter & Search Bar with Language quick chips */}
        <FilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedMovement={selectedMovement}
          onSelectMovement={setSelectedMovement}
          selectedEra={selectedEra}
          onSelectEra={setSelectedEra}
          selectedRole={selectedRole}
          onSelectRole={setSelectedRole}
          totalCount={FREEDOM_FIGHTERS.length}
          filteredCount={filteredFighters.length}
          onResetFilters={handleResetFilters}
          hasActiveFilters={hasActiveFilters}
          currentLanguage={currentLanguage}
          onLanguageChange={handleLanguageChange}
        />

        {/* View Content Rendering */}
        {currentView === 'grid' && (
          <div>
            {filteredFighters.length > 0 ? (
              <div
                id="fighters-grid-container"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredFighters.map((fighter) => (
                  <FighterCard
                    key={fighter.id}
                    fighter={fighter}
                    onSelect={(f) => setSelectedFighter(f)}
                    onEventClick={(ev) => setSelectedMovement(ev)}
                    isBookmarked={bookmarkedIds.includes(fighter.id)}
                    onToggleBookmark={toggleBookmark}
                    currentLanguage={currentLanguage}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center max-w-md mx-auto my-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto border border-amber-200">
                  <RefreshCw className="w-8 h-8" />
                </div>
                <h3 className="font-cinzel text-lg font-bold text-stone-900">
                  No Freedom Fighters Match Filter
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Try adjusting your search keywords or resetting movement, region, or era filters.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        )}

        {currentView === 'timeline' && (
          <TimelineView
            fighters={filteredFighters}
            onSelectFighter={(f) => setSelectedFighter(f)}
            currentLanguage={currentLanguage}
          />
        )}

        {currentView === 'regions' && (
          <RegionalExplorer
            fighters={FREEDOM_FIGHTERS}
            onSelectFighter={(f) => setSelectedFighter(f)}
            onFilterByRegion={(region) => {
              setSearchQuery(region);
              setCurrentView('grid');
            }}
            currentLanguage={currentLanguage}
          />
        )}
      </main>

      {/* Modal Popup with Detailed Biography & Regional Speech */}
      <FighterModal
        fighter={selectedFighter}
        onClose={() => setSelectedFighter(null)}
        onNavigate={handleModalNavigate}
        hasPrev={hasPrev}
        hasNext={hasNext}
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
      />

      {/* JSON Export & Data Inspection Modal */}
      <JsonExportModal
        isOpen={isJsonModalOpen}
        onClose={() => setIsJsonModalOpen(false)}
        allFighters={FREEDOM_FIGHTERS}
        filteredFighters={filteredFighters}
      />

      {/* Museum-Grade Footer */}
      <footer className="mt-16 bg-white border-t border-stone-200/90 text-stone-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-stone-200">
            <div className="flex items-center gap-3">
              <AshokaChakra size={40} animate={false} />
              <div>
                <h3 className="font-cinzel text-base font-bold text-stone-900">
                  INDIAN FREEDOM STRUGGLE ARCHIVE
                </h3>
                <p className="text-xs text-stone-500">
                  Dedicated to the memory of the fearless martyrs and visionaries of 1857–1947.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
              <button
                onClick={() => {
                  setCurrentView('grid');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-amber-800 transition-colors"
              >
                Hero Tiles
              </button>
              <button
                onClick={() => {
                  setCurrentView('timeline');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-amber-800 transition-colors"
              >
                Timeline (1857–1947)
              </button>
              <button
                onClick={() => {
                  setCurrentView('regions');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-amber-800 transition-colors"
              >
                Regional Hubs
              </button>
              <button
                onClick={() => setIsJsonModalOpen(true)}
                className="text-amber-800 font-bold hover:underline"
              >
                Structured JSON API
              </button>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-3">
            <p className="italic">
              "They may kill me, but they cannot kill my ideas. They can crush my body, but they will not be able to crush my spirit." — Bhagat Singh
            </p>
            <p className="font-mono text-[11px]">
              Vande Mataram • Inquilab Zindabad • Jai Hind
            </p>
          </div>
        </div>

        {/* Bottom Tricolor Stripe */}
        <div className="h-1.5 w-full tricolor-stripe" />
      </footer>

      {/* Persistent Goosebumps Background Music Player Dock */}
      <AudioPlayer
        onOpenGenerator={() => setIsMusicModalOpen(true)}
        customTracks={customTracks}
      />

      {/* Lyria AI Freedom Music Generator Modal */}
      <MusicGeneratorModal
        isOpen={isMusicModalOpen}
        onClose={() => setIsMusicModalOpen(false)}
        onTrackCreated={(newTrack) => {
          setCustomTracks((prev) => [newTrack, ...prev]);
        }}
      />
    </div>
  );
}

