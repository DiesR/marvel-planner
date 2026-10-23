import type { Ref } from "react";
import { ProgressMeter } from "../../../components/ui/ProgressMeter";
import type { TranslationKey } from "../../../i18n/types";
import { useI18n } from "../../../i18n/useI18n";
import type { Progress, ProgressStorage } from "../types";

const STORAGE_NOTE_KEYS: Record<ProgressStorage, TranslationKey> = {
  account: "planner.storage.account",
  device: "planner.storage.device",
  none: "planner.storage.none",
};

interface PlannerSummaryProps {
  progress: Progress;
  storage: ProgressStorage;
  error: TranslationKey | null;
  progressRef: Ref<HTMLDivElement>;
}

export function PlannerSummary({ progress, storage, error, progressRef }: PlannerSummaryProps) {
  const { t } = useI18n();

  return (
    <section aria-labelledby="planner-title">
      <p>{t("planner.eyebrow")}</p>
      <h1 id="planner-title">{t("planner.title")}</h1>
      <p>{t("planner.intro")}</p>
      <div ref={progressRef}>
        <ProgressMeter label={t("planner.completed")} value={progress.done} max={progress.total} />
      </div>
      <p>{t(STORAGE_NOTE_KEYS[storage])}</p>
      {error && <p role="alert">{t(error)}</p>}
    </section>
  );
}
