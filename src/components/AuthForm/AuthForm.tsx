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
  function isValidEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Input
        value={watch("login")}
        {...register("login", {
          required: { value: true, message: "Заполните login" },
          validate: {
            validEmail: value => isValidEmail(value) || "Неверный формат email",
          },
        })}
        error={errors.login?.message}
        label="Логин"
      />
      <Input
        value={watch("password")}
        {...register("password", {
          required: { value: true, message: "Заполните password" },
          validate: {
            validPassword: value =>
              value.length >= 8 || "Пароль должен быть не менее 8 символов",
          },
        })}
        error={errors.password?.message}
        label="Пароль"
        type="password"
      />
      <Button type="submit" className={styles.btn}>
        Войти
      </Button>
    </form>
  );
};
