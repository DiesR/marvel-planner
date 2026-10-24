import { describe, expect, it } from "vitest";
import { CATALOG } from "../src/features/planner/data/catalog";
import { flattenTitles } from "../src/features/planner/utils/filters";
import { planImport } from "../src/features/planner/utils/importPlan";
import { findNextTitle } from "../src/features/planner/utils/nextTitle";
import { chronologicalTitles, titlesInOrder } from "../src/features/planner/utils/order";
import { CHRONOLOGICAL_ORDER } from "../src/features/planner/data/chronology";

const titles = flattenTitles(CATALOG);
const known = new Set(titles.map((title) => title.id));
const [a, b, c] = titles.map((title) => title.id);

describe("importazione di un planner condiviso", () => {
  it("scarta gli id che non fanno parte del catalogo", () => {
    expect(planImport(new Set(), [a, "i-inventato"], known).incoming).toEqual(new Set([a]));
  });

  it("sostituendo si perde ciò che non è nel planner condiviso", () => {
    const plan = planImport(new Set([a, b]), [b, c], known);
    expect(plan.lostByReplacing).toBe(1);
    expect(plan.incoming).toEqual(new Set([b, c]));
  });

  it("unendo non si perde nulla e si contano solo i titoli nuovi", () => {
    const plan = planImport(new Set([a, b]), [b, c], known);
    expect(plan.merged).toEqual(new Set([a, b, c]));
    expect(plan.gainedByMerging).toBe(1);
  });

  it("con un planner vuoto nessun titolo viene perso", () => {
    expect(planImport(new Set(), [a], known).lostByReplacing).toBe(0);
  });
});

describe("prossimo da guardare", () => {
  it("è il primo titolo non visto del catalogo", () => {
    expect(findNextTitle(titles, new Set())?.id).toBe(a);
    expect(findNextTitle(titles, new Set([a]))?.id).not.toBe(a);
  });

  it("salta i titoli non ancora usciti e la continuità alternativa", () => {
    const everythingEligibleWatched = new Set(
      titles
        .filter((title) => title.status === "released" && title.continuity === "main")
        .map((title) => title.id),
    );
    expect(findNextTitle(titles, everythingEligibleWatched)).toBeNull();
  });
});

describe("ordine cronologico", () => {
  it("cita solo titoli del catalogo, senza duplicati", () => {
    expect(CHRONOLOGICAL_ORDER.filter((id) => !known.has(id))).toEqual([]);
    expect(new Set(CHRONOLOGICAL_ORDER).size).toBe(CHRONOLOGICAL_ORDER.length);
  });

  it("separa i titoli collocati da quelli senza collocazione senza perderne", () => {
    const { placed, unplaced } = chronologicalTitles(CATALOG);
    expect(placed.length + unplaced.length).toBe(titles.length);
    expect(placed.map((title) => title.id)).toEqual(CHRONOLOGICAL_ORDER);
    expect(unplaced.every((title) => !CHRONOLOGICAL_ORDER.includes(title.id))).toBe(true);
  });

  it("in ordine cronologico parte dal primo titolo della linea temporale", () => {
    expect(titlesInOrder(CATALOG, "chronological")[0].id).toBe(CHRONOLOGICAL_ORDER[0]);
    expect(titlesInOrder(CATALOG, "release")[0].id).toBe(a);
  });

  it("il prossimo da guardare segue l'ordine scelto", () => {
    const chronological = titlesInOrder(CATALOG, "chronological");
    expect(findNextTitle(chronological, new Set())?.id).toBe(CHRONOLOGICAL_ORDER[0]);
  });
});
