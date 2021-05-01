import React from "react";

import styles from "./ExpensesFilter.module.css";

const ExpensesFilter = (props) => {
  const selectYearHandler = (event) => {
    event.preventDefault();
    props.onSelectYearForFilter(event.target.value);
  };
  return (
    <div className={styles.expenses_filter}>
      <div className={styles.expenses_filter__control}>
        <label>Filter by year</label>
        <select value = {props.selectedYear} onChange={selectYearHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="None">None</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
