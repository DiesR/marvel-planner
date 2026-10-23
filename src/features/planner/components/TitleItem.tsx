import { Info } from "lucide-react";
import { useState } from "react";
import { useI18n } from "../../../i18n/useI18n";
import { MEDIA_TYPE_KEYS, NOTE_KEYS } from "../data/labels";
import type { Title } from "../types";
import { formatRelease } from "../utils/format";
import { BeforeYouWatch } from "./BeforeYouWatch";
import { TitleDetailsDialog } from "./TitleDetailsDialog";
import { TitleSummaryPanel } from "./TitleSummaryPanel";

interface TitleItemProps {
  title: Title;
  isWatched: boolean;
  watched: ReadonlySet<string>;
  onToggle: (id: string) => void;
}

export function TitleItem({ title, isWatched, watched, onToggle }: TitleItemProps) {
  const i18n = useI18n();
  const { t } = i18n;
  const [hasBeenOpened, setHasBeenOpened] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

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
          <span lang="en">{isWatched ? <s>{title.name}</s> : title.name}</span>
          <span>{[formatRelease(title.release, i18n), ...tags].join(" · ")}</span>
        </summary>
        {hasBeenOpened && (
          <>
            <TitleSummaryPanel titleId={title.id} />
            <BeforeYouWatch title={title} watched={watched} />
            <button type="button" aria-haspopup="dialog" onClick={() => setIsDetailsOpen(true)}>
              <Info aria-hidden />
              {t("details.open")}
            </button>
          </>
        )}
      </details>
      <TitleDetailsDialog
        isOpen={isDetailsOpen}
        titleId={title.id}
        titleName={title.name}
        onClose={() => setIsDetailsOpen(false)}
      />
    </li>
  );
}
