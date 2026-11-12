import { existsSync } from "node:fs";
import { resolve } from "node:path";

import { describe, expect, it } from "vitest";

import { MEMORIA, PERSONAJES } from "@/data/juegos";

// El memorama de 6 años usa exclusivamente las imágenes que Diana subió.
describe("Memorama de 6 años", () => {
  it("usa exactamente los seis nombres de personajes indicados", () => {
    expect(PERSONAJES.map((p) => p.label)).toEqual([
      "Superman",
      "Rumi",
      "Mira",
      "Chase",
      "Bluey",
      "Bingo",
    ]);
  });

  it("conserva una imagen original existente para cada personaje", () => {
    expect(PERSONAJES.every((p) => p.image)).toBe(true);
    for (const p of PERSONAJES) {
      const file = resolve("public", p.image!.replace(/^\//, ""));
      expect(existsSync(file), `${p.label} -> ${p.image}`).toBe(true);
    }
  });

  it("mezcla nueve elementos de computadora y seis personajes sin repetir identificadores", () => {
    const computadora = MEMORIA["6"];
    expect(computadora.map((p) => p.label)).toEqual([
      "Teclado",
      "Mouse",
      "Monitor",
      "CPU/Gabinete",
      "Impresora",
      "Bocina",
      "Memoria USB",
      "Webcam",
      "Audífonos",
    ]);
    expect(computadora.every((p) => p.image)).toBe(true);
    expect(computadora.some((p) => p.label === "Carpeta" || p.label === "Papelera")).toBe(false);

    const ids = new Set([...computadora, ...PERSONAJES].map((p) => p.id));
    expect(ids.size).toBe(15);
  });
});
