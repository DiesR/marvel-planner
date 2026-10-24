import { Check } from "lucide-react";
import { useState } from "react";
import { Button } from "../../../../components/ui/Button";
import { Chevron } from "../../../../components/ui/Chevron";
import { useI18n } from "../../../../i18n/useI18n";
import { MEDIA_TYPE_KEYS, NOTE_KEYS } from "../../data/labels";
import type { Title } from "../../types";
import { formatRelease } from "../../utils/format";
import { BeforeYouWatch } from "../BeforeYouWatch";
import { PosterThumb } from "../PosterThumb";
import { TitleDetailsDialog } from "../TitleDetailsDialog";
import { TitleSummaryPanel } from "../TitleSummaryPanel";

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
  const [isOpen, setIsOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const meta = [
    t(MEDIA_TYPE_KEYS[title.type]),
    formatRelease(title.release, i18n),
    title.note && t(NOTE_KEYS[title.note]),
    title.continuity === "alternate" && t("planner.tags.alternate"),
    title.status === "upcoming" && t("planner.tags.upcoming"),
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <li className={`title-row${isOpen ? " title-row--open" : ""}`}>
      <label className="title-row__check">
        <input
          type="checkbox"
          checked={isWatched}
          aria-label={t("planner.markWatched", { name: title.name })}
          onChange={() => onToggle(title.id)}
        />
        <span className="title-row__box" aria-hidden="true">
          <Check />
        </span>
      </label>

      <PosterThumb titleId={title.id} isLarge={isOpen} />

      <details
        className="title-row__details"
        onToggle={(event) => {
          const open = event.currentTarget.open;
          setIsOpen(open);
          if (open) setHasBeenOpened(true);
        }}
      >
        <summary className="title-row__summary">
          <span className="title-row__heading">
            <span lang="en" className="title-row__name">
              {isWatched ? <s>{title.name}</s> : title.name}
            </span>
            <span className="title-row__meta">{meta}</span>
          </span>
          <Chevron />
        </summary>

        {hasBeenOpened && (
          <div className="title-row__content">
            <TitleSummaryPanel titleId={title.id} />
            <BeforeYouWatch title={title} watched={watched} />
            <div className="title-row__actions">
              <Button
                variant="panel"
                icon={<Check aria-hidden />}
                aria-pressed={isWatched}
                onClick={() => onToggle(title.id)}
              >
                {isWatched ? t("prerequisites.watched") : t("planner.next.markWatched")}
              </Button>
              <Button
                variant="primary"
                aria-haspopup="dialog"
                onClick={() => setIsDetailsOpen(true)}
              >
                {t("details.open")}
              </Button>
            </div>
          </div>
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
