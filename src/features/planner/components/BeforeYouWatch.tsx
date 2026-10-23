import { Check, Circle } from "lucide-react";
import { useId, useState } from "react";
import { SpoilerToggle } from "../../../components/ui/SpoilerToggle";
import type { TranslationKey } from "../../../i18n/types";
import { useI18n } from "../../../i18n/useI18n";
import { TITLES_BY_ID } from "../data/catalog";
import { getGuide } from "../data/guides";
import type { PrerequisiteLevel } from "../data/guides/types";
import type { Title } from "../types";
import { getReadiness, type Readiness } from "../utils/readiness";

const LEVELS: PrerequisiteLevel[] = ["essential", "recommended", "optional"];

const STATUS_KEYS: Record<Readiness["kind"], TranslationKey> = {
  standalone: "prerequisites.status.standalone",
  missingEssential: "prerequisites.status.missingEssential",
  ready: "prerequisites.status.ready",
  wellPrepared: "prerequisites.status.wellPrepared",
  complete: "prerequisites.status.complete",
};

interface BeforeYouWatchProps {
  title: Title;
  watched: ReadonlySet<string>;
}

function nameOf(id: string): string {
  return TITLES_BY_ID[id]?.name ?? id;
}

export function BeforeYouWatch({ title, watched }: BeforeYouWatchProps) {
  const { t, language } = useI18n();
  const [areReasonsRevealed, setAreReasonsRevealed] = useState(false);
  const headingId = useId();
  const reasonsId = useId();

  const guide = getGuide(title.id);
  const readiness = getReadiness(guide.prerequisites, watched);
  const titles =
    readiness.kind === "missingEssential" ? readiness.missingIds.map(nameOf).join(", ") : "";
  const reasonIds = guide.prerequisites.map((item) => `${reasonsId}-${item.id}`).join(" ");

  return (
    <section aria-labelledby={headingId}>
      <h5 id={headingId}>{t("prerequisites.heading")}</h5>
      <p role="status">{t(STATUS_KEYS[readiness.kind], { titles })}</p>
      {title.status === "upcoming" && <p>{t("prerequisites.provisional")}</p>}

      {guide.prerequisites.length > 0 && (
        <SpoilerToggle
          isRevealed={areReasonsRevealed}
          onToggle={() => setAreReasonsRevealed(!areReasonsRevealed)}
          controls={reasonIds}
          showLabel={t("prerequisites.show")}
          hideLabel={t("prerequisites.hide")}
          warning={t("prerequisites.warning")}
        />
      )}

      {LEVELS.map((level) => {
        const items = guide.prerequisites.filter((item) => item.level === level);
        if (items.length === 0) return null;

        return (
          <div key={level}>
            <h6>{t(`prerequisites.levels.${level}`)}</h6>
            <ul>
              {items.map((item) => {
                const isWatched = watched.has(item.id);
                const StatusIcon = isWatched ? Check : Circle;
                return (
                  <li key={item.id}>
                    <span lang="en">{nameOf(item.id)}</span>{" "}
                    <span>
                      <StatusIcon aria-hidden />
                      {t(isWatched ? "prerequisites.watched" : "prerequisites.notWatched")}
                    </span>
                    <p id={`${reasonsId}-${item.id}`} hidden={!areReasonsRevealed}>
                      {item.reason[language]}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}

      {guide.outside && (
        <p>
          <strong>{t("prerequisites.outside")}:</strong> {guide.outside[language]}
        </p>
      )}
    </section>
  );
}
