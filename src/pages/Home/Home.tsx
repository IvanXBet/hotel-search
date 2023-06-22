import { useEffect } from "react";
import {
  Favorites,
  Nav,
  FilterForm,
  Card,
  Rating,
  Slider,
  MainBlock,
} from "../../components";

import { useAppDispatch } from "../../store";

import styles from "./Home.module.css";
import { getHotelsRequest } from "../../store/actions/search.actions";

export const Home = () => {
   const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      getHotelsRequest({
        location: "string",
        checkInDate: "string",
        amountOfDays: 1,
      })
    );
  }, []);
  return (
    <div className={styles.home}>
      <Nav className={styles.nav} />
      <FilterForm className={styles.filter} />
      <Favorites className={styles.favorites} />
      <MainBlock className={styles.main} />
    </div>
  );
};
