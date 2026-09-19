import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Sparkles, Music, ChevronUp, ChevronDown, Radio, Flame } from 'lucide-react';
import { audioEngine, PRESET_FREEDOM_TRACKS, FreedomTrack } from '../utils/audioSynth';

interface AudioPlayerProps {
  onOpenGenerator: () => void;
  customTracks: FreedomTrack[];
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  onOpenGenerator,
  customTracks,
}) => {
  const [playerState, setPlayerState] = useState(audioEngine.getState());
  const [isExpanded, setIsExpanded] = useState(true);
  const [showTrackList, setShowTrackList] = useState(false);

  useEffect(() => {
    const unsubscribe = audioEngine.subscribe((state) => {
      setPlayerState(state);
    });
    return unsubscribe;
  }, []);

  const allTracks = [...customTracks, ...PRESET_FREEDOM_TRACKS];
  const currentTrack =
    allTracks.find((t) => t.id === playerState.trackId) || PRESET_FREEDOM_TRACKS[0];

  const handleNext = () => {
    const idx = allTracks.findIndex((t) => t.id === playerState.trackId);
    const nextIdx = (idx + 1) % allTracks.length;
    const nextTrack = allTracks[nextIdx];
    if (nextTrack.isAiGenerated && nextTrack.audioBlobUrl) {
      audioEngine.playCustomAudio(nextTrack.audioBlobUrl, nextTrack.id);
    } else {
      audioEngine.playTrack(nextTrack.id);
    }
  };

  const handlePrev = () => {
    const idx = allTracks.findIndex((t) => t.id === playerState.trackId);
    const prevIdx = (idx - 1 + allTracks.length) % allTracks.length;
    const prevTrack = allTracks[prevIdx];
    if (prevTrack.isAiGenerated && prevTrack.audioBlobUrl) {
      audioEngine.playCustomAudio(prevTrack.audioBlobUrl, prevTrack.id);
    } else {
      audioEngine.playTrack(prevTrack.id);
    }
  };

  const handleSelectTrack = (track: FreedomTrack) => {
    if (track.isAiGenerated && track.audioBlobUrl) {
      audioEngine.playCustomAudio(track.audioBlobUrl, track.id);
    } else {
      audioEngine.playTrack(track.id);
    }
    setShowTrackList(false);
  };

  return (
    <div
      id="freedom-audio-player-dock"
      className="fixed bottom-4 right-4 z-40 max-w-md w-full px-2 sm:px-0 transition-all duration-300 pointer-events-auto"
    >
      <div className="bg-stone-900/95 backdrop-blur-md text-stone-100 rounded-2xl border border-amber-500/30 shadow-2xl overflow-hidden">
        {/* Tricolor top border accent */}
        <div className="h-1 w-full tricolor-stripe" />

        {/* Minimized Bar */}
        {!isExpanded ? (
          <div className="p-3 flex items-center justify-between gap-3">
            <div
              onClick={() => setIsExpanded(true)}
              className="flex items-center gap-2.5 cursor-pointer min-w-0 flex-1"
            >
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                  playerState.isPlaying
                    ? 'bg-amber-600 text-white shadow-sm shadow-amber-500/50'
                    : 'bg-stone-800 text-stone-400'
                }`}
              >
                <Music className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-white truncate font-cinzel">
                  {currentTrack.title}
                </p>
                <p className="text-[10px] text-amber-400 truncate">
                  {playerState.isPlaying ? 'Now Playing • Goosebumps Audio' : 'Paused • Click to expand'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <button
                id="minimized-btn-play-toggle"
                onClick={() => audioEngine.togglePlay()}
                className="w-8 h-8 rounded-full bg-amber-600 hover:bg-amber-500 text-white flex items-center justify-center shadow-md transition-colors"
              >
                {playerState.isPlaying ? (
                  <Pause className="w-3.5 h-3.5" />
                ) : (
                  <Play className="w-3.5 h-3.5 ml-0.5" />
                )}
              </button>

              <button
                onClick={() => setIsExpanded(true)}
                className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800"
                title="Expand Music Hub"
              >
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Expanded Full Controller */
          <div className="p-3.5 sm:p-4 space-y-3">
            {/* Header / Track Info */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-start gap-3 min-w-0">
                {/* Visualizer disc / equalizer */}
                <div
                  onClick={() => audioEngine.togglePlay()}
                  className={`relative w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 cursor-pointer overflow-hidden border transition-all ${
                    playerState.isPlaying
                      ? 'bg-gradient-to-tr from-amber-600 via-orange-600 to-amber-500 text-white border-amber-400 shadow-md shadow-amber-600/30'
                      : 'bg-stone-800 border-stone-700 text-stone-400'
                  }`}
                >
                  {playerState.isPlaying ? (
                    <div className="flex items-end gap-0.5 h-5">
                      <span className="w-1 bg-white rounded-full animate-bounce [animation-delay:-0.3s] h-3" />
                      <span className="w-1 bg-white rounded-full animate-bounce [animation-delay:-0.1s] h-5" />
                      <span className="w-1 bg-white rounded-full animate-bounce [animation-delay:-0.4s] h-4" />
                      <span className="w-1 bg-white rounded-full animate-bounce [animation-delay:-0.2s] h-2" />
                    </div>
                  ) : (
                    <Music className="w-5 h-5" />
                  )}
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1">
                      <Flame className="w-3 h-3 text-orange-400" />
                      <span>{currentTrack.mood.split('•')[0]}</span>
                    </span>
                    <span className="text-stone-600">•</span>
                    <span className="text-[10px] text-stone-400 font-mono">
                      {currentTrack.durationFormatted}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-xs sm:text-sm font-bold text-white truncate mt-0.5">
                    {currentTrack.title}
                  </h3>

                  <p className="text-[11px] text-stone-300 truncate mt-0.5">
                    {currentTrack.dedicatedTo}
                  </p>
                </div>
              </div>

              {/* Action Buttons: Playlist & Collapse */}
              <div className="flex items-center gap-1 shrink-0">
                <button
                  id="btn-toggle-playlist"
                  onClick={() => setShowTrackList(!showTrackList)}
                  className={`px-2 py-1 rounded-lg text-[11px] font-semibold border transition-colors ${
                    showTrackList
                      ? 'bg-amber-600 text-white border-amber-500'
                      : 'bg-stone-800 text-stone-300 border-stone-700 hover:bg-stone-700'
                  }`}
                  title="Show Playlist"
                >
                  Playlist ({allTracks.length})
                </button>

                <button
                  onClick={() => setIsExpanded(false)}
                  className="p-1 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800"
                  title="Minimize Player"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Track Description Callout */}
            <div className="p-2 rounded-xl bg-stone-950/70 border border-stone-800 text-[11px] text-stone-300 leading-snug">
              <span className="text-amber-400 font-semibold">{currentTrack.subtitle}: </span>
              {currentTrack.description}
            </div>

            {/* Playback Controls & Volume */}
            <div className="flex items-center justify-between gap-3 pt-1 border-t border-stone-800/80">
              <div className="flex items-center gap-1.5">
                <button
                  id="btn-audio-prev"
                  onClick={handlePrev}
                  className="p-2 text-stone-300 hover:text-white rounded-xl hover:bg-stone-800 transition-colors"
                  title="Previous Anthem"
                >
                  <SkipBack className="w-4 h-4" />
                </button>

                <button
                  id="btn-audio-play-pause"
                  onClick={() => audioEngine.togglePlay()}
                  className="w-10 h-10 rounded-xl bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-500 hover:to-orange-400 text-white flex items-center justify-center shadow-lg shadow-amber-600/30 transition-all hover:scale-105"
                  title={playerState.isPlaying ? 'Pause Background Music' : 'Play Background Music'}
                >
                  {playerState.isPlaying ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4 ml-0.5" />
                  )}
                </button>

                <button
                  id="btn-audio-next"
                  onClick={handleNext}
                  className="p-2 text-stone-300 hover:text-white rounded-xl hover:bg-stone-800 transition-colors"
                  title="Next Anthem"
                >
                  <SkipForward className="w-4 h-4" />
                </button>
              </div>

              {/* Volume & Mute */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => audioEngine.toggleMute()}
                  className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors"
                  title={playerState.isMuted ? 'Unmute' : 'Mute'}
                >
                  {playerState.isMuted || playerState.volume === 0 ? (
                    <VolumeX className="w-4 h-4 text-red-400" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>

                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={playerState.isMuted ? 0 : playerState.volume}
                  onChange={(e) => audioEngine.setVolume(parseFloat(e.target.value))}
                  className="w-16 sm:w-20 accent-amber-500 h-1.5 bg-stone-700 rounded-lg cursor-pointer"
                  title={`Volume: ${Math.round(playerState.volume * 100)}%`}
                />
              </div>

              {/* Generate AI Anthem Button */}
              <button
                id="btn-open-music-generator"
                onClick={onOpenGenerator}
                className="px-2.5 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xs shrink-0"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Generate with</span>
                <span>Lyria</span>
              </button>
            </div>

            {/* Playlist Drawer */}
            {showTrackList && (
              <div className="pt-2 border-t border-stone-800 space-y-1.5 max-h-48 overflow-y-auto">
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-wider px-1">
                  Select Freedom Anthem
                </p>
                {allTracks.map((tr) => {
                  const isCur = tr.id === playerState.trackId;
                  return (
                    <button
                      key={tr.id}
                      onClick={() => handleSelectTrack(tr)}
                      className={`w-full p-2 rounded-xl text-left flex items-center justify-between gap-2 text-xs transition-colors ${
                        isCur
                          ? 'bg-amber-600/20 text-amber-300 border border-amber-500/40'
                          : 'bg-stone-950/60 text-stone-300 border border-stone-800/80 hover:bg-stone-800 hover:text-white'
                      }`}
                    >
                      <div className="min-w-0 flex items-center gap-2">
                        <Radio
                          className={`w-3.5 h-3.5 shrink-0 ${
                            isCur ? 'text-amber-400 animate-pulse' : 'text-stone-500'
                          }`}
                        />
                        <div className="min-w-0">
                          <p className="font-semibold truncate">{tr.title}</p>
                          <p className="text-[10px] text-stone-400 truncate">{tr.dedicatedTo}</p>
                        </div>
                      </div>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-stone-800 text-stone-400 shrink-0 font-mono">
                        {tr.durationFormatted}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
