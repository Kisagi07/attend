import { NextResponse, NextRequest } from "next/server";
import { Company } from "@/models";

export async function GET(req: NextRequest) {
  const coordinate = await Company.findOne({
    attributes: ["latitude", "longitude"],
  });
  if (!coordinate) return NextResponse.json(null);
  return NextResponse.json(coordinate);
}

export async function POST(req: NextRequest) {
  const { latitude, longitude } = await req.json();
  const coordinate = await Company.create({
    latitude,
    longitude,
  });
  return NextResponse.json(coordinate);
}

export async function PUT(req: NextRequest) {
  const { latitude, longitude }: { latitude: number; longitude: number } =
    await req.json();
  const company = await Company.findOne();
  if (!company) {
    const newCompany = await Company.create({ latitude, longitude });
    return NextResponse.json(newCompany);
  } else {
    await company.update({ latitude, longitude });
    return NextResponse.json(company);
  }
}
