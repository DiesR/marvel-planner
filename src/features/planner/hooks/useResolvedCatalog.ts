import { useMemo } from "react";
import { CATALOG } from "../data/catalog";
import type { Saga } from "../types";
import { applyReleaseDates, todayIso } from "../utils/releases";
import { useReleaseDates } from "./useReleaseDates";

export function useResolvedCatalog(): Saga[] {
  const releases = useReleaseDates();

  return useMemo(
    () => (releases ? applyReleaseDates(CATALOG, releases, todayIso()) : CATALOG),
    [releases],
  );
}
