"use client";
import React from "react";
import { GrHostMaintenance } from "react-icons/gr";
import { FaGear } from "react-icons/fa6";
import { FloatingLabel, Button, Alert } from "flowbite-react";
import { useRouter } from "next/navigation";
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
    <main className="min-h-screen bg-white flex items-center justify-center flex-col p-4 gap-4">
      <div className="relative w-full max-w-sm mx-auto">
        <FaGear className="text-yellow-300 text-5xl animate-spin absolute top-0 right-0" />
        <FaGear className="text-yellow-300 text-5xl animate-spin absolute left-0 top-1/2" />
        <GrHostMaintenance className="text-9xl text-red-500 mx-auto block" />
        <hr className="h-4 bg-blue-500 w-full mt-4" />
      </div>
      <h1 className="text-4xl font-bold text-center">Under Maintenance</h1>
      {error && <Alert color="failure">{error}</Alert>}
      <FloatingLabel
        variant="outlined"
        label="Key"
        value={key}
        onChange={(e) => setKey(e.currentTarget.value)}
      />
      <Button isProcessing={submitting} onClick={handleSend}>
        Bypass Maintenance
      </Button>
    </main>
  );
};

export default Maintenance;
