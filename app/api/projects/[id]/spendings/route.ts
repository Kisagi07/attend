import { auth } from "@/app/api/auth/[...nextauth]/authConfig";
import { formatRupiah } from "@/app/helper";
import prisma from "@/app/prisma";
import { $Enums } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const POST = async (req: NextRequest, props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  // authorizew
  const session = await auth();
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const project = await prisma.project.findFirst({
    where: {
      id: Number(params.id),
    },
  });

  if (!project) return NextResponse.json({ message: "Project Not Found" }, { status: 404 });

  const user = await prisma.users.findFirst({
    where: {
      id: Number(session.user.id),
    },
  });

  if (!user) return NextResponse.json({ message: "User not found" }, { status: 404 });

  const formData = await req.formData();
  const amount = Number(formData.get("amount") as string);
  if (isNaN(amount)) {
    return NextResponse.json({ message: "Invalid Amount" }, { status: 422 });
  }
  const type = formData.get("type") as $Enums.SpendingType;
  const description = formData.get("description") as string | undefined;

  const spending = await prisma.projectSpending.create({
    data: {
      amount,
      type,
      description,
      project: {
        connect: {
          id: project.id,
        },
      },
      user: {
        connect: {
          id: user.id,
        },
      },
    },
  });
  const activity = await prisma.projectActivity.create({
    data: {
      dateTime: new Date(),
      description: `Logged new spending - ${formatRupiah(amount)} - ${spending.description}`,
      project: {
        connect: {
          id: project.id,
        },
      },
      user: {
        connect: {
          id: user.id,
        },
      },
    },
  });

  return NextResponse.json({ message: "Spending created", spending });
};
export { POST };
