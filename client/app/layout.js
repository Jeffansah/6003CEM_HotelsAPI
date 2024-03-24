import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "APT",
  description: "Hotels, Apartments, Resorts, and more",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
