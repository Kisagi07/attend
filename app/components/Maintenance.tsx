"use client";
import React from "react";
import { GrHostMaintenance } from "react-icons/gr";
import { FaGear } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
const Maintenance = () => {
  const router = useRouter();
  const [key, setKey] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState("");
  const handleSend = () => {
    setSubmitting(true);
    setError("");
    fetch(`/api/maintenance`, { method: "POST", body: JSON.stringify({ key }) })
      .then((res) => {
        if (res.status === 401) {
          setError("Invalid key");
          throw new Error("Invalid key");
        }

        return res.json();
      })
      .then((data) => {
        router.refresh();
      })
      .finally(() => setSubmitting(false));
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white p-4">
      <div className="relative mx-auto w-full max-w-sm">
        <FaGear className="absolute right-0 top-0 animate-spin text-5xl text-yellow-300" />
        <FaGear className="absolute left-0 top-1/2 animate-spin text-5xl text-yellow-300" />
        <GrHostMaintenance className="mx-auto block text-9xl text-red-500" />
        <hr className="mt-4 h-4 w-full bg-blue-500" />
      </div>
      <h1 className="text-center text-4xl font-bold">Under Maintenance</h1>
      {error && (
        <div className="bg-red-300 px-2 py-1 text-sm text-red-500">{error}</div>
      )}
      <Input
        variant="faded"
        label="Key"
        value={key}
        onChange={(e) => setKey(e.currentTarget.value)}
      />
      <Button isLoading={submitting} onClick={handleSend}>
        Bypass Maintenance
      </Button>
    </main>
  );
};

export default Maintenance;
