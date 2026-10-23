import type { Localized } from "../guides/types";
import { INFINITY_KEY_SCENES } from "./infinity";
import { MULTIVERSE_KEY_SCENES } from "./multiverse";

const KEY_SCENES: Record<string, Localized[]> = {
  ...INFINITY_KEY_SCENES,
  ...MULTIVERSE_KEY_SCENES,
};

export function getKeyScenes(titleId: string): Localized[] {
  return Object.hasOwn(KEY_SCENES, titleId) ? KEY_SCENES[titleId] : [];
}
