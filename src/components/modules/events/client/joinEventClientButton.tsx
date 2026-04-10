/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { joinEvent } from "@/services/participation/participation.service";
import { getProfile } from "@/services/auth/auth.service";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { IconCreditCard } from "@tabler/icons-react";

const JoinEventClientButton = ({
  fee,
  eventId,
  ClassName,
  size,
}: {
  fee: number;
  eventId: string;
  ClassName?: string;
  size?: number;
}) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleJoin = async () => {
    try {
      setLoading(true);
      const response = await joinEvent(eventId);
      if (!response?.success) {
        toast.error(response?.message || "Failed to join event");
        setLoading(false);
        return;
      }

      // Free event - already joined, redirect to event-pass
      if (fee <= 0) {
        const profileResponse = await getProfile();
        if (profileResponse?.success) {
          const userId = profileResponse.data.id;
          router.push(`/event-pass?eventId=${eventId}&userId=${userId}`);
        } else {
          toast.error("Failed to get user info");
          setLoading(false);
        }
        return;
      }

      // Paid event - redirect to payment with client secret
      const clientSecret = response?.data?.clientSecret;
      if (clientSecret) {
        router.push(
          `/pay?client_secret=${encodeURIComponent(clientSecret)}&eventId=${eventId}`,
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
    <button onClick={handleJoin} disabled={loading} className={`${ClassName}`}>
      {fee && fee > 0 && <IconCreditCard size={size} />}
      {fee && fee > 0
        ? loading
          ? "Loading..."
          : "Pay & Request"
        : "Get Ticket"}
    </button>
  );
};

export default JoinEventClientButton;
