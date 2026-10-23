import { useEffect, useState } from "react";
import type { TitleDetails } from "../../../../shared/titleDetails";
import { useI18n } from "../../../i18n/useI18n";
import { getTitleDetails } from "../services/titleDetailsService";

type Outcome = { status: "error" } | { status: "ready"; details: TitleDetails };
type State = { status: "loading" } | Outcome;

export function useTitleDetails(titleId: string): State {
  const { language } = useI18n();
  const requestKey = `${language}:${titleId}`;
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

  return result?.requestKey === requestKey ? result.outcome : { status: "loading" };
}
