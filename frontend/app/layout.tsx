import type { Metadata } from "next";
import ThemeProviderClient from "@/components/ThemeProviderClient";
import "./globals.css";

export const metadata: Metadata = {
  title: "Startify",
  description:
    "Platform to advertise your startup and get noticed by the investors around the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-white dark:bg-black scrollbar-hidden h-fit">
        <ThemeProviderClient>
          {children}
        </ThemeProviderClient>
      </body>
    </html>
  );
}
