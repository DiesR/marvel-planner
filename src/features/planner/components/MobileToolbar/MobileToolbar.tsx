import { ListFilter, Share2 } from "lucide-react";
import { Button } from "../../../../components/ui/Button";
import { useI18n } from "../../../../i18n/useI18n";
import { CollapseToggle } from "../CollapseToggle";

interface MobileToolbarProps {
  activeFilters: number;
  shown: number;
  total: number;
  canCollapse: boolean;
  areAllCollapsed: boolean;
  onOpenFilters: () => void;
  onShare: () => void;
  onToggleAll: () => void;
}

export function MobileToolbar({
  activeFilters,
  shown,
  total,
  canCollapse,
  areAllCollapsed,
  onOpenFilters,
  onShare,
  onToggleAll,
}: MobileToolbarProps) {
  const { t } = useI18n();

  return (
    <div className="mobile-toolbar">
      <div className="mobile-toolbar__buttons">
        <Button
          variant="soft"
          size="lg"
          className="mobile-toolbar__filters"
          icon={<ListFilter aria-hidden />}
          aria-haspopup="dialog"
          onClick={onOpenFilters}
        >
          <span>{t("planner.filters.heading")}</span>
          {activeFilters > 0 && (
            <span className="badge">
              {activeFilters}
              <span className="visually-hidden">
                {" "}
                {t("planner.filters.activeCount", { count: activeFilters })}
              </span>
            </span>
          )}
        </Button>
        <Button variant="accent" size="lg" icon={<Share2 aria-hidden />} onClick={onShare}>
          {t("share.open")}
        </Button>
      </div>
      <div className="mobile-toolbar__status">
        <p className="muted" role="status">
          {t("planner.filters.results", { shown, total })}
        </p>
        {canCollapse && (
          <CollapseToggle
            areAllCollapsed={areAllCollapsed}
            onToggleAll={onToggleAll}
            variant="text"
          />
        )}
      </div>
    </div>
  );
}
