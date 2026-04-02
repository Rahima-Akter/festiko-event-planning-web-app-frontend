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
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(delay);
  }, [search]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await getMyCreatedEvents({
          page,
          limit: 6,
          search: debouncedSearch,
          category,
          searchFields: ["title", "date", "time", "venue"],
          enumFields: ["category"],
        });
        setEventsResponse(response);
      } catch (err: any) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, [setEventsResponse, page, debouncedSearch, category]);

  return (
    <MyEvents
      allEvents={eventsResponse?.data ?? []}
      meta={eventsResponse?.meta ?? null}
      setPage={setPage}
      setSearch={setSearch}
      setCategory={setCategory}
      loading={loading}
    />
  );
};

export default FetchEventsClient;
