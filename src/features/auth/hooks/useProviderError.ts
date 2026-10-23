import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

const PROVIDER_ERRORS: Record<string, string> = {
  "account not linked":
    "Esiste già un account con questa email. Accedi con email e password per continuare.",
  access_denied: "Accesso annullato.",
};
const GENERIC_PROVIDER_ERROR = "Accesso non riuscito. Riprova.";
const ERROR_PARAMS = ["error", "error_description"];

export function useProviderError(): string | null {
  const [searchParams, setSearchParams] = useSearchParams();
  const [code] = useState(() => searchParams.get("error"));

  useEffect(() => {
    if (!code) return;
    setSearchParams(
      (current) => {
        ERROR_PARAMS.forEach((param) => current.delete(param));
        return current;
      },
      { replace: true },
    );
  }, [code, setSearchParams]);

  return code ? (PROVIDER_ERRORS[code] ?? GENERIC_PROVIDER_ERROR) : null;
}
