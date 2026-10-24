import { sharedPath } from "../../../app/paths";

export function shareUrl(code: string): string {
  return `${window.location.origin}${sharedPath(code)}`;
}
