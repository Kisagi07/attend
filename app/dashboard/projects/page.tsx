import { Button } from "@nextui-org/button";
import Link from "next/link";
import React from "react";

const ProjectsPage = () => {
  return (
    <section className="space-y-2 p-2">
      <h3 className="text-2xl font-semibold">Projects</h3>
      <div className="flex justify-end">
        <Button
          as={Link}
          href="/dashboard/projects/create"
          color="secondary"
          variant="flat"
        >
          Add Project
        </Button>
      </div>
    </section>
  );
};

export default ProjectsPage;
