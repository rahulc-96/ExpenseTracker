import styles from "./ExpensesList.module.css";
import ExpenseItem from "./ExpenseItem.js";

const ExpensesList = (props) => {
  const expenses = props.expenses;

  if (expenses.length === 0) {
    return (
      <h2 className= {styles.expenses_list__fallback}>
        Found no expenses for selected year
      </h2>
    );
  }

  return (
    <ul className={styles.expenses_list}>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
