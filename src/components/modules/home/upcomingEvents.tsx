import Link from "next/link";
import { IconArrowRight, IconError404 } from "@tabler/icons-react";
import { Event } from "@/types/event/event.types";
import Image from "next/image";
import { format } from "date-fns";
import FilterButtonsClient from "./client/filterButtonsClient";
import { Spinner } from "@/components/ui/spinner";

const UpcomingEventsSection = ({
  allEvents,
  setCategory,
  category,
  loading,
}: {
  allEvents: Event[] | null;
  setCategory: (category: string) => void;
  category: string;
  loading: boolean;
}) => {
  return (
    <>
      <section className="py-24 px-12 bg-[#fff8f4]">
        <div className="max-w-360 mx-auto">
          <div className="flex flex-col lg:flex-row justify-between lg:items-end items-start gap-8 mb-16">
            <div>
              <h2 className="font-headline text-4xl text-[#1f1b15] font-semibold mb-2">
                Upcoming Events
              </h2>
              <p className="font-body text-[#4b463a] opacity-70">
                Curated gatherings for the elite community.
              </p>
            </div>
            {/* filter buttons */}
            <FilterButtonsClient
              setCategory={setCategory}
              category={category}
            />
          </div>

          {allEvents && allEvents?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {loading ? (
                <div className="col-span-4 text-black place-items-center">
                  <Spinner />
                </div>
              ) : (
                <>
                  {/* Card */}
                  {allEvents?.slice(0, 4).map((event) => (
                    <div key={event.id} className="group">
                      <div className="aspect-19/20 bg-[#fcf2e8] mb-6 overflow-hidden relative">
                        <Image
                          alt={event.image || "event image"}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          src={event.image}
                          width={100}
                          height={100}
                          unoptimized
                        />
                        <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur text-[#6e5d27] text-[10px] font-bold uppercase tracking-widest">
                          {event.category} Event
                        </div>
                      </div>
                      <div>
                        <p className="font-label text-[10px] uppercase tracking-widest text-[#6e5d27] mb-2">
                          {format(new Date(event.date), "dd MMMM")} •{" "}
                          {event.venue}
                        </p>
                        <h3 className="font-headline text-2xl text-[#1f1b15] font-semibold mb-3">
                          {event.title}
                        </h3>
                        <p className="font-body text-sm text-[#4b463a] leading-relaxed mb-6">
                          {event.description.substring(0, 100) + "........."}
                        </p>
                        <Link
                          href={`/events/event-details/${event.id}`}
                          className="font-label text-xs font-bold uppercase tracking-widest text-[#6e5d27] flex items-center gap-2 group-hover:gap-4 transition-all"
                        >
                          View Event <IconArrowRight className="text-sm" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center font-label uppercase tracking-widest text-[#6e5d27]">
              <IconError404 size={120} />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default UpcomingEventsSection;
