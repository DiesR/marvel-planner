import { createContext } from "react";
import type { SiteStatus } from "../../../../shared/admin";

export interface SiteStatusContextValue extends SiteStatus {
  isLoading: boolean;
  refresh(): void;
}

export const SiteStatusContext = createContext<SiteStatusContextValue | null>(null);
