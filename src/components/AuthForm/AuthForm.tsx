import { useForm } from "react-hook-form";

import { Button, Input } from "../UI";
import { IUser } from "../../interface/User.interface";

import styles from "./AuthForm.module.css";

export const AuthForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IUser>();

  const onSubmit = async (data: IUser) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Input
        value={watch("login")}
        {...register("login", {
          required: { value: true, message: "Заполните login" },
        })}
        error={errors.login?.message}
        label="Логин"
      />
      <Input
        value={watch("password")}
        {...register("password", {
          required: { value: true, message: "Заполните password" },
        })}
        error={errors.password?.message}
        label="Пароль"
      />
      <Button type="submit" className={styles.btn}>
        Войти
      </Button>
    </form>
  );
};
