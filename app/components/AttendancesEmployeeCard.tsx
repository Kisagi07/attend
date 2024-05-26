"use client";
import useSWR from "swr";
import { fetcher } from "@/app/helper";
import { withStatus } from "../prisma";
import { EmployeeCard } from "@/app/components";
import { CardSkeleton } from "@/app/skeletons";
const AttendancesEmployeeCard = ({ params }: { params: { work_id: string } }) => {
  const { data: user, isLoading } = useSWR<withStatus>(
    `/api/users/${params.work_id}?monthly-status`,
    fetcher
  );

  return isLoading ? <CardSkeleton /> : <EmployeeCard user={user!} />;
};
export default AttendancesEmployeeCard;
