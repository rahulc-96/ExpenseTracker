import Chart from "../Chart/Chart.js";

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
  
  console.log(expensesMapByYear)
  console.log(expensesGroupedByYear);

  return (
    <div>
      <Chart dataPoints={expensesGroupedByYear} />
    </div>
  );
};

export default ExpensesChartByYear;
