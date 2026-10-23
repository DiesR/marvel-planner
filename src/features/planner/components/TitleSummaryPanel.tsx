import { useI18n } from "../../../i18n/useI18n";
import { posterUrl } from "../utils/format";
import { PlotSection } from "./PlotSection";
import { SynopsisSection } from "./SynopsisSection";
import { WithTitleDetails } from "./WithTitleDetails";

interface TitleSummaryPanelProps {
  titleId: string;
}

export function TitleSummaryPanel({ titleId }: TitleSummaryPanelProps) {
  const { t } = useI18n();

  return (
    <WithTitleDetails titleId={titleId}>
      {(details) => (
        <div>
          {details.posterPath && (
            <img
              src={posterUrl(details.posterPath)}
              alt={t("details.posterAlt", { name: details.name })}
              width={342}
              loading="lazy"
            />
          )}
          <SynopsisSection synopsis={details.synopsis} />
          <PlotSection details={details} />
        </div>
      )}
    </WithTitleDetails>
  );
}
