import { ChevronsDownUp, ChevronsUpDown, RotateCcw } from "lucide-react";
import { useI18n } from "../../../i18n/useI18n";
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
  const { t } = useI18n();
  const ToggleIcon = areAllCollapsed ? ChevronsUpDown : ChevronsDownUp;

  return (
    <section aria-label={t("planner.toolbar.label")}>
      <FilterControls filters={filters} onChange={onFiltersChange} />

      <div role="group" aria-label={t("planner.toolbar.actions")}>
        <button type="button" onClick={onToggleAll}>
          <ToggleIcon aria-hidden />
          {areAllCollapsed ? t("planner.toolbar.expandAll") : t("planner.toolbar.collapseAll")}
        </button>
        <button type="button" onClick={onReset}>
          <RotateCcw aria-hidden />
          {t("planner.toolbar.reset")}
        </button>
      </div>
    </section>
  );
}
