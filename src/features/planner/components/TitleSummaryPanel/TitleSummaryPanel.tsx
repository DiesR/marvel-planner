import { PlotSection } from "../PlotSection";
import { SynopsisSection } from "../SynopsisSection";
import { WithTitleDetails } from "../WithTitleDetails";

interface TitleSummaryPanelProps {
  titleId: string;
}

export function TitleSummaryPanel({ titleId }: TitleSummaryPanelProps) {
  return (
    <WithTitleDetails titleId={titleId}>
      {(details) => (
        <div className="title-summary">
          <SynopsisSection synopsis={details.synopsis} />
          <PlotSection details={details} />
        </div>
      )}
    </WithTitleDetails>
  );
}
