import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Sparkles, Undo2, CheckCircle2 } from "lucide-react";
import { MODULES, toneClasses, type LearnCard } from "@/data/descubre";
import { useApp } from "@/lib/app-state";
import { CurriculumPicker, PageHeader } from "@/components/Layout";

export const Route = createFileRoute("/descubre")({
  head: () => ({
    meta: [
      { title: "Descubre — Biblioteca de aprendizaje | TecnoKids" },
      { name: "description", content: "Tarjetas por edad: Windows, Word, PowerPoint, Excel e integración avanzada." },
      { property: "og:title", content: "Descubre — TecnoKids" },
      { property: "og:description", content: "Biblioteca de aprendizaje de computación para niños." },
    ],
  }),
  component: Descubre,
});

function Descubre() {
  const { level, done, markDone } = useApp();
  const [opened, setOpened] = useState<Record<string, boolean>>({});
  const mod = MODULES[level];

  // El módulo se marca como realizado al descubrir todas sus tarjetas.
  useEffect(() => {
    if (mod.cards.every((c) => opened[mod.id + c.title])) markDone(mod.id);
  }, [opened, mod, markDone]);

  return (
    <>
      <PageHeader title="Descubre" subtitle="Elige un módulo y pulsa cada tarjeta para descubrir su explicación.">
        <CurriculumPicker />
      </PageHeader>
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-4 flex items-center gap-2 text-3xl"><mod.icon className="h-8 w-8 text-primary" /> {mod.title}</h2>
        {done.includes(mod.id) && (
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-success-soft px-4 py-2 font-extrabold text-success">
            <CheckCircle2 className="h-5 w-5" /> Módulo explorado
          </p>
        )}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {mod.cards.map((c) => {
            const k = mod.id + c.title;
            return (
              <FlipCard key={k} card={c} tone={toneClasses[mod.tone]} open={!!opened[k]}
                onToggle={() => setOpened((o) => ({ ...o, [k]: !o[k] || true }))} onClose={() => setOpened((o) => ({ ...o, [k]: false }))} />
            );
          })}
        </div>
      </div>
    </>
  );
}

function FlipCard({ card, tone, open, onToggle, onClose }: {
  card: LearnCard; tone: string; open: boolean; onToggle: () => void; onClose: () => void;
}) {
  const Icon = card.icon;
  return (
    <div className="card-soft lift flex min-h-80 flex-col p-6">
      {!open ? (
        <button onClick={onToggle} className="flex flex-1 flex-col items-start gap-3 text-left">
          <span className={`grid h-24 w-full place-items-center rounded-2xl ${tone}`}><Icon className="h-14 w-14" strokeWidth={1.6} /></span>
          <h3 className="text-2xl">{card.title}</h3>
          <p className="text-lg text-muted-foreground">{card.desc}</p>
          <span className="btn btn-primary mt-auto">Descubrir</span>
        </button>
      ) : (
        <div className="pop-in flex flex-1 flex-col gap-3">
          <h3 className="flex items-center gap-2 text-2xl"><Icon className="h-7 w-7 text-primary" /> {card.title}</h3>
          <p className="text-lg">{card.explain}</p>
          <div className="rounded-2xl bg-sun-soft p-4">
            <p className="flex items-center gap-2 font-extrabold"><Sparkles className="h-5 w-5" /> Dato curioso</p>
            <p>{card.fact}</p>
          </div>
          <button onClick={onClose} className="btn btn-ghost mt-auto"><Undo2 className="h-4 w-4" /> Volver</button>
        </div>
      )}
    </div>
  );
}
