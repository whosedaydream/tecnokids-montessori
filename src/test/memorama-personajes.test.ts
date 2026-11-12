import { existsSync } from "node:fs";
import { resolve } from "node:path";

import { describe, expect, it } from "vitest";

import { MEMORIA, PERSONAJES } from "@/data/juegos";

// The 6-year-old memorama is the one Diana fills with her own pictures: the
// characters must stay wired to the files she uploaded into public/images/memorama.
describe("Memorama de 6 años: personajes", () => {
  it("has the six uploaded characters with their labels", () => {
    expect(PERSONAJES.map((p) => p.label)).toEqual([
      "Cantante",
      "Estrella",
      "Bluey",
      "Bingo",
      "Chase",
      "Superman",
    ]);
  });

  it("points every character card at an image that exists on disk", () => {
    expect(PERSONAJES.every((p) => p.image)).toBe(true);
    for (const p of PERSONAJES) {
      const file = resolve("public", p.image!.replace(/^\//, ""));
      expect(existsSync(file), `${p.label} -> ${p.image}`).toBe(true);
    }
  });

  it("keeps the computer cards and offers all three categories", () => {
    const computadora = MEMORIA["6"];
    expect(computadora).toHaveLength(11);
    expect(computadora.filter((p) => p.image)).toHaveLength(9);
    // "Todas las tarjetas" joins both sets, so ids must never collide.
    const ids = new Set([...computadora, ...PERSONAJES].map((p) => p.id));
    expect(ids.size).toBe(computadora.length + PERSONAJES.length);
  });
});
