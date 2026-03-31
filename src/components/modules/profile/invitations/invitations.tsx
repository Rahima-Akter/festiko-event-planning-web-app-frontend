import { Invitation } from "@/types/invitation/invitation.types";
import {
  IconMapPin,
  IconCreditCard,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import { format } from "date-fns";
import Image from "next/image";
import DeclineButtonClient from "./client/declineButtonClient";

// Invitations Component
const Invitations = ({ invitations }: { invitations: Invitation[] | null }) => {
  return (
    <>
      <main className="lg:ml-72 flex-1 pt-16 px-12 pb-5 bg-[#2F2A24]">
        {/* Header */}
        <header className="mb-16 max-w-5xl mx-auto">
          <h1 className="font-headline text-6xl font-bold tracking-tight text-[#F7F1E3] mb-6">
            Pending <span className="text-[#C8B273] italic">Invitations</span>
          </h1>
          <p className="font-body text-[#A39580] text-lg leading-relaxed max-w-2xl">
            You have 3 curated experiences awaiting your response.
          </p>
          <div className="w-24 h-0.5 bg-[#C8B273] mt-8"></div>
        </header>

        {/* Cards */}
        <div className="max-w-5xl mx-auto space-y-8">
          {invitations?.map(
            (item, i) =>
              item?.status === "PENDING" &&
              new Date(item.event.date) > new Date() && (
                <div
                  key={i}
                  className="group relative flex flex-col md:flex-row bg-[#3A342D] border border-white/5 overflow-hidden transition-all duration-500 hover:border-[#C8B273]/30"
                >
                  <div className="md:w-100 h-64 md:h-auto relative overflow-hidden">
                    <Image
                      src={item?.event?.image}
                      width={100}
                      height={100}
                      alt={item.event.title}
                      unoptimized={true}
                      className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute top-0 left-0 px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-bold bg-[#C8B273] text-[#2F2A24]">
                      {item.event.category}
                    </div>
                  </div>

                  <div className="flex-1 p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="font-headline text-3xl font-bold text-[#F7F1E3] mb-2">
                          {item.event.title}
                        </h3>
                        <div className="text-right">
                          <p className="font-headline text-2xl font-bold text-[#F7F1E3]">
                            {format(new Date(item.event.date), "MMM d yyyy")}
                          </p>
                          <p className="text-[10px] uppercase tracking-widest text-[#A39580] font-medium">
                            {format(
                              new Date(`1970-01-01T${item.event.time}`),
                              "h:mm a",
                            )}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-8 mb-8 text-[#A39580]">
                        <div className="flex items-center gap-2">
                          <IconMapPin size={18} className="text-[#C8B273]" />
                          <span className="text-sm font-medium">
                            {item.event.venue}
                          </span>
                        </div>
                        {item.event.fee && (
                          <div className="flex items-center gap-2">
                            <IconCreditCard
                              size={18}
                              className="text-[#C8B273]"
                            />
                            <span className="text-sm font-medium">
                              {item.event.fee}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-4 mb-5 p-4 bg-[#453F36]/30 rounded border border-white/5">
                        <Image
                          src={item.event.organizer.profile_image}
                          width={100}
                          height={100}
                          alt={item.event.organizer.name}
                          unoptimized={true}
                          className="w-10 h-10 rounded-full object-cover grayscale"
                        />
                        <p className="text-sm italic text-[#A39580]">
                          Invited by{" "}
                          <span className="font-bold text-[#F7F1E3]">
                            {item.event.organizer.name}
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <button className="bg-[#C8B273] text-[#2F2A24] px-8 py-4 text-[10px] uppercase tracking-widest font-bold hover:opacity-90 transition-all flex items-center gap-2">
                        {item.event.fee > 0 && <IconCreditCard size={16} />}
                        {item.event.fee > 0
                          ? "Pay & Accept"
                          : "Accept Invitation"}
                      </button>
                      {/* declined button */}
                      <DeclineButtonClient id={item.id} />
                    </div>
                  </div>
                </div>
              ),
          )}
        </div>

        {/* Pagination */}
        <div className="mt-16 max-w-5xl mx-auto flex items-center justify-between py-8 border-t border-white/10">
          <button className="text-[#A39580] hover:text-[#C8B273] flex items-center gap-2 transition-colors">
            <IconChevronLeft size={16} />
            <span className="text-[10px] font-bold uppercase tracking-widest">
              Previous
            </span>
          </button>

          <div className="flex items-center gap-4">
            <button className="w-8 h-8 flex items-center justify-center bg-[#C8B273] text-[#2F2A24] text-xs font-bold rounded-sm">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-[#A39580] hover:text-[#C8B273] text-xs font-bold transition-colors">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-[#A39580] hover:text-[#C8B273] text-xs font-bold transition-colors">
              3
            </button>
          </div>

          <button className="text-[#A39580] hover:text-[#C8B273] flex items-center gap-2 transition-colors text-right">
            <span className="text-[10px] font-bold uppercase tracking-widest">
              Next
            </span>
            <IconChevronRight size={16} />
          </button>
        </div>

        {/* Footer */}
        {/* <div className="mt-20 text-center opacity-30 text-[#F7F1E3]">
          <IconSparkles size={32} className="mb-4 block text-[#C8B273] mx-auto" />
          <p className="font-label uppercase tracking-[0.3em] text-[10px]">
            End of pending curated experiences
          </p>
        </div> */}
      </main>
    </>
  );
};

export default Invitations;
