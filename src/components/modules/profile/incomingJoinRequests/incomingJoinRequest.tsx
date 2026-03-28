import {
  IconSearch,
  IconFilter,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";

const IncomingJoinRequests = () => {
  return (
    <>
      <main className="lg:ml-64 flex-1 px-4 sm:px-6 md:px-8 lg:px-12 py-4 bg-[#2F2A24]">
        {/* Header Section */}
        <header className="mb-12 max-w-6xl">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F9EFE5] mb-2">
            Incoming Join Requests
          </h1>
          <p className="text-[#F9EFE5]/70 font-body text-sm max-w-2xl">
            Curate your guest list with precision. Review and manage pending
            requests for your upcoming exclusive gatherings.
          </p>
        </header>

        {/* Search & Filter Controls */}
        <div className="mb-8 max-w-6xl flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
          <div className="relative w-full max-w-md group">
            <IconSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7d7668] group-focus-within:text-[#C8B273] transition-colors" />
            <input
              className="w-full bg-[#3D372F] border-none rounded-lg pl-12 pr-4 py-3 text-sm focus:ring-1 focus:ring-[#C8B273]/30 focus:bg-[#3D372F] transition-all placeholder:text-[#7d7668] placeholder:uppercase placeholder:tracking-widest placeholder:text-[10px] text-[#F9EFE5]"
              placeholder="Search requests..."
              type="text"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-[#4F4630] text-[#dbc38a] text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-[#574d41] transition-colors cursor-pointer">
              <IconFilter className="text-sm" />
              <span>Recent First</span>
            </button>
          </div>
        </div>

        {/* Request List */}
        <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
          {[1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              className="bg-[#3D372F] p-4 sm:p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] group rounded-lg"
            >
              {/* Left */}
              <div className="flex items-center space-x-4 sm:space-x-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-[#4F4630]">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbxPAYxSOOZxx2s750GgvYiRyiyVsZ6_nQ9haROiRrmsaYg62JdowCNqAKl8-X9givnN5hJN9RaAVRbtJZHlDZUNkI7vo0BMX6lqOEbubS0DIGddcF08cmcCAzf46aM99q0gOeuFBqeQO-Hu3rBgpbGZpsmA9CZmO-sTXG_v77vgWgw9-A-sCH4sXdEyPYX4H2BYkuV6Nrqo4c3jrAS4my6isVRk1zF2MFxy30ye8U8lDCdjK-x9Kiqp0nowyxFRuLB9kr5R7yswis"
                    alt="Requesting User Avatar"
                  />
                </div>
                <div className="w-full sm:w-64">
                  <h3 className="text-lg font-bold text-[#F9EFE5] leading-tight">
                    {
                      [
                        "Elena Rodriguez",
                        "Marcus Thorne",
                        "Sophia Chen",
                        "Julian Barnes",
                      ][i]
                    }
                  </h3>
                  <p className="text-[10px] uppercase tracking-widest text-[#C8B273] font-bold mt-1">
                    {
                      [
                        "Requested to join: Midnight Jazz Soirée",
                        "Requested to join: Private Vineyard Tasting",
                        "Requested to join: Midnight Jazz Soirée",
                        "Requested to join: Rooftop Gala Dinner",
                      ][i]
                    }
                  </p>
                </div>
              </div>

              {/* Right */}
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
                <div className="flex justify-between lg:block lg:w-32">
                  <span className="block text-[10px] uppercase tracking-widest text-[#F9EFE5]/50 font-medium">
                    Event Date
                  </span>
                  <span className="text-sm font-semibold text-[#F9EFE5]">
                    {
                      [
                        "Oct 24, 2023",
                        "Oct 28, 2023",
                        "Oct 24, 2023",
                        "Nov 02, 2023",
                      ][i]
                    }
                  </span>
                </div>

                <div className="flex justify-between lg:block lg:w-32">
                  <span className="block text-[10px] uppercase tracking-widest text-[#F9EFE5]/50 font-medium">
                    Request Date
                  </span>
                  <span className="text-sm font-semibold text-[#F9EFE5]">
                    {
                      [
                        "Oct 12, 2023",
                        "Oct 11, 2023",
                        "Oct 11, 2023",
                        "Oct 10, 2023",
                      ][i]
                    }
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-between">
                  <button className="px-4 sm:px-6 py-2 border border-[#7d7668]/30 text-[10px] font-bold uppercase tracking-widest text-[#F9EFE5]/80 hover:bg-[#ffffff]/5 transition-colors cursor-pointer">
                    Reject
                  </button>
                  <button className="px-4 sm:px-6 py-2 bg-linear-to-r from-[#C8B273] to-[#C8B273] text-[#231b00] text-[10px] font-bold uppercase tracking-widest shadow-md hover:scale-[1.02] transition-transform cursor-pointer">
                    Approve
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Section */}
        <footer className="mt-16 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[10px] uppercase tracking-widest text-[#F9EFE5]/60 font-bold">
            Showing 1-4 of 28 requests
          </div>
          <div className="flex items-center space-x-2 flex-wrap justify-center">
            <button className="w-10 h-10 flex items-center justify-center rounded-sm bg-[#3D372F] text-[#F9EFE5]/80 hover:bg-[#C8B273] hover:text-[#231b00] transition-all cursor-pointer">
              <IconChevronLeft className="text-sm" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-sm bg-[#C8B273] text-[#231b00] font-bold text-xs cursor-pointer">
              1
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-sm bg-[#3D372F] text-[#F9EFE5]/80 hover:bg-[#4F4630] transition-colors font-bold text-xs cursor-pointer">
              2
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-sm bg-[#3D372F] text-[#F9EFE5]/80 hover:bg-[#4F4630] transition-colors font-bold text-xs cursor-pointer">
              3
            </button>
            <span className="px-2 text-[#F9EFE5]/40">...</span>
            <button className="w-10 h-10 flex items-center justify-center rounded-sm bg-[#3D372F] text-[#F9EFE5]/80 hover:bg-[#4F4630] transition-colors font-bold text-xs cursor-pointer">
              7
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-sm bg-[#3D372F] text-[#F9EFE5]/80 hover:bg-[#C8B273] hover:text-[#231b00] transition-all cursor-pointer">
              <IconChevronRight className="text-sm" />
            </button>
          </div>
        </footer>
      </main>
    </>
  );
};

export default IncomingJoinRequests;
