"use client";
import Loader from "@/components/shared/loader";
import { Event } from "@/types/event/event.types";
import { IconCalendar, IconUser, IconError404 } from "@tabler/icons-react";
import { format } from "date-fns";
import Image from "next/image";
import FilterActionClient from "./client/filterActionClient";
import { Meta } from "@/types/meta.types";
import Pagination from "@/components/shared/pagination";
import Link from "next/link";

const Events = ({
  allEvents,
  loading,
  setSearch,
  setCategory,
  setPage,
  setPriceSort,
  meta,
}: {
  allEvents: Event[] | null;
  meta: Meta | null;
  loading: boolean;
  setCategory: (category: string) => void;
  setSearch: (value: string) => void;
  setPage: (page: number) => void;
  setPriceSort: (value: string) => void;
}) => {
  const filtered = allEvents?.filter((f) => new Date(f.date) > new Date());

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className="pt-20 grow bg-[#2F2A24] text-[#F5F1E9]">
          {/* HERO */}
          <section className="relative pt-20 px-6 md:px-12 overflow-visible">
            {/* glow */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-125 h-125 bg-[#C8B273]/20 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-75 h-75 bg-[#C8B273]/10 blur-[80px] rounded-full"></div>
            </div>

            <div className="max-w-5xl mx-auto text-center overflow-visible">
              <h1 className="serif-heading text-4xl md:text-6xl text-[#C8B273] mb-12 font-bold italic tracking-tight">
                Find Your Next Elite Experience
              </h1>

              {/* SEARCH */}
                <FilterActionClient
                  setSearch={setSearch}
                  setPage={setPage}
                  setCategory={setCategory}
                  setPriceSort={setPriceSort}
                />
            </div>
          </section>

          {/* EVENTS */}
          <section className="py-16 px-6 md:px-12 max-w-360 mx-auto">
            {/* header */}
            <div className="flex flex-col justify-between items-center mb-12 gap-6">
              <h2 className="serif-heading text-4xl">Upcoming Events</h2>
              <span className="text-xs uppercase tracking-[0.3em] text-[#C8B273] font-bold -mt-3">
                Curated Selection
              </span>
            </div>

            {filtered && filtered?.length > 0 ? (
              <>
                {/* GRID */}
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                  {filtered.map((event) => (
                    <div
                      key={event.id}
                      className="group glass-card rounded-md overflow-hidden flex flex-col hover:-translate-y-1 transition-all"
                    >
                      <div className="relative h-44 overflow-hidden">
                        <Image
                          alt={"event image"}
                          src={event.image}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                          fill
                          unoptimized
                        />

                        <div className="absolute top-2 left-2 bg-[#dac17c] px-3 py-1 font-semibold rounded-sm text-white border border-[#C8B273]/20 text-xs">
                          {event.category}
                        </div>
                        <div className="absolute bottom-2 right-2 bg-[#3D372F]/30 backdrop-blur px-2 py-1 rounded-sm font-bold text-[#C8B273] border border-[#C8B273]/20 text-sm">
                          <span className="font-extrabold">৳</span>
                          {event.fee}
                        </div>
                      </div>

                      <div className="p-4 flex flex-col grow">
                        <div className="flex items-center gap-2 text-[#C8B273]/60 text-xs uppercase mb-3">
                          <IconCalendar size={14} />
                          {format(new Date(event.date), "dd MMMM yyyy")} ●{" "}
                          {format(new Date(`${event.date}`), "hh:mm a")}
                        </div>

                        <h3 className="serif-heading text-2xl mb-4 group-hover:text-[#C8B273] transition-colors">
                          {event.title}
                        </h3>

                        <div className="flex items-center gap-2 mb-5">
                          <div className="w-6 h-6 rounded-md bg-[#C8B273]/10 flex items-center justify-center border border-[#C8B273]/20">
                            {event.organizer.profile_image ? (
                              <Image
                                alt={"organizer avatar"}
                                src={event.organizer.profile_image}
                                className="w-full h-full object-cover rounded-md p-0.5 "
                                width={30}
                                height={30}
                                unoptimized
                              />
                            ) : (
                              <IconUser size={16} className="text-[#C8B273]" />
                            )}
                          </div>
                          <span className="text-sm text-on-[#2F2A24]/60 -mt-1">
                            By{" "}
                            <span className="text-on-[#2F2A24]">
                              {event.organizer.name}
                            </span>
                          </span>
                        </div>

                        <Link
                          href={`/events/event-details/${event.id}`}
                          className="mt-auto text-center btn-gold py-2.5 text-sm rounded-lg font-bold cursor-pointer"
                        >
                          {loading ? "Loading..." : "View Details"}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                {/* PAGINATION */}
                {meta && <Pagination meta={meta} onPageChange={setPage} />}
              </>
            ) : (
              <div className="flex flex-col items-center font-label uppercase tracking-widest text-[#6e5d27]">
                <IconError404 size={120} />
              </div>
            )}
          </section>
        </main>
      )}
    </>
  );
};

export default Events;
