"use client";

import { Suspense } from "react";
import TicketContent from "./ticket-content";

const LoadingFallback = () => (
  <main className="min-h-screen flex items-center justify-center bg-[#121212] text-[#F7F1E3]">
    <div className="text-xl">Loading your ticket...</div>
  </main>
);

const EventPassPage = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <TicketContent />
    </Suspense>
  );
};

export default EventPassPage;
