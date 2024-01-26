import { NextResponse, NextRequest } from "next/server";
import Company from "@/models/Company";
import User from "@/models/User";

export async function GET(req: NextRequest) {
  const company = await Company.findOne({
    attributes: ["latitude", "longitude"],
  });

  if (!company || !company.latitude || !company.longitude)
    return NextResponse.json(null);

  return NextResponse.json(company);
}
