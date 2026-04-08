import Loader from "@/components/shared/loader";
import { IAdminStats } from "@/types/stats/stats.types";
import {
  IconUsers,
  IconCashMinus,
  IconCalendarBolt,
  IconCalendar,
  IconBasketDollar,
  IconUsersGroup,
  IconUsersMinus,
} from "@tabler/icons-react";
import { format } from "date-fns";
import Image from "next/image";
import OverviewChart from "./client/chart";

const Overview = ({
  adminStats,
  loading,
}: {
  adminStats: IAdminStats | null;
  loading: boolean;
}) => {
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className="lg:ml-72 flex-1 md:p-12 p-10 bg-[#2F2A24]">
          {/* Header Section */}
          <header className="mb-8 flex md:flex-row flex-col justify-between md:items-end space-y-6">
            <h2 className="md:text-3xl font-bold uppercase tracking-[0.2em] text-[#C8B273]/60 mb-4 block">
              Executive Overview
            </h2>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 bg-[#3A342D] px-4 py-2 rounded-lg border border-[#C8B273]/10">
                <IconCalendar className="text-[#C8B273]" />
                <span className="font-label text-xs uppercase tracking-widest text-[#CEC6B5]">
                  {format(new Date(), "MMMM dd, yyyy")}
                </span>
              </div>
            </div>
          </header>

          {/* Stats Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Stat Card 1 */}
            <div className="bg-[#3A342D] p-8 rounded-xl border border-[#C8B273]/10 relative overflow-hidden group shadow-sm">
              <div className="absolute top-0 right-0 p-4 opacity-70 group-hover:opacity-20 transition-opacity">
                <IconCalendarBolt className="text-6xl text-[#ecd79e]" />
              </div>
              <p className="font-label text-[10px] uppercase tracking-[0.2em] text-[#CEC6B5] font-bold mb-4">
                Total Events
              </p>
              <h3 className="text-4xl font-serif font-bold text-[#f9efe5]">
                {adminStats?.totalEvents}
              </h3>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-[#25211C] p-8 rounded-xl border border-[#C8B273]/10 relative overflow-hidden group shadow-sm">
              <div className="absolute top-0 right-0 p-4 opacity-70 group-hover:opacity-20 transition-opacity">
                <IconUsers className="text-6xl text-[#ecd79e]" />
              </div>
              <p className="font-label text-[10px] uppercase tracking-[0.2em] text-[#CEC6B5] font-bold mb-4">
                Total Users
              </p>
              <h3 className="text-4xl font-serif font-bold text-[#f9efe5]">
                {adminStats?.totalUsers}
              </h3>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-[#3A342D] p-8 rounded-xl border border-[#C8B273]/20 relative overflow-hidden group shadow-lg">
              <div className="absolute top-0 right-0 p-4 opacity-70 group-hover:opacity-20 transition-opacity">
                <IconCashMinus className="text-6xl text-[#ecd79e]" />
              </div>
              <p className="font-label text-[10px] uppercase tracking-[0.2em] text-[#f9efe5]/50 font-bold mb-4">
                Total Revenue
              </p>
              <h3 className="text-4xl font-serif font-bold text-[#C8B273]">
                ${adminStats?.totalRevenue}
              </h3>
            </div>

            {/* Stat Card 4 */}
            <div className="bg-[#25211C] p-8 rounded-xl border border-[#C8B273]/20 relative overflow-hidden group shadow-lg">
              <div className="absolute top-0 right-0 p-4 opacity-70 group-hover:opacity-20 transition-opacity">
                <IconBasketDollar className="text-6xl text-[#ecd79e]" />
              </div>
              <p className="font-label text-[10px] uppercase tracking-[0.2em] text-[#f9efe5]/50 font-bold mb-4">
                Total Paid Pariticipants
              </p>
              <h3 className="text-4xl font-serif font-bold text-[#C8B273]">
                {adminStats?.totalPaidParticipants}
              </h3>
            </div>

            {/* Stat Card 5 */}
            <div className="bg-[#3A342D] p-8 rounded-xl border border-[#C8B273]/20 relative overflow-hidden group shadow-lg">
              <div className="absolute top-0 right-0 p-4 opacity-70 group-hover:opacity-20 transition-opacity">
                <IconUsersGroup className="text-6xl text-[#ecd79e]" />
              </div>
              <p className="font-label text-[10px] uppercase tracking-[0.2em] text-[#f9efe5]/50 font-bold mb-4">
                Total Participants
              </p>
              <h3 className="text-4xl font-serif font-bold text-[#C8B273]">
                {adminStats?.totalParticipants}
              </h3>
            </div>

            {/* Stat Card 6 */}
            <div className="bg-[#25211C] p-8 rounded-xl border border-[#C8B273]/20 relative overflow-hidden group shadow-lg">
              <div className="absolute top-0 right-0 p-4 opacity-70 group-hover:opacity-20 transition-opacity">
                <IconUsersMinus className="text-6xl text-[#ecd79e]" />
              </div>
              <p className="font-label text-[10px] uppercase tracking-[0.2em] text-[#f9efe5]/50 font-bold mb-4">
                Total Soft Deleted Users
              </p>
              <h3 className="text-4xl font-serif font-bold text-[#C8B273]">
                {adminStats?.totalSoftDeletedUsers}
              </h3>
            </div>
          </section>

          {/* chart */}
          <OverviewChart adminStats={adminStats} />

          {/* Featured Spotlight Card */}
          <section className="mt-12">
            <div className="relative w-full h-80 rounded-2xl overflow-hidden group shadow-2xl border border-[#C8B273]/10">
              <Image
                alt="Luxury Event Backdrop"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk-zWKdGQeqZbhXbQoK0deOew8NcYqasNhdqFPrQWx3EQ23_9rxoc3oUR-_d8rmFliqUp8LZz7VMkqaDnG9ZvNbMxmwbd52x24aB08eWSrpMpD47_jEHK0v4KqjCLlDb_fBrnE3jGSZTWgIqfqtA522SK_7XQNtXMCZydsk6V6zuaQ9Vbuqn57r3J5sdC-PGDaRSs4w_a5jjstKz0laZXFcytMJP3ZSskkaRoekm4svb5T-1T-oL-7Y-36wXmPWLnqtSogGbd4YePH"
                unoptimized
                width={100}
                height={100}
              />
              <div className="absolute inset-0 bg-linear-to- from-[#25211C] via-[#25211C]/40 to-transparent"></div>
              <div className="absolute md:-bottom-3 -bottom-20 p-12 inset-x-0 flex justify-center">
                <div className="bg-[#25211C]/80 backdrop-blur-xl border border-white/10 p-8 rounded-xl max-w-2xl">
                  <div className="flex flex-col items-center text-center py-4">
                    <p className="text-2xl md:text-3xl font-serif italic text-white leading-relaxed max-w-md">
                      &apos;True elegance is the harmony of curated detail and
                      effortless execution.&apos;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default Overview;
