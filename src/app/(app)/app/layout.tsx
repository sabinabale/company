import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../../globals.css";
import TopNav from "@/layout/TopNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Copmany | Home",
  description: "All you need in one place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col`}>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
