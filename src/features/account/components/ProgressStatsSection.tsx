import { useEffect, useId, useMemo, useState } from "react";
import { useI18n } from "../../../i18n/useI18n";
import { MEDIA_TYPE_KEYS } from "../../planner/data/labels";
import { useResolvedCatalog } from "../../planner/hooks/useResolvedCatalog";
import { apiProgressRepository } from "../../planner/services/apiProgressRepository";
import { computeStats } from "../utils/stats";

type State =
  { status: "loading" } | { status: "error" } | { status: "ready"; watched: Set<string> };

function useAccountProgress(): State {
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => {
    let isActive = true;
    apiProgressRepository
      .load()
      .then((ids) => isActive && setState({ status: "ready", watched: new Set(ids) }))
      .catch(() => isActive && setState({ status: "error" }));
    return () => {
      isActive = false;
    };
  }, []);

  return state;
}

export function ProgressStatsSection() {
  const { t } = useI18n();
  const headingId = useId();
  const catalog = useResolvedCatalog();
  const state = useAccountProgress();
  const stats = useMemo(
    () => (state.status === "ready" ? computeStats(catalog, state.watched) : null),
    [catalog, state],
  );

  return (
    <section aria-labelledby={headingId}>
      <h3 id={headingId}>{t("account.stats.heading")}</h3>
      {state.status === "loading" && <p role="status">{t("common.loading")}</p>}
      {state.status === "error" && <p role="alert">{t("account.stats.error")}</p>}

      {stats && (
        <>
          <p>
            {t("account.stats.overall", { done: stats.overall.done, total: stats.overall.total })}
          </p>

          <h4>{t("account.stats.byPhase")}</h4>
          <ul>
            {stats.byPhase.map((entry) => (
              <li key={entry.number}>
                {entry.number} · {t(`catalog.phases.${entry.number}`)}: {entry.done} / {entry.total}
              </li>
            ))}
          </ul>

          <h4>{t("account.stats.byType")}</h4>
          <ul>
            {stats.byType.map((entry) => (
              <li key={entry.type}>
                {t(MEDIA_TYPE_KEYS[entry.type])}: {entry.done} / {entry.total}
              </li>
            ))}
          </ul>

          <h4>{t("account.stats.byYear")}</h4>
          <ul>
            {stats.byYear.map((entry) => (
              <li key={entry.year}>
                {entry.year}: {entry.done} / {entry.total}
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
