"use client";
import { Divider } from "@heroui/divider";
import { Button } from "@heroui/button";
import Link from "next/link";
import { MdFastfood } from "react-icons/md";
import DrinkFoodCostTable from "@/app/components/DrinkFoodCostTable";
import MonthlySpendings from "@/app/components/MonthlySpendings";
const FoodAndDrinkCostPage = () => {
  return (
    <>
      <section className="p-4 space-y-4">
        <h2 className="text-xl font-semibold">Food And Drink Cost</h2>
        <Divider />
        <Button
          variant="flat"
          color="primary"
          as={Link}
          href="/dashboard/food-and-drink-cost/create"
          endContent={<MdFastfood />}
        >
          New Note
        </Button>
      </section>
      <section className="px-4">
        <DrinkFoodCostTable />
      </section>
      <section>
        <MonthlySpendings />
      </section>
    </>
  );
};
export default FoodAndDrinkCostPage;
