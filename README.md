# TecnoKids Learning Lab

Este documento establece la visión, identidad, funcionalidades y arquitectura que debe tener TECNOKIDS.

Estoy comenzando a trabajar en este proyecto desde una cuenta nueva de Lovable. Por lo tanto, considera este documento como la especificación principal para construir la aplicación.

IMPORTANTE:

No asumas que existen componentes o funcionalidades previamente implementados.

No inventes que ya existen páginas, rutas o elementos.

No realices modificaciones fuera de lo descrito.

No agregues funcionalidades que no estén contempladas.

Respeta todas las decisiones de diseño y funcionamiento establecidas.

Primero analiza esta especificación y organiza internamente el desarrollo por etapas.

Comienza construyendo la primera versión funcional de TECNOKIDS, respetando la estructura, identidad visual y funcionalidades descritas.

Optimiza la implementación para evitar código duplicado, componentes innecesarios y consumo excesivo de créditos.
Actúa como un equipo profesional de desarrollo web especializado en UX/UI, diseño de interfaces educativas infantiles y desarrollo frontend.

Tu responsabilidad es desarrollar y mantener una aplicación web llamada TECNOKIDS, respetando la identidad, estructura, funcionalidades y decisiones descritas en este documento.

Este documento representa la visión general del proyecto y debe servir como referencia para todas las modificaciones futuras.
1. IDENTIDAD DEL PROYECTO

Nombre: TecnoKids

Eslogan: Explora. Aprende. Crea.

Descripción: Un mundo de tecnología por descubrir.

Objetivo: Crear una plataforma educativa interactiva para niños de 6 a 12 años, donde puedan aprender conceptos de computación mediante tarjetas educativas, actividades y juegos.

La plataforma será utilizada principalmente por una docente que administra las actividades desde su computadora y las proyecta frente a sus alumnos.

Los alumnos participan desde sus asientos, respondiendo oralmente o levantando la mano. No necesitan dispositivos individuales.

TECNOKIDS debe conservar su carácter de plataforma educativa completa. No debe convertirse únicamente en un catálogo de juegos.

2. PÚBLICO OBJETIVO

Dividir el contenido en dos grupos:

Pequeños: 6 a 8 años.

Grandes: 9 a 12 años.

El contenido debe adaptarse al grupo seleccionado.

Pequeños:

Instrucciones cortas.

Vocabulario sencillo.

Actividades visuales.

Ejemplos cotidianos.

Menor cantidad de información por pantalla.

Grandes:

Explicaciones más completas.

Conceptos técnicos básicos.

Preguntas de mayor dificultad.

Retos que requieran razonamiento.

El selector de edad debe permitir cambiar entre ambos grupos y actualizar los contenidos correspondientes.3. IDENTIDAD VISUAL

Estética: Laboratorio creativo.

Personalidad: Moderna, curiosa, amigable, divertida y educativa.

Evitar una apariencia excesivamente infantil.

No utilizar mascotas ni personajes como identidad de marca.

Paleta de colores:

Lavanda principal: #A995E8.

Menta: #8CD8C1.

Durazno: #FFB6A0.

Amarillo: #FFE28A.

Crema de fondo: #FFF9EF.

Grafito para textos: #343044.

Tipografía: Nunito.

Bold para títulos.

Regular para textos.

Estilo visual:

Tarjetas grandes.

Bordes redondeados.

Sombras suaves.

Botones redondeados.

Espacios amplios.

Ilustraciones vectoriales planas de computadoras, teclados, componentes tecnológicos y elementos geométricos.

Iconos Lucide cuando corresponda.

Mantener consistencia visual en todas las vistas.

Evitar fotografías de stock, exceso de elementos decorativos, colores sin relación con la paleta y animaciones excesivas.

4. ARQUITECTURA Y NAVEGACIÓN

La arquitectura objetivo es una Single Page Application (SPA), utilizando React, TypeScript, Tailwind CSS y React Router.

Antes de modificar el proyecto, inspecciona las tecnologías y estructura que ya existen.

No reemplaces el framework, las rutas ni las dependencias si la implementación actual ya funciona correctamente.

Rutas principales:

/ — Inicio.

/descubre — Biblioteca de aprendizaje.

/experimenta — Actividades educativas.

/diviertete — Juegos.

Mantener un encabezado consistente en todas las vistas, con el logotipo tipográfico TecnoKids y el menú:

Inicio | Descubre | Experimenta | Diviértete.

La barra de navegación debe conservar su diseño rosa pastel, texto blanco y estados hover o activo con colores apropiados de la paleta.

Agregar navegación funcional, opción para regresar al inicio y diseño adaptable a celulares, tabletas y computadoras.

5. VISTA INICIO

Crear una página de bienvenida con:

Hero principal con el texto: "¡El mundo digital está lleno de posibilidades!"

Descripción breve de TECNOKIDS.

Botón "Comenzar a explorar".

Ilustración tecnológica principal.

Cuatro tarjetas de acceso: Descubre, Experimenta, Diviértete y Crea.

Sección de reto destacado.

Pie de página con nombre y eslogan.

El diseño debe ser visualmente atractivo, equilibrado y fácil de recorrer.

Las tarjetas y secciones que ya estén implementadas y funcionen correctamente deben conservarse.

6. VISTA DESCUBRE — BIBLIOTECA DE APRENDIZAJE

Crear una biblioteca educativa con cuatro módulos:

Conoce tu computadora.

Hardware y software.

Internet seguro.

Mundo digital.

Cada módulo tendrá tarjetas interactivas con:

Ilustración.

Título.

Descripción breve.

Botón "Descubrir".

Explicación que se muestra al pulsar la tarjeta.

Dato curioso o ejemplo práctico.

Incluir selector de edad entre Pequeños y Grandes.

Adaptar las explicaciones, ejemplos y preguntas al grupo seleccionado.

El contenido debe ser educativo, correcto y apropiado para la edad.

7. VISTA EXPERIMENTA — ACTIVIDADES EDUCATIVAS

Implementar tres actividades funcionales:

1. ARMA TU COMPUTADORA

Actividad de identificación de componentes tecnológicos.

El usuario debe seleccionar los componentes correctos a partir de ilustraciones y pistas.

2. HARDWARE O SOFTWARE

Mostrar tarjetas con elementos tecnológicos.

El participante debe clasificarlos en la categoría correcta.

3. DETECTIVES DIGITALES

Presentar situaciones relacionadas con la seguridad en Internet.

El participante debe identificar cuáles representan buenas prácticas digitales.

Cada actividad debe incluir:

Instrucciones claras.

Interacción funcional.

Retroalimentación inmediata.

Explicación de la respuesta correcta.

Opción de volver a intentarlo.

Adaptación al aula:

La docente controla las actividades desde su computadora y los alumnos participan oralmente o levantando la mano.

No es necesario que cada alumno interactúe directamente con la pantalla.

Las actividades deben permitir que la docente seleccione o revele respuestas cuando sea necesario, especialmente cuando se proyecten frente al grupo.

8. VISTA DIVIÉRTETE — JUEGOS EDUCATIVOS

Implementar juegos funcionales con contenido adaptado a Pequeños y Grandes.

JUEGO 1: MEMORIA TECNOLÓGICA

Tablero de tarjetas volteables.

Parejas de elementos tecnológicos.

Ilustraciones y nombres.

Detección de parejas correctas.

Mensaje de felicitación al completar el juego.

Botón para reiniciar.

La docente debe controlar la actividad desde la pantalla. Debe poder seleccionar las tarjetas, revelar su contenido y dirigir la búsqueda de parejas con los alumnos.

JUEGO 2: ADIVINA QUÉ SOY

Mostrar pistas sobre elementos tecnológicos.

Presentar tres posibles respuestas.

Permitir que la docente seleccione la respuesta elegida por el grupo.

Mostrar retroalimentación inmediata.

Revelar la explicación de la respuesta correcta.

Botón para jugar nuevamente.

Otros juegos que podrán incorporarse progresivamente:

Bingo de computación.

Cuestionarios interactivos.

Ruleta de preguntas.

Relacionar conceptos.

Encuentra el error.

Rompecabezas tecnológicos.

No es necesario implementar todos estos juegos de inmediato. Deben desarrollarse progresivamente y reutilizando componentes cuando sea posible.

9. EXPERIENCIA DE PROYECCIÓN EN CLASE

Esta es una condición fundamental de TECNOKIDS.

La docente es quien controla la plataforma.

Los alumnos participan desde sus asientos mediante respuestas orales, levantando la mano o participando por turnos cuando la docente lo indique.

Los juegos deben ofrecer:

Preguntas y textos grandes.

Imágenes visibles a distancia.

Botones de control claros.

Opción de mostrar u ocultar respuestas.

Avance y retroceso cuando corresponda.

Reinicio de actividades.

Pantalla completa cuando sea conveniente.

Evitar controles pequeños o interfaces que requieran interacción constante de cada alumno.

No implementar:

Cuentas de alumnos.

Registros individuales.

Inicio de sesión.

Participación mediante celulares.

Respuestas enviadas desde otros dispositivos.

Puntuaciones individuales o por equipos.

Rankings.

Medallas o recompensas basadas en puntuación.

10. FUNCIONALIDADES GENERALES

1. SELECTOR DE EDAD

Permitir cambiar entre Pequeños (6-8) y Grandes (9-12).

Mantener la preferencia durante la navegación y guardarla en LocalStorage.

2. INDICADOR DE PROGRESO

Mostrar las actividades que la docente ha completado o marcado como realizadas y un porcentaje de avance general del contenido.

Actualizar automáticamente cuando se complete una actividad.

Guardar el progreso localmente en LocalStorage y permitir reiniciarlo.

Este indicador representa el uso de la plataforma en el dispositivo de la docente. No debe presentarse como seguimiento individual de los alumnos.

3. SONIDOS

Incluir efectos de sonido originales para aciertos, errores y finalización de juegos.

Agregar un botón visible para activar o desactivar sonidos.

Los sonidos deben estar desactivados inicialmente.

No reproducir audio automáticamente.

4. ANIMACIONES

Incluir transiciones suaves, efectos hover, animaciones discretas en tarjetas y pequeñas animaciones al completar actividades.

Evitar animaciones excesivas.

5. RESPONSIVE

Garantizar una experiencia adecuada en escritorio, tabletas y celulares.

Priorizar la experiencia de proyección en computadoras y pantallas grandes.

En móviles, utilizar menú compacto y tarjetas en una sola columna cuando corresponda.

11. REQUISITOS TÉCNICOS

Utilizar componentes reutilizables.

Separar los datos educativos de la lógica de presentación.

Mantener el código organizado.

Usar iconos Lucide.

Utilizar LocalStorage para preferencias y progreso.

No implementar autenticación.

No implementar cuentas ni perfiles infantiles.

No implementar base de datos.

No implementar pagos.

No solicitar información personal de los niños.

No incluir funcionalidades decorativas que no funcionen.

Todos los botones y enlaces deben realizar la acción indicada.

Evitar errores en consola y navegación rota.

Los juegos del mismo tipo deben utilizar estructuras reutilizables. Por ejemplo, diferentes memoramas deben compartir el mismo motor y recibir distintos conjuntos de tarjetas.

12. FUNCIONALIDADES FUERA DEL ALCANCE ACTUAL

No implementar por ahora:

Sistema de usuarios.

Perfiles infantiles.

Registro e inicio de sesión.

Base de datos.

Sincronización entre dispositivos.

Panel administrativo complejo.

Seguimiento individual de alumnos.

Puntuaciones, rankings y medallas.

Se podrán considerar en futuras etapas únicamente si la docente lo solicita.

13. EXPERIENCIA DE USUARIO

La interfaz debe ser intuitiva para niños que utilizan computadoras o tabletas.

Utilizar instrucciones claras, botones visibles y retroalimentación positiva.

Los mensajes deben motivar sin penalizar excesivamente los errores.

Garantizar contraste adecuado y tamaños de texto legibles.

La docente debe poder comprender rápidamente cómo iniciar, controlar y finalizar cada actividad.

14. CRITERIOS DE ACEPTACIÓN

El proyecto deberá cumplir progresivamente con los siguientes criterios:

Las cuatro rutas funcionan correctamente.

Todas las secciones tienen contenido real.

El selector de edad modifica el contenido.

Las tarjetas educativas son interactivas.

Las tres actividades pueden completarse.

Los dos juegos funcionan de principio a fin.

La docente puede controlar las actividades proyectadas.

El progreso de contenido se actualiza y persiste localmente.

El control de sonido funciona.

La interfaz se adapta a diferentes tamaños de pantalla.

No existen botones sin funcionalidad.

No se requiere registro ni información personal de los niños.

15. REGLAS DE TRABAJO PARA LOVABLE — MUY IMPORTANTES

Este proyecto se desarrollará progresivamente y se debe optimizar el consumo de créditos.

Antes de realizar cualquier modificación:

Revisa la estructura actual del proyecto.

Identifica qué funcionalidades ya existen.

Reutiliza componentes y estilos.

Modifica únicamente lo necesario.

Reglas obligatorias:

No reconstruyas la aplicación desde cero si ya existe una implementación.

No rediseñes toda la página por una solicitud puntual.

No modifiques secciones que no hayan sido mencionadas.

No alteres componentes compartidos si no es indispensable.

No elimines funcionalidades que ya funcionan.

No dupliques componentes ni lógica.

No instales dependencias innecesarias.

No agregues funcionalidades por iniciativa propia.

No repitas análisis generales en cada tarea.

Si una modificación puede afectar otras partes, advierte antes de ejecutarla.

Cuando solicite una modificación específica, interpreta este documento como referencia general y trabaja únicamente en el alcance indicado.

Al terminar cada tarea, proporciona un resumen breve con:

Cambios realizados.

Archivos modificados.

Funcionalidades afectadas.

Pruebas pendientes, si existen.

No afirmes que una funcionalidad está terminada si no ha sido implementada y comprobada.

OBJETIVO FINAL

Construir una plataforma educativa digital completa, visualmente atractiva y funcional, que permita aprender conceptos tecnológicos mediante tarjetas, actividades y juegos, adaptados a niños de 6 a 12 años y que pueda ser utilizada por una docente para dirigir actividades y proyectarlas en el aula.
Construye la primera versión funcional de TECNOKIDS siguiendo esta especificación.

Prioriza una implementación coherente, reutilizable y eficiente en créditos.

Desarrolla las cuatro vistas principales y sus funcionalidades descritas. No agregues características fuera del alcance establecido.

No implementes autenticación, base de datos ni sistemas de usuarios.

Antes de finalizar, comprueba la navegación, las interacciones principales y la adaptación responsive.

No sacrifiques la funcionalidad por crear elementos visuales decorativos.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b69938fc-4241-4271-a01f-5fd10eb99544).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
