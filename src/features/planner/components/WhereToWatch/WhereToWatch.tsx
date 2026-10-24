import { ExternalLink } from "lucide-react";
import { useId, useState } from "react";
import type { WatchOptions } from "../../../../../shared/watchProviders";
import type { TranslationKey } from "../../../../i18n/types";
import { useI18n } from "../../../../i18n/useI18n";
import { DEFAULT_REGIONS } from "../../data/regions";
import { useWatchProviders } from "../../hooks/useWatchProviders";

const JUSTWATCH_URL = "https://www.justwatch.com";

const CATEGORIES: { key: Exclude<keyof WatchOptions, "link">; labelKey: TranslationKey }[] = [
  { key: "stream", labelKey: "details.watch.stream" },
  { key: "free", labelKey: "details.watch.free" },
  { key: "rent", labelKey: "details.watch.rent" },
  { key: "buy", labelKey: "details.watch.buy" },
];

interface WhereToWatchProps {
  titleId: string;
}

export function WhereToWatch({ titleId }: WhereToWatchProps) {
  const { t, language } = useI18n();
  const state = useWatchProviders(titleId);
  const [chosenRegion, setChosenRegion] = useState<string | null>(null);
  const headingId = useId();
  const selectId = useId();

  const regionNames = new Intl.DisplayNames([language], { type: "region" });
  const regionName = (code: string) => regionNames.of(code) ?? code;

  const renderBody = () => {
    if (state.status === "loading") return <p role="status">{t("details.watch.loading")}</p>;

    if (state.status === "error") {
      return (
        <div role="alert">
          <p>{t("details.watch.error")}</p>
          <button type="button" className="btn btn--soft" onClick={state.retry}>
            {t("common.retry")}
          </button>
        </div>
      );
    }

    const region = chosenRegion ?? DEFAULT_REGIONS[language];
    const options = Object.hasOwn(state.providers, region) ? state.providers[region] : undefined;
    const regions = [...new Set([...Object.keys(state.providers), region])].sort((a, b) =>
      regionName(a).localeCompare(regionName(b), language),
    );

    return (
      <>
        <label htmlFor={selectId}>{t("details.watch.region")}</label>
        <select id={selectId} value={region} onChange={(e) => setChosenRegion(e.target.value)}>
          {regions.map((code) => (
            <option key={code} value={code}>
              {regionName(code)}
            </option>
          ))}
        </select>

        {options ? (
          <>
            {CATEGORIES.filter(({ key }) => options[key].length > 0).map(({ key, labelKey }) => (
              <section key={key} className="where-to-watch__group" aria-label={t(labelKey)}>
                <h5>{t(labelKey)}</h5>
                <ul className="where-to-watch__list">
                  {options[key].map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              </section>
            ))}
            <a
              className="btn btn--soft"
              href={options.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink aria-hidden />
              {t("details.watch.all")}
            </a>
          </>
        ) : (
          <p>{t("details.watch.none", { country: regionName(region) })}</p>
        )}

        <p>
          {t("details.watch.attribution")}{" "}
          <a href={JUSTWATCH_URL} target="_blank" rel="noopener noreferrer">
            JustWatch
          </a>
          . {t("details.watch.disclaimer")}
        </p>
      </>
    );
  };

  return (
    <section className="where-to-watch" aria-labelledby={headingId}>
      <h4 id={headingId}>{t("details.watch.heading")}</h4>
      {renderBody()}
    </section>
  );
}
