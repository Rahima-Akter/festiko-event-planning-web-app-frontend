import EmptyState from "@/components/shared/emptyState";
import Pagination from "@/components/shared/pagination";
import { Spinner } from "@/components/ui/spinner";
import { UserRoles } from "@/roles/roles";
import { User } from "@/types/auth/auth.types";
import { Meta } from "@/types/meta.types";
import { format } from "date-fns";
import Image from "next/image";
import ActionButtonsClient from "./client/actionButtonsClient";
import FilterButtonClient from "./client/filterButtonClient";

const SoftDeletedUsersManagement = ({
  allUsers: users,
  meta,
  loading,
  setPage,
  setSearch,
  setRoleFilter,
}: {
  allUsers: User[] | null;
  meta: Meta | null;
  loading: boolean;
  setPage: (page: number) => void;
  setSearch: (search: string) => void;
  setRoleFilter: (value: string) => void;
}) => {
  return (
    <div className="lg:ml-64 bg-[#2f2a24] min-h-screen">
      <main className="md:p-10 p-6 lg:pl-20 space-y-8">
        {/* Header */}
        <span className="text-lg font-bold uppercase tracking-[0.2em] text-[#C8B273]/60 mb-4 block">
          All User Management
        </span>

        {/* Search + Filter */}
        <div className="flex items-center gap-4">
          <input
            onChange={(e) => {
              setPage(1);
              setSearch(e.target.value);
            }}
            type="text"
            placeholder="Name, Email..."
            className="bg-[#353029] w-5/6 px-4 py-3 rounded text-sm text-[#fcf2e8] border border-[#C8B273]/10 focus:outline-none"
          />

          {/* filter button */}
          <div className="relative z-9999">
            <FilterButtonClient
              setPage={setPage}
              setRoleFilter={setRoleFilter}
            />
          </div>
        </div>

        {users && users.length > 0 ? (
          <>
            {/* Table */}
            <div className="bg-[#353029] rounded-xl overflow-hidden shadow-xl border border-[#C8B273]/5">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#2F2A24]/50">
                      <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C8B273]/80">
                        User Identity
                      </th>
                      <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C8B273]/80">
                        Email Address
                      </th>
                      <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C8B273]/80">
                        Join Date
                      </th>
                      <th className="px-2 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C8B273]/80">
                        Role
                      </th>
                      <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C8B273]/80 text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-[#C8B273]/10">
                    {loading ? (
                      <tr>
                        <td colSpan={6} className="py-10 text-center">
                          <div className="flex justify-center items-center text-white">
                            <Spinner />
                          </div>
                        </td>
                      </tr>
                    ) : (
                      users?.map((user, i) => (
                        <tr
                          key={i}
                          className="hover:bg-[#2F2A24]/30 transition-colors"
                        >
                          <td className="px-8 py-6">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0">
                                <Image
                                  className="w-full h-full object-cover"
                                  src={user.profile_image}
                                  alt={user.name}
                                  width={100}
                                  height={100}
                                  unoptimized
                                />
                              </div>
                              <div>
                                <p className="font-headline font-bold text-[#fcf2e8]">
                                  {user.name}
                                </p>
                                <p className="text-[10px] text-[#fcf2e8]/40 uppercase tracking-widest whitespace-nowrap">
                                  ID: {user.id}
                                </p>
                              </div>
                            </div>
                          </td>

                          <td className="px-8 py-6 text-sm text-[#fcf2e8]/70 font-body whitespace-nowrap">
                            {user.email}
                          </td>

                          <td className="px-8 py-6 text-sm text-[#fcf2e8]/70 font-body whitespace-nowrap">
                            {format(new Date(user.createdAt), "dd MMM yyyy")}
                          </td>

                          <td className="px-2 py-6">
                            <span
                              className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                                user.role === UserRoles.ADMIN
                                  ? "bg-[#C8B273]/20 text-[#C8B273]"
                                  : "bg-[#4b463a] text-[#CEC6B5]"
                              }`}
                            >
                              {user.role}
                            </span>
                          </td>

                          {/* ACTION DROPDOWN */}
                          <td className="px-10 py-6 text-right">
                            <ActionButtonsClient id={user.id} />
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            {/* Pagination */}
            <div className="-mt-8">
              {meta && <Pagination meta={meta} onPageChange={setPage} />}
            </div>
          </>
        ) : (
          <EmptyState />
        )}
      </main>
    </div>
  );
};

export default SoftDeletedUsersManagement;
