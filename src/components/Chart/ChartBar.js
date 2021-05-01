import styles from "./ChartBar.module.css";

const ChartBar = (props) => {
  let barFillHeightPercentage = "0%";

  if (props.maxValue > 0) {
    barFillHeightPercentage =
      Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className={styles.chartBar}>
      <div className={styles.chartBarInner}>
        <div
          className={styles.chartBarFill}
          style={{ height: barFillHeightPercentage }}
        ></div>
      </div>

      <div className={styles.chartBarLabel}>
        <label>{props.label}</label>
      </div>
    </div>
  );
};

export default ChartBar;
