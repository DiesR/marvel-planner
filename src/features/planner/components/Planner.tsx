import { useState } from "react";
import { useCollapsedPhases } from "../hooks/useCollapsedPhases";
import { useFilteredCatalog } from "../hooks/useFilteredCatalog";
import { useWatched } from "../hooks/useWatched";
import { DEFAULT_FILTERS } from "../utils/filters";
import { computeProgress } from "../utils/progress";
import { PlannerGuide } from "./PlannerGuide";
import { PlannerSummary } from "./PlannerSummary";
import { PlannerToolbar } from "./PlannerToolbar";
import { SagaSection } from "./SagaSection";

const RESET_CONFIRMATION = "Azzerare tutti i progressi? Le spunte verranno rimosse.";

export function Planner() {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const sagas = useFilteredCatalog(filters);
  const { watched, isLoading, error, storage, toggle, reset } = useWatched();
  const { collapsed, areAllCollapsed, setPhaseCollapsed, toggleAll } = useCollapsedPhases();

  const visibleTitles = sagas.flatMap((saga) => saga.phases.flatMap((phase) => phase.titles));
  const overall = computeProgress(visibleTitles, watched);

  const handleReset = () => {
    if (window.confirm(RESET_CONFIRMATION)) void reset();
  };

  return (
    <>
      <PlannerSummary progress={overall} storage={storage} error={error} />

      <PlannerToolbar
        filters={filters}
        onFiltersChange={setFilters}
        areAllCollapsed={areAllCollapsed}
        onToggleAll={toggleAll}
        onReset={handleReset}
      />

      <div aria-busy={isLoading}>
        {sagas.map((saga) => (
          <SagaSection
            key={saga.name}
            saga={saga}
            watched={watched}
            collapsed={collapsed}
            onPhaseCollapsedChange={setPhaseCollapsed}
            onToggleTitle={toggle}
          />
        ))}
      </div>

      <PlannerGuide />
    </>
  );
}
