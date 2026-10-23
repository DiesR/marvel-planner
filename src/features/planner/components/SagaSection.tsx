import { useId } from "react";
import type { Saga } from "../types";
import { computeProgress } from "../utils/progress";
import { PhaseSection } from "./PhaseSection";

interface SagaSectionProps {
  saga: Saga;
  watched: ReadonlySet<string>;
  collapsed: ReadonlySet<number>;
  onPhaseCollapsedChange: (phase: number, isCollapsed: boolean) => void;
  onToggleTitle: (id: string) => void;
}

export function SagaSection({
  saga,
  watched,
  collapsed,
  onPhaseCollapsedChange,
  onToggleTitle,
}: SagaSectionProps) {
  const headingId = useId();
  const progress = computeProgress(
    saga.phases.flatMap((phase) => phase.titles),
    watched,
  );

  return (
    <section aria-labelledby={headingId}>
      <h2 id={headingId}>{saga.name}</h2>
      <p>
        {progress.done} / {progress.total}
      </p>
      {saga.phases.map((phase) => (
        <PhaseSection
          key={phase.number}
          phase={phase}
          watched={watched}
          isCollapsed={collapsed.has(phase.number)}
          onCollapsedChange={(isCollapsed) => onPhaseCollapsedChange(phase.number, isCollapsed)}
          onToggleTitle={onToggleTitle}
        />
      ))}
    </section>
  );
}
