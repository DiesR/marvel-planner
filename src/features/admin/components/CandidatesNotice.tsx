import { TriangleAlert } from "lucide-react";
import { useId } from "react";
import { useI18n } from "../../../i18n/useI18n";
import { tmdbUrl } from "../services/candidatesService";
import { useCandidates } from "../hooks/useCandidates";

export function CandidatesNotice() {
  const { t, formatDate } = useI18n();
  const { candidates, dismiss } = useCandidates();
  const headingId = useId();

  if (candidates.length === 0) return null;

  return (
    <section aria-labelledby={headingId} role="status">
      <h2 id={headingId}>
        <TriangleAlert aria-hidden />
        {t("admin.heading")}
      </h2>
      <p>{t("admin.intro")}</p>
      <ul>
        {candidates.map((candidate) => (
          <li key={candidate.key}>
            <strong>{candidate.title}</strong> ·{" "}
            {t(candidate.kind === "season" ? "admin.newSeason" : "admin.newTitle")}
            {candidate.releaseDate && ` · ${formatDate(candidate.releaseDate)}`}{" "}
            <a href={tmdbUrl(candidate)} rel="noreferrer">
              {t("admin.openOnTmdb")}
            </a>{" "}
            <button type="button" onClick={() => void dismiss(candidate.key)}>
              {t("admin.dismiss")}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
