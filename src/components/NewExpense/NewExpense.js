import './NewExpense.css'
import ExpenseForm from './ExpenseForm.js'
const NewExpense = (props) =>
{
    const saveEnteredExpense = (enteredExpense) => {
     const newExpense =  {
         ...enteredExpense,
         id : Math.random(),
     };
     props.onRenderNewExpense(newExpense);
    }
    return (
        <div className = "new-expense">
         <ExpenseForm onSaveEnteredExpense = {saveEnteredExpense}/>
         </div>
    )
};
export default NewExpense;