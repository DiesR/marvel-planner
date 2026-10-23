import { useEffect, useState } from "react";
import type { SocialProvider } from "../types";
import { useAuth } from "./useAuth";

export function useSocialProviders(): SocialProvider[] {
  const { getSocialProviders } = useAuth();
  const [providers, setProviders] = useState<SocialProvider[]>([]);

  useEffect(() => {
    let isActive = true;
    getSocialProviders()
      .catch(() => [])
      .then((available) => isActive && setProviders(available));
    return () => {
      isActive = false;
    };
  }, [getSocialProviders]);

  return providers;
}
