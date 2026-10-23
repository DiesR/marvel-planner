import { useEffect, useState } from "react";
import { getReleaseDates } from "../services/releasesService";
import type { ReleaseDates } from "../utils/releases";

export function useReleaseDates(): ReleaseDates | null {
  const [releases, setReleases] = useState<ReleaseDates | null>(null);

  useEffect(() => {
    let isActive = true;
    getReleaseDates()
      .then((dates) => isActive && setReleases(dates))
      .catch(() => undefined);
    return () => {
      isActive = false;
    };
  }, []);

  return releases;
}
