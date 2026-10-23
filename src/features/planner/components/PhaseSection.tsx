import { ProgressMeter } from "../../../components/ui/ProgressMeter";
import type { Phase } from "../types";
import { computeProgress } from "../utils/progress";
import { TitleItem } from "./TitleItem";

interface PhaseSectionProps {
  phase: Phase;
  watched: ReadonlySet<string>;
  isCollapsed: boolean;
  onCollapsedChange: (isCollapsed: boolean) => void;
  onToggleTitle: (id: string) => void;
}

export function PhaseSection({
  phase,
  watched,
  isCollapsed,
  onCollapsedChange,
  onToggleTitle,
}: PhaseSectionProps) {
  const progress = computeProgress(phase.titles, watched);

  return (
    <details open={!isCollapsed} onToggle={(event) => onCollapsedChange(!event.currentTarget.open)}>
      <summary>
        <h3>
          {phase.number} · {phase.name}
        </h3>
        <span>
          {phase.years} · {progress.done} / {progress.total}
        </span>
      </summary>

      <ProgressMeter
        label={`Avanzamento ${phase.name}`}
        value={progress.done}
        max={progress.total}
      />

      {phase.titles.length > 0 ? (
        <ol>
          {phase.titles.map((title) => (
            <TitleItem
              key={title.id}
              title={title}
              isWatched={watched.has(title.id)}
              onToggle={onToggleTitle}
            />
          ))}
        </ol>
      ) : (
        <p>Nessun titolo corrisponde ai filtri.</p>
      )}
    </details>
  );
}
