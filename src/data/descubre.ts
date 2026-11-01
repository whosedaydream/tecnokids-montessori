import {
  Monitor, Keyboard, Mouse, Cpu, HardDrive, AppWindow, Printer, Code, Lock, ShieldCheck,
  MessageCircleWarning, Globe, Mail, Cloud, Bot, type LucideIcon,
} from "lucide-react";
import type { Aged } from "@/lib/app-state";

export type Tone = "lavender" | "mint" | "peach" | "sun";
export type LearnCard = {
  icon: LucideIcon;
  title: string;
  desc: Aged<string>;
  explain: Aged<string>;
  fact: Aged<string>;
};
export type Module = { id: string; title: string; tone: Tone; icon: LucideIcon; cards: LearnCard[] };

export const MODULES: Module[] = [
  {
    id: "mod-computadora", title: "Conoce tu computadora", tone: "lavender", icon: Monitor,
    cards: [
      { icon: Monitor, title: "Monitor",
        desc: { pequenos: "La pantalla donde vemos todo.", grandes: "Dispositivo de salida que muestra imágenes." },
        explain: { pequenos: "El monitor nos muestra dibujos, letras y videos.", grandes: "El monitor es un dispositivo de salida: recibe información de la computadora y la convierte en imágenes formadas por millones de pequeños puntos llamados píxeles." },
        fact: { pequenos: "La tele de tu casa se parece mucho a un monitor.", grandes: "Una pantalla Full HD tiene más de 2 millones de píxeles." } },
      { icon: Keyboard, title: "Teclado",
        desc: { pequenos: "Sirve para escribir letras y números.", grandes: "Dispositivo de entrada para escribir y dar órdenes." },
        explain: { pequenos: "Cada tecla tiene una letra, un número o un dibujo. ¡Al presionarla aparece en la pantalla!", grandes: "El teclado es un dispositivo de entrada. Cada tecla envía una señal a la computadora. También tiene atajos, como Ctrl + C para copiar." },
        fact: { pequenos: "La tecla más grande es la barra espaciadora.", grandes: "El orden QWERTY se inventó para las antiguas máquinas de escribir." } },
      { icon: Mouse, title: "Ratón",
        desc: { pequenos: "Mueve la flechita en la pantalla.", grandes: "Dispositivo apuntador de entrada." },
        explain: { pequenos: "Cuando mueves el ratón, la flechita se mueve. Con un clic eliges cosas.", grandes: "El ratón detecta su movimiento con un sensor óptico y lo traduce al puntero. Tiene clic izquierdo, clic derecho y rueda para desplazarse." },
        fact: { pequenos: "Se llama ratón porque su cable parece una colita.", grandes: "El primer ratón, de 1964, era de madera." } },
    ],
  },
  {
    id: "mod-hwsw", title: "Hardware y software", tone: "mint", icon: Cpu,
    cards: [
      { icon: HardDrive, title: "Hardware",
        desc: { pequenos: "Las partes que puedes tocar.", grandes: "Componentes físicos de la computadora." },
        explain: { pequenos: "El hardware son las piezas de la computadora: teclado, pantalla, ratón.", grandes: "El hardware es todo lo físico: procesador, memoria, disco duro, periféricos. Sin hardware el software no tendría dónde funcionar." },
        fact: { pequenos: "¡Si lo puedes tocar, es hardware!", grandes: "El procesador (CPU) puede hacer miles de millones de operaciones por segundo." } },
      { icon: AppWindow, title: "Software",
        desc: { pequenos: "Los programas y juegos de la computadora.", grandes: "Programas e instrucciones que usa la computadora." },
        explain: { pequenos: "El software son los programas: juegos, dibujo, música. No se pueden tocar.", grandes: "El software es el conjunto de instrucciones que le dicen al hardware qué hacer. Incluye el sistema operativo y las aplicaciones." },
        fact: { pequenos: "Un juego en la tableta es software.", grandes: "Windows, Android y macOS son sistemas operativos." } },
      { icon: Code, title: "Programas",
        desc: { pequenos: "Instrucciones paso a paso.", grandes: "Código escrito por programadores." },
        explain: { pequenos: "Un programa es como una receta: pasos en orden para que la computadora haga algo.", grandes: "Los programas se escriben en lenguajes de programación como Python o Scratch, usando secuencias, condiciones y ciclos." },
        fact: { pequenos: "Las personas que crean programas se llaman programadores.", grandes: "Scratch fue creado para que niños y niñas aprendan a programar con bloques." } },
    ],
  },
  {
    id: "mod-internet", title: "Internet seguro", tone: "peach", icon: ShieldCheck,
    cards: [
      { icon: Lock, title: "Contraseñas",
        desc: { pequenos: "Una llave secreta.", grandes: "Protegen tus cuentas." },
        explain: { pequenos: "La contraseña es secreta. Solo la saben tú y tu familia.", grandes: "Una contraseña segura es larga y mezcla letras, números y símbolos. Nunca la compartas con amigos ni la escribas en lugares visibles." },
        fact: { pequenos: "Tu nombre no es una buena contraseña.", grandes: "“123456” es una de las contraseñas más usadas… y más fáciles de adivinar." } },
      { icon: MessageCircleWarning, title: "Desconocidos",
        desc: { pequenos: "No hables con extraños en línea.", grandes: "Cuidado con quién te contacta." },
        explain: { pequenos: "Si alguien que no conoces te escribe, avisa a un adulto.", grandes: "En Internet las personas pueden fingir ser otras. No compartas datos personales como dirección, escuela o fotos, y cuéntale a un adulto de confianza." },
        fact: { pequenos: "Pedir ayuda a un adulto siempre es buena idea.", grandes: "Tus datos personales son como tu casa: no se los das a cualquiera." } },
      { icon: ShieldCheck, title: "Enlaces y descargas",
        desc: { pequenos: "Pregunta antes de hacer clic.", grandes: "No todo lo que brilla es seguro." },
        explain: { pequenos: "Si aparece un premio o un botón raro, no lo toques y pregunta.", grandes: "Los mensajes de “¡Ganaste!” suelen ser engaños (phishing). Descarga solo de sitios oficiales y con permiso." },
        fact: { pequenos: "Los premios sorpresa en Internet casi siempre son trampas.", grandes: "El candado junto a la dirección web indica una conexión cifrada (https)." } },
    ],
  },
  {
    id: "mod-digital", title: "Mundo digital", tone: "sun", icon: Globe,
    cards: [
      { icon: Globe, title: "Internet",
        desc: { pequenos: "Une computadoras de todo el mundo.", grandes: "Red mundial de computadoras." },
        explain: { pequenos: "Internet conecta computadoras para ver videos, buscar y aprender.", grandes: "Internet es una red de redes: millones de computadoras conectadas que intercambian información en paquetes de datos." },
        fact: { pequenos: "¡Puedes ver fotos de otros países gracias a Internet!", grandes: "Cables submarinos cruzan los océanos para conectar continentes." } },
      { icon: Mail, title: "Correo electrónico",
        desc: { pequenos: "Cartas que viajan por Internet.", grandes: "Mensajes digitales con dirección." },
        explain: { pequenos: "Es como una carta, pero llega en segundos.", grandes: "Cada correo tiene una dirección con @, por ejemplo nombre@escuela.mx. Puede llevar textos, imágenes y archivos adjuntos." },
        fact: { pequenos: "El símbolo @ se llama arroba.", grandes: "El primer correo electrónico se envió en 1971." } },
      { icon: Cloud, title: "La nube",
        desc: { pequenos: "Guardar cosas en Internet.", grandes: "Almacenamiento en servidores remotos." },
        explain: { pequenos: "La nube guarda fotos y trabajos para verlos desde otro lugar.", grandes: "“La nube” son servidores en centros de datos donde se guardan archivos a los que accedes desde cualquier dispositivo." },
        fact: { pequenos: "¡La nube no está en el cielo!", grandes: "Los centros de datos necesitan sistemas especiales para enfriar sus computadoras." } },
      { icon: Bot, title: "Robots",
        desc: { pequenos: "Máquinas que siguen órdenes.", grandes: "Máquinas programadas con sensores." },
        explain: { pequenos: "Los robots hacen tareas porque alguien los programó.", grandes: "Un robot combina sensores (para percibir), un programa (para decidir) y motores (para actuar)." },
        fact: { pequenos: "Hay robots que aspiran el piso.", grandes: "Hay robots explorando Marte ahora mismo." } },
    ],
  },
];

export const toneClasses: Record<Tone, string> = {
  lavender: "bg-lavender-soft text-primary",
  mint: "bg-mint-soft text-success",
  peach: "bg-peach-soft text-error",
  sun: "bg-sun-soft text-foreground",
};
export { Printer };
