import prisma from "@/app/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const coordinate = await prisma.company.findFirst({
    select: {
      latitude: true,
      longitude: true,
      tolerance_active: true,
      tolerance_time: true,
    },
  });
  if (!coordinate) return NextResponse.json(null);
  return NextResponse.json(coordinate);
}

export async function POST(req: NextRequest) {
  const { latitude, longitude } = await req.json();
  // const company = await Company.findOne();
  const company = await prisma.company.findFirst();
  if (company) {
    return NextResponse.json("Company already exist");
  }

  const coordinate = await prisma.company.create({
    data: {
      latitude,
      longitude,
    },
  });

  await prisma.timelines.create({
    data: {
      title: "Create Company Location",
      description: "Company Location has been set",
      type: "new",
    },
  });

  return NextResponse.json(coordinate);
}

export async function PUT(req: NextRequest) {
  const toUpdated: { latitude: number; longitude: number } = await req.json();
  let company = await prisma.company.findFirst();
  if (!company) {
    const newCompany = await prisma.company.create({
      data: toUpdated,
    });
    await prisma.timelines.create({
      data: {
        title: "Create Company",
        description: "Company has been created and set",
        type: "new",
      },
    });
    return NextResponse.json(newCompany);
  } else {
    await prisma.timelines.create({
      data: {
        title: "Company Location",
        description: "Company has been updated",
        type: "updated",
      },
    });
    company = await prisma.company.update({
      where: {
        id: company.id,
      },
      data: toUpdated,
    });
    return NextResponse.json(company);
  }
}
