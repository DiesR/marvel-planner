import { describe, expect, it } from "vitest";
import { computeListPosition } from "../src/components/ui/SelectField/position";

const viewport = { width: 1000, height: 800 };
const list = { width: 260, height: 300 };
const anchorAt = (right: number, top: number) => ({
  left: right - 160,
  top,
  right,
  bottom: top + 48,
});

describe("posizione dell'elenco del selettore", () => {
  it("si apre sotto, allineato a destra del pulsante", () => {
    const position = computeListPosition(anchorAt(900, 20), list, viewport);
    expect(position.placement).toBe("below");
    expect(position.top).toBe(20 + 48 + 8);
    expect(position.left).toBe(900 - 260);
  });

  it("passa sopra quando sotto non c'è spazio e sopra sì", () => {
    const position = computeListPosition(anchorAt(900, 600), list, viewport);
    expect(position.placement).toBe("above");
    expect(position.top).toBe(600 - 8 - 300);
  });

  it("resta sotto se non c'è spazio da nessuna parte", () => {
    const small = { width: 1000, height: 200 };
    expect(computeListPosition(anchorAt(900, 20), list, small).placement).toBe("below");
  });

  it("non esce dai bordi dello schermo", () => {
    expect(computeListPosition(anchorAt(100, 20), list, viewport).left).toBe(8);
    expect(computeListPosition(anchorAt(1000, 20), list, viewport).left).toBe(1000 - 260 - 8);
  });
});
