import { apiRequest } from "../../../lib/apiClient";
import type { ReleaseDates } from "../utils/releases";

let cached: Promise<ReleaseDates> | null = null;

export function getReleaseDates(): Promise<ReleaseDates> {
  if (cached) return cached;

  const request = apiRequest<{ releases: ReleaseDates }>("/releases").then(
    (response) => response.releases,
  );
  cached = request;
  request.catch(() => {
    cached = null;
  });
  return request;
}
