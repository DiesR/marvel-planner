export class ApiError extends Error {
  readonly status: number;

  constructor(status: number) {
    super(`Richiesta API fallita con stato ${status}`);
    this.name = "ApiError";
    this.status = status;
  }
}

export async function apiRequest<T = void>(path: string, init: RequestInit = {}): Promise<T> {
  const response = await fetch(`/api${path}`, {
    ...init,
    credentials: "same-origin",
    headers: init.body ? { "Content-Type": "application/json", ...init.headers } : init.headers,
  });
  if (!response.ok) throw new ApiError(response.status);
  if (response.status === 204) return undefined as T;
  return (await response.json()) as T;
}
