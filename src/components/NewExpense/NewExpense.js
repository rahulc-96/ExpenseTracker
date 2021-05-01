import styles from './NewExpense.module.css'
import ExpenseForm from './ExpenseForm.js'
import React, {useState} from 'react'
const NewExpense = (props) =>
{  
    const [isFormRendered, setIsFormRendered] = useState(false);

    const renderExpenseForm = () =>
    {
        setIsFormRendered(true)
    }

    const resetHandler = () =>
    {
        setIsFormRendered(false)
    }

    const saveEnteredExpense = (enteredExpense) => {
        const newExpense =  {
            ...enteredExpense,
            id : Math.random(),
        };
        props.onRenderNewExpense(newExpense);
        resetHandler();
       }

    if (!isFormRendered) {
        return (
          <div className={styles.new_expense}>
            <button type="button" className={styles.new_expense__controller__button} onClick={renderExpenseForm}>
              Add Expenses
            </button>
          </div>
        );
      }

    return (
        <div className = {styles.new_expense}>
         <ExpenseForm onCancel =  {resetHandler} onSaveEnteredExpense = {saveEnteredExpense}/>
         </div>
    )
};
export default NewExpense;