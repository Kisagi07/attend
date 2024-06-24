import React, { Key } from "react";
import { formatRupiah } from "../helper";
import NextUITable from "@/app/components/NextUITable";
import { ProjectWithLeadWithJobAndMembers } from "@/app/prisma";
import { Chip } from "@nextui-org/chip";
import { Spinner } from "@nextui-org/spinner";
import { User } from "@nextui-org/user";
import { Avatar } from "@nextui-org/avatar";
import { Tooltip } from "@nextui-org/tooltip";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  ModalFooter,
} from "@nextui-org/modal";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdOutlineEditNote } from "react-icons/md";
import { Button } from "@nextui-org/button";
import { toast } from "sonner";
import { KeyedMutator } from "swr";
import Link from "next/link";

const columns = [
  {
    key: "title",
    label: "Title",
  },
  {
    key: "fund",
    label: "Fund",
  },
  {
    key: "status",
    label: "Status",
  },
  {
    key: "priority",
    label: "Priority",
  },
  {
    key: "projectLead.name",
    label: "Project Lead",
  },
  {
    key: "projectMembers",
    label: "Members",
  },
];

interface ProjectsTableProps {
  projects: ProjectWithLeadWithJobAndMembers[];
  isLoading?: boolean;
  mutateProjects?: KeyedMutator<ProjectWithLeadWithJobAndMembers[]>;
}

const ProjectsTable: React.FC<ProjectsTableProps> = ({ projects, isLoading, mutateProjects }) => {
  const [selectedProject, setSelectedProject] = React.useState<ProjectWithLeadWithJobAndMembers>();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isOpenConfirmation,
    onOpen: onOpenConfirmation,
    onOpenChange: onOpenChangeConfirmation,
  } = useDisclosure();

  const renderCell = React.useCallback(
    (project: ProjectWithLeadWithJobAndMembers, columnKey: Key) => {
      const cellValue = (columnKey as string).split(".").reduce((acc, part) => {
        if (acc && typeof acc === "object" && part in acc) {
          return (acc as any)[part];
        }
        return undefined;
      }, project);
      switch (columnKey) {
        case "fund":
          return formatRupiah(project.fund);
        case "status":
          return (
            <Chip
              variant="flat"
              classNames={{
                content: "capitalize",
              }}
              color={
                project.status === "completed"
                  ? "success"
                  : project.status === "in_progress"
                    ? "primary"
                    : "warning"
              }
            >
              {project.status.replace("_", " ")}
            </Chip>
          );
        case "priority":
          return (
            <Chip
              variant="flat"
              classNames={{ content: "capitalize" }}
              color={
                project.priority === "low"
                  ? "success"
                  : project.priority === "normal"
                    ? "primary"
                    : project.priority === "high"
                      ? "warning"
                      : "danger"
              }
            >
              {project.priority}
            </Chip>
          );
        case "projectLead.name":
          return <User name={project.projectLead.name} />;
        case "projectMembers":
          return (
            <div className="flex flex-wrap gap-2">
              {project.projectMembers.length === 0
                ? "No Members"
                : project.projectMembers.map((member) => (
                    <Tooltip key={member.id} color="primary" content={member.name!}>
                      <Avatar name={member.name!} />
                    </Tooltip>
                  ))}
            </div>
          );
        default:
          return cellValue as unknown as string | number | Date;
      }
    },
    []
  );

  const handleRowAction = (key: Key) => {
    const selectedId = parseInt(key as string);
    const project = projects.find((project) => project.id === selectedId);
    if (project) {
      setSelectedProject(project);
      onOpen();
    } else {
      console.error("There's no project with received id from the record");
    }
  };

  const handleDeleteActionButton = () => {
    onOpenChange();
    onOpenConfirmation();
  };

  const handleDelete = async () => {
    const loading = toast.loading("Deleting");
    try {
      const res = await fetch(`/api/projects/${selectedProject?.id}`, {
        method: "DELETE",
      });
      toast.dismiss(loading);
      if (!res.ok) {
        toast.error("Failed to delete");
        const error: CustomError = new Error("Something went wrong");
        error.status = res.status;
        error.info = await res.json();
        throw error;
      }

      const data = await res.json();
      toast.success("Deleted");
      onOpenChangeConfirmation();
      mutateProjects?.();
    } catch (error: any) {
      console.error(error);
      console.log(error.info);
    }
  };

  return (
    <>
      <Modal disableAnimation isOpen={isOpen} onOpenChange={onOpenChange} size="sm">
        <ModalContent>
          <ModalHeader>
            <h2>
              Action for : <span className="font-semibold">{selectedProject?.title}</span>
            </h2>
          </ModalHeader>
          <ModalBody>
            <div className="flex justify-center w-full gap-4">
              <Tooltip content="Delete" color="danger">
                <Button isIconOnly color="danger" variant="flat" onClick={handleDeleteActionButton}>
                  <FaRegTrashCan className="w-6 h-6" />
                </Button>
              </Tooltip>
              <Tooltip content="Edit" color="secondary">
                <Button
                  as={Link}
                  href={`/dashboard/projects/${selectedProject?.id}/edit`}
                  isIconOnly
                  color="secondary"
                  variant="flat"
                >
                  <MdOutlineEditNote className="w-6 h-6" />
                </Button>
              </Tooltip>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Modal disableAnimation isOpen={isOpenConfirmation} onOpenChange={onOpenChangeConfirmation}>
        <ModalContent>
          <ModalHeader>Delete {selectedProject?.title}</ModalHeader>
          <ModalFooter>
            <Button variant="flat" color="danger" onClick={handleDelete}>
              Delete
            </Button>
            <Button variant="flat">Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {isLoading ? (
        <div className="flex justify-center w-full">
          <Spinner label="Loading Projects...." />
        </div>
      ) : (
        <NextUITable
          data={projects}
          columns={columns}
          renderCell={renderCell}
          hasSelection
          onRowAction={handleRowAction}
        />
      )}
    </>
  );
};

export default ProjectsTable;
