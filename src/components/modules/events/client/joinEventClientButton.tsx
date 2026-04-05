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

      // Call joinEvent which handles everything
      const response = await joinEvent(eventId);

      if (!response?.success) {
        toast.error(response?.message || "Failed to join event");
        setLoading(false);
        return;
      }

      // Free event - already joined
      if (fee <= 0) {
        toast.success("Successfully joined the event!");
        setLoading(false);
        return;
      }

      // Paid event - redirect to payment with client secret
      const clientSecret = response?.data?.clientSecret;
      if (clientSecret) {
        router.push(
          `/pay?client_secret=${encodeURIComponent(clientSecret)}&eventId=${eventId}`
        );
      } else {
        toast.error("Failed to initiate payment");
        setLoading(false);
      }
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