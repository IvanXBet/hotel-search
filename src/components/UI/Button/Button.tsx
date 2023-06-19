import cn from "classnames";

import { ButtonProps } from "./Button.interface";

import styles from "./Button.module.css";

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={cn(styles.btn, className)} {...props}>
      {children}
    </button>
  );
};
