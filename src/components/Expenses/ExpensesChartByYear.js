import Chart from "../Chart/Chart.js";
import styles from "./ExpensesChart.module.css";
import React from 'react';


const ExpensesChartByYear = (props) => {
  let expensesMapByYear = new Map();
  expensesMapByYear.set("2019", 0);
  expensesMapByYear.set("2020", 0);
  expensesMapByYear.set("2021", 0);
  expensesMapByYear.set("2022", 0);

  for (const expense of props.expenses) {
    const year = expense.date.getFullYear().toString();
    let totalExpenseForYear = expensesMapByYear.get(year) + expense.amount;
    expensesMapByYear.set(year, totalExpenseForYear);
  }

  let expensesGroupedByYear = [];
  for (let [year, expense] of expensesMapByYear) {
    expensesGroupedByYear = [
      ...expensesGroupedByYear,
      { label: year, value: expense },
    ];
  }

  return (
    <React.Fragment>
      <header className={styles.expenses_chart}>
        <h4>Expenses grouped by year</h4>
      </header>
      <Chart dataPoints={expensesGroupedByYear} />
    </React.Fragment>
  );
};

export default ExpensesChartByYear;
