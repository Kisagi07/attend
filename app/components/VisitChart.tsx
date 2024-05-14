"use client";

import useSWR from "swr";
import { fetcher } from "../helper";
import { LogModel } from "@/models/Log";
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
  dates: string[];
  data: { [key: string]: LogModel[] };
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
    "/api/attendances?last-seven-days",
    fetcher
  );

  const [labels, setLabels] = useState<string[]>([]);
  const [data, setData] = useState({
    labels,
    datasets: [
      {
        label: "Visit",
        data: labels.map((label) => chartData?.data[label]?.length || 0),
        backgroundColor: "#818cf8",
      },
    ],
  });

  useEffect(() => {
    if (chartData) {
      setLabels(chartData.dates);
      setData({
        labels: chartData.dates,
        datasets: [
          {
            label: "Visit",
            data: chartData?.dates.map((label) => chartData?.data[label]?.length || 0),
            backgroundColor: "#818cf8",
          },
        ],
      });
    }
  }, [chartData]);
  return (
    <section className="h-80 md:col-span-2 space-y-2">
      <h1 className="text-xl uppercase font-semibold">Visit by Day</h1>
      <hr />
      {chartDataLoading ? <VerticalChartSkeleton /> : <Bar options={options} data={data} />}
    </section>
  );
};
export default VisitChart;
