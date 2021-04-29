import "./Chart.css";
import ChartBar from "./ChartBar.js";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxValue = dataPointValues.reduce((a,b) => a + b , 0);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
};

export default Chart;
