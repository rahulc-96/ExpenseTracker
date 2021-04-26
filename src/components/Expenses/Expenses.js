import ExpensesList from "./ExpensesList.js";
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

  const filteredExpenses = props.expenses.filter(
    (expense) =>
      isExpenseHavingSelectedYear(expense.date) || filterYear === "None"
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filterYear}
        onSelectYearForFilter={selectFilterYear}
      />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
