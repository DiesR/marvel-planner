import type { Messages } from "./it";

export const es: Messages = {
  nav: {
    main: "Principal",
    account: "Tu cuenta",
    login: "Iniciar sesión",
    logout: "Cerrar sesión",
    language: "Idioma",
  },
  footer: {
    disclaimer: "Sitio no oficial, sin afiliación con Marvel Studios ni The Walt Disney Company.",
    legal: "Información legal",
    privacy: "Privacidad",
    coffee: "Si te he sido útil, invítame a un café",
  },
  catalog: {
    sagas: {
      infinity: "La Saga del Infinito",
      multiverse: "La Saga del Multiverso",
    },
    phases: {
      "1": "Fase Uno",
      "2": "Fase Dos",
      "3": "Fase Tres",
      "4": "Fase Cuatro",
      "5": "Fase Cinco",
      "6": "Fase Seis",
    },
    release: {
      mid: "mediados de {year}",
      late: "finales de {year}",
    },
  },
  planner: {
    eyebrow: "Marvel Cinematic Universe",
    title: "Planificador de visionado",
    intro:
      "Todas las películas y series del MCU, divididas por saga y fase, en orden de estreno. Marca lo que ya has visto.",
    completed: "Completados",
    storage: {
      account: "Tu progreso se guarda en tu cuenta.",
      device:
        "Tu progreso se guarda en este dispositivo. Inicia sesión para tenerlo en todas partes.",
      none: "En este dispositivo el progreso no se conserva entre sesiones.",
    },
    loadError: "No se puede cargar tu progreso. Recarga la página.",
    saveError: "No se puede guardar el cambio. Comprueba la conexión e inténtalo de nuevo.",
    resetConfirm: "¿Restablecer todo el progreso? Se quitarán las marcas.",
    markWatched: 'Marcar "{name}" como visto',
    toolbar: {
      label: "Filtros y acciones",
      actions: "Acciones",
      collapseAll: "Contraer todo",
      expandAll: "Expandir todo",
      reset: "Restablecer",
    },
    filters: {
      type: "Tipo",
      visibility: "Visibilidad",
      hideAlternate: "Ocultar continuidad alternativa",
      hideUpcoming: "Ocultar los aún no estrenados",
      all: "Todos",
      film: "Películas",
      serie: "Series",
      special: "Especiales",
    },
    types: {
      film: "Película",
      serie: "Serie",
      special: "Especial",
    },
    tags: {
      alternate: "Continuidad alternativa",
      upcoming: "Próximamente",
    },
    notes: {
      shorts: "cortos",
      animated: "animada",
    },
    phase: {
      progress: "Progreso de {name}",
      empty: "Ningún título coincide con los filtros.",
    },
    guide: {
      title: "Cómo leer el planificador",
      orderTerm: "Orden",
      orderText:
        'La lista sigue el orden de estreno dentro de cada fase: es el recomendado para un primer visionado y casi siempre coincide con la cronología interna. Las pocas excepciones "hacia atrás" (Captain America: The First Avenger en los años 40, Captain Marvel en 1995, Black Widow entre Civil War e Infinity War, Deadpool & Wolverine ambientada en 2018/2024) solo cuentan para un nuevo visionado en orden cronológico estricto.',
      alternateTerm: "Continuidad alternativa",
      alternateText:
        "X-Men '97, Your Friendly Neighborhood Spider-Man y Marvel Zombies se estrenan en este periodo, pero transcurren en líneas temporales separadas de la Sacred Timeline: se pueden ver en cualquier momento y no son obligatorias para la trama principal.",
    },
  },
  details: {
    loading: "Cargando detalles…",
    error: "Detalles no disponibles en este momento.",
    posterAlt: "Cartel de {name}",
    originalTitle: "Título original: {name}",
    release: "Estreno",
    director: "Dirección",
    creator: "Creada por",
    cast: "Reparto",
    synopsis: "Sinopsis",
    noSynopsis: "Sinopsis no disponible.",
    plot: {
      show: "Mostrar el argumento",
      hide: "Ocultar el argumento",
      warning: "Atención: el argumento contiene spoilers.",
      episodes: "Episodios",
      fallbackLanguage: "Argumento disponible solo en {language}.",
      sourceBefore: "Texto extraído de",
      sourceLink: "Wikipedia",
      license: "licencia CC BY-SA 4.0",
    },
  },
  auth: {
    email: "Correo electrónico",
    password: "Contraseña",
    name: "Nombre",
    passwordHint: "Al menos {min} caracteres.",
    login: {
      title: "Iniciar sesión",
      intro: "Inicia sesión para conservar tu progreso en todos tus dispositivos.",
      button: "Iniciar sesión",
      pending: "Iniciando sesión…",
      noAccount: "¿No tienes una cuenta? {link}",
      registerLink: "Regístrate",
    },
    register: {
      title: "Crear una cuenta",
      intro: "El progreso ya guardado en este dispositivo se añadirá a tu cuenta.",
      button: "Crear cuenta",
      pending: "Creando la cuenta…",
      haveAccount: "¿Ya tienes una cuenta? {link}",
      loginLink: "Inicia sesión",
      privacyNotice: "Al crear una cuenta declaras haber leído la {link}.",
      privacyLink: "política de privacidad",
    },
    errors: {
      invalidCredentials: "Correo o contraseña incorrectos.",
      invalidEmail: "La dirección de correo no es válida.",
      wrongPassword: "La contraseña no es correcta.",
      invalidName: "Introduce un nombre válido.",
      userExists: "Ya existe una cuenta con este correo.",
      passwordShort: "La contraseña debe tener al menos {min} caracteres.",
      passwordLong: "La contraseña es demasiado larga.",
      reauthenticate: "Por seguridad, cierra sesión e inicia sesión de nuevo antes de continuar.",
      tooManyRequests: "Demasiados intentos. Espera unos minutos e inténtalo de nuevo.",
      generic: "La operación no se ha completado. Inténtalo más tarde.",
    },
  },
  account: {
    title: "Tu cuenta",
    profile: {
      heading: "Perfil",
      email: "Correo electrónico",
      save: "Guardar",
      saving: "Guardando…",
      saved: "Nombre actualizado.",
    },
    password: {
      heading: "Contraseña",
      current: "Contraseña actual",
      next: "Nueva contraseña",
      confirm: "Confirmar la nueva contraseña",
      hint: "Al menos {min} caracteres. Tras el cambio se cerrará la sesión en tus otros dispositivos.",
      mismatch: "Las dos contraseñas no coinciden.",
      change: "Cambiar contraseña",
      changing: "Actualizando…",
      changed: "Contraseña actualizada.",
    },
    delete: {
      heading: "Eliminar cuenta",
      warning:
        "Tu cuenta, el progreso guardado y todas las sesiones activas se eliminarán de forma definitiva. La operación no se puede deshacer.",
      confirm: "Entiendo que la eliminación es definitiva",
      button: "Eliminar definitivamente",
      pending: "Eliminando…",
    },
  },
  notFound: {
    title: "Página no encontrada",
    back: "Volver al planificador",
  },
  privacy: {
    title: "Política de privacidad",
    updated: "Última actualización: {date}",
    controller: {
      heading: "Responsable del tratamiento",
      body: "El responsable del tratamiento es {name}. Para cualquier solicitud sobre tus datos puedes escribir a {email}.",
    },
    data: {
      heading: "Qué datos tratamos",
      accountLabel: "Datos de la cuenta",
      accountText:
        "nombre, correo electrónico y contraseña. La contraseña solo se conserva de forma cifrada (hash) y nunca se puede leer.",
      progressLabel: "Progreso",
      progressText: "los títulos que marcas como vistos y la fecha en que los marcaste.",
      technicalLabel: "Datos técnicos",
      technicalText:
        "dirección IP y tipo de navegador asociados a las sesiones de acceso, usados también para limitar los intentos de acceso repetidos.",
      deviceLabel: "En tu dispositivo",
      deviceText:
        "sin cuenta, tu progreso se guarda solo en tu navegador (localStorage) y no se nos envía. El idioma elegido se recuerda del mismo modo.",
    },
    purposes: {
      heading: "Por qué los tratamos",
      service:
        "Para prestarte el servicio: crear y gestionar tu cuenta y conservar tu progreso (ejecución del servicio solicitado, art. 6.1.b RGPD).",
      security:
        "Para la seguridad del servicio y la prevención de abusos (interés legítimo, art. 6.1.f RGPD).",
      noProfiling:
        "No usamos tus datos para publicidad ni elaboración de perfiles, no los vendemos y no los cedemos a terceros.",
    },
    cookies: {
      heading: "Cookies",
      body: "Solo usamos una cookie técnica de sesión, necesaria para mantenerte conectado. No usamos cookies de análisis ni de elaboración de perfiles.",
    },
    providers: {
      heading: "Dónde se conservan y quién los trata",
      body: "El sitio y la base de datos están alojados en Cloudflare, con la base de datos situada en Europa occidental. Cloudflare actúa como encargado del tratamiento. La información sobre los títulos (sinopsis, argumentos, reparto, carteles e imágenes de fondo) procede de TMDB y de Wikipedia; las imágenes se cargan directamente desde los servidores de TMDB, que por tanto recibe la dirección IP de quien abre los detalles de un título. Cloudflare y TMDB tienen su sede en Estados Unidos: algunos datos podrían transferirse fuera de la Unión Europea, respetando las garantías previstas por el RGPD (EU-US Data Privacy Framework y cláusulas contractuales tipo).",
    },
    retention: {
      heading: "Durante cuánto tiempo",
      body: "Conservamos los datos mientras exista tu cuenta. Las sesiones caducan tras 7 días de inactividad. Cuando eliminas la cuenta, el nombre, el correo, el progreso y las sesiones se borran de inmediato; las posibles copias de seguridad técnicas se sobrescriben en un plazo de 30 días.",
    },
    rights: {
      heading: "Tus derechos",
      body: "Puedes solicitar en cualquier momento el acceso, la rectificación, la supresión, la limitación o la portabilidad de tus datos, u oponerte al tratamiento, escribiendo a {email}. Puedes modificar tu nombre y eliminar la cuenta directamente desde la página {account}. También tienes derecho a presentar una reclamación ante la autoridad italiana de protección de datos, el Garante ({garante}).",
      accountLink: "Tu cuenta",
    },
    minors: {
      heading: "Menores",
      body: "El servicio no está dirigido a personas menores de 14 años.",
    },
    changes: {
      heading: "Cambios",
      body: "Cualquier cambio en esta política se publicará en esta página, con la fecha de actualización indicada arriba.",
    },
  },
};
