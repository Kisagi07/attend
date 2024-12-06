"use client";
import { fetcher, groupByDate } from "@/app/helper";
import useSWR from "swr";
import { DrinkAndFoodCost } from "@prisma/client";
import { Spinner } from "@nextui-org/spinner";
import { Line } from "react-chartjs-2";
import { useMemo } from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
  Filler
);
const MonthlySpendings = () => {
  const { data: foodDrinkNotes, isLoading } = useSWR<DrinkAndFoodCost[]>(
    "/api/food-and-drink",
    fetcher
  );

  const lineData = useMemo(() => {
    if (foodDrinkNotes) {
      const grouped = groupByDate("date", foodDrinkNotes);
      const data = {
        labels: Object.keys(grouped),
        datasets: [
          {
            label: "Total Spending",
            data: Object.keys(grouped).map((month) => {
              return grouped[month].reduce((acc, note: DrinkAndFoodCost) => acc + note.cost, 0);
            }),
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            fill: true,
          },
        ],
      };
      return data;
    } else {
      const data = {
        labels: [],
        datasets: [
          {
            label: "Spendings",
            data: [],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
          },
        ],
      };
      return data;
    }
  }, [foodDrinkNotes]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Monthly Spending",
      },
    },
  };
  return isLoading ? (
    <div className="flex justify-center">
      <Spinner color="primary" />
    </div>
  ) : (
    <div className="relative w-full">
      <Line
        data={lineData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "top" as const,
            },
            title: {
              display: true,
              text: "Monthly Spending",
            },
          },
        }}
      />
    </div>
  );
};
export default MonthlySpendings;
