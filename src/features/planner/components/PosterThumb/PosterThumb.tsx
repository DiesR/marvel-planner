import { useI18n } from "../../../../i18n/useI18n";
import { useTitleDetails } from "../../hooks/useTitleDetails";
import { posterUrl } from "../../utils/format";

interface PosterThumbProps {
  titleId: string;
}

export function PosterThumb({ titleId }: PosterThumbProps) {
  const { t } = useI18n();
  const state = useTitleDetails(titleId);

  return (
    <div className="poster-thumb">
      {state.status === "loading" && (
        <span className="poster-thumb__loading">{t("common.loading")}</span>
      )}
      {state.status === "ready" && state.details.posterPath && (
        <img
          src={posterUrl(state.details.posterPath)}
          alt={t("details.posterAlt", { name: state.details.name })}
        />
      )}
    </div>
  );
}
