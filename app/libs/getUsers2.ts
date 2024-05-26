import prisma from "@/app/prisma";
export default async function getUsers2() {
  const users = await prisma.users.findMany();
  return users;
}
