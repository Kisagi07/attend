import NextAuth from "next-auth";
declare module "next-auth" {
  interface User {
    name: string;
    work_id: string;
    job_position: string;
    today_shift: string;
  }

  interface Session {
    user: User;
  }
}
