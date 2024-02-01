import { GetServerSidePropsContext, NextApiRequest } from "next";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";

export const authConfig = {
  pages: {
    signIn: `${process.env.APP_URL}/login`,
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const res = await fetch(`${process.env.APP_URL}/api/login`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const user = await res.json();

        if (user) {
          return user;
        } else {
          throw new Error("Invalid Credentials");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.work_id = user.work_id;
        token.job_position = user.job_position;
        token.today_shift = user.today_shift;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.work_id = token.work_id as any;
      session.user.job_position = token.job_position as string;
      session.user.today_shift = token.today_shift as string;
      session.user.role = token.role;
      return session;
    },
  },
} satisfies NextAuthOptions;

const handler = NextAuth(authConfig);

export function auth() {
  return getServerSession(authConfig);
}

export { handler as GET, handler as POST };
