import { useState } from "react";
import type { SharedPlanner } from "../../../../../shared/share";
import { Modal } from "../../../../components/ui/Modal";
import { useI18n } from "../../../../i18n/useI18n";
import { ProgressMeter } from "../../../../components/ui/ProgressMeter";
import type { ProgressStorage } from "../../../planner/types";
import { planImport } from "../../../planner/utils/importPlan";
import { useSharedPlanner } from "../../hooks/useSharedPlanner";

export type ImportMode = "merge" | "replace";

interface ImportPreviewProps {
  planner: SharedPlanner;
  watched: ReadonlySet<string>;
  knownIds: ReadonlySet<string>;
  storage: ProgressStorage;
  isLoading: boolean;
  onImport: (ids: ReadonlySet<string>, mode: ImportMode) => void;
  onClose: () => void;
}

function ImportPreview({
  planner,
  watched,
  knownIds,
  storage,
  isLoading,
  onImport,
  onClose,
}: ImportPreviewProps) {
  const { t } = useI18n();
  const [isConfirmingReplace, setIsConfirmingReplace] = useState(false);
  const plan = planImport(watched, planner.titleIds, knownIds);
  const done = plan.incoming.size;
  const total = knownIds.size;
  const percent = total > 0 ? Math.round((done / total) * 100) : 0;

  if (done === 0) {
    return (
      <div>
        <p>{t("import.empty", { name: planner.name })}</p>
        <button type="button" className="btn btn--soft" onClick={onClose}>
          {t("import.close")}
        </button>
      </div>
    );
  }

  const replace = () => {
    if (plan.lostByReplacing > 0 && !isConfirmingReplace) {
      setIsConfirmingReplace(true);
      return;
    }
    onImport(plan.incoming, "replace");
  };

  return (
    <div className="import-preview">
      <p>{t("import.summary", { name: planner.name, done, total, percent })}</p>
      <ProgressMeter label={t("planner.completed")} value={done} max={total} />
      <p>
        {watched.size > 0 ? t("import.current", { count: watched.size }) : t("import.currentEmpty")}
      </p>
      {storage !== "account" && <p>{t("import.anonymousNote")}</p>}

      <section className="import-preview__choice">
        <button
          type="button"
          className="btn btn--primary btn--lg"
          disabled={isLoading}
          onClick={() => onImport(plan.merged, "merge")}
        >
          {t("import.merge")}
        </button>
        <p>{t("import.mergeHint", { count: plan.gainedByMerging })}</p>
      </section>

      <section className="import-preview__choice">
        <p>{t("import.replaceHint", { name: planner.name })}</p>
        {isConfirmingReplace && (
          <p role="alert">{t("import.replaceWarning", { count: plan.lostByReplacing })}</p>
        )}
        <button
          type="button"
          className="btn btn--soft btn--lg"
          disabled={isLoading}
          onClick={replace}
        >
          {isConfirmingReplace ? t("import.replaceConfirm") : t("import.replace")}
        </button>
      </section>

      <button type="button" className="btn btn--soft" onClick={onClose}>
        {t("import.close")}
      </button>
    </div>
  );
}

interface ImportSharedDialogProps {
  code: string;
  watched: ReadonlySet<string>;
  knownIds: ReadonlySet<string>;
  storage: ProgressStorage;
  isLoading: boolean;
  onImport: (ids: ReadonlySet<string>, mode: ImportMode) => void;
  onClose: () => void;
}

function ImportContent({ code, onClose, ...preview }: ImportSharedDialogProps) {
  const { t } = useI18n();
  const state = useSharedPlanner(code);

  if (state.status === "loading") return <p role="status">{t("import.loading")}</p>;

  if (state.status === "notFound") {
    return (
      <div role="alert">
        <p>{t("import.notFound")}</p>
        <button type="button" className="btn btn--soft" onClick={onClose}>
          {t("import.close")}
        </button>
      </div>
    );
  }

  if (state.status === "error") {
    return (
      <div role="alert">
        <p>{t("import.error")}</p>
        <button type="button" className="btn btn--soft" onClick={state.retry}>
          {t("common.retry")}
        </button>
        <button type="button" className="btn btn--soft" onClick={onClose}>
          {t("import.close")}
        </button>
      </div>
    );
  }

  return <ImportPreview planner={state.planner} onClose={onClose} {...preview} />;
}

export function ImportSharedDialog(props: ImportSharedDialogProps) {
  const { t } = useI18n();

  return (
    <Modal isOpen title={t("import.title")} onClose={props.onClose}>
      <ImportContent {...props} />
    </Modal>
  );
}
