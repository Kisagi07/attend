"use client";
import { fetcher } from "@/app/helper";
import { UserApiProfile } from "@/app/prisma";
import { Alert, Button, FileInput, FloatingLabel } from "flowbite-react";
import Image from "next/image";
import React from "react";
import { toast } from "react-toastify";
import { RiArrowGoBackFill } from "react-icons/ri";
import useSWR from "swr";
import Link from "next/link";
const Page: React.FC = () => {
  const {
    data: user,
    isLoading,
    mutate,
  } = useSWR<UserApiProfile>("/api/user", fetcher);

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);

  const pinRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    const formData = new FormData(e.currentTarget);
    if (!formData.get("name")) {
      setError("Name is required");
      return;
    }

    try {
      const res = await fetch("/api/user", {
        method: "PUT",
        body: formData,
      });
      if (!res.ok) {
        throw new Error(await res.text());
      }
      toast.success("Profile updated");
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsSubmitting(false);
      mutate();
      if (pinRef.current) {
        pinRef.current.value = "";
      }
    }
  };

  return (
    <main className="min-h-screen w-full bg-white p-4 text-slate-700">
      <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="fotn-bold text-2xl">Edit Profile</h1>
          <Button as={Link} color="gray" href="/home">
            <RiArrowGoBackFill />
          </Button>
        </div>
        <div className="flex justify-center">
          {selectedFile ? (
            <label
              htmlFor="profile_picture"
              className="flex cursor-pointer justify-center hover:brightness-90"
            >
              <Image
                src={URL.createObjectURL(selectedFile)}
                width={144}
                height={144}
                className="aspect-square w-1/2 rounded-full object-cover object-center"
                alt=""
              />
            </label>
          ) : user?.api_profile_picture ? (
            <label
              htmlFor="profile_picture"
              className="flex cursor-pointer justify-center hover:brightness-90"
            >
              <Image
                src={user?.api_profile_picture}
                width={144}
                height={144}
                className="aspect-square w-1/2 rounded-full object-cover object-center"
                alt=""
                priority
              />
            </label>
          ) : (
            <label
              htmlFor="profile_picture"
              className="flex aspect-square w-1/2 cursor-pointer items-center justify-center rounded-full bg-slate-200 hover:bg-slate-300"
            >
              <span className="text-slate-500">No Profile Picture</span>
            </label>
          )}
        </div>
        <FileInput
          name="profile_picture"
          id="profile_picture"
          className="hidden"
          accept="image/*"
          onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
        />
        {error && <Alert color="failure">{error}</Alert>}
        {isLoading ? (
          <>
            <div className="h-12 animate-pulse rounded bg-slate-200"></div>
            <div className="h-12 animate-pulse rounded bg-slate-200"></div>
          </>
        ) : (
          <>
            <FloatingLabel
              variant="outlined"
              name="name"
              label="Name"
              defaultValue={user?.name!}
            />
            <FloatingLabel
              ref={pinRef}
              variant="outlined"
              name="pin"
              label="New PIN"
              type="password"
            />
          </>
        )}
        <Button
          type="submit"
          gradientMonochrome="info"
          className="w-full"
          isProcessing={isSubmitting}
        >
          Save
        </Button>
      </form>
    </main>
  );
};
export default Page;
