export const it = {
  nav: {
    main: "Principale",
    account: "Il tuo account",
    login: "Accedi",
    logout: "Esci",
    language: "Lingua",
  },
  footer: {
    disclaimer: "Sito non ufficiale, non affiliato a Marvel Studios o The Walt Disney Company.",
    legal: "Informazioni legali",
    privacy: "Privacy",
    coffee: "Se ti sono stato utile, offrimi un caffè",
  },
  catalog: {
    sagas: {
      infinity: "Saga dell'Infinito",
      multiverse: "Saga del Multiverso",
    },
    phases: {
      "1": "Fase Uno",
      "2": "Fase Due",
      "3": "Fase Tre",
      "4": "Fase Quattro",
      "5": "Fase Cinque",
      "6": "Fase Sei",
    },
    release: {
      mid: "metà {year}",
      late: "fine {year}",
    },
  },
  planner: {
    eyebrow: "Marvel Cinematic Universe",
    title: "Planner di visione",
    intro:
      "Tutti i film e le serie del MCU, divisi per saga e fase, in ordine di uscita. Spunta ciò che hai già visto.",
    completed: "Completati",
    storage: {
      account: "I progressi vengono salvati sul tuo account.",
      device: "I progressi vengono salvati su questo dispositivo. Accedi per averli ovunque.",
      none: "Su questo dispositivo i progressi non vengono salvati tra una sessione e l'altra.",
    },
    loadError: "Impossibile caricare i progressi. Ricarica la pagina.",
    saveError: "Impossibile salvare la modifica. Controlla la connessione e riprova.",
    resetConfirm: "Azzerare tutti i progressi? Le spunte verranno rimosse.",
    markWatched: 'Segna "{name}" come visto',
    toolbar: {
      label: "Filtri e azioni",
      actions: "Azioni",
      collapseAll: "Comprimi tutto",
      expandAll: "Espandi tutto",
      reset: "Azzera",
    },
    filters: {
      type: "Tipo",
      visibility: "Visibilità",
      hideAlternate: "Nascondi continuità alternativa",
      hideUpcoming: "Nascondi non ancora usciti",
      all: "Tutti",
      film: "Film",
      serie: "Serie",
      special: "Speciali",
    },
    types: {
      film: "Film",
      serie: "Serie",
      special: "Speciale",
    },
    tags: {
      alternate: "Continuità alternativa",
      upcoming: "In arrivo",
    },
    notes: {
      shorts: "corti",
      animated: "animata",
    },
    phase: {
      progress: "Avanzamento {name}",
      empty: "Nessun titolo corrisponde ai filtri.",
    },
    guide: {
      title: "Come leggere il planner",
      orderTerm: "Ordine",
      orderText:
        "La lista segue l'ordine di uscita all'interno di ciascuna fase: è quello consigliato per una prima visione e coincide quasi sempre con la cronologia interna. Le poche eccezioni \"a ritroso\" (Captain America: The First Avenger anni '40, Captain Marvel 1995, Black Widow tra Civil War e Infinity War, Deadpool & Wolverine ambientato nel 2018/2024) contano solo per un rewatch in ordine cronologico stretto.",
      alternateTerm: "Continuità alternativa",
      alternateText:
        "X-Men '97, Your Friendly Neighborhood Spider-Man e Marvel Zombies escono in questo periodo ma sono ambientati in linee temporali separate dalla Sacred Timeline: guardabili in qualsiasi momento, non obbligatori per la trama principale.",
    },
  },
  details: {
    loading: "Caricamento dei dettagli…",
    error: "Dettagli non disponibili al momento.",
    posterAlt: "Locandina di {name}",
    originalTitle: "Titolo originale: {name}",
    release: "Uscita",
    director: "Regia",
    creator: "Ideata da",
    cast: "Cast",
    synopsis: "Sinossi",
    noSynopsis: "Sinossi non disponibile.",
    plot: {
      show: "Mostra la trama",
      hide: "Nascondi la trama",
      warning: "Attenzione: la trama contiene spoiler.",
      episodes: "Episodi",
      fallbackLanguage: "Trama disponibile solo in {language}.",
      sourceBefore: "Testo tratto da",
      sourceLink: "Wikipedia",
      license: "licenza CC BY-SA 4.0",
    },
  },
  auth: {
    email: "Email",
    password: "Password",
    name: "Nome",
    passwordHint: "Almeno {min} caratteri.",
    login: {
      title: "Accedi",
      intro: "Accedi per conservare i tuoi progressi su tutti i dispositivi.",
      button: "Accedi",
      pending: "Accesso in corso…",
      noAccount: "Non hai un account? {link}",
      registerLink: "Registrati",
    },
    register: {
      title: "Crea un account",
      intro: "I progressi già salvati su questo dispositivo verranno aggiunti al tuo account.",
      button: "Crea account",
      pending: "Registrazione in corso…",
      haveAccount: "Hai già un account? {link}",
      loginLink: "Accedi",
      privacyNotice: "Creando un account dichiari di aver letto l'{link}.",
      privacyLink: "informativa sulla privacy",
    },
    errors: {
      invalidCredentials: "Email o password non corretti.",
      invalidEmail: "L'indirizzo email non è valido.",
      wrongPassword: "La password non è corretta.",
      invalidName: "Inserisci un nome valido.",
      userExists: "Esiste già un account con questa email.",
      passwordShort: "La password deve avere almeno {min} caratteri.",
      passwordLong: "La password è troppo lunga.",
      reauthenticate: "Per sicurezza, esci e accedi di nuovo prima di continuare.",
      tooManyRequests: "Troppi tentativi. Attendi qualche minuto e riprova.",
      generic: "Operazione non riuscita. Riprova più tardi.",
    },
  },
  account: {
    title: "Il tuo account",
    profile: {
      heading: "Profilo",
      email: "Email",
      save: "Salva",
      saving: "Salvataggio…",
      saved: "Nome aggiornato.",
    },
    password: {
      heading: "Password",
      current: "Password attuale",
      next: "Nuova password",
      confirm: "Conferma nuova password",
      hint: "Almeno {min} caratteri. Dopo il cambio verrai disconnesso dagli altri dispositivi.",
      mismatch: "Le due password non coincidono.",
      change: "Cambia password",
      changing: "Aggiornamento…",
      changed: "Password aggiornata.",
    },
    delete: {
      heading: "Elimina account",
      warning:
        "L'account, i progressi salvati e tutte le sessioni attive verranno cancellati in modo definitivo. L'operazione non può essere annullata.",
      confirm: "Ho capito che l'eliminazione è definitiva",
      button: "Elimina definitivamente",
      pending: "Eliminazione…",
    },
  },
  notFound: {
    title: "Pagina non trovata",
    back: "Torna al planner",
  },
  privacy: {
    title: "Informativa sulla privacy",
    updated: "Ultimo aggiornamento: {date}",
    controller: {
      heading: "Titolare del trattamento",
      body: "Il titolare del trattamento è {name}. Per qualsiasi richiesta sui tuoi dati puoi scrivere a {email}.",
    },
    data: {
      heading: "Quali dati trattiamo",
      accountLabel: "Dati dell'account",
      accountText:
        "nome, email e password. La password è conservata solo in forma cifrata (hash) e non è mai leggibile.",
      progressLabel: "Progressi",
      progressText: "i titoli che segni come visti e la data in cui li hai segnati.",
      technicalLabel: "Dati tecnici",
      technicalText:
        "indirizzo IP e tipo di browser associati alle sessioni di accesso, usati anche per limitare i tentativi di accesso ripetuti.",
      deviceLabel: "Sul tuo dispositivo",
      deviceText:
        "senza account i progressi restano salvati solo nel tuo browser (localStorage) e non vengono inviati a noi. Nello stesso modo viene ricordata la lingua scelta.",
    },
    purposes: {
      heading: "Perché li trattiamo",
      service:
        "Per fornirti il servizio: creare e gestire l'account e conservare i tuoi progressi (esecuzione del servizio richiesto, art. 6.1.b GDPR).",
      security:
        "Per la sicurezza del servizio e la prevenzione degli abusi (legittimo interesse, art. 6.1.f GDPR).",
      noProfiling:
        "Non usiamo i tuoi dati per pubblicità o profilazione, non li vendiamo e non li cediamo a terzi.",
    },
    cookies: {
      heading: "Cookie",
      body: "Usiamo solo un cookie tecnico di sessione, necessario per mantenerti connesso. Non usiamo cookie di analisi o di profilazione.",
    },
    providers: {
      heading: "Dove sono conservati e chi li tratta",
      body: "Il sito e il database sono ospitati da Cloudflare, con database situato nell'Europa occidentale. Cloudflare agisce come responsabile del trattamento. Le informazioni sui titoli (sinossi, trame, cast, locandine e sfondi) provengono da TMDB e da Wikipedia; le immagini sono caricate direttamente dai server di TMDB, che riceve quindi l'indirizzo IP di chi apre i dettagli di un titolo. Cloudflare e TMDB hanno sede negli Stati Uniti: alcuni dati potrebbero essere trasferiti fuori dall'Unione europea, nel rispetto delle garanzie previste dal GDPR (EU-US Data Privacy Framework e clausole contrattuali standard).",
    },
    retention: {
      heading: "Per quanto tempo",
      body: "Conserviamo i dati finché il tuo account esiste. Le sessioni scadono dopo 7 giorni di inattività. Quando elimini l'account, nome, email, progressi e sessioni vengono cancellati subito; eventuali copie di backup tecniche vengono sovrascritte entro 30 giorni.",
    },
    rights: {
      heading: "I tuoi diritti",
      body: "Puoi chiedere in qualsiasi momento l'accesso, la rettifica, la cancellazione, la limitazione o la portabilità dei tuoi dati, oppure opporti al trattamento, scrivendo a {email}. Puoi modificare il nome ed eliminare l'account direttamente dalla pagina {account}. Hai inoltre il diritto di proporre reclamo al Garante per la protezione dei dati personali ({garante}).",
      accountLink: "Il tuo account",
    },
    minors: {
      heading: "Minori",
      body: "Il servizio non è destinato a persone con meno di 14 anni.",
    },
    changes: {
      heading: "Modifiche",
      body: "Eventuali modifiche a questa informativa saranno pubblicate su questa pagina, con la data di aggiornamento indicata in alto.",
    },
  },
};

export type Messages = typeof it;
