"use client";
import { fetcher } from "@/app/helper";
import useSWR from "swr";
import React from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import DayOffRequestList from "@/app/components/DayOffRequestList";
import {
  Modal,
  ModalBody,
  useDisclosure,
  ModalContent,
} from "@nextui-org/modal";
import { DayOffRequestWithUser } from "@/app/prisma";
const Page = () => {
  const { data } = useSWR<DayOffRequestWithUser[]>(
    "/api/day-off-request",
    fetcher,
  );
  const [sortedData, setSortedData] = React.useState<{
    pending: DayOffRequestWithUser[];
    approved: DayOffRequestWithUser[];
    rejected: DayOffRequestWithUser[];
  }>({
    pending: [],
    approved: [],
    rejected: [],
  });
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  React.useEffect(() => {
    if (data) {
      const pending = data.filter((item) => item.status === "pending");
      const approved = data.filter((item) => item.status === "approved");
      const rejected = data.filter((item) => item.status === "rejected");
      setSortedData({ pending, approved, rejected });
    }
  }, [data]);
  return (
    <>
      <section className="space-y-2">
        <h1 className="text-3xl font-medium">Employee Leave Request</h1>
        <Tabs aria-label="option">
          <Tab key="pending" title="Pending">
            <DayOffRequestList data={sortedData.pending} />
          </Tab>
          <Tab key="approved" title="Approved">
            <DayOffRequestList data={sortedData.approved} />
          </Tab>
          <Tab key="rejected" title="Rejected">
            <DayOffRequestList data={sortedData.rejected} />
          </Tab>
        </Tabs>
      </section>
      <section>
        <button onClick={onOpen}>Open Modal</button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            <ModalBody>
              <h1>Modal</h1>
            </ModalBody>
          </ModalContent>
        </Modal>
      </section>
    </>
  );
};
export default Page;
