/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { getMyParticipations } from "@/services/participation/participation.service";
import { MyParticipationResponse } from "@/types/participation/myParticipation.types";
import { useEffect, useState } from "react";
import MyParticipations from "../myParticipations";

const MyParticipationsClient = () => {
  const [myParticipations, setMyParticipations] =
    useState<MyParticipationResponse | null>(null);
  useEffect(() => {
    try {
      const fetchMyParticipations = async () => {
        const response = await getMyParticipations();
        setMyParticipations(response ?? null);
      };
      fetchMyParticipations();
    } catch (err: any) {
      console.log(err.message);
    }
  }, [setMyParticipations]);
  return <MyParticipations myParticipations={myParticipations?.data ?? []} />;
};

export default MyParticipationsClient;
