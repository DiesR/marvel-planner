import { useMemo, useRef, useState } from "react";
import { FOOTER_ID } from "../../../app/dom";
import { ConfirmDialog } from "../../../components/ui/ConfirmDialog";
import { useI18n } from "../../../i18n/useI18n";
import { STORAGE_KEYS } from "../../../lib/storageKeys";
import { usePersistentState } from "../../../lib/usePersistentState";
import { useCollapsedPhases } from "../hooks/useCollapsedPhases";
import { useFloatingProgressVisibility } from "../hooks/useFloatingProgressVisibility";
import { useResolvedCatalog } from "../hooks/useResolvedCatalog";
import { useWatched } from "../hooks/useWatched";
import { DEFAULT_FILTERS, filterCatalog, flattenTitles, isFilters } from "../utils/filters";
import { computeProgress } from "../utils/progress";
import { FloatingProgress } from "./FloatingProgress";
import { PlannerActions } from "./PlannerActions";
import { PlannerFilters } from "./PlannerFilters";
import { PlannerGuide } from "./PlannerGuide";
import { PlannerSummary } from "./PlannerSummary";
import { SagaSection } from "./SagaSection";

export function Planner() {
  const { t } = useI18n();
  const [filters, setFilters] = usePersistentState(
    STORAGE_KEYS.filters,
    DEFAULT_FILTERS,
    isFilters,
  );
  const [isResetDialogOpen, setIsResetDialogOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  const catalog = useResolvedCatalog();
  const sagas = useMemo(() => filterCatalog(catalog, filters), [catalog, filters]);
  const { watched, isLoading, error, storage, toggle, reset } = useWatched();
  const { collapsed, areAllCollapsed, setPhaseCollapsed, toggleAll } = useCollapsedPhases();
  const isFloatingProgressVisible = useFloatingProgressVisibility(progressRef, FOOTER_ID);

  const allTitles = flattenTitles(catalog);
  const overall = computeProgress(allTitles, watched);
  const shownCount = flattenTitles(sagas).length;

  const confirmReset = () => {
    setIsResetDialogOpen(false);
    void reset();
  };

  return (
    <div className="planner">
      <PlannerSummary
        progress={overall}
        storage={storage}
        error={error}
        progressRef={progressRef}
      />

      <PlannerFilters
        filters={filters}
        onChange={setFilters}
        shown={shownCount}
        total={allTitles.length}
      />

      <PlannerActions
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

      <FloatingProgress progress={overall} isVisible={isFloatingProgressVisible} />

      <ConfirmDialog
        isOpen={isResetDialogOpen}
        title={t("planner.reset.title")}
        message={t("planner.reset.message")}
        confirmLabel={t("planner.reset.confirm")}
        cancelLabel={t("common.cancel")}
        onConfirm={confirmReset}
        onCancel={() => setIsResetDialogOpen(false)}
      />
    </div>
  );
}
