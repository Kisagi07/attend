"use client";
import Table from "@/app/components/Table";
import { DrinkAndFoodCost } from "@prisma/client";
import { createColumnHelper } from "@tanstack/react-table";
import { Chip } from "@heroui/chip";
import { FaBowlFood, FaTrash, FaPencil } from "react-icons/fa6";
import { RiDrinksFill } from "react-icons/ri";
import { fetcher, formatRupiah } from "../helper";
import { Tooltip } from "@heroui/tooltip";
import { Button } from "@heroui/button";
import useSWR from "swr";
import { Spinner } from "@heroui/spinner";
import Link from "next/link";
import Confirmation from "@/app/components/Confirmation";
import { useState } from "react";
import { toast } from "sonner";
const columnHelper = createColumnHelper<DrinkAndFoodCost>();
const DrinkFoodCostTable = () => {
  const { data, isLoading, mutate } = useSWR<DrinkAndFoodCost[]>("/api/food-and-drink", fetcher);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [deleteId, setDeleteId] = useState(-1);
  const columns = [
    columnHelper.accessor("category", {
      header: "Category",
      cell: (info) => (
        <Chip
          className="capitalize"
          variant="flat"
          color={info.getValue() === "food" ? "danger" : "primary"}
          startContent={info.getValue() === "food" ? <FaBowlFood /> : <RiDrinksFill />}
        >
          {info.getValue()}
        </Chip>
      ),
    }),
    columnHelper.accessor("amount", {
      header: "Amount",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("cost", {
      header: "Cost",
      cell: (info) => formatRupiah(info.getValue()),
    }),
    columnHelper.accessor("description", {
      header: "Description",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("date", {
      header: "Date",
      cell: (info) => new Date(info.getValue()).toLocaleDateString(),
    }),
    columnHelper.accessor("id", {
      header: "Action",
      cell: (info) => (
        <div className="flex gap-2 flex-wrap">
          <Tooltip content="Delete">
            <Button
              isIconOnly
              variant="flat"
              color="danger"
              onClick={() => {
                setDeleteId(info.getValue());
                setOpenConfirmation(true);
              }}
            >
              <FaTrash />
            </Button>
          </Tooltip>
          <Tooltip content="Edit">
            <Button
              as={Link}
              href={`/dashboard/food-and-drink-cost/${info.getValue()}/edit`}
              isIconOnly
              variant="flat"
              color="warning"
            >
              <FaPencil />
            </Button>
          </Tooltip>
        </div>
      ),
    }),
  ];

  const handleDelete = async () => {
    if (deleteId === -1) {
      return;
    }
    try {
      const loading = toast.loading("Deleting");
      const res = await fetch(`/api/food-and-drink/${deleteId}`, {
        method: "DELETE",
      });
      toast.dismiss(loading);

      if (!res.ok) {
        const error: CustomError = Error(`${res.status} : ${res.statusText}`);
        const info = await res.json();
        if (info.message) {
          toast.error(info.message);
        }
        error.status = res.status;
        error.info = info;
        throw error;
      }

      const data = await res.json();
      toast.success("Note deleted");
      mutate();
    } catch (error: any) {
      console.error(error);
    }
  };

  return isLoading ? (
    <div className="flex justify-center">
      <Spinner />
    </div>
  ) : (
    <>
      <Confirmation
        onClose={() => setOpenConfirmation(false)}
        onConfirm={handleDelete}
        title="Delete Note/Meal Note"
        show={openConfirmation}
      />
      <Table columns={columns} data={data ?? []} />
    </>
  );
};
export default DrinkFoodCostTable;
