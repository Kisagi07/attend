import { UserModel } from "@/models/User";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { SmallCardSkeleton } from "../skeletons";
import { fetcher, formatRupiah } from "../helper";
import useSWR from "swr";

interface CProps {
  days: number;
}

const TotalGrossSalary = ({ days }: CProps) => {
  const { data, error, isLoading, mutate } = useSWR<UserModel[]>("/api/users", fetcher);
  return isLoading ? (
    <SmallCardSkeleton />
  ) : (
    <article className="border border-gray-200 rounded p-4 flex justify-between items-center">
      <h3 className="font-semibold text-lg">
        Gross Salary :{" "}
        <span className="whitespace-nowrap">
          {formatRupiah(
            data!.reduce((pre, curr) => pre + (curr.job_position?.salary || 0), 0) * days
          )}
        </span>
      </h3>
      <FaMoneyCheckAlt className="w-12 h-12 bg-amber-400 text-white p-2 rounded-full" />
    </article>
  );
};
export default TotalGrossSalary;
