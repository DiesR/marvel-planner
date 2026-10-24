import type { ButtonHTMLAttributes, ReactNode } from "react";
import { buttonClass, type ButtonVariant } from "./buttonClass";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  iconEnd?: ReactNode;
  children?: ReactNode;
}

export function Button({
  variant = "soft",
  size = "md",
  icon,
  iconEnd,
  children,
  className,
  type = "button",
  ...rest
}: ButtonProps) {
  const classes = [buttonClass(variant, size, children === undefined), className]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} {...rest}>
      {icon}
      {children}
      {iconEnd}
    </button>
  );
}
