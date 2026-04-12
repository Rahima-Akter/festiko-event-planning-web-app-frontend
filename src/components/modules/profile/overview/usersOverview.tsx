import Loader from "@/components/shared/loader";
import { IUserStats } from "@/types/stats/stats.types";
import {
  IconUsers,
  IconCashMinus,
  IconCalendarBolt,
  IconCalendar,
  IconBasketDollar,
  IconUsersGroup,
} from "@tabler/icons-react";
import { format } from "date-fns";
import Image from "next/image";
import UserOverviewChart from "./client/usersChart";

const UsersOverview = ({
  userStats,
  loading,
}: {
  userStats: IUserStats | null;
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
              <div className="absolute top-3 right-0 p-4 opacity-70 group-hover:opacity-20 transition-opacity">
                <IconCalendarBolt className="text-6xl text-[#ecd79e]" />
              </div>
              <p className="font-label text-[10px] uppercase tracking-[0.2em] text-[#CEC6B5] font-bold mb-4">
                Total Events Created
              </p>
              <h3 className="text-4xl font-serif font-bold text-[#f9efe5]">
                {userStats?.totalCreatedEvents}
              </h3>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-[#25211C] p-8 rounded-xl border border-[#C8B273]/10 relative overflow-hidden group shadow-sm">
              <div className="absolute top-3 right-0 p-4 opacity-70 group-hover:opacity-20 transition-opacity">
                <IconUsers className="text-6xl text-[#ecd79e]" />
              </div>
              <p className="font-label text-[10px] uppercase tracking-[0.2em] text-[#CEC6B5] font-bold mb-4">
                Total Events Joined
              </p>
              <h3 className="text-4xl font-serif font-bold text-[#f9efe5]">
                {userStats?.totalJoinedEvents}
              </h3>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-[#3A342D] p-8 rounded-xl border border-[#C8B273]/20 relative overflow-hidden group shadow-lg">
              <div className="absolute top-3 right-0 p-4 opacity-70 group-hover:opacity-20 transition-opacity">
                <IconCashMinus className="text-6xl text-[#ecd79e]" />
              </div>
              <p className="font-label text-[10px] uppercase tracking-[0.2em] text-[#f9efe5]/50 font-bold mb-4">
                Total Amount Spent
              </p>
              <h3 className="text-4xl font-serif font-bold text-[#C8B273]">
                ${userStats?.totalPaidAmount}
              </h3>
            </div>

            {/* Stat Card 4 */}
            <div className="bg-[#25211C] p-8 rounded-xl border border-[#C8B273]/20 relative overflow-hidden group shadow-lg space-x-3">
              <div className="absolute top-3 right-0 p-4 opacity-70 group-hover:opacity-20 transition-opacity">
                <IconBasketDollar className="text-6xl text-[#ecd79e]" />
              </div>
              <p className="font-label text-[10px] uppercase tracking-[0.2em] text-[#f9efe5]/50 font-bold mb-4">
                Total Invitation Accepted
              </p>
              <h3 className="text-4xl font-serif font-bold text-[#C8B273]">
                {userStats?.totalInvitationsAccepted}
              </h3>
            </div>

            {/* Stat Card 5 */}
            <div className="bg-[#3A342D] p-8 rounded-xl border border-[#C8B273]/20 relative overflow-hidden group shadow-lg space-x-3">
              <div className="absolute top-3 right-0 p-4 opacity-70 group-hover:opacity-20 transition-opacity">
                <IconUsersGroup className="text-6xl text-[#ecd79e]" />
              </div>
              <p className="font-label text-[10px] uppercase tracking-[0.2em] text-[#f9efe5]/50 font-bold mb-4">
                Total Invitation Recieved
              </p>
              <h3 className="text-4xl font-serif font-bold text-[#C8B273]">
                {userStats?.totalInvitationsReceived}
              </h3>
            </div>
          </section>

          {/* chart */}
          <UserOverviewChart userStats={userStats} />
        </main>
      )}
    </>
  );
};

export default UsersOverview;
