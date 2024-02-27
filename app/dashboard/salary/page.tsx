import { FaPeopleGroup, FaClock } from "react-icons/fa6";
import { FaMoneyCheckAlt, FaMoneyCheck } from "react-icons/fa";
const SalaryPage = () => {
  return (
    <section className="space-y-4">
      <h1 className="text-xl uppercase font-semibold">Salary</h1>
      <hr />
      <h2 className="text-lg font-semibold">Totals</h2>
      <article className="border border-gray-200 rounded p-4 flex justify-between items-center">
        <h3 className="font-semibold text-lg">Employees : 2</h3>
        <FaPeopleGroup className="w-12 h-12 bg-sky-400 text-white p-2 rounded-full" />
      </article>
      <article className="border border-gray-200 rounded p-4 flex justify-between items-center">
        <h3 className="font-semibold text-lg">Work Hours : 300</h3>
        <FaClock className="w-12 h-12 bg-rose-400 text-white p-2 rounded-full" />
      </article>
      <article className="border border-gray-200 rounded p-4 flex justify-between items-center">
        <h3 className="font-semibold text-lg">
          Gross Salary : <span className="whitespace-nowrap">Rp. 4.500.000</span>
        </h3>
        <FaMoneyCheckAlt className="w-12 h-12 bg-amber-400 text-white p-2 rounded-full" />
      </article>
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
