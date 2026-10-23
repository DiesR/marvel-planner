import type { Saga, Title } from "../types";

export type ReleaseDates = Record<string, string | null>;

export function todayIso(now = new Date()): string {
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}

function resolveTitle(title: Title, releaseDate: string | null | undefined, today: string): Title {
  if (!releaseDate) return title;
  const isUpcoming = releaseDate > today;
  return {
    ...title,
    release: isUpcoming ? releaseDate : releaseDate.slice(0, 4),
    status: isUpcoming ? "upcoming" : "released",
  };
}

export function applyReleaseDates(catalog: Saga[], releases: ReleaseDates, today: string): Saga[] {
  return catalog.map((saga) => ({
    ...saga,
    phases: saga.phases.map((phase) => ({
      ...phase,
      titles: phase.titles.map((title) => resolveTitle(title, releases[title.id], today)),
    })),
  }));
}
