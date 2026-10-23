import type { ReactNode } from "react";
import type { TitleDetails } from "../../../../shared/titleDetails";
import { useI18n } from "../../../i18n/useI18n";
import { useTitleDetails } from "../hooks/useTitleDetails";

interface WithTitleDetailsProps {
  titleId: string;
  children: (details: TitleDetails) => ReactNode;
}

export function WithTitleDetails({ titleId, children }: WithTitleDetailsProps) {
  const { t } = useI18n();
  const state = useTitleDetails(titleId);

  if (state.status === "loading") return <p role="status">{t("details.loading")}</p>;

  if (state.status === "error") {
    return (
      <div role="alert">
        <p>{t("details.error")}</p>
        <button type="button" onClick={state.retry}>
          {t("common.retry")}
        </button>
      </div>
    );
  }

  return <>{children(state.details)}</>;
}
