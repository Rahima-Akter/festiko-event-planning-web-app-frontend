/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { joinEvent } from "@/services/participation/participation.service";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { env } from "@/env";

const JoinEventClientButton = ({
  fee,
  eventId,
}: {
  fee: number;
  eventId: string;
}) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleJoin = async () => {
    try {
      setLoading(true);

      if (fee <= 0) {
        // Free ticket
        const response = await joinEvent(eventId);
        if (response?.success) {
          toast.success("Successfully joined the event!");
        } else {
          toast.error("Failed to join event");
        }
        setLoading(false);
        return;
      }

      // Paid ticket → create PaymentIntent on backend
      const res = await fetch(
        `${env.NEXT_PUBLIC_BACKEND_URL}/payments/create`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ eventId, amount: fee }),
        }
      );

      const data = await res.json();

      if (!data?.data?.client_secret) {
        toast.error("Failed to initiate payment");
        setLoading(false);
        return;
      }

      // Redirect to payment page with client secret in query string
      router.push(
        `/pay?client_secret=${encodeURIComponent(data.data.client_secret)}`
      );
    } catch (err: any) {
      console.log(err);
      toast.error(err?.response?.data?.message || "Something went wrong");
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleJoin}
      disabled={loading}
      className="w-full bg-linear-to-br from-[#6e5d27] to-[#c8b273] text-white py-5 rounded-xl font-bold text-lg shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all mb-4 cursor-pointer"
    >
      {fee && fee > 0 ? (loading ? "Loading..." : "Pay & Request") : "Get Ticket"}
    </button>
  );
};

export default JoinEventClientButton;