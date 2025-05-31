"use client";
import { users } from "generated/prisma";
import { FaPeopleGroup } from "react-icons/fa6";
import useSWR, { Fetcher } from "swr";
import { SmallCardSkeleton } from "@/app/skeletons";

const fetcher: Fetcher<users[], string> = (...args) => fetch(...args).then((res) => res.json());

const TotalEmployeeCard = () => {
  const { data, error, isLoading } = useSWR<users[]>("/api/users", fetcher);
  return isLoading ? (
    <SmallCardSkeleton />
  ) : (
    <article className="border border-gray-200 rounded p-4 flex justify-between items-center">
      <h3 className="font-semibold text-lg">Employees : {data?.length}</h3>
      <FaPeopleGroup className="w-12 h-12 bg-sky-400 text-white p-4 rounded-full" />
    </article>
  );
};
export default TotalEmployeeCard;
