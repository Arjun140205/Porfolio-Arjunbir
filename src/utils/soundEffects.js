// Sound Effects Manager
class SoundManager {
  constructor() {
    this.sounds = {};
    this.enabled = true;
    this.volume = 0.4; // Default volume (0-1) - slightly increased for better audibility
    
    // Initialize sounds using Web Audio API for better performance
    this.audioContext = null;
    if (typeof window !== 'undefined' && (window.AudioContext || window.webkitAudioContext)) {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  // Create a simple click sound - Soft professional tick
  createClickSound() {
    if (!this.audioContext) return;
    
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    oscillator.frequency.value = 1400;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(this.volume * 0.12, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.04);
    
    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + 0.04);
  }

  // Create a button click sound - Slightly different from nav click
  createButtonClickSound() {
    if (!this.audioContext) return;
    
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    // Lower, warmer tone for buttons
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(this.volume * 0.18, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.06);
    
    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + 0.06);
  }

  // Create a hover sound - Very subtle and soft
  createHoverSound() {
    if (!this.audioContext) return;
    
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    // Softer, higher frequency for a gentle hover
    oscillator.frequency.value = 900;
    oscillator.type = 'sine';
    
    // Very quiet and brief
    gainNode.gain.setValueAtTime(this.volume * 0.08, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.04);
    
    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + 0.04);
  }

  // OPTION 1: Soft Swoosh - Smooth downward sweep (DEFAULT)
  createTransitionSwoosh() {
    if (!this.audioContext) return;
    
    const osc = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();
    const filter = this.audioContext.createBiquadFilter();
    
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.audioContext.destination);
    
    // Smooth downward sweep
    osc.frequency.setValueAtTime(1200, this.audioContext.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, this.audioContext.currentTime + 0.25);
    osc.type = 'sine';
    
    filter.type = 'lowpass';
    filter.frequency.value = 2000;
    filter.Q.value = 1;
    
    gain.gain.setValueAtTime(this.volume * 0.1, this.audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.25);
    
    osc.start(this.audioContext.currentTime);
    osc.stop(this.audioContext.currentTime + 0.25);
  }

  // OPTION 2: Subtle Slide - Very minimal
  createTransitionSlide() {
    if (!this.audioContext) return;
    
    const osc = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();
    
    osc.connect(gain);
    gain.connect(this.audioContext.destination);
    
    osc.frequency.setValueAtTime(600, this.audioContext.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, this.audioContext.currentTime + 0.18);
    osc.type = 'triangle';
    
    gain.gain.setValueAtTime(this.volume * 0.08, this.audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.18);
    
    osc.start(this.audioContext.currentTime);
    osc.stop(this.audioContext.currentTime + 0.18);
  }

  // OPTION 3: Soft Whoosh - Filtered noise
  createTransitionWhoosh() {
    if (!this.audioContext) return;
    
    const bufferSize = this.audioContext.sampleRate * 0.25;
    const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    
    const noise = this.audioContext.createBufferSource();
    noise.buffer = buffer;
    
    const filter = this.audioContext.createBiquadFilter();
    const gain = this.audioContext.createGain();
    
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.audioContext.destination);
    
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2000, this.audioContext.currentTime);
    filter.frequency.exponentialRampToValueAtTime(500, this.audioContext.currentTime + 0.25);
    filter.Q.value = 2;
    
    gain.gain.setValueAtTime(0, this.audioContext.currentTime);
    gain.gain.linearRampToValueAtTime(this.volume * 0.12, this.audioContext.currentTime + 0.05);
    gain.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + 0.25);
    
    noise.start(this.audioContext.currentTime);
    noise.stop(this.audioContext.currentTime + 0.25);
  }

  // OPTION 4: Gentle Fade - Soft tone fade
  createTransitionFade() {
    if (!this.audioContext) return;
    
    const osc1 = this.audioContext.createOscillator();
    const osc2 = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();
    
    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.audioContext.destination);
    
    osc1.frequency.value = 440;
    osc1.type = 'sine';
    
    osc2.frequency.value = 880;
    osc2.type = 'sine';
    
    gain.gain.setValueAtTime(this.volume * 0.06, this.audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.2);
    
    osc1.start(this.audioContext.currentTime);
    osc2.start(this.audioContext.currentTime);
    osc1.stop(this.audioContext.currentTime + 0.2);
    osc2.stop(this.audioContext.currentTime + 0.2);
  }

  // OPTION 5: Minimal Blip - Almost silent
  createTransitionBlip() {
    if (!this.audioContext) return;
    
    const osc = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();
    
    osc.connect(gain);
    gain.connect(this.audioContext.destination);
    
    osc.frequency.value = 800;
    osc.type = 'sine';
    
    gain.gain.setValueAtTime(this.volume * 0.05, this.audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);
    
    osc.start(this.audioContext.currentTime);
    osc.stop(this.audioContext.currentTime + 0.1);
  }

  // OPTION 6: Soft Tap - Single clean tone (More gentle version)
  createTransitionTap() {
    if (!this.audioContext) return;
    
    const osc = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();
    const filter = this.audioContext.createBiquadFilter();
    
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.audioContext.destination);
    
    // Slightly lower frequency for warmer, gentler sound
    osc.frequency.value = 900;
    osc.type = 'sine';
    
    // Soft lowpass filter for smoothness
    filter.type = 'lowpass';
    filter.frequency.value = 1500;
    filter.Q.value = 0.5;
    
    // Quieter and smoother fade
    gain.gain.setValueAtTime(this.volume * 0.06, this.audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.15);
    
    osc.start(this.audioContext.currentTime);
    osc.stop(this.audioContext.currentTime + 0.15);
  }

  // OPTION 7: Quick Drop - Fast downward tone
  createTransitionDrop() {
    if (!this.audioContext) return;
    
    const osc = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();
    
    osc.connect(gain);
    gain.connect(this.audioContext.destination);
    
    osc.frequency.setValueAtTime(900, this.audioContext.currentTime);
    osc.frequency.exponentialRampToValueAtTime(450, this.audioContext.currentTime + 0.15);
    osc.type = 'sine';
    
    gain.gain.setValueAtTime(this.volume * 0.09, this.audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.15);
    
    osc.start(this.audioContext.currentTime);
    osc.stop(this.audioContext.currentTime + 0.15);
  }

  // OPTION 8: Soft Rise - Gentle upward tone
  createTransitionRise() {
    if (!this.audioContext) return;
    
    const osc = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();
    
    osc.connect(gain);
    gain.connect(this.audioContext.destination);
    
    osc.frequency.setValueAtTime(500, this.audioContext.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1000, this.audioContext.currentTime + 0.16);
    osc.type = 'sine';
    
    gain.gain.setValueAtTime(this.volume * 0.07, this.audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.16);
    
    osc.start(this.audioContext.currentTime);
    osc.stop(this.audioContext.currentTime + 0.16);
  }

  // OPTION 9: Whisper - Very soft and brief
  createTransitionWhisper() {
    if (!this.audioContext) return;
    
    const osc = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();
    const filter = this.audioContext.createBiquadFilter();
    
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.audioContext.destination);
    
    osc.frequency.value = 700;
    osc.type = 'sine';
    
    filter.type = 'lowpass';
    filter.frequency.value = 1200;
    
    gain.gain.setValueAtTime(this.volume * 0.06, this.audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);
    
    osc.start(this.audioContext.currentTime);
    osc.stop(this.audioContext.currentTime + 0.1);
  }

  // OPTION 10: Clean Sweep - Smooth and professional
  createTransitionSweep() {
    if (!this.audioContext) return;
    
    const osc = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();
    const filter = this.audioContext.createBiquadFilter();
    
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.audioContext.destination);
    
    osc.frequency.setValueAtTime(800, this.audioContext.currentTime);
    osc.frequency.exponentialRampToValueAtTime(500, this.audioContext.currentTime + 0.2);
    osc.type = 'sine';
    
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1500, this.audioContext.currentTime);
    filter.frequency.exponentialRampToValueAtTime(800, this.audioContext.currentTime + 0.2);
    
    gain.gain.setValueAtTime(this.volume * 0.08, this.audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.2);
    
    osc.start(this.audioContext.currentTime);
    osc.stop(this.audioContext.currentTime + 0.2);
  }

  // Main transition sound - Change the method name here to switch sounds
  createTransitionSound() {
    // CHANGE THIS LINE TO TRY DIFFERENT SOUNDS:
    // Options: 
    // createTransitionSwoosh - Smooth downward sweep
    // createTransitionSlide - Very minimal
    // createTransitionWhoosh - Filtered noise
    // createTransitionFade - Gentle tone fade
    // createTransitionBlip - Almost silent
    // createTransitionTap - Single clean tone
    // createTransitionDrop - Fast downward tone
    // createTransitionRise - Gentle upward tone
    // createTransitionWhisper - Very soft and brief
    // createTransitionSweep - Smooth and professional
    
    this.createTransitionTap(); // <-- Soft Tap selected (simple and clean)
  }

  // Create a soft pop sound for menu interactions - Professional and clean
  createPopSound() {
    if (!this.audioContext) return;
    
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    // Higher frequency for cleaner sound
    oscillator.frequency.value = 1000;
    oscillator.type = 'sine';
    
    // Very quick and subtle
    gainNode.gain.setValueAtTime(this.volume * 0.14, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.06);
    
    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + 0.06);
  }

  // Create a success sound - Professional two-tone confirmation
  createSuccessSound() {
    if (!this.audioContext) return;
    
    // First tone - Clean and professional
    const osc1 = this.audioContext.createOscillator();
    const gain1 = this.audioContext.createGain();
    
    osc1.connect(gain1);
    gain1.connect(this.audioContext.destination);
    
    osc1.frequency.value = 1200; // Higher, more professional
    osc1.type = 'sine';
    
    gain1.gain.setValueAtTime(this.volume * 0.12, this.audioContext.currentTime);
    gain1.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.12);
    
    osc1.start(this.audioContext.currentTime);
    osc1.stop(this.audioContext.currentTime + 0.12);
    
    // Second tone (delayed) - Harmonious interval
    const osc2 = this.audioContext.createOscillator();
    const gain2 = this.audioContext.createGain();
    
    osc2.connect(gain2);
    gain2.connect(this.audioContext.destination);
    
    osc2.frequency.value = 1600; // Perfect fourth interval
    osc2.type = 'sine';
    
    gain2.gain.setValueAtTime(this.volume * 0.12, this.audioContext.currentTime + 0.06);
    gain2.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.18);
    
    osc2.start(this.audioContext.currentTime + 0.06);
    osc2.stop(this.audioContext.currentTime + 0.18);
  }

  // Play sound by type
  play(type) {
    if (!this.enabled || !this.audioContext) return;
    
    // Resume audio context if suspended (browser autoplay policy)
    if (this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }
    
    switch(type) {
      case 'click':
        this.createClickSound();
        break;
      case 'buttonClick':
        this.createButtonClickSound();
        break;
      case 'hover':
        this.createHoverSound();
        break;
      case 'transition':
        this.createTransitionSound();
        break;
      case 'transitionSweep':
        this.createTransitionSweep();
        break;
      case 'transitionWhisper':
        this.createTransitionWhisper();
        break;
      case 'transitionRise':
        this.createTransitionRise();
        break;
      case 'pop':
        this.createPopSound();
        break;
      case 'success':
        this.createSuccessSound();
        break;
      default:
        break;
    }
  }

  // Toggle sound on/off
  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  // Set volume (0-1)
  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, vol));
  }
}

// Create singleton instance
const soundManager = new SoundManager();

export default soundManager;

// Helper hook for React components
export const useSoundEffect = () => {
  return {
    playClick: () => soundManager.play('click'),
    playButtonClick: () => soundManager.play('buttonClick'),
    playHover: () => soundManager.play('hover'),
    playTransition: () => soundManager.play('transition'),
    playPop: () => soundManager.play('pop'),
    playSuccess: () => soundManager.play('success'),
    toggle: () => soundManager.toggle(),
    setVolume: (vol) => soundManager.setVolume(vol),
  };
};
