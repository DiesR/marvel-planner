export type ButtonVariant = "primary" | "accent" | "dark" | "soft" | "surface" | "panel" | "text";

export function buttonClass(
  variant: ButtonVariant,
  size: "sm" | "md" | "lg" = "md",
  isIconOnly = false,
) {
  return [
    "btn",
    `btn--${variant}`,
    size === "lg" && "btn--lg",
    size === "sm" && "btn--sm",
    isIconOnly && "btn--icon",
  ]
    .filter(Boolean)
    .join(" ");
}
