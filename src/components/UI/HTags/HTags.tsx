import cn from "classnames";

import { HTagsProps } from "./HTags.iterface";

import styles from "./HTags.module.css";

export const HTags = ({ size, children, className }: HTagsProps) => {
  return <p className={cn(styles[size], className)}>{children}</p>;
};
