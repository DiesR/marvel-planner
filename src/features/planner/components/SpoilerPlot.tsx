import { useId, useState, type ReactNode } from "react";
import { SpoilerToggle } from "../../../components/ui/SpoilerToggle";
import { useI18n } from "../../../i18n/useI18n";

interface SpoilerPlotProps {
  children: ReactNode;
}

export function SpoilerPlot({ children }: SpoilerPlotProps) {
  const { t } = useI18n();
  const [isRevealed, setIsRevealed] = useState(false);
  const plotId = useId();

  return (
    <div>
      <SpoilerToggle
        isRevealed={isRevealed}
        onToggle={() => setIsRevealed(!isRevealed)}
        controls={plotId}
        showLabel={t("details.plot.show")}
        hideLabel={t("details.plot.hide")}
        warning={t("details.plot.warning")}
      />
      <div id={plotId} hidden={!isRevealed}>
        {children}
      </div>
    </div>
  );
}
