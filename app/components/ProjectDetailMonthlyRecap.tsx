"use client";
import React from "react";
// import ProjectDetailSpendingChart from "./ProjectDetailSpendingChart";
import ProjectDetailSpendingProgress from "./ProjectDetailSpendingProgress";
import { ProjectResult } from "../prisma";
import { formatRupiah } from "../helper";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import clsx from "clsx";
import { toast } from "sonner";
import { Select, SelectItem } from "@heroui/select";

type Props = {
  project: ProjectResult | undefined;
};

const ProjectDetailMonthlyRecap = ({ project }: Props) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [amount, setAmount] = React.useState<string>("");
  const [submitting, setSubmitting] = React.useState<boolean>(false);
  const { food, lodging, transportation, entertainment } = project?.spendings.reduce(
    (acc, spending) => {
      acc[spending.type] += spending.amount;
      return acc;
    },
    { food: 0, lodging: 0, transportation: 0, entertainment: 0 }
  ) || { food: 0, lodging: 0, transportation: 0, entertainment: 0 };

  const logSpending = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!amount.trim() || Number(amount) <= 0) {
      toast.error("Amount of spending is needed");
      return;
    }
    const formData = new FormData(e.currentTarget);
    try {
      setSubmitting(true);
      const res = await fetch(`/api/projects/${project?.id}/spendings`, {
        method: "POST",
        body: formData,
      });
      setSubmitting(false);
      if (!res.ok) {
        const error: CustomError = Error("Something went wrong");
        error.status = res.status;
        error.info = await res.json();
        throw error;
      }
      const data = await res.json();
      toast.success(data.message);
    } catch (error: any) {
      console.log(error);
      if (error.status && error.status === 422) {
        toast.error(error.info.message);
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <article>
      <h3 className="text-xl font-bold px-4">Monthly Recap</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {/* <ProjectDetailSpendingChart spendings={project?.spendings ?? []} /> */}
        <ProjectDetailSpendingProgress project={project} />
      </div>
      <article className="mt-4 space-y-4  px-4 ">
        <h4 className="text-center font-semibold">Total Spendings</h4>
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-4">
          <article>
            <h5 className="font-medium">Food</h5>
            <p>{formatRupiah(food)}</p>
          </article>
          <article>
            <h5 className="font-medium">Lodging</h5>
            <p>{formatRupiah(lodging)}</p>
          </article>
          <article>
            <h5 className="font-medium">Transportation</h5>
            <p>{formatRupiah(transportation)}</p>
          </article>
          <article>
            <h5 className="font-medium">Entertainmnet</h5>
            <p>{formatRupiah(entertainment)}</p>
          </article>
        </div>
        <Button variant="flat" fullWidth onClick={() => setOpen(!open)}>
          Log New Spending
        </Button>
        <form
          onSubmit={logSpending}
          className={clsx("transition-all space-y-4 overflow-hidden", {
            "max-h-96": open,
            "max-h-0": !open,
          })}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Input
              type="number"
              variant="flat"
              fullWidth
              name="amount"
              label="Amount Spent"
              isRequired
              value={amount}
              onValueChange={setAmount}
            />
            <Select
              isRequired
              variant="flat"
              name="type"
              defaultSelectedKeys={new Set(["food"])}
              disallowEmptySelection
              label="Spending Type"
              fullWidth
            >
              <SelectItem key="food">Food</SelectItem>
              <SelectItem key="entertainment">Entertainmnet</SelectItem>
              <SelectItem key="lodging">Lodging</SelectItem>
              <SelectItem key="transportation">Tranportation</SelectItem>
            </Select>
            <Input
              variant="flat"
              fullWidth
              name="description"
              label="Description"
              className="md:col-span-2"
            />
          </div>
          <Button type="submit" isLoading={submitting} fullWidth variant="flat" color="primary">
            Log Spending
          </Button>
        </form>
      </article>
    </article>
  );
};

export default ProjectDetailMonthlyRecap;
