import { NextRequest, NextResponse } from "next/server";
import { authorized } from "@/app/serverhelper";
import prisma from "@/app/prisma";
import { formatRupiah } from "@/app/helper";
import { auth } from "../auth/[...nextauth]/authConfig";

const checkIfAllIdsExists = async (numbers: number[]): Promise<boolean> => {
  const allRecords = await prisma.users.findMany({
    where: {
      id: {
        in: numbers,
      },
    },
  });
  return allRecords.length === numbers.length;
};

const POST = async (req: NextRequest): Promise<NextResponse> => {
  // authorized requester
  if (!(await authorized())) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 402 });
  }

  const session = await auth();

  // get formData and its value
  const formData = await req.formData();
  const title = formData.get("title") as string;
  const fund = Number(formData.get("fund") as string);
  const priority = (formData.get("priority") as "low" | "normal" | "high") || "urgent";
  const projectLeadId = Number(formData.get("project-lead-id") as string);
  const projectMembersId = (formData.getAll("project-members-id[]") as string[]).map(Number);

  // validation
  if (!title) {
    return NextResponse.json({ message: "Tilte is required" }, { status: 422 });
  }
  if (!["low", "normal", "high", "urgent"].includes(priority)) {
    return NextResponse.json({
      message: "Priority has to be one of low, normal, high, or urgent",
    });
  }
  if (isNaN(fund)) {
    return NextResponse.json({ message: "Invalid fund" }, { status: 422 });
  }
  if (!projectLeadId) {
    return NextResponse.json({ message: "Project Lead need to be assigned" });
  }
  if (projectMembersId.some(isNaN)) {
    return NextResponse.json({ message: "Invalid members" });
  }
  if (!(await checkIfAllIdsExists(projectMembersId))) {
    return NextResponse.json({ message: "Some members are not found" }, { status: 422 });
  }

  const project = await prisma.project.create({
    data: {
      fund,
      priority,
      title,
      projectLead: {
        connect: {
          id: projectLeadId,
        },
      },
      projectMembers: {
        connect: projectMembersId.map((num) => ({ id: num })),
      },
    },
    select: {
      id: true,
      title: true,
      status: true,
      priority: true,
      fund: true,
      projectLead: {
        select: {
          name: true,
        },
      },
      projectMembers: {
        select: {
          name: true,
        },
      },
    },
  });

  // create timeline
  await prisma.timelines.create({
    data: {
      title: `Project : ${project.title}`,
      description: `Status: ${project.status.replaceToSpaceAndCapitalize("_")} \n Priority: ${project.priority.capitalize()} \n Fund: ${formatRupiah(project.fund)} \n Leader: ${project.projectLead.name} \n Members: ${project.projectMembers.map((member) => " " + member.name)}`,
      type: "new",
    },
  });

  // create projects activity
  await prisma.projectActivity.create({
    data: {
      dateTime: new Date(),
      user: {
        connect: {
          id: Number(session!.user.id),
        },
      },
      project: {
        connect: {
          id: project.id,
        },
      },
      description: `Project Created ${project.title}`,
    },
  });

  return NextResponse.json({ message: "Created", data: project });
};

const GET = async (req: NextRequest): Promise<NextResponse> => {
  // authorize
  if (!(await authorized())) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 402 });
  }
  // get all including members and leader
  const projects = await prisma.project.findMany({
    select: {
      id: true,
      title: true,
      fund: true,
      status: true,
      priority: true,
      projectLeadId: true,
      projectLead: {
        select: {
          id: true,
          name: true,
          api_profile_picture: true,
          profile_picture: true,
          job_position: {
            select: {
              name: true,
            },
          },
        },
      },
      projectMembers: {
        select: {
          id: true,
          name: true,
          api_profile_picture: true,
          profile_picture: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  // return
  return NextResponse.json(projects);
};

export { POST, GET };
