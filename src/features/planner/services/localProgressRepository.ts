import { readJson, writeJson } from "../../../lib/storage";
import { STORAGE_KEYS } from "../../../lib/storageKeys";
import type { ProgressRepository } from "./progressRepository";

const STORAGE_KEY = STORAGE_KEYS.progress;

const read = () => readJson<string[]>(STORAGE_KEY, []);
const write = (titleIds: Iterable<string>) => writeJson(STORAGE_KEY, [...titleIds]);

export const localProgressRepository: ProgressRepository = {
  load: async () => read(),
  add: async (titleIds) => write(new Set([...read(), ...titleIds])),
  remove: async (titleId) => write(read().filter((id) => id !== titleId)),
  clear: async () => write([]),
};
