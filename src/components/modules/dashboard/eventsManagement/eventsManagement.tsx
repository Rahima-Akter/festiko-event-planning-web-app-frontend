import EmptyState from "@/components/shared/emptyState";
import Pagination from "@/components/shared/pagination";
import { Event } from "@/types/event/event.types";
import { Meta } from "@/types/meta.types";
import { IconDotsVertical, IconEye } from "@tabler/icons-react";
import { format, parse } from "date-fns";
import Image from "next/image";
import FilterEventsButtonClient from "./client/filterEventsButtonClient";
import { Spinner } from "@/components/ui/spinner";
import Link from "next/link";
import DeleteEventButtonClient from "../../profile/myEvents/client/deleteEventButton";

const EventsManagement = ({
  allEvents: events,
  loading,
  setSearch,
  setPage,
  meta,
  setCategory,
}: {
  allEvents: Event[] | null;
  meta: Meta | null;
  loading: boolean;
  setSearch: (value: string) => void;
  setPage: (page: number) => void;
  setCategory: (value: string) => void;
}) => {
  return (
    <div className="lg:ml-64 min-h-screen bg-[#2F2A24] p-8 lg:p-10 lg:pl-16">
      {/* Header */}
      <span className="text-lg font-bold uppercase tracking-[0.2em] text-[#C8B273]/60 mb-4 block">
        All Events Management
      </span>

      {/* Search + Filters */}
      <section className="mb-5 flex justify-between items-center gap-4">
        <input
          onChange={(e) => {
            setPage(1);
            setSearch(e.target.value);
          }}
          className="w-full px-4 py-4 bg-[#25211B] rounded-xl text-[#F9EFE5]"
          placeholder="Search events by title, date, time, venue, organizer name..."
        />

        {/* filter button */}
        <div className="relative z-9999">
          <FilterEventsButtonClient
            setPage={setPage}
            setCategory={setCategory}
          />
        </div>
      </section>

      {/* Table */}
      {events && events?.length > 0 ? (
        <>
          <div className="bg-[#25211B] rounded-2xl border border-[#C8B273]/5 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-[#1F1B15] text-[#C8B273] text-xs uppercase">
                  <tr>
                    <th className="px-8 py-7">Event</th>
                    <th className="px-2 py-7">Organizer</th>
                    <th className="px-2 py-7">Date</th>
                    <th className="px-2 py-7">Category</th>
                    <th className="px-2 py-7">Fee</th>
                    <th className="px-8 py-7 text-right">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-white/5">
                  {loading ? (
                    <tr>
                      <td colSpan={6} className="py-10 text-center">
                        <div className="flex justify-center items-center text-white">
                          <Spinner />
                        </div>
                      </td>
                    </tr>
                  ) : (
                    events?.map((event, i) => (
                      <tr
                        key={i}
                        className="hover:bg-[#2F2A24] transition-colors"
                      >
                        {/* Event */}
                        <td className="md:px-4 py-6 px-6 md:pr-0 pr-16">
                          <div className="flex items-center gap-4">
                            <Image
                              alt={event.title}
                              src={event.image}
                              width={100}
                              height={100}
                              unoptimized
                              className="h-14 w-14 rounded-lg object-cover"
                            />
                            <div>
                              <p className="font-bold text-[#F9EFE5] lg:whitespace-nowrap">
                                {event.title.substring(0, 20) + "..."}
                              </p>
                              <p className="text-xs text-[#F9EFE5]/40">
                                {event.id}
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* Organizer */}
                        <td className="md:px-2 px-5 text-[#F9EFE5]/80 md:whitespace-nowrap">
                          {event.organizer.name}
                        </td>

                        {/* Date */}
                        <td className="px-2 lg:pr-0 pr-4 text-[#F9EFE5]/80">
                          <div className="text-[#F9EFE5] whitespace-nowrap text-sm">
                            {format(new Date(event.date), "MMM dd, yyyy")}
                          </div>
                          <div className="text-xs text-[#F9EFE5]/40">
                            {format(
                              parse(event.time, "HH:mm", new Date()),
                              "hh:mm a",
                            )}
                          </div>
                        </td>

                        {/* Category */}
                        <td className="px-2">
                          <span className="text-xs px-3 py-1 rounded-full bg-[#C8B273]/10 text-[#C8B273]">
                            {event.category}
                          </span>
                        </td>

                        {/* Fee */}
                        <td className="px-2 text-[#C8B273] font-bold">
                          ${event.fee}
                        </td>

                        {/* Actions */}
                        <td className="px-8 py-6 text-right">
                          <div className="relative inline-block group">
                            <button className="p-2 hover:bg-[#3A352E] rounded-lg">
                              <IconDotsVertical className="text-white" />
                            </button>

                            <div className="absolute right-0 -top-4 mt-2 w-44 bg-[#1F1B15] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                              <Link
                                href={`/events/event-details/${event.id}`}
                                className="flex items-center gap-2 px-4 py-2 w-full text-white hover:bg-[#2F2A24] text-sm"
                              >
                                <IconEye size={16} />
                                View
                              </Link>
                              {/* delete button */}
                              <div className="w-full [&>button]:w-full [&>button]:justify-start [&>button]:border-none [&>button]:rounded-none [&>button]:px-4 [&>button]:py-2">
                                <DeleteEventButtonClient id={event.id} />
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
          {/* Pagination */}
          {meta && <Pagination meta={meta} onPageChange={setPage} />}
        </>
      ) : (
        <EmptyState />
      )}
    </div>
  );
};

export default EventsManagement;
