import React from "react";
import Card from "./Card";
import styles from "./Modal.module.css";

const Modal = (props) => {
  console.log(props.isDeleteModal);
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onCancel} />
      <Card className={styles.modal}>
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
      </Card>
    </div>
  );
};

export default Modal;
