import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, FlaskConical, Gamepad2, Lightbulb, ArrowRight, CheckCircle2, Circle, RotateCcw, Puzzle } from "lucide-react";
import hero from "@/assets/hero-lab.jpg";
import { PROGRESS_ITEMS, useApp } from "@/lib/app-state";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TecnoKids — Un mundo de tecnología por descubrir" },
      { name: "description", content: "Aprende computación con tarjetas, actividades y juegos para proyectar en clase, para niños de 6 a 12 años." },
      { property: "og:title", content: "TecnoKids — Explora. Aprende. Crea." },
      { property: "og:description", content: "Plataforma educativa de computación para niños de 6 a 12 años." },
    ],
  }),
  component: Index,
});

const ACCESS = [
  { to: "/descubre", title: "Descubre", text: "Tarjetas para conocer la computadora e Internet.", icon: BookOpen, bg: "bg-lavender-soft" },
  { to: "/experimenta", title: "Experimenta", text: "Actividades para identificar, clasificar y decidir.", icon: FlaskConical, bg: "bg-mint-soft" },
  { to: "/diviertete", title: "Diviértete", text: "Juegos de memoria y adivinanzas en grupo.", icon: Gamepad2, bg: "bg-peach-soft" },
  { to: "/experimenta", title: "Crea", text: "Encuentra la herramienta correcta en cada programa.", icon: Puzzle, bg: "bg-sun-soft" },
] as const;

function Index() {
  const { done, percent, resetProgress } = useApp();
  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:py-16">
        <div>
          <p className="mb-3 inline-block rounded-full bg-sun px-4 py-1 font-extrabold">Explora. Aprende. Crea.</p>
          <h1 className="text-4xl leading-tight md:text-6xl">TECNOKIDS</h1>
          <p className="mt-4 max-w-lg text-xl text-muted-foreground">{"\n"}</p>
          <Link to="/descubre" className="btn btn-primary mt-8 px-7 py-4 text-lg">
            Comenzar a explorar <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
        <img src={hero} alt="Ilustración de una computadora, teclado, ratón y chip" width={1024} height={896} className="w-full rounded-3xl" />
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {ACCESS.map(({ to, title, text, icon: Icon, bg }) => (
          <Link key={title} to={to} className={`card-soft lift flex flex-col gap-3 p-6 ${bg}`}>
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-card text-primary"><Icon className="h-7 w-7" /></span>
            <h2 className="text-2xl">{title}</h2>
            <p className="text-muted-foreground">{text}</p>
            <span className="mt-auto inline-flex items-center gap-1 font-extrabold text-primary">Entrar <ArrowRight className="h-4 w-4" /></span>
          </Link>
        ))}
      </section>

      <section className="mx-auto mt-12 grid max-w-7xl gap-5 px-4 lg:grid-cols-5">
        <div className="card-soft flex flex-col gap-4 bg-sun-soft p-8 lg:col-span-3">
          <span className="inline-flex items-center gap-2 font-extrabold"><Lightbulb className="h-5 w-5" /> Reto destacado</span>
          <h2 className="text-3xl">Reto práctico</h2>
          <p className="text-lg">
            {"Resuelvan en grupo situaciones reales de Windows, Word, PowerPoint o Excel según su edad."}
          </p>
          <Link to="/experimenta" search={{ a: "detectives" }} className="btn btn-primary self-start">Aceptar el reto <ArrowRight className="h-5 w-5" /></Link>
        </div>
        <div className="card-soft p-6 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl">Avance del contenido</h2>
            <span className="text-3xl font-black text-primary">{percent}%</span>
          </div>
          <p className="text-sm text-muted-foreground">Contenido realizado en este equipo.</p>
          <div className="my-4 h-3 rounded-full bg-muted"><div className="h-3 rounded-full bg-mint transition-all" style={{ width: `${percent}%` }} /></div>
          <ul className="grid gap-1.5">
            {PROGRESS_ITEMS.map((i) => (
              <li key={i.id} className="flex items-center gap-2">
                {done.includes(i.id) ? <CheckCircle2 className="h-5 w-5 text-success" /> : <Circle className="h-5 w-5 text-muted-foreground" />}
                <span className="font-bold">{i.label}</span>
                <span className="ml-auto text-sm text-muted-foreground">{i.section}</span>
              </li>
            ))}
          </ul>
          <button onClick={() => confirm("¿Reiniciar el avance?") && resetProgress()} className="btn btn-ghost mt-4 w-full">
            <RotateCcw className="h-4 w-4" /> Reiniciar avance
          </button>
        </div>
      </section>
    </>
  );
}
