import { MEDIA_TYPE_LABELS } from "../data/labels";
import type { Title } from "../types";

interface TitleItemProps {
  title: Title;
  isWatched: boolean;
  onToggle: (id: string) => void;
}

export function TitleItem({ title, isWatched, onToggle }: TitleItemProps) {
  const tags = [
    MEDIA_TYPE_LABELS[title.type],
    title.note,
    title.continuity === "alternate" && "Continuità alternativa",
    title.status === "upcoming" && "In arrivo",
  ].filter(Boolean);

  return (
    <li>
      <label>
        <input type="checkbox" checked={isWatched} onChange={() => onToggle(title.id)} />
        {isWatched ? <s>{title.name}</s> : title.name}
      </label>
      <p>{[title.release, ...tags].join(" · ")}</p>
    </li>
  );
}
