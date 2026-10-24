import { ChevronsDownUp, ChevronsUpDown } from "lucide-react";
import { Button } from "../../../../components/ui/Button";
import { useI18n } from "../../../../i18n/useI18n";

interface CollapseToggleProps {
  areAllCollapsed: boolean;
  onToggleAll: () => void;
  size: "sm" | "lg";
}

export function CollapseToggle({ areAllCollapsed, onToggleAll, size }: CollapseToggleProps) {
  const { t } = useI18n();
  const Icon = areAllCollapsed ? ChevronsUpDown : ChevronsDownUp;

  return (
    <Button variant="surface" size={size} icon={<Icon aria-hidden />} onClick={onToggleAll}>
      {areAllCollapsed ? t("planner.toolbar.expandAll") : t("planner.toolbar.collapseAll")}
    </Button>
  );
}
