import { useI18n } from "../../../i18n/useI18n";

export function PlannerGuide() {
  const { t } = useI18n();

  return (
    <aside aria-labelledby="guide-title">
      <h2 id="guide-title">{t("planner.guide.title")}</h2>
      <dl>
        <dt>{t("planner.guide.orderTerm")}</dt>
        <dd>{t("planner.guide.orderText")}</dd>
        <dt>{t("planner.guide.alternateTerm")}</dt>
        <dd>{t("planner.guide.alternateText")}</dd>
      </dl>
    </aside>
  );
}
