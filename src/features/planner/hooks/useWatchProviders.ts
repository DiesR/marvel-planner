import { useCallback, useEffect, useState } from "react";
import type { WatchProviders } from "../../../../shared/watchProviders";
import { getWatchProviders } from "../services/watchProvidersService";

type Outcome = { status: "error" } | { status: "ready"; providers: WatchProviders };
type State = { status: "loading" } | Outcome;

export function useWatchProviders(titleId: string): State & { retry: () => void } {
  const [attempt, setAttempt] = useState(0);
  const requestKey = `${titleId}:${attempt}`;
  const [result, setResult] = useState<{ requestKey: string; outcome: Outcome } | null>(null);

  useEffect(() => {
    let isActive = true;
    const finish = (outcome: Outcome) => isActive && setResult({ requestKey, outcome });
    getWatchProviders(titleId)
      .then((providers) => finish({ status: "ready", providers }))
      .catch(() => finish({ status: "error" }));
    return () => {
      isActive = false;
    };
  }, [titleId, requestKey]);

  const retry = useCallback(() => setAttempt((current) => current + 1), []);
  const state: State = result?.requestKey === requestKey ? result.outcome : { status: "loading" };
  return { ...state, retry };
}
