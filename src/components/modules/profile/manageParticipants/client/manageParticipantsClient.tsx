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
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const response = await getEventParticipants(eventId, {
          page,
          limit: 10,
        });
        setParticipants(response ?? null);
      } catch (err: any) {
        console.log(err.message);
      }
    };
    fetchParticipants();
  }, [setParticipants, eventId, page]);
  return (
    <ManageParticipants
      participants={participants?.data ?? null}
      meta={participants?.meta ?? null}
      setPage={setPage}
    />
  );
};

export default ManageParticipantsClient;
