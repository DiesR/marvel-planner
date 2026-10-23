import type { Messages } from "./it";

export const en: Messages = {
  nav: {
    main: "Main",
    account: "Your account",
    login: "Sign in",
    logout: "Sign out",
    language: "Language",
    skipToContent: "Skip to content",
  },
  footer: {
    disclaimer: "Unofficial site, not affiliated with Marvel Studios or The Walt Disney Company.",
    legal: "Legal information",
    privacy: "Privacy",
    cookies: "Cookies",
    privacySettings: "Privacy settings",
    coffee: "If I've been useful to you, buy me a coffee",
  },
  catalog: {
    sagas: {
      infinity: "The Infinity Saga",
      multiverse: "The Multiverse Saga",
    },
    phases: {
      "1": "Phase One",
      "2": "Phase Two",
      "3": "Phase Three",
      "4": "Phase Four",
      "5": "Phase Five",
      "6": "Phase Six",
    },
    release: {
      mid: "mid-{year}",
      late: "late {year}",
    },
  },
  planner: {
    eyebrow: "Marvel Cinematic Universe",
    title: "Watch planner",
    intro:
      "All the MCU films and series, grouped by saga and phase, in release order. Check off what you've already watched.",
    completed: "Completed",
    storage: {
      account: "Your progress is saved to your account.",
      device: "Your progress is saved on this device. Sign in to have it everywhere.",
      none: "On this device your progress is not saved between sessions.",
    },
    loadError: "Unable to load your progress. Reload the page.",
    saveError: "Unable to save the change. Check your connection and try again.",
    reset: {
      title: "Reset all progress?",
      message: "Your checkmarks will be removed. This cannot be undone.",
      confirm: "Reset",
    },
    markWatched: 'Mark "{name}" as watched',
    toolbar: {
      label: "Filters and actions",
      actions: "Actions",
      collapseAll: "Collapse all",
      expandAll: "Expand all",
      reset: "Reset",
    },
    filters: {
      type: "Type",
      visibility: "Visibility",
      hideAlternate: "Hide alternate continuity",
      hideUpcoming: "Hide unreleased",
      all: "All",
      film: "Films",
      serie: "Series",
      special: "Specials",
    },
    types: {
      film: "Film",
      serie: "Series",
      special: "Special",
    },
    tags: {
      alternate: "Alternate continuity",
      upcoming: "Upcoming",
    },
    notes: {
      shorts: "shorts",
      animated: "animated",
    },
    phase: {
      progress: "{name} progress",
      empty: "No titles match the filters.",
    },
    guide: {
      title: "How to read the planner",
      orderTerm: "Order",
      orderText:
        'The list follows release order within each phase: it is the recommended order for a first watch and almost always matches the internal chronology. The few "backwards" exceptions (Captain America: The First Avenger set in the 1940s, Captain Marvel in 1995, Black Widow between Civil War and Infinity War, Deadpool & Wolverine set in 2018/2024) only matter for a strict chronological rewatch.',
      alternateTerm: "Alternate continuity",
      alternateText:
        "X-Men '97, Your Friendly Neighborhood Spider-Man and Marvel Zombies are released in this period but are set in timelines separate from the Sacred Timeline: watch them any time, they are not required for the main story.",
    },
  },
  details: {
    keyScenes: {
      heading: "Scenes to watch closely",
      editorial: "Editorial advice: our own picks, not from an outside source.",
      show: "Show the scenes",
      hide: "Hide the scenes",
      warning: "Warning: contains spoilers.",
    },
    easterEggs: {
      heading: "Easter eggs and cameos",
      stanLee: "Stan Lee cameo",
      source: "Source",
    },
    open: "Full details",
    loading: "Loading details…",
    error: "Details are not available right now.",
    posterAlt: "Poster of {name}",
    originalTitle: "Original title: {name}",
    release: "Release",
    runtime: "Runtime",
    minutes: "{count} min",
    director: "Directed by",
    creator: "Created by",
    cast: "Cast",
    synopsis: "Synopsis",
    noSynopsis: "Synopsis not available.",
    plot: {
      show: "Show the plot",
      hide: "Hide the plot",
      warning: "Warning: the plot contains spoilers.",
      episodes: "Episodes",
      fallbackLanguage: "Plot only available in {language}.",
      sourceBefore: "Text from",
      sourceLink: "Wikipedia",
      license: "CC BY-SA 4.0 license",
    },
  },
  auth: {
    email: "Email",
    password: "Password",
    name: "Superhero name",
    nameHint: "Pick a made-up name: you don't need your real name.",
    passwordHint: "At least {min} characters.",
    showPassword: "Show password",
    hidePassword: "Hide password",
    login: {
      title: "Sign in",
      intro: "Sign in to keep your progress on all your devices.",
      button: "Sign in",
      pending: "Signing in…",
      noAccount: "Don't have an account? {link}",
      registerLink: "Sign up",
    },
    register: {
      title: "Create an account",
      intro: "Progress already saved on this device will be added to your account.",
      button: "Create account",
      pending: "Creating account…",
      haveAccount: "Already have an account? {link}",
      loginLink: "Sign in",
      privacyNotice: "By creating an account you confirm that you have read the {link}.",
      privacyLink: "privacy policy",
    },
    errors: {
      invalidCredentials: "Incorrect email or password.",
      invalidEmail: "The email address is not valid.",
      wrongPassword: "The password is incorrect.",
      invalidName: "Enter a valid name.",
      userExists: "An account with this email already exists.",
      passwordShort: "The password must be at least {min} characters long.",
      passwordLong: "The password is too long.",
      reauthenticate: "For security, sign out and sign in again before continuing.",
      tooManyRequests: "Too many attempts. Wait a few minutes and try again.",
      required: "Fill in this field.",
      generic: "Something went wrong. Please try again later.",
    },
  },
  account: {
    title: "Your account",
    export: {
      heading: "Your data",
      description:
        "Download a copy of your account data (profile, watched titles and sessions) as JSON.",
      button: "Download my data",
      pending: "Preparing…",
      error: "Unable to download your data. Please try again later.",
    },
    profile: {
      heading: "Profile",
      email: "Email",
      save: "Save",
      saving: "Saving…",
      saved: "Name updated.",
    },
    password: {
      heading: "Password",
      current: "Current password",
      next: "New password",
      confirm: "Confirm new password",
      hint: "At least {min} characters. After the change you will be signed out of your other devices.",
      mismatch: "The two passwords do not match.",
      change: "Change password",
      changing: "Updating…",
      changed: "Password updated.",
    },
    delete: {
      heading: "Delete account",
      warning:
        "Your account, saved progress and all active sessions will be permanently deleted. This cannot be undone.",
      confirm: "I understand that deletion is permanent",
      button: "Delete permanently",
      pending: "Deleting…",
    },
  },
  common: {
    close: "Close",
    cancel: "Cancel",
    loading: "Loading…",
    retry: "Try again",
  },
  error: {
    title: "Something went wrong",
    body: "An unexpected error occurred. Try reloading the page.",
    home: "Back to the planner",
  },
  prerequisites: {
    heading: "Before you watch",
    levels: {
      essential: "Essential",
      recommended: "Recommended",
      optional: "Optional",
    },
    watched: "Watched",
    notWatched: "Not watched yet",
    show: "Show the reasons",
    hide: "Hide the reasons",
    warning: "Warning: the reasons may spoil earlier titles.",
    outside: "Outside this planner",
    provisional: "Provisional list: it may change when the title is released.",
    status: {
      standalone: "You don't need to have watched anything else: you can start right away.",
      missingEssential: "Before watching it, you should see: {titles}.",
      ready:
        "You can watch it with peace of mind: you've seen everything essential. The recommended titles would add a few extra references.",
      wellPrepared:
        "You can watch it with peace of mind: you've seen everything you need to follow the story. Only optional details remain.",
      complete:
        "You've seen it all: you can watch it with peace of mind and catch every reference.",
    },
  },
  postCredits: {
    heading: "Credits scenes",
    none: "No scenes: you can stop when the credits start.",
    noneBefore: "No scenes in the credits: the final scene comes before the credits.",
    tipEnd: "Stay until the very end of the credits to see them all.",
    tipMid: "Don't leave right away: the scene comes during the credits.",
    positions: {
      before: "Before the credits",
      mid: "Mid-credits",
      credits: "During the credits",
      end: "End of the credits",
    },
    show: "Show what happens",
    hide: "Hide what happens",
    warning: "Warning: the scenes contain spoilers.",
  },
  cookiePage: {
    intro: "This page lists everything the site stores on your device.",
    noBannerHeading: "Nothing to consent to",
    noBannerBody:
      "The site only uses technical tools that are needed for the service you ask for (sign-in, language, progress, filters). The law does not require consent or a banner for these. We do not use analytics, advertising or profiling cookies and we do not load third-party resources: if that ever changes, we will ask for your consent first.",
    tableCaption: "Cookies and data stored in your browser",
    columns: {
      name: "Name",
      kind: "Type",
      purpose: "Purpose",
      duration: "Duration",
    },
    session: {
      kind: "Technical session cookie (first-party, HttpOnly, SameSite=Lax)",
      purpose: "Keeps you signed in after you log in.",
      duration: "7 days from last use, or until you sign out",
    },
    progress: {
      kind: "Local storage (first-party)",
      purpose: "Remembers the titles you marked as watched when you have no account.",
      duration: "Until you delete them",
    },
    language: {
      kind: "Local storage (first-party)",
      purpose: "Remembers the language you chose.",
      duration: "Until you delete them",
    },
    filters: {
      kind: "Local storage (first-party)",
      purpose: "Remembers the filters you chose in the planner.",
      duration: "Until you delete them",
    },
    manageHeading: "How to manage them",
    manageBody:
      "You can delete the data stored on this device from “Privacy settings” or from your browser settings. The session cookie is removed when you sign out.",
  },
  privacySettings: {
    title: "Privacy settings",
    intro:
      "This site does not use analytics, advertising or profiling cookies and does not load third-party resources: there is nothing to accept or refuse.",
    clearHeading: "Data on this device",
    clearBody:
      "Deletes the progress (if you have no account), the language and the filters saved in this browser. It does not sign you out.",
    clearButton: "Delete this device's data",
    clearQuestion: "Really delete the data stored on this device?",
    clearConfirm: "Yes, delete",
  },
  admin: {
    heading: "New titles on TMDB to review",
    intro: "TMDB lists these Marvel titles that are not in the catalog. Add them or dismiss them.",
    newTitle: "New title",
    newSeason: "New season",
    dismiss: "Dismiss",
    openOnTmdb: "Open on TMDB",
  },
  notFound: {
    title: "Page not found",
    back: "Back to the planner",
  },
  privacy: {
    title: "Privacy policy",
    updated: "Last updated: {date}",
    controller: {
      heading: "Data controller",
      body: "The data controller is {name}. For any request about your data you can write to {email}.",
    },
    data: {
      heading: "What data we process",
      accountLabel: "Account data",
      accountText:
        "superhero name (a made-up nickname: we do not ask for your real name), email and password. The password is stored only in encrypted form (hash) and can never be read.",
      progressLabel: "Progress",
      progressText: "the titles you mark as watched and the date you marked them.",
      technicalLabel: "Technical data",
      technicalText:
        "IP address and browser type linked to sign-in sessions, and counters used to limit repeated sign-in attempts.",
      deviceLabel: "On your device",
      deviceText:
        "without an account, your progress is saved only in your browser (localStorage) and is not sent to us. The language and filters you choose are remembered the same way. You can delete this data at any time from “Privacy settings”.",
    },
    purposes: {
      heading: "Why we process it",
      service:
        "To provide the service: create and manage your account and keep your progress (performance of the requested service, art. 6.1.b GDPR).",
      security:
        "For the security of the service and the prevention of abuse (legitimate interest, art. 6.1.f GDPR).",
      noProfiling:
        "We do not use your data for advertising or profiling, we do not sell it and we do not share it with third parties.",
    },
    cookies: {
      heading: "Cookies and local storage",
      body: "We only use technical cookies that are needed for the service to work: a session cookie to keep you signed in. We do not use analytics, advertising or profiling cookies, nor third-party cookies, so your consent is not required (art. 122 of the Italian Privacy Code, the ePrivacy Directive and the Italian Garante's guidelines of 10 June 2021). The full list is in the {link}.",
      link: "“Privacy settings” window",
    },
    providers: {
      heading: "Where it is stored and who processes it",
      body: "The site and the database are hosted by Cloudflare, with the database located in Western Europe; Cloudflare acts as data processor. Information about titles (synopses, plots, cast, posters and backdrops) is requested by our server from TMDB, Wikipedia and Wikidata: your browser never contacts these services directly and therefore does not give them your IP address. Cloudflare is based in the United States: some data may be transferred outside the European Union, in line with the safeguards provided by the GDPR (EU-US Data Privacy Framework and standard contractual clauses).",
    },
    retention: {
      heading: "How long we keep it",
      body: "We keep your account data for as long as the account exists. Sessions expire after 7 days and expired ones are deleted every day; the counters that limit repeated sign-in attempts are deleted after one day; title information received from third parties stays in cache for at most 90 days. When you delete your account, superhero name, email, progress and sessions are deleted immediately; any technical backup copies are overwritten within 30 days.",
    },
    rights: {
      heading: "Your rights",
      body: "You can at any time request access, rectification, erasure, restriction or portability of your data, or object to the processing, by writing to {email}. From the {account} page you can change your superhero name, download your data as JSON and delete your account. We do not take decisions based on automated processing. You also have the right to lodge a complaint with the Italian Data Protection Authority, the Garante ({garante}).",
      accountLink: "Your account",
    },
    other: {
      heading: "Other jurisdictions",
      body: "We do not sell or share your personal data for targeted advertising or other commercial purposes. The same protections apply to people using the site from outside the European Union (for example in California, the United Kingdom or Brazil): you can exercise the same rights by writing to {email}.",
    },
    minors: {
      heading: "Minors",
      body: "The service is not intended for people under 14.",
    },
    changes: {
      heading: "Changes",
      body: "Any changes to this policy will be published on this page, with the update date shown at the top.",
    },
  },
};
