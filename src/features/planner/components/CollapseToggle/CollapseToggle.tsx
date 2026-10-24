import { ChevronsDownUp, ChevronsUpDown } from "lucide-react";
import { Button } from "../../../../components/ui/Button";
import { useI18n } from "../../../../i18n/useI18n";

interface CollapseToggleProps {
  areAllCollapsed: boolean;
  onToggleAll: () => void;
  variant: "soft" | "text";
}

export function CollapseToggle({ areAllCollapsed, onToggleAll, variant }: CollapseToggleProps) {
  const { t } = useI18n();
  const Icon = areAllCollapsed ? ChevronsUpDown : ChevronsDownUp;

  return (
    <Button
      variant={variant}
      size={variant === "soft" ? "lg" : "md"}
      icon={variant === "soft" ? <Icon aria-hidden /> : undefined}
      onClick={onToggleAll}
    >
      {areAllCollapsed ? t("planner.toolbar.expandAll") : t("planner.toolbar.collapseAll")}
    </Button>
  );
}
