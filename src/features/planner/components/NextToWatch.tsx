import { Check } from "lucide-react";
import { useId } from "react";
import { useI18n } from "../../../i18n/useI18n";
import { MEDIA_TYPE_KEYS } from "../data/labels";
import type { Title } from "../types";
import { formatRelease } from "../utils/format";

interface NextToWatchProps {
  title: Title | null;
  isHiddenByFilters: boolean;
  onMarkWatched: (id: string) => void;
}

export function NextToWatch({ title, isHiddenByFilters, onMarkWatched }: NextToWatchProps) {
  const i18n = useI18n();
  const { t } = i18n;
  const headingId = useId();

  return (
    <section aria-labelledby={headingId}>
      <h2 id={headingId}>{t("planner.next.heading")}</h2>
      {title ? (
        <>
          <p>
            <strong lang="en">{title.name}</strong>
          </p>
          <p>{[formatRelease(title.release, i18n), t(MEDIA_TYPE_KEYS[title.type])].join(" · ")}</p>
          {isHiddenByFilters && <p>{t("planner.next.hiddenByFilters")}</p>}
          <button type="button" onClick={() => onMarkWatched(title.id)}>
            <Check aria-hidden />
            {t("planner.next.markWatched")}
          </button>
        </>
      ) : (
        <p>{t("planner.next.allDone")}</p>
      )}
    </section>
  );
}
