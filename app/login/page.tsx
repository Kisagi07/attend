"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getCsrfToken, signIn, signOut } from "next-auth/react";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";

const LoginPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [incorrect, setIncorrect] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [redirecting, setRedirecting] = useState<boolean>(false);
  const [PIN, setPIN] = useState<string>("");

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setIncorrect(false);

    if (PIN.length === 0) {
      setIncorrect(true);
      return;
    }        

    const res = await signIn("credentials", {
      PIN,
      callbackUrl: searchParams.get("callbackUrl") ?? "/home",
      redirect: false,
    });
    setSubmitting(false);

    if (res && res.error) {
      setIncorrect(true);
    } else {
      router.push(res?.url!);
      setRedirecting(true);
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
        <form onSubmit={handleLoginSubmit} className="mt-4 space-y-4 text-start">
          <Input
            disabled={submitting}
            variant="underlined"
            label="PIN"
            maxLength={6}
            type="password"
            value={PIN}
            onKeyDown={handleKeyDown}
            onValueChange={setPIN}
          />
          {incorrect && (
            <small data-testid="incorrent" className="text-red-400">
              {incorrect && "Make sure the PIN are correct"}
            </small>
          )}
          <Button
            fullWidth
            type="submit"
            color="success"
            variant="flat"
            isLoading={redirecting || submitting}
          >
            {redirecting ? "Redirecting" : "Submit"}
          </Button>
        </form>
      </section>
    </main>
  );
};
export default LoginPage;
