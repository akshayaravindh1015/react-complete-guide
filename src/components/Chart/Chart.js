import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const maxValue = Math.max(...props.dataPoints.map(point => point.value));
    console.log(maxValue);
    return (
        <div className="chart">
            {
                props.dataPoints
                    .map((dataPoint) => {
                        return <ChartBar
                            key={dataPoint.label}
                            value={dataPoint.value}
                            max={maxValue}
                            label={dataPoint.label}
                        />;
                    })
            }
        </div>
    );
}
export default Chart;