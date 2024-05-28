import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authConfig: NextAuthOptions = {
  pages: {
    signIn: `${process.env.APP_URL}/login`,
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      credentials: {
        PIN: { label: "PIN", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch(`${process.env.APP_URL}/api/login`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const user = await res.json();

        if (user && res.ok) {
          return user;
        }

        throw new Error("Invalid Credentials");
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.work_id = user.work_id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.work_id = token.work_id as any;
      session.user.role = token.role;
      return session;
    },
  },
} satisfies NextAuthOptions;
