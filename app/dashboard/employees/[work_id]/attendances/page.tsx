import { AttendancesEmployeeCard, EmployeeAttendances } from "@/app/components";

const Page = async (props: { params: Promise<{ work_id: string }> }) => {
  const params = await props.params;
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
