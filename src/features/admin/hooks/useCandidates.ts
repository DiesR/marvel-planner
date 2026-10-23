import { useCallback, useEffect, useState } from "react";
import { useAuth } from "../../auth/hooks/useAuth";
import {
  dismissCandidate,
  fetchCandidates,
  type CatalogCandidate,
} from "../services/candidatesService";

export function useCandidates() {
  const { user } = useAuth();
  const userId = user?.id ?? null;
  const [loaded, setLoaded] = useState<{ userId: string; items: CatalogCandidate[] } | null>(null);

  useEffect(() => {
    if (!userId) return;
    let isActive = true;
    fetchCandidates()
      .then((items) => isActive && setLoaded({ userId, items }))
      .catch(() => undefined);
    return () => {
      isActive = false;
    };
  }, [userId]);

  const dismiss = useCallback(async (key: string) => {
    await dismissCandidate(key);
    setLoaded((current) =>
      current ? { ...current, items: current.items.filter((item) => item.key !== key) } : current,
    );
  }, []);

  const candidates = loaded && loaded.userId === userId ? loaded.items : [];
  return { candidates, dismiss };
}
