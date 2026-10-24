import { useI18n } from "../../../i18n/useI18n";
import { useAdminOverview } from "../hooks/useAdminOverview";
import { AutomationSection } from "./AutomationSection";
import { CandidatesSection } from "./CandidatesSection";
import { MaintenanceSection } from "./MaintenanceSection";

export function AdminDashboard() {
  const { t } = useI18n();
  const { state, hasActionFailed, toggleMaintenance, dismiss } = useAdminOverview();

  return (
    <section aria-labelledby="admin-title">
      <h1 id="admin-title">{t("admin.title")}</h1>

      {state.status === "loading" && <p role="status">{t("common.loading")}</p>}
      {state.status === "error" && <p role="alert">{t("admin.error")}</p>}
      {hasActionFailed && <p role="alert">{t("admin.actionError")}</p>}

      {state.status === "ready" && (
        <>
          <MaintenanceSection
            isOn={state.overview.maintenance}
            onChange={(enabled) => void toggleMaintenance(enabled)}
          />
          <AutomationSection
            lastRuns={state.overview.lastRuns}
            tmdbConfigured={state.overview.tmdbConfigured}
          />
          <CandidatesSection
            candidates={state.overview.candidates}
            onDismiss={(key) => void dismiss(key)}
          />
        </>
      )}
    </section>
  );
}
