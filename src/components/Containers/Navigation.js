import React from "react";
import styles from './Navigation.module.css'

const Navigation = (props) => {
  return (
    <nav className = {styles.nav}>
      <ul>
        {props.isLoggedIn && (
          <button type="button" onClick={props.onLogout}>
            Logout
          </button>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
