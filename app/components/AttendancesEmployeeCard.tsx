"use client";
import useSWR from "swr";
import { fetcher } from "@/app/helper";
import { UserModel } from "@/models/User";
import { EmployeeCard } from "@/app/components";
import { CardSkeleton } from "@/app/skeletons";
const AttendancesEmployeeCard = ({ params }: { params: { work_id: string } }) => {
  if (!params.work_id) return null;
  const { data: user, isLoading } = useSWR<UserModel>(
    `/api/users/${params.work_id}?monthly-status`,
    fetcher
  );

  return isLoading ? <CardSkeleton /> : <EmployeeCard user={user!} />;
};
export default AttendancesEmployeeCard;
