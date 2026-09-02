import { Fraunces, Geist } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/context/ToastContext";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata = {
  title: "Academia Hub",
  description: "School Management System for Ghanaian educational institutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-paper text-ink font-sans">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
