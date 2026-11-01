import { useEffect, useRef, useState, type ReactNode } from "react";
import { Maximize, Minimize } from "lucide-react";

/** Contenedor común de actividades y juegos con instrucciones y pantalla completa. */
export function GameStage({ title, instructions, children }: { title: string; instructions: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [full, setFull] = useState(false);
  useEffect(() => {
    const h = () => setFull(document.fullscreenElement === ref.current);
    document.addEventListener("fullscreenchange", h);
    return () => document.removeEventListener("fullscreenchange", h);
  }, []);
  const toggle = () => {
    if (document.fullscreenElement) void document.exitFullscreen();
    else void ref.current?.requestFullscreen?.();
  };
  return (
    <div ref={ref} className={`card-soft p-5 md:p-8 ${full ? "overflow-auto rounded-none bg-background" : ""}`}>
      <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-3xl md:text-4xl">{title}</h2>
          <p className="mt-1 text-lg text-muted-foreground">{instructions}</p>
        </div>
        <button onClick={toggle} className="btn btn-ghost">
          {full ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
          {full ? "Salir de pantalla completa" : "Pantalla completa"}
        </button>
      </div>
      {children}
    </div>
  );
}

export function Picker<T extends string>({ items, value, onChange }: {
  items: { id: T; label: string; icon: React.ComponentType<{ className?: string }> }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => onChange(id)}
          aria-pressed={value === id}
          className={`flex items-center gap-3 rounded-2xl border-2 p-4 text-left text-lg font-extrabold transition-colors ${
            value === id ? "border-primary bg-lavender-soft" : "border-transparent bg-card hover:bg-sun-soft"
          }`}
        >
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-card text-primary"><Icon className="h-6 w-6" /></span>
          {label}
        </button>
      ))}
    </div>
  );
}
