import { ChevronsDownUp, ChevronsUpDown, RotateCcw } from "lucide-react";
import { useId } from "react";
import { useI18n } from "../../../i18n/useI18n";

interface PlannerActionsProps {
  areAllCollapsed: boolean;
  onToggleAll: () => void;
  onReset: () => void;
}

export function PlannerActions({ areAllCollapsed, onToggleAll, onReset }: PlannerActionsProps) {
  const { t } = useI18n();
  const headingId = useId();
  const ToggleIcon = areAllCollapsed ? ChevronsUpDown : ChevronsDownUp;

  return (
    <section aria-labelledby={headingId}>
      <h2 id={headingId}>{t("planner.toolbar.actions")}</h2>

      <div>
        <button type="button" onClick={onToggleAll}>
          <ToggleIcon aria-hidden />
          {areAllCollapsed ? t("planner.toolbar.expandAll") : t("planner.toolbar.collapseAll")}
        </button>
      </div>

      <div>
        <button type="button" onClick={onReset}>
          <RotateCcw aria-hidden />
          {t("planner.toolbar.reset")}
        </button>
      </div>
    </section>
  );
}
