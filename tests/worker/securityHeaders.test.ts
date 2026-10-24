import { Hono } from "hono";
import { describe, expect, it } from "vitest";
import { securityHeaders } from "../../worker/middleware/securityHeaders";
import type { AppEnv } from "../../worker/types";

const app = new Hono<AppEnv>();
app.use(securityHeaders);
app.get("*", (c) => c.text("ok"));

const headersOf = async (url: string) => (await app.request(url)).headers;

describe("intestazioni di sicurezza su HTTPS", () => {
  it("limitano ogni tipo di risorsa al nostro sito, con la sola eccezione del player", async () => {
    const csp = (await headersOf("https://site.test/")).get("content-security-policy") ?? "";
    for (const directive of [
      "default-src 'self'",
      "script-src 'self'",
      "style-src 'self'",
      "connect-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "frame-src https://www.youtube-nocookie.com",
    ]) {
      expect(csp).toContain(directive);
    }
    expect(csp).not.toContain("unsafe-inline");
    expect(csp).not.toContain("unsafe-eval");
  });

  it("impediscono sniffing, incorniciamento e invio del percorso ad altri siti", async () => {
    const headers = await headersOf("https://site.test/");
    expect(headers.get("x-content-type-options")).toBe("nosniff");
    expect(headers.get("x-frame-options")).toMatch(/SAMEORIGIN|DENY/);
    expect(headers.get("referrer-policy")).toBe("strict-origin-when-cross-origin");
    expect(headers.get("strict-transport-security")).toContain("max-age=");
  });

  it("disattivano fotocamera, microfono, posizione e pagamenti", async () => {
    const policy = (await headersOf("https://site.test/")).get("permissions-policy") ?? "";
    for (const feature of ["camera", "microphone", "geolocation", "payment"]) {
      expect(policy).toContain(`${feature}=()`);
    }
  });
});
