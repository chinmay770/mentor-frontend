import React from "react";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const RadarChart = (props) => {
  return <Radar data={props.data} />;
};

export default RadarChart;
