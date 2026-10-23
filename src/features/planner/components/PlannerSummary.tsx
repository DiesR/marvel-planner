import { ProgressMeter } from "../../../components/ui/ProgressMeter";
import type { Progress } from "../types";

interface PlannerSummaryProps {
  progress: Progress;
  isPersistent: boolean;
}

export function PlannerSummary({ progress, isPersistent }: PlannerSummaryProps) {
  return (
    <section aria-labelledby="planner-title">
      <p>Marvel Cinematic Universe</p>
      <h1 id="planner-title">Planner di visione</h1>
      <p>
        Tutti i film e le serie del MCU, divisi per saga e fase, in ordine di uscita. Spunta ciò che
        hai già visto.
      </p>
      <ProgressMeter label="Completati" value={progress.done} max={progress.total} />
      <p>
        {isPersistent
          ? "I progressi vengono salvati automaticamente su questo dispositivo."
          : "Su questo dispositivo i progressi non vengono salvati tra una sessione e l'altra."}
      </p>
    </section>
  );
}
