import { createFileRoute } from "@tanstack/react-router";
import { Puzzle, Shapes, Search } from "lucide-react";
import { ARMA, CLASIFICA, DETECTIVES } from "@/data/juegos";
import { useApp } from "@/lib/app-state";
import { AgeToggle, PageHeader } from "@/components/Layout";
import { Picker } from "@/components/GameStage";
import { QuizEngine } from "@/components/QuizEngine";

const ACTS = [
  { id: "arma", label: "Arma tu computadora", icon: Puzzle, progress: "act-arma", data: ARMA,
    instructions: "Lean la pista en voz alta. El grupo elige el componente correcto y la docente lo selecciona." },
  { id: "clasifica", label: "Hardware o software", icon: Shapes, progress: "act-clasifica", data: CLASIFICA,
    instructions: "¿Se puede tocar o es un programa? El grupo decide la categoría de cada tarjeta." },
  { id: "detectives", label: "Detectives digitales", icon: Search, progress: "act-detectives", data: DETECTIVES,
    instructions: "Analicen cada situación en Internet y decidan si es una buena práctica." },
] as const;
type ActId = (typeof ACTS)[number]["id"];

export const Route = createFileRoute("/experimenta")({
  validateSearch: (s: Record<string, unknown>): { a?: ActId } =>
    ACTS.some((x) => x.id === s.a) ? { a: s.a as ActId } : {},
  head: () => ({
    meta: [
      { title: "Experimenta — Actividades educativas | TecnoKids" },
      { name: "description", content: "Arma tu computadora, clasifica hardware y software y conviértete en detective digital." },
      { property: "og:title", content: "Experimenta — TecnoKids" },
      { property: "og:description", content: "Actividades de computación para proyectar en clase." },
    ],
  }),
  component: Experimenta,
});

function Experimenta() {
  const { age } = useApp();
  const { a = "arma" } = Route.useSearch();
  const navigate = Route.useNavigate();
  const act = ACTS.find((x) => x.id === a)!;
  return (
    <>
      <PageHeader title="Experimenta" subtitle="Actividades para resolver en grupo. La docente controla y el grupo responde levantando la mano.">
        <AgeToggle large />
      </PageHeader>
      <div className="mx-auto max-w-7xl px-4">
        <Picker items={ACTS.map(({ id, label, icon }) => ({ id, label, icon }))} value={a}
          onChange={(v) => navigate({ search: { a: v }, replace: true })} />
        <QuizEngine key={act.id + age} title={act.label} instructions={act.instructions} questions={act.data[age]} activityId={act.progress} />
      </div>
    </>
  );
}
