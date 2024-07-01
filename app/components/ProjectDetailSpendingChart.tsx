import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  LineElement
);

type Props = {};

const ProjectDetailSpendingChart = (props: Props) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    maintainAspectRatio: false,
  };

  const labels = ["January", "February", "March", "April", "May", "June", "July", "August"];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Transportation Spending",
        data: labels.map((label) => Math.round(Math.random() * 10000)),
        borderColor: "#2563eb",
        backgroundColor: "#60a5fa",
      },
      {
        fill: true,
        label: "Food Spending",
        data: labels.map((label) => Math.round(Math.random() * 10000)),
        borderColor: "#dc2626",
        backgroundColor: "#f87171",
      },
      {
        fill: true,
        label: "Lodging Spending",
        data: labels.map((label) => Math.round(Math.random() * 10000)),
        borderColor: "#16a34a",
        backgroundColor: "#4ade80",
      },
      {
        fill: true,
        label: "Entertainment Spending",
        data: labels.map((label) => Math.round(Math.random() * 10000)),
        borderColor: "#ca8a04",
        backgroundColor: "#facc15",
      },
    ],
  };

  return (
    <article className="md:px-4 min-h-60">
      <Line data-testid="spending-chart" options={options} data={data} updateMode="resize" />
    </article>
  );
};

export default ProjectDetailSpendingChart;
