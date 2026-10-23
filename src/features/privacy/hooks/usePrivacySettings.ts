import { use } from "react";
import { PrivacySettingsContext } from "../context/PrivacySettingsContext";

export function usePrivacySettings() {
  const context = use(PrivacySettingsContext);
  if (!context) {
    throw new Error("usePrivacySettings deve essere usato all'interno di PrivacySettingsProvider");
  }
  return context;
}
