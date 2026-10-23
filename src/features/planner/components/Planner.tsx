import { useState } from "react";
import { ConfirmDialog } from "../../../components/ui/ConfirmDialog";
import { useI18n } from "../../../i18n/useI18n";
import { STORAGE_KEYS } from "../../../lib/storageKeys";
import { usePersistentState } from "../../../lib/usePersistentState";
import { useCollapsedPhases } from "../hooks/useCollapsedPhases";
import { useFilteredCatalog } from "../hooks/useFilteredCatalog";
import { useWatched } from "../hooks/useWatched";
import { DEFAULT_FILTERS, isFilters } from "../utils/filters";
import { computeProgress } from "../utils/progress";
import { PlannerGuide } from "./PlannerGuide";
import { PlannerSummary } from "./PlannerSummary";
import { PlannerToolbar } from "./PlannerToolbar";
import { SagaSection } from "./SagaSection";

export function Planner() {
  const { t } = useI18n();
  const [filters, setFilters] = usePersistentState(
    STORAGE_KEYS.filters,
    DEFAULT_FILTERS,
    isFilters,
  );
  const [isResetDialogOpen, setIsResetDialogOpen] = useState(false);
  const sagas = useFilteredCatalog(filters);
  const { watched, isLoading, error, storage, toggle, reset } = useWatched();
  const { collapsed, areAllCollapsed, setPhaseCollapsed, toggleAll } = useCollapsedPhases();

  const visibleTitles = sagas.flatMap((saga) => saga.phases.flatMap((phase) => phase.titles));
  const overall = computeProgress(visibleTitles, watched);

  const confirmReset = () => {
    setIsResetDialogOpen(false);
    void reset();
  };

  return (
    <>
      <PlannerSummary progress={overall} storage={storage} error={error} />

      <PlannerToolbar
        filters={filters}
        onFiltersChange={setFilters}
        areAllCollapsed={areAllCollapsed}
        onToggleAll={toggleAll}
        onReset={() => setIsResetDialogOpen(true)}
      />

      <div aria-busy={isLoading}>
        {sagas.map((saga) => (
          <SagaSection
            key={saga.id}
            saga={saga}
            watched={watched}
            collapsed={collapsed}
            onPhaseCollapsedChange={setPhaseCollapsed}
            onToggleTitle={toggle}
          />
        ))}
      </div>

      <PlannerGuide />

      <ConfirmDialog
        isOpen={isResetDialogOpen}
        title={t("planner.reset.title")}
        message={t("planner.reset.message")}
        confirmLabel={t("planner.reset.confirm")}
        cancelLabel={t("common.cancel")}
        onConfirm={confirmReset}
        onCancel={() => setIsResetDialogOpen(false)}
      />
    </>
  );
}
