import { useI18n } from "../../../i18n/useI18n";
import { TYPE_FILTER_OPTIONS } from "../data/labels";
import type { Filters } from "../types";

interface FilterControlsProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
}

export function FilterControls({ filters, onChange }: FilterControlsProps) {
  const { t } = useI18n();

  return (
    <>
      <fieldset>
        <legend>{t("planner.filters.type")}</legend>
        {TYPE_FILTER_OPTIONS.map((option) => (
          <label key={option.value}>
            <input
              type="radio"
              name="type-filter"
              value={option.value}
              checked={filters.type === option.value}
              onChange={() => onChange({ ...filters, type: option.value })}
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
            checked={filters.hideAlternate}
            onChange={(event) => onChange({ ...filters, hideAlternate: event.target.checked })}
          />
          {t("planner.filters.hideAlternate")}
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.hideUpcoming}
            onChange={(event) => onChange({ ...filters, hideUpcoming: event.target.checked })}
          />
          {t("planner.filters.hideUpcoming")}
        </label>
      </fieldset>
    </>
  );
}
