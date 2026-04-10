import { Participants } from "@/types/participation/participation.types";
import { IconSearch, IconFilter, IconUserPlus } from "@tabler/icons-react";
import Image from "next/image";
import default_user from "@/assets/default_user.jpg";
import ActionButtonClient from "./client/actionButtonClient";
import { Meta } from "@/types/meta.types";
import Pagination from "@/components/shared/pagination";
import EmptyState from "@/components/shared/emptyState";
import { Spinner } from "@/components/ui/spinner";

// ManageParticipants Component
const ManageParticipants = ({
  participants,
  meta,
  setPage,
  loading,
  setSearch,
}: {
  participants: Participants[] | null;
  meta: Meta | null;
  setPage: (page: number) => void;
  loading: boolean;
  setSearch: (value: string) => void;
}) => {
  return (
    <>
      <main className="lg:ml-72 flex-1 h-screen overflow-y-auto bg-[#2F2A24] p-10 lg:p-12">
        {/* Header */}
        <header className="mb-2">
          <h2 className="text-2xl font-bold uppercase tracking-[0.2em] text-[#C8B273]/60 block">
            Manage Participants{" "}
          </h2>
        </header>

        {/* Action Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div className="relative w-full">
            <IconSearch
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A39580]"
              size={20}
            />
            <input
              onChange={(e) => {
                setPage(1);
                setSearch(e.target.value);
              }}
              className="w-full pl-12 pr-4 py-3 bg-[#3A342D] border border-white/5 rounded-lg focus:ring-1 focus:ring-[#C8B273]/30 focus:bg-[#453F36] transition-all duration-300 font-body text-sm text-[#F7F1E3] outline-none placeholder:text-[#A39580]/50"
              placeholder="Search participants by name or ID"
              type="text"
            />
          </div>

          {/* <div className="flex gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-[#3A342D] text-[#F7F1E3] border border-white/5 rounded-lg font-label font-semibold text-xs uppercase tracking-widest hover:bg-[#453F36] transition-all">
              <IconFilter size={18} />
              Filter
            </button>

            <button className="flex items-center gap-2 px-6 py-3 bg-[#C8B273] text-[#2F2A24] rounded-lg font-label font-bold text-xs uppercase tracking-widest shadow-lg hover:brightness-110 active:scale-95 transition-all">
              <IconUserPlus size={18} />
              Invite Guest
            </button>
          </div> */}
        </div>

        {participants && participants.length > 0 ? (
          <>
            {/* Table */}
            <div className="bg-[#3A342D] rounded-xl overflow-auto border border-white/5">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/5 bg-[#3A342D]/50">
                    <th className="px-8 py-5 font-label text-[10px] uppercase tracking-[0.2em] text-[#C8B273] font-bold">
                      Participant
                    </th>
                    <th className="px-8 py-5 font-label text-[10px] uppercase tracking-[0.2em] text-[#C8B273] font-bold overflow-x-auto">
                      User ID
                    </th>
                    <th className="px-8 py-5 font-label text-[10px] uppercase tracking-[0.2em] text-[#C8B273] font-bold">
                      Status
                    </th>
                    <th className="px-8 py-5 font-label text-[10px] uppercase tracking-[0.2em] text-[#C8B273] font-bold text-right">
                      Actions
                    </th>
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
                    participants?.map((p, i) => (
                      <tr
                        key={i}
                        className="hover:bg-white/5 transition-colors group"
                      >
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-[#453F36] overflow-hidden border border-white/10 shrink-0">
                              <Image
                                alt="user avatar"
                                src={p.user.profile_image || default_user}
                                width={100}
                                height={100}
                                unoptimized={true}
                                className="w-auto h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                              />
                            </div>
                            <div>
                              <p className="font-headline font-bold text-[#F7F1E3]">
                                {p.user.name}
                              </p>
                              <p className="font-body text-xs text-[#A39580]">
                                {p.user.email}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-8 py-5">
                          <span className="font-body text-sm font-medium text-[#A39580] overflow-x-auto">
                            {p.id}
                          </span>
                        </td>

                        <td className="px-8 py-5">
                          {p.status === "APPROVED" && (
                            <span className="px-3 py-1 rounded-full bg-[#C8B273]/10 text-[#C8B273] font-label text-[9px] font-black uppercase tracking-widest border border-[#C8B273]/60">
                              {p.status}
                            </span>
                          )}
                          {p.status === "PENDING" && (
                            <span className="px-3 py-1 rounded-full bg-[#453F36] text-[#A39580] font-label text-[9px] font-black uppercase tracking-widest border border-[#A39580]/60">
                              {p.status}
                            </span>
                          )}
                          {p.status === "REJECTED" && (
                            <span className="px-3 py-1 rounded-full bg-rose-900 text-white/80 font-label text-[9px] font-black uppercase tracking-widest border border-white/60">
                              {p.status}
                            </span>
                          )}
                          {p.status === "BANNED" && (
                            <span className="px-3 py-1 rounded-full bg-red-800 text-white/80 font-label text-[9px] font-black uppercase tracking-widest border border-white/60">
                              {p.status}
                            </span>
                          )}
                        </td>

                        {/* ACTION DROPDOWN */}
                        <td className="px-8 py-6 text-right">
                          {/* ACTION button */}
                          <ActionButtonClient status={p.status} id={p.id} />
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {meta && <Pagination meta={meta} onPageChange={setPage} />}
          </>
        ) : (
          <EmptyState />
        )}
      </main>
    </>
  );
};

export default ManageParticipants;
