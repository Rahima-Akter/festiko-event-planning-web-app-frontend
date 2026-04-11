import {
  IconCalendar,
  IconMapPin,
  IconUsers,
  IconSearch,
} from "@tabler/icons-react";
import CreateEventButtonClient from "./client/createEventButton";
import InviteToEventButtonClient from "./client/inviteToEventButton";
import { Event } from "@/types/event/event.types";
import Image from "next/image";
import { format } from "date-fns";
import EditEventButtonClient from "./client/editEventButton";
import DeleteEventButtonClient from "./client/deleteEventButton";
import Link from "next/link";
import { Meta } from "@/types/meta.types";
import Pagination from "@/components/shared/pagination";
import Loader from "@/components/shared/loader";
import EmptyState from "@/components/shared/emptyState";
import { Spinner } from "@/components/ui/spinner";

const MyEvents = ({
  allEvents,
  meta,
  setPage,
  setSearch,
  setCategory,
  loading,
}: {
  allEvents: Event[] | null;
  meta: Meta | null;
  setPage: (page: number) => void;
  setSearch: (search: string) => void;
  setCategory: (category: string) => void;
  loading: boolean;
}) => {
  return (
    <>
      <main className="lg:ml-72 md:p-12 p-8 min-h-screen flex flex-col gap-12 bg-[#2f2a24] relative">
        {/* Header Section */}
        <header className="flex md:flex-row flex-col justify-between items-center space-y-4">
          <h1 className="text-xl font-bold uppercase tracking-[0.2em] text-[#C8B273]/60 block">
            My Created Events
          </h1>
          <CreateEventButtonClient
            setPage={setPage}
            setCategory={setCategory}
          />
        </header>

        {/* Search Input */}
        <div className="relative w-full -mt-8">
          <IconSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#d2ccc0]" />
          <input
            onChange={(e) => {
              setPage(1);
              setSearch(e.target.value);
            }}
            type="text"
            placeholder="Title, Date, Time, Venue"
            className="w-full bg-[#3a342d] border-none rounded-xl py-4 pl-12 pr-4 text-[#ebe1d7] placeholder:text-[#d2ccc0]/50 focus:ring-1 focus:ring-[#eec96d] transition-all"
          />
        </div>

        {allEvents && allEvents.length > 0 ? (
          <>
            {/* Event Cards */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 -mb-20">
              {loading ? (
                <div className="col-span-3 text-white place-items-center py-10">
                  <Spinner />
                </div>
              ) : (
                allEvents.map((event) => (
                  <div
                    key={event.id}
                    className="group bg-[#3a342d] flex flex-col overflow-hidden transition-all duration-500 hover:shadow-2xl rounded-xl border border-[#4b463a]/10"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={
                          event.image ||
                          "https://static.vecteezy.com/system/resources/thumbnails/073/184/595/small_2x/unavailable-image-icon-with-prohibition-sign-representing-restricted-content-or-picture-not-found-vector.jpg"
                        }
                        alt={event.title}
                        width={100}
                        height={100}
                        unoptimized
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-3 left-3">
                        <span
                          className={`${event.isPublic ? "bg-[#eec96d] text-[#231b00]" : "bg-[rgba(240,75,100,0.8)] text-white"} text-[9px] px-2 py-0.5 tracking-widest uppercase rounded-full font-bold`}
                        >
                          {event.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-4 flex flex-col gap-3">
                      <div>
                        <h3 className="text-xl font-bold text-[#ebe1d7] mb-4">
                          {event.title}
                        </h3>
                        <div className="flex flex-col gap-2 text-[#d2ccc0] text-xs">
                          <span className="flex items-center gap-2">
                            <IconCalendar size={16} />
                            {format(
                              new Date(
                                `${event.date.split("T")[0]}T${event.time}`,
                              ),
                              "MMMM d, yyyy, h:mm a",
                            )}
                          </span>
                          <span className="flex items-center gap-2">
                            <IconMapPin size={16} />
                            {event.venue}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 pt-2">
                        <div className="grid grid-cols-2 gap-2">
                          <InviteToEventButtonClient eventId={event.id} />
                          <Link
                            href={`/profile/my-events/participants/${event.id}`}
                            style={{
                              background:
                                "linear-gradient(135deg, #eec96d 0%, #ffdf96 100%)",
                              color: "#231b00",
                            }}
                            className="py-2 font-semibold rounded-lg text-[11px] hover:brightness-110 transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
                          >
                            <IconUsers size={16} />
                            Manage
                          </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <EditEventButtonClient event={event} />
                          <DeleteEventButtonClient id={event.id} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </section>

            {/* Pagination */}
            {meta && <Pagination meta={meta} onPageChange={setPage} />}
          </>
        ) : (
          <div className="flex justify-center items-center -mt-5">
            <EmptyState />
          </div>
        )}
      </main>
    </>
  );
};

export default MyEvents;
