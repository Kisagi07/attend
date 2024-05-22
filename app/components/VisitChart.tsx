"use client";

import useSWR from "swr";
import { fetcher } from "../helper";
import { logs } from "@prisma/client";
import { VerticalChartSkeleton } from "../skeletons";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
interface ChartDataResponse {
  [key: string]: logs[];
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
  maintainAspectRatio: false,
};
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const VisitChart = () => {
  const { data: chartData, isLoading: chartDataLoading } = useSWR<ChartDataResponse>(
    "/api/attendances/monthly-status",
    fetcher
  );

  const [labels, setLabels] = useState<string[]>([]);
  const [data, setData] = useState({
    labels,
    datasets: [
      {
        label: "Visit",
        data: labels.map((label) => chartData?.[label]?.length || 0),
        backgroundColor: "#818cf8",
      },
    ],
  });

  useEffect(() => {
    if (chartData) {
      setLabels(Object.keys(chartData));
      setData({
        labels: Object.keys(chartData),
        datasets: [
          {
            label: "Visit",
            data: Object.keys(chartData).map((label) => chartData[label].length),
            backgroundColor: "#818cf8",
          },
        ],
      });
    }
  }, [chartData]);
  return (
    <section className="h-80 md:col-span-2 space-y-2">
      <h1 className="text-xl uppercase font-semibold">Visit by Month</h1>
      <hr />
      {chartDataLoading ? <VerticalChartSkeleton /> : <Bar options={options} data={data} />}
    </section>
  );
};
export default VisitChart;
