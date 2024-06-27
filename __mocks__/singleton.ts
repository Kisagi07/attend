import { PrismaClient } from "@prisma/client";
import { mockDeep, mockReset, DeepMockProxy } from "jest-mock-extended";

import prisma from "@/app/prisma";
import { before } from "node:test";

jest.mock("@/app/prisma", () => ({
  __esModule: true,
  default: mockDeep<PrismaClient>(),
}));

before(() => {
  mockReset(prismaMock);
});

export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>;
