"use client";
import { FC, useState, useEffect, useCallback, useMemo, useRef } from "react";
import Calendar from "@components/Calendar";
import { parseDate, CalendarDate } from "@internationalized/date";
import useSWR from "swr";
import { fetcher } from "@/app/helper";
import { holidays } from "@prisma/client";
import { Button } from "@heroui/button";
import clsx from "clsx";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import { toast } from "sonner";
import { Input } from "@heroui/input";
import { Chip } from "@heroui/chip";
import { MdHolidayVillage } from "react-icons/md";
import { MdDeleteSweep } from "react-icons/md";

const HolidaysCalendar: FC = () => {
  const { data: holidays, isLoading, mutate } = useSWR<holidays[]>("/api/holidays", fetcher);

  const {
    isOpen: isOpenPost,
    onClose: onClosePost,
    onOpenChange: onOpenChangePost,
  } = useDisclosure();
  const { isOpen: isOpenPut, onClose: onClosePut, onOpenChange: onOpenChangePut } = useDisclosure();

  const formPostRef = useRef<HTMLFormElement>(null);
  const formPutRef = useRef<HTMLFormElement>(null);

  const [postLoading, setPostLoading] = useState(false);
  const [putLoading, setPutLoading] = useState(false);
  const [screenSize, setScreenSize] = useState("sm");
  const [selectedDate, setSelectedDate] = useState<CalendarDate | null>(null);
  const [editHoliday, setEditHoliday] = useState<holidays | null>(null);

  const visibleMonth = screenSize === "sm" ? 1 : screenSize === "md" ? 2 : 3;

  const handleScreenChange = useCallback(() => {
    if (window.innerWidth >= 1280) {
      setScreenSize("lg");
    } else if (window.innerWidth >= 768) {
      setScreenSize("md");
    } else {
      setScreenSize("sm");
    }
  }, []);
  const highlitedDates = useMemo<{ color: "danger"; dates: CalendarDate[] }>(() => {
    if (!holidays)
      return {
        color: "danger",
        dates: [],
      };
    return {
      color: "danger",
      dates: holidays.map((holiday) =>
        parseDate(new Date(holiday.date).toISOString().split("T")[0])
      ),
    };
  }, [holidays]);

  const handleHolidayDoubleClick = (holiday: holidays) => {
    setEditHoliday(holiday);
    onOpenChangePut();
  };
  const handleSubmit = () => {
    const validated = formPostRef.current!.checkValidity();
    if (!validated) {
      return;
    }
    const formData = new FormData(formPostRef.current!);
    toast.promise(newHolidayRequest(formData), {
      loading: "Saving",
      success: (data) => {
        mutate();
        onClosePost();

        return "Saved";
      },
      error: (data) => {
        if (data.status === 422) {
          return data.info.message;
        } else {
          return "Failed to save holiday";
        }
      },
    });
  };
  const handleUpdateForm = () => {
    const formData = new FormData(formPutRef.current!);
    const name = formData.get("name") as string;
    toast.promise(updateHolidayRequest(editHoliday!.id.toString(), name), {
      loading: "Updating",
      success: (data) => {
        mutate();
        onClosePut();
        return "Updated";
      },
      error: (data) => {
        if (data.status === 422) {
          return data.info.message;
        } else {
          return "Failed Updating";
        }
      },
    });
  };
  const handleDelete = (holiday: holidays) => {
    toast("Delete Holiday", {
      action: {
        label: "Delete",
        onClick: (t) => {
          toast.promise(deleteHolidayRequest(holiday.id), {
            loading: "Deleting",
            success: (data) => {
              mutate();
              return "Holiday Deleted";
            },
            error: (data) => {
              if (data.status === 404) {
                return "this holiday are not found in our database";
              } else {
                return "Failed Deleting Holiday";
              }
            },
          });
        },
      },
    });
  };
  const updateHolidayRequest = async (id: string, name: string) => {
    try {
      setPutLoading(true);
      const res = await fetch(`/api/holidays`, {
        method: "PUT",
        body: JSON.stringify({
          id,
          name,
        }),
      });
      setPutLoading(false);
      if (!res.ok) {
        const error: CustomError = Error("Something went wrong");
        error.status = res.status;
        error.info = await res.json();
        throw error;
      }
      const data = await res.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  const deleteHolidayRequest = async (id: number) => {
    try {
      const res = await fetch(`/api/holidays`, {
        method: "DELETE",
        body: JSON.stringify({ id }),
      });
      if (!res.ok) {
        const error: CustomError = Error("Something went wrong");
        error.status = res.status;
        error.info = await res.json();
        throw error;
      }
      const data = await res.json();
      return;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const newHolidayRequest = async (formData: FormData) => {
    try {
      setPostLoading(true);
      const res = await fetch("/api/holidays", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          date: selectedDate,
        }),
      });
      if (!res.ok) {
        const error: CustomError = Error("Something went wrong");
        error.status = res.status;
        error.info = await res.json();
        throw error;
      }
      const data = res.json();
      return;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setPostLoading(false);
    }
  };

  useEffect(() => {
    handleScreenChange();
    window.addEventListener("resize", handleScreenChange);
    return () => window.removeEventListener("resize", handleScreenChange);
  }, [handleScreenChange]);

  return (
    <>
      <section className="flex justify-center">
        <Calendar
          value={selectedDate}
          onChange={setSelectedDate}
          setDates={highlitedDates}
          visibleMonth={visibleMonth}
        />
      </section>
      <section>
        <Button
          color="primary"
          variant="flat"
          onClick={() => {
            if (!selectedDate) toast.error("Select a date");
            else onOpenChangePost();
          }}
        >
          New Holiday
        </Button>
        <Modal isOpen={isOpenPost} onOpenChange={onOpenChangePost}>
          <ModalContent>
            <ModalHeader>New Holiday For {selectedDate?.toString()}</ModalHeader>
            <ModalBody>
              <form ref={formPostRef}>
                <Input
                  type="text"
                  label="Holiday Name"
                  placeholder="Holiday Name"
                  isRequired
                  name="name"
                />
              </form>
            </ModalBody>
            <ModalFooter>
              <Button isLoading={postLoading} onClick={handleSubmit} color="primary">
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </section>
      <section className="flex gap-2 flex-wrap">
        <Modal isOpen={isOpenPut} onOpenChange={onOpenChangePut}>
          <ModalContent>
            <ModalHeader>Edit Holiday {editHoliday?.name}</ModalHeader>
            <ModalBody>
              <form ref={formPutRef}>
                <Input
                  type="text"
                  label="Holiday Name"
                  placeholder="Holiday Name"
                  isRequired
                  name="name"
                  defaultValue={editHoliday?.name}
                />
              </form>
            </ModalBody>
            <ModalFooter>
              <Button isLoading={postLoading} onClick={handleUpdateForm} color="primary">
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        {selectedDate &&
          holidays
            ?.filter(
              (holiday) =>
                parseDate(new Date(holiday.date).toISOString().split("T")[0]).compare(
                  selectedDate
                ) === 0
            )
            .map((holiday) => (
              <article key={holiday.id}>
                <Chip
                  onDoubleClick={() => handleHolidayDoubleClick(holiday)}
                  color="danger"
                  variant="bordered"
                  onClose={() => handleDelete(holiday)}
                  startContent={<MdHolidayVillage />}
                  className="select-none cursor-pointer"
                >
                  {holiday.name}
                </Chip>
              </article>
            ))}
      </section>
    </>
  );
};
export default HolidaysCalendar;
