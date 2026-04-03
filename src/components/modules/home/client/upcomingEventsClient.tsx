"use client";
import { getAllEvents } from "@/services/event/event.service";
import { EventResponse } from "@/types/event/event.types";
import { useEffect, useState } from "react";
import UpcomingEventsSection from "../upcomingEvents";
import FreePublicEventsSection from "../freePublicEvents";
const UpcomingEventsClient = () => {
  const [allEvents, setAllEvents] = useState<EventResponse | null>(null);
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [category, setCategory] = useState<string>("");
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
        const response = await getAllEvents({
          page,
          limit: 6,
          search: debouncedSearch,
          category,
          searchFields: ["title", "date", "time", "venue"],
          enumFields: ["category"],
        });
        setAllEvents(response ?? null);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, [category, debouncedSearch, page]);

  return (
    <>
      <UpcomingEventsSection
        allEvents={allEvents?.data ?? null}
        setCategory={setCategory}
        category={category}
      />
      <FreePublicEventsSection allEvents={allEvents?.data ?? null} />
    </>
  );
};

export default UpcomingEventsClient;
