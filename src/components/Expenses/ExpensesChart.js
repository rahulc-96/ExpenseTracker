import ExpensesChartByMonth from "./ExpensesChartByMonth";
import ExpensesChartByYear from "./ExpensesChartByYear";

const ExpensesChart = (props) => {
  if (props.selectedYear === "None")
    return (
      <div>
        <ExpensesChartByYear expenses={props.expenses} />
      </div>
    );
  else
    return (
      <div>
        <ExpensesChartByMonth expenses={props.expenses} />
      </div>
    );
};

export default ExpensesChart;
