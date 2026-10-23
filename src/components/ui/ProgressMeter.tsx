import { useId } from "react";

interface ProgressMeterProps {
  label: string;
  value: number;
  max: number;
}

export function ProgressMeter({ label, value, max }: ProgressMeterProps) {
  const id = useId();
  const percent = max > 0 ? Math.round((value / max) * 100) : 0;

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <progress id={id} value={value} max={Math.max(max, 1)} />
      <output htmlFor={id}>
        {value} / {max} · {percent}%
      </output>
    </div>
  );
}
