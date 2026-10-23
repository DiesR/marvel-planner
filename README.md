# MCU · Planner di visione

Planner per tenere traccia di film e serie del Marvel Cinematic Universe.
Frontend React + TypeScript (Vite), backend TypeScript su Cloudflare Workers con database D1.

## Primo avvio

```bash
npm install
cp .dev.vars.example .dev.vars   # poi imposta BETTER_AUTH_SECRET con una stringa casuale
npm run db:migrate:local
npm run dev                      # sito e API su http://localhost:5173
```

## Comandi

```bash
npm run dev                 # sviluppo: frontend + Worker + D1 locale
npm run build               # type-check e build di produzione in dist/
npm run lint                # ESLint
npm run format              # Prettier
npm run db:generate         # genera una migrazione da worker/db/schema.ts
npm run db:migrate:local    # applica le migrazioni al database locale
npm run db:migrate:remote   # applica le migrazioni al database di produzione
```

## Struttura

```
src/                        # frontend
├── app/                    # bootstrap: App, router, percorsi
├── pages/                  # una pagina per rotta, compone le feature
├── components/
│   ├── layout/             # header, footer, layout comune
│   └── ui/                 # componenti generici riutilizzabili
├── features/
│   ├── planner/            # catalogo, filtri, progressi
│   └── auth/               # sessione, login, registrazione
└── lib/                    # storage locale, client API

worker/                     # backend
├── index.ts                # app Hono: monta /api/auth e /api/progress
├── auth.ts                 # configurazione Better Auth
├── db/                     # schema Drizzle e client D1
├── middleware/             # contesto per richiesta, utente obbligatorio
└── routes/                 # endpoint API

migrations/                 # migrazioni SQL generate da drizzle-kit
```

## API

| Metodo   | Percorso                 | Descrizione                              |
| -------- | ------------------------ | ---------------------------------------- |
| `*`      | `/api/auth/*`            | Registrazione, login, logout, sessione   |
| `GET`    | `/api/progress`          | Titoli visti dall'utente                 |
| `POST`   | `/api/progress`          | Segna come visti `{ "titleIds": [...] }` |
| `DELETE` | `/api/progress/:titleId` | Rimuove un titolo dai visti              |
| `DELETE` | `/api/progress`          | Azzera i progressi                       |

Gli endpoint `/api/progress` richiedono una sessione valida e operano solo sui dati dell'utente autenticato.
Al login, i progressi salvati sul dispositivo vengono uniti a quelli dell'account.

## Sicurezza

- Password salvate solo come hash (scrypt), minimo 10 caratteri
- Sessioni in cookie `httpOnly`, `secure`, `SameSite=Lax`; richieste da origini estranee rifiutate
- Limite ai tentativi sugli endpoint di autenticazione, salvato su D1
- Input delle API validati con Zod; query parametrizzate tramite Drizzle
- Cancellazione dell'account a cascata su sessioni e progressi
- Segreti in `.dev.vars` (locale, ignorato da git) e nei secret di Cloudflare (produzione)

## Login social

Google e Discord si attivano impostando i secret `GOOGLE_CLIENT_ID`/`GOOGLE_CLIENT_SECRET` e `DISCORD_CLIENT_ID`/`DISCORD_CLIENT_SECRET` con `npx wrangler secret put <NOME>`.

## Pubblicazione

A ogni push su `main` Cloudflare esegue `npm run build` e `npx wrangler deploy`; gli altri branch generano un'anteprima.
Quando cambia lo schema del database: `npm run db:generate`, poi `npm run db:migrate:remote` prima del push.

## Dipendenze

Tutte open source con licenze permissive: React, React Router, Vite, Hono, Better Auth, Zod, ESLint, Prettier (MIT), Drizzle ORM, TypeScript (Apache-2.0), Wrangler (MIT/Apache-2.0), [Lucide](https://lucide.dev) per le icone (ISC).
