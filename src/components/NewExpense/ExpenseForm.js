import styles from "./ExpenseForm.module.css";
import React, { useState } from "react";
import Modal from "../Containers/Modal";

const ExpenseForm = (props) => {
  const [enteredTitle, setExpenseTitle] = useState("");
  const [enteredAmount, setExpenseAmount] = useState("");
  const [enteredDate, setExpenseDate] = useState("");
  const [errorState, setErrorState] = useState();

  const confirmHandler = () => {
    setErrorState(null);
  };

  const titleChangeHandler = (event) => {
    setExpenseTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setExpenseAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setExpenseDate(event.target.value);
  };

  const saveEnteredExpense = (event) => {
    event.preventDefault();

    if (enteredTitle.trim().length === 0) {
      setErrorState({
        message: "Invalid User Input",
        content: "Expense title can not be empty",
        action: "Okay",
        isDeleteModal: false,
      });
      return;
    }

    if (+enteredAmount === 0) {
      setErrorState({
        message: "Invalid User Input",
        content: "Enter valid expense amount",
        action: "Okay",
        isDeleteModal: false,
      });
      return;
    }

    if (enteredDate.trim().length === 0) {
      setErrorState({
        message: "Invalid User Input",
        content: "Enter valid expense date",
        action: "Okay",
        isDeleteModal: false,
      });
      return;
    }

    const enteredExpense = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveEnteredExpense(enteredExpense);
    setExpenseTitle("");
    setExpenseDate("");
    setExpenseAmount("");
  };

  return (
    <React.Fragment>
      {errorState && (
        <Modal
          message={errorState.message}
          content={errorState.content}
          onConfirm={confirmHandler}
          isDeleteModal={errorState.isDeleteModal}
          action={errorState.action}
          onCancel={confirmHandler}
        />
      )}
      <form onSubmit={saveEnteredExpense} onReset={props.onCancel}>
        <div className={styles.new_expense__controls}>
          <div className={styles.new_expense__control}>
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className={styles.new_expense__control}>
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className={styles.new_expense__control}>
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
          <div className={styles.new_expense__actions}>
            <button type="reset"> Cancel </button>
            <button type="submit"> Add Expense </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default ExpenseForm;
