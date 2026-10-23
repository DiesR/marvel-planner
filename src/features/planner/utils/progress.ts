import type { Progress, Title } from "../types";

export function computeProgress(titles: Title[], watched: ReadonlySet<string>): Progress {
  return {
    done: titles.filter((title) => watched.has(title.id)).length,
    total: titles.length,
  };
}
