import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogin: () => {},
    onLogout: () => {},
  });

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState("");

  useEffect(
    () => setIsLoggedIn(localStorage.getItem("isLoggedIn") === "1"),
    []
  );

  const loginHandler = (enteredUsername, enteredPassword) => {
    localStorage.setItem("isLoggedIn", 1);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
