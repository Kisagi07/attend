"use client";

import useSWR from "swr";
import { fetcher } from "../helper";
import { logs } from "generated/prisma";
import { VerticalChartSkeleton } from "../skeletons";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
interface ChartDataResponse {
  [key: string]: logs[];
}

const VisitChart = () => {
  const { data: chartData, isLoading: chartDataLoading } = useSWR<ChartDataResponse>(
    "/api/attendances/monthly-status",
    fetcher
  );

  const [data, setData] = useState<{ name: string; masuk: number }[]>([]);

  useEffect(() => {
    if (chartData) {
      setData(
        Object.entries(chartData).map(([key, value]) => {
          const name = key;
          const masuk = value.length;
          return { name, masuk };
        })
      );
    }
  }, [chartData]);

  return (
    <div className="h-80 md:col-span-2 flex flex-col gap-2">
      <h1 className="text-xl uppercase font-semibold">Visit by Month</h1>
      <hr />
      {chartDataLoading ? (
        <VerticalChartSkeleton />
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              name="Masuk"
              dataKey="masuk"
              fill="#82ca9d"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};
export default VisitChart;
