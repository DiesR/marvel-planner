import { useEffect, useState } from "react";
import { useAuth } from "../../auth/hooks/useAuth";

export function useHasPassword(): boolean | null {
  const { hasPassword } = useAuth();
  const [result, setResult] = useState<boolean | null>(null);

  useEffect(() => {
    let isActive = true;
    hasPassword()
      .catch(() => true)
      .then((value) => isActive && setResult(value));
    return () => {
      isActive = false;
    };
  }, [hasPassword]);

  return result;
}
