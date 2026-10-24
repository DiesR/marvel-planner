export interface ImportPlan {
  incoming: ReadonlySet<string>;
  merged: ReadonlySet<string>;
  lostByReplacing: number;
  gainedByMerging: number;
}

export function planImport(
  current: ReadonlySet<string>,
  sharedIds: readonly string[],
  knownIds: ReadonlySet<string>,
): ImportPlan {
  const incoming = new Set(sharedIds.filter((id) => knownIds.has(id)));
  const merged = new Set([...current, ...incoming]);
  return {
    incoming,
    merged,
    lostByReplacing: [...current].filter((id) => !incoming.has(id)).length,
    gainedByMerging: merged.size - current.size,
  };
}
