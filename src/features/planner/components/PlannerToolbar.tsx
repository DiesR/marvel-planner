import { ChevronsDownUp, ChevronsUpDown, RotateCcw } from "lucide-react";
import type { Filters } from "../types";
import { FilterControls } from "./FilterControls";

interface PlannerToolbarProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
  areAllCollapsed: boolean;
  onToggleAll: () => void;
  onReset: () => void;
}

export function PlannerToolbar({
  filters,
  onFiltersChange,
  areAllCollapsed,
  onToggleAll,
  onReset,
}: PlannerToolbarProps) {
  const ToggleIcon = areAllCollapsed ? ChevronsUpDown : ChevronsDownUp;

  return (
    <section aria-label="Filtri e azioni">
      <FilterControls filters={filters} onChange={onFiltersChange} />

      <div role="group" aria-label="Azioni">
        <button type="button" onClick={onToggleAll}>
          <ToggleIcon aria-hidden />
          {areAllCollapsed ? "Espandi tutto" : "Comprimi tutto"}
        </button>
        <button type="button" onClick={onReset}>
          <RotateCcw aria-hidden />
          Azzera
        </button>
      </div>
    </section>
  );
}
