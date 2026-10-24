import { describe, expect, it } from "vitest";
import { localized } from "../src/features/planner/data/guides/types";
import { getReadiness } from "../src/features/planner/utils/readiness";

const reason = localized("", "", "", "", "");
const prerequisites = [
  { id: "a", level: "essential" as const, reason },
  { id: "b", level: "recommended" as const, reason },
  { id: "c", level: "optional" as const, reason },
];

describe("prontezza alla visione", () => {
  it("senza prerequisiti il titolo è autonomo", () => {
    expect(getReadiness([], new Set())).toEqual({ kind: "standalone" });
  });

  it("segnala gli essenziali mancanti", () => {
    expect(getReadiness(prerequisites, new Set(["b"]))).toEqual({
      kind: "missingEssential",
      missingIds: ["a"],
    });
  });

  it("scala da pronto a completo man mano che si guardano i titoli", () => {
    expect(getReadiness(prerequisites, new Set(["a"])).kind).toBe("ready");
    expect(getReadiness(prerequisites, new Set(["a", "b"])).kind).toBe("wellPrepared");
    expect(getReadiness(prerequisites, new Set(["a", "b", "c"])).kind).toBe("complete");
  });
});
