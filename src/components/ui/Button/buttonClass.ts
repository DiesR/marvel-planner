export type ButtonVariant = "primary" | "accent" | "dark" | "soft" | "panel" | "text";

export function buttonClass(variant: ButtonVariant, size: "md" | "lg" = "md", isIconOnly = false) {
  return ["btn", `btn--${variant}`, size === "lg" && "btn--lg", isIconOnly && "btn--icon"]
    .filter(Boolean)
    .join(" ");
}
