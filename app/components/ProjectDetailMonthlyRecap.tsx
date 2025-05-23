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
      toast.error("Nilai pengeluaran dibutuhkan");
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
        const error: CustomError = Error("Ada yang salah dengan server");
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
        toast.error("Ada yang salah dengan server");
      }
    }
  };

  return (
    <article>
      <h3 className="text-xl font-bold px-4">Rekap Bulanan</h3>
      <div className="grid gap-4 md:grid-cols-2">        
        <ProjectDetailSpendingProgress project={project} />
      </div>
      <article className="mt-4 space-y-4  px-4 ">
        <h4 className="text-center font-semibold">Total Pengeluaran</h4>
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-4">
          <article>
            <h5 className="font-medium">Makanan</h5>
            <p>{formatRupiah(food)}</p>
          </article>
          <article>
            <h5 className="font-medium">Penginapan</h5>
            <p>{formatRupiah(lodging)}</p>
          </article>
          <article>
            <h5 className="font-medium">Transportasi</h5>
            <p>{formatRupiah(transportation)}</p>
          </article>
          <article>
            <h5 className="font-medium">Hiburan</h5>
            <p>{formatRupiah(entertainment)}</p>
          </article>
        </div>
        <Button variant="flat" fullWidth onClick={() => setOpen(!open)}>
          Tambah Pengeluaran
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
              label="Nilai Pengeluaran"
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
              label="Tipe Pengeluaran"
              fullWidth
            >
              <SelectItem key="food">Makanan</SelectItem>
              <SelectItem key="entertainment">Hiburan</SelectItem>
              <SelectItem key="lodging">Penginapan</SelectItem>
              <SelectItem key="transportation">Transportasi</SelectItem>
            </Select>
            <Input
              variant="flat"
              fullWidth
              name="description"
              label="Deskripsi"
              className="md:col-span-2"
            />
          </div>
          <Button type="submit" isLoading={submitting} fullWidth variant="flat" color="primary">
            Masukkan Pengeluaran
          </Button>
        </form>
      </article>
    </article>
  );
};

export default ProjectDetailMonthlyRecap;
