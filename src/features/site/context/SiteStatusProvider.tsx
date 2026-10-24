import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import type { SiteStatus } from "../../../../shared/admin";
import { apiRequest } from "../../../lib/apiClient";
import { useAuth } from "../../auth/hooks/useAuth";
import { SiteStatusContext, type SiteStatusContextValue } from "./SiteStatusContext";

const ONLINE: SiteStatus = { maintenance: false, isAdmin: false };

export function SiteStatusProvider({ children }: { children: ReactNode }) {
  const { user, status: authStatus } = useAuth();
  const userId = user?.id ?? null;
  const [attempt, setAttempt] = useState(0);
  const requestKey = `${authStatus}:${userId}:${attempt}`;
  const [result, setResult] = useState<{ requestKey: string; status: SiteStatus } | null>(null);

  useEffect(() => {
    if (authStatus === "loading") return;
    let isActive = true;
    apiRequest<SiteStatus>("/status")
      .catch(() => ONLINE)
      .then((status) => isActive && setResult({ requestKey, status }));
    return () => {
      isActive = false;
    };
  }, [authStatus, requestKey]);

  const refresh = useCallback(() => setAttempt((current) => current + 1), []);

  const value = useMemo<SiteStatusContextValue>(() => {
    const isCurrent = result?.requestKey === requestKey;
    return { ...(isCurrent ? result.status : ONLINE), isLoading: !isCurrent, refresh };
  }, [result, requestKey, refresh]);

  return <SiteStatusContext value={value}>{children}</SiteStatusContext>;
}
