import type { ShareDuration, ShareLinkInfo, SharedPlanner } from "../../../../shared/share";
import { apiRequest } from "../../../lib/apiClient";

interface LinkResponse {
  link: ShareLinkInfo | null;
}

export const getShareLink = () => apiRequest<LinkResponse>("/share").then(({ link }) => link);

export const saveShareLink = (days: ShareDuration, regenerate: boolean) =>
  apiRequest<LinkResponse>("/share", {
    method: "POST",
    body: JSON.stringify({ days, regenerate }),
  }).then(({ link }) => link);

export const deleteShareLink = () => apiRequest("/share", { method: "DELETE" });

export const getSharedPlanner = (code: string) =>
  apiRequest<SharedPlanner>(`/shared/${encodeURIComponent(code)}`);
