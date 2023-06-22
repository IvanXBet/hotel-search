import cn from "classnames";

import { Card, Hotels, Rating, Slider } from "../index";
import { HTags } from "../UI";
import styles from "./MainBlock.module.css";

export const MainBlock = ({ className }: { className: string }) => {


  return (
    <Card className={cn(styles.mainBlock, className)}>
      <div className={styles.head}>
        <HTags size="large">Отели {`>`} Москва</HTags>
        <p className={styles.date}>07 июля 2022</p>
      </div>
      <Slider />
      <Hotels/>
    </Card>
  );
};
