import { extractNumber } from "@/app/helper";
import prisma from "@/app/prisma";
import { parseZonedDateTime } from "@internationalized/date";
import { DrinkAndFoodCostCategory } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const GET = async (
  req: NextRequest,
  props: { params: Promise<{ id: string }> }
): Promise<NextResponse> => {
  const params = await props.params;
  const foodDrinkCost = await prisma.drinkAndFoodCost.findFirst({
    where: {
      id: Number(params.id),
    },
  });
  if (!foodDrinkCost) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  return NextResponse.json(foodDrinkCost);
};

const PUT = async (
  req: NextRequest,
  props: { params: Promise<{ id: string }> }
): Promise<NextResponse> => {
  const params = await props.params;

  const foodDrinkCost = await prisma.drinkAndFoodCost.findFirst({
    where: {
      id: Number(params.id),
    },
  });
  if (!foodDrinkCost) {
    return NextResponse.json({ message: "Not Found" }, { status: 404 });
  }
  const formData = await req.formData();
  const category = formData.get("category") as DrinkAndFoodCostCategory;
  const amount = formData.get("amount") as string;
  const cost = formData.get("cost") as string;
  const description = formData.get("description") as string | null;
  const date = formData.get("date") as string;

  const updatedDrinkFoodCost = await prisma.drinkAndFoodCost.update({
    where: {
      id: Number(params.id),
    },
    data: {
      category,
      amount: extractNumber(amount),
      cost: extractNumber(cost),
      description,
      date: parseZonedDateTime(date).toDate(),
    },
  });

  return NextResponse.json(updatedDrinkFoodCost);
};

const DELETE = async (
  req: NextRequest,
  props: { params: Promise<{ id: string }> }
): Promise<NextResponse> => {
  const params = await props.params;

  const foodDrinkCost = await prisma.drinkAndFoodCost.findFirst({
    where: {
      id: Number(params.id),
    },
  });
  if (!foodDrinkCost) {
    return NextResponse.json({ message: "Not Found" }, { status: 404 });
  }
  await prisma.drinkAndFoodCost.delete({
    where: {
      id: Number(params.id),
    },
  });

  return NextResponse.json({ message: "Note Deleted" });
};

export { GET, PUT, DELETE };
