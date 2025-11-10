import type { Metadata } from "next";
import "./globals.css";
import { clsx } from "clsx";

export const metadata: Metadata = {
  title: "Bharat Life Care Social AI",
  description:
    "AI-native social media command center orchestrating end-to-end content operations for Bharat Life Care.",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx("min-h-dvh bg-slate-50")}>{children}</body>
    </html>
  );
}
