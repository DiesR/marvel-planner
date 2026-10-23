import { useState } from "react";
import { useNavigate } from "react-router";
import { PATHS } from "../../../app/paths";
import { AuthError } from "../services/authService";

const GENERIC_ERROR = "Operazione non riuscita. Riprova più tardi.";

export function useAuthSubmit<T>(action: (values: T) => Promise<void>) {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async (values: T) => {
    setError(null);
    setIsSubmitting(true);
    try {
      await action(values);
      navigate(PATHS.home);
    } catch (caught) {
      setError(caught instanceof AuthError ? caught.message : GENERIC_ERROR);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submit, error, isSubmitting };
}
