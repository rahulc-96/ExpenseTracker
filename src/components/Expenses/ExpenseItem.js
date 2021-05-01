import ExpenseDate from "./ExpenseDate.js";
import styles from "./ExpenseItem.module.css";
import Card from "../Containers/Card.js";
import React, { useState } from "react";
import Modal from "../Containers/Modal.js";

function ExpenseItem(props) {
  const [deleteModalState, setDeleteModalState] = useState();

  const expenseDeleteHandler = () => {
    setDeleteModalState({
      message: "Warning !! Selected Expense will be deleted.",
      action: "Confirm",
    });
  };

  const confirmDeleteEvent = () => {
    props.onExpenseDeleteEvent(props.id);
  };

  const cancelDeleteEvent = () => {
    setDeleteModalState(null);
  };

  return (
    <div>
      {deleteModalState && (
        <Modal
          action={deleteModalState.action}
          message = {deleteModalState.message}
          content={"Expense " + props.title + " with Price: $"
           + props.amount + " will be deleted."
          }
          onConfirm={confirmDeleteEvent}
          onCancel={cancelDeleteEvent}
          isDeleteModal = {true}
        />
      )}
      <li>
        <Card className={styles.expense_item}>
          <ExpenseDate date={props.date} />
          <div className={styles.expense_item__description}>
            <h2>{props.title}</h2>
            <div className={styles.expense_item__price}>${props.amount}</div>
            <button
              className={styles.expense_item__delete}
              type="button"
              onClick={expenseDeleteHandler}
            >
              Delete{" "}
            </button>
          </div>
        </Card>
      </li>
    </div>
  );
}

export default ExpenseItem;
