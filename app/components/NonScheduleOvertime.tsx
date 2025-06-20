import { Button } from "@heroui/button";
import { TimeInput } from "@heroui/date-input";
import { Input } from "@heroui/input";
import { FormEvent, useRef, useState } from "react";
import { Form } from "@heroui/form";
import createNSOvertime from "../libs/createNSOvertime";
import { toast } from "sonner";
import { DatePicker } from "@heroui/date-picker";
import { today, getLocalTimeZone } from "@internationalized/date"
import { I18nProvider } from "@react-aria/i18n";

const NonScheduleOvertime = () => {  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

    const resetButton = useRef<HTMLButtonElement>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const errors: Record<string, string> = { };
    if (!data.checkIn) {
      errors.checkIn = "Jam mulai dibutuhkan";
    }
    if (!data.checkOut) {
      errors.checkOut = "Jam selesai dibutuhkan";
    }
    if (!data.work) {
      errors.work = "Perkerjaan dibutuhkan";
    }

    if (Object.values(errors).length > 0) {
      setErrors(errors);
      return;
    } else {
        setErrors({});
    }
    try {
        setSubmitting(true);
        const result = await createNSOvertime(formData);
        setSubmitting(false);
        switch (result.status) {
          case 422:
            setErrors(result.errors!);
            return;
          case 400:
            toast.error(result.message);
            return;
          case 401:
            toast.error("Session tidak ditemukan, mohon login kembali");
            return;
          case 404:
            toast.error("Session telah berkahir mohon login kembali");
            return;
          default:
            toast.success("Overtime berhasil dikirim");
            resetButton.current?.click()            
        }
    } catch (error) {
        console.error(error);   
        setSubmitting(false)     ;
        toast.error("Terjadi kesalahan, hubungi admin");
    }
  };

  return (
    <Form onSubmit={onSubmit} validationErrors={errors}>
      <I18nProvider locale="id">
        <DatePicker className="w-full" label="Tanggal" defaultValue={today(getLocalTimeZone())} maxValue={today(getLocalTimeZone())}  />
      </I18nProvider>
      <div className="flex gap-2 w-full">
        <TimeInput
          hourCycle={24}
          label="Jam mulai"
          name="checkIn"
          isInvalid={!!errors["checkIn"]}
          errorMessage={errors["checkIn"]}
        />
        <TimeInput
          hourCycle={24}
          label="Jam selesai"
          name="checkOut"
          isInvalid={!!errors["checkOut"]}
          errorMessage={errors["checkOut"]}
        />
      </div>
      <Input
        label="Pekerjaan"
        className="mt-2"
        name="work"
        isInvalid={!!errors["work"]}
        errorMessage={errors["work"]}
      />
      <Button isLoading={submitting} fullWidth className="mt-2" color="primary" type="submit">
        Kirim
      </Button>
      <Button ref={resetButton} className="invisible absolute z-[-2]" type="reset">Atur Ulang</Button>
    </Form>
  );
};
export default NonScheduleOvertime;
