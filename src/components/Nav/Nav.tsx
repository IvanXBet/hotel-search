import cn from "classnames";

import { HTags } from "../UI";
import { LogoutIcon } from "../icons";
import { NavProps } from "./Nav.interface";

import styles from "./Nav.module.css";

export const Nav = ({ className }: NavProps) => {
  return (
    <div className={cn(styles.nav, className)}>
      <HTags size="small">Simple Hotel Check</HTags>
      <div className={styles.logout}>
        Выйти <LogoutIcon />
      </div>
    </div>
  );
};
