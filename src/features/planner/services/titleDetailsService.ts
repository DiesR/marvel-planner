import type { Language } from "../../../../shared/languages";
import type { TitleDetails } from "../../../../shared/titleDetails";
import { apiRequest } from "../../../lib/apiClient";

const MAX_CONCURRENT_REQUESTS = 6;

const cache = new Map<string, Promise<TitleDetails>>();
const waiting: (() => void)[] = [];
let activeRequests = 0;

function schedule<T>(task: () => Promise<T>): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const run = () => {
      activeRequests += 1;
      task()
        .then(resolve, reject)
        .finally(() => {
          activeRequests -= 1;
          waiting.shift()?.();
        });
    };
    if (activeRequests < MAX_CONCURRENT_REQUESTS) run();
    else waiting.push(run);
  });
}

export function getTitleDetails(titleId: string, language: Language): Promise<TitleDetails> {
  const cacheKey = `${language}:${titleId}`;
  const cached = cache.get(cacheKey);
  if (cached) return cached;

  const request = schedule(() =>
    apiRequest<TitleDetails>(`/titles/${encodeURIComponent(titleId)}?lang=${language}`),
  );
  cache.set(cacheKey, request);
  request.catch(() => cache.delete(cacheKey));
  return request;
}
