import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeightPercentage = "0%";

  if (props.maxValue > 0) {
    barFillHeightPercentage = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  console.log(barFillHeightPercentage)

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeightPercentage }}
        ></div>
      </div>

      <div className="chart-bar__label">
        <label>{props.label}</label>
      </div>
    </div>
  );
};

export default ChartBar;
