import { getServerSession } from "next-auth";
import { auth } from "../api/auth/[...nextauth]/auth";
import User from "@/models/User";

export default async function getUser() {
  const session = await auth();

  const user = User.findOne({
    where: {
      work_id: session?.user.work_id,
    },
  });

  return user;
}
