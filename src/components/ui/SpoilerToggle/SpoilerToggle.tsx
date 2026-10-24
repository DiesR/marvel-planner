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
    <div className="spoiler-toggle">
      <button
        type="button"
        className="spoiler-toggle__button"
        aria-expanded={isRevealed}
        aria-controls={controls}
        onClick={onToggle}
      >
        <Icon aria-hidden />
        {isRevealed ? hideLabel : showLabel}
      </button>
      {!isRevealed && (
        <p className="spoiler-toggle__warning">
          <TriangleAlert aria-hidden /> {warning}
        </p>
      )}
    </div>
  );
}
