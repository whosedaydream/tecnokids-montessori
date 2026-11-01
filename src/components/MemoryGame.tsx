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
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

/** Motor de memorama reutilizable: recibe cualquier conjunto de parejas. */
export function MemoryGame({ title, pairs, activityId }: { title: string; pairs: Pair[]; activityId: string }) {
  const { play, markDone } = useApp();
  const [cards, setCards] = useState<Card[]>([]);
  const [open, setOpen] = useState<string[]>([]);
  const [matched, setMatched] = useState<string[]>([]);
  const [peek, setPeek] = useState(false);

  const reset = () => {
    setCards(shuffle(pairs));
    setOpen([]);
    setMatched([]);
    setPeek(false);
  };
  // Barajar en el cliente evita diferencias entre servidor y navegador.
  useEffect(reset, [pairs]); // eslint-disable-line react-hooks/exhaustive-deps

  const won = cards.length > 0 && matched.length === pairs.length;

  const flip = (c: Card) => {
    if (peek || open.length === 2 || open.includes(c.key) || matched.includes(c.id)) return;
    const nextOpen = [...open, c.key];
    setOpen(nextOpen);
    if (nextOpen.length === 2) {
      const [a, b] = nextOpen.map((k) => cards.find((x) => x.key === k)!);
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
      {won ? (
        <div className="pop-in flex flex-col items-center gap-4 py-10 text-center">
          <PartyPopper className="h-20 w-20 text-primary" />
          <p className="text-4xl font-black">¡Felicidades! Encontraron todas las parejas.</p>
          <button onClick={reset} className="btn btn-primary text-lg"><RotateCcw className="h-5 w-5" /> Jugar de nuevo</button>
        </div>
      ) : (
        <>
          <div className={`grid grid-cols-3 gap-3 md:gap-4 ${pairs.length > 6 ? "sm:grid-cols-4" : "sm:grid-cols-4"}`}>
            {cards.map((c, i) => {
              const shown = peek || open.includes(c.key) || matched.includes(c.id);
              const done = matched.includes(c.id);
              return (
                <button
                  key={c.key}
                  onClick={() => flip(c)}
                  aria-label={shown ? c.label : `Tarjeta ${i + 1}`}
                  className={`flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-3xl border-4 p-2 transition-all duration-300 ${
                    done ? "border-success bg-success-soft" : shown ? "border-primary bg-card" : "border-transparent bg-lavender hover:-translate-y-1"
                  }`}
                >
                  {shown ? (
                    <>
                      <c.icon className="h-10 w-10 text-primary md:h-14 md:w-14" strokeWidth={1.6} />
                      <span className="text-center text-base font-extrabold md:text-xl">{c.label}</span>
                    </>
                  ) : (
                    <>
                      <Cpu className="h-8 w-8 text-primary-foreground opacity-70" />
                      <span className="text-2xl font-black text-primary-foreground">{i + 1}</span>
                    </>
                  )}
                </button>
              );
            })}
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-lg font-extrabold">Parejas: {matched.length} de {pairs.length}</p>
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
