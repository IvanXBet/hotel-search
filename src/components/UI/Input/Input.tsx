import { forwardRef, ForwardedRef } from "react";
import { InputProps } from "./Input.interface";

import styles from "./Input.module.css";

export const Input = forwardRef(
  (
    { value, label, error, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={error && styles.error}>
        <p className={styles.label}>{label}</p>
        <input
          value={value || ""}
          {...props}
          className={styles.input}
          ref={ref}
        />
        {error && <p>{error}</p>}
      </div>
    );
  }
);
