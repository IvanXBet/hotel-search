import cn from "classnames";

import { SelectProps } from "./Select.interface";

import styles from "./Select.module.css";
import { SelectUpIcon, SelectDownIcon } from "../../icons";

export const Select = ({ value, label, ...props }: SelectProps) => {
  return (
    <div className={cn(styles.select, { [styles.active]: value !== "none" })}>
      <p className={styles.label}>{label}</p>
      <SelectUpIcon className={styles.up} />
      <SelectDownIcon className={styles.down} />
    </div>
  );
};
