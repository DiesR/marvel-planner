import type { Messages } from "./it";

export const de: Messages = {
  nav: {
    main: "Hauptnavigation",
    account: "Dein Konto",
    login: "Anmelden",
    logout: "Abmelden",
    language: "Sprache",
  },
  footer: {
    disclaimer:
      "Inoffizielle Seite, nicht mit Marvel Studios oder The Walt Disney Company verbunden.",
    legal: "Rechtliche Hinweise",
    privacy: "Datenschutz",
    coffee: "Wenn ich dir weitergeholfen habe, spendier mir einen Kaffee",
  },
  catalog: {
    sagas: {
      infinity: "Die Infinity-Saga",
      multiverse: "Die Multiverse-Saga",
    },
    phases: {
      "1": "Phase Eins",
      "2": "Phase Zwei",
      "3": "Phase Drei",
      "4": "Phase Vier",
      "5": "Phase Fünf",
      "6": "Phase Sechs",
    },
    release: {
      mid: "Mitte {year}",
      late: "Ende {year}",
    },
  },
  planner: {
    eyebrow: "Marvel Cinematic Universe",
    title: "Watch-Planer",
    intro:
      "Alle Filme und Serien des MCU, nach Saga und Phase geordnet, in der Reihenfolge ihres Erscheinens. Hake ab, was du schon gesehen hast.",
    completed: "Abgeschlossen",
    storage: {
      account: "Dein Fortschritt wird in deinem Konto gespeichert.",
      device:
        "Dein Fortschritt wird auf diesem Gerät gespeichert. Melde dich an, um ihn überall zu haben.",
      none: "Auf diesem Gerät wird dein Fortschritt nicht zwischen Sitzungen gespeichert.",
    },
    loadError: "Dein Fortschritt konnte nicht geladen werden. Lade die Seite neu.",
    saveError:
      "Die Änderung konnte nicht gespeichert werden. Prüfe deine Verbindung und versuche es erneut.",
    resetConfirm: "Gesamten Fortschritt zurücksetzen? Die Häkchen werden entfernt.",
    markWatched: "„{name}“ als gesehen markieren",
    toolbar: {
      label: "Filter und Aktionen",
      actions: "Aktionen",
      collapseAll: "Alle einklappen",
      expandAll: "Alle ausklappen",
      reset: "Zurücksetzen",
    },
    filters: {
      type: "Art",
      visibility: "Sichtbarkeit",
      hideAlternate: "Alternative Kontinuität ausblenden",
      hideUpcoming: "Noch nicht erschienene ausblenden",
      all: "Alle",
      film: "Filme",
      serie: "Serien",
      special: "Specials",
    },
    types: {
      film: "Film",
      serie: "Serie",
      special: "Special",
    },
    tags: {
      alternate: "Alternative Kontinuität",
      upcoming: "Demnächst",
    },
    notes: {
      shorts: "Kurzfilme",
      animated: "animiert",
    },
    phase: {
      progress: "Fortschritt {name}",
      empty: "Kein Titel entspricht den Filtern.",
    },
    guide: {
      title: "So liest du den Planer",
      orderTerm: "Reihenfolge",
      orderText:
        "Die Liste folgt innerhalb jeder Phase der Erscheinungsreihenfolge: Sie ist für das erste Anschauen empfohlen und deckt sich fast immer mit der internen Chronologie. Die wenigen „rückwärtigen“ Ausnahmen (Captain America: The First Avenger in den 1940ern, Captain Marvel 1995, Black Widow zwischen Civil War und Infinity War, Deadpool & Wolverine in 2018/2024) sind nur für ein streng chronologisches erneutes Anschauen relevant.",
      alternateTerm: "Alternative Kontinuität",
      alternateText:
        "X-Men '97, Your Friendly Neighborhood Spider-Man und Marvel Zombies erscheinen in diesem Zeitraum, spielen aber in Zeitlinien, die von der Sacred Timeline getrennt sind: Sie lassen sich jederzeit ansehen und sind für die Haupthandlung nicht erforderlich.",
    },
  },
  details: {
    loading: "Details werden geladen …",
    error: "Details sind im Moment nicht verfügbar.",
    posterAlt: "Poster von {name}",
    originalTitle: "Originaltitel: {name}",
    release: "Erscheinungsdatum",
    director: "Regie",
    creator: "Entwickelt von",
    cast: "Besetzung",
    synopsis: "Kurzbeschreibung",
    noSynopsis: "Keine Kurzbeschreibung verfügbar.",
    plot: {
      show: "Handlung anzeigen",
      hide: "Handlung ausblenden",
      warning: "Achtung: Die Handlung enthält Spoiler.",
      episodes: "Episoden",
      fallbackLanguage: "Handlung nur auf {language} verfügbar.",
      sourceBefore: "Text von",
      sourceLink: "Wikipedia",
      license: "Lizenz CC BY-SA 4.0",
    },
  },
  auth: {
    email: "E-Mail",
    password: "Passwort",
    name: "Name",
    passwordHint: "Mindestens {min} Zeichen.",
    login: {
      title: "Anmelden",
      intro: "Melde dich an, um deinen Fortschritt auf allen Geräten zu behalten.",
      button: "Anmelden",
      pending: "Anmeldung läuft …",
      noAccount: "Noch kein Konto? {link}",
      registerLink: "Registrieren",
    },
    register: {
      title: "Konto erstellen",
      intro: "Der bereits auf diesem Gerät gespeicherte Fortschritt wird deinem Konto hinzugefügt.",
      button: "Konto erstellen",
      pending: "Konto wird erstellt …",
      haveAccount: "Schon ein Konto? {link}",
      loginLink: "Anmelden",
      privacyNotice: "Mit der Erstellung eines Kontos bestätigst du, die {link} gelesen zu haben.",
      privacyLink: "Datenschutzerklärung",
    },
    errors: {
      invalidCredentials: "E-Mail oder Passwort sind nicht korrekt.",
      invalidEmail: "Die E-Mail-Adresse ist ungültig.",
      wrongPassword: "Das Passwort ist nicht korrekt.",
      invalidName: "Gib einen gültigen Namen ein.",
      userExists: "Mit dieser E-Mail existiert bereits ein Konto.",
      passwordShort: "Das Passwort muss mindestens {min} Zeichen lang sein.",
      passwordLong: "Das Passwort ist zu lang.",
      reauthenticate: "Melde dich aus Sicherheitsgründen ab und erneut an, bevor du fortfährst.",
      tooManyRequests: "Zu viele Versuche. Warte einige Minuten und versuche es erneut.",
      generic: "Der Vorgang ist fehlgeschlagen. Versuche es später erneut.",
    },
  },
  account: {
    title: "Dein Konto",
    profile: {
      heading: "Profil",
      email: "E-Mail",
      save: "Speichern",
      saving: "Wird gespeichert …",
      saved: "Name aktualisiert.",
    },
    password: {
      heading: "Passwort",
      current: "Aktuelles Passwort",
      next: "Neues Passwort",
      confirm: "Neues Passwort bestätigen",
      hint: "Mindestens {min} Zeichen. Nach der Änderung wirst du auf deinen anderen Geräten abgemeldet.",
      mismatch: "Die beiden Passwörter stimmen nicht überein.",
      change: "Passwort ändern",
      changing: "Wird aktualisiert …",
      changed: "Passwort aktualisiert.",
    },
    delete: {
      heading: "Konto löschen",
      warning:
        "Dein Konto, der gespeicherte Fortschritt und alle aktiven Sitzungen werden endgültig gelöscht. Dies kann nicht rückgängig gemacht werden.",
      confirm: "Ich habe verstanden, dass das Löschen endgültig ist",
      button: "Endgültig löschen",
      pending: "Wird gelöscht …",
    },
  },
  notFound: {
    title: "Seite nicht gefunden",
    back: "Zurück zum Planer",
  },
  privacy: {
    title: "Datenschutzerklärung",
    updated: "Zuletzt aktualisiert: {date}",
    controller: {
      heading: "Verantwortlicher",
      body: "Verantwortlicher für die Datenverarbeitung ist {name}. Bei Anfragen zu deinen Daten kannst du an {email} schreiben.",
    },
    data: {
      heading: "Welche Daten wir verarbeiten",
      accountLabel: "Kontodaten",
      accountText:
        "Name, E-Mail und Passwort. Das Passwort wird nur verschlüsselt (Hash) gespeichert und ist nie lesbar.",
      progressLabel: "Fortschritt",
      progressText: "die Titel, die du als gesehen markierst, und das Datum der Markierung.",
      technicalLabel: "Technische Daten",
      technicalText:
        "IP-Adresse und Browsertyp, die den Anmeldesitzungen zugeordnet sind und auch dazu dienen, wiederholte Anmeldeversuche zu begrenzen.",
      deviceLabel: "Auf deinem Gerät",
      deviceText:
        "ohne Konto bleibt dein Fortschritt nur in deinem Browser (localStorage) gespeichert und wird nicht an uns übermittelt. Die gewählte Sprache wird auf dieselbe Weise gemerkt.",
    },
    purposes: {
      heading: "Warum wir sie verarbeiten",
      service:
        "Um dir den Dienst bereitzustellen: Konto erstellen und verwalten und deinen Fortschritt speichern (Erfüllung des gewünschten Dienstes, Art. 6 Abs. 1 lit. b DSGVO).",
      security:
        "Für die Sicherheit des Dienstes und die Missbrauchsprävention (berechtigtes Interesse, Art. 6 Abs. 1 lit. f DSGVO).",
      noProfiling:
        "Wir verwenden deine Daten nicht für Werbung oder Profiling, wir verkaufen sie nicht und geben sie nicht an Dritte weiter.",
    },
    cookies: {
      heading: "Cookies",
      body: "Wir verwenden nur ein technisches Sitzungs-Cookie, das nötig ist, um dich angemeldet zu halten. Wir verwenden keine Analyse- oder Profiling-Cookies.",
    },
    providers: {
      heading: "Wo sie gespeichert werden und wer sie verarbeitet",
      body: "Die Seite und die Datenbank werden von Cloudflare gehostet, die Datenbank befindet sich in Westeuropa. Cloudflare handelt als Auftragsverarbeiter. Die Informationen zu den Titeln (Kurzbeschreibungen, Handlungen, Besetzung, Poster und Hintergrundbilder) stammen von TMDB und Wikipedia; Bilder werden direkt von den Servern von TMDB geladen, das somit die IP-Adresse derjenigen erhält, die die Details eines Titels öffnen. Cloudflare und TMDB haben ihren Sitz in den Vereinigten Staaten: Einige Daten können außerhalb der Europäischen Union übermittelt werden, unter Einhaltung der von der DSGVO vorgesehenen Garantien (EU-US Data Privacy Framework und Standardvertragsklauseln).",
    },
    retention: {
      heading: "Wie lange wir sie speichern",
      body: "Wir speichern deine Daten, solange dein Konto besteht. Sitzungen laufen nach 7 Tagen Inaktivität ab. Wenn du dein Konto löschst, werden Name, E-Mail, Fortschritt und Sitzungen sofort gelöscht; eventuelle technische Sicherungskopien werden innerhalb von 30 Tagen überschrieben.",
    },
    rights: {
      heading: "Deine Rechte",
      body: "Du kannst jederzeit Auskunft, Berichtigung, Löschung, Einschränkung oder Übertragbarkeit deiner Daten verlangen oder der Verarbeitung widersprechen, indem du an {email} schreibst. Deinen Namen kannst du ändern und dein Konto löschen direkt auf der Seite {account}. Außerdem hast du das Recht, bei der italienischen Datenschutzbehörde, dem Garante, Beschwerde einzulegen ({garante}).",
      accountLink: "Dein Konto",
    },
    minors: {
      heading: "Minderjährige",
      body: "Der Dienst richtet sich nicht an Personen unter 14 Jahren.",
    },
    changes: {
      heading: "Änderungen",
      body: "Änderungen dieser Erklärung werden auf dieser Seite veröffentlicht, mit dem oben angegebenen Aktualisierungsdatum.",
    },
  },
};
