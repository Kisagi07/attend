import { extractNumber } from "@/app/helper";
import prisma from "@/app/prisma";
import { parseZonedDateTime } from "@internationalized/date";
import { DrinkAndFoodCostCategory } from "generated/prisma";
import { NextRequest, NextResponse } from "next/server";
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

const OPTIONS = async (req: NextRequest) => {
  const response = new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST,PUT,GET,OPTIONS,DELETE",
      "Access-Control-Allow-Headers":
        "Content-Type, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version, X-Uroboros",
    },
  });

  return response;
};

export { POST, GET, OPTIONS };
