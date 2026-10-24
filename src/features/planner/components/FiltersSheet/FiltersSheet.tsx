import { X } from "lucide-react";
import { useId } from "react";
import { createPortal } from "react-dom";
import { Button } from "../../../../components/ui/Button";
import { useDialog } from "../../../../components/ui/useDialog";
import { useI18n } from "../../../../i18n/useI18n";
import type { Filters, ViewOrder } from "../../types";
import { areDefaultFilters, DEFAULT_FILTERS } from "../../utils/filters";
import { FiltersFields } from "../FiltersFields";

interface FiltersSheetProps {
  isOpen: boolean;
  onClose: () => void;
  filters: Filters;
  onChange: (filters: Filters) => void;
  viewOrder: ViewOrder;
  onViewOrderChange: (order: ViewOrder) => void;
  shown: number;
}

export function FiltersSheet({
  isOpen,
  onClose,
  filters,
  onChange,
  viewOrder,
  onViewOrderChange,
  shown,
}: FiltersSheetProps) {
  const { t } = useI18n();
  const dialogRef = useDialog(isOpen);
  const titleId = useId();

  return createPortal(
    <dialog
      ref={dialogRef}
      className="filters-sheet"
      aria-labelledby={titleId}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {isOpen && (
        <div className="filters-sheet__body">
          <div className="filters-sheet__header">
            <h2 id={titleId} className="filters-sheet__title">
              {t("planner.filters.heading")}
            </h2>
            <Button
              variant="soft"
              icon={<X aria-hidden />}
              aria-label={t("common.close")}
              onClick={onClose}
            />
          </div>
          <FiltersFields
            filters={filters}
            onChange={onChange}
            viewOrder={viewOrder}
            onViewOrderChange={onViewOrderChange}
          />
          <div className="filters-sheet__actions">
            <Button
              variant="soft"
              size="lg"
              disabled={areDefaultFilters(filters)}
              onClick={() => onChange(DEFAULT_FILTERS)}
            >
              {t("planner.filters.clear")}
            </Button>
            <Button variant="primary" size="lg" onClick={onClose}>
              {t("planner.filters.show", { count: shown })}
            </Button>
          </div>
        </div>
      )}
    </dialog>,
    document.body,
  );
}
