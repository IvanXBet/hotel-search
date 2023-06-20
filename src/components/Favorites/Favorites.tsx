import cn from "classnames";

import { FavoritesProps } from "./Favorites.interface";

import { Card } from "../Card/Card";
import { HTags, Select } from "../UI";

import styles from "./Favorites.module.css";

export const Favorites = ({ className }: FavoritesProps) => {
  return (
    <Card className={cn(styles.favorites, className)}>
      <HTags size="small">Избранное</HTags>
      <div className={styles.sort}>
        <Select value="up" label="Рейтинг" />
        <Select value="none" label="Цена" />
      </div>
    </Card>
  );
};
