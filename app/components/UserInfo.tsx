import Card from "@/app/components/Card";
import { getWordDay } from "../helper";
import { UserModel } from "@/models/User";

interface UserInfoProps {
  promise: Promise<any>;
}

const UserInfo: React.FC<UserInfoProps> = async ({ promise }) => {
  // const session = await getServerSession();
  const user: UserModel = await promise;
  console.log(user);
  return (
    <Card>
      <article className="grid grid-cols-[auto_10px_auto]">
        <span>Name</span>
        <span>:</span>
        <span>{user?.name}</span>

        <span>Job Position</span>
        <span>:</span>
        <span>{user?.job_position?.name || "No Position"}</span>

        <span>Today Shift</span>
        <span>:</span>
        <span>
          {user.job_position
            ? user.job_position.work_day.includes(getWordDay())
              ? user.job_position.shift_duration
              : "Day Off"
            : "No Shift"}
        </span>
      </article>
    </Card>
  );
};
export default UserInfo;
