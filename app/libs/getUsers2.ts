import { User } from "@/models";
export default async function getUsers2() {
  const users = await User.findAll();
  return users;
}
