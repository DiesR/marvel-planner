import { useI18n } from "../../../i18n/useI18n";
import type { Progress } from "../types";

interface FloatingProgressProps {
  progress: Progress;
  isVisible: boolean;
}

export function FloatingProgress({ progress, isVisible }: FloatingProgressProps) {
  const { t } = useI18n();
  const percent = progress.total > 0 ? Math.round((progress.done / progress.total) * 100) : 0;

  return (
    <div className="floating-progress" aria-hidden="true" hidden={!isVisible}>
      <progress value={progress.done} max={Math.max(progress.total, 1)} />
      <span>
        {t("planner.completed")}: {progress.done} / {progress.total} · {percent}%
      </span>
    </div>
  );
}
