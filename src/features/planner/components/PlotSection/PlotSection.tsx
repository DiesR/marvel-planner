import { LANGUAGE_NAMES } from "../../../../../shared/languages";
import type { TitleDetails } from "../../../../../shared/titleDetails";
import { useI18n } from "../../../../i18n/useI18n";
import { SpoilerPlot } from "../SpoilerPlot";

const LICENSE_URL = "https://creativecommons.org/licenses/by-sa/4.0/";

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
    <section className="episodes" aria-label={t("details.plot.episodes")}>
      <h4>{t("details.plot.episodes")}</h4>
      <ol className="episodes__list">
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

interface PlotSectionProps {
  details: TitleDetails;
}

export function PlotSection({ details }: PlotSectionProps) {
  if (!details.plot && details.episodes.length === 0) return null;

  return (
    <SpoilerPlot>
      {details.plot && <PlotText plot={details.plot} />}
      {details.episodes.length > 0 && <Episodes episodes={details.episodes} />}
    </SpoilerPlot>
  );
}
