import { useCallback, useEffect, useState } from "react";
import { localProgressRepository, type ProgressRepository } from "../services/progressRepository";

export function useWatched(repository: ProgressRepository = localProgressRepository) {
  const [watched, setWatched] = useState<ReadonlySet<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isActive = true;
    repository.load().then((ids) => {
      if (!isActive) return;
      setWatched(new Set(ids));
      setIsLoading(false);
    });
    return () => {
      isActive = false;
    };
  }, [repository]);

  const update = useCallback(
    (next: ReadonlySet<string>) => {
      setWatched(next);
      void repository.save([...next]);
    },
    [repository],
  );

  const toggle = useCallback(
    (id: string) => {
      const next = new Set(watched);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      update(next);
    },
    [watched, update],
  );

  const reset = useCallback(() => update(new Set()), [update]);

  return { watched, isLoading, isPersistent: repository.isPersistent, toggle, reset };
}
