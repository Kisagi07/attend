import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/app/components/Provider";
import { auth } from "./api/auth/[...nextauth]/route";
import ToastProvider from "./components/ToastProvider";
import "react-toastify/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Attendance",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider session={session}>
          <ToastContainer />
          {children}
        </Provider>
      </body>
    </html>
  );
}
