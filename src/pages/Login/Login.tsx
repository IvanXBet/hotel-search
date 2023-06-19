import { HTags } from "../../components/UI";
import { AuthForm, Card } from "../../components";

import styles from "./Login.module.css";

export const Login = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blur}>
        <Card>
          <HTags size="small" className={styles.title}>
            Simple Hotel Check
          </HTags>
          <AuthForm />
        </Card>
      </div>
    </div>
  );
};
