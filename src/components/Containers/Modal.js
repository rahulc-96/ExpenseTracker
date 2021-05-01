import React from "react";
import styles from "./Modal.module.css";

const Modal = (props) => {
  console.log(props.isDeleteModal);
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onCancel} />
      <div className={` ${styles.modal} ${styles.wrapper} `}>
        <header className={styles.header}>
          <h2>{props.message}</h2>
        </header>
        <div className={styles.content}>{props.content}</div>
        <footer className={styles.actions}>
          <button type="button" onClick={props.onConfirm}>
            {props.action}
          </button>
          {props.isDeleteModal && (
            <button type="button" onClick={props.onCancel}>
              Cancel
            </button>
          )}
        </footer>
      </div>
    </div>
  );
};

export default Modal;
