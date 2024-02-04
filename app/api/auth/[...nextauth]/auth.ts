import { Session } from "next-auth";
import { getServerSession } from "next-auth/next";
import { authConfig } from "./authConfig";

export const auth = () => {
  return getServerSession(authConfig);
};
