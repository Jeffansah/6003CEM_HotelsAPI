import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "APT",
  description: "Hotels, Apartments, Resorts, and more",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
