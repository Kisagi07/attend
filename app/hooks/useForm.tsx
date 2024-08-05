import { useEffect, useState } from "react";
import validateForm, { rules } from "./validateForm";
import { toast } from "sonner";

type useForm = {
  debug?: boolean;
  method?: "POST" | "PUT" | "GET";
  url?: string;
};
const useForm = (
  validateRules: rules = {},
  { debug, method, url }: useForm = { debug: false, method: "GET" }
) => {
  const [validated, setValidated] = useState<{ [key: string]: string | File }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [resData, setResData] = useState<any>();
  const [resError, setResError] = useState<CustomError | Error>();
  const [success, setSuccess] = useState<boolean>(false);
  const [failed, setFailed] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [failedMessage, setFailedMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const sendToast = (type: "success" | "failed", message: string) => {
    if (type === "success") {
      toast.success(message);
    }
    if (type === "failed") {
      toast.error(message);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { validated, errors } = validateForm(formData, validateRules);

    setValidated(validated);
    setErrors(errors);

    if (Object.keys(errors).length > 0) {
      toast.error("Invalid Credentials!");
      return;
    }

    if (debug) {
      console.log("Validated: ", validated);
      console.log("Errors: ", errors);
    }

    if (url) {
      try {
        setIsSubmitting(true);
        const res = await fetch(url, {
          method,
          body: formData,
        });
        setIsSubmitting(false);
        if (!res.ok) {
          const error: CustomError = new Error("Something went wrong");
          error.status = res.status;
          error.info = await res.json();
          setFailedMessage(error.info.message ?? "Something went wrong");
          sendToast("failed", error.info.message ?? "Something went wrong");
          throw error;
        }
        const responseData = await res.json();
        setResData(responseData);
        setSuccessMessage(responseData.message ?? "Success");
        sendToast("success", responseData.message ?? "Success");
        setSuccess(true);
        setFailed(false);
      } catch (error: any) {
        setFailed(true);
        setSuccess(false);
        console.error(error);
        setResError(error);
      }
    }
  };

  return { handleSubmit, validated, errors, resData, resError, isSubmitting, success, failed };
};
export default useForm;
