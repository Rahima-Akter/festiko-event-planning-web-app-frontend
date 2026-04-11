"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PaymentSuccess from "@/components/modules/paymentSuccess/paymentSuccess";

// Separate component that uses useSearchParams
const PaymentSuccessContent = () => {
  const searchParams = useSearchParams();
  const eventId = searchParams.get("eventId");
  const clientSecret = searchParams.get("client_secret");

  // console.log("PaymentSuccessPage - URL params:", { eventId, clientSecret: clientSecret?.substring(0, 20) + "..." });

  return <PaymentSuccess eventId={eventId} clientSecret={clientSecret} />;
};

// Fallback component shown while loading
const LoadingFallback = () => (
  <div className="bg-[#2F2A24] text-[#F7F1E3] lg:pt-20 pt-24 min-h-screen flex items-center justify-center">
    <div className="text-xl">Loading your confirmation...</div>
  </div>
);

const PaymentSuccessPage = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <PaymentSuccessContent />
    </Suspense>
  );
};

export default PaymentSuccessPage;
