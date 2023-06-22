import cn from "classnames";

import { RatingProps } from "./Rating.interface";
import { StarIcon } from "../icons";

import styles from "./Rating.module.css";

export const Rating = ({ rating }: RatingProps) => {
  const buildRating = (rating: number) => {
    return new Array(5)
      .fill(<></>)
      .map((_, index: number) => (
        <StarIcon
          key={index}
          className={cn(styles.star, { [styles.fill]: rating > index })}
        />
      ));
  };

  return <div>{buildRating(rating)}</div>;
};
