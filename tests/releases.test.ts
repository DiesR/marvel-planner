import { describe, expect, it } from "vitest";
import { CATALOG } from "../src/features/planner/data/catalog";
import { flattenTitles } from "../src/features/planner/utils/filters";
import { applyReleaseDates, todayIso } from "../src/features/planner/utils/releases";

const first = flattenTitles(CATALOG)[0];
const today = "2026-10-24";

const resolveFirst = (releaseDate: string | null) =>
  flattenTitles(applyReleaseDates(CATALOG, { [first.id]: releaseDate }, today))[0];

describe("date di uscita", () => {
  it("formatta la data locale in ISO", () => {
    expect(todayIso(new Date(2026, 0, 5))).toBe("2026-01-05");
  });

  it("una data passata diventa solo anno e stato uscito", () => {
    expect(resolveFirst("2008-05-02")).toMatchObject({ release: "2008", status: "released" });
  });

  it("una data futura resta completa e segna il titolo come non uscito", () => {
    expect(resolveFirst("2027-05-01")).toMatchObject({
      release: "2027-05-01",
      status: "upcoming",
    });
  });

  it("senza data nota lascia il titolo invariato", () => {
    expect(resolveFirst(null)).toEqual(first);
  });
});
