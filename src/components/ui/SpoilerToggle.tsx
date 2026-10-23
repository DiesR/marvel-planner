import { Eye, EyeOff, TriangleAlert } from "lucide-react";

interface SpoilerToggleProps {
  isRevealed: boolean;
  onToggle: () => void;
  controls: string;
  showLabel: string;
  hideLabel: string;
  warning: string;
}

export function SpoilerToggle({
  isRevealed,
  onToggle,
  controls,
  showLabel,
  hideLabel,
  warning,
}: SpoilerToggleProps) {
  const Icon = isRevealed ? EyeOff : Eye;

  return (
    <div>
      <button type="button" aria-expanded={isRevealed} aria-controls={controls} onClick={onToggle}>
        <Icon aria-hidden />
        {isRevealed ? hideLabel : showLabel}
      </button>
      {!isRevealed && (
        <p>
          <TriangleAlert aria-hidden /> {warning}
        </p>
      )}
    </div>
  );
}
