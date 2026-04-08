import {
  IconCalendar,
  IconMapPin,
  IconMoodPuzzled,
  IconShield,
  IconStar,
  IconTicket,
  IconUsers,
} from "@tabler/icons-react";
import Image from "next/image";
import { format } from "date-fns";
import { User } from "@/types/auth/auth.types";
import Link from "next/link";
import { Event } from "@/types/event/event.types";
import AddReviewButtonClient from "./client/addReviewButton";
import Loader from "@/components/shared/loader";
import JoinEventClientButton from "./client/joinEventClientButton";

const EventDetails = ({
  event,
  user,
  loading,
}: {
  event: Event | null;
  user: User | null;
  loading: boolean;
}) => {
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {event && (
            <main className="bg-[#fff8f4]">
              <section className="relative w-full h-130 overflow-hidden bg-gray-900 flex items-center justify-center">
                <Image
                  src={event.image}
                  alt={event.title}
                  unoptimized
                  width={1440}
                  height={520}
                  priority
                  className="w-auto h-full object-contain"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>

                <div className="absolute  bottom-6 left-0 w-full p-12 md:p-20">
                  <div className="max-w-360 mx-auto">
                    <div className="inline-flex items-center px-4 py-1 bg-[#c8b273]/20 backdrop-blur-md border border-white/20 rounded-full mb-">
                      <span className="text-[#ffffff] font-label text-xs uppercase tracking-widest">
                        Exclusive Soirée
                      </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-headline font-bold text-[#ffffff] tracking-tight max-w-4xl leading-tight">
                      {event?.title}
                    </h1>
                  </div>
                </div>
              </section>

              {/* Content */}
              <div className="max-w-360 mx-auto px-12 py-16">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Left */}
                  <div className="grow lg:max-w-4xl">
                    <div className="flex flex-col md:flex-row gap-8 mb-12 items-start md:items-center">
                      <div className="flex items-center gap-4">
                        <div className="p-4 bg-[#fcf2e8] rounded-xl">
                          <IconCalendar className="text-[#6e5d27] text-3xl" />
                        </div>
                        <div>
                          <p className="font-label text-xs uppercase tracking-widest text-[#7d7668]">
                            Date & Time
                          </p>
                          <p className="font-headline font-semibold text-lg text-[#1f1b15]">
                            {format(
                              new Date(
                                `${event?.date.split("T")[0]}T${event?.time}`,
                              ),
                              "MMMM d, yyyy, h:mm a",
                            )}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="p-4 bg-[#fcf2e8] rounded-xl">
                          <IconMapPin className="text-[#6e5d27] text-3xl" />
                        </div>
                        <div>
                          <p className="font-label text-xs uppercase tracking-widest text-[#7d7668]">
                            Venue
                          </p>
                          <p className="font-headline font-semibold text-lg text-[#1f1b15]">
                            {event?.venue}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="">
                      <h2 className="font-headline text-3xl font-bold mb-8 text-[#1f1b15]">
                        About the Evening
                      </h2>

                      <p className="text-lg leading-relaxed text-[#4b463a] mb-6">
                        {event?.description}
                      </p>
                    </div>

                    {/* Controls */}
                    {user?.id === event?.organizerId && (
                      <div className="p-8 bg-[#f6ece3] rounded-2xl mb-16 flex flex-wrap gap-4 items-center">
                        <div className="grow">
                          <p className="font-headline font-bold text-xl text-[#1f1b15]">
                            Event Management
                          </p>
                          <p className="text-sm text-[#4b463a]">
                            You are viewing this as the organizer.
                          </p>
                        </div>

                        <Link
                          href={`/profile/my-events`}
                          className="px-6 py-3 bg-[#ffffff] text-[#6e5d27] font-label text-xs uppercase tracking-widest rounded-lg hover:bg-white transition-all"
                        >
                          Edit Events
                        </Link>

                        <Link
                          href={`/profile/my-events/participants/${event?.id}`}
                          className="px-6 py-3 bg-[#6e5d27] text-[#ffffff] font-label text-xs uppercase tracking-widest rounded-lg shadow-lg hover:opacity-90 transition-all"
                        >
                          Manage Participants
                        </Link>
                      </div>
                    )}

                    {/* Reviews */}
                    <div className="mt-20">
                      <h3 className="font-headline text-3xl font-bold mb-10 text-[#1f1b15]">
                        Guest Experiences
                      </h3>

                      <div className="space-y-8 mb-12">
                        <div className="bg-[#ffffff] p-8 rounded-xl">
                          {event?.reviews && event?.reviews?.length > 0 ? (
                            <>
                              <div className="flex justify-between mb-4">
                                <div className="flex items-center gap-3">
                                  <Image
                                    src={event?.organizer?.profile_image}
                                    className="w-8 h-8 rounded-md object-cover"
                                    alt={
                                      event?.organizer?.name ||
                                      "Organizer Image"
                                    }
                                    width={100}
                                    height={100}
                                    unoptimized
                                  />
                                  <div>
                                    <p className="font-semibold text-sm text-[#1f1b15]">
                                      {event?.organizer?.name}
                                    </p>
                                  </div>
                                </div>
                                {event?.reviews?.length > 0 && (
                                  <div className="flex flex-col gap-4">
                                    {event.reviews.map((review, idx) => (
                                      <div key={idx}>
                                        <div className="flex text-[#6e5d27]">
                                          {Array.from({
                                            length: review.rating,
                                          }).map((_, i) => (
                                            <IconStar
                                              key={i}
                                              size={15}
                                              className="text-sm fill-[#6e5d27]"
                                            />
                                          ))}
                                        </div>
                                        <p className="text-[#6e5d27]/50 text-xs flex justify-center">
                                          {format(
                                            new Date(review.createdAt),
                                            "MMMM d, yyyy",
                                          )}
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>

                              {event?.reviews?.length > 0 && (
                                <div className="flex">
                                  {event.reviews.map((review, idx) => (
                                    <p
                                      key={idx}
                                      className="text-[#6e5d27] font-normal text-sm leading-normal  "
                                    >
                                      {review.comment}
                                    </p>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <p className="text-2xl font-bold text-center text-[#4b463a] flex flex-row items-center justify-center gap-2">
                              No reviews yet.{" "}
                              <IconMoodPuzzled className="mt-1" />
                            </p>
                          )}
                        </div>
                      </div>
                      {/* Add Review Button */}
                      <AddReviewButtonClient eventId={event!.id} />
                    </div>
                  </div>

                  {/* Sidebar */}
                  <aside className="lg:w-1/4">
                    <div className="sticky top-32 space-y-8">
                      <div className="bg-[#ffffff] p-8 rounded-2xl border border-[#cec6b5]/20">
                        <div className="mb-8">
                          <p className="font-label text-xs uppercase tracking-widest text-[#7d7668] mb-2">
                            Admission Fee
                          </p>
                          <p className="text-4xl font-headline font-bold text-[#1f1b15] flex flex-row items-center">
                            <span className="font-extrabold text-3xl">৳</span>
                            {event?.fee}{" "}
                            <span className="text-lg font-normal text-[#7d7668]">
                              / person
                            </span>
                          </p>
                        </div>

                        <div className="space-y-4 mb-10">
                          <div className="flex items-center gap-3 text-sm text-[#4b463a]">
                            <IconUsers className="text-[#6e5d27]" />
                            <span>Capacity: {event?.capacity} Guests</span>
                          </div>

                          <div className="flex items-center gap-3 text-sm text-[#4b463a]">
                            <IconShield className="text-[#6e5d27]" />
                            <span>{event?.category} Event</span>
                          </div>

                          <div className="flex items-center gap-3 text-sm text-[#4b463a]">
                            <IconTicket className="text-[#6e5d27]" />
                            <span>Digital Pass Included</span>
                          </div>
                        </div>

                        {/* event join button */}
                        <JoinEventClientButton
                          fee={event!.fee}
                          eventId={event!.id}
                        />
                      </div>

                      <div className="bg-[#fcf2e8] p-8 rounded-2xl">
                        <p className="font-label text-xs uppercase tracking-widest text-[#7d7668] mb-6">
                          Organized by
                        </p>

                        <div className="flex items-center gap-2 mb-6">
                          <Image
                            src={event?.organizer?.profile_image || ""}
                            className="w-12 h-12 rounded-md object-cover"
                            alt={event?.organizer?.name || "Organizer Image"}
                            unoptimized
                            width={100}
                            height={100}
                          />
                          <div className="-mt-2">
                            <p className="font-headline font-bold text-lg text-[#1f1b15]">
                              {event?.organizer?.name}
                            </p>
                            <p className="text-xs text-[#7d7668] uppercase tracking-tight whitespace-nowrap">
                              Member Since:{" "}
                              {format(
                                new Date(event?.organizer?.createdAt || ""),
                                "yyyy",
                              )}
                            </p>
                          </div>
                        </div>

                        <p className="text-sm text-[#4b463a] mb-6 leading-relaxed">
                          {event?.organizer?.bio}
                        </p>

                        <Link
                          href={`/user-info/${event?.organizerId}`}
                          className="w-full flex items-center justify-center p-3 border border-[#6e5d27]/20 text-[#6e5d27] rounded-lg font-label text-xs uppercase tracking-widest hover:bg-white transition-all cursor-pointer"
                        >
                          View Profile
                        </Link>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </main>
          )}
        </>
      )}
    </>
  );
};

export default EventDetails;
