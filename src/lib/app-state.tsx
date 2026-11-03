import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { playSound, type SoundKind } from "./sound";

export type Age = "pequenos" | "grandes";
export type Aged<T> = Record<Age, T>;

/** Temario por edad dentro de cada grupo. */
export type Level = "6" | "7" | "8" | "9-10" | "11-12";
export type Leveled<T> = Record<Level, T>;
export const LEVELS: { id: Level; age: Age; years: string; topic: string }[] = [
  { id: "6", age: "pequenos", years: "6 años", topic: "Windows y la computadora" },
  { id: "7", age: "pequenos", years: "7 años", topic: "Microsoft Word" },
  { id: "8", age: "pequenos", years: "8 años", topic: "Microsoft PowerPoint" },
  { id: "9-10", age: "grandes", years: "9 y 10 años", topic: "Microsoft Excel" },
  { id: "11-12", age: "grandes", years: "11 y 12 años", topic: "Integración avanzada" },
];
const isLevel = (x: unknown): x is Level => LEVELS.some((l) => l.id === x);

/** Contenido que cuenta para el progreso general. */
export const PROGRESS_ITEMS = [
  { id: "mod-windows", label: "Windows y la computadora", section: "Descubre" },
  { id: "mod-word", label: "Microsoft Word", section: "Descubre" },
  { id: "mod-powerpoint", label: "Microsoft PowerPoint", section: "Descubre" },
  { id: "mod-excel", label: "Microsoft Excel", section: "Descubre" },
  { id: "mod-integra", label: "Integración avanzada", section: "Descubre" },
  { id: "act-arma", label: "Encuentra la herramienta", section: "Experimenta" },
  { id: "act-clasifica", label: "Clasifica", section: "Experimenta" },
  { id: "act-detectives", label: "Reto práctico", section: "Experimenta" },
  { id: "game-memoria", label: "Memoria tecnológica", section: "Diviértete" },
  { id: "game-adivina", label: "Adivina qué soy", section: "Diviértete" },
] as const;

type Ctx = {
  age: Age;
  setAge: (a: Age) => void;
  level: Level;
  setLevel: (l: Level) => void;
  soundOn: boolean;
  toggleSound: () => void;
  play: (k: SoundKind) => void;
  done: string[];
  markDone: (id: string) => void;
  resetProgress: () => void;
  percent: number;
};

const AppCtx = createContext<Ctx | null>(null);
const K = { level: "tk-level", sound: "tk-sound", progress: "tk-progress" };

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [level, setLevelState] = useState<Level>("6");
  const [soundOn, setSoundOn] = useState(false);
  const [done, setDone] = useState<string[]>([]);

  useEffect(() => {
    try {
      const l = localStorage.getItem(K.level);
      if (isLevel(l)) setLevelState(l);
      setSoundOn(localStorage.getItem(K.sound) === "1");
      const p = JSON.parse(localStorage.getItem(K.progress) || "[]");
      if (Array.isArray(p)) setDone(p.filter((x) => typeof x === "string"));
    } catch {
      /* almacenamiento no disponible */
    }
  }, []);

  const age = LEVELS.find((l) => l.id === level)!.age;
  const setLevel = useCallback((l: Level) => {
    setLevelState(l);
    localStorage.setItem(K.level, l);
  }, []);
  const setAge = useCallback(
    (a: Age) => {
      if (a !== age) setLevel(LEVELS.find((l) => l.age === a)!.id);
    },
    [age, setLevel],
  );
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
      value={{ age, setAge, level, setLevel, soundOn, toggleSound, play, done: valid, markDone, resetProgress, percent }}
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
