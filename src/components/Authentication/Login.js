import styles from "./Login.module.css";
import React, { useState, useEffect, useReducer, useRef } from "react";
import Card from "../Containers/Card.js";
import Input from "../Containers/Input.js";

const Login = (props) => {
  const [isFormValid, setIsFormValid] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

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
      return {
        value: prevState.value,
        isValid: prevState.value.length > 8,
      };
    } else {
      return { value: "", isValid: null };
    }
  };
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });
  useEffect(() => {
    const formValidationTimer = setTimeout(
      () => setIsFormValid(passwordState.isValid && emailState.isValid),
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
    setIsFormValid();
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", value: event.target.value });
  };

  const passwordValidationHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const usernameValidationHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };
  return (
    <Card className={styles.login}>
      <form onSubmit={loginHandler}>
        <Input
          id="username"
          onChange={usernameChangeHandler}
          onBlur={usernameValidationHandler}
          value={emailState.value}
          ref={emailRef}
          label="username"
          isValid = {emailState.isValid}
        />
        <Input
          id="password"
          onChange={passwordChangeHandler}
          onBlur={passwordValidationHandler}
          value={passwordState.value}
          ref={passwordRef}
          isValid = {passwordState.isValid}
          label="password"
        />
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
