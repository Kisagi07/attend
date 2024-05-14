import { UserModel } from "@/models/User";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

interface Props {
  user: UserModel;
}

const EmployeeCard: React.FC<Props> = ({ user }: Props) => {
  return (
    <article className="bg-white flex gap-4 items-end justify-between border border-slate-200 rounded">
      <div className="space-y-2 p-2">
        <h4 className="text-gray-600 font-bold">{user.name}</h4>
        <h4
          className={clsx(" font-semibold text-sm px-1 rounded-md capitalize", {
            "bg-green-100 text-green-500": user.todayStatus === "clock-from-office",
            "bg-red-100 text-red-500": user.todayStatus === "absent",
            "bg-amber-100 text-amber-500": user.todayStatus === "work-from-home",
            "bg-blue-100 text-blue-500": user.todayStatus === "sick",
          })}
        >
          {user.todayStatus || "Hadir"}
        </h4>
        <div className="text-sm">
          <h6 className="text-red-500">{user.totalAbsent || 0} hari tidak hadir</h6>
          <h6 className="text-amber-500">{user.totalWorkFromHome || 0} hari kerja dari rumah</h6>
        </div>
        <Link
          href={`/dashboard/employees/${user.work_id}/attendances`}
          className="hover:underline text-sm block "
        >
          Detail
        </Link>
      </div>
      {user.gender === "male" ? (
        <Image
          src={"/img/male.png"}
          width={200}
          height={200}
          className="w-16 md:w-24 h-auto"
          alt=""
          draggable={false}
        />
      ) : (
        <Image
          src={"/img/female.png"}
          width={200}
          height={200}
          className="w-16 md:w-24 h-5/6"
          alt=""
          draggable={false}
        />
      )}
    </article>
  );
};
export default EmployeeCard;
