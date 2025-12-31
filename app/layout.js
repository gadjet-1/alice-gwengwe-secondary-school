import { Geist, Geist_Mono } from "next/font/google";
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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* Navbar hidden on portal pages via CSS */}
        <div className="hide-on-portal">
          <Navbar />
        </div>

        <main className="flex-grow">{children}</main>

        {/* Footer hidden on portal pages via CSS */}
        <div className="hide-on-portal">
          <Footer />
        </div>
      </body>
    </html>
  );
}
