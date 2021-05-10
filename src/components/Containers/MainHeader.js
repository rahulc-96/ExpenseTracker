import React from 'react'
import Navigation from './Navigation.js'
import styles from './MainHeader.module.css'

const MainHeader = (props) =>
{
    return (
        <header className = {styles.mainHeader}>
            <h1>Expenses Tracker</h1>
            <Navigation isLoggedIn = {props.isLoggedIn} onLogout = {props.logoutHandler}/>
        </header>
    )
}


export default MainHeader