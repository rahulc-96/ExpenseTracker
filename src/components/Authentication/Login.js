import styles from "./Login.module.css";
import React, { useState, useEffect } from "react";
import Card from "../Containers/Card.js";

const Login = (props) => {
  const [enteredUsername, setUsername] = useState("");
  const [isValidUsername, setIsValidUsername] = useState("");
  const [enteredPassword, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState("");

  useEffect(() => {
    const formValidationTimer = setTimeout(
      () =>
        setIsFormValid(
          enteredPassword.trim().length > 8 && enteredUsername.includes("@")
        ),
      500
    );
    return () => {
      clearTimeout(formValidationTimer);
    };
  }, [enteredUsername, enteredPassword]);

  const loginHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredUsername, enteredPassword);
  };
  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const passwordValidationHandler = () => {
    setIsValidPassword(enteredPassword.trim().length > 8);
  };

  const usernameValidationHandler = () => {
    setIsValidUsername(enteredUsername.includes("@"));
  };
  return (
    <Card className={styles.login}>
      <form onSubmit={loginHandler}>
        <div
          className={` ${styles.control} ${
            isValidUsername === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="username">Username</label>
          <input
            type="username"
            onChange={usernameChangeHandler}
            onBlur={usernameValidationHandler}
            value={enteredUsername}
          />
        </div>
        <div
          className={` ${styles.control} ${
            isValidPassword === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={passwordChangeHandler}
            onBlur={passwordValidationHandler}
            value={enteredPassword}
          />
        </div>
        <div className={styles.actions}>
          <button
            className={styles.button}
            type="submit"
            disabled={!isFormValid}
          >
            Login
          </button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
