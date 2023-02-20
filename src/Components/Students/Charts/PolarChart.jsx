import React from "react";
import { PolarArea } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const PolarChart = (props) => {
  return <PolarArea data={props.data} />;
};

export default PolarChart;
