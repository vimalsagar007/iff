import React, { useState } from 'react';
import { Sparkles, Music, Volume2, Play, Pause, Download, AlertCircle, CheckCircle, Flame, Disc3, X, Zap } from 'lucide-react';
import { audioEngine, FreedomTrack } from '../utils/audioSynth';

interface MusicGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTrackCreated: (track: FreedomTrack) => void;
}

const INSPIRATION_PRESETS = [
  {
    title: 'Bhagat Singh Drill & Dhol',
    prompt: 'Epic cinematic drill beat with traditional Indian bansuri flute, thundering Punjabi dhol, and heroic brass fanfare for Bhagat Singh.',
    tag: 'Adrenaline Rush',
    hero: 'Bhagat Singh & HSRA',
  },
  {
    title: 'Netaji INA War Symphony',
    prompt: 'Rousing military orchestral march with thundering battle drums, brass bugles, and heroic cadence for Netaji Subhas Chandra Bose and Azad Hind Fauj.',
    tag: 'Marching March',
    hero: 'Subhas Chandra Bose',
  },
  {
    title: 'Rani Jhansi Battle Charge',
    prompt: 'Fierce and unstoppable cinematic battle theme with war horns, fast dholak rhythms, and sweeping strings honoring Rani Lakshmibai.',
    tag: 'High Energy',
    hero: 'Rani Lakshmibai',
  },
  {
    title: 'Vande Mataram Goosebumps Swell',
    prompt: 'Deeply emotional and uplifting patriotic anthem with haunting Indian flute, sitar harmonics, and swelling orchestral crescendo giving pure goosebumps.',
    tag: 'Soul Stirring',
    hero: '1857 Martyrs',
  },
];

export const MusicGeneratorModal: React.FC<MusicGeneratorModalProps> = ({
  isOpen,
  onClose,
  onTrackCreated,
}) => {
  const [model, setModel] = useState<'lyria-3-clip-preview' | 'lyria-3-pro-preview'>('lyria-3-clip-preview');
  const [prompt, setPrompt] = useState<string>(INSPIRATION_PRESETS[0].prompt);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generatedTrack, setGeneratedTrack] = useState<{
    audioUrl: string;
    lyrics?: string;
    prompt: string;
    model: string;
  } | null>(null);
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);
  const [previewAudio, setPreviewAudio] = useState<HTMLAudioElement | null>(null);

  if (!isOpen) return null;

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setError(null);

    // Stop existing preview if any
    if (previewAudio) {
      previewAudio.pause();
      setIsPlayingPreview(false);
    }

    try {
      const res = await fetch('/api/generate-music', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: prompt.trim(),
          model,
        }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || 'Music generation failed. Please ensure GEMINI_API_KEY is configured.');
      }

      // Decode base64 audio into Blob URL
      const binary = atob(data.audioBase64);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
      }
      const blob = new Blob([bytes], { type: data.mimeType || 'audio/wav' });
      const audioUrl = URL.createObjectURL(blob);

      setGeneratedTrack({
        audioUrl,
        lyrics: data.lyrics,
        prompt: prompt.trim(),
        model: data.model,
      });

      // Automatically play preview
      const audio = new Audio(audioUrl);
      audio.onended = () => setIsPlayingPreview(false);
      audio.play().then(() => {
        setIsPlayingPreview(true);
        setPreviewAudio(audio);
      }).catch(err => {
        console.warn('Playback error:', err);
      });
    } catch (err: any) {
      console.error('Generation error:', err);
      setError(err.message || 'Failed to generate patriotic music.');
    } finally {
      setIsGenerating(false);
    }
  };

  const togglePreview = () => {
    if (!generatedTrack) return;
    if (isPlayingPreview && previewAudio) {
      previewAudio.pause();
      setIsPlayingPreview(false);
    } else {
      let audio = previewAudio;
      if (!audio) {
        audio = new Audio(generatedTrack.audioUrl);
        audio.onended = () => setIsPlayingPreview(false);
        setPreviewAudio(audio);
      }
      audio.play().then(() => {
        setIsPlayingPreview(true);
      });
    }
  };

  const handleApplyAsBackground = () => {
    if (!generatedTrack) return;
    if (previewAudio) {
      previewAudio.pause();
    }

    const newTrack: FreedomTrack = {
      id: `lyria-${Date.now()}`,
      title: 'AI Anthem: ' + (prompt.slice(0, 32) + '...'),
      subtitle: model === 'lyria-3-clip-preview' ? 'Lyria Clip (30s Looping)' : 'Lyria Pro (Full Anthem)',
      dedicatedTo: 'Heroes of Indian Independence',
      tempo: 128,
      mood: 'AI Patriotic Symphony',
      description: generatedTrack.prompt,
      durationFormatted: model === 'lyria-3-clip-preview' ? '30s Loop' : 'Full Length',
      isAiGenerated: true,
      audioBlobUrl: generatedTrack.audioUrl,
      lyrics: generatedTrack.lyrics,
    };

    onTrackCreated(newTrack);
    audioEngine.playCustomAudio(generatedTrack.audioUrl, newTrack.id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-stone-900 text-stone-100 rounded-3xl border border-stone-700 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Tricolor Glowing Bar */}
        <div className="h-1.5 w-full tricolor-stripe" />

        {/* Modal Header */}
        <div className="p-6 border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-600 to-orange-500 flex items-center justify-center text-white shadow-lg shadow-amber-600/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-cinzel text-lg font-bold text-white tracking-wide">
                  Generate Patriotic Freedom Anthem
                </h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Lyria AI
                </span>
              </div>
              <p className="text-xs text-stone-400">
                Compose custom goosebumps-inducing battle music & revolutionary tracks for Gen Z
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              if (previewAudio) previewAudio.pause();
              onClose();
            }}
            className="p-2 text-stone-400 hover:text-white rounded-full hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 overflow-y-auto flex-1">
          {/* Model Duration Selection */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-stone-300 uppercase tracking-wider flex items-center gap-1.5">
              <Disc3 className="w-3.5 h-3.5 text-amber-400" />
              <span>Composition Engine & Length</span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setModel('lyria-3-clip-preview')}
                className={`p-3 rounded-2xl border text-left transition-all ${
                  model === 'lyria-3-clip-preview'
                    ? 'bg-amber-600/20 border-amber-500 text-white shadow-sm'
                    : 'bg-stone-800/60 border-stone-700 text-stone-400 hover:border-stone-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-300">Lyria Clip</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-stone-700 font-mono">Up to 30s</span>
                </div>
                <p className="text-[11px] text-stone-300 mt-1 leading-tight">
                  Instant revolutionary battle clip, perfect for background looping.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setModel('lyria-3-pro-preview')}
                className={`p-3 rounded-2xl border text-left transition-all ${
                  model === 'lyria-3-pro-preview'
                    ? 'bg-amber-600/20 border-amber-500 text-white shadow-sm'
                    : 'bg-stone-800/60 border-stone-700 text-stone-400 hover:border-stone-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-300">Lyria Pro</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-stone-700 font-mono">Full Anthem</span>
                </div>
                <p className="text-[11px] text-stone-300 mt-1 leading-tight">
                  Complete extended symphonic track with full dynamic arcs and multi-instrument crescendos.
                </p>
              </button>
            </div>
          </div>

          {/* Prompt Presets */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-stone-300 uppercase tracking-wider flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-orange-400" />
              <span>Gen Z Goosebumps Presets</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {INSPIRATION_PRESETS.map((item) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setPrompt(item.prompt)}
                  className="p-3 rounded-xl bg-stone-800/70 border border-stone-700/80 hover:border-amber-400/80 hover:bg-stone-800 text-left transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-200 group-hover:text-amber-300">
                      {item.title}
                    </span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-950/60 text-amber-400 border border-amber-800/40">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-400 line-clamp-2 mt-1 leading-snug">
                    {item.prompt}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Custom Prompt Textarea */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-stone-300 uppercase tracking-wider">
                Music Prompt / Description
              </label>
              <span className="text-[10px] text-stone-400 font-mono">
                {prompt.length} chars
              </span>
            </div>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={3}
              placeholder="Describe the mood, instruments, rhythm, and patriotic inspiration (e.g. Punjabi dhol, war drums, bugle call, orchestral swell)..."
              className="w-full p-3 rounded-2xl bg-stone-950 border border-stone-700 text-stone-100 text-xs focus:outline-none focus:border-amber-500 placeholder-stone-500 resize-none font-sans"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-4 rounded-2xl bg-red-950/50 border border-red-800/60 text-red-200 text-xs flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-300">Lyria Generation Notice</p>
                <p className="mt-0.5 text-[11px] text-red-200/90 leading-relaxed">{error}</p>
                <p className="mt-1 text-[10px] text-stone-400">
                  Tip: Lyria music models require a paid Gemini API key configured in AI Studio Secrets. The built-in patriotic synth tracks remain active anytime!
                </p>
              </div>
            </div>
          )}

          {/* Generated Track Playback Card */}
          {generatedTrack && !isGenerating && (
            <div className="p-4 rounded-2xl bg-stone-950 border border-amber-500/50 shadow-lg space-y-3 animate-fade-in">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                    <Music className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Generated Freedom Track</h4>
                    <p className="text-[10px] text-stone-400 font-mono">{generatedTrack.model}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={togglePreview}
                    className="px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
                  >
                    {isPlayingPreview ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span>{isPlayingPreview ? 'Pause' : 'Play Preview'}</span>
                  </button>

                  <a
                    href={generatedTrack.audioUrl}
                    download="indian_freedom_anthem.wav"
                    className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
                    title="Download Audio File (.wav)"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {generatedTrack.lyrics && (
                <div className="p-2.5 rounded-xl bg-stone-900 border border-stone-800 text-[11px] text-stone-300 italic">
                  "{generatedTrack.lyrics}"
                </div>
              )}

              <button
                onClick={handleApplyAsBackground}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-600 via-orange-600 to-emerald-600 hover:opacity-95 text-white text-xs font-bold shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Set as Active Background Music</span>
              </button>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-5 border-t border-stone-800 bg-stone-950/60 flex items-center justify-between">
          <div className="text-[11px] text-stone-400 flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Powered by Google DeepMind Lyria</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                if (previewAudio) previewAudio.pause();
                onClose();
              }}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-500 hover:to-orange-400 text-white text-xs font-bold shadow-lg shadow-amber-600/30 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isGenerating ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Composing with Lyria...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Generate Track</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
