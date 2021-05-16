import ReactDOM from "react-dom";
import React from "react";
import {AuthContextProvider} from './Context/auth-context.js';

import "./index.css";
import App from "./App";

ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById("root")
);
