import { Favorites, Nav, FilterForm, Card } from "../../components";

import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.home}>
      <Nav className={styles.nav} />
      <FilterForm className={styles.filter} />
      <Favorites className={styles.favorites} />
      <Card className={styles.main}>
        <h1>main</h1>
      </Card>
    </div>
  );
};
