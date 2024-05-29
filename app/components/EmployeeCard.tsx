import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { UserResultFirst } from "@/app/prisma";

interface Props {
  user: UserResultFirst;
}

const EmployeeCard: React.FC<Props> = ({ user }: Props) => {
  return (
    <article className="flex items-end justify-between gap-4 rounded border border-slate-200 bg-white">
      <div className="space-y-2 p-2">
        <h4 className="font-bold text-gray-600">{user.name}</h4>
        <h4
          className={clsx(" rounded-md px-1 text-sm font-semibold capitalize", {
            "bg-violet-100 text-violet-500":
              user.todayStatus === "work_from_office",
            "bg-red-100 text-red-500": user.todayStatus === "absent",
            "bg-green-100 text-green-500":
              user.todayStatus === "work_from_home",
            "bg-blue-100 text-blue-500": user.todayStatus === "sick",
            "bg-rose-100 text-rose-500": user.todayStatus === "work_with_duty",
          })}
        >
          {user.todayStatus.replaceAll("_", " ") || "Hadir"}
        </h4>
        <div className="text-sm">
          <h6 className="text-red-500">
            {user.totalAbsent || 0} hari tidak hadir
          </h6>
          <h6 className="text-amber-500">
            {user.totalWorkFromHome || 0} hari kerja dari rumah
          </h6>
          <h6 className="text-violet-500">
            {user.totalWorkFromOffice || 0} hari kerja dari kantor
          </h6>
        </div>
        <Link
          href={`/dashboard/employees/${user.work_id}/attendances`}
          className="block text-sm hover:underline "
        >
          Detail
        </Link>
      </div>
      {user.api_profile_picture ? (
        <div className="relative h-full w-24 md:w-32">
          <Image
            src={user.api_profile_picture}
            fill
            className=" object-cover object-center"
            alt=""
            draggable={false}
          />
        </div>
      ) : user.gender === "male" ? (
        <Image
          src={"/img/male.png"}
          width={200}
          height={200}
          className="h-auto w-16 md:w-24"
          alt=""
          draggable={false}
        />
      ) : (
        <Image
          src={"/img/female.png"}
          width={200}
          height={200}
          className="h-auto w-16 md:w-24"
          alt=""
          draggable={false}
        />
      )}
      {/* {user.gender === "male" ? (
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
      )} */}
    </article>
  );
};
export default EmployeeCard;
