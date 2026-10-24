import { Check } from "lucide-react";
import { useI18n } from "../../../../i18n/useI18n";

interface MarkWatchedButtonProps {
  isWatched: boolean;
  onToggle: () => void;
}

export function MarkWatchedButton({ isWatched, onToggle }: MarkWatchedButtonProps) {
  const { t } = useI18n();

  return (
    <div className="mark-watched">
      <button
        type="button"
        className={`mark-watched__button${isWatched ? " mark-watched__button--watched" : ""}`}
        aria-pressed={isWatched}
        onClick={onToggle}
      >
        <span className="mark-watched__pill">
          <Check aria-hidden />
          {isWatched ? t("prerequisites.watched") : t("planner.next.markWatched")}
        </span>
      </button>
    </div>
  );
}
