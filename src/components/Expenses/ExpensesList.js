import styles from "./ExpensesList.module.css";
import ExpenseItem from "./ExpenseItem.js";
import React, { useState } from "react";
import Modal from "../Containers/Modal.js";


const ExpensesList = (props) => {
  const expenses = props.expenses;

  const [deleteModalState, setDeleteModalState] = useState();

  const expenseDeleteHandler = (expenseId) => {
    props.onExpenseDeleteEvent(expenseId);
  };

  const allDeleteHandler = () => {
    const deleteAllContent =
      props.filterYear === "None"
        ? "All the expenses will be deleted."
        : "All expenses for the year " + props.filterYear + " will be deleted.";
    setDeleteModalState({
      message: "Warning !! All expenses will be deleted.",
      action: "Confirm",
      content: deleteAllContent,
    });
  };

  const confirmAllDeleteEvent = () => {
    props.onAllExpenseDeleteEventForYear(props.filterYear);
  };

  const cancelAllDeleteEvent = () => {
    setDeleteModalState(null);
  };

  if (expenses.length === 0) {
    return (
      <h2 className={styles.expenses_list__fallback}>
        {props.filterYear !== "None"
          ? "Found no expenses for year " + props.filterYear + "."
          : "Found no expenses."}
      </h2>
    );
  }

  return (
    <React.Fragment>
      {deleteModalState && (
        <Modal
          action={deleteModalState.action}
          message={deleteModalState.message}
          content={deleteModalState.content}
          onConfirm={confirmAllDeleteEvent}
          onCancel={cancelAllDeleteEvent}
          isDeleteModal={true}
        />
      )}
      <ul className={styles.expenses_list}>
        {expenses.map((expense) => (
          <ExpenseItem
            onExpenseDeleteEvent={expenseDeleteHandler}
            key={expense.id}
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
      <div className={styles.delete_expense}>
        <button type="button" onClick={allDeleteHandler}>
          Delete All Expenses
        </button>
      </div>
    </React.Fragment>
  );
};

export default ExpensesList;
