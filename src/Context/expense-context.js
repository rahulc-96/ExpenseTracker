import React, { useState } from "react";

const expensesList = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const ExpenseContext = React.createContext({
  listOfExpenses: expensesList,
  onDeleteExpense: () => {},
  onDeleteAllExpensesFormYear: () => {},
  onAddNewExpense: () => {},
  onReset: () => {},
  onRenderForm: () => {},
  isFormRendered: false,
});

export const ExpenseContextProvider = (props) => {
  const [currentListOfExpenses, setListOfExpenses] = useState(expensesList);

  const [isFormRendered, setIsFormRendered] = useState(false);

  const renderExpenseForm = () => {
    setIsFormRendered(true);
  };

  const resetHandler = () => {
    setIsFormRendered(false);
  };

  const updateExpenseListOnDelete = (expenseId) => {
    setListOfExpenses((prevState) => {
      return prevState.filter((expense) => expense.id !== expenseId);
    });
  };

  const updateExpenseListOnAllDeleteForYear = (year) => {
    if (year === "None") setListOfExpenses([]);
    else {
      setListOfExpenses((prevState) => {
        return prevState.filter(
          (expense) => expense.date.getFullYear().toString() !== year
        );
      });
    }
  };

  const renderNewExpense = (newExpense) => {
    const expense = {
      ...newExpense,
      id: Math.random(),
    };
    setListOfExpenses((prevState) => [...prevState, expense]);
    resetHandler();
  };

  return (
    <ExpenseContext.Provider
      value={{
        listOfExpenses: currentListOfExpenses,
        onDeleteExpense: updateExpenseListOnDelete,
        onDeleteAllExpensesFormYear: updateExpenseListOnAllDeleteForYear,
        onAddNewExpense: renderNewExpense,
        onReset: resetHandler,
        onRenderForm: renderExpenseForm,
        isFormRendered: isFormRendered,
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
};
export default ExpenseContext;
