import { use } from "react";
import { I18nContext } from "./I18nContext";

export function useI18n() {
  const context = use(I18nContext);
  if (!context) throw new Error("useI18n deve essere usato all'interno di I18nProvider");
  return context;
}
