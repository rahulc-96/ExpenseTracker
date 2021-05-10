import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";
import React, { useState, useEffect, Fragment } from "react";
import MainHeader from "./components/Containers/MainHeader.js";
import Login from "./components/Authentication/Login.js";

const listOfExpenses = [
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

function App() {
  const [currentListOfExpenses, setListOfExpenses] = useState(listOfExpenses);
  const updateExpenseListOnDelete = (expenseId) => {
    setListOfExpenses((prevState) => {
      return prevState.filter((expense) => expense.id !== expenseId);
    });
  };

  const [isLoggedIn, setIsLoggedIn] = useState("");

  useEffect(
    () => setIsLoggedIn(localStorage.getItem("isLoggedIn") === "1"),
    []
  );

  const loginHandler = (enteredUsername, enteredPassword) => {
    localStorage.setItem("isLoggedIn", 1);
    setIsLoggedIn(true);
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

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const renderNewExpense = (newExpense) => {
    setListOfExpenses((prevState) => [...prevState, newExpense]);
  };
  return (
    <Fragment>
      <MainHeader isLoggedIn={isLoggedIn} logoutHandler={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && (
          <Fragment>
            <NewExpense onRenderNewExpense={renderNewExpense} />
            <Expenses
              expenses={currentListOfExpenses}
              onExpenseDeleteEvent={updateExpenseListOnDelete}
              onAllExpensesDeleteEvent={updateExpenseListOnAllDeleteForYear}
            ></Expenses>
          </Fragment>
        )}
      </main>
    </Fragment>
  );
}

export default App;
