import ExpenseItem from "./ExpenseItem.js";
import "./Expenses.css";
import Card from "../Containers/Card.js";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter.js";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("None");

  const selectFilterYear = (selectedFilterYear) => {
    setFilterYear(selectedFilterYear);
  };

  const isExpenseHavingSelectedYear = (date) => {
    const year = date.getFullYear().toString();
    return year === filterYear;
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filterYear}
        onSelectYearForFilter={selectFilterYear}
      />
      {props.expenses
        .filter((expense) => isExpenseHavingSelectedYear(expense.date) || filterYear === "None")
        .map((expense) => (
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
