import styles from "./ExpensesList.module.css";
import ExpenseItem from "./ExpenseItem.js";

const ExpensesList = (props) => {
  const expenses = props.expenses;

  const expenseDeleteHandler = (expenseId) => {
    props.onExpenseDeleteEvent(expenseId);
  };

  if (expenses.length === 0) {
    return (
      <h2 className={styles.expenses_list__fallback}>
        {props.filterYear !== "None"
          ? "Found no expenses for year " + props.filterYear
          : "Found no expenses"}
      </h2>
    );
  }

  return (
    <ul className={styles.expenses_list}>
      {expenses.map((expense) => (
        <ExpenseItem
          onExpenseDeleteEvent={expenseDeleteHandler}
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          on
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
