import { GetServerSidePropsContext, NextApiRequest } from "next";
import NextAuth from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";
import { authConfig } from "./authConfig";

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
