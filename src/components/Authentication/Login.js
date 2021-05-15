import styles from "./Login.module.css";
import React, { useState, useEffect, useReducer } from "react";
import Card from "../Containers/Card.js";

const Login = (props) => {
  const [isFormValid, setIsFormValid] = useState("");

  const emailReducer = (prevState, action) => {
    if (action.type === "USER_INPUT") {
      return { value: action.value, isValid: action.value.includes("@") };
    } else if (action.type === "INPUT_BLUR") {
      return { value: prevState.value, isValid: prevState.value.includes("@") };
    } else {
      return { value: "", isValid: null };
    }
  };

  const passwordReducer = (prevState, action) => {
    if (action.type === "USER_INPUT") {
      return { value: action.value, isValid: action.value.length > 8 };
    } else if (action.type === "INPUT_BLUR") {
      return { value: prevState.value, isValid: prevState.value.value.length > 8 };
    } else {
      return { value: "", isValid: null };
    }
  };
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const[passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value:"",
    isValid: null
  })
  useEffect(() => {
    const formValidationTimer = setTimeout(
      () =>
        setIsFormValid(
          passwordState.isValid && emailState.isValid
        ),
      500
    );
    return () => {
      clearTimeout(formValidationTimer);
    };
  }, [emailState, passwordState]);

  const loginHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };
  const usernameChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", value: event.target.value });
  };

  const passwordChangeHandler = (event) => {
      dispatchPassword({type: 'USER_INPUT', value: event.target.value})
  };

  const passwordValidationHandler = () => {
      dispatchPassword({type: 'INPUT_BLUR'})
  };

  const usernameValidationHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };
  return (
    <Card className={styles.login}>
      <form onSubmit={loginHandler}>
        <div
          className={` ${styles.control} ${
            emailState.isValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="username">Username</label>
          <input
            type="username"
            onChange={usernameChangeHandler}
            onBlur={usernameValidationHandler}
            value={emailState.value}
          />
        </div>
        <div
          className={` ${styles.control} ${
            passwordState.isValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={passwordChangeHandler}
            onBlur={passwordValidationHandler}
            value={passwordState.value}
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
