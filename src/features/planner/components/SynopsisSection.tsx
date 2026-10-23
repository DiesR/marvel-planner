import { useId } from "react";
import { useI18n } from "../../../i18n/useI18n";

interface SynopsisSectionProps {
  synopsis: string;
}

export function SynopsisSection({ synopsis }: SynopsisSectionProps) {
  const { t } = useI18n();
  const headingId = useId();

  return (
    <section aria-labelledby={headingId}>
      <h4 id={headingId}>{t("details.synopsis")}</h4>
      <p>{synopsis || t("details.noSynopsis")}</p>
    </section>
  );
}
