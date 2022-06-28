import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import styles from "../Styles/Login.module.css";

const Login = () => {
  const auth = useContext(AuthContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.dispatch({ type: "LOGIN" });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Poke<span>Battle</span>
      </h1>
      <form className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
          className={styles.inputText}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className={styles.inputText}
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          className={styles.inputText}
        />
        <input
          type="submit"
          value="Log in"
          onClick={handleSubmit}
          className={styles.inputButton}
        />
      </form>
    </div>
  );
};

export default Login;
