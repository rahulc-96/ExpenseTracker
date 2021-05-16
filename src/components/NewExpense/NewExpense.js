import styles from './NewExpense.module.css'
import ExpenseForm from './ExpenseForm.js'
import React , {useContext} from 'react'
import ExpenseContext from '../../Context/expense-context'
const NewExpense = () =>
{  
    const expenseContext = useContext(ExpenseContext)
    if (!expenseContext.isFormRendered) {
        return (
          <div className={styles.new_expense}>
            <button type="button" className={styles.new_expense__controller__button} onClick={expenseContext.onRenderForm}>
              Add Expenses
            </button>
          </div>
        );
      }

    return (
        <div className = {styles.new_expense}>
         <ExpenseForm />
         </div>
    )
};
export default NewExpense;