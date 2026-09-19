// Web Audio API Patriotic & Revolutionary Synth Engine for Indian Freedom Fighters
// Provides instant high-octane background music without latency, plus playback for Lyria-generated tracks

export interface FreedomTrack {
  id: string;
  title: string;
  subtitle: string;
  dedicatedTo: string;
  tempo: number; // BPM
  mood: string;
  description: string;
  durationFormatted: string;
  isAiGenerated?: boolean;
  audioBlobUrl?: string;
  lyrics?: string;
}

export const PRESET_FREEDOM_TRACKS: FreedomTrack[] = [
  {
    id: 'inquilab',
    title: 'Inquilab Zindabad (Revolutionary Spark)',
    subtitle: 'High-Energy War Drums & Brass Anthem',
    dedicatedTo: 'Bhagat Singh, Chandrashekhar Azad & HSRA',
    tempo: 136,
    mood: 'Adrenaline • Defiant • Goosebumps',
    description: 'Thundering cinematic bass drums, intense military cadences, and triumphant brass fanfares capturing the unyielding spirit of revolutionary youth.',
    durationFormatted: 'Looping Ambient Anthem',
  },
  {
    id: 'vande-mataram',
    title: 'Vande Mataram (Hymn of the Motherland)',
    subtitle: 'Cinematic Flute & Strings Crescendo',
    dedicatedTo: 'Bankim Chandra, Aurobindo & 1857 Martyrs',
    tempo: 96,
    mood: 'Soul-Stirring • Emotional • Majestic',
    description: 'A deep acoustic drone blossoming into resonant bansuri flute motifs and swelling orchestral harmonies that evoke sacred devotion to the soil.',
    durationFormatted: 'Looping Ambient Anthem',
  },
  {
    id: 'kadam-kadam',
    title: 'Kadam Kadam Badhaye Ja (March to Delhi)',
    subtitle: 'Azad Hind Fauj Marching Symphony',
    dedicatedTo: 'Netaji Subhas Chandra Bose & Rani of Jhansi Regiment',
    tempo: 122,
    mood: 'Heroic • Resolute • Marching',
    description: 'Crisp military snare drums, resolute brass horns, and unstoppable forward drive echoing Netaji\'s call: "Give me blood, and I will give you freedom!"',
    durationFormatted: 'Looping Ambient Anthem',
  },
  {
    id: 'veerangana',
    title: 'Veerangana (Battle Cry of Jhansi)',
    subtitle: 'Adrenaline Dhol & War Trumpet Cadence',
    dedicatedTo: 'Rani Lakshmibai, Begum Hazrat & Kittur Chennamma',
    tempo: 142,
    mood: 'Fierce • Unstoppable • Valor',
    description: 'Galloping war percussion, rolling timpani, and soaring trumpet arpeggios honoring the lionesses of India\'s first war of independence.',
    durationFormatted: 'Looping Ambient Anthem',
  },
];

class FreedomAudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isPlaying = false;
  private currentTrackId: string = 'inquilab';
  private currentVolume = 0.55;
  private isMuted = false;
  private timerId: number | null = null;
  private step = 0;
  private activeCustomAudio: HTMLAudioElement | null = null;
  private listeners: Set<(state: { isPlaying: boolean; trackId: string; volume: number; isMuted: boolean }) => void> = new Set();

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioContextClass();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.currentVolume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public subscribe(fn: (state: { isPlaying: boolean; trackId: string; volume: number; isMuted: boolean }) => void) {
    this.listeners.add(fn);
    return () => {
      this.listeners.delete(fn);
    };
  }

  private notify() {
    const state = {
      isPlaying: this.isPlaying,
      trackId: this.currentTrackId,
      volume: this.currentVolume,
      isMuted: this.isMuted,
    };
    this.listeners.forEach((fn) => fn(state));
  }

  public getState() {
    return {
      isPlaying: this.isPlaying,
      trackId: this.currentTrackId,
      volume: this.currentVolume,
      isMuted: this.isMuted,
    };
  }

  public setVolume(vol: number) {
    this.currentVolume = Math.max(0, Math.min(1, vol));
    if (this.masterGain && this.ctx && !this.isMuted) {
      this.masterGain.gain.setTargetAtTime(this.currentVolume, this.ctx.currentTime, 0.05);
    }
    if (this.activeCustomAudio) {
      this.activeCustomAudio.volume = this.isMuted ? 0 : this.currentVolume;
    }
    this.notify();
  }

  public toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      const target = this.isMuted ? 0 : this.currentVolume;
      this.masterGain.gain.setTargetAtTime(target, this.ctx.currentTime, 0.05);
    }
    if (this.activeCustomAudio) {
      this.activeCustomAudio.volume = this.isMuted ? 0 : this.currentVolume;
    }
    this.notify();
  }

  public playCustomAudio(blobUrl: string, trackId = 'custom-ai-track') {
    this.stopSynth();
    if (this.activeCustomAudio) {
      this.activeCustomAudio.pause();
      this.activeCustomAudio = null;
    }

    const audio = new Audio(blobUrl);
    audio.volume = this.isMuted ? 0 : this.currentVolume;
    audio.loop = true;
    audio.play().then(() => {
      this.isPlaying = true;
      this.currentTrackId = trackId;
      this.activeCustomAudio = audio;
      this.notify();
    }).catch(err => {
      console.warn("Audio autoplay blocked, user interaction required:", err);
    });
  }

  public playTrack(trackId: string) {
    this.initContext();
    if (this.activeCustomAudio) {
      this.activeCustomAudio.pause();
      this.activeCustomAudio = null;
    }

    this.currentTrackId = trackId;
    this.isPlaying = true;
    this.step = 0;
    this.startSynth();
    this.notify();
  }

  public pause() {
    this.isPlaying = false;
    this.stopSynth();
    if (this.activeCustomAudio) {
      this.activeCustomAudio.pause();
    }
    this.notify();
  }

  public resume() {
    this.initContext();
    this.isPlaying = true;
    if (this.activeCustomAudio) {
      this.activeCustomAudio.play();
    } else {
      this.startSynth();
    }
    this.notify();
  }

  public togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.resume();
    }
  }

  private stopSynth() {
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  private startSynth() {
    this.stopSynth();
    if (!this.ctx || !this.masterGain) return;

    // Tempo based scheduling
    const track = PRESET_FREEDOM_TRACKS.find((t) => t.id === this.currentTrackId) || PRESET_FREEDOM_TRACKS[0];
    const intervalMs = (60000 / track.tempo) / 4; // 16th note subdivisions

    this.timerId = window.setInterval(() => {
      if (!this.isPlaying || !this.ctx || !this.masterGain) return;
      this.triggerStep(this.currentTrackId, this.step);
      this.step = (this.step + 1) % 32;
    }, intervalMs);
  }

  // Synthesis voices: Kick, Snare, War Drum, Drone, Brass, Bell/Flute
  private playKick(time: number, power = 1.0) {
    if (!this.ctx || !this.masterGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.frequency.setValueAtTime(140, time);
    osc.frequency.exponentialRampToValueAtTime(36, time + 0.12);

    gain.gain.setValueAtTime(0.7 * power, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.28);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + 0.3);
  }

  private playWarDrum(time: number, freq = 65, duration = 0.4) {
    if (!this.ctx || !this.masterGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, time);
    osc.frequency.exponentialRampToValueAtTime(32, time + duration);

    gain.gain.setValueAtTime(0.6, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + duration);
  }

  private playSnare(time: number, crispness = 0.8) {
    if (!this.ctx || !this.masterGain) return;
    // Noise buffer
    const bufferSize = this.ctx.sampleRate * 0.12;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 1100;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.35 * crispness, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.12);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start(time);
    noise.stop(time + 0.12);
  }

  private playBrassNote(time: number, freq: number, duration = 0.25, type: OscillatorType = 'sawtooth') {
    if (!this.ctx || !this.masterGain) return;
    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, time);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, time);
    filter.frequency.exponentialRampToValueAtTime(2400, time + 0.05);
    filter.frequency.exponentialRampToValueAtTime(900, time + duration);

    gain.gain.setValueAtTime(0.001, time);
    gain.gain.linearRampToValueAtTime(0.28, time + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + duration);
  }

  private playFluteNote(time: number, freq: number, duration = 0.4) {
    if (!this.ctx || !this.masterGain) return;
    const osc = this.ctx.createOscillator();
    const oscHarmonic = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    oscHarmonic.type = 'sine';
    oscHarmonic.frequency.setValueAtTime(freq * 2, time);

    // Warm tremolo
    gain.gain.setValueAtTime(0.001, time);
    gain.gain.linearRampToValueAtTime(0.22, time + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(gain);
    oscHarmonic.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    oscHarmonic.start(time);
    osc.stop(time + duration);
    oscHarmonic.stop(time + duration);
  }

  private playBassDrone(time: number, freq: number, duration = 0.8) {
    if (!this.ctx || !this.masterGain) return;
    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq, time);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(320, time);

    gain.gain.setValueAtTime(0.01, time);
    gain.gain.linearRampToValueAtTime(0.24, time + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + duration);
  }

  private triggerStep(trackId: string, s: number) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    switch (trackId) {
      case 'inquilab': {
        // High energy 16-step revolutionary drill & brass
        // D-Minor Patriotic scale: D3 (146.8), F3 (174.6), G3 (196.0), A3 (220.0), C4 (261.6), D4 (293.6)
        if (s % 8 === 0) this.playKick(now, 1.2);
        if (s % 8 === 4) this.playSnare(now, 1.0);
        if (s % 4 === 2) this.playWarDrum(now, 85, 0.2);

        // Heavy bassline
        if (s === 0 || s === 6 || s === 12 || s === 16 || s === 22 || s === 28) {
          const bassFreqs = [73.4, 73.4, 87.3, 98.0, 73.4, 110.0];
          this.playBassDrone(now, bassFreqs[Math.floor(s / 5) % bassFreqs.length], 0.35);
        }

        // Heroic rising trumpet melody
        const brassMotif: { [step: number]: number } = {
          0: 293.66, // D4
          4: 349.23, // F4
          8: 440.00, // A4
          12: 523.25, // C5
          14: 587.33, // D5
          16: 440.00, // A4
          20: 392.00, // G4
          24: 349.23, // F4
          28: 293.66, // D4
        };
        if (brassMotif[s]) {
          this.playBrassNote(now, brassMotif[s], 0.35, 'sawtooth');
        }
        break;
      }

      case 'vande-mataram': {
        // Soulful Raag Desh / Khamaj flute & string drone
        // Notes: D4 (293.6), F4 (349.2), G4 (392.0), A4 (440.0), B4 (493.8), C5 (523.2), D5 (587.3)
        if (s % 16 === 0) {
          this.playBassDrone(now, 146.83, 1.6); // D3 fundamental drone
          this.playWarDrum(now, 55, 0.8);
        }
        if (s % 8 === 4) {
          this.playWarDrum(now, 70, 0.3);
        }

        // Sacred flute melody
        const fluteMotif: { [step: number]: number } = {
          0: 392.00, // G4 (Vande)
          4: 440.00, // A4 (Ma-)
          8: 587.33, // D5 (-taram)
          12: 523.25, // C5
          16: 440.00, // A4
          20: 493.88, // B4
          24: 392.00, // G4
          28: 349.23, // F4
        };
        if (fluteMotif[s]) {
          this.playFluteNote(now, fluteMotif[s], 0.6);
        }
        break;
      }

      case 'kadam-kadam': {
        // Netaji's Azad Hind Fauj March
        // Crisp military march 4/4
        if (s % 4 === 0) this.playKick(now, 0.9);
        if (s % 4 === 2) this.playSnare(now, 1.1);
        if (s % 2 === 1) this.playWarDrum(now, 110, 0.1);

        // Marching brass fanfare
        const marchBrass: { [step: number]: number } = {
          0: 261.63, // C4
          2: 261.63, // C4
          4: 329.63, // E4
          6: 392.00, // G4
          8: 523.25, // C5
          12: 392.00, // G4
          16: 440.00, // A4
          18: 440.00, // A4
          20: 392.00, // G4
          24: 329.63, // E4
          28: 261.63, // C4
        };
        if (marchBrass[s]) {
          this.playBrassNote(now, marchBrass[s], 0.22, 'square');
        }
        break;
      }

      case 'veerangana': {
        // High tempo galloping battle drums of Jhansi
        if (s % 3 === 0) this.playWarDrum(now, 75, 0.25);
        if (s % 6 === 3) this.playKick(now, 1.2);
        if (s % 4 === 2) this.playSnare(now, 0.8);

        // Fierce war horn arpeggio
        const battleHorn: { [step: number]: number } = {
          0: 220.00, // A3
          3: 261.63, // C4
          6: 329.63, // E4
          9: 440.00, // A4
          12: 523.25, // C5
          15: 659.25, // E5
          18: 523.25, // C5
          21: 440.00, // A4
          24: 329.63, // E4
          27: 261.63, // C4
        };
        if (battleHorn[s]) {
          this.playBrassNote(now, battleHorn[s], 0.28, 'sawtooth');
        }
        break;
      }
    }
  }
}

export const audioEngine = new FreedomAudioEngine();
