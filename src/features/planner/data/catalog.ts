import type { MediaType, Phase, Saga, Title } from "../types";

interface TitleOptions {
  alternate?: boolean;
  upcoming?: boolean;
  note?: string;
}

type TitleEntry = [name: string, release: string, type: MediaType, options?: TitleOptions];

function toSlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function createTitle([name, release, type, options = {}]: TitleEntry): Title {
  return {
    id: `i-${toSlug(name)}`,
    name,
    release,
    type,
    continuity: options.alternate ? "alternate" : "main",
    status: options.upcoming ? "upcoming" : "released",
    note: options.note,
  };
}

function createPhase(number: number, name: string, years: string, entries: TitleEntry[]): Phase {
  return { number, name, years, titles: entries.map(createTitle) };
}

export const CATALOG: Saga[] = [
  {
    name: "Saga dell'Infinito",
    phases: [
      createPhase(1, "Fase Uno", "2008 – 2012", [
        ["Iron Man", "2008", "film"],
        ["The Incredible Hulk", "2008", "film"],
        ["Iron Man 2", "2010", "film"],
        ["Thor", "2011", "film"],
        ["Captain America: The First Avenger", "2011", "film"],
        ["The Avengers", "2012", "film"],
      ]),
      createPhase(2, "Fase Due", "2013 – 2015", [
        ["Iron Man 3", "2013", "film"],
        ["Thor: The Dark World", "2013", "film"],
        ["Captain America: The Winter Soldier", "2014", "film"],
        ["Guardians of the Galaxy", "2014", "film"],
        ["Avengers: Age of Ultron", "2015", "film"],
        ["Ant-Man", "2015", "film"],
      ]),
      createPhase(3, "Fase Tre", "2016 – 2019", [
        ["Captain America: Civil War", "2016", "film"],
        ["Doctor Strange", "2016", "film"],
        ["Guardians of the Galaxy Vol. 2", "2017", "film"],
        ["Spider-Man: Homecoming", "2017", "film"],
        ["Thor: Ragnarok", "2017", "film"],
        ["Black Panther", "2018", "film"],
        ["Avengers: Infinity War", "2018", "film"],
        ["Ant-Man and the Wasp", "2018", "film"],
        ["Captain Marvel", "2019", "film"],
        ["Avengers: Endgame", "2019", "film"],
        ["Spider-Man: Far From Home", "2019", "film"],
      ]),
    ],
  },
  {
    name: "Saga del Multiverso",
    phases: [
      createPhase(4, "Fase Quattro", "2021 – 2022", [
        ["WandaVision", "2021", "serie"],
        ["The Falcon and the Winter Soldier", "2021", "serie"],
        ["Loki — Stagione 1", "2021", "serie"],
        ["Black Widow", "2021", "film"],
        ["What If…? — Stagione 1", "2021", "serie"],
        ["Shang-Chi and the Legend of the Ten Rings", "2021", "film"],
        ["Eternals", "2021", "film"],
        ["Hawkeye", "2021", "serie"],
        ["Spider-Man: No Way Home", "2021", "film"],
        ["Moon Knight", "2022", "serie"],
        ["Doctor Strange in the Multiverse of Madness", "2022", "film"],
        ["Ms. Marvel", "2022", "serie"],
        ["Thor: Love and Thunder", "2022", "film"],
        ["I Am Groot — Stagione 1", "2022", "serie", { note: "corti" }],
        ["She-Hulk: Attorney at Law", "2022", "serie"],
        ["Werewolf by Night", "2022", "special"],
        ["Black Panther: Wakanda Forever", "2022", "film"],
        ["The Guardians of the Galaxy Holiday Special", "2022", "special"],
      ]),
      createPhase(5, "Fase Cinque", "2023 – 2025", [
        ["Ant-Man and the Wasp: Quantumania", "2023", "film"],
        ["Guardians of the Galaxy Vol. 3", "2023", "film"],
        ["Secret Invasion", "2023", "serie"],
        ["Loki — Stagione 2", "2023", "serie"],
        ["The Marvels", "2023", "film"],
        ["What If…? — Stagione 2", "2023", "serie"],
        ["I Am Groot — Stagione 2", "2023", "serie", { note: "corti" }],
        ["Echo", "2024", "serie"],
        ["X-Men '97 — Stagione 1", "2024", "serie", { alternate: true }],
        ["Deadpool & Wolverine", "2024", "film"],
        ["Agatha All Along", "2024", "serie"],
        ["What If…? — Stagione 3", "2024", "serie"],
        [
          "Your Friendly Neighborhood Spider-Man — Stagione 1",
          "2025",
          "serie",
          { alternate: true, note: "animata" },
        ],
        ["Captain America: Brave New World", "2025", "film"],
        ["Daredevil: Born Again — Stagione 1", "2025", "serie"],
        ["Thunderbolts*", "2025", "film"],
        ["Ironheart", "2025", "serie"],
      ]),
      createPhase(6, "Fase Sei", "2025 – 2027", [
        ["The Fantastic Four: First Steps", "2025", "film"],
        ["Eyes of Wakanda", "2025", "serie", { note: "animata" }],
        ["Marvel Zombies", "2025", "serie", { alternate: true, note: "animata" }],
        ["Wonder Man", "2026", "serie"],
        ["Daredevil: Born Again — Stagione 2", "2026", "serie"],
        ["The Punisher: One Last Kill", "2026", "special"],
        ["X-Men '97 — Stagione 2", "metà 2026", "serie", { alternate: true, upcoming: true }],
        ["VisionQuest", "2026", "serie", { upcoming: true }],
        ["Spider-Man: Brand New Day", "31 lug 2026", "film", { upcoming: true }],
        [
          "Your Friendly Neighborhood Spider-Man — Stagione 2",
          "fine 2026",
          "serie",
          { alternate: true, upcoming: true, note: "animata" },
        ],
        ["Avengers: Doomsday", "18 dic 2026", "film", { upcoming: true }],
        ["Daredevil: Born Again — Stagione 3", "mar 2027", "serie", { upcoming: true }],
        ["Avengers: Secret Wars", "17 dic 2027", "film", { upcoming: true }],
      ]),
    ],
  },
];

export const ALL_PHASE_NUMBERS = CATALOG.flatMap((saga) =>
  saga.phases.map((phase) => phase.number),
);
