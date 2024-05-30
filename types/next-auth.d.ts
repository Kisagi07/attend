import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User {
    name: string;
    work_id: string;
    role: "admin" | "employee" | "intern";
    id?: number;
  }

  interface Session {
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    work_id: string;
    role: "admin" | "employee" | "intern";
    id?: number;
  }
}
