import { useI18n } from "../../../i18n/useI18n";
import { backdropUrl } from "../utils/format";
import { EasterEggs } from "./EasterEggs";
import { KeyScenes } from "./KeyScenes";
import { PlotSection } from "./PlotSection";
import { PostCreditsInfo } from "./PostCreditsInfo";
import { SynopsisSection } from "./SynopsisSection";
import { WithTitleDetails } from "./WithTitleDetails";

interface TitleDetailsPanelProps {
  titleId: string;
}

export function TitleDetailsPanel({ titleId }: TitleDetailsPanelProps) {
  const { t, formatDate } = useI18n();

  return (
    <WithTitleDetails titleId={titleId}>
      {(details) => {
        const credit = details.directors.length
          ? { label: t("details.director"), names: details.directors }
          : { label: t("details.creator"), names: details.creators };

        return (
          <div>
            {details.backdropPath && (
              <img src={backdropUrl(details.backdropPath)} alt="" loading="lazy" />
            )}

            <h3>{details.name}</h3>
            {details.originalName !== details.name && (
              <p>{t("details.originalTitle", { name: details.originalName })}</p>
            )}

            <dl>
              {details.releaseDate && (
                <>
                  <dt>{t("details.release")}</dt>
                  <dd>{formatDate(details.releaseDate)}</dd>
                </>
              )}
              {details.runtime && (
                <>
                  <dt>{t("details.runtime")}</dt>
                  <dd>{t("details.minutes", { count: details.runtime })}</dd>
                </>
              )}
              {credit.names.length > 0 && (
                <>
                  <dt>{credit.label}</dt>
                  <dd>{credit.names.join(", ")}</dd>
                </>
              )}
            </dl>

            <SynopsisSection synopsis={details.synopsis} />

            {details.cast.length > 0 && (
              <section aria-label={t("details.cast")}>
                <h4>{t("details.cast")}</h4>
                <ul>
                  {details.cast.map((member) => (
                    <li key={`${member.name}-${member.character}`}>
                      {member.name}
                      {member.character && ` — ${member.character}`}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <PlotSection details={details} />
            <PostCreditsInfo titleId={titleId} />
            <KeyScenes titleId={titleId} />
            <EasterEggs titleId={titleId} />
          </div>
        );
      }}
    </WithTitleDetails>
  );
}
