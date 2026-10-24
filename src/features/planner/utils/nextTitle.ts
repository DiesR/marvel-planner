import type { Saga, Title } from "../types";
import { flattenTitles } from "./filters";

export function findNextTitle(catalog: Saga[], watched: ReadonlySet<string>): Title | null {
  return (
    flattenTitles(catalog).find(
      (title) =>
        !watched.has(title.id) && title.status === "released" && title.continuity === "main",
    ) ?? null
  );
}
