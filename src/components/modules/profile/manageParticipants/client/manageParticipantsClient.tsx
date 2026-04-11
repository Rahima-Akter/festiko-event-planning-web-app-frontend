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
  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");

  useEffect(() => {
    const delay = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => clearTimeout(delay);
  }, [search]);

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        setLoading(true);
        const response = await getEventParticipants(eventId, {
          page,
          limit: 10,
          search: debouncedSearch,
          searchFields: ["user.name", "user.email"],
          enumFields: ["status", "paymentStatus"],
        });
        setParticipants(response ?? null);
      } catch (err: any) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchParticipants();
  }, [setParticipants, eventId, page, debouncedSearch]);
  return (
    <ManageParticipants
      participants={participants?.data ?? null}
      meta={participants?.meta ?? null}
      setPage={setPage}
      loading={loading}
      setSearch={setSearch}
    />
  );
};

export default ManageParticipantsClient;
