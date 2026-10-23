import { ProgressMeter } from "../../../components/ui/ProgressMeter";
import type { Progress, ProgressStorage } from "../types";

const STORAGE_NOTES: Record<ProgressStorage, string> = {
  account: "I progressi vengono salvati sul tuo account.",
  device: "I progressi vengono salvati su questo dispositivo. Accedi per averli ovunque.",
  none: "Su questo dispositivo i progressi non vengono salvati tra una sessione e l'altra.",
};

interface PlannerSummaryProps {
  progress: Progress;
  storage: ProgressStorage;
  error: string | null;
}

export function PlannerSummary({ progress, storage, error }: PlannerSummaryProps) {
  return (
    <section aria-labelledby="planner-title">
      <p>Marvel Cinematic Universe</p>
      <h1 id="planner-title">Planner di visione</h1>
      <p>
        Tutti i film e le serie del MCU, divisi per saga e fase, in ordine di uscita. Spunta ciò che
        hai già visto.
      </p>
      <ProgressMeter label="Completati" value={progress.done} max={progress.total} />
      <p>{STORAGE_NOTES[storage]}</p>
      {error && <p role="alert">{error}</p>}
    </section>
  );
}
