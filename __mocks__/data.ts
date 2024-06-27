import { Priority, ProjectStatus, users_gender, users_role } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

export const mockUser = {
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

export const mockProject = {
  id: 1,
  title: "Project Mock",
  fund: 10000,
  status: ProjectStatus.in_progress,
  priority: Priority.normal,
  transportationSpending: 20,
  foodSpending: 20,
  lodgingSpending: 40,
  entertainmentSpending: 20,
  projectLeadId: 1,
  createdAt: new Date(),
  updatedAt: new Date(),
  projectMembers: [mockUser, mockUser],
};
