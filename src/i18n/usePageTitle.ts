import { useEffect } from "react";
import { SITE } from "../app/site";
import type { TranslationKey } from "./types";
import { useI18n } from "./useI18n";

export function usePageTitle(key: TranslationKey) {
  const { t } = useI18n();
  const title = t(key);

  useEffect(() => {
    document.title = `${title} · ${SITE.name}`;
  }, [title]);
}
