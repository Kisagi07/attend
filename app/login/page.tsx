"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { FloatingLabel } from "flowbite-react";

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
    <main className="min-h-screen bg-white text-slate-500 px-4 md:bg-slate-50 py-8 flex flex-col justify-center">
      <section className="text-center md:bg-white max-w-sm mx-auto w-full md:border-2 md:border-slate-200 md:rounded md:p-3 md:shadow-md">
        <h1 className=" text-5xl font-bold">Login</h1>
        <form onSubmit={handleLoginSubmit} className="mt-4 space-y-4 text-start">
          <FloatingLabel
            variant="standard"
            label="PIN"
            maxLength={6}
            type="password"
            value={PIN}
            onKeyDown={handleKeyDown}
            onChange={(e) => setPIN(e.currentTarget.value)}
          />
          {incorrect && <small className="text-red-400">Make sure the PIN are correct</small>}
          <button
            disabled={submitting}
            className="w-full disabled:bg-green-300 rounded-md bg-green-400 px-3 py-2 border hover:bg-green-500 border-accent-1 transition-all duration-300 text-white"
          >
            {submitting ? "Submitting...." : "Login"}
          </button>
        </form>
      </section>
    </main>
  );
};
export default LoginPage;
