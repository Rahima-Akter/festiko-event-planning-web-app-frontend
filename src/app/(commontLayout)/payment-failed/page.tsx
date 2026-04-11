"use client";

import { useSearchParams } from "next/navigation";
import PaymentFailed from "@/components/modules/paymentFailed/paymentFailed";

const PaymentFailedPage = () => {
  const searchParams = useSearchParams();
  const eventId = searchParams.get("eventId");

  return <PaymentFailed eventId={eventId} />;
};

export default PaymentFailedPage;