import prisma, { ProjectWithLeadAndMembers } from "@/app/prisma";
import { authorized } from "@/app/serverhelper";
import { $Enums } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { NextRequest, NextResponse } from "next/server";

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

const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> => {
  // authorized
  if (!(await authorized())) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 402 });
  }

  // get
  const project: ProjectWithLeadAndMembers | null = await prisma.project.findFirst({
    where: {
      id: Number(params.id),
    },
    select: {
      id: true,
      title: true,
      fund: true,
      priority: true,
      status: true,
      projectLead: {
        select: {
          id: true,
          name: true,
          api_profile_picture: true,
          profile_picture: true,
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
  });

  if (project) {
    return NextResponse.json(project);
  } else {
    return NextResponse.json({ message: "Project not found" }, { status: 404 });
  }
};

const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> => {
  // authorized
  if (!(await authorized())) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 402 });
  }

  const formData = await req.formData();
  const projectLeadId = Number(formData.get("project-lead-id") as string);
  const title = formData.get("title") as string;
  const fund = Number(formData.get("fund") as string);
  const priority = formData.get("priority") as $Enums.Priority;
  const projectMembersId = (formData.getAll("project-members-id[]") as string[]).map(Number);
  const status = formData.get("status") as $Enums.ProjectStatus | null;

  // validation
  if (!title) {
    return NextResponse.json({ message: "Tilte is required" }, { status: 422 });
  }
  if (!["low", "normal", "high", "urgent"].includes(priority)) {
    return NextResponse.json({
      message: "Priority has to be one of low, normal, high, or urgent",
    });
  }
  if (!projectLeadId) {
    return NextResponse.json({ message: "Project Lead need to be assigned" });
  }
  if (projectMembersId.some(isNaN)) {
    return NextResponse.json({ message: "Invalid members" });
  }
  if (isNaN(fund)) {
    return NextResponse.json({ message: "Invalid fund" }, { status: 422 });
  }
  if (!(await checkIfAllIdsExists(projectMembersId))) {
    return NextResponse.json({ message: "Some members are not found" }, { status: 422 });
  }

  // find the project for checking first
  const project = await prisma.project.findFirst({
    where: {
      id: Number(params.id),
    },
    include: {
      projectMembers: true,
    },
  });
  // return when project is not found with 404
  if (!project) return NextResponse.json({ messsage: "Project not found" }, { status: 404 });

  // calculate new and removed members
  const oldMembers = project.projectMembers.map((member) => member.id);
  const newMembers: number[] = projectMembersId.filter(
    (newMember) => !oldMembers.includes(newMember)
  );
  const removedMembers: number[] = oldMembers.filter(
    (oldMember) => !projectMembersId.includes(oldMember)
  );

  // if status exists that mean status is updated

  // update major update
  try {
    const updatedProject = await prisma.project.update({
      where: {
        id: Number(params.id),
      },
      data: {
        fund,
        priority,
        title,
        status: status ?? project.status,
        projectLead: {
          connect: {
            id: projectLeadId,
          },
        },
        projectMembers: {
          connect: newMembers.map((newMember) => ({ id: newMember })),
          disconnect: removedMembers.map((num) => ({ id: num })),
        },
      },
    });
    return NextResponse.json({ message: "Updated", data: updatedProject });
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError && error.code === "P2025") {
      return NextResponse.json({ message: "Project not found" }, { status: 404 });
    } else {
      return NextResponse.json({ message: "Something unexpected happen" }, { status: 500 });
    }
  }
};

const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> => {
  // authorized
  if (!(await authorized())) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 402 });
  }

  if (isNaN(Number(params.id))) {
    return NextResponse.json({ message: "Resource not found" }, { status: 404 });
  }
  try {
    const deleted = await prisma.project.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json({ data: deleted });
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError && error.code === "P2025") {
      return NextResponse.json({ message: "Project not found" }, { status: 404 });
    } else {
      return NextResponse.json({ message: "Something unexpected happen" }, { status: 500 });
    }
  }
};

export { GET, PUT, DELETE };
