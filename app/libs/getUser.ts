import { getServerSession } from "next-auth";
import { auth } from "../api/auth/[...nextauth]/auth";
import { User, JobPosition } from "@/models";

export default async function getUser() {
  const session = await auth();

  const user = await User.findOne({
    where: {
      work_id: session?.user.work_id,
    },
    include: [
      {
        model: JobPosition,
      },
    ],
  });

  return user;
}
