import { useI18n } from "../../../i18n/useI18n";

export const MAIN_CONTENT_ID = "main-content";

export function SkipLink() {
  const { t } = useI18n();

  return (
    <a className="skip-link" href={`#${MAIN_CONTENT_ID}`}>
      {t("nav.skipToContent")}
    </a>
  );
}
