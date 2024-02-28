import { FaPeopleGroup } from "react-icons/fa6";
import { UserModel } from "@/models/User";

interface CProps {
  promise: Promise<UserModel[]>;
}

const TotalEmployeeCard = async ({ promise }: CProps) => {
  const users = await promise;
  return (
    <article className="border border-gray-200 rounded p-4 flex justify-between items-center">
      <h3 className="font-semibold text-lg">Employees : {users.length}</h3>
      <FaPeopleGroup className="w-12 h-12 bg-sky-400 text-white p-2 rounded-full" />
    </article>
  );
};
export default TotalEmployeeCard;
