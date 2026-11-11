import { useEffect, useState } from "react";
import { Eye, EyeOff, RotateCcw, PartyPopper, Cpu } from "lucide-react";
import type { Pair } from "@/data/juegos";
import { useApp } from "@/lib/app-state";
import { GameStage } from "./GameStage";

type Card = Pair & { key: string };

function shuffle(pairs: Pair[]): Card[] {
  const cards = pairs.flatMap((p) => [{ ...p, key: p.id + "-a" }, { ...p, key: p.id + "-b" }]);
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j]!, cards[i]!];
  }
  return cards;
}

/** Motor de memorama reutilizable: recibe cualquier conjunto de parejas. */
export type MemoryCategory = { id: string; label: string; pairs: Pair[] };

export function MemoryGame({ title, pairs: basePairs, activityId, categories }: {
  title: string; pairs: Pair[]; activityId: string; categories?: MemoryCategory[];
}) {
  const { play, markDone } = useApp();
  const [catId, setCatId] = useState(categories?.[0]?.id);
  const pairs = categories?.find((c) => c.id === catId)?.pairs ?? basePairs;
  const [moves, setMoves] = useState(0);
  const [cards, setCards] = useState<Card[]>([]);
  const [open, setOpen] = useState<string[]>([]);
  const [matched, setMatched] = useState<string[]>([]);
  const [peek, setPeek] = useState(false);

  const reset = () => {
    setCards(shuffle(pairs));
    setOpen([]);
    setMatched([]);
    setPeek(false);
    setMoves(0);
  };
  // Barajar en el cliente evita diferencias entre servidor y navegador.
  useEffect(reset, [pairs]); // eslint-disable-line react-hooks/exhaustive-deps

  const won = cards.length > 0 && matched.length === pairs.length;

  const flip = (c: Card) => {
    if (peek || open.length === 2 || open.includes(c.key) || matched.includes(c.id)) return;
    const nextOpen = [...open, c.key];
    setOpen(nextOpen);
    if (nextOpen.length === 2) {
      setMoves((m) => m + 1);
      const a = cards.find((x) => x.key === nextOpen[0])!;
      const b = cards.find((x) => x.key === nextOpen[1])!;
      if (a.id === b.id) {
        const m = [...matched, a.id];
        setMatched(m);
        setOpen([]);
        if (m.length === pairs.length) {
          play("finish");
          markDone(activityId);
        } else play("correct");
      } else {
        play("wrong");
        setTimeout(() => setOpen([]), 1200);
      }
    }
  };

  return (
    <GameStage title={title} instructions="Los alumnos dicen qué tarjetas voltear y la docente las selecciona. ¡Encuentren las parejas!">
      {categories && (
        <div className="mb-6 flex flex-wrap gap-3" role="radiogroup" aria-label="Categoría del memorama">
          {categories.map((c) => (
            <button key={c.id} role="radio" aria-checked={catId === c.id} disabled={c.pairs.length === 0}
              onClick={() => setCatId(c.id)}
              className={`btn text-lg ${catId === c.id ? "btn-primary" : "btn-ghost"} disabled:opacity-50`}>
              {c.label}{c.pairs.length === 0 ? " (pronto)" : ""}
            </button>
          ))}
        </div>
      )}
      {won ? (
        <div className="pop-in flex flex-col items-center gap-4 py-10 text-center">
          <PartyPopper className="h-20 w-20 text-primary" />
          <p className="text-4xl font-black">¡Felicidades! Encontraron todas las parejas.</p>
          <p className="text-xl font-extrabold text-muted-foreground">Movimientos: {moves}</p>
          <button onClick={reset} className="btn btn-primary text-lg"><RotateCcw className="h-5 w-5" /> Jugar de nuevo</button>
        </div>
      ) : (
        <>
          <div className={`grid grid-cols-3 gap-3 md:gap-4 sm:grid-cols-4 ${pairs.length > 8 ? "lg:grid-cols-6" : ""}`}>
            {cards.map((c, i) => {
              const shown = peek || open.includes(c.key) || matched.includes(c.id);
              const done = matched.includes(c.id);
              return (
                <button
                  key={c.key}
                  onClick={() => flip(c)}
                  aria-label={shown ? c.label : `Tarjeta ${i + 1}`}
                  className={`aspect-square perspective-[1000px] transition-transform ${shown ? "" : "hover:-translate-y-1"}`}
                >
                  <span className={`relative block h-full w-full transition-transform duration-500 transform-3d ${shown ? "rotate-y-180" : ""}`}>
                    <span className="absolute inset-0 flex flex-col items-center justify-center gap-1 rounded-3xl bg-lavender backface-hidden">
                      <Cpu className="h-8 w-8 text-primary-foreground opacity-70" />
                      <span className="text-2xl font-black text-primary-foreground">{i + 1}</span>
                    </span>
                    <span className={`absolute inset-0 flex rotate-y-180 flex-col items-center justify-center gap-1 rounded-3xl border-4 p-2 backface-hidden ${done ? "border-success bg-success-soft" : "border-primary bg-card"}`}>
                      {c.image ? (
                        <img src={c.image} alt={c.label} className="min-h-0 w-full flex-1 object-contain" draggable={false} />
                      ) : (
                        <c.icon className="h-10 w-10 text-primary md:h-14 md:w-14" strokeWidth={1.6} />
                      )}
                      <span className="text-center text-base font-extrabold md:text-xl">{c.label}</span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-lg font-extrabold">Parejas: {matched.length} de {pairs.length} · Movimientos: {moves}</p>
            <div className="flex gap-3">
              <button onClick={() => setPeek((p) => !p)} className="btn btn-ghost">
                {peek ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                {peek ? "Ocultar tarjetas" : "Mostrar todas"}
              </button>
              <button onClick={reset} className="btn btn-primary"><RotateCcw className="h-5 w-5" /> Reiniciar</button>
            </div>
          </div>
        </>
      )}
    </GameStage>
  );
}
