import { Info } from "lucide-react";
import { useId, useState } from "react";
import { SpoilerToggle } from "../../../../components/ui/SpoilerToggle";
import { useI18n } from "../../../../i18n/useI18n";
import { getKeyScenes } from "../../data/keyScenes";

interface KeyScenesProps {
  titleId: string;
}

export function KeyScenes({ titleId }: KeyScenesProps) {
  const { t, language } = useI18n();
  const [isRevealed, setIsRevealed] = useState(false);
  const [isSourceShown, setIsSourceShown] = useState(false);
  const sourceId = useId();
  const headingId = useId();
  const listId = useId();

  const scenes = getKeyScenes(titleId);
  if (scenes.length === 0) return null;

  return (
    <section className="key-scenes" aria-labelledby={headingId}>
      <h4 id={headingId}>{t("details.keyScenes.heading")}</h4>
      <button
        type="button"
        className="btn btn--text"
        aria-expanded={isSourceShown}
        aria-controls={sourceId}
        onClick={() => setIsSourceShown(!isSourceShown)}
      >
        <Info aria-hidden />
        {t("details.keyScenes.source")}
      </button>
      <p id={sourceId} hidden={!isSourceShown}>
        {t("details.keyScenes.editorial")}
      </p>
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
