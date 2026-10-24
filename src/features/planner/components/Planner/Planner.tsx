import { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { FOOTER_ID } from "../../../../app/dom";
import { PATHS } from "../../../../app/paths";
import { ConfirmDialog } from "../../../../components/ui/ConfirmDialog";
import { useIsDesktopWithReset } from "../../../../components/ui/useMediaQuery";
import { useI18n } from "../../../../i18n/useI18n";
import { STORAGE_KEYS } from "../../../../lib/storageKeys";
import { usePersistentState } from "../../../../lib/usePersistentState";
import { ImportSharedDialog, type ImportMode } from "../../../share/components/ImportSharedDialog";
import { ShareDialog } from "../../../share/components/ShareDialog";
import { useCollapsedPhases } from "../../hooks/useCollapsedPhases";
import { useFloatingProgressVisibility } from "../../hooks/useFloatingProgressVisibility";
import { useResolvedCatalog } from "../../hooks/useResolvedCatalog";
import { useWatched } from "../../hooks/useWatched";
import type { Title } from "../../types";
import {
  countActiveFilters,
  DEFAULT_FILTERS,
  filterCatalog,
  flattenTitles,
  isFilters,
  matchesFilters,
} from "../../utils/filters";
import { findNextTitle, findPhaseNumber } from "../../utils/nextTitle";
import { chronologicalTitles, isViewOrder, titlesInOrder } from "../../utils/order";
import { computeProgress } from "../../utils/progress";
import { buildPhaseStrip } from "../../utils/strip";
import { ChronologicalList } from "../ChronologicalList";
import { CollapseToggle } from "../CollapseToggle";
import { FiltersSheet } from "../FiltersSheet";
import { FloatingProgress } from "../FloatingProgress";
import { MobileToolbar } from "../MobileToolbar";
import { NextToWatch } from "../NextToWatch";
import { PhaseStrip } from "../PhaseStrip";
import { PlannerFilters } from "../PlannerFilters";
import { PlannerGuide } from "../PlannerGuide";
import { PlannerSummary } from "../PlannerSummary";
import { SagaSection } from "../SagaSection";

interface PlannerProps {
  shareCode?: string;
}

export function Planner({ shareCode }: PlannerProps) {
  const { t } = useI18n();
  const navigate = useNavigate();
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const isDesktop = useIsDesktopWithReset(() => setIsFiltersOpen(false));
  const [filters, setFilters] = usePersistentState(
    STORAGE_KEYS.filters,
    DEFAULT_FILTERS,
    isFilters,
  );
  const [viewOrder, setViewOrder] = usePersistentState(
    STORAGE_KEYS.viewOrder,
    "release",
    isViewOrder,
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
  const nextTitle = findNextTitle(titlesInOrder(catalog, viewOrder), watched);
  const strip = useMemo(
    () => buildPhaseStrip(catalog, watched, nextTitle?.id ?? null),
    [catalog, watched, nextTitle?.id],
  );
  const chronological = useMemo(() => {
    const { placed, unplaced } = chronologicalTitles(catalog);
    const isShown = (title: Title) => matchesFilters(title, filters);
    return { placed: placed.filter(isShown), unplaced: unplaced.filter(isShown) };
  }, [catalog, filters]);

  const canCollapse = viewOrder === "release";
  const openShare = () => setIsShareDialogOpen(true);

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
      <div className="planner__hero">
        <PlannerSummary
          progress={overall}
          storage={storage}
          error={error}
          progressRef={progressRef}
          strip={strip}
          isDesktop={isDesktop}
          onShare={openShare}
          onReset={() => setIsResetDialogOpen(true)}
        />

        {!isLoading && (
          <NextToWatch
            title={nextTitle}
            phase={nextTitle ? findPhaseNumber(catalog, nextTitle.id) : null}
            isHiddenByFilters={nextTitle !== null && !matchesFilters(nextTitle, filters)}
            onMarkWatched={toggle}
          />
        )}
      </div>

      {isDesktop && <PhaseStrip phases={strip} variant="card" />}

      <div className="planner__body">
        {isDesktop ? (
          <>
            <div className="planner__rail">
              <PlannerFilters
                filters={filters}
                onChange={setFilters}
                viewOrder={viewOrder}
                onViewOrderChange={setViewOrder}
                shown={shownCount}
                total={allTitles.length}
              />
              {canCollapse && (
                <CollapseToggle
                  size="lg"
                  areAllCollapsed={areAllCollapsed}
                  onToggleAll={toggleAll}
                />
              )}
            </div>
          </>
        ) : (
          <>
            <MobileToolbar
              activeFilters={countActiveFilters(filters)}
              shown={shownCount}
              total={allTitles.length}
              canCollapse={canCollapse}
              areAllCollapsed={areAllCollapsed}
              onOpenFilters={() => setIsFiltersOpen(true)}
              onToggleAll={toggleAll}
            />
            <FiltersSheet
              isOpen={isFiltersOpen}
              onClose={() => setIsFiltersOpen(false)}
              filters={filters}
              onChange={setFilters}
              viewOrder={viewOrder}
              onViewOrderChange={setViewOrder}
              shown={shownCount}
            />
          </>
        )}

        <div className="planner__list" aria-busy={isLoading}>
          {viewOrder === "release" ? (
            sagas.map((saga) => (
              <SagaSection
                key={saga.id}
                saga={saga}
                watched={watched}
                collapsed={collapsed}
                onPhaseCollapsedChange={setPhaseCollapsed}
                onToggleTitle={toggle}
              />
            ))
          ) : (
            <ChronologicalList
              placed={chronological.placed}
              unplaced={chronological.unplaced}
              watched={watched}
              onToggleTitle={toggle}
            />
          )}
          <PlannerGuide />
        </div>
      </div>

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
