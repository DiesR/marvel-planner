import type { Language } from "../../../../shared/languages";
import type { TitleDetails } from "../../../../shared/titleDetails";
import { apiRequest } from "../../../lib/apiClient";

const cache = new Map<string, Promise<TitleDetails>>();

export function getTitleDetails(titleId: string, language: Language): Promise<TitleDetails> {
  const cacheKey = `${language}:${titleId}`;
  const cached = cache.get(cacheKey);
  if (cached) return cached;

  const request = apiRequest<TitleDetails>(
    `/titles/${encodeURIComponent(titleId)}?lang=${language}`,
  );
  cache.set(cacheKey, request);
  request.catch(() => cache.delete(cacheKey));
  return request;
}
