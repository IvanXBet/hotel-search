import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface HTagsProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLHeadElement>,
    HTMLHeadElement
  > {
  size: "small" | "large";
  children: ReactNode;
}
