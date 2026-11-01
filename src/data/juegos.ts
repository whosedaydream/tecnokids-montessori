import {
  Monitor, Keyboard, Mouse, Printer, Cpu, Headphones, Camera, Speaker, AppWindow, Gamepad2,
  Paintbrush, Globe, HardDrive, Usb, Wifi, Smartphone, Lock, MessageCircleWarning, Gift, Users,
  ShieldCheck, Clock, Mic, MemoryStick, type LucideIcon,
} from "lucide-react";
import type { Aged } from "@/lib/app-state";

export type Option = { label: string; icon?: LucideIcon };
export type Question = { prompt: string; icon?: LucideIcon; options: Option[]; answer: number; explain: string };

const HW: Option = { label: "Hardware", icon: HardDrive };
const SW: Option = { label: "Software", icon: AppWindow };
const OK: Option = { label: "Buena práctica", icon: ShieldCheck };
const NO: Option = { label: "No es seguro", icon: MessageCircleWarning };

export const ARMA: Aged<Question[]> = {
  pequenos: [
    { prompt: "¿Cuál usamos para ver dibujos y letras?", options: [{ label: "Monitor", icon: Monitor }, { label: "Bocina", icon: Speaker }, { label: "Ratón", icon: Mouse }], answer: 0, explain: "El monitor es la pantalla donde vemos todo." },
    { prompt: "¿Cuál usamos para escribir?", options: [{ label: "Audífonos", icon: Headphones }, { label: "Teclado", icon: Keyboard }, { label: "Cámara", icon: Camera }], answer: 1, explain: "El teclado tiene letras y números para escribir." },
    { prompt: "¿Cuál mueve la flechita?", options: [{ label: "Impresora", icon: Printer }, { label: "Monitor", icon: Monitor }, { label: "Ratón", icon: Mouse }], answer: 2, explain: "Al mover el ratón, la flechita se mueve." },
    { prompt: "¿Cuál pone tus dibujos en papel?", options: [{ label: "Impresora", icon: Printer }, { label: "Teclado", icon: Keyboard }, { label: "Bocina", icon: Speaker }], answer: 0, explain: "La impresora pasa lo de la pantalla al papel." },
  ],
  grandes: [
    { prompt: "Soy el “cerebro” de la computadora y proceso las instrucciones.", options: [{ label: "Memoria RAM", icon: MemoryStick }, { label: "Procesador (CPU)", icon: Cpu }, { label: "Disco duro", icon: HardDrive }], answer: 1, explain: "La CPU ejecuta las instrucciones de los programas." },
    { prompt: "Guardo tus archivos aunque apagues la computadora.", options: [{ label: "Disco duro", icon: HardDrive }, { label: "Memoria RAM", icon: MemoryStick }, { label: "Monitor", icon: Monitor }], answer: 0, explain: "El disco duro almacena de forma permanente; la RAM se borra al apagar." },
    { prompt: "Soy un dispositivo de entrada que capta tu voz.", options: [{ label: "Bocina", icon: Speaker }, { label: "Micrófono", icon: Mic }, { label: "Impresora", icon: Printer }], answer: 1, explain: "El micrófono convierte el sonido en datos: es de entrada." },
    { prompt: "Soy un dispositivo de salida que produce sonido.", options: [{ label: "Bocina", icon: Speaker }, { label: "Teclado", icon: Keyboard }, { label: "Cámara", icon: Camera }], answer: 0, explain: "La bocina saca información en forma de sonido." },
    { prompt: "Me conecto para llevar archivos de una computadora a otra.", options: [{ label: "Memoria USB", icon: Usb }, { label: "Ratón", icon: Mouse }, { label: "Audífonos", icon: Headphones }], answer: 0, explain: "La memoria USB es almacenamiento portátil." },
  ],
};

export const CLASIFICA: Aged<Question[]> = {
  pequenos: [
    { prompt: "Teclado", icon: Keyboard, options: [HW, SW], answer: 0, explain: "Lo puedes tocar: es hardware." },
    { prompt: "Juego en la computadora", icon: Gamepad2, options: [HW, SW], answer: 1, explain: "Un juego es un programa: software." },
    { prompt: "Ratón", icon: Mouse, options: [HW, SW], answer: 0, explain: "El ratón es una pieza que tocas: hardware." },
    { prompt: "Programa para dibujar", icon: Paintbrush, options: [HW, SW], answer: 1, explain: "Los programas no se tocan: son software." },
  ],
  grandes: [
    { prompt: "Procesador", icon: Cpu, options: [HW, SW], answer: 0, explain: "Es un componente físico interno: hardware." },
    { prompt: "Navegador web", icon: Globe, options: [HW, SW], answer: 1, explain: "Es una aplicación para visitar páginas: software." },
    { prompt: "Sistema operativo", icon: AppWindow, options: [HW, SW], answer: 1, explain: "Administra el equipo, pero es un programa: software." },
    { prompt: "Memoria RAM", icon: MemoryStick, options: [HW, SW], answer: 0, explain: "Es una tarjeta física con chips: hardware." },
    { prompt: "Antivirus", icon: ShieldCheck, options: [HW, SW], answer: 1, explain: "Es un programa que protege: software." },
    { prompt: "Tarjeta de red Wi‑Fi", icon: Wifi, options: [HW, SW], answer: 0, explain: "Es un componente físico de conexión: hardware." },
  ],
};

export const DETECTIVES: Aged<Question[]> = {
  pequenos: [
    { prompt: "Ana le pide permiso a su mamá antes de descargar un juego.", icon: Users, options: [OK, NO], answer: 0, explain: "¡Muy bien! Siempre pedimos permiso a un adulto." },
    { prompt: "Luis le dice su contraseña a un amigo.", icon: Lock, options: [OK, NO], answer: 1, explain: "La contraseña es secreta. Solo tu familia la conoce." },
    { prompt: "Aparece un mensaje: “¡Ganaste un premio! Haz clic”.", icon: Gift, options: [{ label: "Hacer clic", icon: Gift }, { label: "Avisar a un adulto", icon: Users }], answer: 1, explain: "Los premios sorpresa suelen ser trampas. Avisa a un adulto." },
    { prompt: "Sofía deja de usar la tableta para jugar afuera.", icon: Clock, options: [OK, NO], answer: 0, explain: "Descansar de las pantallas es saludable." },
  ],
  grandes: [
    { prompt: "Un desconocido en un juego en línea pide tu dirección.", icon: MessageCircleWarning, options: [OK, NO], answer: 1, explain: "Nunca compartas datos personales. Bloquea y avisa a un adulto." },
    { prompt: "Usar la contraseña “Gato$Azul_2026!”.", icon: Lock, options: [OK, NO], answer: 0, explain: "Es larga y mezcla letras, números y símbolos." },
    { prompt: "Publicar una foto de un compañero sin su permiso.", icon: Camera, options: [OK, NO], answer: 1, explain: "Respetar la privacidad de otros es parte de la ciudadanía digital." },
    { prompt: "Cerrar sesión al terminar en una computadora de la escuela.", icon: ShieldCheck, options: [OK, NO], answer: 0, explain: "Así nadie más podrá entrar a tu cuenta." },
    { prompt: "Un correo pide tu contraseña “para verificar tu cuenta”.", icon: Smartphone, options: [OK, NO], answer: 1, explain: "Es phishing: ningún servicio serio pide tu contraseña por correo." },
  ],
};

export const ADIVINA: Aged<Question[]> = {
  pequenos: [
    { prompt: "Tengo muchas teclas con letras. ¿Qué soy?", options: [{ label: "Teclado", icon: Keyboard }, { label: "Monitor", icon: Monitor }, { label: "Bocina", icon: Speaker }], answer: 0, explain: "¡Soy el teclado! Sirvo para escribir." },
    { prompt: "Me pones en tus orejas para escuchar música. ¿Qué soy?", options: [{ label: "Ratón", icon: Mouse }, { label: "Audífonos", icon: Headphones }, { label: "Cámara", icon: Camera }], answer: 1, explain: "¡Soy los audífonos! Solo tú escuchas el sonido." },
    { prompt: "Saco fotos y te veo en videollamadas. ¿Qué soy?", options: [{ label: "Impresora", icon: Printer }, { label: "Teclado", icon: Keyboard }, { label: "Cámara", icon: Camera }], answer: 2, explain: "¡Soy la cámara web!" },
    { prompt: "Imprimo tus tareas en papel. ¿Qué soy?", options: [{ label: "Impresora", icon: Printer }, { label: "Monitor", icon: Monitor }, { label: "Ratón", icon: Mouse }], answer: 0, explain: "¡Soy la impresora!" },
  ],
  grandes: [
    { prompt: "Proceso miles de millones de instrucciones por segundo.", options: [{ label: "Monitor", icon: Monitor }, { label: "Procesador", icon: Cpu }, { label: "Bocina", icon: Speaker }], answer: 1, explain: "La CPU es el cerebro que procesa la información." },
    { prompt: "Soy temporal: guardo lo que usas ahora y me borro al apagar.", options: [{ label: "Memoria RAM", icon: MemoryStick }, { label: "Disco duro", icon: HardDrive }, { label: "Memoria USB", icon: Usb }], answer: 0, explain: "La RAM es memoria de trabajo volátil." },
    { prompt: "Conecto tu equipo a Internet sin cables.", options: [{ label: "Impresora", icon: Printer }, { label: "Micrófono", icon: Mic }, { label: "Wi‑Fi", icon: Wifi }], answer: 2, explain: "El Wi‑Fi usa ondas de radio para conectarte." },
    { prompt: "Soy un programa que te permite visitar páginas web.", options: [{ label: "Navegador", icon: Globe }, { label: "Antivirus", icon: ShieldCheck }, { label: "Teclado", icon: Keyboard }], answer: 0, explain: "Chrome, Firefox o Edge son navegadores." },
    { prompt: "Soy un teléfono que también es una computadora.", options: [{ label: "Bocina", icon: Speaker }, { label: "Smartphone", icon: Smartphone }, { label: "Monitor", icon: Monitor }], answer: 1, explain: "El smartphone tiene procesador, memoria y sistema operativo." },
  ],
};

export type Pair = { id: string; label: string; icon: LucideIcon };
export const MEMORIA: Aged<Pair[]> = {
  pequenos: [
    { id: "monitor", label: "Monitor", icon: Monitor },
    { id: "teclado", label: "Teclado", icon: Keyboard },
    { id: "raton", label: "Ratón", icon: Mouse },
    { id: "impresora", label: "Impresora", icon: Printer },
    { id: "audifonos", label: "Audífonos", icon: Headphones },
    { id: "camara", label: "Cámara", icon: Camera },
  ],
  grandes: [
    { id: "cpu", label: "Procesador", icon: Cpu },
    { id: "ram", label: "Memoria RAM", icon: MemoryStick },
    { id: "disco", label: "Disco duro", icon: HardDrive },
    { id: "usb", label: "Memoria USB", icon: Usb },
    { id: "wifi", label: "Wi‑Fi", icon: Wifi },
    { id: "micro", label: "Micrófono", icon: Mic },
    { id: "navegador", label: "Navegador", icon: Globe },
    { id: "smartphone", label: "Smartphone", icon: Smartphone },
  ],
};
