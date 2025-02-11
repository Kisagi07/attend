"use client";
import { fetcher, groupByDate } from "@/app/helper";
import useSWR from "swr";
import { DrinkAndFoodCost } from "@prisma/client";
import { Spinner } from "@heroui/spinner";
// import { Line } from "react-chartjs-2";
import { useMemo } from "react";
import {
  LineChart,
  Line as RechartsLine,
  CartesianAxis,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import getCurrencyAbbreviation from "../helper/getCurrencyAbbreviation";

const MonthlySpendings = () => {
  const { data: foodDrinkNotes, isLoading } = useSWR<DrinkAndFoodCost[]>(
    "/api/food-and-drink",
    fetcher
  );

  const lineData = useMemo(() => {
    if (!foodDrinkNotes) return [];
    const groupedByMonth = groupByDate("date", foodDrinkNotes);
    return Object.keys(groupedByMonth).map((month) => {
      return {
        name: month,
        pv: groupedByMonth[month].reduce((acc, curr) => acc + curr.cost, 0),
      };
    });
  }, [foodDrinkNotes]);

  return isLoading ? (
    <div className="flex justify-center">
      <Spinner color="primary" />
    </div>
  ) : (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={lineData}>
        <RechartsLine type="monotone" dataKey="pv" stroke="#82ca9d" />
        <CartesianAxis stroke="#16a34a" />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={(value) => getCurrencyAbbreviation(value)} />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default MonthlySpendings;
