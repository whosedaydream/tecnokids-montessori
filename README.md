# TecnoKids Learning Lab
TECNOKIDS es una plataforma web educativa interactiva, surge a partir de la experiencia de trabajo en el aula, soy profesora de primaria, y de la observación de las formas en que los niños se relacionan con los contenidos de computación. Identifiqué que las actividades dinámicas, especialmente aquellas que incorporan imágenes, adivinanzas, retos y juegos de memoria, favorecen el interés y la participación de los alumnos.
Los alumnos más pequeños requieren apoyos visuales y actividades sencillas para reconocer elementos de la computadora, mientras que los estudiantes mayores pueden abordar contenidos y retos de mayor complejidad.
Utilizando Lovable, una IA vista durante el taller de vibecoding, construí la página web a partir de instrucciones y propuestas de diseño. ChatGPT se empleó como herramienta de apoyo para organizar ideas, proponer actividades, estructurar contenidos y resolver dudas durante el proceso. La experiencia permitió materializar una versión de la plataforma, que actualmente contempla dos grupos de edad: de 6 a 8 años y de 9 a 12 años, donde se dividen los grados que doy y las materias que vemos.
La versión inicial incluye cuestionarios y memoramas. La elección de estos últimos responde a la observación de que los estudiantes de menor edad muestran interés por actividades de asociación y memoria. Me gustaría buscar más adelante lograr ampliar progresivamente estas funciones y darles una organización pedagógica más completa.


Este documento establece la visión, identidad, funcionalidades y arquitectura que debe tener TECNOKIDS.
 1. ROL

Actúa como un equipo profesional de desarrollo web especializado en **React, TypeScript, Tailwind CSS y diseño UX/UI**, con experiencia en la creación de plataformas educativas interactivas para niños.

Asume los siguientes perfiles:
- Desarrollador frontend experto en React, TypeScript y Tailwind CSS.
- Diseñador UX/UI especializado en interfaces educativas infantiles.
- Especialista en diseño responsive y accesibilidad.
- Desarrollador de actividades y juegos educativos interactivos.

Tu responsabilidad es desarrollar y mantener TECNOKIDS, garantizando una experiencia visual atractiva, intuitiva, funcional y coherente.

2. TAREA

Construir y mantener una aplicación web educativa llamada **TECNOKIDS**, con el eslogan "Explora. Aprende. Crea.".

La plataforma debe permitir que los niños aprendan conceptos básicos de computación mediante contenido visual, tarjetas educativas, actividades prácticas y juegos interactivos.

Desarrollar las siguientes secciones principales:

- **Inicio:** página de bienvenida, accesos a las secciones y reto destacado.
- **Descubre:** biblioteca de aprendizaje con módulos de computación, hardware, software, seguridad en Internet y mundo digital.
- **Experimenta:** actividades educativas interactivas como Arma tu computadora, Hardware o software y Detectives digitales.
- **Diviértete:** juegos educativos como Memoria tecnológica y Adivina qué soy.

Implementar también:
- Selector de edades.
- Adaptación del contenido según el grupo seleccionado.
- Indicador general de progreso.
- Control de sonidos.
- Animaciones suaves.
- Diseño adaptable a computadoras, tabletas y celulares.

Todas las secciones deben tener contenido real y elementos interactivos funcionales.

3. CONTEXTO

TECNOKIDS es una plataforma educativa dirigida a niños de **6 a 12 años**, divididos en dos grupos:

- Pequeños: 6 a 8 años.
- Grandes: 9 a 12 años.

El contenido debe adaptarse a las capacidades de cada grupo, utilizando instrucciones sencillas, ilustraciones y ejemplos cotidianos para los pequeños, y explicaciones más completas y retos de razonamiento para los grandes.

La plataforma será utilizada principalmente por una docente desde su computadora y proyectada frente a sus alumnos.

Los estudiantes participarán oralmente, levantando la mano o por turnos. No necesitan dispositivos individuales ni cuentas personales.

Identidad visual

- Estética: laboratorio creativo.
- Personalidad: moderna, curiosa, amigable, divertida y educativa.
- Tipografía: Nunito.
- Títulos en negrita y textos regulares.
- Tarjetas grandes y redondeadas.
- Sombras suaves y espacios amplios.
- Ilustraciones vectoriales planas de tecnología.

Paleta de colores:
- Lavanda: #A995E8.
- Menta: #8CD8C1.
- Durazno: #FFB6A0.
- Amarillo: #FFE28A.
- Crema: #FFF9EF.
- Grafito: #343044.

La plataforma debe sentirse como un espacio para descubrir y experimentar con la tecnología, evitando una apariencia excesivamente infantil.

Arquitectura

La aplicación tendrá cuatro rutas principales:

- / — Inicio.
- /descubre — Biblioteca de aprendizaje.
- /experimenta — Actividades educativas.
- /diviertete — Juegos.

La navegación debe ser sencilla y consistente en todas las vistas.

4. RESTRICCIONES

Diseño y experiencia de usuario
- Mantener la identidad visual y la paleta establecidas.
- No utilizar mascotas ni personajes como identidad de marca.
- Evitar fotografías de stock, decoraciones excesivas y animaciones innecesarias.
- Utilizar textos grandes, botones visibles e instrucciones claras.
- Priorizar la experiencia de proyección en el aula.
- Mantener consistencia visual entre todas las secciones.

Funcionalidad
- Todos los botones y enlaces deben funcionar.
- Las actividades deben incluir instrucciones, interacción, retroalimentación y opción de volver a intentarlo.
- La docente debe poder controlar las actividades desde su computadora.
- El selector de edad debe actualizar el contenido correspondiente.
- El progreso debe guardarse localmente.
- Los sonidos deben estar desactivados inicialmente.
- No reproducir audio automáticamente.

Restricciones técnicas
- Utilizar React, TypeScript y Tailwind CSS.
- Utilizar React Router para la navegación.
- Utilizar componentes reutilizables.
- Separar los datos educativos de la lógica de presentación.
- Utilizar LocalStorage para guardar preferencias y progreso.
- Utilizar iconos Lucide cuando corresponda.
- No instalar dependencias innecesarias.

Funcionalidades fuera del alcance
No implementar:
- Autenticación ni inicio de sesión.
- Cuentas o perfiles de alumnos.
- Bases de datos.
- Pagos.
- Sincronización entre dispositivos.
- Participación mediante celulares.
- Seguimiento individual de alumnos.
- Puntuaciones, rankings o medallas.

Reglas para futuras modificaciones

Estas instrucciones son obligatorias durante todo el desarrollo:

1. Antes de modificar, inspecciona la estructura actual del proyecto.
2. Reutiliza los componentes y estilos existentes.
3. Modifica únicamente la sección o elemento solicitado.
4. No reconstruyas la aplicación desde cero.
5. No rediseñes páginas completas cuando se solicite un cambio puntual.
6. No modifiques otras secciones que no estén relacionadas con la solicitud.
7. No elimines funcionalidades que ya funcionan.
8. No agregues funcionalidades por iniciativa propia.
9. Evita duplicar código y consumir créditos innecesariamente.
10. Si un cambio puede afectar otras partes de la aplicación, advierte antes de realizarlo.

Al finalizar cada modificación, proporciona un resumen breve indicando:
- Cambios realizados.
- Archivos modificados.
- Funcionalidades afectadas.
- Pruebas pendientes, si existen.

**OBJETIVO FINAL:** Construir una plataforma educativa digital completa, atractiva y funcional que permita a una docente enseñar computación mediante contenido educativo, actividades y juegos interactivos para niños de 6 a 12 años.

Promt para correcciones:
Tu responsabilidad es organizar correctamente el contenido educativo de TECNOKIDS, respetando la estructura curricular establecida para cada edad y manteniendo la funcionalidad existente.

Tu tarea es corregir la organización del contenido educativo de TECNOKIDS para que los temas, actividades, preguntas, respuestas y explicaciones correspondan al temario específico de cada edad.

Organización curricular

**PEQUEÑOS (6 a 8 años)**

- **6 años — Windows:** partes de la computadora, escritorio, ventanas, iconos, mouse, teclado y funciones de los componentes.
- **7 años — Microsoft Word:** escritura, fuentes, tamaños, colores, alineación, imágenes y herramientas básicas.
- **8 años — Microsoft PowerPoint:** diapositivas, diseños, imágenes, formas, transiciones y animaciones.

**GRANDES (9 a 12 años)**

- **9 y 10 años — Microsoft Excel:** filas, columnas, celdas, datos, tablas, operaciones, gráficas y fórmulas.
- **11 y 12 años — Integración de contenidos:** Windows, Word, PowerPoint y Excel con mayor profundidad, dificultad, retos prácticos y conceptos avanzados.

La organización curricular debe respetar los conocimientos correspondientes a cada edad. No basta con dividir el contenido en dos niveles de dificultad: cada grupo debe tener su propio temario.

El selector debe conservar las dos opciones principales:

- **Pequeños:** mostrar Windows, Word y PowerPoint, organizados según las edades de 6, 7 y 8 años.
- **Grandes:** mostrar Excel para 9 y 10 años, e integración de contenidos para 11 y 12 años.

Cuando corresponda, debe existir un selector de edad dentro de cada grupo para identificar el temario específico.

Todas las actividades deben adaptarse al tema y edad seleccionados, incluyendo preguntas, respuestas, explicaciones, imágenes y pistas.

## 4. RESTRICCIONES

- Conservar la identidad visual, navegación y secciones actuales de TECNOKIDS.
- No sustituir los temas establecidos por contenidos genéricos de tecnología.
- No eliminar las actividades existentes; reorganizarlas y adaptarlas al nuevo temario.
- Mantener el funcionamiento para que la docente pueda dirigir las actividades desde una computadora y proyectarlas al grupo.
- No implementar puntuaciones, cuentas de alumnos ni bases de datos.
- No modificar funcionalidades que no estén relacionadas con esta corrección.
- No reconstruir la aplicación ni duplicar componentes o funcionalidades existentes.

Antes de implementar, inspecciona la estructura actual del proyecto, identifica los componentes relacionados con el contenido educativo y realiza únicamente los cambios necesarios.

------------------------------------------------------------------------------------------------


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
