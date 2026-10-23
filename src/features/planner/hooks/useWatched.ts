import { useCallback, useEffect, useState } from "react";
import type { TranslationKey } from "../../../i18n/types";
import { isStorageAvailable } from "../../../lib/storage";
import { useAuth } from "../../auth/hooks/useAuth";
import type { AuthStatus } from "../../auth/types";
import type { ProgressStorage } from "../types";
import { apiProgressRepository } from "../services/apiProgressRepository";
import { localProgressRepository } from "../services/localProgressRepository";
import { mergeDeviceProgressIntoAccount } from "../services/progressSync";

const LOAD_ERROR: TranslationKey = "planner.loadError";
const SAVE_ERROR: TranslationKey = "planner.saveError";

function withTitle(set: ReadonlySet<string>, id: string, isWatched: boolean): ReadonlySet<string> {
  const next = new Set(set);
  if (isWatched) next.add(id);
  else next.delete(id);
  return next;
}

export function useWatched() {
  const { status } = useAuth();
  const isAccount = status === "authenticated";
  const repository = isAccount ? apiProgressRepository : localProgressRepository;

  const [watched, setWatched] = useState<ReadonlySet<string>>(new Set());
  const [loadedFor, setLoadedFor] = useState<AuthStatus | null>(null);
  const [error, setError] = useState<TranslationKey | null>(null);

  useEffect(() => {
    if (status === "loading") return;
    let isActive = true;
    const load = isAccount ? mergeDeviceProgressIntoAccount() : localProgressRepository.load();
    load
      .then((ids) => {
        if (!isActive) return;
        setWatched(new Set(ids));
        setError(null);
      })
      .catch(() => isActive && setError(LOAD_ERROR))
      .finally(() => isActive && setLoadedFor(status));
    return () => {
      isActive = false;
    };
  }, [status, isAccount]);

  const toggle = useCallback(
    async (id: string) => {
      const wasWatched = watched.has(id);
      setWatched((current) => withTitle(current, id, !wasWatched));
      try {
        if (wasWatched) await repository.remove(id);
        else await repository.add([id]);
        setError(null);
      } catch {
        setWatched((current) => withTitle(current, id, wasWatched));
        setError(SAVE_ERROR);
      }
    },
    [watched, repository],
  );

  const reset = useCallback(async () => {
    const previous = watched;
    setWatched(new Set());
    try {
      await repository.clear();
      setError(null);
    } catch {
      setWatched(previous);
      setError(SAVE_ERROR);
    }
  }, [watched, repository]);

  const storage: ProgressStorage = isAccount ? "account" : isStorageAvailable ? "device" : "none";

  return { watched, isLoading: loadedFor !== status, error, storage, toggle, reset };
}
