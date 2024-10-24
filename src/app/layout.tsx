import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import DashboardLayoutShell from "@/components/layouts/dashboard/ui/DashboardLayoutShell";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sdk example",
  description: "Generated by assetchain-connect",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black flex justify-center`}
      >
        <DashboardLayoutShell>{children}</DashboardLayoutShell>
      </body>
    </html>
  );
}
