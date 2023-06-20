import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  SelectHTMLAttributes,
} from "react";

export interface SelectProps
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  value: "up" | "down" | "none";
  label: string;
}
