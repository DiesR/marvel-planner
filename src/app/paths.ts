export const PATHS = {
  home: "/",
  privacy: "/privacy",
  admin: "/admin",
  shared: "/s/:code",
} as const;

export function sharedPath(code: string): string {
  return PATHS.shared.replace(":code", encodeURIComponent(code));
}
