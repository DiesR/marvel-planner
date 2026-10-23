import { useState } from "react";
import { useI18n } from "../../../i18n/useI18n";
import { MEDIA_TYPE_KEYS, NOTE_KEYS } from "../data/labels";
import type { Title } from "../types";
import { formatRelease } from "../utils/format";
import { TitleDetailsPanel } from "./TitleDetailsPanel";

interface TitleItemProps {
  title: Title;
  isWatched: boolean;
  onToggle: (id: string) => void;
}

export function TitleItem({ title, isWatched, onToggle }: TitleItemProps) {
  const i18n = useI18n();
  const { t } = i18n;
  const [hasBeenOpened, setHasBeenOpened] = useState(false);

  const tags = [
    t(MEDIA_TYPE_KEYS[title.type]),
    title.note && t(NOTE_KEYS[title.note]),
    title.continuity === "alternate" && t("planner.tags.alternate"),
    title.status === "upcoming" && t("planner.tags.upcoming"),
  ].filter(Boolean);

  return (
    <li>
      <input
        type="checkbox"
        checked={isWatched}
        aria-label={t("planner.markWatched", { name: title.name })}
        onChange={() => onToggle(title.id)}
      />
      <details onToggle={(event) => event.currentTarget.open && setHasBeenOpened(true)}>
        <summary>
          {isWatched ? <s>{title.name}</s> : title.name}
          <span>{[formatRelease(title.release, i18n), ...tags].join(" · ")}</span>
        </summary>
        {hasBeenOpened && <TitleDetailsPanel titleId={title.id} />}
      </details>
    </li>
  );
}
