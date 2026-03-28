import {
  IconCalendar,
  IconUsers,
  IconCashMinus,
  IconCalendarBolt,
} from "@tabler/icons-react";

const Overview = () => {
  return (
    <>
      {/* Main Container */}
      <main className="lg:ml-72 flex-1 md:p-12 p-10 bg-[#2F2A24]">
        {/* Header Section */}
        <header className="mb-8 flex md:flex-row flex-col justify-between md:items-end space-y-6">
          <div>
            <h2 className="text-4xl font-serif text-[#f9efe5] font-bold mb-2">
              Executive Overview
            </h2>
            <p className="text-[#CEC6B5] max-w-xl">
              Welcome back, Julian. Here is an editorial summary of the
              platform&apos;s performance and recent activities.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 bg-[#3A342D] px-4 py-2 rounded-lg border border-[#C8B273]/10">
              <IconCalendar className="text-[#C8B273]" />
              <span className="font-label text-xs uppercase tracking-widest text-[#CEC6B5]">
                Oct 12, 2023 - Oct 19, 2023
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
              1,284
            </h3>
          </div>

          {/* Stat Card 2 */}
          <div className="bg-[#3A342D] p-8 rounded-xl border border-[#C8B273]/10 relative overflow-hidden group shadow-sm">
            <div className="absolute top-0 right-0 p-4 opacity-70 group-hover:opacity-20 transition-opacity">
              <IconUsers className="text-6xl text-[#ecd79e]" />
            </div>
            <p className="font-label text-[10px] uppercase tracking-[0.2em] text-[#CEC6B5] font-bold mb-4">
              Total Users
            </p>
            <h3 className="text-4xl font-serif font-bold text-[#f9efe5]">
              42.5k
            </h3>
          </div>

          {/* Stat Card 3 */}
          <div className="bg-[#25211C] p-8 rounded-xl border border-[#C8B273]/20 relative overflow-hidden group shadow-lg">
            <div className="absolute top-0 right-0 p-4 opacity-70 group-hover:opacity-20 transition-opacity">
              <IconCashMinus className="text-6xl text-[#ecd79e]" />
            </div>
            <p className="font-label text-[10px] uppercase tracking-[0.2em] text-[#f9efe5]/50 font-bold mb-4">
              Total Revenue
            </p>
            <h3 className="text-4xl font-serif font-bold text-[#C8B273]">
              $2.4M
            </h3>
          </div>
        </section>

        {/* chart */}
        <div className="grid grid-cols-1 gap-12">
          {/* Large Area Chart: Event Growth */}
          <section className="bg-[#353029] p-10 rounded-2xl border border-[#C8B273]/5">
            <div className="flex items-center justify-between mb-10">
              <h4 className="text-2xl font-serif font-bold text-[#f9efe5]">
                Event Growth Trends
              </h4>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-[#C8B273]/10 rounded text-[10px] text-[#C8B273] font-bold uppercase tracking-widest border border-[#C8B273]/20">
                  Monthly
                </span>
              </div>
            </div>
            <div className="h-96 w-full relative">
              <svg className="w-full h-full" viewBox="0 0 800 300">
                <defs>
                  <linearGradient
                    id="growthGradient"
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#C8B273" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#C8B273" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,250 Q100,220 200,240 T400,150 T600,180 T800,80 L800,300 L0,300 Z"
                  fill="url(#growthGradient)"
                ></path>
                <path
                  d="M0,250 Q100,220 200,240 T400,150 T600,180 T800,80"
                  fill="none"
                  stroke="#C8B273"
                  strokeWidth="3"
                ></path>
                <g className="text-[10px] fill-[#f9efe5]/40 uppercase font-label">
                  <text x="0" y="290">
                    Jan
                  </text>
                  <text x="160" y="290">
                    Mar
                  </text>
                  <text x="320" y="290">
                    May
                  </text>
                  <text x="480" y="290">
                    Jul
                  </text>
                  <text x="640" y="290">
                    Sep
                  </text>
                  <text x="760" y="290">
                    Nov
                  </text>
                </g>
              </svg>
            </div>
          </section>
        </div>

        {/* Featured Spotlight Card */}
        <section className="mt-12">
          <div className="relative w-full h-80 rounded-2xl overflow-hidden group shadow-2xl border border-[#C8B273]/10">
            <img
              alt="Luxury Event Backdrop"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk-zWKdGQeqZbhXbQoK0deOew8NcYqasNhdqFPrQWx3EQ23_9rxoc3oUR-_d8rmFliqUp8LZz7VMkqaDnG9ZvNbMxmwbd52x24aB08eWSrpMpD47_jEHK0v4KqjCLlDb_fBrnE3jGSZTWgIqfqtA522SK_7XQNtXMCZydsk6V6zuaQ9Vbuqn57r3J5sdC-PGDaRSs4w_a5jjstKz0laZXFcytMJP3ZSskkaRoekm4svb5T-1T-oL-7Y-36wXmPWLnqtSogGbd4YePH"
            />
            <div className="absolute inset-0 bg-linear-to- from-[#25211C] via-[#25211C]/40 to-transparent"></div>
            <div className="absolute md:-bottom-3 -bottom-2 p-12 inset-x-0 flex justify-center">
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
    </>
  );
};

export default Overview;
