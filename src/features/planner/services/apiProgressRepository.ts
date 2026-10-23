import { apiRequest } from "../../../lib/apiClient";
import type { ProgressRepository } from "./progressRepository";

export const apiProgressRepository: ProgressRepository = {
  load: async () => {
    const { titleIds } = await apiRequest<{ titleIds: string[] }>("/progress");
    return titleIds;
  },
  add: (titleIds) =>
    apiRequest("/progress", { method: "POST", body: JSON.stringify({ titleIds }) }),
  remove: (titleId) => apiRequest(`/progress/${encodeURIComponent(titleId)}`, { method: "DELETE" }),
  clear: () => apiRequest("/progress", { method: "DELETE" }),
};
