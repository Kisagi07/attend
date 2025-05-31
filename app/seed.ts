import { logs_type, PrismaClient } from "generated/prisma";
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
  // create another employee
  await prisma.users.create({
    data: {
      name: "Subchan",
      password: await bcryptjs.hash("123456", 10),
      role: "employee",
      gender: "male",
      work_id: "ID003",
      job_position: {
        connect: {
          id: softwareDeveloper.id,
        },
      },
    },
  });

  // create company 
  await prisma.company.create({
    data: {
      latitude:-7.5706682246443915, longitude: 112.72443367041296,
      created_at: new Date(),
      tolerance_active: true,
      tolerance_time: 100,
      updated_at: new Date()
    }
  })
  
}

async function createLogs() {
  const users = await prisma.users.findMany();
  const logTypes = ["work_from_home", "sick", "work_from_office", "special_attendance", "on_site_work", "non_schedule_overtime"];
  
  for (const user of users) {
    for (let i = 0; i < 10; i++) {
      const randomType = logTypes[Math.floor(Math.random() * logTypes.length)];
      const randomDate = new Date(2025, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);
      const randomClockInTime = new Date(randomDate);
      randomClockInTime.setHours(Math.floor(Math.random() * 24), Math.floor(Math.random() * 60), Math.floor(Math.random() * 60));

      await prisma.logs.create({
        data: {
          type: randomType as logs_type,
          clock_in_time: randomClockInTime,
          date: randomDate,
          clock_in_latitude: "0.00000000",
          clock_in_longitude: "0.000000000",
          user_id: user.id,
          work: ["Sample work"],
        },
      });
    }
  }
}

main()
  .then(async () => {
    await createLogs();
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
