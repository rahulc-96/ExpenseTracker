import Chart from "../Chart/Chart.js";
import styles from "./ExpensesChart.module.css";

const ExpensesChartByMonth = (props) => {
  const expensesGroupedByMonth = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    const monthIndex = expense.date.getMonth();
    expensesGroupedByMonth[monthIndex].value += expense.amount;
  }

  return (
    <div>
      <header className={styles.expenses_chart}>
        <h4>Expenses grouped by month</h4>
      </header>
      <Chart dataPoints={expensesGroupedByMonth} />
    </div>
  );
};

export default ExpensesChartByMonth;
