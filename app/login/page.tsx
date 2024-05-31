"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Input } from "@nextui-org/input";

const LoginPage = () => {
  const router = useRouter();

  const [incorrect, setIncorrect] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [PIN, setPIN] = useState<string>("");

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setIncorrect(false);
    const res = await signIn("credentials", {
      PIN,
      redirect: false,
    });

    if (res && res.error) {
      setSubmitting(false);
      setIncorrect(true);
    } else {
      router.push("/home");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (Number.isNaN(+e.key) && e.key !== "Backspace" && e.key !== "Delete") {
      e.preventDefault();
    }
  };

  return (
    <main className="flex min-h-screen flex-col justify-center bg-white px-4 py-8 text-slate-500 md:bg-slate-50">
      <section className="mx-auto w-full max-w-sm text-center md:rounded md:border-2 md:border-slate-200 md:bg-white md:p-3 md:shadow-md">
        <h1 className=" text-5xl font-bold">Login</h1>
        <form
          onSubmit={handleLoginSubmit}
          className="mt-4 space-y-4 text-start"
        >
          <Input
            variant="underlined"
            label="PIN"
            maxLength={6}
            type="password"
            value={PIN}
            onKeyDown={handleKeyDown}
            onValueChange={setPIN}
          />
          {incorrect && (
            <small className="text-red-400">
              Make sure the PIN are correct
            </small>
          )}
          <button
            disabled={submitting}
            className="border-accent-1 w-full rounded-md border bg-green-400 px-3 py-2 text-white transition-all duration-300 hover:bg-green-500 disabled:bg-green-300"
          >
            {submitting ? "Submitting...." : "Login"}
          </button>
        </form>
      </section>
    </main>
  );
};
export default LoginPage;
