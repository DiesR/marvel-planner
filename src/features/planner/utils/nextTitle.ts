import type { PhaseNumber, Saga, Title } from "../types";

export function findNextTitle(titles: Title[], watched: ReadonlySet<string>): Title | null {
  return (
    titles.find(
      (title) =>
        !watched.has(title.id) && title.status === "released" && title.continuity === "main",
    ) ?? null
  );
}

export function findPhaseNumber(catalog: Saga[], titleId: string): PhaseNumber | null {
  const phase = catalog
    .flatMap((saga) => saga.phases)
    .find((candidate) => candidate.titles.some((title) => title.id === titleId));
  return phase?.number ?? null;
}
