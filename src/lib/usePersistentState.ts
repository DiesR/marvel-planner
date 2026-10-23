import { useCallback, useState } from "react";
import { readJson, writeJson } from "./storage";

export function usePersistentState<T>(
  key: string,
  initialValue: T,
  isValid: (value: unknown) => value is T,
) {
  const [value, setValue] = useState<T>(() => {
    const stored = readJson<unknown>(key, null);
    return isValid(stored) ? stored : initialValue;
  });

  const update = useCallback(
    (next: T) => {
      setValue(next);
      writeJson(key, next);
    },
    [key],
  );

  return [value, update] as const;
}
