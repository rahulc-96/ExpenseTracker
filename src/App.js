import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";
import React, { useState } from "react";

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
  const renderNewExpense = (newExpense) => {
    setListOfExpenses((prevState) =>  [...prevState, newExpense]);
  };
  return (
    <div>
      <NewExpense onRenderNewExpense={renderNewExpense} />
      <Expenses expenses={currentListOfExpenses} />
    </div>
  );
}

export default App;
