// MyBarChart.jsx
import React from "react";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  Filler,
  LineElement,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const TagWiseDistribution = ({ labels, values }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Topics Covered",
        data: values,
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      r: {
        angleLines: {
          display: false, // Hide radial lines
        },
        grid: {
          display: false, // Hide grid lines
        },
        pointLabels: {
          display: true,
          font: {
            size: 14,
          },
        },
        ticks: {
          display: false, // Hide default ticks (5, 10, etc.)
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#fff", // Optional: customize legend text color
        },
      },
      tooltip: {
        enabled: true, // Still show tooltips on hover
      },
    },
    elements: {
      line: {
        borderWidth: 3,
      },
    },
  };

  return (
    <div className="w-[400px]">
      <Radar data={data} options={options} />
    </div>
  );
};

export default TagWiseDistribution;
