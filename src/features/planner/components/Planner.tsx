import { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { FOOTER_ID } from "../../../app/dom";
import { PATHS } from "../../../app/paths";
import { ConfirmDialog } from "../../../components/ui/ConfirmDialog";
import { useI18n } from "../../../i18n/useI18n";
import { STORAGE_KEYS } from "../../../lib/storageKeys";
import { usePersistentState } from "../../../lib/usePersistentState";
import { ImportSharedDialog, type ImportMode } from "../../share/components/ImportSharedDialog";
import { ShareDialog } from "../../share/components/ShareDialog";
import { useCollapsedPhases } from "../hooks/useCollapsedPhases";
import { useFloatingProgressVisibility } from "../hooks/useFloatingProgressVisibility";
import { useResolvedCatalog } from "../hooks/useResolvedCatalog";
import { useWatched } from "../hooks/useWatched";
import {
  DEFAULT_FILTERS,
  filterCatalog,
  flattenTitles,
  isFilters,
  matchesFilters,
} from "../utils/filters";
import { findNextTitle } from "../utils/nextTitle";
import { computeProgress } from "../utils/progress";
import { FloatingProgress } from "./FloatingProgress";
import { NextToWatch } from "./NextToWatch";
import { PlannerActions } from "./PlannerActions";
import { PlannerFilters } from "./PlannerFilters";
import { PlannerGuide } from "./PlannerGuide";
import { PlannerSummary } from "./PlannerSummary";
import { SagaSection } from "./SagaSection";

interface PlannerProps {
  shareCode?: string;
}

export function Planner({ shareCode }: PlannerProps) {
  const { t } = useI18n();
  const navigate = useNavigate();
  const [filters, setFilters] = usePersistentState(
    STORAGE_KEYS.filters,
    DEFAULT_FILTERS,
    isFilters,
  );
  const [isResetDialogOpen, setIsResetDialogOpen] = useState(false);
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  const catalog = useResolvedCatalog();
  const sagas = useMemo(() => filterCatalog(catalog, filters), [catalog, filters]);
  const { watched, isLoading, error, storage, toggle, reset, importTitles } = useWatched();
  const { collapsed, areAllCollapsed, setPhaseCollapsed, toggleAll } = useCollapsedPhases();
  const isFloatingProgressVisible = useFloatingProgressVisibility(progressRef, FOOTER_ID);

  const allTitles = flattenTitles(catalog);
  const overall = computeProgress(allTitles, watched);
  const shownCount = flattenTitles(sagas).length;
  const knownIds = useMemo(
    () => new Set(flattenTitles(catalog).map((title) => title.id)),
    [catalog],
  );
  const nextTitle = findNextTitle(catalog, watched);

  const confirmReset = () => {
    setIsResetDialogOpen(false);
    void reset();
  };

  const closeImport = () => navigate(PATHS.home, { replace: true });

  const importShared = (ids: ReadonlySet<string>, mode: ImportMode) => {
    void importTitles(ids, mode);
    closeImport();
  };

  return (
    <div className="planner">
      <PlannerSummary
        progress={overall}
        storage={storage}
        error={error}
        progressRef={progressRef}
      />

      {!isLoading && (
        <NextToWatch
          title={nextTitle}
          isHiddenByFilters={nextTitle !== null && !matchesFilters(nextTitle, filters)}
          onMarkWatched={toggle}
        />
      )}

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
        onShare={() => setIsShareDialogOpen(true)}
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

      <ShareDialog
        isOpen={isShareDialogOpen}
        progress={overall}
        onClose={() => setIsShareDialogOpen(false)}
      />

      {shareCode && (
        <ImportSharedDialog
          code={shareCode}
          watched={watched}
          knownIds={knownIds}
          storage={storage}
          isLoading={isLoading}
          onImport={importShared}
          onClose={closeImport}
        />
      )}

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
