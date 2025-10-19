import type { Metadata } from "next";
import "./globals.css";
import SideBar from "@/components/sideBar/SideBar";
import Navbar from "@/components/navbar/Navbar";

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
    <html lang="en" data-theme="light">
      <body className="bg-base-200" >
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center">
            <Navbar />

            {children}

          </div>
          <SideBar />
        </div>
      </body>
    </html>
  );
}
