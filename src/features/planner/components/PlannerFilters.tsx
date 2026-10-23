import { FilterX } from "lucide-react";
import { useId } from "react";
import { useI18n } from "../../../i18n/useI18n";
import { TYPE_FILTER_OPTIONS } from "../data/labels";
import type { Filters, MediaType } from "../types";
import { areDefaultFilters, DEFAULT_FILTERS } from "../utils/filters";

interface PlannerFiltersProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
  shown: number;
  total: number;
}

function toggleType(types: MediaType[], type: MediaType, checked: boolean): MediaType[] {
  return checked ? [...types, type] : types.filter((current) => current !== type);
}

export function PlannerFilters({ filters, onChange, shown, total }: PlannerFiltersProps) {
  const { t } = useI18n();
  const headingId = useId();

  return (
    <section aria-labelledby={headingId}>
      <h2 id={headingId}>{t("planner.filters.heading")}</h2>

      <fieldset>
        <legend>{t("planner.filters.type")}</legend>
        {TYPE_FILTER_OPTIONS.map((option) => (
          <label key={option.value}>
            <input
              type="checkbox"
              checked={filters.types.includes(option.value)}
              onChange={(event) =>
                onChange({
                  ...filters,
                  types: toggleType(filters.types, option.value, event.target.checked),
                })
              }
            />
            {t(option.labelKey)}
          </label>
        ))}
      </fieldset>

      <fieldset>
        <legend>{t("planner.filters.visibility")}</legend>
        <label>
          <input
            type="checkbox"
            checked={filters.showAlternate}
            onChange={(event) => onChange({ ...filters, showAlternate: event.target.checked })}
          />
          {t("planner.filters.showAlternate")}
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.showUpcoming}
            onChange={(event) => onChange({ ...filters, showUpcoming: event.target.checked })}
          />
          {t("planner.filters.showUpcoming")}
        </label>
      </fieldset>

      <p role="status">{t("planner.filters.results", { shown, total })}</p>

      {!areDefaultFilters(filters) && (
        <button type="button" onClick={() => onChange(DEFAULT_FILTERS)}>
          <FilterX aria-hidden />
          {t("planner.filters.clear")}
        </button>
      )}
    </section>
  );
}
