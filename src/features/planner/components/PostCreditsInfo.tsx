import { useId, useState } from "react";
import { SpoilerToggle } from "../../../components/ui/SpoilerToggle";
import type { TranslationKey } from "../../../i18n/types";
import { useI18n } from "../../../i18n/useI18n";
import { getPostCredits, type ScenePosition } from "../data/postCredits";

const POSITION_KEYS: Record<ScenePosition, TranslationKey> = {
  before: "postCredits.positions.before",
  mid: "postCredits.positions.mid",
  credits: "postCredits.positions.credits",
  end: "postCredits.positions.end",
};

interface PostCreditsInfoProps {
  titleId: string;
}

export function PostCreditsInfo({ titleId }: PostCreditsInfoProps) {
  const { t, language } = useI18n();
  const [isRevealed, setIsRevealed] = useState(false);
  const headingId = useId();
  const scenesId = useId();

  const info = getPostCredits(titleId);
  if (!info) return null;

  const { scenes, note } = info;
  const creditScenes = scenes.filter((scene) => scene.position !== "before");
  const hasLateScene = creditScenes.some((scene) => scene.position !== "mid");

  const summaryKey: TranslationKey =
    creditScenes.length === 0
      ? scenes.length === 0
        ? "postCredits.none"
        : "postCredits.noneBefore"
      : hasLateScene
        ? "postCredits.tipEnd"
        : "postCredits.tipMid";

  return (
    <section aria-labelledby={headingId}>
      <h5 id={headingId}>{t("postCredits.heading")}</h5>
      <p>{t(summaryKey)}</p>
      {note && <p>{note[language]}</p>}

      {scenes.length > 0 && (
        <>
          <SpoilerToggle
            isRevealed={isRevealed}
            onToggle={() => setIsRevealed(!isRevealed)}
            controls={scenesId}
            showLabel={t("postCredits.show")}
            hideLabel={t("postCredits.hide")}
            warning={t("postCredits.warning")}
          />
          <ol>
            {scenes.map((scene, index) => (
              <li key={index}>
                <strong>{t(POSITION_KEYS[scene.position])}</strong>
                <p id={index === 0 ? scenesId : undefined} hidden={!isRevealed}>
                  {scene.description[language]}
                </p>
              </li>
            ))}
          </ol>
        </>
      )}
    </section>
  );
}
