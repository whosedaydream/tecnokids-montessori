import {
  Monitor, Keyboard, Mouse, Cpu, AppWindow, FolderOpen, Trash2, Bold, Type, AlignCenter, Image,
  Palette, Presentation, LayoutTemplate, Shapes, Film, Sparkles, Grid3x3, Rows3, Equal, Sigma,
  BarChart3, Table, Filter, Copy, type LucideIcon,
} from "lucide-react";
import type { Leveled } from "@/lib/app-state";

export type Tone = "lavender" | "mint" | "peach" | "sun";
export type LearnCard = { icon: LucideIcon; title: string; desc: string; explain: string; fact: string };
export type Module = { id: string; title: string; tone: Tone; icon: LucideIcon; cards: LearnCard[] };

/** Un módulo de Descubre por cada edad del temario. */
export const MODULES: Leveled<Module> = {
  "6": {
    id: "mod-windows", title: "Windows y partes de la computadora", tone: "lavender", icon: Monitor,
    cards: [
      { icon: Monitor, title: "Monitor", desc: "La pantalla donde vemos todo.", explain: "En el monitor vemos el escritorio de Windows, las ventanas, los dibujos y las letras.", fact: "La tele de tu casa se parece mucho a un monitor." },
      { icon: Cpu, title: "CPU", desc: "La caja que piensa.", explain: "El CPU es el cerebro de la computadora: ahí se guarda y se procesa todo lo que hacemos.", fact: "Cuando la computadora se enciende, el CPU empieza a trabajar." },
      { icon: Keyboard, title: "Teclado", desc: "Sirve para escribir.", explain: "Cada tecla tiene una letra, un número o un símbolo. La barra espaciadora pone espacios y Enter baja de renglón.", fact: "La tecla más grande es la barra espaciadora." },
      { icon: Mouse, title: "Mouse", desc: "Mueve la flechita.", explain: "Con un clic elegimos algo y con doble clic abrimos un programa o una carpeta.", fact: "El primer mouse era de madera." },
      { icon: AppWindow, title: "Escritorio y ventanas", desc: "Donde empieza Windows.", explain: "El escritorio es la pantalla principal. Cada programa se abre en una ventana que podemos minimizar, maximizar o cerrar con la X.", fact: "Windows significa “ventanas” en inglés." },
      { icon: FolderOpen, title: "Iconos", desc: "Dibujitos que abren cosas.", explain: "Los iconos representan programas, carpetas o archivos. La papelera de reciclaje guarda lo que borramos.", fact: "Puedes sacar algo de la papelera si lo borraste por error." },
    ],
  },
  "7": {
    id: "mod-word", title: "Microsoft Word", tone: "mint", icon: Type,
    cards: [
      { icon: Type, title: "Escribir en Word", desc: "Una hoja para escribir.", explain: "Word es un programa para escribir cuentos, tareas y cartas. La rayita que parpadea indica dónde aparecerá la letra.", fact: "Con Enter empiezas un nuevo renglón." },
      { icon: Type, title: "Fuente y tamaño", desc: "Cambia cómo se ven las letras.", explain: "La fuente es el tipo de letra (como Arial o Comic Sans). El tamaño hace las letras más grandes o más pequeñas.", fact: "Los títulos se ven mejor con letras más grandes." },
      { icon: Bold, title: "Negrita, cursiva y subrayado", desc: "Resalta palabras.", explain: "N pone las letras gruesas, K las inclina y S les pone una línea debajo.", fact: "Primero seleccionas la palabra y luego eliges el botón." },
      { icon: Palette, title: "Colores", desc: "Letras de colores.", explain: "Con el botón de color de fuente puedes pintar las letras del color que quieras.", fact: "Usa colores que se puedan leer bien sobre la hoja blanca." },
      { icon: AlignCenter, title: "Alineación", desc: "Acomoda el texto.", explain: "Puedes alinear el texto a la izquierda, al centro, a la derecha o justificado.", fact: "Los títulos casi siempre van centrados." },
      { icon: Image, title: "Imágenes", desc: "Agrega dibujos.", explain: "En la pestaña Insertar eliges Imágenes para poner una foto o dibujo en tu documento.", fact: "Puedes hacer la imagen más grande jalando sus esquinas." },
    ],
  },
  "8": {
    id: "mod-powerpoint", title: "Microsoft PowerPoint", tone: "peach", icon: Presentation,
    cards: [
      { icon: Presentation, title: "Diapositivas", desc: "Las hojas de una presentación.", explain: "PowerPoint sirve para crear presentaciones. Cada hoja se llama diapositiva y puedes agregar todas las que necesites.", fact: "Con Nueva diapositiva agregas una hoja más." },
      { icon: LayoutTemplate, title: "Diseños", desc: "Colores y fondos listos.", explain: "En la pestaña Diseño eliges un tema para que todas las diapositivas tengan los mismos colores y letras.", fact: "Un mismo diseño hace que tu presentación se vea ordenada." },
      { icon: Image, title: "Imágenes", desc: "Ilustra tus ideas.", explain: "Desde Insertar agregas imágenes que ayudan a explicar el tema.", fact: "Una buena imagen explica más que muchas palabras." },
      { icon: Shapes, title: "Formas", desc: "Círculos, flechas y estrellas.", explain: "En Insertar > Formas puedes dibujar figuras y escribir dentro de ellas.", fact: "Las flechas sirven para mostrar un orden o un camino." },
      { icon: Film, title: "Transiciones", desc: "Efecto entre diapositivas.", explain: "La transición es el efecto que aparece al pasar de una diapositiva a la siguiente.", fact: "Usar pocas transiciones hace la presentación más clara." },
      { icon: Sparkles, title: "Animaciones", desc: "Objetos que se mueven.", explain: "La animación hace que un texto o imagen aparezca, se mueva o desaparezca dentro de una diapositiva.", fact: "Con F5 empiezas a presentar en pantalla completa." },
    ],
  },
  "9-10": {
    id: "mod-excel", title: "Microsoft Excel", tone: "sun", icon: Grid3x3,
    cards: [
      { icon: Rows3, title: "Filas y columnas", desc: "La cuadrícula de Excel.", explain: "Las columnas van de arriba abajo y se nombran con letras (A, B, C). Las filas van de lado y se nombran con números (1, 2, 3).", fact: "Una hoja de Excel tiene más de un millón de filas." },
      { icon: Grid3x3, title: "Celdas", desc: "Donde van los datos.", explain: "La celda es el cruce de una columna y una fila. Su nombre combina ambas: B3 es la columna B, fila 3.", fact: "La celda seleccionada tiene un borde verde." },
      { icon: Table, title: "Datos y tablas", desc: "Información ordenada.", explain: "En las celdas escribimos textos, números y fechas. Dar formato como tabla ayuda a ordenar y filtrar.", fact: "Un encabezado claro en cada columna facilita leer la tabla." },
      { icon: Equal, title: "Operaciones", desc: "Excel calcula por ti.", explain: "Toda operación empieza con =. Por ejemplo =A1+A2 suma, =A1-A2 resta, =A1*A2 multiplica y =A1/A2 divide.", fact: "Si cambias un número, el resultado se actualiza solo." },
      { icon: Sigma, title: "Fórmulas y funciones", desc: "Atajos para calcular.", explain: "=SUMA(A1:A5) suma un rango y =PROMEDIO(A1:A5) calcula el promedio. El botón Autosuma (Σ) lo hace rápido.", fact: "Los dos puntos (:) significan “desde … hasta …”." },
      { icon: BarChart3, title: "Gráficas", desc: "Datos en dibujo.", explain: "Seleccionas los datos y en Insertar eliges una gráfica de columnas, barras, líneas o circular.", fact: "La gráfica circular sirve para mostrar partes de un total." },
    ],
  },
  "11-12": {
    id: "mod-integra", title: "Integración: Windows, Word, PowerPoint y Excel", tone: "lavender", icon: Copy,
    cards: [
      { icon: FolderOpen, title: "Windows avanzado", desc: "Organiza y trabaja rápido.", explain: "Con el Explorador de archivos creas carpetas, renombras y mueves archivos. Alt + Tab cambia de ventana y Win + flecha acomoda ventanas lado a lado.", fact: "Ctrl + Z deshace casi cualquier acción en Windows y en Office." },
      { icon: Type, title: "Word profesional", desc: "Documentos bien presentados.", explain: "Los Estilos dan el mismo formato a todos los títulos y permiten crear una tabla de contenido automática. También puedes ajustar márgenes, interlineado y sangría.", fact: "Combinar correspondencia une Word con una lista de Excel para crear cartas personalizadas." },
      { icon: Presentation, title: "PowerPoint para exponer", desc: "Presentaciones efectivas.", explain: "El Patrón de diapositivas cambia el diseño de todas a la vez. La vista Moderador muestra tus notas mientras el grupo ve la diapositiva.", fact: "La regla 6×6: no más de 6 líneas con 6 palabras cada una." },
      { icon: Sigma, title: "Excel avanzado", desc: "Funciones y referencias.", explain: "=MAX, =MIN, =CONTAR.SI y =SI resuelven problemas reales. Con $ fijas una celda: $C$1 no cambia al copiar la fórmula.", fact: "=SI(B2>=6,\"Aprobado\",\"Reforzar\") decide por ti." },
      { icon: Filter, title: "Analizar datos", desc: "Ordena, filtra y grafica.", explain: "Los filtros muestran solo lo que te interesa y el formato condicional colorea los datos según su valor.", fact: "Una buena gráfica necesita título y ejes con nombre." },
      { icon: Trash2, title: "Proyecto integrador", desc: "Todo junto.", explain: "Ejemplo: guarda una encuesta en una carpeta (Windows), calcula resultados (Excel), escribe el informe (Word) y exponlo con gráficas pegadas (PowerPoint).", fact: "Copiar una gráfica de Excel y pegarla en PowerPoint mantiene los datos vinculados." },
    ],
  },
};

export const toneClasses: Record<Tone, string> = {
  lavender: "bg-lavender-soft text-primary",
  mint: "bg-mint-soft text-success",
  peach: "bg-peach-soft text-error",
  sun: "bg-sun-soft text-foreground",
};
