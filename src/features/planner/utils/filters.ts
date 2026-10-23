import type { Filters, Title } from "../types";

export const DEFAULT_FILTERS: Filters = {
  type: "all",
  hideAlternate: false,
  hideUpcoming: false,
};

export function matchesFilters(title: Title, filters: Filters): boolean {
  if (filters.type !== "all" && title.type !== filters.type) return false;
  if (filters.hideAlternate && title.continuity === "alternate") return false;
  if (filters.hideUpcoming && title.status === "upcoming") return false;
  return true;
}
