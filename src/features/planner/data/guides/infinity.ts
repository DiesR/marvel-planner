import { essential, guide, localized as l, optional, recommended, type TitleGuide } from "./types";

export const INFINITY_GUIDES: Record<string, TitleGuide> = {
  "i-iron-man": guide([]),

  "i-the-incredible-hulk": guide([
    optional(
      "i-iron-man",
      l(
        "Tony Stark makes a cameo at the end.",
        "Tony Stark compare in un cameo alla fine.",
        "Tony Stark fait une brève apparition à la fin.",
        "Tony Stark aparece en un cameo al final.",
        "Tony Stark hat am Ende einen kurzen Auftritt.",
      ),
    ),
  ]),

  "i-iron-man-2": guide([
    essential(
      "i-iron-man",
      l(
        "Tony, Pepper, Rhodey and the arc reactor all start there.",
        "Tony, Pepper, Rhodey e il reattore arc nascono lì.",
        "Tony, Pepper, Rhodey et le réacteur ARC commencent là.",
        "Tony, Pepper, Rhodey y el reactor arc empiezan allí.",
        "Tony, Pepper, Rhodey und der Arc-Reaktor beginnen dort.",
      ),
    ),
  ]),

  "i-thor": guide([
    optional(
      "i-iron-man-2",
      l(
        "Agent Coulson and S.H.I.E.L.D., who appear again here, are developed there.",
        "L'agente Coulson e lo S.H.I.E.L.D., che tornano qui, vengono approfonditi lì.",
        "L'agent Coulson et le S.H.I.E.L.D., qui reviennent ici, y sont développés.",
        "El agente Coulson y S.H.I.E.L.D., que vuelven aquí, se desarrollan allí.",
        "Agent Coulson und S.H.I.E.L.D., die hier wieder auftauchen, werden dort vertieft.",
      ),
    ),
  ]),

  "i-captain-america-the-first-avenger": guide([
    optional(
      "i-thor",
      l(
        "The Tesseract, central to this film, is shown there.",
        "Il Tesseract, centrale in questo film, viene mostrato lì.",
        "Le Tesseract, central dans ce film, y est montré.",
        "El Teseracto, central en esta película, se muestra allí.",
        "Der Tesserakt, zentral in diesem Film, wird dort gezeigt.",
      ),
    ),
  ]),

  "i-the-avengers": guide([
    essential(
      "i-iron-man",
      l(
        "Tony Stark's story and his armor.",
        "La storia di Tony Stark e la sua armatura.",
        "L'histoire de Tony Stark et son armure.",
        "La historia de Tony Stark y su armadura.",
        "Tony Starks Geschichte und seine Rüstung.",
      ),
    ),
    essential(
      "i-thor",
      l(
        "Thor and Loki's conflict leads straight into this film.",
        "Il conflitto tra Thor e Loki porta direttamente a questo film.",
        "Le conflit entre Thor et Loki mène directement à ce film.",
        "El conflicto entre Thor y Loki lleva directamente a esta película.",
        "Der Konflikt zwischen Thor und Loki führt direkt zu diesem Film.",
      ),
    ),
    essential(
      "i-captain-america-the-first-avenger",
      l(
        "Steve Rogers' origin and the Tesseract.",
        "L'origine di Steve Rogers e il Tesseract.",
        "L'origine de Steve Rogers et le Tesseract.",
        "El origen de Steve Rogers y el Teseracto.",
        "Steve Rogers' Ursprung und der Tesserakt.",
      ),
    ),
    recommended(
      "i-the-incredible-hulk",
      l(
        "Bruce Banner's backstory, with a different actor.",
        "Il passato di Bruce Banner, con un altro attore.",
        "Le passé de Bruce Banner, avec un autre acteur.",
        "El pasado de Bruce Banner, con otro actor.",
        "Bruce Banners Vorgeschichte, mit einem anderen Schauspieler.",
      ),
    ),
    recommended(
      "i-iron-man-2",
      l(
        "Introduces Black Widow and Nick Fury's plans for the team.",
        "Introduce Vedova Nera e i piani di Nick Fury per la squadra.",
        "Présente Black Widow et les plans de Nick Fury pour l'équipe.",
        "Presenta a Viuda Negra y los planes de Nick Fury para el equipo.",
        "Führt Black Widow und Nick Furys Pläne für das Team ein.",
      ),
    ),
  ]),

  "i-iron-man-3": guide([
    essential(
      "i-the-avengers",
      l(
        "Tony is still shaken by the battle of New York.",
        "Tony è ancora scosso dalla battaglia di New York.",
        "Tony est encore bouleversé par la bataille de New York.",
        "Tony sigue afectado por la batalla de Nueva York.",
        "Tony ist noch von der Schlacht um New York erschüttert.",
      ),
    ),
    recommended(
      "i-iron-man",
      l(
        "Tony Stark's story and Pepper Potts.",
        "La storia di Tony Stark e Pepper Potts.",
        "L'histoire de Tony Stark et Pepper Potts.",
        "La historia de Tony Stark y Pepper Potts.",
        "Tony Starks Geschichte und Pepper Potts.",
      ),
    ),
  ]),

  "i-thor-the-dark-world": guide([
    essential(
      "i-thor",
      l(
        "Thor, Jane Foster and Asgard are introduced there.",
        "Thor, Jane Foster e Asgard vengono presentati lì.",
        "Thor, Jane Foster et Asgard y sont présentés.",
        "Thor, Jane Foster y Asgard se presentan allí.",
        "Thor, Jane Foster und Asgard werden dort vorgestellt.",
      ),
    ),
    essential(
      "i-the-avengers",
      l(
        "Loki's fate after the battle of New York.",
        "Il destino di Loki dopo la battaglia di New York.",
        "Le sort de Loki après la bataille de New York.",
        "El destino de Loki tras la batalla de Nueva York.",
        "Lokis Schicksal nach der Schlacht um New York.",
      ),
    ),
  ]),

  "i-captain-america-the-winter-soldier": guide([
    essential(
      "i-captain-america-the-first-avenger",
      l(
        "Steve's past with Bucky and Peggy starts there.",
        "Il passato di Steve con Bucky e Peggy comincia lì.",
        "Le passé de Steve avec Bucky et Peggy commence là.",
        "El pasado de Steve con Bucky y Peggy empieza allí.",
        "Steves Vergangenheit mit Bucky und Peggy beginnt dort.",
      ),
    ),
    essential(
      "i-the-avengers",
      l(
        "Steve's new life after the battle of New York and S.H.I.E.L.D.",
        "La nuova vita di Steve dopo la battaglia di New York e lo S.H.I.E.L.D.",
        "La nouvelle vie de Steve après la bataille de New York et le S.H.I.E.L.D.",
        "La nueva vida de Steve tras la batalla de Nueva York y S.H.I.E.L.D.",
        "Steves neues Leben nach der Schlacht um New York und S.H.I.E.L.D.",
      ),
    ),
  ]),

  "i-guardians-of-the-galaxy": guide([
    optional(
      "i-the-avengers",
      l(
        "Thanos is teased there, and is the Guardians' great threat.",
        "Lì viene mostrato Thanos, la grande minaccia dei Guardiani.",
        "Thanos y est dévoilé, la grande menace des Gardiens.",
        "Allí se muestra a Thanos, la gran amenaza de los Guardianes.",
        "Dort wird Thanos angedeutet, die große Bedrohung der Guardians.",
      ),
    ),
    optional(
      "i-thor-the-dark-world",
      l(
        "Introduces the Aether, an Infinity Stone, and the Collector.",
        "Introduce l'Aether, una Gemma dell'Infinito, e il Collezionista.",
        "Présente l'Éther, une Pierre d'Infinité, et le Collectionneur.",
        "Presenta el Éter, una Gema del Infinito, y al Coleccionista.",
        "Führt den Äther, einen Infinity-Stein, und den Collector ein.",
      ),
    ),
  ]),

  "i-avengers-age-of-ultron": guide([
    essential(
      "i-the-avengers",
      l(
        "The team and Loki's scepter.",
        "La squadra e lo scettro di Loki.",
        "L'équipe et le sceptre de Loki.",
        "El equipo y el cetro de Loki.",
        "Das Team und Lokis Zepter.",
      ),
    ),
    essential(
      "i-captain-america-the-winter-soldier",
      l(
        "The fall of S.H.I.E.L.D. changes the team's mission.",
        "La caduta dello S.H.I.E.L.D. cambia la missione della squadra.",
        "La chute du S.H.I.E.L.D. change la mission de l'équipe.",
        "La caída de S.H.I.E.L.D. cambia la misión del equipo.",
        "Der Fall von S.H.I.E.L.D. verändert die Mission des Teams.",
      ),
    ),
    recommended(
      "i-iron-man-3",
      l(
        "Tony's fear of another attack drives the story.",
        "La paura di Tony di un nuovo attacco guida la storia.",
        "La peur de Tony d'une nouvelle attaque guide l'histoire.",
        "El miedo de Tony a otro ataque impulsa la historia.",
        "Tonys Angst vor einem neuen Angriff treibt die Handlung an.",
      ),
    ),
    recommended(
      "i-thor-the-dark-world",
      l(
        "Thor's visions and the Infinity Stones.",
        "Le visioni di Thor e le Gemme dell'Infinito.",
        "Les visions de Thor et les Pierres d'Infinité.",
        "Las visiones de Thor y las Gemas del Infinito.",
        "Thors Visionen und die Infinity-Steine.",
      ),
    ),
  ]),

  "i-ant-man": guide([
    recommended(
      "i-captain-america-the-winter-soldier",
      l(
        "Sam Wilson, who appears here, is introduced there.",
        "Sam Wilson, che compare qui, viene presentato lì.",
        "Sam Wilson, qui apparaît ici, y est présenté.",
        "Sam Wilson, que aparece aquí, se presenta allí.",
        "Sam Wilson, der hier auftritt, wird dort vorgestellt.",
      ),
    ),
    optional(
      "i-avengers-age-of-ultron",
      l(
        "Explains the state of the Avengers when the film starts.",
        "Spiega la situazione dei Vendicatori quando inizia il film.",
        "Explique la situation des Avengers au début du film.",
        "Explica la situación de los Vengadores al empezar la película.",
        "Erklärt die Lage der Avengers zu Beginn des Films.",
      ),
    ),
  ]),

  "i-captain-america-civil-war": guide([
    essential(
      "i-avengers-age-of-ultron",
      l(
        "The destruction in Sokovia triggers the conflict.",
        "La distruzione di Sokovia scatena il conflitto.",
        "La destruction de la Sokovie déclenche le conflit.",
        "La destrucción de Sokovia desencadena el conflicto.",
        "Die Zerstörung von Sokovia löst den Konflikt aus.",
      ),
    ),
    essential(
      "i-captain-america-the-winter-soldier",
      l(
        "Bucky, the Winter Soldier, is the heart of the story.",
        "Bucky, il Soldato d'Inverno, è il cuore della storia.",
        "Bucky, le Soldat de l'Hiver, est le cœur de l'histoire.",
        "Bucky, el Soldado del Invierno, es el corazón de la historia.",
        "Bucky, der Winter Soldier, ist das Herz der Geschichte.",
      ),
    ),
    recommended(
      "i-ant-man",
      l(
        "Introduces Scott Lang, who joins the fight.",
        "Introduce Scott Lang, che si unisce allo scontro.",
        "Présente Scott Lang, qui rejoint le combat.",
        "Presenta a Scott Lang, que se une al enfrentamiento.",
        "Führt Scott Lang ein, der sich dem Kampf anschließt.",
      ),
    ),
    recommended(
      "i-captain-america-the-first-avenger",
      l(
        "Steve and Bucky's friendship.",
        "L'amicizia tra Steve e Bucky.",
        "L'amitié entre Steve et Bucky.",
        "La amistad entre Steve y Bucky.",
        "Die Freundschaft zwischen Steve und Bucky.",
      ),
    ),
  ]),

  "i-doctor-strange": guide([]),

  "i-guardians-of-the-galaxy-vol-2": guide([
    essential(
      "i-guardians-of-the-galaxy",
      l(
        "The team, its characters and its tone start there.",
        "La squadra, i personaggi e il tono nascono lì.",
        "L'équipe, les personnages et le ton commencent là.",
        "El equipo, los personajes y el tono empiezan allí.",
        "Das Team, die Figuren und der Ton beginnen dort.",
      ),
    ),
  ]),

  "i-spider-man-homecoming": guide([
    essential(
      "i-captain-america-civil-war",
      l(
        "Peter Parker's first appearance and Tony's mentorship.",
        "Il primo ingresso di Peter Parker e il mentorato di Tony.",
        "La première apparition de Peter Parker et le mentorat de Tony.",
        "La primera aparición de Peter Parker y la tutoría de Tony.",
        "Peter Parkers erster Auftritt und Tonys Mentorschaft.",
      ),
    ),
    recommended(
      "i-the-avengers",
      l(
        "The alien attack on New York is the origin of the villain's business.",
        "L'attacco alieno a New York è all'origine dell'attività del cattivo.",
        "L'attaque extraterrestre sur New York est à l'origine des affaires du méchant.",
        "El ataque alienígena a Nueva York origina el negocio del villano.",
        "Der Alien-Angriff auf New York ist der Ursprung des Geschäfts des Schurken.",
      ),
    ),
  ]),

  "i-thor-ragnarok": guide([
    essential(
      "i-thor-the-dark-world",
      l(
        "Thor's recent history and Loki's fate.",
        "La storia recente di Thor e il destino di Loki.",
        "L'histoire récente de Thor et le sort de Loki.",
        "La historia reciente de Thor y el destino de Loki.",
        "Thors jüngste Geschichte und Lokis Schicksal.",
      ),
    ),
    essential(
      "i-avengers-age-of-ultron",
      l(
        "Hulk disappeared at the end of that film.",
        "Hulk è scomparso alla fine di quel film.",
        "Hulk a disparu à la fin de ce film.",
        "Hulk desapareció al final de esa película.",
        "Hulk verschwand am Ende dieses Films.",
      ),
    ),
    recommended(
      "i-thor",
      l(
        "Thor's origin and Odin.",
        "L'origine di Thor e Odino.",
        "L'origine de Thor et Odin.",
        "El origen de Thor y Odín.",
        "Thors Ursprung und Odin.",
      ),
    ),
    recommended(
      "i-the-avengers",
      l(
        "The bond between Thor and Loki, and the team.",
        "Il legame tra Thor e Loki, e la squadra.",
        "Le lien entre Thor et Loki, et l'équipe.",
        "El vínculo entre Thor y Loki, y el equipo.",
        "Die Bindung zwischen Thor und Loki, und das Team.",
      ),
    ),
    optional(
      "i-doctor-strange",
      l(
        "Doctor Strange makes a cameo.",
        "Doctor Strange compare in un cameo.",
        "Doctor Strange fait un caméo.",
        "Doctor Strange hace un cameo.",
        "Doctor Strange hat einen Gastauftritt.",
      ),
    ),
  ]),

  "i-black-panther": guide([
    essential(
      "i-captain-america-civil-war",
      l(
        "T'Challa's introduction and the events that open this film.",
        "L'introduzione di T'Challa e gli eventi con cui si apre questo film.",
        "La présentation de T'Challa et les événements qui ouvrent ce film.",
        "La presentación de T'Challa y los hechos con los que empieza esta película.",
        "T'Challas Einführung und die Ereignisse, mit denen dieser Film beginnt.",
      ),
    ),
  ]),

  "i-avengers-infinity-war": guide([
    essential(
      "i-the-avengers",
      l(
        "The team, and the first tease of Thanos.",
        "La squadra, e il primo accenno a Thanos.",
        "L'équipe, et la première allusion à Thanos.",
        "El equipo, y la primera pista sobre Thanos.",
        "Das Team und der erste Hinweis auf Thanos.",
      ),
    ),
    essential(
      "i-avengers-age-of-ultron",
      l(
        "Vision, Wanda and the Mind Stone.",
        "Visione, Wanda e la Gemma della Mente.",
        "Vision, Wanda et la Pierre de l'Esprit.",
        "Visión, Wanda y la Gema de la Mente.",
        "Vision, Wanda und der Gedankenstein.",
      ),
    ),
    essential(
      "i-captain-america-civil-war",
      l(
        "The team is divided and Tony and Steve are estranged.",
        "La squadra è divisa e Tony e Steve sono lontani.",
        "L'équipe est divisée et Tony et Steve sont brouillés.",
        "El equipo está dividido y Tony y Steve están distanciados.",
        "Das Team ist gespalten und Tony und Steve sind sich entfremdet.",
      ),
    ),
    essential(
      "i-thor-ragnarok",
      l(
        "The fate of Asgard, and Thor and Hulk's situation.",
        "Il destino di Asgard, e la situazione di Thor e Hulk.",
        "Le sort d'Asgard, et la situation de Thor et Hulk.",
        "El destino de Asgard, y la situación de Thor y Hulk.",
        "Das Schicksal von Asgard und die Lage von Thor und Hulk.",
      ),
    ),
    essential(
      "i-black-panther",
      l(
        "Wakanda is where the final battle takes place.",
        "Il Wakanda è il luogo della battaglia finale.",
        "Le Wakanda est le lieu de la bataille finale.",
        "Wakanda es el lugar de la batalla final.",
        "Wakanda ist der Ort der Schlussschlacht.",
      ),
    ),
    essential(
      "i-guardians-of-the-galaxy",
      l(
        "Gamora, Star-Lord and the Guardians' role.",
        "Gamora, Star-Lord e il ruolo dei Guardiani.",
        "Gamora, Star-Lord et le rôle des Gardiens.",
        "Gamora, Star-Lord y el papel de los Guardianes.",
        "Gamora, Star-Lord und die Rolle der Guardians.",
      ),
    ),
    essential(
      "i-doctor-strange",
      l(
        "Strange and the Time Stone.",
        "Strange e la Gemma del Tempo.",
        "Strange et la Pierre du Temps.",
        "Strange y la Gema del Tiempo.",
        "Strange und der Zeitstein.",
      ),
    ),
    recommended(
      "i-guardians-of-the-galaxy-vol-2",
      l(
        "Nebula, Yondu and Ego explain the Guardians' bonds.",
        "Nebula, Yondu ed Ego spiegano i legami dei Guardiani.",
        "Nebula, Yondu et Ego expliquent les liens des Gardiens.",
        "Nebula, Yondu y Ego explican los vínculos de los Guardianes.",
        "Nebula, Yondu und Ego erklären die Bindungen der Guardians.",
      ),
    ),
    recommended(
      "i-spider-man-homecoming",
      l(
        "Peter Parker and his bond with Tony.",
        "Peter Parker e il suo legame con Tony.",
        "Peter Parker et son lien avec Tony.",
        "Peter Parker y su vínculo con Tony.",
        "Peter Parker und seine Bindung zu Tony.",
      ),
    ),
    recommended(
      "i-thor-the-dark-world",
      l(
        "Introduces the Aether, an Infinity Stone.",
        "Introduce l'Aether, una Gemma dell'Infinito.",
        "Présente l'Éther, une Pierre d'Infinité.",
        "Presenta el Éter, una Gema del Infinito.",
        "Führt den Äther, einen Infinity-Stein, ein.",
      ),
    ),
    optional(
      "i-iron-man",
      l(
        "Tony's origin gives weight to his story here.",
        "L'origine di Tony dà peso alla sua storia qui.",
        "L'origine de Tony donne du poids à son histoire ici.",
        "El origen de Tony da peso a su historia aquí.",
        "Tonys Ursprung gibt seiner Geschichte hier Gewicht.",
      ),
    ),
    optional(
      "i-captain-america-the-first-avenger",
      l(
        "Steve's origin and the first Infinity Stone seen in the MCU.",
        "L'origine di Steve e la prima Gemma dell'Infinito vista nel MCU.",
        "L'origine de Steve et la première Pierre d'Infinité vue dans le MCU.",
        "El origen de Steve y la primera Gema del Infinito vista en el MCU.",
        "Steves Ursprung und der erste Infinity-Stein im MCU.",
      ),
    ),
  ]),

  "i-ant-man-and-the-wasp": guide([
    essential(
      "i-ant-man",
      l(
        "Scott, Hope and Hank's story begins there.",
        "La storia di Scott, Hope e Hank comincia lì.",
        "L'histoire de Scott, Hope et Hank commence là.",
        "La historia de Scott, Hope y Hank empieza allí.",
        "Die Geschichte von Scott, Hope und Hank beginnt dort.",
      ),
    ),
    essential(
      "i-captain-america-civil-war",
      l(
        "Explains why Scott is under house arrest.",
        "Spiega perché Scott è agli arresti domiciliari.",
        "Explique pourquoi Scott est assigné à résidence.",
        "Explica por qué Scott está bajo arresto domiciliario.",
        "Erklärt, warum Scott unter Hausarrest steht.",
      ),
    ),
    optional(
      "i-avengers-infinity-war",
      l(
        "The events of this film happen at the same time as that one.",
        "Gli eventi di questo film avvengono in contemporanea con quelli di quel film.",
        "Les événements de ce film se déroulent en même temps que ceux de celui-là.",
        "Los hechos de esta película ocurren a la vez que los de aquella.",
        "Die Ereignisse dieses Films finden gleichzeitig mit denen jenes Films statt.",
      ),
    ),
  ]),

  "i-captain-marvel": guide([
    recommended(
      "i-guardians-of-the-galaxy",
      l(
        "The Kree, Ronan and the cosmic setting are introduced there.",
        "I Kree, Ronan e l'ambientazione cosmica sono introdotti lì.",
        "Les Krees, Ronan et le cadre cosmique y sont présentés.",
        "Los Kree, Ronan y el entorno cósmico se presentan allí.",
        "Die Kree, Ronan und das kosmische Umfeld werden dort eingeführt.",
      ),
    ),
    optional(
      "i-avengers-infinity-war",
      l(
        "Fury's last act in that film leads to this one.",
        "L'ultimo gesto di Fury in quel film porta a questo.",
        "Le dernier geste de Fury dans ce film mène à celui-ci.",
        "El último gesto de Fury en esa película lleva a esta.",
        "Furys letzte Handlung in jenem Film führt zu diesem.",
      ),
    ),
    optional(
      "i-the-avengers",
      l(
        "Introduces Nick Fury and S.H.I.E.L.D. as seen later.",
        "Introduce Nick Fury e lo S.H.I.E.L.D. come si vedranno più avanti.",
        "Présente Nick Fury et le S.H.I.E.L.D. tels qu'on les voit plus tard.",
        "Presenta a Nick Fury y a S.H.I.E.L.D. tal como se verán después.",
        "Führt Nick Fury und S.H.I.E.L.D. ein, wie man sie später sieht.",
      ),
    ),
  ]),

  "i-avengers-endgame": guide([
    essential(
      "i-avengers-infinity-war",
      l(
        "It continues directly from its ending.",
        "Continua direttamente dalla sua conclusione.",
        "Il continue directement depuis sa fin.",
        "Continúa directamente desde su final.",
        "Er setzt direkt an dessen Ende an.",
      ),
    ),
    recommended(
      "i-captain-marvel",
      l(
        "Carol Danvers joins the final fight.",
        "Carol Danvers si unisce allo scontro finale.",
        "Carol Danvers rejoint le combat final.",
        "Carol Danvers se une a la lucha final.",
        "Carol Danvers schließt sich dem finalen Kampf an.",
      ),
    ),
    recommended(
      "i-ant-man-and-the-wasp",
      l(
        "Explains the Quantum Realm, which is key to the plan.",
        "Spiega il Regno Quantico, chiave del piano.",
        "Explique le Royaume quantique, clé du plan.",
        "Explica el Reino Cuántico, clave del plan.",
        "Erklärt das Quantenreich, den Schlüssel des Plans.",
      ),
    ),
    recommended(
      "i-the-avengers",
      l(
        "Revisited during the time travel.",
        "Rivisitato durante i viaggi nel tempo.",
        "Revisité pendant les voyages dans le temps.",
        "Se revisita durante los viajes en el tiempo.",
        "Wird bei den Zeitreisen noch einmal besucht.",
      ),
    ),
    recommended(
      "i-thor-the-dark-world",
      l(
        "Revisited during the time travel.",
        "Rivisitato durante i viaggi nel tempo.",
        "Revisité pendant les voyages dans le temps.",
        "Se revisita durante los viajes en el tiempo.",
        "Wird bei den Zeitreisen noch einmal besucht.",
      ),
    ),
    recommended(
      "i-guardians-of-the-galaxy",
      l(
        "Revisited during the time travel.",
        "Rivisitato durante i viaggi nel tempo.",
        "Revisité pendant les voyages dans le temps.",
        "Se revisita durante los viajes en el tiempo.",
        "Wird bei den Zeitreisen noch einmal besucht.",
      ),
    ),
    optional(
      "i-iron-man",
      l(
        "Tony's origin gives more weight to his ending.",
        "L'origine di Tony dà più peso al suo finale.",
        "L'origine de Tony donne plus de poids à sa fin.",
        "El origen de Tony da más peso a su final.",
        "Tonys Ursprung gibt seinem Ende mehr Gewicht.",
      ),
    ),
    optional(
      "i-captain-america-the-first-avenger",
      l(
        "Steve's origin gives more weight to his ending.",
        "L'origine di Steve dà più peso al suo finale.",
        "L'origine de Steve donne plus de poids à sa fin.",
        "El origen de Steve da más peso a su final.",
        "Steves Ursprung gibt seinem Ende mehr Gewicht.",
      ),
    ),
  ]),

  "i-spider-man-far-from-home": guide([
    essential(
      "i-avengers-endgame",
      l(
        "The film takes place after the Blip and Tony's loss.",
        "Il film si svolge dopo lo Schiocco e la perdita di Tony.",
        "Le film se déroule après le Blip et la perte de Tony.",
        "La película transcurre después del Chasquido y la pérdida de Tony.",
        "Der Film spielt nach dem Blip und Tonys Verlust.",
      ),
    ),
    essential(
      "i-spider-man-homecoming",
      l(
        "Peter, Ned, MJ and Happy are introduced there.",
        "Peter, Ned, MJ e Happy vengono presentati lì.",
        "Peter, Ned, MJ et Happy y sont présentés.",
        "Peter, Ned, MJ y Happy se presentan allí.",
        "Peter, Ned, MJ und Happy werden dort vorgestellt.",
      ),
    ),
    recommended(
      "i-avengers-infinity-war",
      l(
        "The Snap and what happened to Peter.",
        "Lo Schiocco e ciò che è successo a Peter.",
        "Le Snap et ce qui est arrivé à Peter.",
        "El Chasquido y lo que le ocurrió a Peter.",
        "Der Snap und was mit Peter geschah.",
      ),
    ),
  ]),
};
