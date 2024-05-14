import { AttendancesEmployeeCard, EmployeeAttendances } from "@/app/components";

const Page = ({ params }: { params: { work_id: string } }) => {
  return (
    <>
      <div className="max-w-80">
        <AttendancesEmployeeCard params={params} />
      </div>
      <EmployeeAttendances params={params} />
    </>
  );
};
export default Page;
