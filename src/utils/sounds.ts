// Simple Web Audio API sound effects
class SoundEffects {
  private audioContext: AudioContext | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  }

  private playTone(frequency: number, duration: number, type: OscillatorType = 'sine') {
    if (!this.audioContext) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = type;

    gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);

    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + duration);
  }

  startup() {
    // Windows XP startup sound simulation
    this.playTone(523, 0.1);
    setTimeout(() => this.playTone(659, 0.1), 100);
    setTimeout(() => this.playTone(784, 0.15), 200);
    setTimeout(() => this.playTone(1047, 0.3), 350);
  }

  click() {
    this.playTone(800, 0.05, 'square');
  }

  minimize() {
    this.playTone(400, 0.1);
    setTimeout(() => this.playTone(300, 0.1), 50);
  }

  maximize() {
    this.playTone(500, 0.1);
    setTimeout(() => this.playTone(600, 0.1), 50);
  }

  close() {
    this.playTone(600, 0.08);
    setTimeout(() => this.playTone(400, 0.12), 60);
  }

  open() {
    this.playTone(400, 0.08);
    setTimeout(() => this.playTone(600, 0.12), 60);
  }

  error() {
    this.playTone(200, 0.2, 'square');
  }
}

export const sounds = new SoundEffects();
