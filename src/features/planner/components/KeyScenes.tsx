import { useId, useState } from "react";
import { SpoilerToggle } from "../../../components/ui/SpoilerToggle";
import { useI18n } from "../../../i18n/useI18n";
import { getKeyScenes } from "../data/keyScenes";

interface KeyScenesProps {
  titleId: string;
}

export function KeyScenes({ titleId }: KeyScenesProps) {
  const { t, language } = useI18n();
  const [isRevealed, setIsRevealed] = useState(false);
  const headingId = useId();
  const listId = useId();

  const scenes = getKeyScenes(titleId);
  if (scenes.length === 0) return null;

  return (
    <section aria-labelledby={headingId}>
      <h4 id={headingId}>{t("details.keyScenes.heading")}</h4>
      <p>{t("details.keyScenes.editorial")}</p>
      <SpoilerToggle
        isRevealed={isRevealed}
        onToggle={() => setIsRevealed(!isRevealed)}
        controls={listId}
        showLabel={t("details.keyScenes.show")}
        hideLabel={t("details.keyScenes.hide")}
        warning={t("details.keyScenes.warning")}
      />
      <ul id={listId} hidden={!isRevealed}>
        {scenes.map((scene) => (
          <li key={scene.en}>{scene[language]}</li>
        ))}
      </ul>
    </section>
  );
}
