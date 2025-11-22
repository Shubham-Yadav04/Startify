import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "Startify ",
  description: "Platform to advertise your startup and get noticed by the investors around the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
