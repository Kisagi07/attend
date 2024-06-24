"use client";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { users } from "@prisma/client";
import React from "react";
import { Key, Selection } from "@react-types/shared";
import { Button } from "@nextui-org/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface ProjectFormProps {
  users: {
    data: users[];
    isLoading: boolean;
  };
  defaultValue?: {
    title: string;
    fund: number;
    lead: string | undefined;
    members: string[];
    priority: "low" | "normal" | "high" | "urgent";
    id: number;
  };
}

const ProjectForm: React.FC<ProjectFormProps> = ({ users, defaultValue }) => {
  const router = useRouter();
  const [title, setTitle] = React.useState(defaultValue?.title ?? "");
  const [fund, setFund] = React.useState(defaultValue?.fund.toString() ?? "0");
  const [lead, setLead] = React.useState<Set<Key> | "all" | undefined>(
    defaultValue?.lead ? new Set([defaultValue.lead]) : new Set([])
  );
  const [members, setMembers] = React.useState<Set<Key> | "all">(
    defaultValue?.members ? new Set(defaultValue.members) : new Set([])
  );
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const priorityOptions = [
    {
      label: "Low",
      value: "low",
    },
    {
      label: "Normal",
      value: "normal",
    },
    {
      label: "High",
      value: "high",
    },
    {
      label: "Urgent",
      value: "urgent",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    const formData = new FormData(e.currentTarget);
    // check if this is edit or new
    if (!defaultValue) {
      try {
        setIsSubmitting(true);
        const res = await fetch(`/api/projects`, {
          method: "POST",
          body: formData,
        });
        if (!res.ok) {
          const error: CustomError = new Error("Failed something went wrong");
          error.info = await res.json();
          error.status = res.status;
          throw error;
        }
        toast.success("Project created");
        router.push("/dashboard/projects");
      } catch (error) {
        console.error(error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      try {
        setIsSubmitting(true);
        const res = await fetch(`/api/projects/${defaultValue.id}`, {
          method: "PUT",
          body: formData,
        });
        if (!res.ok) {
          const error: CustomError = new Error("Failed something went wrong");
          error.info = await res.json();
          error.status = res.status;
          throw error;
        }
        toast.success("Project Updated");
        router.push("/dashboard/projects");
      } catch (error) {
        console.error(error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const validate = () => {
    if (!title) {
      toast.error("Title is required");
      return false;
    }

    if (!fund) {
      toast.error("Fund is invalid");
      return false;
    }

    if ((lead as Set<Key>).size === 0) {
      toast.error("Leader needed");
      return false;
    }

    return true;
  };

  const handleLeaderChange = (value: Selection) => {
    value = value as Set<Key>;
    if (value.size > 0) {
      removeLeaderFromMembers(value.values().next().value);
    }
    setLead(value);
  };

  const removeLeaderFromMembers = (value: string) => {
    //  Step 2 & 3: Convert the Set to an array and filter out the value to remove
    const valueToRemove = value;
    const filteredArray = Array.from(members as Set<Key>).filter(
      (value) => value !== valueToRemove
    );

    // Step 4: Create a new Set from the filtered array
    const newSet = new Set(filteredArray);
    setMembers(newSet);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="md:grid grid-cols-2 gap-4">
        <Input
          label="Project Title"
          name="title"
          value={title}
          onValueChange={setTitle}
          variant="underlined"
          isRequired
        />
        <Input
          label="Funds"
          type="number"
          min={0}
          name="fund"
          variant="underlined"
          value={fund}
          onValueChange={setFund}
          isRequired
        />
        <Select
          fullWidth
          label="Project Lead"
          placeholder="Select Project Leader"
          selectedKeys={lead}
          variant="underlined"
          onSelectionChange={handleLeaderChange}
          name="project-lead-id"
          isLoading={users.isLoading}
          isRequired
          description="If the leader is the only one working on this project, members is not needed"
        >
          {users.data.map((animal) => (
            <SelectItem key={animal.id}>{animal.name}</SelectItem>
          ))}
        </Select>
        <Select
          fullWidth
          label="Project Members"
          placeholder="Select Project Members"
          variant="underlined"
          selectionMode="multiple"
          selectedKeys={members}
          onSelectionChange={setMembers}
          isLoading={users.isLoading}
          name="project-members-id[]"
        >
          {users.data
            .filter((user) => user.id !== Number(Array.from(lead as Iterable<Key>)[0] ?? 0))
            .map((user) => (
              <SelectItem key={user.id}>{user.name}</SelectItem>
            ))}
        </Select>
        <Select
          fullWidth
          isRequired
          defaultSelectedKeys={
            defaultValue ? new Set([defaultValue.priority]) : new Set(["normal"])
          }
          label="Priority Project"
          variant="underlined"
          name="priority"
        >
          {priorityOptions.map((option) => (
            <SelectItem key={option.value}>{option.label}</SelectItem>
          ))}
        </Select>
      </div>
      <div className="flex justify-center">
        <Button
          fullWidth
          className="max-w-md"
          isLoading={isSubmitting}
          color="primary"
          variant="flat"
          type="submit"
        >
          Send
        </Button>
      </div>
    </form>
  );
};
export default ProjectForm;
