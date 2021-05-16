import React, {useContext} from "react";
import AuthContext from '../../Context/auth-context.js'
import styles from './Navigation.module.css'

const Navigation = () => {
  const authContext = useContext(AuthContext);
  return (
    <nav className = {styles.nav}>
      <ul>
        {authContext.isLoggedIn && (
          <button type="button" onClick={authContext.onLogout}>
            Logout
          </button>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
