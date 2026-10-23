import { useEffect, useState } from "react";

const PROVIDER_ERRORS: Record<string, string> = {
  "account not linked":
    "Esiste già un account con questa email. Accedi con email e password per continuare.",
  access_denied: "Accesso annullato.",
};
const GENERIC_PROVIDER_ERROR = "Accesso non riuscito. Riprova.";
const ERROR_PARAMS = ["error", "error_description"];

export function useProviderError(): string | null {
  const [code] = useState(() => new URLSearchParams(window.location.search).get("error"));

  useEffect(() => {
    if (!code) return;
    const url = new URL(window.location.href);
    ERROR_PARAMS.forEach((param) => url.searchParams.delete(param));
    window.history.replaceState(window.history.state, "", url);
  }, [code]);

  return code ? (PROVIDER_ERRORS[code] ?? GENERIC_PROVIDER_ERROR) : null;
}
