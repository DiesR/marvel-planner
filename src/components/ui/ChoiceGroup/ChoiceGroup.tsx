import { Check } from "lucide-react";
import type { ReactNode } from "react";

interface ChoiceGroupProps {
  legend: string;
  columns: 2 | 3;
  children: ReactNode;
}

export function ChoiceGroup({ legend, columns, children }: ChoiceGroupProps) {
  return (
    <fieldset className="choice-group">
      <legend>{legend}</legend>
      <div className={`choice-group__options choice-group__options--${columns}`}>{children}</div>
    </fieldset>
  );
}

interface ChoiceProps {
  type: "radio" | "checkbox";
  name?: string;
  checked: boolean;
  onChange: () => void;
  children: ReactNode;
}

export function Choice({ type, name, checked, onChange, children }: ChoiceProps) {
  return (
    <label className="choice">
      <input
        className="choice__input"
        type={type}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <span className="choice__face">
        {type === "checkbox" && checked && <Check aria-hidden />}
        {children}
      </span>
    </label>
  );
}
