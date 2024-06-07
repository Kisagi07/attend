"use client";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { users } from "@prisma/client";
import React from "react";
import { Key } from "@react-types/shared";
import { Button } from "@nextui-org/button";

interface ProjectFormProps {
  users: {
    data: users[];
    isLoading: boolean;
  };
}

const ProjectForm: React.FC<ProjectFormProps> = ({ users }) => {
  const [title, setTitle] = React.useState("");
  const [fund, setFund] = React.useState("0");
  const [lead, setLead] = React.useState<Set<Key> | "all" | undefined>(
    new Set([]),
  );
  const [members, setMembers] = React.useState<Set<Key> | "all" | undefined>(
    new Set([]),
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    // console.log(lead?.[entries]);
  };

  React.useEffect(() => {
    const [firstValue] = lead as Set<Key>;
    // console.log(Number((lead as Set<Key>).values().next().value));
    console.log(firstValue);
  }, [lead]);

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
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
        label="Project Lead"
        placeholder="Select Project Leader"
        selectedKeys={lead}
        className="max-w-xs"
        variant="underlined"
        onSelectionChange={setLead}
        name="project-lead-id"
        isLoading={users.isLoading}
        isRequired
      >
        {users.data.map((animal) => (
          <SelectItem key={animal.id}>{animal.name}</SelectItem>
        ))}
      </Select>
      <Select
        label="Project Lead"
        placeholder="Select Project Leader"
        className="max-w-xs"
        variant="underlined"
        selectionMode="multiple"
        selectedKeys={members}
        onSelectionChange={setMembers}
      >
        {users.data
          .filter(
            (user) =>
              user.id !== Number(Array.from(lead as Iterable<Key>)[0] ?? 0),
          )
          .map((user) => (
            <SelectItem key={user.id}>{user.name}</SelectItem>
          ))}
      </Select>
      <Button color="primary" variant="flat" type="submit">
        Send
      </Button>
    </form>
  );
};
export default ProjectForm;
