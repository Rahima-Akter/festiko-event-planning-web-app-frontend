/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { getMyParticipations } from "@/services/participation/participation.service";
import { MyParticipationResponse } from "@/types/participation/myParticipation.types";
import { useEffect, useState } from "react";
import MyParticipations from "../myParticipations";

const MyParticipationsClient = () => {
  const [myParticipations, setMyParticipations] =
    useState<MyParticipationResponse | null>(null);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(delay);
  }, [search]);

  useEffect(() => {
    try {
      const fetchMyParticipations = async () => {
        setLoading(true);
        const response = await getMyParticipations({
          page,
          limit: 6,
          search: debouncedSearch,
          searchFields: ["title", "date", "time", "venue"],
        });
        setMyParticipations(response ?? null);
      };
      fetchMyParticipations();
    } catch (err: any) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  }, [setMyParticipations, page, debouncedSearch]);
  return (
    <MyParticipations
      myParticipations={myParticipations?.data ?? []}
      meta={myParticipations?.meta ?? null}
      setPage={setPage}
      setSearch={setSearch}
      loading={loading}
    />
  );
};

export default MyParticipationsClient;
