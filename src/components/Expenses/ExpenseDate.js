import styles from './ExpenseDate.module.css';

function ExpenseDate(props) {
  return (
    <div className={styles.expenseDate}>
      <div className={styles.expenseDateDay}>
        {props.date.toLocaleString("en-US", { day: "2-digit" })}
      </div>
      <div className={styles.expenseDateMonth}>
        {props.date.toLocaleString("en-US", { month: "long" })}
      </div>
      <div className={styles.expenseDateYear}>
        {props.date.getFullYear()}
      </div>
    </div>
  );
}

export default ExpenseDate;
