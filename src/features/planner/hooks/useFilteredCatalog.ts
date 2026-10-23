import { useMemo } from "react";
import { CATALOG } from "../data/catalog";
import type { Filters, Saga } from "../types";
import { matchesFilters } from "../utils/filters";

export function useFilteredCatalog(filters: Filters): Saga[] {
  return useMemo(
    () =>
      CATALOG.map((saga) => ({
        ...saga,
        phases: saga.phases.map((phase) => ({
          ...phase,
          titles: phase.titles.filter((title) => matchesFilters(title, filters)),
        })),
      })),
    [filters],
  );
}
