import { FaUserPlus } from "react-icons/fa";
import Link from "next/link";
const JobPositionPage = () => {
  return (
    <section className="space-y-4">
      <h1 className="text-xl uppercase font-semibold">Job Position</h1>
      <hr />
      <div className="flex justify-end">
        <Link
          href="/dashboard/job-positions/create"
          className="bg-slate-950 text-white p-2 rounded flex gap-x-2 items-center hover:bg-slate-900"
        >
          <FaUserPlus /> Job Position
        </Link>
      </div>
      {/* <EmployeeTable /> */}
    </section>
  );
};
export default JobPositionPage;
