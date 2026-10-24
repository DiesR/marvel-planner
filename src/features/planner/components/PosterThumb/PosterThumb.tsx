import { useI18n } from "../../../../i18n/useI18n";
import { useTitleDetails } from "../../hooks/useTitleDetails";
import { posterUrl } from "../../utils/format";

interface PosterThumbProps {
  titleId: string;
  isLoaded: boolean;
}

function LoadedPoster({ titleId }: { titleId: string }) {
  const { t } = useI18n();
  const state = useTitleDetails(titleId);

  if (state.status !== "ready" || !state.details.posterPath) return null;
  return (
    <img
      src={posterUrl(state.details.posterPath)}
      alt={t("details.posterAlt", { name: state.details.name })}
      loading="lazy"
    />
  );
}

export function PosterThumb({ titleId, isLoaded }: PosterThumbProps) {
  return <div className="poster-thumb">{isLoaded && <LoadedPoster titleId={titleId} />}</div>;
}
