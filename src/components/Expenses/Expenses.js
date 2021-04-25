import ExpenseItem from "./ExpenseItem.js";
import "./Expenses.css";
import Card from "../Containers/Card.js";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter.js";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState('2020');

  const selectFilterYear = (selectedFilterYear) => {
    setFilterYear(selectedFilterYear);
    console.log(selectedFilterYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected = {filterYear} onSelectYearForFilter = {selectFilterYear} />
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
