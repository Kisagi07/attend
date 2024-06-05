"use client";
import { Input } from "@nextui-org/input";
import { DatePicker, DateRangePicker } from "@nextui-org/date-picker";
import { Button } from "@nextui-org/button";
import { today, getLocalTimeZone } from "@internationalized/date";
import React from "react";
const RequestLeave = () => {
  const [alert, setAlert] = React.useState({
    error: "",
    success: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const [reason, setReason] = React.useState<string>("");
  const [comment, setComment] = React.useState<string>("");
  const [dateRange, setDateRange] = React.useState({
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()),
  });

  const formRef = React.useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // validate all value is not empty
    if (!reason || !comment || !dateRange.start || !dateRange.end) {
      setAlert({ error: "All fields are required", success: "" });
      return;
    }

    const formData = new FormData(e.currentTarget);
    try {
      setIsSubmitting(true);
      setAlert({ error: "", success: "" });

      const res = await fetch(`/api/day-off-request`, {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        const error = await res.json();
        console.log(error);
        setAlert({ error: error.message, success: "" });
        throw new Error(error.message);
      }
      setAlert({ error: "", success: "Request sent successfully" });
      e.currentTarget.reset();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
      setComment("");
      setReason("");
      setDateRange({
        start: today(getLocalTimeZone()),
        end: today(getLocalTimeZone()),
      });
    }
  };
  return (
    <section className="space-y-4">
      <h2 className="text-3xl font-semibold">Request Leave</h2>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        {alert.error && <p className="text-red-500">{alert.error}</p>}
        {alert.success && <p className="text-green-500">{alert.success}</p>}
        <div className="space-y-4 lg:grid lg:grid-cols-2 lg:items-center lg:gap-4 lg:space-y-0">
          <DatePicker
            label="Date Requested"
            name="request_date"
            aria-label="Request Date"
            variant="underlined"
            isReadOnly
            value={today(getLocalTimeZone())}
          />
          <Input
            variant="underlined"
            name="leave_type"
            label="Reason"
            value={reason}
            onValueChange={setReason}
          />
          <Input
            variant="underlined"
            name="comment"
            label="Comment"
            value={comment}
            onValueChange={setComment}
          />
          <DateRangePicker
            minValue={today(getLocalTimeZone())}
            variant="underlined"
            startName="leave_start_date"
            endName="leave_end_date"
            aria-label="Leave Date"
            aria-labelledby="leave-date"
            label="Leave Date"
            value={dateRange}
            onChange={setDateRange}
          />
        </div>
        <Button isLoading={isSubmitting} type="submit" color="success">
          Send Request
        </Button>
      </form>
    </section>
  );
};
export default RequestLeave;
