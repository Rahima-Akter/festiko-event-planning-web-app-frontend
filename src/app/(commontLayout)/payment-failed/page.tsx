"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PaymentFailed from "@/components/modules/paymentFailed/paymentFailed";

function PaymentFailedContent() {
  const searchParams = useSearchParams();
  const eventId = searchParams.get("eventId");

  return <PaymentFailed eventId={eventId} />;
}

export default function PaymentFailedPage() {
  return (
    <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
      <PaymentFailedContent />
    </Suspense>
  );
}