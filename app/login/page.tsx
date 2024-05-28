"use client";
import { useState } from "react";
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

  const handleUppercase = (e: React.FormEvent<HTMLInputElement>) => {
    const input = e.currentTarget;
    input.value = input.value.toUpperCase();
  };

  return (
    <main className="min-h-screen bg-white text-slate-500 px-4 md:bg-slate-50 py-8 flex flex-col justify-center">
      <section className="text-center md:bg-white max-w-sm mx-auto w-full md:border-2 md:border-slate-200 md:rounded md:p-3 md:shadow-md">
        <h1 className=" text-5xl font-bold">Login</h1>
        <form onSubmit={handleLoginSubmit} className="mt-4 space-y-4 text-start">
          <FloatingLabel
            variant="standard"
            label="PIN"
            maxLength={5}
            type="password"
            value={PIN}
            onChange={(e) => setPIN(e.currentTarget.value)}
          />
          {/* <div>
            <label htmlFor="work_id">Work ID:</label>
            <input
              type="text"
              className="w-full outline-none rounded-md px-3 py-2 bg-transparent border-2 border-slate-300 "
              placeholder="ID..."
              id="work_id"
              name="work_id"
              maxLength={5}
              onInput={handleUppercase}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full outline-none rounded-md px-3 py-2 bg-transparent border-2 border-slate-300 "
                placeholder="Password"
                id="password"
                name="password"
              />
              <span
                className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </span>
            </div>
          </div> */}
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
