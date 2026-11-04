import { useState } from "react";
import { ChevronLeft, ChevronRight, Eye, RotateCcw, PartyPopper, CheckCircle2, XCircle } from "lucide-react";
import type { Question } from "@/data/juegos";
import { useApp } from "@/lib/app-state";
import { GameStage } from "./GameStage";

type Props = { title: string; instructions: string; questions: Question[]; activityId: string };

/**
 * Motor reutilizable de preguntas para proyección: la docente elige la respuesta del grupo
 * o revela la correcta; puede avanzar, retroceder y reiniciar.
 */
export function QuizEngine({ title, instructions, questions, activityId }: Props) {
  const { play, markDone } = useApp();
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<Record<number, number | "reveal">>({});
  const [finished, setFinished] = useState(false);

  const q = questions[idx]!;
  const state = picked[idx];
  const answered = state !== undefined;

  const choose = (i: number) => {
    if (answered) return;
    setPicked((p) => ({ ...p, [idx]: i }));
    play(i === q.answer ? "correct" : "wrong");
  };
  const next = () => {
    if (idx < questions.length - 1) setIdx(idx + 1);
    else {
      setFinished(true);
      markDone(activityId);
      play("finish");
    }
  };
  const restart = () => {
    setIdx(0);
    setPicked({});
    setFinished(false);
  };

  if (finished)
    return (
      <GameStage title={title} instructions={instructions}>
        <div className="pop-in flex flex-col items-center gap-4 py-10 text-center">
          <PartyPopper className="h-20 w-20 text-primary" />
          <p className="text-4xl font-black">¡Actividad completada!</p>
          <p className="text-xl text-muted-foreground">¡Excelente trabajo en equipo!</p>
          <button onClick={restart} className="btn btn-primary text-lg"><RotateCcw className="h-5 w-5" /> Volver a intentar</button>
        </div>
      </GameStage>
    );

  const correct = state === q.answer;
  return (
    <GameStage title={title} instructions={instructions}>
      <p className="mb-2 font-extrabold text-muted-foreground">Pregunta {idx + 1} de {questions.length}</p>
      <div className="mb-6 h-2 rounded-full bg-muted">
        <div className="h-2 rounded-full bg-mint transition-all" style={{ width: `${((idx + 1) / questions.length) * 100}%` }} />
      </div>

      <div key={idx} className="pop-in flex flex-col items-center gap-4 text-center">
        {q.icon && (
          <div className="grid h-32 w-32 place-items-center rounded-3xl bg-sun-soft md:h-40 md:w-40">
            <q.icon className="h-20 w-20 text-foreground md:h-24 md:w-24" strokeWidth={1.5} />
          </div>
        )}
        <p className="text-3xl font-black leading-tight md:text-4xl">{q.prompt}</p>
      </div>

      <div className={`mt-8 grid gap-4 ${q.options.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>
        {q.options.map((o, i) => {
          const isAnswer = i === q.answer;
          const isPicked = state === i;
          let cls = "border-border bg-card hover:border-primary hover:bg-lavender-soft";
          if (answered && isAnswer) cls = "border-success bg-success-soft";
          else if (answered && isPicked) cls = "border-error bg-error-soft";
          else if (answered) cls = "border-border bg-card opacity-60";
          return (
            <button
              key={o.label}
              onClick={() => choose(i)}
              disabled={answered}
              className={`flex flex-col items-center gap-3 rounded-3xl border-4 p-6 text-2xl font-extrabold transition-all disabled:cursor-default ${cls}`}
            >
              {o.icon && <o.icon className="h-14 w-14 text-primary" strokeWidth={1.6} />}
              {o.label}
              {answered && isAnswer && <CheckCircle2 className="h-7 w-7 text-success" />}
              {answered && isPicked && !isAnswer && <XCircle className="h-7 w-7 text-error" />}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className={`pop-in mt-6 rounded-3xl p-5 text-xl ${state === "reveal" ? "bg-sun-soft" : correct ? "bg-success-soft" : "bg-error-soft"}`}>
          <p className="font-black">
            {state === "reveal" ? "Respuesta correcta: " + q.options[q.answer]?.label : correct ? "¡Correcto! ¡Muy bien!" : "¡Casi! Revisemos juntos."}
          </p>
          <p className="mt-1">{q.explain}</p>
        </div>
      )}

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        <button onClick={() => setIdx(idx - 1)} disabled={idx === 0} className="btn btn-ghost">
          <ChevronLeft className="h-5 w-5" /> Anterior
        </button>
        <div className="flex flex-wrap gap-3">
          <button onClick={() => setPicked((p) => ({ ...p, [idx]: "reveal" }))} disabled={answered} className="btn btn-ghost">
            <Eye className="h-5 w-5" /> Mostrar respuesta
          </button>
          <button onClick={restart} className="btn btn-ghost"><RotateCcw className="h-5 w-5" /> Reiniciar</button>
        </div>
        <button onClick={next} disabled={!answered} className="btn btn-primary">
          {idx === questions.length - 1 ? "Terminar" : "Siguiente"} <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </GameStage>
  );
}
