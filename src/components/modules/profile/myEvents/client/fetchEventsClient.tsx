/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { getMyCreatedEvents } from "@/services/event/event.service";
import MyEvents from "../myEvents";
import { EventResponse } from "@/types/event/event.types";

const FetchEventsClient = () => {
  const [eventsResponse, setEventsResponse] = useState<EventResponse | null>(
    null,
  );
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getMyCreatedEvents();
        setEventsResponse(response);
      } catch (err: any) {
        console.log(err.message);
      }
    };
    fetchEvents();
  }, [setEventsResponse]);

  return <MyEvents allEvents={eventsResponse?.data ?? []} />;
};

export default FetchEventsClient;
