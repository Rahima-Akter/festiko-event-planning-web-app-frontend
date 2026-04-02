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
  useEffect(() => {
    try {
      const fetchMyParticipations = async () => {
        const response = await getMyParticipations({
          page,
          limit: 6,
        });
        setMyParticipations(response ?? null);
      };
      fetchMyParticipations();
    } catch (err: any) {
      console.log(err.message);
    }
  }, [setMyParticipations, page]);
  return (
    <MyParticipations
      myParticipations={myParticipations?.data ?? []}
      meta={myParticipations?.meta ?? null}
      setPage={setPage}
    />
  );
};

export default MyParticipationsClient;
