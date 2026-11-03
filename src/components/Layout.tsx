import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Volume2, VolumeX } from "lucide-react";
import { LEVELS, useApp } from "@/lib/app-state";

const NAV = [
  { to: "/", label: "Inicio" },
  { to: "/descubre", label: "Descubre" },
  { to: "/experimenta", label: "Experimenta" },
  { to: "/diviertete", label: "Diviértete" },
] as const;

export function AgeToggle({ large = false }: { large?: boolean }) {
  const { age, setAge } = useApp();
  const opts = [
    { v: "pequenos", l: "Pequeños", s: "6-8" },
    { v: "grandes", l: "Grandes", s: "9-12" },
  ] as const;
  return (
    <div role="radiogroup" aria-label="Grupo de edad" className="inline-flex rounded-full bg-card p-1 shadow-sm">
      {opts.map((o) => (
        <button
          key={o.v}
          role="radio"
          aria-checked={age === o.v}
          onClick={() => setAge(o.v)}
          className={`rounded-full font-extrabold transition-colors ${large ? "px-5 py-2.5 text-base" : "px-3 py-1.5 text-sm"} ${
            age === o.v ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-lavender-soft"
          }`}
        >
          {o.l} <span className="opacity-75">{o.s}</span>
        </button>
      ))}
    </div>
  );
}

/** Edad dentro del grupo seleccionado: define el temario específico. */
export function LevelToggle() {
  const { age, level, setLevel } = useApp();
  return (
    <div role="radiogroup" aria-label="Edad y tema" className="flex flex-wrap gap-2">
      {LEVELS.filter((l) => l.age === age).map((l) => (
        <button
          key={l.id}
          role="radio"
          aria-checked={level === l.id}
          onClick={() => setLevel(l.id)}
          className={`rounded-2xl px-4 py-2 text-left font-extrabold transition-colors ${
            level === l.id ? "bg-primary text-primary-foreground" : "bg-card text-foreground shadow-sm hover:bg-lavender-soft"
          }`}
        >
          <span className="block text-sm opacity-80">{l.years}</span>
          {l.topic}
        </button>
      ))}
    </div>
  );
}

/** Selector completo para encabezados de sección: grupo + edad. */
export function CurriculumPicker() {
  return (
    <div className="flex flex-col items-start gap-3 md:items-end">
      <AgeToggle large />
      <LevelToggle />
    </div>
  );
}

function SoundToggle() {
  const { soundOn, toggleSound } = useApp();
  return (
    <button
      onClick={toggleSound}
      aria-pressed={soundOn}
      aria-label={soundOn ? "Desactivar sonidos" : "Activar sonidos"}
      title={soundOn ? "Sonidos activados" : "Sonidos desactivados"}
      className="grid h-10 w-10 place-items-center rounded-full bg-card text-foreground shadow-sm transition-colors hover:bg-sun-soft"
    >
      {soundOn ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
    </button>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const { percent } = useApp();
  const linkCls =
    "rounded-full px-4 py-2 font-extrabold text-nav-foreground transition-colors hover:bg-nav-active";
  return (
    <header className="sticky top-0 z-40 bg-nav shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
        <Link to="/" className="text-2xl font-black tracking-tight text-nav-foreground" onClick={() => setOpen(false)}>
          Tecno<span className="text-sun">Kids</span>
        </Link>
        <nav className="ml-6 hidden gap-1 md:flex" aria-label="Principal">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className={linkCls} activeProps={{ className: "bg-nav-active" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <span className="hidden rounded-full bg-card px-3 py-2 text-sm font-extrabold lg:inline" title="Progreso del contenido">
            Avance {percent}%
          </span>
          <div className="hidden sm:block"><AgeToggle /></div>
          <SoundToggle />
          <button
            className="grid h-10 w-10 place-items-center rounded-full bg-card md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 px-4 pb-4 md:hidden" aria-label="Menú móvil">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className={linkCls} activeProps={{ className: "bg-nav-active" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
          <div className="pt-2 sm:hidden"><AgeToggle /></div>
        </nav>
      )}
    </header>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <footer className="mt-16 border-t bg-card">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 sm:flex-row">
          <span className="text-xl font-black">Tecno<span className="text-primary">Kids</span></span>
          <span className="font-bold text-muted-foreground">Explora. Aprende. Crea.</span>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({ title, subtitle, children }: { title: string; subtitle: string; children?: ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-10 pb-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-4xl md:text-5xl">{title}</h1>
          <p className="mt-2 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>
        </div>
        {children}
      </div>
    </section>
  );
}
