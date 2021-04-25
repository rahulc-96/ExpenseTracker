import ExpenseItem from './ExpenseItem.js';
import './Expenses.css'
import Card  from  '../Containers/Card.js'
import React from 'react';


function Expenses(props) {
  return (
    <Card className = "expenses">
      {props.expenses.map((expense) => (
        <ExpenseItem
          key = {expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses