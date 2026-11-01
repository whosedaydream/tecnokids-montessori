import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { playSound, type SoundKind } from "./sound";

export type Age = "pequenos" | "grandes";
export type Aged<T> = Record<Age, T>;

/** Contenido que cuenta para el progreso general. */
export const PROGRESS_ITEMS = [
  { id: "mod-computadora", label: "Conoce tu computadora", section: "Descubre" },
  { id: "mod-hwsw", label: "Hardware y software", section: "Descubre" },
  { id: "mod-internet", label: "Internet seguro", section: "Descubre" },
  { id: "mod-digital", label: "Mundo digital", section: "Descubre" },
  { id: "act-arma", label: "Arma tu computadora", section: "Experimenta" },
  { id: "act-clasifica", label: "Hardware o software", section: "Experimenta" },
  { id: "act-detectives", label: "Detectives digitales", section: "Experimenta" },
  { id: "game-memoria", label: "Memoria tecnológica", section: "Diviértete" },
  { id: "game-adivina", label: "Adivina qué soy", section: "Diviértete" },
] as const;

type Ctx = {
  age: Age;
  setAge: (a: Age) => void;
  soundOn: boolean;
  toggleSound: () => void;
  play: (k: SoundKind) => void;
  done: string[];
  markDone: (id: string) => void;
  resetProgress: () => void;
  percent: number;
};

const AppCtx = createContext<Ctx | null>(null);
const K = { age: "tk-age", sound: "tk-sound", progress: "tk-progress" };

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [age, setAgeState] = useState<Age>("pequenos");
  const [soundOn, setSoundOn] = useState(false);
  const [done, setDone] = useState<string[]>([]);

  useEffect(() => {
    try {
      const a = localStorage.getItem(K.age);
      if (a === "pequenos" || a === "grandes") setAgeState(a);
      setSoundOn(localStorage.getItem(K.sound) === "1");
      const p = JSON.parse(localStorage.getItem(K.progress) || "[]");
      if (Array.isArray(p)) setDone(p.filter((x) => typeof x === "string"));
    } catch {
      /* almacenamiento no disponible */
    }
  }, []);

  const setAge = useCallback((a: Age) => {
    setAgeState(a);
    localStorage.setItem(K.age, a);
  }, []);
  const toggleSound = useCallback(() => {
    setSoundOn((s) => {
      localStorage.setItem(K.sound, s ? "0" : "1");
      return !s;
    });
  }, []);
  const play = useCallback((k: SoundKind) => soundOn && playSound(k), [soundOn]);
  const markDone = useCallback((id: string) => {
    setDone((d) => {
      if (d.includes(id)) return d;
      const n = [...d, id];
      localStorage.setItem(K.progress, JSON.stringify(n));
      return n;
    });
  }, []);
  const resetProgress = useCallback(() => {
    setDone([]);
    localStorage.removeItem(K.progress);
  }, []);

  const valid = done.filter((id) => PROGRESS_ITEMS.some((i) => i.id === id));
  const percent = Math.round((valid.length / PROGRESS_ITEMS.length) * 100);

  return (
    <AppCtx.Provider
      value={{ age, setAge, soundOn, toggleSound, play, done: valid, markDone, resetProgress, percent }}
    >
      {children}
    </AppCtx.Provider>
  );
}

export function useApp() {
  const c = useContext(AppCtx);
  if (!c) throw new Error("useApp fuera de AppStateProvider");
  return c;
}
