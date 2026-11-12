import {
  Monitor, Keyboard, Mouse, Cpu, Speaker, Printer, AppWindow, FolderOpen, Trash2, X, Minus, Square,
  Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, Type, Palette, Image, Save, Undo2, Plus,
  Presentation, Shapes, Play, LayoutTemplate, Film, Sparkles, Grid3x3, Rows3, Columns3, Equal, Sigma,
  BarChart3, PieChart, ArrowUpDown, Table, Filter, Copy, Mic, Star, Dog, Shield, Badge, type LucideIcon,
} from "lucide-react";
import type { Leveled } from "@/lib/app-state";

export type Option = { label: string; icon?: LucideIcon };
export type Question = { prompt: string; icon?: LucideIcon; options: Option[]; answer: number; explain: string };
export type Pair = { id: string; label: string; icon: LucideIcon; image?: string };
const img = (f: string) => `/images/memorama/${f}`;

const o = (label: string, icon?: LucideIcon): Option => (icon ? { label, icon } : { label });

/** Encuentra la herramienta. */
export const ARMA: Leveled<Question[]> = {
  "6": [
    { prompt: "¿Con qué escribimos letras y números?", options: [o("Teclado", Keyboard), o("Monitor", Monitor), o("Bocina", Speaker)], answer: 0, explain: "El teclado tiene letras y números para escribir." },
    { prompt: "¿Qué parte mueve la flechita en la pantalla?", options: [o("Impresora", Printer), o("Mouse", Mouse), o("CPU", Cpu)], answer: 1, explain: "Al mover el mouse, la flechita se mueve." },
    { prompt: "¿Dónde vemos el escritorio, las ventanas y los iconos?", options: [o("Bocina", Speaker), o("Teclado", Keyboard), o("Monitor", Monitor)], answer: 2, explain: "El monitor muestra todo lo que pasa en Windows." },
    { prompt: "¿Qué botón cierra una ventana?", options: [o("X", X), o("Minimizar", Minus), o("Maximizar", Square)], answer: 0, explain: "La X roja de la esquina cierra la ventana." },
  ],
  "7": [
    { prompt: "¿Qué botón pone las letras gruesas (negrita)?", options: [o("Negrita", Bold), o("Cursiva", Italic), o("Subrayado", Underline)], answer: 0, explain: "El botón N pone el texto en negrita." },
    { prompt: "¿Qué botón coloca el título en medio de la hoja?", options: [o("Izquierda", AlignLeft), o("Centrar", AlignCenter), o("Derecha", AlignRight)], answer: 1, explain: "Centrar acomoda el texto en medio." },
    { prompt: "¿Con qué cambio el color de las letras?", options: [o("Guardar", Save), o("Imagen", Image), o("Color de fuente", Palette)], answer: 2, explain: "Color de fuente pinta las letras." },
    { prompt: "¿Qué uso para poner una foto en mi documento?", options: [o("Insertar imagen", Image), o("Negrita", Bold), o("Deshacer", Undo2)], answer: 0, explain: "En Insertar > Imágenes agregas fotos y dibujos." },
  ],
  "8": [
    { prompt: "¿Qué botón agrega otra hoja a mi presentación?", options: [o("Nueva diapositiva", Plus), o("Guardar", Save), o("Negrita", Bold)], answer: 0, explain: "Nueva diapositiva agrega una hoja más." },
    { prompt: "¿Dónde encuentro círculos, flechas y estrellas?", options: [o("Tabla", Table), o("Formas", Shapes), o("Imprimir", Printer)], answer: 1, explain: "En Insertar > Formas están las figuras." },
    { prompt: "¿Qué botón inicia la presentación en pantalla completa?", options: [o("Deshacer", Undo2), o("Cerrar", X), o("Presentar", Play)], answer: 2, explain: "Presentar (o F5) muestra las diapositivas en grande." },
    { prompt: "¿Qué cambia los colores y el fondo de todas las diapositivas?", options: [o("Diseños", LayoutTemplate), o("Mouse", Mouse), o("Copiar", Copy)], answer: 0, explain: "La pestaña Diseño aplica un tema a toda la presentación." },
  ],
  "9-10": [
    { prompt: "¿Cómo se llama el cuadrito donde escribo un dato?", options: [o("Celda", Grid3x3), o("Gráfica", BarChart3), o("Diapositiva", Presentation)], answer: 0, explain: "Cada cuadrito de Excel es una celda." },
    { prompt: "Las columnas de Excel se nombran con…", options: [o("Números"), o("Letras", Type), o("Colores", Palette)], answer: 1, explain: "Las columnas son A, B, C…" },
    { prompt: "Las filas de Excel se nombran con…", options: [o("Letras", Type), o("Iconos", AppWindow), o("Números", Rows3)], answer: 2, explain: "Las filas son 1, 2, 3…" },
    { prompt: "¿Qué botón suma una lista de números rápidamente?", options: [o("Autosuma Σ", Sigma), o("Negrita", Bold), o("Imagen", Image)], answer: 0, explain: "Autosuma escribe la función =SUMA por ti." },
  ],
  "11-12": [
    { prompt: "Necesitas una carta formal con márgenes, estilos e interlineado.", options: [o("Word", Type), o("Excel", Grid3x3), o("PowerPoint", Presentation)], answer: 0, explain: "Word es el programa para documentos de texto." },
    { prompt: "Debes calcular el promedio de calificaciones de 30 alumnos.", options: [o("PowerPoint", Presentation), o("Excel", Sigma), o("Word", Type)], answer: 1, explain: "Excel calcula con =PROMEDIO(rango)." },
    { prompt: "Vas a exponer tu proyecto con notas del moderador.", options: [o("Excel", Grid3x3), o("Word", Type), o("PowerPoint", Presentation)], answer: 2, explain: "PowerPoint tiene la vista Moderador para tus notas." },
    { prompt: "Debes organizar los archivos del proyecto en carpetas.", options: [o("Explorador de archivos", FolderOpen), o("Excel", Grid3x3), o("PowerPoint", Presentation)], answer: 0, explain: "El Explorador de Windows organiza carpetas y archivos." },
  ],
};

const ENT = o("Entrada", Keyboard), SAL = o("Salida", Monitor);
const FMT = o("Formato de letra", Type), INS = o("Insertar", Plus);
const TRA = o("Transición", Film), ANI = o("Animación", Sparkles);
const FIL = o("Fila", Rows3), COL = o("Columna", Columns3), CEL = o("Celda", Grid3x3);
const WIN = o("Windows", AppWindow), WRD = o("Word", Type), PPT = o("PowerPoint", Presentation), XLS = o("Excel", Grid3x3);

/** Clasifica. */
export const CLASIFICA: Leveled<Question[]> = {
  "6": [
    { prompt: "Teclado", icon: Keyboard, options: [ENT, SAL], answer: 0, explain: "Con el teclado le damos información a la computadora: es de entrada." },
    { prompt: "Monitor", icon: Monitor, options: [ENT, SAL], answer: 1, explain: "El monitor nos muestra información: es de salida." },
    { prompt: "Mouse", icon: Mouse, options: [ENT, SAL], answer: 0, explain: "Con el mouse damos órdenes: es de entrada." },
    { prompt: "Bocina", icon: Speaker, options: [ENT, SAL], answer: 1, explain: "La bocina saca sonido: es de salida." },
    { prompt: "Impresora", icon: Printer, options: [ENT, SAL], answer: 1, explain: "La impresora saca la información en papel: es de salida." },
  ],
  "7": [
    { prompt: "Negrita", icon: Bold, options: [FMT, INS], answer: 0, explain: "Cambia cómo se ve la letra: es formato." },
    { prompt: "Imagen", icon: Image, options: [FMT, INS], answer: 1, explain: "Agrega algo nuevo a la hoja: está en Insertar." },
    { prompt: "Tamaño de fuente", icon: Type, options: [FMT, INS], answer: 0, explain: "Hace la letra más grande o pequeña: es formato." },
    { prompt: "Forma (estrella, flecha)", icon: Shapes, options: [FMT, INS], answer: 1, explain: "Las formas se agregan desde Insertar." },
    { prompt: "Color de fuente", icon: Palette, options: [FMT, INS], answer: 0, explain: "Pinta la letra: es formato." },
  ],
  "8": [
    { prompt: "Efecto al pasar de una diapositiva a otra", icon: Presentation, options: [TRA, ANI], answer: 0, explain: "Eso es una transición." },
    { prompt: "Una imagen entra volando a la diapositiva", icon: Image, options: [TRA, ANI], answer: 1, explain: "Mover un objeto dentro de la diapositiva es animación." },
    { prompt: "El título aparece letra por letra", icon: Type, options: [TRA, ANI], answer: 1, explain: "Es una animación del texto." },
    { prompt: "La diapositiva se desvanece al cambiar", icon: Film, options: [TRA, ANI], answer: 0, explain: "Afecta el cambio de diapositiva: transición." },
  ],
  "9-10": [
    { prompt: "B", options: [FIL, COL, CEL], answer: 1, explain: "Las letras nombran columnas." },
    { prompt: "5", options: [FIL, COL, CEL], answer: 0, explain: "Los números nombran filas." },
    { prompt: "C3", options: [FIL, COL, CEL], answer: 2, explain: "Letra + número = celda (columna C, fila 3)." },
    { prompt: "12", options: [FIL, COL, CEL], answer: 0, explain: "12 es el número de una fila." },
    { prompt: "A1", options: [FIL, COL, CEL], answer: 2, explain: "A1 es la primera celda de la hoja." },
    { prompt: "D", options: [FIL, COL, CEL], answer: 1, explain: "D es una columna." },
  ],
  "11-12": [
    { prompt: "=PROMEDIO(B2:B8)", options: [WIN, WRD, PPT, XLS], answer: 3, explain: "Las funciones de cálculo son de Excel." },
    { prompt: "Transición “Desvanecer”", options: [WIN, WRD, PPT, XLS], answer: 2, explain: "Las transiciones son de PowerPoint." },
    { prompt: "Interlineado y márgenes", options: [WIN, WRD, PPT, XLS], answer: 1, explain: "Se ajustan en Word para dar formato al documento." },
    { prompt: "Crear y renombrar carpetas", options: [WIN, WRD, PPT, XLS], answer: 0, explain: "Se hace en el Explorador de archivos de Windows." },
    { prompt: "Formato condicional", options: [WIN, WRD, PPT, XLS], answer: 3, explain: "Colorea celdas según su valor en Excel." },
    { prompt: "Patrón de diapositivas", options: [WIN, WRD, PPT, XLS], answer: 2, explain: "Cambia el diseño de todas las diapositivas en PowerPoint." },
  ],
};

/** Reto práctico. */
export const DETECTIVES: Leveled<Question[]> = {
  "6": [
    { prompt: "Quieres abrir un programa que está en el escritorio.", icon: AppWindow, options: [o("Doble clic en su icono", Mouse), o("Apagar el monitor", Monitor)], answer: 0, explain: "Con doble clic sobre el icono se abre el programa." },
    { prompt: "Quieres esconder una ventana sin cerrarla.", icon: AppWindow, options: [o("Minimizar", Minus), o("Cerrar", X)], answer: 0, explain: "Minimizar la guarda abajo en la barra de tareas." },
    { prompt: "Tienes un archivo que ya no sirve.", icon: FolderOpen, options: [o("Enviarlo a la Papelera", Trash2), o("Dejarlo en el escritorio", Monitor)], answer: 0, explain: "La papelera de reciclaje guarda lo que borramos." },
    { prompt: "Escribes tu nombre y quieres separar nombre y apellido.", icon: Keyboard, options: [o("Barra espaciadora"), o("Enter")], answer: 0, explain: "La barra espaciadora pone un espacio entre palabras." },
  ],
  "7": [
    { prompt: "Quieres que tu título se vea más grande.", icon: Type, options: [o("Aumentar el tamaño de fuente", Type), o("Ponerlo en cursiva", Italic)], answer: 0, explain: "El tamaño de fuente hace la letra más grande." },
    { prompt: "Borraste una palabra por error.", icon: Undo2, options: [o("Deshacer", Undo2), o("Cerrar Word", X)], answer: 0, explain: "Deshacer (Ctrl + Z) regresa lo que borraste." },
    { prompt: "Terminaste un renglón y quieres empezar otro.", icon: Keyboard, options: [o("Enter"), o("Barra espaciadora")], answer: 0, explain: "Enter baja al siguiente renglón." },
    { prompt: "Terminaste tu cuento y no quieres perderlo.", icon: Save, options: [o("Guardar", Save), o("Imprimir", Printer)], answer: 0, explain: "Guardar conserva tu trabajo en la computadora." },
  ],
  "8": [
    { prompt: "Tu diapositiva tiene demasiado texto.", icon: Presentation, options: [o("Usar frases cortas e imágenes", Image), o("Hacer la letra muy pequeña", Type)], answer: 0, explain: "Pocas palabras e imágenes se entienden mejor." },
    { prompt: "Quieres que todas las diapositivas combinen.", icon: LayoutTemplate, options: [o("Elegir un diseño", LayoutTemplate), o("Cambiar cada color a mano", Palette)], answer: 0, explain: "Un diseño aplica los mismos colores a todas." },
    { prompt: "Estás presentando y quieres pasar a la siguiente diapositiva.", icon: Play, options: [o("Clic o flecha →", Mouse), o("Cerrar el programa", X)], answer: 0, explain: "Con un clic o la flecha avanzas." },
    { prompt: "Quieres que una estrella aparezca girando.", icon: Shapes, options: [o("Ponerle una animación", Sparkles), o("Ponerle una transición", Film)], answer: 0, explain: "Los objetos se mueven con animaciones." },
  ],
  "9-10": [
    { prompt: "Quieres sumar las celdas A1 y A2.", icon: Equal, options: [o("=A1+A2", Equal), o("A1+A2")], answer: 0, explain: "Toda fórmula empieza con el signo =." },
    { prompt: "Quieres comparar las ventas de 4 meses con un dibujo.", icon: BarChart3, options: [o("Insertar una gráfica de columnas", BarChart3), o("Cambiar la fuente", Type)], answer: 0, explain: "Las gráficas muestran los datos de forma visual." },
    { prompt: "Quieres sumar de B2 a B10.", icon: Sigma, options: [o("=SUMA(B2:B10)", Sigma), o("=SUMA(B2-B10)")], answer: 0, explain: "Los dos puntos indican un rango: desde B2 hasta B10." },
    { prompt: "Quieres poner los nombres en orden de la A a la Z.", icon: ArrowUpDown, options: [o("Ordenar", ArrowUpDown), o("Borrar la columna", Trash2)], answer: 0, explain: "Ordenar acomoda los datos alfabéticamente." },
  ],
  "11-12": [
    { prompt: "Copias =B2*C1 hacia abajo, pero C1 (el IVA) debe quedar fija.", icon: Equal, options: [o("=B2*$C$1", Equal), o("=B2*C1")], answer: 0, explain: "El signo $ crea una referencia absoluta que no cambia al copiar." },
    { prompt: "Quieres mostrar “Aprobado” si la calificación en B2 es 6 o más.", icon: Sigma, options: [o("=SI(B2>=6,\"Aprobado\",\"Reforzar\")"), o("=SUMA(B2>=6)")], answer: 0, explain: "La función SI decide entre dos resultados." },
    { prompt: "Necesitas llevar una gráfica de Excel a tu exposición.", icon: PieChart, options: [o("Copiar y pegar en PowerPoint", Copy), o("Volver a dibujarla a mano", Shapes)], answer: 0, explain: "Copiar y pegar mantiene la gráfica y sus datos." },
    { prompt: "Debes hacer 30 invitaciones con el nombre de cada alumno de una lista de Excel.", icon: Type, options: [o("Combinar correspondencia en Word", Type), o("Escribir 30 cartas una por una")], answer: 0, explain: "Combinar correspondencia une Word con los datos de Excel." },
    { prompt: "Quieres ver solo a los alumnos del grupo 6°B en una tabla.", icon: Filter, options: [o("Aplicar un filtro", Filter), o("Borrar las demás filas", Trash2)], answer: 0, explain: "El filtro oculta temporalmente lo que no necesitas sin borrar datos." },
  ],
};

export const ADIVINA: Leveled<Question[]> = {
  "6": [
    { prompt: "Soy un dibujito en el escritorio y con doble clic abro un programa. ¿Qué soy?", options: [o("Icono", AppWindow), o("Bocina", Speaker), o("Teclado", Keyboard)], answer: 0, explain: "¡Es un icono!" },
    { prompt: "Soy un cuadro donde se abre un programa y tengo una X para cerrarme.", options: [o("Mouse", Mouse), o("Ventana", Square), o("CPU", Cpu)], answer: 1, explain: "¡Es una ventana!" },
    { prompt: "Guardo todo lo que borras por si te arrepientes.", options: [o("Monitor", Monitor), o("Impresora", Printer), o("Papelera", Trash2)], answer: 2, explain: "¡Es la papelera de reciclaje!" },
    { prompt: "Soy el cerebro de la computadora.", options: [o("CPU", Cpu), o("Bocina", Speaker), o("Mouse", Mouse)], answer: 0, explain: "¡Es el CPU!" },
  ],
  "7": [
    { prompt: "Hago que las letras se inclinen.", options: [o("Cursiva", Italic), o("Negrita", Bold), o("Centrar", AlignCenter)], answer: 0, explain: "¡Es la cursiva!" },
    { prompt: "Pongo una línea debajo de las palabras.", options: [o("Color", Palette), o("Subrayado", Underline), o("Imagen", Image)], answer: 1, explain: "¡Es el subrayado!" },
    { prompt: "Soy el tipo de letra, como Arial o Comic Sans.", options: [o("Tamaño"), o("Alineación", AlignLeft), o("Fuente", Type)], answer: 2, explain: "¡Es la fuente!" },
    { prompt: "Acomodo el texto en medio de la hoja.", options: [o("Centrar", AlignCenter), o("Guardar", Save), o("Negrita", Bold)], answer: 0, explain: "¡Es la alineación centrada!" },
  ],
  "8": [
    { prompt: "Soy cada hoja de una presentación.", options: [o("Diapositiva", Presentation), o("Celda", Grid3x3), o("Ventana", Square)], answer: 0, explain: "¡Es una diapositiva!" },
    { prompt: "Hago que un texto o imagen aparezca o se mueva.", options: [o("Diseño", LayoutTemplate), o("Animación", Sparkles), o("Forma", Shapes)], answer: 1, explain: "¡Es una animación!" },
    { prompt: "Soy el efecto que aparece al cambiar de diapositiva.", options: [o("Imagen", Image), o("Forma", Shapes), o("Transición", Film)], answer: 2, explain: "¡Es una transición!" },
    { prompt: "Soy un círculo, flecha o estrella que puedes dibujar.", options: [o("Forma", Shapes), o("Fuente", Type), o("Tabla", Table)], answer: 0, explain: "¡Es una forma!" },
  ],
  "9-10": [
    { prompt: "Soy el cruce de una fila y una columna.", options: [o("Celda", Grid3x3), o("Gráfica", BarChart3), o("Diapositiva", Presentation)], answer: 0, explain: "¡Es una celda!" },
    { prompt: "Soy un dibujo hecho con los datos de la tabla.", options: [o("Fila", Rows3), o("Gráfica", BarChart3), o("Fórmula", Equal)], answer: 1, explain: "¡Es una gráfica!" },
    { prompt: "Empiezo con “=” y hago cálculos.", options: [o("Columna", Columns3), o("Tabla", Table), o("Fórmula", Equal)], answer: 2, explain: "¡Es una fórmula!" },
    { prompt: "Voy de lado y me nombran con números.", options: [o("Fila", Rows3), o("Columna", Columns3), o("Celda", Grid3x3)], answer: 0, explain: "¡Es una fila!" },
  ],
  "11-12": [
    { prompt: "Soy el atajo de Windows para cambiar entre ventanas abiertas.", options: [o("Alt + Tab"), o("Ctrl + P", Printer), o("Ctrl + B")], answer: 0, explain: "¡Es Alt + Tab!" },
    { prompt: "Cuento solo las celdas que cumplen una condición.", options: [o("=SUMA", Sigma), o("=CONTAR.SI", Equal), o("=MAX")], answer: 1, explain: "¡Es CONTAR.SI!" },
    { prompt: "En Word doy el mismo formato a todos los títulos y creo el índice automático.", options: [o("Márgenes"), o("Columnas", Columns3), o("Estilos", Type)], answer: 2, explain: "¡Son los Estilos!" },
    { prompt: "En PowerPoint cambio el diseño de todas las diapositivas a la vez.", options: [o("Patrón de diapositivas", LayoutTemplate), o("Transición", Film), o("Forma", Shapes)], answer: 0, explain: "¡Es el Patrón de diapositivas!" },
  ],
};

export const MEMORIA: Leveled<Pair[]> = {
  "6": [
    { id: "monitor", label: "Monitor", icon: Monitor, image: img("monitor.png") }, { id: "teclado", label: "Teclado", icon: Keyboard, image: img("teclado.png") },
    { id: "mouse", label: "Mouse", icon: Mouse, image: img("mouse.png") }, { id: "cpu", label: "CPU / gabinete", icon: Cpu, image: img("cpu.png") },
    { id: "impresora", label: "Impresora", icon: Monitor, image: img("impresora.png") }, { id: "bocina", label: "Bocina", icon: Monitor, image: img("bocinas.png") },
    { id: "usb", label: "Memoria USB", icon: Monitor, image: img("usb.png") }, { id: "webcam", label: "Webcam", icon: Monitor, image: img("webcam.png") },
    { id: "audifonos", label: "Audífonos", icon: Monitor, image: img("audifonos.png") },
    { id: "carpeta", label: "Carpeta", icon: FolderOpen }, { id: "papelera", label: "Papelera", icon: Trash2 },
  ],
  "7": [
    { id: "negrita", label: "Negrita", icon: Bold }, { id: "cursiva", label: "Cursiva", icon: Italic },
    { id: "subrayado", label: "Subrayado", icon: Underline }, { id: "centrar", label: "Centrar", icon: AlignCenter },
    { id: "imagen", label: "Imagen", icon: Image }, { id: "color", label: "Color de fuente", icon: Palette },
  ],
  "8": [
    { id: "diapositiva", label: "Diapositiva", icon: Presentation }, { id: "forma", label: "Forma", icon: Shapes },
    { id: "imagen", label: "Imagen", icon: Image }, { id: "transicion", label: "Transición", icon: Film },
    { id: "animacion", label: "Animación", icon: Sparkles }, { id: "presentar", label: "Presentar", icon: Play },
  ],
  "9-10": [
    { id: "celda", label: "Celda", icon: Grid3x3 }, { id: "fila", label: "Fila", icon: Rows3 },
    { id: "columna", label: "Columna", icon: Columns3 }, { id: "formula", label: "Fórmula", icon: Equal },
    { id: "suma", label: "Autosuma", icon: Sigma }, { id: "grafica", label: "Gráfica", icon: BarChart3 },
  ],
  "11-12": [
    { id: "carpeta", label: "Explorador", icon: FolderOpen }, { id: "estilos", label: "Estilos (Word)", icon: Type },
    { id: "transicion", label: "Transición", icon: Film }, { id: "formula", label: "Fórmula", icon: Equal },
    { id: "grafica", label: "Gráfica circular", icon: PieChart }, { id: "copiar", label: "Copiar y pegar", icon: Copy },
    { id: "filtro", label: "Filtro", icon: Filter }, { id: "tabla", label: "Tabla", icon: Table },
  ],
};

/** Memorama de 6 años: personajes. */
export const PERSONAJES: Pair[] = [
  { id: "cantante", label: "Cantante", icon: Mic, image: img("personaje-1.png") },
  { id: "estrella", label: "Estrella", icon: Star, image: img("personaje-2.png") },
  { id: "bluey", label: "Bluey", icon: Dog, image: img("personaje-3.png") },
  { id: "bingo", label: "Bingo", icon: Dog, image: img("personaje-4.png") },
  { id: "chase", label: "Chase", icon: Shield, image: img("personaje-5.png") },
  { id: "superman", label: "Superman", icon: Badge, image: img("personaje-6.png") },
];
