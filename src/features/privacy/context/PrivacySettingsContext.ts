import { createContext } from "react";

export interface PrivacySettingsContextValue {
  isOpen: boolean;
  open(): void;
  close(): void;
}

export const PrivacySettingsContext = createContext<PrivacySettingsContextValue | null>(null);
