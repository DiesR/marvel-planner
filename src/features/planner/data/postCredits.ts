import { localized as l, type Localized } from "./guides/types";

export type ScenePosition = "before" | "mid" | "credits" | "end";

export interface CreditsScene {
  position: ScenePosition;
  description: Localized;
}

export interface PostCredits {
  scenes: CreditsScene[];
  note?: Localized;
}

const scene = (position: ScenePosition, description: Localized): CreditsScene => ({
  position,
  description,
});

const scenes = (...list: CreditsScene[]): PostCredits => ({ scenes: list });

export const POST_CREDITS: Record<string, PostCredits> = {
  "i-iron-man": scenes(
    scene(
      "end",
      l(
        "Nick Fury visits Tony Stark and tells him about the Avengers Initiative.",
        "Nick Fury va a trovare Tony Stark e gli parla dell'Iniziativa Vendicatori.",
        "Nick Fury rend visite à Tony Stark et lui parle de l'Initiative Avengers.",
        "Nick Fury visita a Tony Stark y le habla de la Iniciativa Vengadores.",
        "Nick Fury besucht Tony Stark und erzählt ihm von der Avengers-Initiative.",
      ),
    ),
  ),

  "i-the-incredible-hulk": scenes(
    scene(
      "before",
      l(
        "In the film's last scene, Tony Stark approaches General Ross to talk about forming a team.",
        "Nell'ultima scena del film, Tony Stark avvicina il generale Ross per parlargli di una squadra.",
        "Dans la dernière scène du film, Tony Stark aborde le général Ross pour lui parler de former une équipe.",
        "En la última escena de la película, Tony Stark se acerca al general Ross para hablarle de formar un equipo.",
        "In der letzten Szene des Films spricht Tony Stark General Ross auf die Bildung eines Teams an.",
      ),
    ),
  ),

  "i-iron-man-2": scenes(
    scene(
      "end",
      l(
        "Agent Coulson reports that a huge hammer has been found in a crater in New Mexico.",
        "L'agente Coulson riferisce che in un cratere del New Mexico è stato trovato un enorme martello.",
        "L'agent Coulson signale qu'un énorme marteau a été découvert dans un cratère du Nouveau-Mexique.",
        "El agente Coulson informa de que se ha encontrado un enorme martillo en un cráter de Nuevo México.",
        "Agent Coulson meldet, dass in einem Krater in New Mexico ein riesiger Hammer gefunden wurde.",
      ),
    ),
  ),

  "i-thor": scenes(
    scene(
      "end",
      l(
        "Erik Selvig is taken to S.H.I.E.L.D. and asked to study the Tesseract.",
        "Erik Selvig viene portato dallo S.H.I.E.L.D. e gli viene chiesto di studiare il Tesseract.",
        "Erik Selvig est emmené par le S.H.I.E.L.D., qui lui demande d'étudier le Tesseract.",
        "Erik Selvig es llevado por S.H.I.E.L.D., que le pide estudiar el Teseracto.",
        "Erik Selvig wird von S.H.I.E.L.D. abgeholt und soll den Tesserakt untersuchen.",
      ),
    ),
  ),

  "i-captain-america-the-first-avenger": scenes(
    scene(
      "end",
      l(
        "Nick Fury meets Steve Rogers and proposes a new mission.",
        "Nick Fury incontra Steve Rogers e gli propone una nuova missione.",
        "Nick Fury retrouve Steve Rogers et lui propose une nouvelle mission.",
        "Nick Fury se reúne con Steve Rogers y le propone una nueva misión.",
        "Nick Fury trifft Steve Rogers und schlägt ihm eine neue Mission vor.",
      ),
    ),
  ),

  "i-the-avengers": scenes(
    scene(
      "mid",
      l(
        "A figure called the Other reports the failed attack on Earth to his master, Thanos.",
        "Una figura chiamata l'Altro riferisce il fallimento dell'attacco alla Terra al suo padrone, Thanos.",
        "Un être appelé l'Autre rapporte l'échec de l'attaque sur la Terre à son maître, Thanos.",
        "Una figura llamada el Otro informa del fracaso del ataque a la Tierra a su amo, Thanos.",
        "Eine Gestalt namens der Andere meldet den gescheiterten Angriff auf die Erde seinem Meister Thanos.",
      ),
    ),
    scene(
      "end",
      l(
        "The Avengers silently eat shawarma together in a ruined restaurant.",
        "I Vendicatori mangiano in silenzio uno shawarma insieme in un ristorante distrutto.",
        "Les Avengers mangent ensemble un shawarma en silence dans un restaurant dévasté.",
        "Los Vengadores comen juntos un shawarma en silencio en un restaurante destrozado.",
        "Die Avengers essen schweigend gemeinsam Shawarma in einem verwüsteten Restaurant.",
      ),
    ),
  ),

  "i-iron-man-3": scenes(
    scene(
      "end",
      l(
        "Tony tells his story to Bruce Banner, who has fallen asleep, and starts over.",
        "Tony racconta la sua storia a Bruce Banner, che si è addormentato, e ricomincia da capo.",
        "Tony raconte son histoire à Bruce Banner, qui s'est endormi, puis recommence.",
        "Tony le cuenta su historia a Bruce Banner, que se ha dormido, y empieza de nuevo.",
        "Tony erzählt Bruce Banner, der eingeschlafen ist, seine Geschichte und fängt von vorn an.",
      ),
    ),
  ),

  "i-thor-the-dark-world": scenes(
    scene(
      "mid",
      l(
        "Volstagg and Sif leave the Aether with the Collector for safekeeping.",
        "Volstagg e Sif affidano l'Aether al Collezionista perché lo custodisca.",
        "Volstagg et Sif confient l'Éther au Collectionneur pour qu'il le garde.",
        "Volstagg y Sif dejan el Éter al cuidado del Coleccionista.",
        "Volstagg und Sif überlassen dem Collector den Äther zur Verwahrung.",
      ),
    ),
    scene(
      "end",
      l(
        "Thor and Jane Foster reunite on Earth.",
        "Thor e Jane Foster si ritrovano sulla Terra.",
        "Thor et Jane Foster se retrouvent sur Terre.",
        "Thor y Jane Foster se reencuentran en la Tierra.",
        "Thor und Jane Foster treffen sich auf der Erde wieder.",
      ),
    ),
  ),

  "i-captain-america-the-winter-soldier": scenes(
    scene(
      "mid",
      l(
        "At a Hydra base, Strucker studies the scepter and two test subjects with powers.",
        "In una base dell'Hydra, Strucker studia lo scettro e due soggetti con superpoteri.",
        "Dans une base de l'Hydra, Strucker étudie le sceptre et deux sujets dotés de pouvoirs.",
        "En una base de Hydra, Strucker estudia el cetro y a dos sujetos con poderes.",
        "In einer Hydra-Basis untersucht Strucker das Zepter und zwei Testpersonen mit Kräften.",
      ),
    ),
    scene(
      "end",
      l(
        "Bucky visits his own memorial at the Smithsonian to learn about his past.",
        "Bucky visita il proprio memoriale allo Smithsonian per scoprire il suo passato.",
        "Bucky visite son propre mémorial au Smithsonian pour en apprendre plus sur son passé.",
        "Bucky visita su propio memorial en el Smithsonian para conocer su pasado.",
        "Bucky besucht sein eigenes Denkmal im Smithsonian, um etwas über seine Vergangenheit zu erfahren.",
      ),
    ),
  ),

  "i-guardians-of-the-galaxy": scenes(
    scene(
      "credits",
      l(
        "Baby Groot dances when Drax isn't looking.",
        "Baby Groot balla quando Drax non guarda.",
        "Bébé Groot danse quand Drax ne regarde pas.",
        "Baby Groot baila cuando Drax no mira.",
        "Baby Groot tanzt, wenn Drax nicht hinsieht.",
      ),
    ),
    scene(
      "end",
      l(
        "The Collector sits in his ruined collection with Cosmo and Howard the Duck.",
        "Il Collezionista siede tra le rovine della sua collezione con Cosmo e Howard il papero.",
        "Le Collectionneur est assis dans sa collection détruite avec Cosmo et Howard le canard.",
        "El Coleccionista está sentado entre las ruinas de su colección con Cosmo y Howard el Pato.",
        "Der Collector sitzt zwischen den Trümmern seiner Sammlung, mit Cosmo und Howard the Duck.",
      ),
    ),
  ),

  "i-avengers-age-of-ultron": scenes(
    scene(
      "mid",
      l(
        "Thanos puts on a gauntlet and decides to collect the Infinity Stones himself.",
        "Thanos indossa un guanto e decide di raccogliere da solo le Gemme dell'Infinito.",
        "Thanos enfile un gantelet et décide de rassembler lui-même les Pierres d'Infinité.",
        "Thanos se pone un guantelete y decide reunir él mismo las Gemas del Infinito.",
        "Thanos zieht einen Handschuh an und beschließt, die Infinity-Steine selbst zu holen.",
      ),
    ),
  ),

  "i-ant-man": scenes(
    scene(
      "mid",
      l(
        "Hank Pym gives Hope van Dyne the new Wasp suit.",
        "Hank Pym consegna a Hope van Dyne la nuova tuta da Wasp.",
        "Hank Pym remet à Hope van Dyne le nouveau costume de Wasp.",
        "Hank Pym entrega a Hope van Dyne el nuevo traje de Wasp.",
        "Hank Pym übergibt Hope van Dyne den neuen Wasp-Anzug.",
      ),
    ),
    scene(
      "end",
      l(
        "Steve Rogers and Sam Wilson talk about what to do about Bucky Barnes.",
        "Steve Rogers e Sam Wilson parlano di cosa fare con Bucky Barnes.",
        "Steve Rogers et Sam Wilson discutent de ce qu'il faut faire au sujet de Bucky Barnes.",
        "Steve Rogers y Sam Wilson hablan de qué hacer con Bucky Barnes.",
        "Steve Rogers und Sam Wilson besprechen, was mit Bucky Barnes geschehen soll.",
      ),
    ),
  ),

  "i-captain-america-civil-war": scenes(
    scene(
      "mid",
      l(
        "In Wakanda, Bucky chooses to go back into cryogenic sleep until a cure is found.",
        "In Wakanda, Bucky sceglie di tornare in sonno criogenico finché non si troverà una cura.",
        "Au Wakanda, Bucky choisit de retourner en sommeil cryogénique jusqu'à ce qu'un remède soit trouvé.",
        "En Wakanda, Bucky decide volver a la criogenia hasta que se encuentre una cura.",
        "In Wakanda entscheidet sich Bucky, bis zu einer Heilung wieder in den Kälteschlaf zu gehen.",
      ),
    ),
    scene(
      "end",
      l(
        "Peter Parker tries out the web shooters Tony built for him.",
        "Peter Parker prova i lanciaragnatele costruiti da Tony per lui.",
        "Peter Parker essaie les lance-toiles que Tony a construits pour lui.",
        "Peter Parker prueba los lanzarredes que Tony construyó para él.",
        "Peter Parker probiert die Netzwerfer aus, die Tony für ihn gebaut hat.",
      ),
    ),
  ),

  "i-doctor-strange": scenes(
    scene(
      "mid",
      l(
        "Strange agrees to help Thor, who has come to Earth with Loki to find Odin.",
        "Strange accetta di aiutare Thor, arrivato sulla Terra con Loki per cercare Odino.",
        "Strange accepte d'aider Thor, venu sur Terre avec Loki pour retrouver Odin.",
        "Strange acepta ayudar a Thor, que ha llegado a la Tierra con Loki para buscar a Odín.",
        "Strange willigt ein, Thor zu helfen, der mit Loki auf die Erde kam, um Odin zu suchen.",
      ),
    ),
    scene(
      "end",
      l(
        "Mordo takes the magical power of a man he says does not deserve it.",
        "Mordo sottrae il potere magico a un uomo che, secondo lui, non lo merita.",
        "Mordo prive de ses pouvoirs magiques un homme qui, selon lui, ne les mérite pas.",
        "Mordo arrebata el poder mágico a un hombre que, según él, no lo merece.",
        "Mordo nimmt einem Mann die magische Kraft, die dieser seiner Meinung nach nicht verdient.",
      ),
    ),
  ),

  "i-guardians-of-the-galaxy-vol-2": scenes(
    scene(
      "credits",
      l(
        "Kraglin tries Yondu's arrow and accidentally hits Drax.",
        "Kraglin prova la freccia di Yondu e colpisce Drax per errore.",
        "Kraglin essaie la flèche de Yondu et touche Drax par accident.",
        "Kraglin prueba la flecha de Yondu y golpea a Drax sin querer.",
        "Kraglin probiert Yondus Pfeil aus und trifft Drax versehentlich.",
      ),
    ),
    scene(
      "credits",
      l(
        "The Ravager captains reunite in memory of Yondu.",
        "I capitani dei Ravager si ritrovano nel ricordo di Yondu.",
        "Les capitaines des Ravagers se retrouvent en souvenir de Yondu.",
        "Los capitanes de los Ravagers se reúnen en recuerdo de Yondu.",
        "Die Ravager-Captains kommen zum Gedenken an Yondu zusammen.",
      ),
    ),
    scene(
      "credits",
      l(
        "Ayesha creates a new being, Adam, to get revenge on the Guardians.",
        "Ayesha crea un nuovo essere, Adam, per vendicarsi dei Guardiani.",
        "Ayesha crée un nouvel être, Adam, pour se venger des Gardiens.",
        "Ayesha crea un nuevo ser, Adam, para vengarse de los Guardianes.",
        "Ayesha erschafft ein neues Wesen, Adam, um sich an den Guardians zu rächen.",
      ),
    ),
    scene(
      "credits",
      l(
        "A teenage Groot ignores Peter's request to clean up.",
        "Un Groot adolescente ignora la richiesta di Peter di mettere in ordine.",
        "Un Groot adolescent ignore la demande de Peter de ranger.",
        "Un Groot adolescente ignora la petición de Peter de recoger.",
        "Ein jugendlicher Groot ignoriert Peters Bitte aufzuräumen.",
      ),
    ),
    scene(
      "end",
      l(
        "Stan Lee talks with the Watchers, who are leaving.",
        "Stan Lee parla con gli Osservatori, che se ne stanno andando.",
        "Stan Lee parle avec les Observateurs, qui s'en vont.",
        "Stan Lee habla con los Vigilantes, que se marchan.",
        "Stan Lee spricht mit den Beobachtern, die gerade gehen.",
      ),
    ),
  ),

  "i-spider-man-homecoming": scenes(
    scene(
      "mid",
      l(
        "In prison, Toomes refuses to reveal Spider-Man's identity to Mac Gargan.",
        "In prigione, Toomes si rifiuta di rivelare a Mac Gargan l'identità di Spider-Man.",
        "En prison, Toomes refuse de révéler l'identité de Spider-Man à Mac Gargan.",
        "En la cárcel, Toomes se niega a revelar a Mac Gargan la identidad de Spider-Man.",
        "Im Gefängnis weigert sich Toomes, Mac Gargan Spider-Mans Identität zu verraten.",
      ),
    ),
    scene(
      "end",
      l(
        "Captain America gives a public service message about patience.",
        "Captain America recita un messaggio di pubblica utilità sulla pazienza.",
        "Captain America livre un message de prévention sur la patience.",
        "Capitán América da un mensaje de servicio público sobre la paciencia.",
        "Captain America hält einen Aufklärungsspot über Geduld.",
      ),
    ),
  ),

  "i-thor-ragnarok": scenes(
    scene(
      "mid",
      l(
        "Thor's ship is intercepted by a huge ship belonging to Thanos.",
        "La nave di Thor viene intercettata da un'enorme nave di Thanos.",
        "Le vaisseau de Thor est intercepté par un immense vaisseau de Thanos.",
        "La nave de Thor es interceptada por una enorme nave de Thanos.",
        "Thors Schiff wird von einem riesigen Schiff von Thanos abgefangen.",
      ),
    ),
    scene(
      "end",
      l(
        "The Grandmaster is confronted by his former subjects on Sakaar.",
        "Il Gran Maestro viene affrontato dai suoi ex sudditi su Sakaar.",
        "Le Grand Maître est confronté à ses anciens sujets sur Sakaar.",
        "El Gran Maestro es increpado por sus antiguos súbditos en Sakaar.",
        "Der Grandmaster wird auf Sakaar von seinen früheren Untertanen zur Rede gestellt.",
      ),
    ),
  ),

  "i-black-panther": scenes(
    scene(
      "mid",
      l(
        "T'Challa tells the United Nations that Wakanda will share its resources.",
        "T'Challa annuncia alle Nazioni Unite che il Wakanda condividerà le sue risorse.",
        "T'Challa annonce à l'ONU que le Wakanda partagera ses ressources.",
        "T'Challa anuncia en la ONU que Wakanda compartirá sus recursos.",
        "T'Challa verkündet vor der UNO, dass Wakanda seine Ressourcen teilen wird.",
      ),
    ),
    scene(
      "end",
      l(
        "Bucky Barnes thanks Shuri for helping him recover.",
        "Bucky Barnes ringrazia Shuri per averlo aiutato a riprendersi.",
        "Bucky Barnes remercie Shuri de l'avoir aidé à se rétablir.",
        "Bucky Barnes da las gracias a Shuri por ayudarle a recuperarse.",
        "Bucky Barnes bedankt sich bei Shuri für ihre Hilfe bei seiner Genesung.",
      ),
    ),
  ),

  "i-avengers-infinity-war": scenes(
    scene(
      "end",
      l(
        "Nick Fury sends a message to Carol Danvers just before he disappears.",
        "Nick Fury manda un messaggio a Carol Danvers un attimo prima di svanire.",
        "Nick Fury envoie un message à Carol Danvers juste avant de disparaître.",
        "Nick Fury envía un mensaje a Carol Danvers justo antes de desaparecer.",
        "Nick Fury schickt Carol Danvers eine Nachricht, kurz bevor er verschwindet.",
      ),
    ),
  ),

  "i-ant-man-and-the-wasp": scenes(
    scene(
      "mid",
      l(
        "Scott is stuck in the Quantum Realm while the Pym family disappears.",
        "Scott resta intrappolato nel Regno Quantico mentre la famiglia Pym scompare.",
        "Scott reste coincé dans le Royaume quantique pendant que la famille Pym disparaît.",
        "Scott queda atrapado en el Reino Cuántico mientras la familia Pym desaparece.",
        "Scott sitzt im Quantenreich fest, während die Familie Pym verschwindet.",
      ),
    ),
    scene(
      "end",
      l(
        "Scott's giant ant plays the drums.",
        "La formica gigante di Scott suona la batteria.",
        "La fourmi géante de Scott joue de la batterie.",
        "La hormiga gigante de Scott toca la batería.",
        "Scotts Riesenameise spielt Schlagzeug.",
      ),
    ),
  ),

  "i-captain-marvel": scenes(
    scene(
      "mid",
      l(
        "In 2018, the Avengers check Fury's pager when Carol Danvers appears.",
        "Nel 2018 i Vendicatori controllano il cercapersone di Fury quando compare Carol Danvers.",
        "En 2018, les Avengers consultent le bipeur de Fury quand Carol Danvers apparaît.",
        "En 2018, los Vengadores revisan el busca de Fury cuando aparece Carol Danvers.",
        "2018 prüfen die Avengers Furys Pager, als Carol Danvers auftaucht.",
      ),
    ),
    scene(
      "end",
      l(
        "Goose coughs up the Tesseract on Fury's desk.",
        "Goose sputa il Tesseract sulla scrivania di Fury.",
        "Goose régurgite le Tesseract sur le bureau de Fury.",
        "Goose escupe el Teseracto sobre el escritorio de Fury.",
        "Goose würgt den Tesserakt auf Furys Schreibtisch hervor.",
      ),
    ),
  ),

  "i-avengers-endgame": {
    scenes: [],
    note: l(
      "The credits end with a metallic clang, and nothing more. The 2026 Encore re-release adds new footage.",
      "I titoli di coda finiscono con un rumore metallico, e nient'altro. La riedizione Encore del 2026 aggiunge nuovi contenuti.",
      "Le générique se termine par un bruit métallique, sans rien d'autre. La ressortie Encore de 2026 ajoute de nouvelles images.",
      "Los créditos terminan con un ruido metálico, y nada más. El reestreno Encore de 2026 añade material nuevo.",
      "Der Abspann endet mit einem metallischen Geräusch, mehr nicht. Die Encore-Wiederaufführung 2026 ergänzt neues Material.",
    ),
  },

  "i-spider-man-far-from-home": scenes(
    scene(
      "mid",
      l(
        "Mysterio's edited video reveals Peter Parker's identity to the world.",
        "Il video manipolato di Mysterio rivela al mondo l'identità di Peter Parker.",
        "La vidéo truquée de Mysterio révèle au monde l'identité de Peter Parker.",
        "El vídeo manipulado de Mysterio revela al mundo la identidad de Peter Parker.",
        "Mysterios manipuliertes Video enthüllt der Welt Peter Parkers Identität.",
      ),
    ),
    scene(
      "end",
      l(
        'The "Fury" and "Hill" seen in the film are revealed to be the Skrulls Talos and Soren.',
        'I "Fury" e "Hill" visti nel film si rivelano essere gli Skrull Talos e Soren.',
        "Les « Fury » et « Hill » vus dans le film sont en réalité les Skrulls Talos et Soren.",
        "Los «Fury» y «Hill» que se ven en la película resultan ser los skrulls Talos y Soren.",
        "Der „Fury“ und die „Hill“ aus dem Film sind in Wahrheit die Skrulls Talos und Soren.",
      ),
    ),
  ),

  "i-black-widow": scenes(
    scene(
      "end",
      l(
        "Valentina visits Yelena at Natasha's grave and sends her after Clint Barton.",
        "Valentina va da Yelena sulla tomba di Natasha e la manda a cercare Clint Barton.",
        "Valentina rejoint Yelena sur la tombe de Natasha et l'envoie après Clint Barton.",
        "Valentina visita a Yelena en la tumba de Natasha y la envía tras Clint Barton.",
        "Valentina besucht Yelena an Natashas Grab und schickt sie hinter Clint Barton her.",
      ),
    ),
  ),

  "i-shang-chi-and-the-legend-of-the-ten-rings": scenes(
    scene(
      "mid",
      l(
        "Wong introduces Shang-Chi and Katy to Bruce Banner and Carol Danvers.",
        "Wong presenta Shang-Chi e Katy a Bruce Banner e Carol Danvers.",
        "Wong présente Shang-Chi et Katy à Bruce Banner et Carol Danvers.",
        "Wong presenta a Shang-Chi y Katy a Bruce Banner y Carol Danvers.",
        "Wong stellt Shang-Chi und Katy Bruce Banner und Carol Danvers vor.",
      ),
    ),
    scene(
      "end",
      l(
        "Xialing takes over the Ten Rings and begins training women alongside men.",
        "Xialing assume la guida dei Dieci Anelli e inizia ad addestrare donne accanto agli uomini.",
        "Xialing prend la tête des Dix Anneaux et forme des femmes aux côtés des hommes.",
        "Xialing toma el mando de los Diez Anillos y entrena a mujeres junto a hombres.",
        "Xialing übernimmt die Zehn Ringe und trainiert Frauen neben Männern.",
      ),
    ),
  ),

  "i-eternals": scenes(
    scene(
      "mid",
      l(
        "Eros and Pip the Troll meet Thena, Makkari and Druig.",
        "Eros e Pip il Troll incontrano Thena, Makkari e Druig.",
        "Éros et Pip le Troll rencontrent Thena, Makkari et Druig.",
        "Eros y Pip el Troll se encuentran con Thena, Makkari y Druig.",
        "Eros und Pip der Troll treffen Thena, Makkari und Druig.",
      ),
    ),
    scene(
      "end",
      l(
        "Someone asks Dane Whitman if he is ready to wield the Ebony Blade.",
        "Qualcuno chiede a Dane Whitman se è pronto a impugnare la Lama d'Ebano.",
        "Quelqu'un demande à Dane Whitman s'il est prêt à manier la Lame d'ébène.",
        "Alguien pregunta a Dane Whitman si está listo para empuñar la Hoja de Ébano.",
        "Jemand fragt Dane Whitman, ob er bereit ist, die Ebenholzklinge zu führen.",
      ),
    ),
  ),

  "i-spider-man-no-way-home": scenes(
    scene(
      "mid",
      l(
        "Eddie Brock and Venom are sent back to their own universe.",
        "Eddie Brock e Venom vengono rimandati nel loro universo.",
        "Eddie Brock et Venom sont renvoyés dans leur univers.",
        "Eddie Brock y Venom son devueltos a su universo.",
        "Eddie Brock und Venom werden in ihr Universum zurückgeschickt.",
      ),
    ),
    scene(
      "end",
      l(
        "A teaser for Doctor Strange in the Multiverse of Madness.",
        "Un teaser di Doctor Strange nel Multiverso della Follia.",
        "Un teaser de Doctor Strange in the Multiverse of Madness.",
        "Un tráiler de Doctor Strange en el multiverso de la locura.",
        "Ein Teaser zu Doctor Strange in the Multiverse of Madness.",
      ),
    ),
  ),

  "i-doctor-strange-in-the-multiverse-of-madness": scenes(
    scene(
      "mid",
      l(
        "Clea tells Strange that his actions have caused an incursion he must fix.",
        "Clea avverte Strange che le sue azioni hanno causato un'incursione che deve riparare.",
        "Clea avertit Strange que ses actions ont provoqué une incursion qu'il doit réparer.",
        "Clea avisa a Strange de que sus acciones han causado una incursión que debe reparar.",
        "Clea warnt Strange, dass seine Taten eine Inkursion ausgelöst haben, die er beheben muss.",
      ),
    ),
    scene(
      "end",
      l(
        "A pizza vendor is freed from a spell cast by Strange.",
        "Un venditore di pizza viene liberato da un incantesimo di Strange.",
        "Un vendeur de pizzas est libéré d'un sort jeté par Strange.",
        "Un vendedor de pizza es liberado de un hechizo de Strange.",
        "Ein Pizzaverkäufer wird von einem Zauber Stranges befreit.",
      ),
    ),
  ),

  "i-thor-love-and-thunder": scenes(
    scene(
      "mid",
      l(
        "Zeus sends his son Hercules to take revenge on Thor.",
        "Zeus manda suo figlio Ercole a vendicarsi di Thor.",
        "Zeus envoie son fils Hercule se venger de Thor.",
        "Zeus envía a su hijo Hércules a vengarse de Thor.",
        "Zeus schickt seinen Sohn Herkules, um sich an Thor zu rächen.",
      ),
    ),
    scene(
      "end",
      l(
        "Jane Foster arrives at Valhalla, where Heimdall welcomes her.",
        "Jane Foster arriva al Valhalla, dove Heimdall la accoglie.",
        "Jane Foster arrive au Valhalla, où Heimdall l'accueille.",
        "Jane Foster llega al Valhalla, donde Heimdall le da la bienvenida.",
        "Jane Foster kommt in Walhalla an, wo Heimdall sie begrüßt.",
      ),
    ),
  ),

  "i-werewolf-by-night": { scenes: [] },

  "i-black-panther-wakanda-forever": scenes(
    scene(
      "mid",
      l(
        "Shuri meets Nakia in Haiti and learns that T'Challa had a son.",
        "Shuri incontra Nakia ad Haiti e scopre che T'Challa aveva un figlio.",
        "Shuri rencontre Nakia en Haïti et apprend que T'Challa avait un fils.",
        "Shuri se encuentra con Nakia en Haití y descubre que T'Challa tenía un hijo.",
        "Shuri trifft Nakia in Haiti und erfährt, dass T'Challa einen Sohn hatte.",
      ),
    ),
  ),

  "i-the-guardians-of-the-galaxy-holiday-special": scenes(
    scene(
      "credits",
      l(
        "Rocket jokes that they will need another special as Groot's decorations fall.",
        "Rocket scherza sul fatto che servirà un altro speciale mentre le decorazioni di Groot cadono.",
        "Rocket plaisante en disant qu'il faudra un autre spécial tandis que les décorations de Groot tombent.",
        "Rocket bromea con que hará falta otro especial mientras se caen las decoraciones de Groot.",
        "Rocket scherzt, dass man ein weiteres Special brauche, während Groots Dekoration herunterfällt.",
      ),
    ),
  ),

  "i-ant-man-and-the-wasp-quantumania": scenes(
    scene(
      "mid",
      l(
        "Variants of Kang, led by Immortus, plan an uprising across the multiverse.",
        "Alcune varianti di Kang, guidate da Immortus, progettano una rivolta nel multiverso.",
        "Des variantes de Kang, menées par Immortus, préparent un soulèvement dans le multivers.",
        "Variantes de Kang, lideradas por Inmortus, planean una sublevación en el multiverso.",
        "Kang-Varianten unter Führung von Immortus planen einen Aufstand im Multiversum.",
      ),
    ),
    scene(
      "end",
      l(
        "Loki and Mobius meet a variant of Kang in 1893.",
        "Loki e Mobius incontrano una variante di Kang nel 1893.",
        "Loki et Mobius rencontrent une variante de Kang en 1893.",
        "Loki y Mobius se encuentran con una variante de Kang en 1893.",
        "Loki und Mobius treffen 1893 auf eine Kang-Variante.",
      ),
    ),
  ),

  "i-guardians-of-the-galaxy-vol-3": scenes(
    scene(
      "credits",
      l(
        "The new Guardians discuss their favorite Earth songs in a desert.",
        "I nuovi Guardiani parlano delle loro canzoni terrestri preferite in un deserto.",
        "Les nouveaux Gardiens parlent de leurs chansons terriennes préférées dans un désert.",
        "Los nuevos Guardianes hablan de sus canciones terrícolas favoritas en un desierto.",
        "Die neuen Guardians sprechen in einer Wüste über ihre liebsten Songs von der Erde.",
      ),
    ),
    scene(
      "end",
      l(
        "Peter has breakfast with his grandfather and they argue.",
        "Peter fa colazione con suo nonno e i due discutono.",
        "Peter prend son petit-déjeuner avec son grand-père et ils se disputent.",
        "Peter desayuna con su abuelo y discuten.",
        "Peter frühstückt mit seinem Großvater und die beiden streiten.",
      ),
    ),
  ),

  "i-the-marvels": scenes(
    scene(
      "mid",
      l(
        "Monica Rambeau wakes in a parallel universe and meets another version of her mother.",
        "Monica Rambeau si risveglia in un universo parallelo e incontra un'altra versione di sua madre.",
        "Monica Rambeau se réveille dans un univers parallèle et rencontre une autre version de sa mère.",
        "Monica Rambeau despierta en un universo paralelo y se encuentra con otra versión de su madre.",
        "Monica Rambeau erwacht in einem Paralleluniversum und trifft eine andere Version ihrer Mutter.",
      ),
    ),
  ),

  "i-deadpool-wolverine": scenes(
    scene(
      "end",
      l(
        "Wade Wilson shows the TVA footage that clears his name.",
        "Wade Wilson mostra alla TVA un filmato che scagiona il suo nome.",
        "Wade Wilson montre à la TVA des images qui le disculpent.",
        "Wade Wilson enseña a la TVA unas imágenes que limpian su nombre.",
        "Wade Wilson zeigt der TVA Aufnahmen, die seinen Namen reinwaschen.",
      ),
    ),
  ),

  "i-captain-america-brave-new-world": scenes(
    scene(
      "end",
      l(
        "Samuel Sterns warns Sam Wilson of a threat coming from other universes.",
        "Samuel Sterns avverte Sam Wilson di una minaccia in arrivo da altri universi.",
        "Samuel Sterns prévient Sam Wilson d'une menace venue d'autres univers.",
        "Samuel Sterns avisa a Sam Wilson de una amenaza procedente de otros universos.",
        "Samuel Sterns warnt Sam Wilson vor einer Bedrohung aus anderen Universen.",
      ),
    ),
  ),

  "i-thunderbolts": scenes(
    scene(
      "credits",
      l(
        "Alexei admires a cereal box featuring the New Avengers.",
        "Alexei ammira una scatola di cereali con i New Avengers.",
        "Alexei admire une boîte de céréales à l'effigie des New Avengers.",
        "Alexei admira una caja de cereales con los New Avengers.",
        "Alexei bewundert eine Müslipackung mit den New Avengers.",
      ),
    ),
    scene(
      "end",
      l(
        "The team learns of an unidentified spaceship, a tease for Avengers: Doomsday.",
        "La squadra viene a sapere di un'astronave sconosciuta, un'anticipazione di Avengers: Doomsday.",
        "L'équipe apprend l'existence d'un vaisseau inconnu, un avant-goût d'Avengers: Doomsday.",
        "El equipo se entera de una nave desconocida, un adelanto de Avengers: Doomsday.",
        "Das Team erfährt von einem unbekannten Raumschiff, ein Vorgeschmack auf Avengers: Doomsday.",
      ),
    ),
  ),

  "i-the-fantastic-four-first-steps": scenes(
    scene(
      "mid",
      l(
        "Sue reads to Franklin four years later, and Doctor Doom appears.",
        "Quattro anni dopo, Sue legge a Franklin e compare il Dottor Destino.",
        "Quatre ans plus tard, Sue lit une histoire à Franklin et le Docteur Fatalis apparaît.",
        "Cuatro años después, Sue lee a Franklin y aparece el Doctor Muerte.",
        "Vier Jahre später liest Sue Franklin vor, und Doctor Doom erscheint.",
      ),
    ),
    scene(
      "end",
      l(
        "H.E.R.B.I.E. turns off a cartoon based on the Fantastic Four.",
        "H.E.R.B.I.E. spegne un cartone animato sui Fantastici 4.",
        "H.E.R.B.I.E. éteint un dessin animé sur les Quatre Fantastiques.",
        "H.E.R.B.I.E. apaga un dibujo animado de los 4 Fantásticos.",
        "H.E.R.B.I.E. schaltet eine Zeichentrickserie über die Fantastic Four aus.",
      ),
    ),
  ),

  "i-spider-man-brand-new-day": scenes(
    scene(
      "credits",
      l(
        "Ned's Spidey Tracker app detects a new Spider-Man sighting, then glitches as the map zooms away from Earth.",
        "L'app Spidey Tracker di Ned segnala un nuovo avvistamento di Spider-Man, poi va in errore mentre la mappa si allontana dalla Terra.",
        "L'appli Spidey Tracker de Ned détecte une nouvelle apparition de Spider-Man, puis bugue alors que la carte s'éloigne de la Terre.",
        "La aplicación Spidey Tracker de Ned detecta un nuevo avistamiento de Spider-Man y falla cuando el mapa se aleja de la Tierra.",
        "Neds App Spidey Tracker meldet eine neue Spider-Man-Sichtung und stürzt dann ab, während die Karte von der Erde wegzoomt.",
      ),
    ),
  ),
};

export function getPostCredits(titleId: string): PostCredits | null {
  return Object.hasOwn(POST_CREDITS, titleId) ? POST_CREDITS[titleId] : null;
}
