import type { Title } from "../types";

export function findNextTitle(titles: Title[], watched: ReadonlySet<string>): Title | null {
  return (
    titles.find(
      (title) =>
        !watched.has(title.id) && title.status === "released" && title.continuity === "main",
    ) ?? null
  );
}
