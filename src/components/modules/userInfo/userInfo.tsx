import Link from "next/link";
import {
  IconCalendarEvent,
  IconLocation,
  IconEdit,
  IconSparkles2,
  IconStarFilled,
} from "@tabler/icons-react";
import { PublicProfile } from "@/types/auth/publicProfile.types";
import Image from "next/image";
import { format } from "date-fns";

const UserInfo = ({ profile }: { profile: PublicProfile | null }) => {
  // console.log(profile);
  const latestEvent = profile?.events
    ?.slice()
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )[0];

  const topEvents = profile?.events
    ?.slice()
    .sort((a, b) => b.reviews?.rating - a.reviews?.rating)
    .slice(0, 3);

  return (
    <div className="flex min-h-screen bg-[#2F2A24] text-[#F7F1E3] font-body">
      <main className="pt-28 px-12 pb-20 w-full mx-auto">
        {/* Expanded Profile Header Section */}
        <div className="col-span-12">
          <h1 className="font-headline text-6xl font-bold tracking-tight text-[#F7F1E3] mb-6">
            Alexander <span className="text-[#C8B273] italic">Vance</span>
          </h1>
          <p className="text-[#A39580] max-w-2xl font-body text-lg leading-relaxed mb-8">
            An architect of atmospheres, Alexander Vance specializes in curating
            exclusive social intersections where art, gastronomy, and culture
            converge. With a focus on boutique gatherings and elite networking
            events, his portfolio is a testament to the art of the
            unforgettable.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-12 gap-5 mb-16">
          {/* Next Premiere*/}
          <div className="col-span-12 lg:col-span-8 relative overflow-hidden h-90 border border-[#ffffff]/5">
            <Image
              src={latestEvent?.image || ""}
              className="w-full h-full object-cover brightness-75 transition-transform duration-[2s] hover:scale-105"
              unoptimized
              width={100}
              height={100}
              alt={latestEvent?.title ?? "Event Image"}
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#2F2A24]/95 via-[#2F2A24]/60 to-transparent flex items-center px-12">
              <div className="max-w-md">
                <span className="font-label text-[10px] uppercase tracking-[0.3em] text-[#C8B273] font-bold mb-4 block">
                  Next Premiere
                </span>
                <h3 className="text-4xl font-headline text-[#ffffff] font-bold mb-3">
                  {latestEvent?.title}
                </h3>
                <div className="flex flex-col gap-3 text-[#b4a692] font-label text-xs uppercase tracking-widest">
                  <span className="flex items-center gap-2">
                    <IconCalendarEvent size={16} className="text-[#C8B273]" />{" "}
                    {profile?.createdAt
                      ? format(
                          new Date(latestEvent?.date || ""),
                          "MMM dd, yyyy",
                        )
                      : "Loading..."}
                  </span>
                  <span className="flex items-center gap-2">
                    <IconLocation size={16} className="text-[#C8B273]" />
                    {latestEvent?.venue}
                  </span>
                </div>
                <Link
                  href={`/events/event-details/${latestEvent?.id}`}
                  className="inline-block mt-4 px-8 py-3 bg-[#C8B273] text-[#ffffff] font-label text-[10px] uppercase tracking-widest font-bold hover:opacity-90 transition-opacity cursor-pointer"
                >
                  View Event
                </Link>
              </div>
            </div>
          </div>

          {/* Profile Summary / Stat Cards */}
          <div className="col-span-12 lg:col-span-4 grid grid-cols-2 gap-5">
            <div className="bg-[#6e5d27] p-8 flex flex-col justify-between border border-[#ffffff]/5">
              <IconCalendarEvent className="text-[#ffffff]" />
              <div>
                <span className="text-4xl font-headline font-bold block text-[#ffffff]">
                  {profile?.eventCount}
                </span>
                <span className="font-label text-[10px] uppercase tracking-widest text-[#ffffff]/70">
                  Events Hosted
                </span>
              </div>
            </div>
            <div className="bg-[#3a342d] p-8 flex flex-col border border-[#ffffff]/5">
              <IconSparkles2 className="text-[#c8b273] mb-8" />
              <div>
                <span className="text-4xl font-headline font-bold block text-[#ffffff]">
                  {profile?.averageRating}
                </span>
                <span className="font-label text-[10px] uppercase tracking-widest text-[#ffffff]">
                  Rating
                </span>
              </div>
            </div>
            <div className="col-span-2 bg-[#3a342d] p-8 flex items-center justify-between border border-[#ffffff]/5">
              <div>
                <span className="font-label text-[10px] uppercase tracking-widest text-[#ada384] font-bold block mb-2">
                  Member Since
                </span>
                <span className="text-2xl font-headline font-bold text-[#ffffff]">
                  {profile?.createdAt
                    ? format(new Date(profile.createdAt), "MMM dd, yyyy")
                    : "Loading..."}
                </span>
              </div>
              <IconEdit className="text-[#ffffff] hover:text-[#6e5d27] transition-colors" />
            </div>
          </div>
        </div>

        {/* Recent Reviews */}
        <section className="mb-20">
          <h2 className="font-headline text-3xl font-bold mb-4">
            Recent Appraisals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Review Card */}
            {profile?.reviews?.slice(0, 2)?.map((review, idx) => (
              <div
                key={idx}
                className="bg-[#3a342d] p-8 border border-[#ffffff]/5 flex gap-6"
              >
                <div className="w-12 h-12 rounded-md bg-[#ebe1d7] overflow-hidden shrink-0">
                  <Image
                    className="w-full h-full object-cover"
                    width={100}
                    height={100}
                    unoptimized
                    src={review?.user?.profile_image || ""}
                    alt={review?.user?.name || "user avatar"}
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-headline font-bold">
                      {review?.user?.name}
                    </span>
                    <span className="text-[#a89145] text-[10px] flex gap-1 items-center mt-1">
                      {[...Array(review?.rating ?? 0)].map((_, idx) => (
                        <IconStarFilled
                          key={idx}
                          className="text-[#c8b273]"
                          size={11}
                        />
                      ))}
                    </span>
                  </div>
                  <p className="text-[#baa97d] font-body italic text-sm leading-relaxed">
                    &apos;{review?.comment}&apos;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Spotlight Section */}
        <section>
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-headline text-3xl font-bold">
              Portfolio Highlights
            </h2>
            <div className="h-px grow mx-12 bg-[#ffffff]/10"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Portfolio Card */}
            {topEvents?.map((event) => (
              <div key={event?.id} className="space-y-4 group">
                <div className="aspect-4/5 bg-[#f6ece3] overflow-hidden border border-[#ffffff]/5 grayscale hover:grayscale-0 transition-all duration-700">
                  <Image
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    src={event?.image || ""}
                    unoptimized
                    width={100}
                    height={100}
                    alt={event?.title || "Event Image"}
                  />
                </div>
                <h4 className="font-headline text-xl font-bold group-hover:text-[#ebc752] transition-colors">
                  {event?.title}
                </h4>
                <p className="font-body text-[#b3a380] text-sm">
                  {event?.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default UserInfo;
