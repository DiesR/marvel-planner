# MCU · Planner di visione

Planner per tenere traccia di film e serie del Marvel Cinematic Universe.
React + TypeScript, costruito con Vite.

## Comandi

```bash
npm install           # prima volta
npm run dev           # server di sviluppo su http://localhost:5173
npm run build         # type-check e build di produzione in dist/
npm run lint          # ESLint
npm run format        # Prettier
```

## Struttura

```
src/
├── app/                  # bootstrap: App, router, percorsi
├── pages/                # una pagina per rotta, compone le feature
├── components/
│   ├── layout/           # header, footer, layout comune
│   └── ui/               # componenti generici riutilizzabili
├── features/
│   ├── planner/          # catalogo, filtri, progressi
│   │   ├── components/
│   │   ├── data/         # catalogo titoli ed etichette
│   │   ├── hooks/
│   │   ├── services/     # persistenza dei progressi
│   │   ├── utils/
│   │   └── types.ts
│   └── auth/             # sessione utente e login
│       ├── components/
│       ├── context/
│       ├── hooks/
│       ├── services/
│       └── types.ts
└── lib/                  # utility trasversali (storage)
```

## Backend

L'interfaccia è già separata dalla persistenza tramite due contratti:

- `AuthService` (`features/auth/services/authService.ts`): oggi implementato da `mockAuthService`, che accetta qualsiasi email/password e salva la sessione in locale.
- `ProgressRepository` (`features/planner/services/progressRepository.ts`): oggi implementato da `localProgressRepository` (localStorage).

Per collegare un backend basta creare implementazioni che chiamano le API (ad esempio `apiAuthService`, `apiProgressRepository`) e passarle ad `AuthProvider` e `useWatched`, senza toccare i componenti.

## Pubblicazione

Il sito è ospitato su Cloudflare Workers come asset statici (configurazione in `wrangler.jsonc`). A ogni push su `main` Cloudflare esegue `npm run build` e pubblica la cartella `dist/`; gli altri branch generano un'anteprima. Il routing usa l'hash (`/#/login`) per funzionare su hosting statico e in un futuro wrapper mobile.

## Dipendenze

Tutte open source con licenze permissive: React, React Router, Vite, ESLint, Prettier (MIT), TypeScript (Apache-2.0), [Lucide](https://lucide.dev) per le icone (ISC).
