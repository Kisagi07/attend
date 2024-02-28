"use client";
import { FaClock } from "react-icons/fa6";
import { FaMoneyCheck } from "react-icons/fa";
import { useState } from "react";
import { TotalEmployeeCard, TotalGrossSalary } from "@/app/components";

const SalaryPage = () => {
  const [monthYear, setMonthYear] = useState<string>(`${new Date().getFullYear()}-${(new Date().getMonth() + 1).toString().padStart(2, "0")}`);
  return (
    <section className="space-y-4">
      <h1 className="text-xl uppercase font-semibold">Salary</h1>
      <hr />
      <h2 className="text-lg font-semibold">Totals</h2>
      <input type="month" className="px-2 py-1 w-full border border-gray-200 outline-none rounded " value={monthYear} onChange={(e) => setMonthYear(e.currentTarget.value)} />
      <TotalEmployeeCard />
      <article className="border border-gray-200 rounded p-4 flex justify-between items-center">
        <h3 className="font-semibold text-lg">Work Hours : 300</h3>
        <FaClock className="w-12 h-12 bg-rose-400 text-white p-2 rounded-full" />
      </article>
      <TotalGrossSalary days={new Date(+monthYear.split("-")[0], +monthYear.split("-")[1] - 1, 0).getDate()} />
      <article className="border border-gray-200 rounded p-4 flex justify-between items-center">
        <h3 className="font-semibold text-lg">
          Net Salary : <span className="whitespace-nowrap">Rp. 4.275.000</span>
        </h3>
        <FaMoneyCheck className="w-12 h-12 bg-emerald-400 text-white p-2 rounded-full" />
      </article>
    </section>
  );
};
export default SalaryPage;
