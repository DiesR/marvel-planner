import { describe, expect, it } from "vitest";
import { computePlacement, type Rect } from "../src/components/ui/InfoTip/placement";

const viewport = { width: 1000, height: 800 };
const box = { width: 200, height: 40 };
const anchorAt = (left: number, top: number): Rect => ({
  left,
  top,
  right: left + 20,
  bottom: top + 20,
});

describe("posizione del tooltip", () => {
  it("sta sopra l'icona quando c'è spazio", () => {
    const result = computePlacement(anchorAt(500, 400), box, viewport, "top");
    expect(result.placement).toBe("top");
    expect(result.top).toBeLessThan(400);
  });

  it("passa sotto quando sopra non c'è posto", () => {
    const result = computePlacement(anchorAt(500, 20), box, viewport, "top");
    expect(result.placement).toBe("bottom");
    expect(result.top).toBeGreaterThan(40);
  });

  it("resta dentro lo schermo con un margine di 8 px", () => {
    const left = computePlacement(anchorAt(0, 400), box, viewport, "top");
    expect(left.left).toBe(8);
    const right = computePlacement(anchorAt(990, 400), box, viewport, "top");
    expect(right.left + box.width).toBe(viewport.width - 8);
  });

  it("la freccia punta al centro dell'icona e non esce dalla bolla", () => {
    const centered = computePlacement(anchorAt(500, 400), box, viewport, "top");
    expect(centered.arrow).toBe(95);
    const edge = computePlacement(anchorAt(0, 400), box, viewport, "top");
    expect(edge.arrow).toBeGreaterThanOrEqual(8);
    expect(edge.arrow).toBeLessThanOrEqual(box.width - 18);
  });

  it("rispetta la posizione preferita laterale quando entra", () => {
    const result = computePlacement(anchorAt(500, 400), box, viewport, "right");
    expect(result.placement).toBe("right");
    expect(result.left).toBeGreaterThan(520);
  });

  it("se nessuna posizione entra usa quella preferita", () => {
    const tiny = { width: 100, height: 60 };
    const result = computePlacement(anchorAt(40, 20), { width: 300, height: 200 }, tiny, "top");
    expect(result.placement).toBe("top");
  });
});
