"use client";
import { getEventById } from "@/services/event/event.service";
import { useEffect, useState } from "react";
import EventDetails from "../eventDetails";
import { getProfile } from "@/services/auth/auth.service";
import { User } from "@/types/auth/auth.types";
import { Event } from "@/types/event/event.types";

const EvenDetailsClient = ({ id: eventId }: { id: string }) => {
  const [eventDetails, setEventDetails] = useState<Event | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        setLoading(true);
        const response = await getEventById(eventId);
        setEventDetails(response.data ?? null);
        const userResponse = await getProfile();
        setUser(userResponse.data ?? null);
      } catch (err) {
        console.error(err);
        setEventDetails(null);
      } finally {
        setLoading(false);
      }
    };

    fetchEventDetails();
  }, [eventId]);

  return (
    <EventDetails
      event={eventDetails ?? null}
      user={user ?? null}
      loading={loading}
    />
  );
};

export default EvenDetailsClient;
