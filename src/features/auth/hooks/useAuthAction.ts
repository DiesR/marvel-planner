import { useState } from "react";
import { AuthError } from "../services/authService";

const GENERIC_ERROR = "Operazione non riuscita. Riprova più tardi.";

export function useAuthAction<T>(action: (values: T) => Promise<void>, onSuccess?: () => void) {
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const run = async (values: T) => {
    setError(null);
    setIsDone(false);
    setIsPending(true);
    try {
      await action(values);
      setIsDone(true);
      onSuccess?.();
    } catch (caught) {
      setError(caught instanceof AuthError ? caught.message : GENERIC_ERROR);
    } finally {
      setIsPending(false);
    }
  };

  return { run, error, isPending, isDone };
}
