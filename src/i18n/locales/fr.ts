import type { Messages } from "./it";

export const fr: Messages = {
  nav: {
    main: "Principale",
    account: "Votre compte",
    login: "Se connecter",
    logout: "Se déconnecter",
    language: "Langue",
  },
  footer: {
    disclaimer: "Site non officiel, non affilié à Marvel Studios ni à The Walt Disney Company.",
    legal: "Informations légales",
    privacy: "Confidentialité",
    coffee: "Si je vous ai été utile, offrez-moi un café",
  },
  catalog: {
    sagas: {
      infinity: "La Saga de l'Infini",
      multiverse: "La Saga du Multivers",
    },
    phases: {
      "1": "Phase 1",
      "2": "Phase 2",
      "3": "Phase 3",
      "4": "Phase 4",
      "5": "Phase 5",
      "6": "Phase 6",
    },
    release: {
      mid: "mi-{year}",
      late: "fin {year}",
    },
  },
  planner: {
    eyebrow: "Marvel Cinematic Universe",
    title: "Planificateur de visionnage",
    intro:
      "Tous les films et séries du MCU, classés par saga et par phase, dans l'ordre de sortie. Cochez ce que vous avez déjà vu.",
    completed: "Terminés",
    storage: {
      account: "Votre progression est enregistrée sur votre compte.",
      device:
        "Votre progression est enregistrée sur cet appareil. Connectez-vous pour la retrouver partout.",
      none: "Sur cet appareil, votre progression n'est pas conservée d'une session à l'autre.",
    },
    loadError: "Impossible de charger votre progression. Rechargez la page.",
    saveError: "Impossible d'enregistrer la modification. Vérifiez votre connexion et réessayez.",
    resetConfirm: "Réinitialiser toute la progression ? Les cases cochées seront supprimées.",
    markWatched: "Marquer « {name} » comme vu",
    toolbar: {
      label: "Filtres et actions",
      actions: "Actions",
      collapseAll: "Tout réduire",
      expandAll: "Tout développer",
      reset: "Réinitialiser",
    },
    filters: {
      type: "Type",
      visibility: "Visibilité",
      hideAlternate: "Masquer la continuité alternative",
      hideUpcoming: "Masquer les titres pas encore sortis",
      all: "Tous",
      film: "Films",
      serie: "Séries",
      special: "Spéciaux",
    },
    types: {
      film: "Film",
      serie: "Série",
      special: "Spécial",
    },
    tags: {
      alternate: "Continuité alternative",
      upcoming: "À venir",
    },
    notes: {
      shorts: "courts métrages",
      animated: "animée",
    },
    phase: {
      progress: "Progression {name}",
      empty: "Aucun titre ne correspond aux filtres.",
    },
    guide: {
      title: "Comment lire le planificateur",
      orderTerm: "Ordre",
      orderText:
        "La liste suit l'ordre de sortie à l'intérieur de chaque phase : c'est l'ordre conseillé pour un premier visionnage et il coïncide presque toujours avec la chronologie interne. Les rares exceptions « à rebours » (Captain America: The First Avenger dans les années 1940, Captain Marvel en 1995, Black Widow entre Civil War et Infinity War, Deadpool & Wolverine situé en 2018/2024) ne comptent que pour un revisionnage en ordre chronologique strict.",
      alternateTerm: "Continuité alternative",
      alternateText:
        "X-Men '97, Your Friendly Neighborhood Spider-Man et Marvel Zombies sortent durant cette période mais se déroulent dans des lignes temporelles distinctes de la Sacred Timeline : à regarder à tout moment, non indispensables à l'intrigue principale.",
    },
  },
  details: {
    loading: "Chargement des détails…",
    error: "Détails indisponibles pour le moment.",
    posterAlt: "Affiche de {name}",
    originalTitle: "Titre original : {name}",
    release: "Sortie",
    director: "Réalisation",
    creator: "Créé par",
    cast: "Distribution",
    synopsis: "Synopsis",
    noSynopsis: "Synopsis indisponible.",
    plot: {
      show: "Afficher l'intrigue",
      hide: "Masquer l'intrigue",
      warning: "Attention : l'intrigue contient des spoilers.",
      episodes: "Épisodes",
      fallbackLanguage: "Intrigue disponible uniquement en {language}.",
      sourceBefore: "Texte tiré de",
      sourceLink: "Wikipédia",
      license: "licence CC BY-SA 4.0",
    },
  },
  auth: {
    email: "E-mail",
    password: "Mot de passe",
    name: "Nom",
    passwordHint: "Au moins {min} caractères.",
    login: {
      title: "Se connecter",
      intro: "Connectez-vous pour conserver votre progression sur tous vos appareils.",
      button: "Se connecter",
      pending: "Connexion en cours…",
      noAccount: "Pas encore de compte ? {link}",
      registerLink: "Inscrivez-vous",
    },
    register: {
      title: "Créer un compte",
      intro: "La progression déjà enregistrée sur cet appareil sera ajoutée à votre compte.",
      button: "Créer le compte",
      pending: "Création en cours…",
      haveAccount: "Vous avez déjà un compte ? {link}",
      loginLink: "Connectez-vous",
      privacyNotice: "En créant un compte, vous déclarez avoir lu la {link}.",
      privacyLink: "politique de confidentialité",
    },
    errors: {
      invalidCredentials: "E-mail ou mot de passe incorrect.",
      invalidEmail: "L'adresse e-mail n'est pas valide.",
      wrongPassword: "Le mot de passe est incorrect.",
      invalidName: "Saisissez un nom valide.",
      userExists: "Un compte existe déjà avec cet e-mail.",
      passwordShort: "Le mot de passe doit contenir au moins {min} caractères.",
      passwordLong: "Le mot de passe est trop long.",
      reauthenticate: "Par sécurité, déconnectez-vous puis reconnectez-vous avant de continuer.",
      tooManyRequests: "Trop de tentatives. Patientez quelques minutes puis réessayez.",
      generic: "L'opération a échoué. Réessayez plus tard.",
    },
  },
  account: {
    title: "Votre compte",
    profile: {
      heading: "Profil",
      email: "E-mail",
      save: "Enregistrer",
      saving: "Enregistrement…",
      saved: "Nom mis à jour.",
    },
    password: {
      heading: "Mot de passe",
      current: "Mot de passe actuel",
      next: "Nouveau mot de passe",
      confirm: "Confirmer le nouveau mot de passe",
      hint: "Au moins {min} caractères. Après le changement, vous serez déconnecté de vos autres appareils.",
      mismatch: "Les deux mots de passe ne correspondent pas.",
      change: "Changer le mot de passe",
      changing: "Mise à jour…",
      changed: "Mot de passe mis à jour.",
    },
    delete: {
      heading: "Supprimer le compte",
      warning:
        "Votre compte, votre progression enregistrée et toutes les sessions actives seront supprimés définitivement. Cette opération est irréversible.",
      confirm: "J'ai compris que la suppression est définitive",
      button: "Supprimer définitivement",
      pending: "Suppression…",
    },
  },
  notFound: {
    title: "Page introuvable",
    back: "Retour au planificateur",
  },
  privacy: {
    title: "Politique de confidentialité",
    updated: "Dernière mise à jour : {date}",
    controller: {
      heading: "Responsable du traitement",
      body: "Le responsable du traitement est {name}. Pour toute demande concernant vos données, vous pouvez écrire à {email}.",
    },
    data: {
      heading: "Quelles données nous traitons",
      accountLabel: "Données du compte",
      accountText:
        "nom, e-mail et mot de passe. Le mot de passe n'est conservé que sous forme chiffrée (hash) et n'est jamais lisible.",
      progressLabel: "Progression",
      progressText:
        "les titres que vous marquez comme vus et la date à laquelle vous les avez marqués.",
      technicalLabel: "Données techniques",
      technicalText:
        "adresse IP et type de navigateur associés aux sessions de connexion, également utilisés pour limiter les tentatives de connexion répétées.",
      deviceLabel: "Sur votre appareil",
      deviceText:
        "sans compte, votre progression reste enregistrée uniquement dans votre navigateur (localStorage) et ne nous est pas transmise. La langue choisie est mémorisée de la même façon.",
    },
    purposes: {
      heading: "Pourquoi nous les traitons",
      service:
        "Pour vous fournir le service : créer et gérer votre compte et conserver votre progression (exécution du service demandé, art. 6.1.b RGPD).",
      security:
        "Pour la sécurité du service et la prévention des abus (intérêt légitime, art. 6.1.f RGPD).",
      noProfiling:
        "Nous n'utilisons pas vos données à des fins publicitaires ou de profilage, nous ne les vendons pas et ne les cédons pas à des tiers.",
    },
    cookies: {
      heading: "Cookies",
      body: "Nous utilisons uniquement un cookie technique de session, nécessaire pour vous maintenir connecté. Nous n'utilisons pas de cookies d'analyse ou de profilage.",
    },
    providers: {
      heading: "Où elles sont conservées et qui les traite",
      body: "Le site et la base de données sont hébergés par Cloudflare, la base de données étant située en Europe occidentale. Cloudflare agit en tant que sous-traitant. Les informations sur les titres (synopsis, intrigues, distribution, affiches et images de fond) proviennent de TMDB et de Wikipédia ; les images sont chargées directement depuis les serveurs de TMDB, qui reçoit donc l'adresse IP de toute personne ouvrant les détails d'un titre. Cloudflare et TMDB sont établis aux États-Unis : certaines données peuvent être transférées hors de l'Union européenne, dans le respect des garanties prévues par le RGPD (EU-US Data Privacy Framework et clauses contractuelles types).",
    },
    retention: {
      heading: "Pendant combien de temps",
      body: "Nous conservons vos données tant que votre compte existe. Les sessions expirent après 7 jours d'inactivité. Lorsque vous supprimez votre compte, le nom, l'e-mail, la progression et les sessions sont supprimés immédiatement ; les éventuelles copies de sauvegarde techniques sont écrasées sous 30 jours.",
    },
    rights: {
      heading: "Vos droits",
      body: "Vous pouvez demander à tout moment l'accès, la rectification, l'effacement, la limitation ou la portabilité de vos données, ou vous opposer au traitement, en écrivant à {email}. Vous pouvez modifier votre nom et supprimer votre compte directement depuis la page {account}. Vous avez également le droit d'introduire une réclamation auprès de l'autorité italienne de protection des données, le Garante ({garante}).",
      accountLink: "Votre compte",
    },
    minors: {
      heading: "Mineurs",
      body: "Le service n'est pas destiné aux personnes de moins de 14 ans.",
    },
    changes: {
      heading: "Modifications",
      body: "Toute modification de cette politique sera publiée sur cette page, avec la date de mise à jour indiquée en haut.",
    },
  },
};
