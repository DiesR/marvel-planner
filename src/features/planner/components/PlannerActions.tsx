import { ChevronsDownUp, ChevronsUpDown, RotateCcw, Share2 } from "lucide-react";
import { useId } from "react";
import { useI18n } from "../../../i18n/useI18n";

interface PlannerActionsProps {
  areAllCollapsed: boolean;
  canCollapse: boolean;
  onToggleAll: () => void;
  onReset: () => void;
  onShare: () => void;
}

export function PlannerActions({
  areAllCollapsed,
  canCollapse,
  onToggleAll,
  onReset,
  onShare,
}: PlannerActionsProps) {
  const { t } = useI18n();
  const headingId = useId();
  const ToggleIcon = areAllCollapsed ? ChevronsUpDown : ChevronsDownUp;

  return (
    <section aria-labelledby={headingId}>
      <h2 id={headingId}>{t("planner.toolbar.actions")}</h2>

      {canCollapse && (
        <div>
          <button type="button" onClick={onToggleAll}>
            <ToggleIcon aria-hidden />
            {areAllCollapsed ? t("planner.toolbar.expandAll") : t("planner.toolbar.collapseAll")}
          </button>
        </div>
      )}

      <div>
        <button type="button" aria-haspopup="dialog" onClick={onShare}>
          <Share2 aria-hidden />
          {t("share.open")}
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
