export type SoundKind = "correct" | "wrong" | "finish";

let ctx: AudioContext | null = null;

const NOTES: Record<SoundKind, [number, number][]> = {
  correct: [[660, 0.1], [880, 0.15]],
  wrong: [[300, 0.15], [240, 0.2]],
  finish: [[523, 0.12], [659, 0.12], [784, 0.12], [1047, 0.3]],
};

/** Sonidos originales sintetizados; solo se llaman tras una acción del usuario. */
export function playSound(kind: SoundKind) {
  if (typeof window === "undefined") return;
  try {
    ctx ??= new AudioContext();
    let t = ctx.currentTime;
    for (const [freq, dur] of NOTES[kind]) {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = kind === "wrong" ? "triangle" : "sine";
      o.frequency.value = freq;
      g.gain.setValueAtTime(0.18, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + dur);
      o.connect(g).connect(ctx.destination);
      o.start(t);
      o.stop(t + dur);
      t += dur * 0.9;
    }
  } catch {
    /* audio no disponible */
  }
}
