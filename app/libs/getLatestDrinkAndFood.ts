"use server"
import prisma from "../prisma";

const getLatestDrinkAndFood = async () => {
    const foodDrinkCost = await prisma.drinkAndFoodCost.findMany({
        orderBy: {
          createdAt: "desc",
        },
        take: 6,
      });

      return foodDrinkCost;
}

export default getLatestDrinkAndFood;