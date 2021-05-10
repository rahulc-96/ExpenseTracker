import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return (
    <React.Fragment>
      <div className={styles.backdrop} onClick={props.onCancel} />
    </React.Fragment>
  );
};

const ModalOverlay = (props) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCancel={props.onCancel} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onConfirm={props.onConfirm}
          isDeleteModal={props.isDeleteModal}
          onCancel={props.onCancel}
          message={props.message}
          content =  {props.content}
          action = {props.action}
        />
      , document.getElementById("modal-overlay"))}
    </React.Fragment>
  );
};

export default Modal;
