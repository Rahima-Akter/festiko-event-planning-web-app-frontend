"use client";

import { useState } from "react";
import ProfileSidebar from "@/components/modules/profile/shared/sidebar";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <ProfileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Content */}
      <div className="flex-1 w-full">
        <button onClick={() => setIsOpen(true)} className="lg:hidden p-4 bg-transparent! border-0! outline-none! shadow-none! appearance-none!">
          ☰
        </button>
        {children}
      </div>
    </div>
  );
}
