import { Event } from "@/types/event/event.types";
import { IconError404 } from "@tabler/icons-react";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const FreePublicEventsSection = ({
  allEvents,
}: {
  allEvents: Event[] | null;
}) => {
  const filtered = allEvents?.filter(
    (f) => f.category === "PUBLIC",
  );
  return (
    <>
      <section className="py-24 px-12 bg-[#ffffff]">
        <div className="max-w-360 mx-auto">
          <div className="mb-16 lg:ml-5">
            <h2 className="font-headline text-4xl text-[#1f1b15] font-semibold mb-2">
              Public Events
            </h2>
            <p className="font-body text-[#4b463a] opacity-70">
              Experience elegance without boundaries.
            </p>
          </div>

          {filtered && filtered?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {filtered?.map((event) => (
                <div
                  key={event.id}
                  className="group flex flex-col h-full bg-[#fff8f4]/80 p-5"
                >
                  <div className="relative overflow-hidden aspect-video mb-6 rounded-sm shadow-md">
                    <Image
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      src={event.image}
                      width={100}
                      height={100}
                      unoptimized
                      alt={event.title}
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
                  </div>

                  <div className="flex flex-col grow">
                    <p className="font-label text-[10px] uppercase tracking-widest text-[#6e5d27] mb-2">
                      {format(new Date(event.date), "dd MMMM")} • {event.venue}
                    </p>
                    <h3 className="font-headline text-2xl font-bold text-[#1f1b15] mb-3 italic">
                      {event.title}
                    </h3>
                    <p className="font-body text-sm text-[#4b463a] leading-relaxed opacity-80 mb-6 line-clamp-2">
                      {event.description}
                    </p>
                    <div className="mt-auto">
                      <Link
                        href={`/events/event-details/${event.id}`}
                        className="block w-full p-4 text-center border border-[#6e5d27] text-[#6e5d27] font-label text-xs uppercase tracking-widest font-bold hover:bg-[#6e5d27] hover:text-[#ffffff] transition-all duration-300"
                      >
                        See Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
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

export default FreePublicEventsSection;
