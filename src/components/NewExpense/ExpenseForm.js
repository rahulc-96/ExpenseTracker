import styles from "./ExpenseForm.module.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setExpenseTitle] = useState("");
  const [enteredAmount, setExpenseAmount] = useState("");
  const [enteredDate, setExpenseDate] = useState("");

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
  );
};

export default ExpenseForm;
