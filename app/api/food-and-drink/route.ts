import { extractNumber } from "@/app/helper";
import prisma from "@/app/prisma";
import { parseZonedDateTime } from "@internationalized/date";
import { DrinkAndFoodCostCategory } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "../auth/[...nextauth]/authConfig";
const POST = async (req: NextRequest): Promise<NextResponse> => {
  const formData = await req.formData();
  const category = formData.get("category") as DrinkAndFoodCostCategory;
  const amount = formData.get("amount") as string;
  const cost = formData.get("cost") as string;
  const description = formData.get("description") as string | null;
  const date = formData.get("date") as string;

  const foodAndDrinkCost = await prisma.drinkAndFoodCost.create({
    data: {
      category,
      amount: extractNumber(amount),
      cost: extractNumber(cost),
      description,
      date: parseZonedDateTime(date).toDate(),
    },
  });

  return NextResponse.json({ message: "Meal/Drink Noted", foodAndDrinkCost });
};
const GET = async (req: NextRequest): Promise<NextResponse> => {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 404 });
  }
  const searchParams = req.nextUrl.searchParams;
  const limit = searchParams.get("limit");
  const orderIn = searchParams.get("orderIn") as "desc" | "asc";

  const drinkFoodCost = await prisma.drinkAndFoodCost.findMany({
    take: limit ? Number(limit) : undefined,
    orderBy: {
      date: orderIn ?? "asc",
    },
  });
  return NextResponse.json(drinkFoodCost);
};

export { POST, GET };
