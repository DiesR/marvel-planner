import { Languages } from "lucide-react";
import { LANGUAGES, LANGUAGE_NAMES, isLanguage } from "../../../shared/languages";
import { useI18n } from "../../i18n/useI18n";

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useI18n();

  return (
    <label>
      <Languages aria-hidden />
      <span>{t("nav.language")}</span>
      <select
        value={language}
        onChange={(event) => isLanguage(event.target.value) && setLanguage(event.target.value)}
      >
        {LANGUAGES.map((code) => (
          <option key={code} value={code} lang={code}>
            {LANGUAGE_NAMES[code]}
          </option>
        ))}
      </select>
    </label>
  );
}
