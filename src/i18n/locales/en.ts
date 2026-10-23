import type { Messages } from "./it";

export const en: Messages = {
  nav: {
    main: "Main",
    account: "Your account",
    login: "Sign in",
    logout: "Sign out",
    language: "Language",
  },
  footer: {
    disclaimer: "Unofficial site, not affiliated with Marvel Studios or The Walt Disney Company.",
    legal: "Legal information",
    privacy: "Privacy",
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
    resetConfirm: "Reset all progress? Your checkmarks will be removed.",
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
    loading: "Loading details…",
    error: "Details are not available right now.",
    posterAlt: "Poster of {name}",
    originalTitle: "Original title: {name}",
    release: "Release",
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
    name: "Name",
    passwordHint: "At least {min} characters.",
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
      generic: "Something went wrong. Please try again later.",
    },
  },
  account: {
    title: "Your account",
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
        "name, email and password. The password is stored only in encrypted form (hash) and can never be read.",
      progressLabel: "Progress",
      progressText: "the titles you mark as watched and the date you marked them.",
      technicalLabel: "Technical data",
      technicalText:
        "IP address and browser type linked to sign-in sessions, also used to limit repeated sign-in attempts.",
      deviceLabel: "On your device",
      deviceText:
        "without an account, your progress is saved only in your browser (localStorage) and is not sent to us. The language you choose is remembered the same way.",
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
      heading: "Cookies",
      body: "We only use a technical session cookie, needed to keep you signed in. We do not use analytics or profiling cookies.",
    },
    providers: {
      heading: "Where it is stored and who processes it",
      body: "The site and the database are hosted by Cloudflare, with the database located in Western Europe. Cloudflare acts as data processor. Information about titles (synopses, plots, cast, posters and backdrops) comes from TMDB and Wikipedia; images are loaded directly from TMDB's servers, which therefore receive the IP address of anyone opening a title's details. Cloudflare and TMDB are based in the United States: some data may be transferred outside the European Union, in line with the safeguards provided by the GDPR (EU-US Data Privacy Framework and standard contractual clauses).",
    },
    retention: {
      heading: "How long we keep it",
      body: "We keep your data for as long as your account exists. Sessions expire after 7 days of inactivity. When you delete your account, name, email, progress and sessions are deleted immediately; any technical backup copies are overwritten within 30 days.",
    },
    rights: {
      heading: "Your rights",
      body: "You can at any time request access, rectification, erasure, restriction or portability of your data, or object to the processing, by writing to {email}. You can change your name and delete your account directly from the {account} page. You also have the right to lodge a complaint with the Italian Data Protection Authority, the Garante ({garante}).",
      accountLink: "Your account",
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
