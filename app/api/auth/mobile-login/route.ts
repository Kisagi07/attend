// pages/api/mobile-login.ts
import { NextResponse } from "next/server";
import { auth, signIn } from "../[...nextauth]/authConfig";
import { encode } from "next-auth/jwt";
import { RiTokenSwapLine } from "react-icons/ri";

export async function POST(req: Request) {
  const body = await req.json();
  const {  PIN } = body;

  const response = await signIn("credentials", {
    redirect: false,    
    PIN,
  });
  

  if (!response || response.error) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const session = await auth();

  const token = await encode({token: session, secret: process.env.AUTH_SECRET!, salt: "Kafe"});  

  if (!session || !session?.user) {
    return NextResponse.json({ error: "Auth failed" }, { status: 401 });
  }

  return NextResponse.json({ token: token ?? null }); // or construct a JWT manually if needed
}
