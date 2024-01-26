import Card from "@/app/components/Card";
import { getServerSession } from "next-auth";

interface UserInfoProps {
  promise: Promise<any>;
}

const UserInfo: React.FC<UserInfoProps> = async ({ promise }) => {
  // const session = await getServerSession();
  const user = await promise;
  return (
    <Card>
      <article className="grid grid-cols-[auto_10px_auto]">
        <span>Name</span>
        <span>:</span>
        <span>{user?.name}</span>

        <span>Job Position</span>
        <span>:</span>
        <span>{user?.job_position}</span>

        <span>Today Shift</span>
        <span>:</span>
        <span>{user?.today_shift}</span>
      </article>
    </Card>
  );
};
export default UserInfo;
