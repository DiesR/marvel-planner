import { TYPE_FILTER_OPTIONS } from "../data/labels";
import type { Filters } from "../types";

interface FilterControlsProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
}

export function FilterControls({ filters, onChange }: FilterControlsProps) {
  return (
    <>
      <fieldset>
        <legend>Tipo</legend>
        {TYPE_FILTER_OPTIONS.map((option) => (
          <label key={option.value}>
            <input
              type="radio"
              name="type-filter"
              value={option.value}
              checked={filters.type === option.value}
              onChange={() => onChange({ ...filters, type: option.value })}
            />
            {option.label}
          </label>
        ))}
      </fieldset>

      <fieldset>
        <legend>Visibilità</legend>
        <label>
          <input
            type="checkbox"
            checked={filters.hideAlternate}
            onChange={(event) => onChange({ ...filters, hideAlternate: event.target.checked })}
          />
          Nascondi continuità alternativa
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.hideUpcoming}
            onChange={(event) => onChange({ ...filters, hideUpcoming: event.target.checked })}
          />
          Nascondi non ancora usciti
        </label>
      </fieldset>
    </>
  );
}
