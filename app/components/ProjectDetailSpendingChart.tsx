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
import { ProjectSpending } from "@prisma/client";

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

type Props = {
  spendings: ProjectSpending[];
};

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
  const currentDate = React.useMemo(() => new Date(), []);
  const labels = React.useMemo(() => {
    const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDate();
    const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const labels: string[] = [];
    for (let i = startDate; i < endDate; i++) {
      labels.push(`${i.toString()}`);
    }
    return labels;
  }, [currentDate]);

  const groupedSpendings = React.useMemo(() => {
    const grouped = props.spendings.reduce<{ [key: string]: ProjectSpending[] }>(
      (acc, spending) => {
        const date = new Date(spending.createdAt).toLocaleDateString();
        if (!acc[date]) {
          acc[date] = [];
        }

        acc[date].push(spending);

        return acc;
      },
      {}
    );

    return grouped;
  }, [props.spendings]);

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Transportation Spending",
        data: labels.map((label) => {
          let numbers: number = 0;
          const date = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            Number(label)
          ).toLocaleDateString();
          const spendings = groupedSpendings[date];
          if (!spendings) return 0;

          const transportationSpending = spendings.filter(
            (spending) => spending.type === "transportation"
          );

          numbers = transportationSpending.reduce((acc, spending) => acc + spending.amount, 0);

          return numbers;
        }),
        borderColor: "#2563eb",
        backgroundColor: "#60a5fa",
      },
      {
        fill: true,
        label: "Food Spending",
        data: labels.map((label) => {
          let numbers: number = 0;
          const date = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            Number(label)
          ).toLocaleDateString();
          const spendings = groupedSpendings[date];
          if (!spendings) return 0;

          const foodSpending = spendings.filter((spending) => spending.type === "food");

          numbers = foodSpending.reduce((acc, spending) => acc + spending.amount, 0);

          return numbers;
        }),
        borderColor: "#dc2626",
        backgroundColor: "#f87171",
      },
      {
        fill: true,
        label: "Lodging Spending",
        data: labels.map((label) => {
          let numbers: number = 0;
          const date = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            Number(label)
          ).toLocaleDateString();
          const spendings = groupedSpendings[date];
          if (!spendings) return 0;

          const lodgingSpending = spendings.filter((spending) => spending.type === "lodging");

          numbers = lodgingSpending.reduce((acc, spending) => acc + spending.amount, 0);

          return numbers;
        }),
        borderColor: "#16a34a",
        backgroundColor: "#4ade80",
      },
      {
        fill: true,
        label: "Entertainment Spending",
        data: labels.map((label) => {
          let numbers: number = 0;
          const date = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            Number(label)
          ).toLocaleDateString();
          const spendings = groupedSpendings[date];
          if (!spendings) return 0;
          const entertainmentSpending = spendings.filter(
            (spending) => spending.type === "entertainment"
          );

          if (!spendings) return 0;

          numbers = entertainmentSpending.reduce((acc, spending) => acc + spending.amount, 0);

          return numbers;
        }),
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
