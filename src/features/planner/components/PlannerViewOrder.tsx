import { useId } from "react";
import { useI18n } from "../../../i18n/useI18n";
import type { ViewOrder } from "../types";

interface PlannerViewOrderProps {
  value: ViewOrder;
  onChange: (order: ViewOrder) => void;
}

export function PlannerViewOrder({ value, onChange }: PlannerViewOrderProps) {
  const { t } = useI18n();
  const headingId = useId();

  return (
    <section aria-labelledby={headingId}>
      <h2 id={headingId}>{t("planner.order.heading")}</h2>
      <fieldset>
        <legend>{t("planner.order.heading")}</legend>
        <label>
          <input
            type="radio"
            name="view-order"
            checked={value === "release"}
            onChange={() => onChange("release")}
          />
          {t("planner.order.release")}
        </label>
        <label>
          <input
            type="radio"
            name="view-order"
            checked={value === "chronological"}
            onChange={() => onChange("chronological")}
          />
          {t("planner.order.chronological")}
        </label>
      </fieldset>
    </section>
  );
}
