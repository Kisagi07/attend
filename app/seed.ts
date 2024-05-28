import { PrismaClient } from "@prisma/client";
import bcryptjs from "bcryptjs";
const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.users.create({
    data: {
      name: "Admin",
      password: await bcryptjs.hash("290990", 10),
      role: "admin",
      gender: "male",
      work_id: "ID001",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
