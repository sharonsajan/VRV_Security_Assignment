"use client";

import styles from "./loginForm.module.css";
import { login } from "../../../../../lib/actions";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAcion] = useFormState(login, undefined);
  return (
    <form action={formAcion} className={styles.form}>
      <h1>Login</h1>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {state?.error && <p>{state.error}</p>}
    </form>
  );
};

export default LoginForm;
