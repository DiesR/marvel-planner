import { useCallback, useState } from "react";
import { ALL_PHASE_NUMBERS } from "../data/catalog";

export function useCollapsedPhases() {
  const [collapsed, setCollapsed] = useState<ReadonlySet<number>>(new Set());

  const setPhaseCollapsed = useCallback((phase: number, isCollapsed: boolean) => {
    setCollapsed((previous) => {
      const next = new Set(previous);
      if (isCollapsed) next.add(phase);
      else next.delete(phase);
      return next;
    });
  }, []);

  const areAllCollapsed = collapsed.size === ALL_PHASE_NUMBERS.length;

  const toggleAll = useCallback(() => {
    setCollapsed(areAllCollapsed ? new Set() : new Set(ALL_PHASE_NUMBERS));
  }, [areAllCollapsed]);

  return { collapsed, areAllCollapsed, setPhaseCollapsed, toggleAll };
}
