import prisma from "@/app/prisma";
import { $Enums } from "@prisma/client";

interface CreateJob {
  name: string;
  shift_start: string;
  shift_end: string;
  salary: number;
}

export async function createJob(job: CreateJob) {
  return await prisma.job_positions.create({
    data: job,
  });
}

interface CreateUser {
  name: string;
  password: string;
  work_id: string;
  gender: $Enums.users_gender;
  job_position_id: null | number;
  role: $Enums.users_role;
}

export async function createUser(user: CreateUser) {
  return await prisma.users.create({
    data: user,
  });
}
