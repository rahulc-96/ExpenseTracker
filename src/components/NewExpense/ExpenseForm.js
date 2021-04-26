import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setExpenseTitle] = useState("");
  const [enteredAmount, setExpenseAmount] = useState("");
  const [enteredDate, setExpenseDate] = useState("");

  const [isFormRendered, setIsFormRendered] = useState(false);

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
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveEnteredExpense(enteredExpense);
    setIsFormRendered(false);
    setExpenseTitle("");
    setExpenseDate("");
    setExpenseAmount("");
  };

  const resetHandler = (event) => {
    event.preventDefault();
    setExpenseTitle("");
    setExpenseDate("");
    setExpenseAmount("");
    setIsFormRendered(false);
  };

  const addExpenseHandler = (event) => {
    event.preventDefault();
    setIsFormRendered(true);
  };

  if (!isFormRendered) {
    return (
      <div className="new-expense__controller">
        <button type="button" className="new-expense__controller__button" onClick={addExpenseHandler}>
          Add Expenses
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={saveEnteredExpense} onReset={resetHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="reset"> Cancel </button>
          <button type="submit"> Add Expense </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
