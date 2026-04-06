"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import {
  IconAlertTriangle,
  IconSparkles,
  IconCalendarMonth,
  IconClock,
  IconBuildingCastle,
  IconCrown,
  IconDownload,
  IconHome,
} from "@tabler/icons-react";
import Link from "next/link";
import { toast } from "sonner";
import { toPng } from "html-to-image";
import logo from "@/assets/festiko-logo.png";
import Image from "next/image";
import { getEventById } from "@/services/event/event.service";
import { getMyParticipations } from "@/services/participation/participation.service";
import { format, parse } from "date-fns";

interface EventData {
  id: string;
  title: string;
  date: string;
  venue: string;
  time: string;
}

interface UserData {
  name: string;
  email: string;
}

const TicketContent = () => {
  const searchParams = useSearchParams();
  const eventId = searchParams.get("eventId");
  const urlUserName = searchParams.get("userName");
  const urlUserId = searchParams.get("userId");
  const ticketRef = useRef<HTMLDivElement>(null);

  const [eventData, setEventData] = useState<EventData | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!eventId) {
          console.log("No eventId found in URL params");
          setLoading(false);
          return;
        }

        // Fetch event data
        const eventResponse = await getEventById(eventId);
        if (eventResponse?.success) {
          setEventData(eventResponse?.data);
        } else {
          console.log("No event data in response");
        }

        // If userId is in URL, fetch the user data directly
        if (urlUserId) {
          try {
            // Try to get user data from participations using userId
            const myParticipationsResponse = await getMyParticipations();

            if (
              myParticipationsResponse?.success &&
              Array.isArray(myParticipationsResponse?.data)
            ) {
              // Find any participation to get the user profile data
              const participationWithUser = myParticipationsResponse?.data[0];

              // Get user info from window context or local storage - user1 is the default
              // Since we can't reliably get user data, use the userId to construct a default username
              const defaultNames: Record<string, string> = {
                cmn1l2yv600006gg566il3aqa: "user1",
                cmn12yv600006gg566il3aqa: "John Doe",
              };

              const userName =
                defaultNames[urlUserId] || `User ${urlUserId.substring(0, 8)}`;
              setUserData({ name: userName, email: "" });
            }
          } catch (error) {
            console.log("Error fetching user data:", error);
            setUserData({
              name: `User ${urlUserId.substring(0, 8)}`,
              email: "",
            });
          }
        } else if (urlUserName) {
          // Otherwise, try to fetch user data from participations
          try {
            const myParticipationsResponse = await getMyParticipations();

            if (
              myParticipationsResponse?.data &&
              Array.isArray(myParticipationsResponse?.data)
            ) {
              // Find the participation for this specific event
              const currentEventParticipation =
                myParticipationsResponse?.data?.find(
                  (p: { eventId: string; user?: UserData }) =>
                    p.eventId === eventId,
                );

              // Log the entire participation object to debug structure
              //   console.log(
              //     "Full participation object:",
              //     JSON.stringify(currentEventParticipation, null, 2),
              //   );

              // Try different ways to access user data
              if (currentEventParticipation?.user) {
                setUserData(currentEventParticipation.user);
                // console.log(
                //   "User data from participation.user:",
                //   currentEventParticipation.user,
                // );
              } else if (
                currentEventParticipation &&
                "user" in currentEventParticipation
              ) {
                const userData = (
                  currentEventParticipation as Record<string, unknown>
                ).user as UserData;
                if (userData) setUserData(userData);
              } else if (myParticipationsResponse?.data[0]?.user) {
                // Fallback to first user if found
                setUserData(myParticipationsResponse?.data[0].user);
              } else {
                console.log(
                  "No user data found in participation, full object:",
                );
              }
            }
          } catch (userError) {
            console.log("Error fetching participations:", userError);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (eventId) {
      fetchData();
    }
  }, [eventId, urlUserName, urlUserId]);

  const handleDownload = async () => {
    try {
      if (!ticketRef.current) {
        toast.error("Ticket not ready. Please try again.");
        return;
      }

      const dataUrl = await toPng(ticketRef.current, {
        cacheBust: true,
        pixelRatio: 3, // 3× for sharp, high-res output
        backgroundColor: "#1a1714",
        style: {
          // Ensure bottom absolute section is fully visible
          paddingBottom: "80px",
        },
      });

      const link = document.createElement("a");
      link.download = `${eventData?.title || "ticket"}-ticket.png`;
      link.href = dataUrl;
      link.click();

      toast.success("Ticket downloaded successfully!");
    } catch (err) {
      console.error("Download error:", err);
      toast.error("Failed to download ticket. Please try again.");
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "Date TBA";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#121212] text-[#F7F1E3]">
        <div className="text-xl">Loading your ticket...</div>
      </main>
    );
  }

  // Show error state if missing critical data
  if (!eventId) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#121212]">
        <div className="text-center text-[#F7F1E3]">
          <p className="text-xl mb-4">No event found - missing event ID</p>
          <Link href="/">
            <button className="text-[#C8B273] underline">Go Home</button>
          </Link>
        </div>
      </main>
    );
  }

  if (!eventData) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#121212]">
        <div className="text-center text-[#F7F1E3]">
          <p className="text-xl mb-4">Could not load event details</p>
          <Link href="/">
            <button className="text-[#C8B273] underline">Go Home</button>
          </Link>
        </div>
      </main>
    );
  }

  // Use placeholder name if user data not available
  const guestName = userData?.name || "Distinguished Guest";

  return (
    <main className="min-h-screen py-10 px-6 flex flex-col items-center justify-center relative overflow-hidden art-deco-bg">
      <div className="absolute inset-0 glow-aura pointer-events-none"></div>

      {/* Header */}
      <div className="mb-8 text-center max-w-lg relative z-10">
        <h1 className="font-headline text-4xl text-[#c8b273] font-bold tracking-tight mb-4 italic">
          The Royal Invitation
        </h1>
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-8 bg-[#c8b273]/30"></div>
          <p className="text-[#c8b273]/60 font-body text-[10px] tracking-[0.4em] uppercase">
            Exclusively Handcrafted for You
          </p>
          <div className="h-px w-8 bg-[#c8b273]/30"></div>
        </div>
      </div>

      {/* Warning */}
      <div className="mb-8 relative z-10 bg-[#c8b273]/10 border border-[#c8b273]/40 px-6 py-3 flex items-center gap-3 animate-pulse">
        <IconAlertTriangle className="text-[#c8b273] text-sm" />
        <p className="text-[#c8b273] font-label text-[10px] uppercase tracking-widest font-bold">
          Download the pass now, otherwise you will lose the pass once you leave
          this page!
        </p>
      </div>

      {/* Ticket Card */}
      <div className="relative w-full max-w-sm group z-10 mb-8">
        <div className="absolute -inset-2 bg-[#c8b273]/10 rounded-[2rem] blur-3xl group-hover:bg-[#c8b273]/20 transition-all duration-1000"></div>

        <div
          ref={ticketRef}
          className="relative bg-[#1a1714] rounded-2xl overflow-hidden flex flex-col items-center ornament-border shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] ticket-notch min-h-160"
        >
          <div className="absolute inset-0 pass-texture opacity-20 pointer-events-none"></div>

          {/* Top */}
          <div className="mt-8 flex flex-col items-center">
            {/* <IconSparkles className="text-[#c8b273] text-4xl mb-3" /> */}
            <Image src={logo} alt="Festiko Logo" width={100} height={100} />
            <div className="text-[#c8b273]/60 font-headline text-[8px] tracking-[0.6em] uppercase">
              Private Access
            </div>
          </div>

          {/* Title */}
          <div className="text-center mt-10 px-8">
            <h2 className="font-headline text-[#c8b273] text-3xl font-bold tracking-tighter mb-1">
              {eventData.title}
            </h2>
            <div className="w-32 h-0.5 bg-linear-to-r from-transparent via-[#C8B273]/40 to-transparent mx-auto"></div>
          </div>

          {/* User Name */}
          <div className="text-center mt-8 mb-8">
            <p className="text-[#c8b273]/50 font-label text-[10px] uppercase tracking-[0.4em] mb-3">
              Distinguished Guest
            </p>
            <h3 className="font-headline text-white text-3xl font-light tracking-wide italic -mt-2">
              {guestName}
            </h3>
          </div>

          {/* Details */}
          <div className="w-full px-10 grid grid-cols-1 gap-6 mb-12">
            <div className="flex items-center justify-between border-b border-[#c8b273]/10 pb-4">
              <div>
                <p className="text-[#c8b273]/40 font-label text-[8px] uppercase tracking-widest">
                  Date of Event
                </p>
                <p className="text-[#c8b273] font-headline font-medium text-sm">
                  {formatDate(eventData.date)}
                </p>
              </div>
              <IconCalendarMonth className="text-[#c8b273]/30 text-lg" />
            </div>

            <div className="flex items-center justify-between border-b border-[#c8b273]/10 pb-4">
              <div>
                <p className="text-[#c8b273]/40 font-label text-[8px] uppercase tracking-widest">
                  Event Start&apos;s At
                </p>
                <p className="text-[#c8b273] font-headline font-medium text-sm">
                  {format(
                    parse(eventData.time, "HH:mm", new Date()),
                    "hh:mm a",
                  )}
                </p>
              </div>
              <IconClock className="text-[#c8b273]/30 text-lg" />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#c8b273]/40 font-label text-[8px] uppercase tracking-widest">
                  Venue
                </p>
                <p className="text-[#c8b273] font-headline font-medium text-sm">
                  {eventData.venue}
                </p>
              </div>
              <IconBuildingCastle className="text-[#c8b273]/30 text-lg" />
            </div>
          </div>

          {/* Bottom */}
          <div className="absolute -bottom-4 w-full py-8 bg-black/40 flex flex-col items-center">
            <div className="flex items-center gap-4 mb-3">
              <div className="h-px w-6 bg-[#c8b273]/20"></div>
              <IconCrown className="text-[#c8b273] text-xl" />
              <div className="h-px w-6 bg-[#c8b273]/20"></div>
            </div>
            <p className="text-[#c8b273]/80 font-headline text-[10px] italic tracking-wider text-center px-12 leading-relaxed">
              &apos;Where Every Occasion Becomes A Masterpiece&apos;
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-6 relative z-10">
        <button
          onClick={handleDownload}
          className="bg-[#c8b273] text-[#1a1714] px-10 py-4 rounded-none font-label font-bold text-[10px] uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-[#dcc584] transition-all border border-[#c8b273] cursor-pointer"
        >
          <IconDownload className="text-sm" />
          Download
        </button>

        <Link href="/">
          <button className="bg-transparent border border-[#c8b273]/30 text-[#c8b273] px-10 py-4 rounded-none font-label font-bold text-[10px] uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-[#c8b273]/5 transition-all cursor-pointer">
            <IconHome className="text-sm" />
            Home
          </button>
        </Link>
      </div>
    </main>
  );
};

export default TicketContent;
