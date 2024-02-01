import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User {
    name: string;
    work_id: string;
    job_position: string;
    today_shift: string;
    role: "admin" | "employee";
  }

  interface Session {
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    work_id: string;
    role: "admin" | "employee";
    today_shift: string;
    job_position: string;
  }
}
