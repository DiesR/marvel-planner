import { useI18n } from "../i18n/useI18n";
import { usePageTitle } from "../i18n/usePageTitle";

export function MaintenancePage() {
  usePageTitle("maintenance.title");
  const { t } = useI18n();

  return (
    <section aria-labelledby="maintenance-title">
      <h1 id="maintenance-title">{t("maintenance.title")}</h1>
      <p>{t("maintenance.body")}</p>
    </section>
  );
}
