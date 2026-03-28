import {
  IconFilter,
  IconDotsVertical,
  IconEdit,
  IconUser,
  IconTrash,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";

const users = [
  {
    name: "Alexander Sterling",
    id: "#FK-9210",
    email: "a.sterling@curated.com",
    date: "Oct 12, 2023",
    role: "Premium",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHzEtzxrYJEv8riucwv7iO2y_x2hHfkhtObki-ex3AchCMLtIHJxxEe3YHoK9EtYVJyVVb28Q1nPOJWfjskb2DtseO5wPYp6oeWbIQEVYDbUhZmpyyCqp9ovXm3E9rPlOxMsytvzvb0gO0fnMx2QvYBiY4BX8TeggyNTKMuP9tISwE5R30BrydLjYi2era9_JHm4O1BeR0lxIkqKmD-UVRQdtleFKuebCwt5TOBIlzKBLuXyyO-GUH3RVgv5aEPknQxQBPZyxcmZeh",
  },
  {
    name: "Julianne Vane",
    id: "#FK-8842",
    email: "j.vane@lifestyle.io",
    date: "Nov 05, 2023",
    role: "Member",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB63KKp8QhMJCEtRvPhkBK08O50H55rdEo_in8kqqWa4F6o4flpu_c4RkZc9v7YLRbskH7z75-e_8qLc0blmC1c3XxCykoLU5zJQncRxFPndBwDMIwgb31oTPd0iwe80Vr090j9PIg5e8nIQhn9tECe-m4hivrx8k9ni2nOCZ-0fXBQ-BaL3UfxgXNJSfe8sAp8I2RIbzmvOrSgttw3yaTRjdXKr4IXKUVL2QapwA_tA7aaRWhBbAuSHiZt9dzx7YN70HiJfvrTeySg",
  },
  {
    name: "Marcus Dupont",
    id: "#FK-7721",
    email: "m.dupont@vanguard.fr",
    date: "Dec 18, 2023",
    role: "Premium",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQNkvkLN5mbHD740blY1EDvMHANairqHleOqGJhUucsdhee57-MvZ5enJ_N0kV26qepzQRKglEVOX4Mz2tHL9o41udn4AMI1FEHg83iAdz1NbhlrCkmcBjoO8y71V8-Sytvf6diBwyqzVI1Vv7lZEIpr-JZv2pVt1idNRkTSjNiQJW8N3CusCZw-GKEI_sTxDIFm0HMKibiaEwnxaX6NJS7RtgIWwUxlSJoRSD0os5lqLAH23ylivdhxwwbLA9PkHHmvD2wJji6UAi",
  },
  {
    name: "Elena Rossi",
    id: "#FK-6612",
    email: "e.rossi@milan.it",
    date: "Jan 02, 2024",
    role: "Member",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwm4MhLNPpj_ovUtl-n_QzE9J3-krq4FEoqqCtiqZ87iF_cJ6cGt3K-uybDX6PvWpzSdBT6LKOpFZhM1gx_OdnLWGz-RspyMZ-M3gCW6hMp_Ug8zpBmr_K-UUjZ5GRd7qnFmemsid-6gnbJM_BnpF6_pZMpnJRqt0boOL0B0k4-SrlsViRirm5KdycNO1eV3at4phLxXQx38t99ZCm9zB4udr0XbIQhZWshmm_4YSzs66WFMhTsi902HxpketedcpXwhWSuu17Bb1R",
  },
  {
    name: "Sebastian Thorne",
    id: "#FK-5509",
    email: "s.thorne@royal.co.uk",
    date: "Feb 14, 2024",
    role: "Premium",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA19JffdFUeeBXcNPNa2bFQZ58scWfkwlHoKIi6W-gKK_JnVteZltm60K53go5TmxpSjvnHYBSuLDTT63KZKQKhguH4AoxlNzyAFJDpJAmLQSnQCxNikgwcMTilEFHvckZvW9jeW2MTZqvyf7VLaC90ciMnf9hI-NjVq7pOQck9vJM4-Tsgi1H8WYyHL6bTVy5jVGx7Z0eUVtafqquoXzOWH1krH1gB1-xKALgQ-UH6CkFoBNfhmU5slzct7P2rpqJU1l5Cn7kbA8aw",
  },
];

const UserManagement = () => {
  return (
    <div className="lg:ml-64 bg-[#2f2a24] ">
      <main className="md:p-10 p-6 lg:pl-20 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-end">
          <div>
            <h2 className="font-headline font-bold text-4xl text-[#fcf2e8] tracking-tight mb-2">
              All Users
            </h2>
            <p className="text-[#fcf2e8]/70 font-body">
              Manage and monitor all users on the platform.
            </p>
          </div>
        </div>

        {/* Search + Filter */}
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Name, Email..."
            className="bg-[#353029] w-5/6 px-4 py-2.5 rounded text-sm text-[#fcf2e8] border border-[#C8B273]/10 focus:outline-none"
          />

          <div className="relative group/filter">
            <button className="bg-[#353029] px-6 py-2.5 rounded text-sm font-semibold text-[#fcf2e8] flex items-center gap-2 hover:bg-[#3d3831] transition-colors border border-[#C8B273]/10 cursor-pointer">
              <IconFilter className="text-sm" />
              Filters
            </button>

            {/* Filter Dropdown */}
            <div className="absolute right-0 top-10 w-40 bg-[#1f1b15] shadow-2xl rounded-lg py-2 z-10 hidden group-hover/filter:block border border-[#C8B273]/20">
              <button className="w-full text-left px-4 py-2 text-xs font-medium hover:bg-[#353029] text-[#fcf2e8] cursor-pointer">
                ADMIN
              </button>
              <button className="w-full text-left px-4 py-2 text-xs font-medium hover:bg-[#353029] text-[#fcf2e8] cursor-pointer">
                USER
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-[#353029] rounded-xl overflow-hidden shadow-2xl border border-[#C8B273]/5">
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
                  <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C8B273]/80">
                    Tier Role
                  </th>
                  <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C8B273]/80 text-right">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[#C8B273]/10">
                {users.map((user, i) => (
                  <tr
                    key={i}
                    className="hover:bg-[#2F2A24]/30 transition-colors"
                  >
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            className="w-full h-full object-cover"
                            src={user.img}
                          />
                        </div>
                        <div>
                          <p className="font-headline font-bold text-[#fcf2e8]">
                            {user.name}
                          </p>
                          <p className="text-[10px] text-[#fcf2e8]/40 uppercase tracking-widest">
                            ID: {user.id}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-8 py-6 text-sm text-[#fcf2e8]/70 font-body">
                      {user.email}
                    </td>

                    <td className="px-8 py-6 text-sm text-[#fcf2e8]/70 font-body">
                      {user.date}
                    </td>

                    <td className="px-8 py-6">
                      <span
                        className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          user.role === "Premium"
                            ? "bg-[#C8B273]/20 text-[#C8B273]"
                            : "bg-[#4b463a] text-[#CEC6B5]"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>

                    {/* ACTION DROPDOWN */}
                    <td className="px-8 py-6 text-right">
                      <div className="relative inline-block group/menu">
                        {/* Invisible hover bridge */}
                        <div className="absolute right-0 top-0 h-16 w-16"></div>

                        <button className="text-[#fcf2e8]/50 hover:text-[#C8B273] transition-colors relative z-10">
                          <IconDotsVertical />
                        </button>

                        {/* ACTION DROPDOWN */}
                        <div className="absolute right-0 -top-8 w-48 bg-[#1f1b15] shadow-2xl rounded-lg py-2 z-20 hidden group-hover/menu:block border border-[#C8B273]/20">
                          <button className="w-full text-left px-4 py-2 text-xs font-medium hover:bg-[#353029] flex items-center gap-2 text-[#fcf2e8]">
                            <IconEdit className="text-sm" />
                            Edit Details
                          </button>
                          <button className="w-full text-left px-4 py-2 text-xs font-medium hover:bg-[#353029] flex items-center gap-2 text-[#fcf2e8]">
                            <IconUser className="text-sm" />
                            View Profile
                          </button>
                          <div className="border-t border-[#C8B273]/10 my-1"></div>
                          <button className="w-full text-left px-4 py-2 text-xs font-bold text-red-400 hover:bg-red-400/5 flex items-center gap-2">
                            <IconTrash className="text-sm" />
                            Delete Account
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-8 py-6 bg-[#2F2A24]/50 flex md:flex-row flex-col space-y-4 justify-between items-center border-t border-[#C8B273]/10">
            <p className="text-xs text-[#fcf2e8]/50 font-medium">
              Showing 1 to 5 of 1,240 users
            </p>
            <div className="flex gap-2">
              <button className="w-8 h-8 flex items-center justify-center rounded border border-[#C8B273]/20 text-[#fcf2e8]/50 hover:bg-[#3d3831] transition-colors">
                <IconChevronLeft className="text-lg" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded bg-[#C8B273] text-[#1f1b15] text-xs font-bold cursor-pointer">
                1
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-[#C8B273]/20 text-[#fcf2e8]/50 hover:bg-[#3d3831] transition-colors text-xs font-bold cursor-pointer">
                2
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-[#C8B273]/20 text-[#fcf2e8]/50 hover:bg-[#3d3831] transition-colors text-xs font-bold cursor-pointer">
                3
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-[#C8B273]/20 text-[#fcf2e8]/50 hover:bg-[#3d3831] transition-colors">
                <IconChevronRight className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserManagement;
