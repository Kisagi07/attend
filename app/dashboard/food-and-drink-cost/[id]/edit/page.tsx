"use client";;
import { use } from "react";

import { fetcher, formatRupiah } from "@/app/helper";
import { Spinner } from "@heroui/spinner";
import { DrinkAndFoodCost } from "@prisma/client";
import useSWR from "swr";
import FoodAndDrinkCostForm from "@/app/components/FoodAndDrinkCostForm";
import { parseAbsolute, parseZonedDateTime } from "@internationalized/date";

const EditDrinkFoodCostPage = (props: { params: Promise<{ id: string }> }) => {
  const params = use(props.params);
  const { data, isLoading } = useSWR<DrinkAndFoodCost>(
    `/api/food-and-drink/${params.id}`,
    fetcher,
    { dedupingInterval: 0 }
  );

  return isLoading ? (
    <div className="flex justify-center">
      <Spinner color="primary" />
    </div>
  ) : (
    <section className="p4">
      <FoodAndDrinkCostForm
        defaultValue={{
          category: data?.category ?? "food",
          amount: data?.amount.toString() ?? "1",
          description: data?.description ?? "",
          cost: formatRupiah(data?.cost ?? 0),
          date: data?.date ? parseAbsolute(data.date.toString(), "asia/jakarta") : undefined,
        }}
        editId={Number(params.id)}
        isEditing
      />
    </section>
  );
};
export default EditDrinkFoodCostPage;
