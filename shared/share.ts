export const SHARE_DURATIONS = [7, 30, null] as const;

export type ShareDuration = (typeof SHARE_DURATIONS)[number];

export const SHARE_CODE_PATTERN = /^[A-Za-z0-9_-]{22}$/;

export interface ShareLinkInfo {
  code: string;
  expiresAt: string | null;
}

export interface SharedPlanner {
  name: string;
  titleIds: string[];
  expiresAt: string | null;
}
