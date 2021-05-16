import ReactDOM from "react-dom";
import React from "react";
import {AuthContextProvider} from './Context/auth-context.js';
import {ExpenseContextProvider} from './Context/expense-context.js';


import "./index.css";
import App from "./App";

ReactDOM.render(
  <AuthContextProvider>
    <ExpenseContextProvider>
    <App />
    </ExpenseContextProvider>
  </AuthContextProvider>,
  document.getElementById("root")
);
