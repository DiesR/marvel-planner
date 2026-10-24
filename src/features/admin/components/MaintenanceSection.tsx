import { useId, useState } from "react";
import { ConfirmDialog } from "../../../components/ui/ConfirmDialog";
import { useI18n } from "../../../i18n/useI18n";
import { useSiteStatus } from "../../site/hooks/useSiteStatus";

interface MaintenanceSectionProps {
  isOn: boolean;
  onChange: (enabled: boolean) => void;
}

export function MaintenanceSection({ isOn, onChange }: MaintenanceSectionProps) {
  const { t } = useI18n();
  const { refresh } = useSiteStatus();
  const [isConfirming, setIsConfirming] = useState(false);
  const headingId = useId();

  const apply = (enabled: boolean) => {
    setIsConfirming(false);
    onChange(enabled);
    refresh();
  };

  return (
    <section aria-labelledby={headingId}>
      <h2 id={headingId}>{t("admin.maintenance.heading")}</h2>
      <p>{t("admin.maintenance.description")}</p>
      <p role="status">{isOn ? t("admin.maintenance.on") : t("admin.maintenance.off")}</p>
      <button type="button" onClick={() => (isOn ? apply(false) : setIsConfirming(true))}>
        {isOn ? t("admin.maintenance.disable") : t("admin.maintenance.enable")}
      </button>

      <ConfirmDialog
        isOpen={isConfirming}
        title={t("admin.maintenance.confirmTitle")}
        message={t("admin.maintenance.confirmMessage")}
        confirmLabel={t("admin.maintenance.enable")}
        cancelLabel={t("common.cancel")}
        onConfirm={() => apply(true)}
        onCancel={() => setIsConfirming(false)}
      />
    </section>
  );
}
