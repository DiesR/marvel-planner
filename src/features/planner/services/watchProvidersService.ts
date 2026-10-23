import type { WatchProviders } from "../../../../shared/watchProviders";
import { apiRequest } from "../../../lib/apiClient";

const cache = new Map<string, Promise<WatchProviders>>();

export function getWatchProviders(titleId: string): Promise<WatchProviders> {
  const cached = cache.get(titleId);
  if (cached) return cached;

  const request = apiRequest<WatchProviders>(`/titles/${encodeURIComponent(titleId)}/watch`);
  cache.set(titleId, request);
  request.catch(() => cache.delete(titleId));
  return request;
}
