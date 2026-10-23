import { LANGUAGE_NAMES } from "../../../../shared/languages";
import type { TitleDetails } from "../../../../shared/titleDetails";
import { useI18n } from "../../../i18n/useI18n";
import { useTitleDetails } from "../hooks/useTitleDetails";
import { backdropUrl, posterUrl } from "../utils/format";
import { SpoilerPlot } from "./SpoilerPlot";

const LICENSE_URL = "https://creativecommons.org/licenses/by-sa/4.0/";

interface TitleDetailsPanelProps {
  titleId: string;
}

function PlotText({ plot }: { plot: NonNullable<TitleDetails["plot"]> }) {
  const { t, language } = useI18n();

  return (
    <>
      {plot.language !== language && (
        <p>{t("details.plot.fallbackLanguage", { language: LANGUAGE_NAMES[plot.language] })}</p>
      )}
      {plot.text.split("\n\n").map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <p>
        {t("details.plot.sourceBefore")}{" "}
        <a href={plot.sourceUrl} rel="noreferrer">
          {t("details.plot.sourceLink")}
        </a>
        , <a href={LICENSE_URL}>{t("details.plot.license")}</a>
      </p>
    </>
  );
}

function Episodes({ episodes }: { episodes: TitleDetails["episodes"] }) {
  const { t } = useI18n();

  return (
    <section aria-label={t("details.plot.episodes")}>
      <h5>{t("details.plot.episodes")}</h5>
      <ol>
        {episodes.map((episode) => (
          <li key={episode.number}>
            <strong>{episode.name}</strong>
            <p>{episode.overview}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function TitleDetailsPanel({ titleId }: TitleDetailsPanelProps) {
  const { t, formatDate } = useI18n();
  const state = useTitleDetails(titleId);

  if (state.status === "loading") return <p role="status">{t("details.loading")}</p>;
  if (state.status === "error") return <p role="alert">{t("details.error")}</p>;

  const { details } = state;
  const credit = details.directors.length
    ? { label: t("details.director"), names: details.directors }
    : { label: t("details.creator"), names: details.creators };
  const hasPlot = Boolean(details.plot) || details.episodes.length > 0;

  return (
    <div>
      {details.backdropPath && (
        <img src={backdropUrl(details.backdropPath)} alt="" loading="lazy" />
      )}
      {details.posterPath && (
        <img
          src={posterUrl(details.posterPath)}
          alt={t("details.posterAlt", { name: details.name })}
          width={342}
          loading="lazy"
        />
      )}

      <h4>{details.name}</h4>
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
        {credit.names.length > 0 && (
          <>
            <dt>{credit.label}</dt>
            <dd>{credit.names.join(", ")}</dd>
          </>
        )}
      </dl>

      <section aria-label={t("details.synopsis")}>
        <h5>{t("details.synopsis")}</h5>
        <p>{details.synopsis || t("details.noSynopsis")}</p>
      </section>

      {details.cast.length > 0 && (
        <section aria-label={t("details.cast")}>
          <h5>{t("details.cast")}</h5>
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

      {hasPlot && (
        <SpoilerPlot>
          {details.plot && <PlotText plot={details.plot} />}
          {details.episodes.length > 0 && <Episodes episodes={details.episodes} />}
        </SpoilerPlot>
      )}
    </div>
  );
}
