"use client";
import { fetcher } from "@/app/helper";
import useSWR from "swr";
import React from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import DayOffRequestList from "@/app/components/DayOffRequestList";
import { Modal, ModalBody, useDisclosure, ModalContent } from "@nextui-org/modal";
import { DayOffRequestWithUser } from "@/app/prisma";
import DayOffRequestCard from "@/app/components/DayOffRequestCard";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { FaCircleXmark } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaFlag } from "react-icons/fa";
import { toast } from "sonner";
const Page = () => {
  const { data, mutate } = useSWR<DayOffRequestWithUser[]>("/api/day-off-request", fetcher);
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
  const [toBeUpdated, setToBeUpdated] = React.useState<DayOffRequestWithUser | null>(null);
  const [updating, setUpdating] = React.useState<boolean>(false);
  const [comment, setComment] = React.useState<string>("");

  const handleOnArticleClick = (id: number) => {
    const item = data?.find((item) => item.id === id);
    if (item) {
      setToBeUpdated(item);
      onOpen();
    } else {
      console.error("Item not found");
    }
  };

  const handleUpdate = async (status: "approved" | "rejected" | "pending") => {
    const formData = new FormData();
    formData.append("status", status);
    formData.append("comment", comment);
    setUpdating(true);
    try {
      const response = await fetch(`/api/day-off-request/${toBeUpdated?.id}`, {
        method: "PUT",
        body: formData,
      });
      if (response.ok) {
        onOpenChange();
        setToBeUpdated(null);
        setComment("");
        toast.success("Successfully updated");
        mutate();
      } else {
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setUpdating(false);
    }
  };

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
            <DayOffRequestList data={sortedData.pending} onArticleClick={handleOnArticleClick} />
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
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.2,
                  ease: "easeOut",
                },
              },
              exit: {
                y: -20,
                opacity: 0,
                transition: {
                  duration: 0.2,
                  ease: "easeIn",
                },
              },
            },
          }}
        >
          <ModalContent>
            <ModalBody>
              {toBeUpdated && (
                <>
                  <DayOffRequestCard dayOffRequest={toBeUpdated} />
                  <div className="space-y-4">
                    <Input variant="underlined" label="Comment" name="comment" />
                    <div className="flex justify-center gap-4">
                      {toBeUpdated.status !== "rejected" && (
                        <Button
                          color="danger"
                          variant="flat"
                          startContent={<FaCircleXmark />}
                          onClick={() => handleUpdate("rejected")}
                          isLoading={updating}
                        >
                          Reject
                        </Button>
                      )}
                      {toBeUpdated.status !== "approved" && (
                        <Button
                          color="success"
                          variant="flat"
                          startContent={<IoIosCheckmarkCircle />}
                          onClick={() => handleUpdate("approved")}
                          isLoading={updating}
                        >
                          Approve
                        </Button>
                      )}
                      {toBeUpdated.status !== "pending" && (
                        <Button
                          color="secondary"
                          variant="flat"
                          startContent={<FaFlag />}
                          onClick={() => handleUpdate("pending")}
                          isLoading={updating}
                        >
                          Pending
                        </Button>
                      )}
                    </div>
                  </div>
                </>
              )}
            </ModalBody>
          </ModalContent>
        </Modal>
      </section>
    </>
  );
};
export default Page;
