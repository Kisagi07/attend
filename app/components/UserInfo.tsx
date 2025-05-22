import Card from "@/app/components/Card";
import { getWordDay } from "../helper";
import { UserWithJob } from "@/app/prisma";

interface UserInfoProps {
  promise: Promise<any>;
}

const UserInfo: React.FC<UserInfoProps> = async ({ promise }) => {
  const user = (await promise) as UserWithJob;
  return (
    <Card>
      <article className="grid grid-cols-[auto_10px_auto]">
        <span>Nama</span>
        <span>:</span>
        <span>{user?.name}</span>

        <span>Profesi</span>
        <span>:</span>
        <span>{user?.job_position?.name || "No Position"}</span>

        <span>Jam Kerja</span>
        <span>:</span>
        <span>
          {user.job_position
            ? user.job_position.work_day?.split(",")?.includes(new Date().getDay().toString())
              ? `${user.job_position.shift_start} - ${user.job_position.shift_end}`
              : "Day Off"
            : "No Shift"}
        </span>
      </article>
    </Card>
  );
};
export default UserInfo;
