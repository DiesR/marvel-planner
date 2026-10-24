import { useId } from "react";
import { useI18n } from "../../../i18n/useI18n";

interface ProgressMeterProps {
  label: string;
  value: number;
  max: number;
}

export function ProgressMeter({ label, value, max }: ProgressMeterProps) {
  const { t } = useI18n();
  const id = useId();
  const percent = max > 0 ? Math.round((value / max) * 100) : 0;

  return (
    <div className="meter">
      <div className="meter__row">
        <label htmlFor={id}>{label}</label>
        <output htmlFor={id}>
          {t("common.ofCount", { done: value, total: max })} ({percent}%)
        </output>
      </div>
      <progress id={id} value={value} max={Math.max(max, 1)} />
    </div>
  );
}
