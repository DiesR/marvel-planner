import { useMemo } from "react";
import { CATALOG } from "../data/catalog";
import type { Filters, Saga } from "../types";
import { matchesFilters } from "../utils/filters";
import { applyReleaseDates, todayIso } from "../utils/releases";
import { useReleaseDates } from "./useReleaseDates";

export function useFilteredCatalog(filters: Filters): Saga[] {
  const releases = useReleaseDates();

  return useMemo(() => {
    const catalog = releases ? applyReleaseDates(CATALOG, releases, todayIso()) : CATALOG;
    return catalog.map((saga) => ({
      ...saga,
      phases: saga.phases.map((phase) => ({
        ...phase,
        titles: phase.titles.filter((title) => matchesFilters(title, filters)),
      })),
    }));
  }, [filters, releases]);
}
