import type { Metadata } from "next";
import "./globals.css";
import SideBar from "@/components/sideBar/SideBar";
import Navbar from "@/components/navbar/Navbar";
import MainLayout from "@/components/mainLayout/MainLayout";

export const metadata: Metadata = {
  title: "NextBoard",
  description: "A clean, modern dashboard built with Next.js + Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-base-200" >
        <MainLayout>
          {children}

        </MainLayout>
      </body>
    </html>
  );
}
