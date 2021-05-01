import ExpensesList from "./ExpensesList.js";
import styles from "./Expenses.module.css";
import Card from "../Containers/Card.js";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter.js";
import ExpensesChart from "./ExpensesChart.js";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("None");

  const selectFilterYear = (selectedFilterYear) => {
    setFilterYear(selectedFilterYear);
  };

  const expenseDeleteHandler = (expenseId) => {
    props.onExpenseDeleteEvent(expenseId);
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
    <Card className={styles.expenses}>
      <ExpensesFilter
        selectedYear={filterYear}
        onSelectYearForFilter={selectFilterYear}
      />
      <ExpensesChart selectedYear={filterYear} expenses={filteredExpenses} />
      <ExpensesList
        expenses={filteredExpenses}
        filterYear = {filterYear}
        onExpenseDeleteEvent={expenseDeleteHandler}
      />
    </Card>
  );
}

export default Expenses;
