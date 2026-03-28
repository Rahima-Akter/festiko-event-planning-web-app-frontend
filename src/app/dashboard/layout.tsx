"use client";
import DashboardSidebar from "@/components/modules/dashboard/shared/sidebar";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <DashboardSidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Content */}
      <div className="flex-1 w-full">
        <button onClick={() => setIsOpen(true)} className="lg:hidden p-4">
          ☰
        </button>
        {children}
      </div>
    </div>
  );
}
