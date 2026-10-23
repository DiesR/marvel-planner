import { isStorageAvailable, readJson, writeJson } from "../../../lib/storage";

export interface ProgressRepository {
  readonly isPersistent: boolean;
  load(): Promise<string[]>;
  save(watchedIds: string[]): Promise<void>;
}

const STORAGE_KEY = "mcu-planner-v1";

export const localProgressRepository: ProgressRepository = {
  isPersistent: isStorageAvailable,
  load: async () => readJson<string[]>(STORAGE_KEY, []),
  save: async (watchedIds) => writeJson(STORAGE_KEY, watchedIds),
};
