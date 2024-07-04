import { AttendancesEmployeeCard, EmployeeAttendances } from "@/app/components";

const Page = ({ params }: { params: { work_id: string } }) => {
  return (
    <>
      <section>
        <AttendancesEmployeeCard params={params} />
      </section>
      <EmployeeAttendances params={params} />
    </>
  );
};
export default Page;
