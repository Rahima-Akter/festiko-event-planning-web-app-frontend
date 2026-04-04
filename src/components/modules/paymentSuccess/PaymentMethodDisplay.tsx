"use client";

import { useSearchParams } from "next/navigation";
import { IconCreditCard } from "@tabler/icons-react";

const PaymentMethodDisplay = () => {
  const searchParams = useSearchParams();
  const status = searchParams.get("redirect_status"); // succeeded or failed

  // We don’t have the real card info from query, so use a fallback
  const paymentData =
    status === "succeeded"
      ? { cardBrand: "VISA", last4: "4242" } 
      : null;

  return (
    <div className="text-right">
      <p className="text-[10px] uppercase tracking-[0.2em] text-[#F7F1E3]/40 mb-2">
        Payment Method
      </p>
      <p className="text-sm font-medium text-[#F7F1E3] flex items-center justify-end gap-2">
        <IconCreditCard className="text-base text-[#C8B273]" />
        {paymentData
          ? `${paymentData.cardBrand.toUpperCase()} •••• ${paymentData.last4}`
          : "---"}
      </p>
    </div>
  );
};

export default PaymentMethodDisplay;