import type { MediaType, PhaseNumber, Progress, Saga, Title } from "../../planner/types";

export interface ProgressStats {
  overall: Progress;
  byPhase: ({ number: PhaseNumber } & Progress)[];
  byType: ({ type: MediaType } & Progress)[];
  byYear: ({ year: string } & Progress)[];
}

const MEDIA_TYPES: MediaType[] = ["film", "serie", "special"];

function tally(titles: Title[], watched: ReadonlySet<string>): Progress {
  return { done: titles.filter((title) => watched.has(title.id)).length, total: titles.length };
}

export function computeStats(catalog: Saga[], watched: ReadonlySet<string>): ProgressStats {
  const phases = catalog.flatMap((saga) => saga.phases);
  const titles = phases.flatMap((phase) => phase.titles);
  const years = [...new Set(titles.map((title) => title.release.slice(0, 4)))].sort();

  return {
    overall: tally(titles, watched),
    byPhase: phases.map((phase) => ({ number: phase.number, ...tally(phase.titles, watched) })),
    byType: MEDIA_TYPES.map((type) => ({
      type,
      ...tally(
        titles.filter((title) => title.type === type),
        watched,
      ),
    })).filter((entry) => entry.total > 0),
    byYear: years.map((year) => ({
      year,
      ...tally(
        titles.filter((title) => title.release.startsWith(year)),
        watched,
      ),
    })),
  };
}
