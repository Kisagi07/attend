import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const POST = async (req: NextRequest) => {
  const { key } = await req.json();

  if (key === process.env.MAINTENANCE_KEY) {
    const cookieStore = cookies();
    cookieStore.set("maintenance_key", key, {
      maxAge: 60 * 60 * 24,
    });
    return NextResponse.json(
      { message: "Maintenance mode bypassed" },
      {
        status: 200,
      }
    );
  } else {
    return NextResponse.json(
      { message: "Invalid key" },
      {
        status: 401,
      }
    );
  }
};

const GET = async (req: NextRequest) => {
  const cookieStore = cookies();
  const key = cookieStore.get("maintenance_key");
  if (key) {
    return NextResponse.json(
      { message: "Bypassed", key: key.value },
      {
        status: 200,
      }
    );
  }
  return NextResponse.json({ message: "Not bypassed" }, { status: 401 });
};

export { POST, GET };
