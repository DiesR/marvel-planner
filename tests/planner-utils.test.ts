import { describe, expect, it } from "vitest";
import { CATALOG } from "../src/features/planner/data/catalog";
import { flattenTitles } from "../src/features/planner/utils/filters";
import { planImport } from "../src/features/planner/utils/importPlan";
import { findNextTitle } from "../src/features/planner/utils/nextTitle";

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
    expect(findNextTitle(CATALOG, new Set())?.id).toBe(a);
    expect(findNextTitle(CATALOG, new Set([a]))?.id).not.toBe(a);
  });

  it("salta i titoli non ancora usciti e la continuità alternativa", () => {
    const everythingEligibleWatched = new Set(
      titles
        .filter((title) => title.status === "released" && title.continuity === "main")
        .map((title) => title.id),
    );
    expect(findNextTitle(CATALOG, everythingEligibleWatched)).toBeNull();
  });
});
