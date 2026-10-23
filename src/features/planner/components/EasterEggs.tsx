import { Sparkles } from "lucide-react";
import { useId } from "react";
import type { TranslationKey } from "../../../i18n/types";
import { useI18n } from "../../../i18n/useI18n";
import { getEasterEggs, type EasterEggKind } from "../data/easterEggs";

const KIND_KEYS: Record<EasterEggKind, TranslationKey> = {
  stanLee: "details.easterEggs.stanLee",
};

interface EasterEggsProps {
  titleId: string;
}

export function EasterEggs({ titleId }: EasterEggsProps) {
  const { t, language } = useI18n();
  const headingId = useId();
  const eggs = getEasterEggs(titleId);

  if (eggs.length === 0) return null;

  return (
    <section aria-labelledby={headingId}>
      <h4 id={headingId}>
        <Sparkles aria-hidden />
        {t("details.easterEggs.heading")}
      </h4>
      <ul>
        {eggs.map((egg) => (
          <li key={`${egg.kind}-${egg.description.en}`}>
            <strong>{t(KIND_KEYS[egg.kind])}:</strong> {egg.description[language]}{" "}
            <a href={egg.sourceUrl} rel="noreferrer">
              {t("details.easterEggs.source")}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
