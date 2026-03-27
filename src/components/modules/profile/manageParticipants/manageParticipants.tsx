import { IconSearch, IconFilter, IconUserPlus, IconEdit, IconUserMinus, IconChevronLeft, IconChevronRight, IconMailForward, IconX } from "@tabler/icons-react";

// ManageParticipants Component
const ManageParticipants = () => {

  const participants = [
    {
      name: "Julianna Moore",
      email: "julianna.m@concierge.com",
      id: "#USR-88291",
      status: "Joined",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKQm3c-_dAyUVC8RfVVr5MRGtyoZ37tWkRNhJmynS1f7PzB7Fj8F6PsELzqveYNzrs-9cScV6F9ouQI7-PmOUXOjkTmcFQs6tUPvVhwjqyWO8fQy8RGYNbopXdA5rD_ifRUQUHoYhb-7L4ZWn8KOS35EvVklb3HUacpzEhAdjmDzD2sRS7kDfjwC_rv46gCkMc0kHCXWO55Y6cSc_oXb-pCXyi5XbUIakbWPvvmkZco8XkiNSvQ-lQAO4USxJaeunC_xkHwgLWLqWC"
    },
    {
      name: "Marcus Thorne",
      email: "m.thorne@design.co",
      id: "#USR-44120",
      status: "Pending",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7CSAmGpJ4-GGRNxCKt_JPBIobEuuqxqyHRaNlg3fAMMATqw2w4Tt2J7ah1PpaJle51kKHD_BUahCRItGW6YI5z5MUvoLXUs039G-vSRMoBSwQY8sbXPloIMMzWfN4_ZRjCeq9UyvVt1E1iYatTlTv24FjNB9JZ7ihFL6mq_3idRRKq-s9aqUvi3LKQi_djd56qcHMMAOLlCI7O0GsYRkeT3Y5fZ6C4cvyVDzKA0iIrLthB-IyH3VX2uzJszLy13_LIdDf4E-X1Wx8"
    },
    {
      name: "Elena Rossi",
      email: "e.rossi@vogue.it",
      id: "#USR-00293",
      status: "Invited",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-5BuuN6D13jntNhAvHUWkD-qU0Ymfn8Uv5eGKQVam7xwp85K-wCDs1q03E_93rsB0WyWgC3GJiAbcN019YHcR2yL78HYlQjhXd-U7nXxCW4wIZlCzYXsLXAP8dJkTkgBbdnxKmvzMpuXNnZ7vUr9-BlI1WNZmaxmYswC8SUgr9EeqzljfwJbKSQpa48tg-ZKIFbPmdJiig5R58MHsPrctjADHzXSmWVB-xuuXhN571O2jbNuGc8RpZHI-kQcjwpGotLkVA1Lne50T"
    },
    {
      name: "David Chen",
      email: "d.chen@global.com",
      id: "#USR-11928",
      status: "Joined",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcXvBkU4TJLA4V90Xnb_ll0yovZHqsYcCH_ly7AVPVcEGipLBSjK94H9nt71YakPhLSFECmxwEXU_SY-AJ9xMOKAPNAt6j4UInqK0oIyrWDhiuu8MojaIRO0g60TDqkJI7fwZvQUiRXF6e-AjP921be9KgeMbn_dgsy-LL9lsGZSpkcTxj3sxChhCtKdYkY5rbXco8AYqr8-igIBIPmo2njroam282tRcqrhAqJB5dy6ldGSH4G1A2wvjb3SXCFLjGmWtNqY3CcLMx"
    }
  ];

  return (
    <>
      <main className="lg:ml-72 flex-1 h-screen overflow-y-auto bg-[#2F2A24] p-10 lg:p-12">
        
        {/* Header */}
        <header className="mb-12">
          <h2 className="font-headline text-4xl font-bold text-[#F7F1E3] tracking-tight mb-2">
            Manage Participants: <span className="text-[#C8B273] italic">The Gilded Gala 2024</span>
          </h2>
          <p className="font-body text-[#A39580] text-lg leading-relaxed">
            Review and manage your curated guest list.
          </p>
        </header>

        {/* Action Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          
          <div className="relative max-w-md w-full">
            <IconSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A39580]" size={20} />
            <input
              className="w-full pl-12 pr-4 py-3 bg-[#3A342D] border border-white/5 rounded-lg focus:ring-1 focus:ring-[#C8B273]/30 focus:bg-[#453F36] transition-all duration-300 font-body text-sm text-[#F7F1E3] outline-none placeholder:text-[#A39580]/50"
              placeholder="Search participants by name or ID"
              type="text"
            />
          </div>

          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-[#3A342D] text-[#F7F1E3] border border-white/5 rounded-lg font-label font-semibold text-xs uppercase tracking-widest hover:bg-[#453F36] transition-all">
              <IconFilter size={18} />
              Filter
            </button>

            <button className="flex items-center gap-2 px-6 py-3 bg-[#C8B273] text-[#2F2A24] rounded-lg font-label font-bold text-xs uppercase tracking-widest shadow-lg hover:brightness-110 active:scale-95 transition-all">
              <IconUserPlus size={18} />
              Invite Guest
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-[#3A342D] rounded-xl overflow-auto border border-white/5">
          <table className="w-full text-left border-collapse">
            
            <thead>
              <tr className="border-b border-white/5 bg-[#3A342D]/50">
                <th className="px-8 py-5 font-label text-[10px] uppercase tracking-[0.2em] text-[#C8B273] font-bold">Participant</th>
                <th className="px-8 py-5 font-label text-[10px] uppercase tracking-[0.2em] text-[#C8B273] font-bold">User ID</th>
                <th className="px-8 py-5 font-label text-[10px] uppercase tracking-[0.2em] text-[#C8B273] font-bold">Status</th>
                <th className="px-8 py-5 font-label text-[10px] uppercase tracking-[0.2em] text-[#C8B273] font-bold text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-white/5">
              {participants.map((p, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors group">
                  
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[#453F36] overflow-hidden border border-white/10 shrink-0">
                        <img src={p.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                      </div>
                      <div>
                        <p className="font-headline font-bold text-[#F7F1E3]">{p.name}</p>
                        <p className="font-body text-xs text-[#A39580]">{p.email}</p>
                      </div>
                    </div>
                  </td>

                  <td className="px-8 py-5">
                    <span className="font-body text-sm font-medium text-[#A39580]">{p.id}</span>
                  </td>

                  <td className="px-8 py-5">
                    {p.status === "Joined" && (
                      <span className="px-3 py-1 rounded-full bg-[#C8B273]/10 text-[#C8B273] font-label text-[9px] font-black uppercase tracking-[0.1em] border border-[#C8B273]/20">Joined</span>
                    )}
                    {p.status === "Pending" && (
                      <span className="px-3 py-1 rounded-full bg-[#453F36] text-[#A39580] font-label text-[9px] font-black uppercase tracking-[0.1em] border border-white/5">Pending</span>
                    )}
                    {p.status === "Invited" && (
                      <span className="px-3 py-1 rounded-full bg-[#3A342D] text-[#A39580] font-label text-[9px] font-black uppercase tracking-[0.1em] border border-white/5">Invited</span>
                    )}
                  </td>

                  <td className="px-8 py-5 text-right">
                    <div className="flex justify-end gap-2">
                      
                      {p.status === "Joined" && (
                        <>
                          <button className="p-2 text-[#A39580] hover:text-[#C8B273] hover:bg-white/5 transition-all rounded-lg">
                            <IconEdit size={18} />
                          </button>
                          <button className="p-2 text-[#A39580] hover:text-[#ffb4ab] hover:bg-[#410002]/20 transition-all rounded-lg">
                            <IconUserMinus size={18} />
                          </button>
                        </>
                      )}

                      {p.status === "Pending" && (
                        <>
                          <button className="px-4 py-1.5 bg-[#C8B273] text-[#2F2A24] rounded-lg font-label text-[10px] font-bold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all">Approve</button>
                          <button className="px-4 py-1.5 border border-[#ffb4ab]/30 text-[#ffb4ab] rounded-lg font-label text-[10px] font-bold uppercase tracking-widest hover:bg-[#410002]/20 active:scale-95 transition-all">Reject</button>
                        </>
                      )}

                      {p.status === "Invited" && (
                        <>
                          <button className="p-2 text-[#A39580] hover:text-[#C8B273] transition-all rounded-lg">
                            <IconMailForward size={18} />
                          </button>
                          <button className="p-2 text-[#A39580] hover:text-[#ffb4ab] transition-all rounded-lg">
                            <IconX size={18} />
                          </button>
                        </>
                      )}

                    </div>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* Pagination */}
        <footer className="mt-8 flex md:flex-row flex-col space-y-5 items-center justify-between">
          <p className="font-label text-[10px] uppercase tracking-widest text-[#A39580] font-medium">
            Showing <span className="text-[#C8B273]">1-4</span> of <span className="text-[#C8B273]">42</span> participants
          </p>

          <div className="flex items-center gap-1">
            <button className="w-10 h-10 flex items-center justify-center rounded-lg text-[#A39580] opacity-30 cursor-not-allowed">
              <IconChevronLeft size={18} />
            </button>

            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#C8B273] text-[#2F2A24] font-label text-xs font-bold shadow-lg">1</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 text-[#F7F1E3] font-label text-xs transition-all">2</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 text-[#F7F1E3] font-label text-xs transition-all">3</button>
            <span className="w-10 h-10 flex items-center justify-center text-[#A39580]/50">...</span>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 text-[#F7F1E3] font-label text-xs transition-all">11</button>

            <button className="w-10 h-10 flex items-center justify-center rounded-lg text-[#F7F1E3] hover:bg-white/5 transition-all">
              <IconChevronRight size={18} />
            </button>
          </div>
        </footer>

      </main>
    </>
  );
};

export default ManageParticipants;