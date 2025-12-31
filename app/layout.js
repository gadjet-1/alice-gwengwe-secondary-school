"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Alice Gwengwe Secondary School",
  description: "Official website of Alice Gwengwe Secondary School, Malawi",
};

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const isPortal =
    pathname.startsWith("/student portal") ||
    pathname.startsWith("/teachersp");

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {!isPortal && <Navbar />}

        <main className="flex-grow">{children}</main>

        {!isPortal && <Footer />}
      </body>
    </html>
  );
}
