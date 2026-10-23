import type { Prerequisite, PrerequisiteLevel } from "../data/guides/types";

export type Readiness =
  | { kind: "standalone" }
  | { kind: "missingEssential"; missingIds: string[] }
  | { kind: "ready" }
  | { kind: "wellPrepared" }
  | { kind: "complete" };

function missingAt(
  prerequisites: Prerequisite[],
  level: PrerequisiteLevel,
  watched: ReadonlySet<string>,
): string[] {
  return prerequisites
    .filter((item) => item.level === level && !watched.has(item.id))
    .map((item) => item.id);
}

export function getReadiness(
  prerequisites: Prerequisite[],
  watched: ReadonlySet<string>,
): Readiness {
  if (prerequisites.length === 0) return { kind: "standalone" };

  const missingEssential = missingAt(prerequisites, "essential", watched);
  if (missingEssential.length > 0)
    return { kind: "missingEssential", missingIds: missingEssential };
  if (missingAt(prerequisites, "recommended", watched).length > 0) return { kind: "ready" };
  if (missingAt(prerequisites, "optional", watched).length > 0) return { kind: "wellPrepared" };
  return { kind: "complete" };
}
