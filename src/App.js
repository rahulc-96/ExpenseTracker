import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";
import React, { useContext, Fragment } from "react";
import MainHeader from "./components/Containers/MainHeader.js";
import Login from "./components/Authentication/Login.js";
import AuthContext from "./Context/auth-context.js";
import ExpenseContext from "./Context/expense-context.js";

function App() {
  const authContext = useContext(AuthContext);
  const expenseContext = useContext(ExpenseContext);
  return (
    <Fragment>
      <MainHeader
        isLoggedIn={authContext.isLoggedIn}
        logoutHandler={authContext.onLogout}
      />
      <main>
        {!authContext.isLoggedIn && <Login onLogin={authContext.onLogin} />}

        {authContext.isLoggedIn && (
          <Fragment>
            <NewExpense />
            <Expenses expenses={expenseContext.listOfExpenses}></Expenses>
          </Fragment>
        )}
      </main>
    </Fragment>
  );
}

export default App;
