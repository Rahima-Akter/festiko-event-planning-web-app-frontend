import { MyParticipation } from "@/types/participation/myParticipation.types";
import {
  IconSearch,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const MyParticipations = ({
  myParticipations: events,
}: {
  myParticipations: MyParticipation[];
}) => {
  return (
    <main className="lg:ml-64 min-h-screen bg-[#2F2A24] px-4 sm:px-6 lg:pr-12 lg:pl-20 py-10 lg:py-10">
      {/* Header */}
      <header className="mb-8">
        <div className="max-w-2xl mb-6">
          <h2 className="text-lg font-bold uppercase tracking-[0.2em] text-[#C8B273]/60 mb-2 block">
            My <span className="text-[#C8B273]">Participations</span>
          </h2>
        </div>

        {/* Search BELOW text */}
        <div className="relative group w-full">
          <IconSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C8B273]/60" />
          <input
            type="text"
            placeholder="Search events..."
            className="pl-12 pr-6 py-3 sm:py-4 bg-[#3F3931] rounded-lg w-full focus:ring-1 focus:ring-[#6e5d27]/30 focus:bg-[#38322B] transition-all text-[#C8B273] placeholder:text-[#C8B273]/50 text-sm"
          />
        </div>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
        {events.map((event, i) => (
          <div
            key={i}
            className="group relative bg-[#38322B] overflow-hidden rounded-lg transition-all duration-500 hover:-translate-y-2 border border-[#C8B273]/10 flex flex-col"
          >
            {/* Image */}
            <div className="aspect-video overflow-hidden relative">
              <Image
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={event.event.image}
                alt={event.event.title}
                width={500}
                height={500}
                unoptimized={true}
              />

              {/* badge spacing */}
              <div className="absolute top-3 right-4 px-3 pb-1 bg-[#38322B]/80 backdrop-blur-md rounded-full">
                <span className="text-[10px] font-bold text-[#c8b273] uppercase tracking-wider">
                  {event.status}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <div className="mb-3">
                <p className="text-[10px] font-bold text-[#c8b273] uppercase tracking-widest mb-1">
                  {event.event.category} Event
                </p>
                <h3 className="text-lg font-bold text-[#C8B273] leading-tight">
                  {event.event.title}
                </h3>
              </div>

              <div className="space-y-2 mb-6 text-xs text-[#C8B273]/70">
                <div className="flex items-center gap-3">
                  <span>📅</span>
                  <span>
                    {format(new Date(event.event.date), "MMM dd, yyyy")}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span>⏰</span>
                  <span>
                    {format(
                      new Date(`1980-01-01T${event.event.time}`),
                      "hh:mm a",
                    )}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span>📍</span>
                  <span>{event.event.venue}</span>
                </div>
              </div>

              {/* PUSH BUTTONS DOWN */}
              <div className="flex gap-2 mt-auto">
                {/* <button className="flex-1 py-2 bg-[#4B463A] text-[#C8B273] font-bold text-[9px] uppercase tracking-widest hover:bg-[#C8B273]/10 transition-colors rounded">
                  Contact Host
                </button> */}
                <Link
                  href=""
                  className="flex-1 text-center py-2 bg-linear-to-r from-[#6e5d27] to-[#c8b273] hover:from-[#c8b273] hover:to-[#6e5d27] transition-colors duration-500 text-white font-bold text-[9px] uppercase tracking-widest rounded cursor-pointer"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <footer className="mt-5 flex flex-col md:flex-row items-center justify-between border-t border-[#C8B273]/10 pt-10 gap-6">
        <p className="text-sm text-[#C8B273]/40">
          Showing 6 of 24 curated participations
        </p>

        <div className="flex items-center gap-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#3F3931] text-[#C8B273] hover:bg-[#4B463A]">
            <IconChevronLeft size={18} />
          </button>

          <div className="flex gap-1">
            <button className="w-10 h-10 rounded-lg bg-[#6e5d27] text-white font-bold text-sm">
              1
            </button>
            <button className="w-10 h-10 rounded-lg bg-[#3F3931] text-[#C8B273]">
              2
            </button>
            <button className="w-10 h-10 rounded-lg bg-[#3F3931] text-[#C8B273]">
              3
            </button>
            <button className="w-10 h-10 rounded-lg bg-[#3F3931] text-[#C8B273]">
              4
            </button>
          </div>

          <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#3F3931] text-[#C8B273] hover:bg-[#4B463A]">
            <IconChevronRight size={18} />
          </button>
        </div>
      </footer>
    </main>
  );
};

export default MyParticipations;
