import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import './globals.css'
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
    <html lang="en" className="">
      <body
        className={` antialiased dark:bg-black bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
