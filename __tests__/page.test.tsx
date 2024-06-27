import { mockProject, mockUser } from "@/__mocks__/data";
import { createJob, createUser } from "@/__mocks__/db-function";
import { prismaMock } from "@/__mocks__/singleton";
import prisma from "@/app/prisma";
import { Priority, ProjectStatus, users_gender, users_role } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

test("should create new job", async () => {
  const job = {
    id: 9,
    name: "Mock User",
    salary: 100000,
    shift_end: "16:00",
    shift_start: "08:00",
    work_day: "1,2,3,4,5",
    created_at: new Date(),
    updated_at: new Date(),
  };

  prismaMock.job_positions.create.mockResolvedValue(job);
  const result = await createJob(job);

  expect(result).toEqual(job);
});

test("should crete new user", async () => {
  const user = {
    id: 1,
    name: "Mock User",
    job_position_id: 9,
    work_id: "ID001",
    password: "adminpassword",
    home_latitude: new Decimal(0),
    home_longitude: new Decimal(0),
    created_at: new Date(),
    updated_at: new Date(),
    profile_picture: null,
    gender: users_gender.male,
    role: users_role.admin,
  };

  prismaMock.users.create.mockResolvedValue(user);

  const result = await createUser(user);

  expect(result).toEqual(user);
});
