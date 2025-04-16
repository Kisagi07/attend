import { formatRupiah } from "@/app/helper";
import prisma, { HistoryWithUser, ProjectResult } from "@/app/prisma";
import { authorized } from "@/app/serverhelper";
import { $Enums } from "@/prisma/client";
import { PrismaClientKnownRequestError } from "@/prisma/client/runtime/library";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../auth/[...nextauth]/authConfig";
import "@/initExtension";

const localDate = new Date().getLocalZonedDate("asia/jakarta");

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
  props: { params: Promise<{ id: string }> }
): Promise<NextResponse> => {
  const params = await props.params;
  // authorized

  if (!(await authorized())) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 402 });
  }

  // get
  let project = (await prisma.project.findFirst({
    where: {
      id: Number(params.id),
    },
    include: {
      projectLead: true,
      projectMembers: true,
      activity: {
        include: {
          user: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      },
      histories: {
        include: {
          user: true,
        },
        orderBy: {
          dateTime: "desc",
        },
      },
      spendings: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  })) as ProjectResult;

  if (!project) return NextResponse.json({ message: "Not Found" }, { status: 404 });

  project.histories = project.histories.map((history) => prisma.projectHistory.routeToAPI(history));

  return NextResponse.json(project);
};

const PUT = async (
  req: NextRequest,
  props: { params: Promise<{ id: string }> }
): Promise<NextResponse> => {
  const params = await props.params;
  // authorized
  const session = await auth();
  if (!session) {
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
      select: {
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
        title: true,
        fund: true,
        status: true,
        priority: true,
      },
    });

    // create timelines
    await prisma.timelines.create({
      data: {
        title: `Project updated: ${updatedProject.title}`,
        description: `Status: ${updatedProject.status.replaceToSpaceAndCapitalize("_")} \n Priority: ${updatedProject.priority.capitalize()} \n Fund: ${formatRupiah(updatedProject.fund)} \n Leader: ${updatedProject.projectLead.name} \n Members: ${updatedProject.projectMembers.map((member) => " " + member.name)}`,
        type: "updated",
      },
    });

    // setup for project activity
    // fetch new members and removed members data
    if (removedMembers.length > 0) {
      const removeMembers = await prisma.users.findMany({
        where: {
          id: {
            in: removedMembers,
          },
        },
      });
      await prisma.projectActivity.create({
        data: {
          dateTime: localDate.toDate(),
          description: `Removed members${removeMembers.map((user) => " " + user.name)}}`,
          user: {
            connect: {
              id: Number(session.user.id),
            },
          },
          project: {
            connect: {
              id: project.id,
            },
          },
        },
      });
    }
    if (newMembers.length > 0) {
      const addedMembers = await prisma.users.findMany({
        where: {
          id: {
            in: newMembers,
          },
        },
      });
      await prisma.projectActivity.create({
        data: {
          dateTime: localDate.toDate(),
          description: `Added new members${addedMembers.map((user) => " " + user.name)}}`,
          user: {
            connect: {
              id: Number(session.user.id),
            },
          },
          project: {
            connect: {
              id: project.id,
            },
          },
        },
      });
    }

    // for fund change
    if (fund !== project.fund) {
      await prisma.projectActivity.create({
        data: {
          description: `Fund changed to ${formatRupiah(fund)}`,
          dateTime: localDate.toDate(),
          project: {
            connect: {
              id: project.id,
            },
          },
          user: {
            connect: {
              id: Number(session.user.id),
            },
          },
        },
      });
    }
    // for status change
    if (status !== project.status) {
      await prisma.projectActivity.create({
        data: {
          description: `Status has been changed to ${status?.capitalize()}`,
          dateTime: localDate.toDate(),
          project: {
            connect: {
              id: project.id,
            },
          },
          user: {
            connect: {
              id: Number(session.user.id),
            },
          },
        },
      });
    }
    // for priority change
    if (priority !== project.priority) {
      await prisma.projectActivity.create({
        data: {
          dateTime: localDate.toDate(),
          description: `Priority changed to ${priority.replaceToSpaceAndCapitalize("_")}`,
          project: {
            connect: {
              id: project.id,
            },
          },
          user: {
            connect: {
              id: Number(session.user.id),
            },
          },
        },
      });
    }
    // for title change
    if (title !== project.title) {
      await prisma.projectActivity.create({
        data: {
          dateTime: localDate.toDate(),
          description: `Title changed to ${title.capitalize()}`,
          project: {
            connect: {
              id: project.id,
            },
          },
          user: {
            connect: {
              id: Number(session.user.id),
            },
          },
        },
      });
    }

    return NextResponse.json({ message: "Updated", data: updatedProject });
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError && error.code === "P2025") {
      return NextResponse.json({ message: "Project not found" }, { status: 404 });
    } else {
      console.log(error);
      return NextResponse.json({ message: "Something unexpected happen" }, { status: 500 });
    }
  }
};

const DELETE = async (
  req: NextRequest,
  props: { params: Promise<{ id: string }> }
): Promise<NextResponse> => {
  const params = await props.params;
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
      select: {
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
        title: true,
        priority: true,
        fund: true,
        status: true,
      },
    });

    // create timeline
    await prisma.timelines.create({
      data: {
        title: `Project deleted: ${deleted.title}`,
        description: `Status: ${deleted.status.replaceToSpaceAndCapitalize("_")} \n Priority: ${deleted.priority.capitalize()} \n Fund: ${formatRupiah(deleted.fund)} \n Leader: ${deleted.projectLead.name} \n Members: ${deleted.projectMembers.map((member) => " " + member.name)}`,
        type: "removed",
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
