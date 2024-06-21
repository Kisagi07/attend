import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "PIN",
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
        token.id = user.id ?? "-1";
        // token.id = user.id!.toString();
      }
      return token;
    },
    async session({ session, token }) {
      session.user.work_id = token.work_id as any;
      session.user.role = token.role;
      session.user.id = token.id;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});
