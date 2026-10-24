import { useId } from "react";
import type { AdminOverview } from "../../../../shared/admin";
import { useI18n } from "../../../i18n/useI18n";

interface AutomationSectionProps {
  lastRuns: AdminOverview["lastRuns"];
  tmdbConfigured: boolean;
}

export function AutomationSection({ lastRuns, tmdbConfigured }: AutomationSectionProps) {
  const { t, language } = useI18n();
  const headingId = useId();
  const formatter = new Intl.DateTimeFormat(language, { dateStyle: "medium", timeStyle: "short" });

  const describe = (iso: string | null) =>
    iso
      ? t("admin.automation.lastRun", { date: formatter.format(new Date(iso)) })
      : t("admin.automation.never");

  return (
    <section aria-labelledby={headingId}>
      <h2 id={headingId}>{t("admin.automation.heading")}</h2>
      <dl>
        <dt>{t("admin.automation.daily")}</dt>
        <dd>{describe(lastRuns.daily)}</dd>
        <dt>{t("admin.automation.weekly")}</dt>
        <dd>{describe(lastRuns.weekly)}</dd>
        <dt>{t("admin.automation.tmdb")}</dt>
        <dd>{tmdbConfigured ? t("admin.automation.configured") : t("admin.automation.missing")}</dd>
      </dl>
    </section>
  );
}
