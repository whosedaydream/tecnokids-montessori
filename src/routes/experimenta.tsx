import { createFileRoute } from "@tanstack/react-router";
import { Puzzle, Shapes, Search } from "lucide-react";
import { ARMA, CLASIFICA, DETECTIVES } from "@/data/juegos";
import { useApp } from "@/lib/app-state";
import { CurriculumPicker, PageHeader } from "@/components/Layout";
import { Picker } from "@/components/GameStage";
import { QuizEngine } from "@/components/QuizEngine";

const ACTS = [
  { id: "arma", label: "Encuentra la herramienta", icon: Puzzle, progress: "act-arma", data: ARMA,
    instructions: "Lean la pista en voz alta. El grupo elige la herramienta correcta y la docente la selecciona." },
  { id: "clasifica", label: "Clasifica", icon: Shapes, progress: "act-clasifica", data: CLASIFICA,
    instructions: "El grupo decide a qué categoría pertenece cada tarjeta." },
  { id: "detectives", label: "Reto práctico", icon: Search, progress: "act-detectives", data: DETECTIVES,
    instructions: "Lean la situación y decidan cuál es el paso correcto en el programa." },
] as const;
type ActId = (typeof ACTS)[number]["id"];

export const Route = createFileRoute("/experimenta")({
  validateSearch: (s: Record<string, unknown>): { a?: ActId } =>
    ACTS.some((x) => x.id === s["a"]) ? { a: s["a"] as ActId } : {},
  head: () => ({
    meta: [
      { title: "Experimenta — Actividades educativas | TecnoKids" },
      { name: "description", content: "Actividades por edad: encuentra la herramienta, clasifica y resuelve retos prácticos." },
      { property: "og:title", content: "Experimenta — TecnoKids" },
      { property: "og:description", content: "Actividades de computación para proyectar en clase." },
    ],
  }),
  component: Experimenta,
});

function Experimenta() {
  const { level } = useApp();
  const { a = "arma" } = Route.useSearch();
  const navigate = Route.useNavigate();
  const act = ACTS.find((x) => x.id === a)!;
  return (
    <>
      <PageHeader title="Experimenta" subtitle="Actividades para resolver en grupo. La docente controla y el grupo responde levantando la mano.">
        <CurriculumPicker />
      </PageHeader>
      <div className="mx-auto max-w-7xl px-4">
        <Picker items={ACTS.map(({ id, label, icon }) => ({ id, label, icon }))} value={a}
          onChange={(v) => navigate({ search: { a: v }, replace: true })} />
        <QuizEngine key={act.id + level} title={act.label} instructions={act.instructions} questions={act.data[level]} activityId={act.progress} />
      </div>
    </>
  );
}
