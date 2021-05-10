import ExpensesChartByMonth from "./ExpensesChartByMonth";
import ExpensesChartByYear from "./ExpensesChartByYear";
import React from 'react'

const ExpensesChart = (props) => {
  if (props.selectedYear === "None")
    return (
      <React.Fragment>
        <ExpensesChartByYear expenses={props.expenses} />
      </React.Fragment>
    );
  else
    return (
      <React.Fragment>
        <ExpensesChartByMonth expenses={props.expenses} />
      </React.Fragment>
    );
};

export default ExpensesChart;
