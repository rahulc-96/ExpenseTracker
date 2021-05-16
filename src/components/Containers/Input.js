import React, { useRef, useImperativeHandle } from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef()
  const activate = () => {
    return inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <div
      className={` ${styles.control} ${
        props.isValid === false ? styles.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        min={props.min}
        max={props.max}
        step={props.step}
        type={props.id}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
      />
    </div>
  );
});

export default Input;
