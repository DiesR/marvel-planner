import { Eye, EyeOff, TriangleAlert } from "lucide-react";
import { useId, useState, type ReactNode } from "react";
import { useI18n } from "../../../i18n/useI18n";

interface SpoilerPlotProps {
  children: ReactNode;
}

export function SpoilerPlot({ children }: SpoilerPlotProps) {
  const { t } = useI18n();
  const [isRevealed, setIsRevealed] = useState(false);
  const plotId = useId();
  const Icon = isRevealed ? EyeOff : Eye;

  return (
    <div>
      <button
        type="button"
        aria-expanded={isRevealed}
        aria-controls={plotId}
        onClick={() => setIsRevealed(!isRevealed)}
      >
        <Icon aria-hidden />
        {isRevealed ? t("details.plot.hide") : t("details.plot.show")}
      </button>
      {!isRevealed && (
        <p>
          <TriangleAlert aria-hidden /> {t("details.plot.warning")}
        </p>
      )}
      <div id={plotId} hidden={!isRevealed}>
        {children}
      </div>
    </div>
  );
}
