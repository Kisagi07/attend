import React from "react";
import { Card, CardHeader } from "@heroui/card";
import { formatRupiah } from "../helper";
import { ProjectResult } from "@/app/prisma";
import { FaUserFriends } from "react-icons/fa";
import { GrStatusInfo } from "react-icons/gr";
import { MdOutlinePriorityHigh } from "react-icons/md";
import { AiFillFund } from "react-icons/ai";
import translateStatus from "@/utils/translateStatus";
import translatePriority from "@/utils/translatePriority";

type Props = {
  project: undefined | ProjectResult;
};

const ProjectDetailStatus = ({ project }: Props) => {  
  return (
    <section>
      <h3 className="text-xl font-bold">Detail Proyek : {project?.title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        <Card shadow="sm">
          <CardHeader>
            <div className="flex gap-2">
              <div className="bg-yellow-300 p-2 rounded">
                <GrStatusInfo className="w-8 h-8 text-yellow-600" />
              </div>
              <div>
                <h4 className="text-lg font-medium">Status</h4>
                <p data-testid="status">{project ? translateStatus(project.status): ""}</p>
              </div>
            </div>
          </CardHeader>
        </Card>
        <Card shadow="sm">
          <CardHeader>
            <div className="flex gap-2">
              <div className="bg-blue-300 p-2 rounded">
                <MdOutlinePriorityHigh className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-medium">Prioritas</h4>
                <p data-testid="priority">{project ? translatePriority(project.priority) : ""}</p>
              </div>
            </div>
          </CardHeader>
        </Card>
        <Card shadow="sm">
          <CardHeader>
            <div className="flex gap-2">
              <div className="bg-emerald-300 p-2 rounded">
                <AiFillFund className="w-8 h-8 text-emerald-600" />
              </div>
              <div>
                <h4 className="text-lg font-medium">Dana</h4>
                <p data-testid="fund">{formatRupiah(project?.fund ?? 0)}</p>
              </div>
            </div>
          </CardHeader>
        </Card>
        <Card shadow="sm">
          <CardHeader>
            <div className="flex gap-2">
              <div className="bg-violet-300 p-2 rounded">
                <FaUserFriends className="w-8 h-8 text-violet-600" />
              </div>
              <div>
                <h4 className="text-lg font-medium">Anggota</h4>
                <p data-testid="members">{project?.projectMembers.length}</p>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
};

export default ProjectDetailStatus;
