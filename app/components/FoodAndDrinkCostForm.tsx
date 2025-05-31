"use client";
import { Select, SelectItem } from "@heroui/select";
import { Input } from "@heroui/input";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlinePriceChange } from "react-icons/md";
import { FaClipboardQuestion } from "react-icons/fa6";
import { DatePicker } from "@heroui/date-picker";
import { Button } from "@heroui/button";
import { useEffect, useState } from "react";
import { extractNumber, formatRupiah } from "../helper";
import { now, getLocalTimeZone, ZonedDateTime } from "@internationalized/date";
import useForm from "@/app/hooks/useForm";
import { DrinkAndFoodCostCategory } from "generated/prisma";
type FoodAndDrinkCostForm = {
  defaultValue?: {
    category: DrinkAndFoodCostCategory;
    amount: string;
    cost: string;
    description: string;
    date: ZonedDateTime | undefined;
  };
  isEditing?: boolean;
  editId?: number | undefined;
};
const FoodAndDrinkCostForm = (
  { defaultValue, isEditing, editId }: FoodAndDrinkCostForm = {
    defaultValue: {
      amount: "1",
      category: "food",
      cost: "Rp. 0",
      date: undefined,
      description: "",
    },
    isEditing: false,
    editId: undefined,
  }
) => {
  if (isEditing && !editId) {
    throw new Error("Edit id required for editing");
  }

  const [cost, setCost] = useState(defaultValue?.cost ?? "Rp. 0");
  const [today, setToday] = useState<ZonedDateTime | null>(null);

  const { handleSubmit, validated, errors, isSubmitting } = useForm(
    {
      category: ["required", "in:food,drink", "string"],
      amount: ["required", "number"],
      cost: ["required", "currency:rupiah", "not:Rp. 0"],
      description: ["required", "string"],
      date: ["required", "zonedDateTime"],
    },
    {
      url: isEditing ? `/api/food-and-drink/${editId}` : "/api/food-and-drink",
      method: isEditing ? "PUT" : "POST",
    }
  );

  const categories = [
    {
      key: "drink",
      label: "Drink",
    },
    {
      key: "food",
      label: "Food",
    },
  ];

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const exceptions = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Shift"];
    if (isNaN(Number(e.key)) && !exceptions.includes(e.key)) {
      e.preventDefault();
    }
  };

  const handleCostChange = (value: string) => {
    const clean = extractNumber(value);
    const formatted = formatRupiah(clean);
    setCost(formatted);
  };

  useEffect(() => {
    if (defaultValue?.date) {
      setToday(defaultValue.date);
    } else {
      setToday(now(getLocalTimeZone()));
    }
  }, [defaultValue?.date]);

  return (
    <>
      <h2 className="text-lg font-semibold">New Meal / Drink Note</h2>
      <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
        <Select
          defaultSelectedKeys={[defaultValue?.category as any]}
          label="Select Category"
          name="category"
          errorMessage={errors["description"]}
          isInvalid={Object.hasOwn(errors, "description")}
        >
          {categories.map((category) => (
            <SelectItem key={category.key}>{category.label}</SelectItem>
          ))}
        </Select>
        <Input
          type="number"
          label="Amount"
          name="amount"
          defaultValue={defaultValue?.amount ?? "1"}
          startContent={<FaShoppingCart />}
          errorMessage={errors["amount"]}
          isInvalid={Object.hasOwn(errors, "amount")}
        />
        <Input
          label="Cost"
          name="cost"
          startContent={<MdOutlinePriceChange />}
          onKeyDown={handleKeyDown}
          value={cost}
          onValueChange={handleCostChange}
          errorMessage={errors["cost"]}
          isInvalid={Object.hasOwn(errors, "cost")}
        />
        <Input
          label="Description"
          description="What food/drink are bought"
          name="description"
          defaultValue={defaultValue?.description ?? ""}
          startContent={<FaClipboardQuestion />}
          errorMessage={errors["description"]}
          isInvalid={Object.hasOwn(errors, "description")}
        />
        <DatePicker
          errorMessage={errors["description"]}
          isInvalid={Object.hasOwn(errors, "description")}
          label="Date"
          name="date"
          granularity="day"
          value={today}
          onChange={setToday}
        />
        <Button
          isLoading={isSubmitting}
          type="submit"
          variant="flat"
          color="success"
          className="md:col-span-2"
        >
          Save
        </Button>
      </form>
    </>
  );
};
export default FoodAndDrinkCostForm;
