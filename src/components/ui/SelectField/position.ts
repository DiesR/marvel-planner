export interface AnchorRect {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

export interface Size {
  width: number;
  height: number;
}

export interface ListPosition {
  left: number;
  top: number;
  placement: "below" | "above";
}

const VIEWPORT_MARGIN = 8;
const GAP = 8;

export function computeListPosition(anchor: AnchorRect, list: Size, viewport: Size): ListPosition {
  const maxLeft = viewport.width - list.width - VIEWPORT_MARGIN;
  const left = Math.max(VIEWPORT_MARGIN, Math.min(anchor.right - list.width, maxLeft));

  const spaceBelow = viewport.height - anchor.bottom - GAP - VIEWPORT_MARGIN;
  const spaceAbove = anchor.top - GAP - VIEWPORT_MARGIN;
  const placement = list.height > spaceBelow && spaceAbove > spaceBelow ? "above" : "below";
  const top = placement === "below" ? anchor.bottom + GAP : anchor.top - GAP - list.height;

  return {
    left,
    top: Math.max(VIEWPORT_MARGIN, top),
    placement,
  };
}
