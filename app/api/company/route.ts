import { NextResponse, NextRequest } from "next/server";
import { Company } from "@/models";
import { CompanyModel } from "@/models/Company";
import Timeline from "@/models/Timeline";

export async function GET(req: NextRequest) {
  const coordinate = await Company.findOne({
    attributes: ["latitude", "longitude", "tolerance_active", "tolerance_time"],
  });
  if (!coordinate) return NextResponse.json(null);
  return NextResponse.json(coordinate);
}

export async function POST(req: NextRequest) {
  const { latitude, longitude } = await req.json();
  const company = await Company.findOne();
  if (company) {
    return NextResponse.json("Company already exist");
  }
  const coordinate = await Company.create({
    latitude,
    longitude,
  });

  await Timeline.create({
    title: "Company Location",
    description: "Company Location has been set",
    type: "new",
  });

  return NextResponse.json(coordinate);
}

export async function PUT(req: NextRequest) {
  const toUpdated: CompanyModel = await req.json();
  const company = await Company.findOne();
  if (!company) {
    const newCompany = await Company.create(toUpdated);
    await Timeline.create({
      title: "Company",
      description: "Company has been created and set",
      type: "new",
    });
    return NextResponse.json(newCompany);
  } else {
    await Timeline.create({
      title: "Company",
      description: "Company has been updated",
      type: "updated",
    });
    await company.update(toUpdated);
    return NextResponse.json(company);
  }
}
