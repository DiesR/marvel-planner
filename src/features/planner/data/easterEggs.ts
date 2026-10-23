import { localized as l, type Localized } from "./guides/types";

export type EasterEggKind = "stanLee";

export interface EasterEgg {
  kind: EasterEggKind;
  description: Localized;
  sourceUrl: string;
}

const STAN_LEE_SOURCE = "https://en.wikipedia.org/wiki/Stan_Lee_filmography";

const stanLee = (description: Localized): EasterEgg[] => [
  { kind: "stanLee", description, sourceUrl: STAN_LEE_SOURCE },
];

export const EASTER_EGGS: Record<string, EasterEgg[]> = {
  "i-iron-man": stanLee(
    l(
      "A guest at the gala whom Tony Stark mistakes for Hugh Hefner.",
      "Un invitato al gala che Tony Stark scambia per Hugh Hefner.",
      "Un invité du gala que Tony Stark prend pour Hugh Hefner.",
      "Un invitado a la gala al que Tony Stark confunde con Hugh Hefner.",
      "Ein Gast der Gala, den Tony Stark für Hugh Hefner hält.",
    ),
  ),
  "i-the-incredible-hulk": stanLee(
    l(
      "A man who drinks a soda contaminated with Bruce Banner's blood.",
      "Un uomo che beve una bibita contaminata dal sangue di Bruce Banner.",
      "Un homme qui boit un soda contaminé par le sang de Bruce Banner.",
      "Un hombre que bebe un refresco contaminado con la sangre de Bruce Banner.",
      "Ein Mann, der eine mit Bruce Banners Blut verunreinigte Limonade trinkt.",
    ),
  ),
  "i-iron-man-2": stanLee(
    l(
      "A guest at the Stark Expo whom Tony Stark mistakes for Larry King.",
      "Un ospite dello Stark Expo che Tony Stark scambia per Larry King.",
      "Un invité de la Stark Expo que Tony Stark prend pour Larry King.",
      "Un invitado de la Stark Expo al que Tony Stark confunde con Larry King.",
      "Ein Gast der Stark Expo, den Tony Stark für Larry King hält.",
    ),
  ),
  "i-thor": stanLee(
    l(
      "A man who tries to pull Mjolnir out of the ground with his truck.",
      "Un uomo che prova a estrarre Mjolnir dal terreno con il suo camion.",
      "Un homme qui essaie d'arracher Mjolnir du sol avec son camion.",
      "Un hombre que intenta sacar a Mjolnir del suelo con su camioneta.",
      "Ein Mann, der versucht, Mjolnir mit seinem Lastwagen aus dem Boden zu ziehen.",
    ),
  ),
  "i-captain-america-the-first-avenger": stanLee(
    l(
      "A general at the ceremony who mistakes another man for Captain America.",
      "Un generale alla cerimonia che scambia un altro uomo per Captain America.",
      "Un général lors de la cérémonie qui prend un autre homme pour Captain America.",
      "Un general en la ceremonia que confunde a otro hombre con el Capitán América.",
      "Ein General bei der Zeremonie, der einen anderen Mann für Captain America hält.",
    ),
  ),
  "i-the-avengers": stanLee(
    l(
      "A New Yorker who dismisses the idea of superheroes.",
      "Un newyorkese che liquida l'idea dei supereroi.",
      "Un New-Yorkais qui balaie l'idée de super-héros.",
      "Un neoyorquino que descarta la idea de los superhéroes.",
      "Ein New Yorker, der die Idee von Superhelden abtut.",
    ),
  ),
  "i-iron-man-3": stanLee(
    l(
      "A beauty pageant judge who gives a contestant a perfect 10.",
      "Un giudice di un concorso di bellezza che dà un 10 a una concorrente.",
      "Un juge de concours de beauté qui donne un 10 à une candidate.",
      "Un juez de un concurso de belleza que da un 10 a una concursante.",
      "Ein Juror eines Schönheitswettbewerbs, der einer Teilnehmerin eine 10 gibt.",
    ),
  ),
  "i-thor-the-dark-world": stanLee(
    l(
      "A patient in a psychiatric ward who asks for his shoe back.",
      "Un paziente di un reparto psichiatrico che rivuole indietro la sua scarpa.",
      "Un patient d'un service psychiatrique qui réclame sa chaussure.",
      "Un paciente de un psiquiátrico que pide que le devuelvan su zapato.",
      "Ein Patient einer Psychiatrie, der seinen Schuh zurückverlangt.",
    ),
  ),
  "i-captain-america-the-winter-soldier": stanLee(
    l(
      "A Smithsonian guard who realizes Captain America has taken his uniform.",
      "Una guardia dello Smithsonian che si accorge che Captain America gli ha preso la divisa.",
      "Un gardien du Smithsonian qui comprend que Captain America lui a pris son uniforme.",
      "Un guardia del Smithsonian que se da cuenta de que el Capitán América le ha quitado el uniforme.",
      "Ein Wachmann des Smithsonian, der merkt, dass Captain America seine Uniform genommen hat.",
    ),
  ),
  "i-guardians-of-the-galaxy": stanLee(
    l(
      "An elderly man chatting with a young woman, picked up by Rocket's scanner.",
      "Un anziano che chiacchiera con una giovane donna, individuato dallo scanner di Rocket.",
      "Un vieil homme discutant avec une jeune femme, repéré par le scanner de Rocket.",
      "Un anciano que conversa con una joven, detectado por el escáner de Rocket.",
      "Ein älterer Mann im Gespräch mit einer jungen Frau, erfasst von Rockets Scanner.",
    ),
  ),
  "i-avengers-age-of-ultron": stanLee(
    l(
      "A veteran at the victory party, drunk on an Asgardian drink.",
      "Un veterano alla festa della vittoria, ubriaco per una bevanda asgardiana.",
      "Un vétéran à la fête de la victoire, ivre d'une boisson asgardienne.",
      "Un veterano en la fiesta de la victoria, borracho por una bebida asgardiana.",
      "Ein Veteran auf der Siegesfeier, betrunken von einem asgardischen Getränk.",
    ),
  ),
  "i-ant-man": stanLee(
    l(
      "A bartender in the story Luis tells.",
      "Un barista nel racconto di Luis.",
      "Un barman dans l'histoire que raconte Luis.",
      "Un camarero en la historia que cuenta Luis.",
      "Ein Barkeeper in der Geschichte, die Luis erzählt.",
    ),
  ),
  "i-captain-america-civil-war": stanLee(
    l(
      "A delivery man bringing a package to Tony Stark.",
      "Un fattorino che consegna un pacco a Tony Stark.",
      "Un livreur qui apporte un colis à Tony Stark.",
      "Un repartidor que lleva un paquete a Tony Stark.",
      "Ein Paketbote, der Tony Stark ein Paket liefert.",
    ),
  ),
  "i-doctor-strange": stanLee(
    l(
      "A bus passenger reading Aldous Huxley, unaware of the battle nearby.",
      "Un passeggero di un autobus che legge Aldous Huxley, ignaro della battaglia vicina.",
      "Un passager de bus qui lit Aldous Huxley, ignorant la bataille toute proche.",
      "Un pasajero de autobús que lee a Aldous Huxley, ajeno a la batalla cercana.",
      "Ein Busfahrgast, der Aldous Huxley liest und von der Schlacht nebenan nichts bemerkt.",
    ),
  ),
  "i-guardians-of-the-galaxy-vol-2": stanLee(
    l(
      "An astronaut telling stories to the Watchers.",
      "Un astronauta che racconta storie agli Osservatori.",
      "Un astronaute qui raconte des histoires aux Observateurs.",
      "Un astronauta que cuenta historias a los Vigilantes.",
      "Ein Astronaut, der den Beobachtern Geschichten erzählt.",
    ),
  ),
  "i-spider-man-homecoming": stanLee(
    l(
      "Peter's neighbor Gary, who yells at Spider-Man.",
      "Gary, il vicino di Peter, che urla contro Spider-Man.",
      "Gary, le voisin de Peter, qui crie sur Spider-Man.",
      "Gary, el vecino de Peter, que le grita a Spider-Man.",
      "Peters Nachbar Gary, der Spider-Man anschreit.",
    ),
  ),
  "i-thor-ragnarok": stanLee(
    l(
      "The Grandmaster's barber, who cuts Thor's hair.",
      "Il barbiere del Gran Maestro, che taglia i capelli a Thor.",
      "Le barbier du Grand Maître, qui coupe les cheveux de Thor.",
      "El barbero del Gran Maestro, que le corta el pelo a Thor.",
      "Der Barbier des Grandmasters, der Thor die Haare schneidet.",
    ),
  ),
  "i-black-panther": stanLee(
    l(
      "A patron of the casino in Busan who takes unclaimed chips.",
      "Un cliente del casinò di Busan che prende le fiche non reclamate.",
      "Un client du casino de Busan qui prend des jetons non réclamés.",
      "Un cliente del casino de Busan que se lleva fichas sin reclamar.",
      "Ein Gast des Casinos in Busan, der nicht beanspruchte Chips einsteckt.",
    ),
  ),
  "i-avengers-infinity-war": stanLee(
    l(
      "A school bus driver who reacts to the arrival of Ebony Maw's ship.",
      "Un autista di scuolabus che reagisce all'arrivo della nave di Ebony Maw.",
      "Un chauffeur de bus scolaire qui réagit à l'arrivée du vaisseau d'Ebony Maw.",
      "Un conductor de autobús escolar que reacciona a la llegada de la nave de Ebony Maw.",
      "Ein Schulbusfahrer, der auf die Ankunft von Ebony Maws Schiff reagiert.",
    ),
  ),
  "i-ant-man-and-the-wasp": stanLee(
    l(
      "A pedestrian whose car is shrunk.",
      "Un passante la cui auto viene rimpicciolita.",
      "Un passant dont la voiture est rétrécie.",
      "Un peatón al que le encogen el coche.",
      "Ein Passant, dessen Auto geschrumpft wird.",
    ),
  ),
  "i-captain-marvel": stanLee(
    l(
      "A subway passenger reading the script of Mallrats. Posthumous appearance.",
      "Un passeggero della metropolitana che legge la sceneggiatura di Mallrats. Apparizione postuma.",
      "Un passager du métro qui lit le scénario de Mallrats. Apparition posthume.",
      "Un pasajero del metro que lee el guion de Mallrats. Aparición póstuma.",
      "Ein U-Bahn-Fahrgast, der das Drehbuch von Mallrats liest. Posthumer Auftritt.",
    ),
  ),
  "i-avengers-endgame": stanLee(
    l(
      "A driver in 1970, digitally de-aged. Posthumous appearance.",
      "Un automobilista nel 1970, ringiovanito digitalmente. Apparizione postuma.",
      "Un conducteur en 1970, rajeuni numériquement. Apparition posthume.",
      "Un conductor en 1970, rejuvenecido digitalmente. Aparición póstuma.",
      "Ein Autofahrer im Jahr 1970, digital verjüngt. Posthumer Auftritt.",
    ),
  ),
  "i-deadpool-wolverine": stanLee(
    l(
      "Posthumous appearance in an advertisement and in archive footage during the credits.",
      "Apparizione postuma in una pubblicità e in filmati d'archivio durante i titoli di coda.",
      "Apparition posthume dans une publicité et dans des images d'archives pendant le générique.",
      "Aparición póstuma en un anuncio y en imágenes de archivo durante los créditos.",
      "Posthumer Auftritt in einer Werbung und in Archivaufnahmen während des Abspanns.",
    ),
  ),
};

export function getEasterEggs(titleId: string): EasterEgg[] {
  return Object.hasOwn(EASTER_EGGS, titleId) ? EASTER_EGGS[titleId] : [];
}
