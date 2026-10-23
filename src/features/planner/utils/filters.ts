import type { Filters, Title, TypeFilter } from "../types";

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

const TYPE_FILTERS: TypeFilter[] = ["all", "film", "serie", "special"];

export function isFilters(value: unknown): value is Filters {
  if (typeof value !== "object" || value === null) return false;
  const candidate = value as Record<string, unknown>;
  return (
    TYPE_FILTERS.includes(candidate.type as TypeFilter) &&
    typeof candidate.hideAlternate === "boolean" &&
    typeof candidate.hideUpcoming === "boolean"
  );
}
