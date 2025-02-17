import { PrismaClient } from "@prisma/client";
import bcryptjs from "bcryptjs";
const prisma = new PrismaClient();

async function main() {
  const administrator = await prisma.job_positions.create({
    data: {
      name: "Administrator",
      salary: 0,
      shift_end: "16:00",
      shift_start: "08:00",
    },
  });

  const softwareDeveloper = await prisma.job_positions.create({
    data: {
      name: "Software Developer",
      salary: 0,
      shift_start: "09:00",
      shift_end: "16:00"
    }
  })

  // Create admin 
   await prisma.users.create({
    data: {
      name: "Admin",
      password: await bcryptjs.hash("290990", 10),
      role: "admin",
      gender: "male",
      work_id: "ID001",
      job_position: {
        connect: {
          id: administrator.id,
        },
      },
    },
  });
  // create normal employee
  await prisma.users.create({
    data: {
      name: "Zufri",
      password: await bcryptjs.hash("777777",10),
      role: "employee",
      gender: "male",
      "work_id": "ID002",
      job_position: {
        connect: {
          id: softwareDeveloper.id
        }
      }
    }
  })
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
