import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Grid3x3, HelpCircle } from "lucide-react";
import { ADIVINA, MEMORIA } from "@/data/juegos";
import { useApp } from "@/lib/app-state";
import { CurriculumPicker, PageHeader } from "@/components/Layout";
import { Picker } from "@/components/GameStage";
import { QuizEngine } from "@/components/QuizEngine";
import { MemoryGame } from "@/components/MemoryGame";

export const Route = createFileRoute("/diviertete")({
  head: () => ({
    meta: [
      { title: "Diviértete — Juegos educativos | TecnoKids" },
      { name: "description", content: "Memoria tecnológica y Adivina qué soy: juegos de computación para jugar en grupo." },
      { property: "og:title", content: "Diviértete — TecnoKids" },
      { property: "og:description", content: "Juegos educativos de tecnología para el aula." },
    ],
  }),
  component: Diviertete,
});

type GameId = "memoria" | "adivina";

function Diviertete() {
  const { level } = useApp();
  const [game, setGame] = useState<GameId>("memoria");
  return (
    <>
      <PageHeader title="Diviértete" subtitle="Juegos para proyectar y jugar todos juntos.">
        <CurriculumPicker />
      </PageHeader>
      <div className="mx-auto max-w-7xl px-4">
        <Picker<GameId>
          items={[
            { id: "memoria", label: "Memoria tecnológica", icon: Grid3x3 },
            { id: "adivina", label: "Adivina qué soy", icon: HelpCircle },
          ]}
          value={game}
          onChange={setGame}
        />
        {game === "memoria" ? (
          <MemoryGame key={level} title="Memoria tecnológica" pairs={MEMORIA[level]} activityId="game-memoria" />
        ) : (
          <QuizEngine key={level} title="Adivina qué soy" activityId="game-adivina" questions={ADIVINA[level]}
            instructions="Lean las pistas. El grupo elige una respuesta y la docente la selecciona." />
        )}
      </div>
    </>
  );
}
