"use client";
import { getAllEvents } from "@/services/event/event.service";
import { EventResponse } from "@/types/event/event.types";
import { useEffect, useState } from "react";
import UpcomingEventsSection from "../upcomingEvents";
import FreePublicEventsSection from "../freePublicEvents";
import Events from "../../events/events";
import { usePathname } from "next/navigation";
import EventsManagement from "../../dashboard/eventsManagement/eventsManagement";
const UpcomingEventsClient = () => {
  const [allEvents, setAllEvents] = useState<EventResponse | null>(null);
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [category, setCategory] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [priceSort, setPriceSort] = useState<string>("");
  const pathName = usePathname();

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
          limit: 8,
          search: debouncedSearch,
          category,
          sortBy: "fee",
          sortOrder: priceSort,
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
  }, [category, debouncedSearch, page, priceSort]);

  return (
    <>
      {pathName === "/home" && (
        <>
          <UpcomingEventsSection
            allEvents={allEvents?.data ?? null}
            setCategory={setCategory}
            category={category}
          />
          <FreePublicEventsSection allEvents={allEvents?.data ?? null} />
        </>
      )}
      {pathName === "/events" && (
        <Events
          allEvents={allEvents?.data ?? null}
          loading={loading}
          setSearch={setSearch}
          setPage={setPage}
          meta={allEvents?.meta ?? null}
          setCategory={setCategory}
          setPriceSort={setPriceSort}
        />
      )}
      {pathName === "/dashboard/event-management" && (
        <EventsManagement
          allEvents={allEvents?.data ?? null}
          loading={loading}
          setSearch={setSearch}
          setPage={setPage}
          setCategory={setCategory}
          meta={allEvents?.meta ?? null}
        />
      )}
    </>
  );
};

export default UpcomingEventsClient;
