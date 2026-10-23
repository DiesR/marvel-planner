import { useCallback, useEffect, useState } from "react";
import type { TitleDetails } from "../../../../shared/titleDetails";
import { useI18n } from "../../../i18n/useI18n";
import { getTitleDetails } from "../services/titleDetailsService";

type Outcome = { status: "error" } | { status: "ready"; details: TitleDetails };
type State = { status: "loading" } | Outcome;

export function useTitleDetails(titleId: string): State & { retry: () => void } {
  const { language } = useI18n();
  const [attempt, setAttempt] = useState(0);
  const requestKey = `${language}:${titleId}:${attempt}`;
  const [result, setResult] = useState<{ requestKey: string; outcome: Outcome } | null>(null);

  useEffect(() => {
    let isActive = true;
    const finish = (outcome: Outcome) => isActive && setResult({ requestKey, outcome });
    getTitleDetails(titleId, language)
      .then((details) => finish({ status: "ready", details }))
      .catch(() => finish({ status: "error" }));
    return () => {
      isActive = false;
    };
  }, [titleId, language, requestKey]);

  const retry = useCallback(() => setAttempt((current) => current + 1), []);
  const state: State = result?.requestKey === requestKey ? result.outcome : { status: "loading" };
  return { ...state, retry };
}
