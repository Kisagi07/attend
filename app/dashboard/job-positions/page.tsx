import { FaUserPlus } from "react-icons/fa";
import Link from "next/link";
import JobPositionTable from "@/app/components/JobPositionTable";
import { Button } from "@nextui-org/button";
const JobPositionPage = () => {
  return (
    <section className="space-y-4">
      <h1 className="text-xl uppercase font-semibold">Job Position</h1>
      <hr />
      <div className="flex justify-end">
        <Button
          as={Link}
          href="/dashboard/job-positions/create"
          size="sm"
          className="dark"
          color="default"
          startContent={<FaUserPlus />}
        >
          Job Position
        </Button>
      </div>

      <JobPositionTable />
    </section>
  );
};
export default JobPositionPage;
