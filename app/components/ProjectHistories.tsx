import React from "react";
import { HistoryWithUser, UserResult } from "../prisma";
import { Avatar } from "@heroui/avatar";
import { IoIosTime } from "react-icons/io";
import { Divider } from "@heroui/divider";
import { FaFileAlt } from "react-icons/fa";
import { Tooltip } from "@heroui/tooltip";
import Link from "next/link";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { MdScheduleSend } from "react-icons/md";
import { FaLink } from "react-icons/fa";
import { toast } from "sonner";
import { Project } from "@prisma/client";

type Props = {
  project: Project;
  histories: HistoryWithUser[];
};

interface GroupedHistories {
  [key: string]: HistoryWithUser[];
}

const ProjectHistories = ({ histories, project }: Props) => {
  const [description, setDescription] = React.useState<string>("");
  const [submitting, setSubmitting] = React.useState<boolean>(false);

  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const groupedHistories = histories.reduce<GroupedHistories>((acc, history) => {
    const { dateTime, ...rest } = history;
    const date = new Date(dateTime);
    const groupProperty = `${date.toLocaleDateString()}`;
    if (!acc[groupProperty]) {
      acc[groupProperty] = [];
    }
    acc[groupProperty].push(history);

    return acc;
  }, {} as GroupedHistories);
  const groupedHistoriesArray = Object.entries(groupedHistories).map(([date, values]) => ({
    date,
    values,
  }));
  const getFilename = (text: string): string => {
    if (typeof text !== "string") {
      throw new Error(`expected passed text to be string, ${typeof text} received.`);
    }

    const splitted = text.split("/");
    if (splitted.length === 0) {
      return "No filename";
    }
    return splitted.pop() as string;
  };
  const sendHistory = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!description.trim()) {
      toast.error("Description is needed");
      return;
    }
    const formData = new FormData(e.currentTarget);
    setSubmitting(true);
    try {
      const res = await fetch(`/api/projects/${project.id}/histories`, {
        method: "POST",
        body: formData,
      });
      setSubmitting(false);
      if (!res.ok) {
        const error: CustomError = Error("Something went wrong");
        error.status === res.status;
        error.info = await res.json();
        throw error;
      }
      const data = await res.json();
      toast.success(data.message);
      setDescription("");
      if (inputRef.current) {
        inputRef.current.files = null;
      }
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
    <section>
      <h3 className="font-semibold text-lg">Project Histories</h3>
      <form onSubmit={sendHistory} className="flex gap-4 items-stretch">
        <Input
          name="description"
          variant="flat"
          color="success"
          label="New History"
          value={description}
          onValueChange={setDescription}
        />
        <Input type="file" className="hidden" name="file" ref={inputRef} />
        <Tooltip content="Attach File" color="primary">
          <Button
            onClick={() => inputRef.current?.click()}
            color="success"
            variant="flat"
            className="w-14 h-14"
            isIconOnly
          >
            <FaLink className="w-6 h-6" />
          </Button>
        </Tooltip>
        <Tooltip content="Send History" color="primary">
          <Button
            isLoading={submitting}
            type="submit"
            color="success"
            variant="flat"
            className="w-14 h-14"
            isIconOnly
          >
            <MdScheduleSend className="w-6 h-6" />
          </Button>
        </Tooltip>
      </form>
      <ul className="border-l-8 border-gray-300 space-y-4 relative h-full md:ml-12 ">
        {groupedHistoriesArray.map(({ date, values }) => (
          <li key={date} className="min-h-[40px]">
            <div className="text-emerald-600 font-bold bg-emerald-300 p-2 w-24 rounded-r md:rounded absolute md:-translate-x-1/2">
              {date}
            </div>
            <ul className="space-y-4 pt-12 pl-2">
              {values.map((history) => (
                <li key={history.id} className="md:flex gap-4">
                  <Avatar
                    name={history.user.name!}
                    src={(history.user as UserResult)?.api_profile_picture ?? undefined}
                  />
                  <div className=" bg-white drop-shadow-md rounded p-2 w-full space-y-4">
                    <div className="flex justify-between items-center">
                      <h4>{history.user.name}</h4>
                      <div className="flex items-center gap-4 text-default-500">
                        <IoIosTime className="w-4 h-4" />
                        <span>{new Date(history.dateTime).toLocaleTimeString()}</span>
                      </div>
                    </div>
                    <Divider />
                    <div className="md:flex justify-between gap-4 items-start">
                      <p>{history.description}</p>
                      {history.file && (
                        <Tooltip content={getFilename(history.file)} color="primary">
                          <Link
                            target="_blank"
                            href={history.file}
                            className="text-default-500 flex items-center gap-4 p-2 hover:bg-slate-300 rounded transition-colors"
                          >
                            <FaFileAlt className="w-4 h-4" />
                            <span className="max-w-40 truncate">{getFilename(history.file)}</span>
                          </Link>
                        </Tooltip>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectHistories;
