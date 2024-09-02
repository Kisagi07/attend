import Holidays from "date-holidays";
import { UserResultMany, UserResultFirst } from "./prisma";
import prisma from "@/app/prisma";
import { auth } from "./api/auth/[...nextauth]/authConfig";

// function for returning Date that has beed set to UTC 0000
const getUTCMidnightDate = (date: Date | string) => {
  if (typeof date === "string") {
    date = new Date(date);
  }
  return new Date(date.setUTCHours(0, 0, 0, 0));
};

const authorized = async (): Promise<boolean> => {
  const session = await auth();
  return !!session;
};

export { getUTCMidnightDate, authorized };
