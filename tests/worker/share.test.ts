import { beforeEach, describe, expect, it } from "vitest";
import { SHARE_CODE_PATTERN } from "../../shared/share";
import { purgeExpiredData } from "../../worker/services/maintenance";
import {
  generateShareCode,
  getActiveShare,
  getSharedPlanner,
  revokeShare,
  saveShare,
} from "../../worker/services/share";
import { createTestDatabase } from "./support/testDatabase";

const DAY_MS = 24 * 60 * 60 * 1000;
const now = new Date("2026-10-24T10:00:00Z");
const later = (days: number) => new Date(now.getTime() + days * DAY_MS);

let context: ReturnType<typeof createTestDatabase>;
const db = () => context.db;

beforeEach(() => {
  context = createTestDatabase();
  const at = now.getTime();
  context.sqlite.exec(`
    INSERT INTO user (id, name, email, email_verified, created_at, updated_at)
    VALUES ('u1', 'Iron Fan', 'a@example.com', 0, ${at}, ${at}),
           ('u2', 'Altro', 'b@example.com', 0, ${at}, ${at});
    INSERT INTO watched_title (user_id, title_id, watched_at)
    VALUES ('u1', 'i-iron-man', ${at}), ('u1', 'i-thor', ${at}), ('u1', 'i-non-esiste', ${at});
  `);
});

describe("codici di condivisione", () => {
  it("sono casuali e rispettano il formato atteso", () => {
    const codes = new Set(Array.from({ length: 50 }, generateShareCode));
    expect(codes.size).toBe(50);
    for (const code of codes) expect(code).toMatch(SHARE_CODE_PATTERN);
  });
});

describe("link di condivisione", () => {
  it("senza link attivo non restituisce nulla", async () => {
    expect(await getActiveShare(db(), "u1", now)).toBeNull();
  });

  it("riusa il link attivo quando non si chiede di rigenerarlo", async () => {
    const first = await saveShare(db(), "u1", 7, false, now);
    const second = await saveShare(db(), "u1", 30, false, now);
    expect(second).toEqual(first);
    expect(first.expiresAt).toBe(later(7).toISOString());
  });

  it("rigenera il codice e applica la nuova durata", async () => {
    const first = await saveShare(db(), "u1", 7, false, now);
    const regenerated = await saveShare(db(), "u1", null, true, now);
    expect(regenerated.code).not.toBe(first.code);
    expect(regenerated.expiresAt).toBeNull();
    expect(await getSharedPlanner(db(), first.code, now)).toBeNull();
  });

  it("un link scaduto non è attivo e viene sostituito da uno nuovo", async () => {
    const expired = await saveShare(db(), "u1", 7, false, now);
    expect(await getActiveShare(db(), "u1", later(8))).toBeNull();
    const fresh = await saveShare(db(), "u1", 30, false, later(8));
    expect(fresh.code).not.toBe(expired.code);
  });

  it("si può disattivare", async () => {
    const link = await saveShare(db(), "u1", null, false, now);
    await revokeShare(db(), "u1");
    expect(await getSharedPlanner(db(), link.code, now)).toBeNull();
  });
});

describe("pagina condivisa", () => {
  it("mostra il nome da supereroe e solo i titoli del catalogo", async () => {
    const link = await saveShare(db(), "u1", 30, false, now);
    const shared = await getSharedPlanner(db(), link.code, now);
    expect(shared?.name).toBe("Iron Fan");
    expect(shared?.titleIds.toSorted()).toEqual(["i-iron-man", "i-thor"]);
    expect(shared).not.toHaveProperty("email");
  });

  it("smette di funzionare alla scadenza", async () => {
    const link = await saveShare(db(), "u1", 7, false, now);
    expect(await getSharedPlanner(db(), link.code, later(6))).not.toBeNull();
    expect(await getSharedPlanner(db(), link.code, later(8))).toBeNull();
  });

  it("un codice inesistente non rivela nulla", async () => {
    expect(await getSharedPlanner(db(), generateShareCode(), now)).toBeNull();
  });
});

describe("pulizia e cancellazione", () => {
  it("la pulizia periodica elimina solo i link scaduti", async () => {
    await saveShare(db(), "u1", 7, false, now);
    await saveShare(db(), "u2", null, false, now);
    await purgeExpiredData(db(), later(10).getTime());
    expect(await getActiveShare(db(), "u2", later(10))).not.toBeNull();
    const rows = context.sqlite.prepare("SELECT user_id FROM share_link").all();
    expect(rows).toEqual([{ user_id: "u2" }]);
  });

  it("eliminando l'account sparisce anche il link", async () => {
    await saveShare(db(), "u1", null, false, now);
    context.sqlite.exec("DELETE FROM user WHERE id = 'u1'");
    expect(context.sqlite.prepare("SELECT * FROM share_link").all()).toEqual([]);
  });
});
