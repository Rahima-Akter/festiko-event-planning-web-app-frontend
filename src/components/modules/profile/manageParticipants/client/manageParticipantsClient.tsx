/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { getEventParticipants } from "@/services/participation/participation.service";
import { useEffect, useState } from "react";
import ManageParticipants from "../manageParticipants";
import { ParticipantsResponse } from "@/types/participation/participation.types";

const ManageParticipantsClient = ({ eventId }: { eventId: string }) => {
  const [participants, setParticipants] = useState<ParticipantsResponse | null>(
    null,
  );
  // console.log(participants);
  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const response = await getEventParticipants(eventId);
        setParticipants(response ?? null);
      } catch (err: any) {
        console.log(err.message);
      }
    };
    fetchParticipants();
  }, [setParticipants, eventId]);
  return <ManageParticipants participants={participants?.data ?? null} />;
};

export default ManageParticipantsClient;
