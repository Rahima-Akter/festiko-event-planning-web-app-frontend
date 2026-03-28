import {
  IconSearch,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";

const MyParticipations = () => {
  const events = [
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDGXsqSS3TJLiIwuAQ5i5YMMofGaEtKwCRoj_xYkM8jDyri8Gd03KWeMHHzN-iUWHfFtdxtuW53jPRHzwpcviRKh6nQkon-BKkg4qGJBdF5YQtGC2ZOgLPViI4VgK62N5k1r_oqM7da40NxfxrI92LevZtuY74GcFqfHTK2kuEkVxszvMAAufiB1HuGsNGonusfiJskcVLGGBN7kCkNpO4deUGEef0zTk7XfhPkNivBAiWD_L6gptIDoNRuCIF5CUGgY-2aSuW0F508",
      status: "Confirmed",
      category: "Gala & Dinner",
      title: "Emerald Solstice Masquerade",
      date: "Oct 24, 2024",
      time: "19:00 - 02:00",
      location: "The Glass Pavilion, NYC",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB6l5gJYRUR71QOaod6b0qw1O-b59yUhWywGTub0YmtsGgzbU5nerQSQDWPCk5fmgTTj7fWMTzkFZfI8yN1oxc8KymhEw_TKEwIc2Fr-rfHa3qqwsDP8Z-ZyhUlPAnLPifqi_LJ8yOc1CUBN2XkDnGEA9AKxuEbN5kR3BE1ZaydUo2glc-tr33G3eDow77xm9kIzUydAoNL9_1jw1nPCsjOTujSMuG_SSC9L9rw-9Vod02O8-4djogvnbcNHrzuFNXsZHOIukylcpp4",
      status: "Pending",
      category: "Tech Summit",
      title: "Neo-Capital Founders Retreat",
      date: "Nov 12, 2024",
      time: "09:00 - 18:00",
      location: "Skyline Innovation Hub",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBSSi1WvF-Y1vg58knzlLFdIgkSxf7AM6rGfT1u91ibuVOVtbROsBnqtLB-4aEa2zMb4bJM9NtCPFpwfzjPShGL013hHOXP2umRYjmQFMSZB1UrcfRrXlhwTp1EUBWwpjfQzp_ye7OOCoRmN3aOl5EcE0VIFndcQ_uFZNQ65_Xwe0YpgZm1rcQqp7xGICeuGP4FQ8OO2AOHs7Ql610faTk9BCfdL8bM-c3ADKl-RgWGWto6TzZ9RaG_q0sxRTuHw9T1Io004C-DN23e",
      status: "Confirmed",
      category: "Art Exhibition",
      title: "Metamorphosis: Private View",
      date: "Dec 05, 2024",
      time: "18:00 - 21:00",
      location: "Aura Contemporary Gallery",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAuxrUobuItcsuF3nSfeHdXONM4I3K-1Zrc2CSHjiB8RskViLpyBDmKwc-z5viOTJeA3WEbKZMCuhOVdt6RAzkGPyvmnUkU-qPNETYl4nsND1YGA07dY3B-kL-Ov87wAwpuuSPt_rK8frE-thFdV4xSLDJigHX62oj9b7ffb8CfHlOxPyB6vPaO_Nx-d95uLosfhZlERpJuFdVbs80T_elgOBbDuQFWUYa6MsEIly9ciT1tBWvd03zVklttd0JHW8R4u_k00FmCTw_s",
      status: "Confirmed",
      category: "Networking",
      title: "Vintage & Venture Social",
      date: "Jan 15, 2025",
      time: "17:00 - 20:30",
      location: "The Reserve Vineyards",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB_onNldn9U7JwvwDRcur-bdFicdGc4Er6ujlOgnYnPgQEJdEbR-V6MPA_irU-Aez-27uhYEXQJ78-1ixTgrsK0bkTcOej_nz-iVZnbdf4FwSF48TIFm1RZ7t_l2G41ipR-Am_UsS5ZdSJF0tkPqid0mMrvjE1pzkj_Tb2DIO79sXXmpIv7nAsHrG00mB0monHr-NHMIc55FP4K7iH1DSSGoRORkttaGUALQhHqo8ghkmVgJvtO8WRuICynzrvefkTkjTFdVm7S7v74",
      status: "Sold Out",
      category: "Music & Arts",
      title: "Velvet Underground Showcase",
      date: "Feb 20, 2025",
      time: "21:00 - 04:00",
      location: "Industrial Arts District",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBqxRVzYGc9rj85OD1aCHs_gFitgBA0GQ_MfwXX-meL0LKDchsM6xVwbf_C11gM9j4VrKnHPCojZyD0-qxAApWVDNtTf4dfa1qAD_RuGSXWrMD1IZ3hCfVp9NlhgjVEhSCgYru3UrXtBI2mqXllpJ2aRKyJnglN0789suspb2svxZq7VZuOjZohayJYmyAsjTpRY8u_87_BScLZcPXq7cwdluGaGm5-ai23TtCXZdlnUlzeGgegkf--y1Cy1FMXxfjU_yr_qqCYTd7i",
      status: "Confirmed",
      category: "Corporate",
      title: "Leadership Circle 2025",
      date: "Mar 10, 2025",
      time: "10:00 - 16:00",
      location: "Penthouse Executive Suites",
    },
  ];

  return (
    <main className="lg:ml-64 min-h-screen bg-[#2F2A24] px-4 sm:px-6 lg:pr-12 lg:pl-20 py-10 lg:py-10">
      {/* Header */}
      <header className="mb-8">
        <div className="max-w-2xl mb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#C8B273] tracking-tight leading-none mb-4">
            My Participations
          </h2>
          <p className="text-[#C8B273]/80 text-base sm:text-lg max-w-xl">
            Curated list of events that you have participated in.
          </p>
        </div>

        {/* Search BELOW text */}
        <div className="relative group w-full">
          <IconSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C8B273]/60" />
          <input
            type="text"
            placeholder="Search events..."
            className="pl-12 pr-6 py-3 sm:py-4 bg-[#3F3931] rounded-lg w-full focus:ring-1 focus:ring-[#6e5d27]/30 focus:bg-[#38322B] transition-all text-[#C8B273] placeholder:text-[#C8B273]/50 text-sm"
          />
        </div>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
        {events.map((event, i) => (
          <div
            key={i}
            className="group relative bg-[#38322B] overflow-hidden rounded-lg transition-all duration-500 hover:-translate-y-2 border border-[#C8B273]/10 flex flex-col"
          >
            {/* Image */}
            <div className="aspect-[16/9] overflow-hidden relative">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={event.image}
                alt=""
              />

              {/* badge spacing */}
              <div className="absolute top-3 right-4 px-3 pb-1 bg-[#38322B]/80 backdrop-blur-md rounded-full">
                <span className="text-[10px] font-bold text-[#c8b273] uppercase tracking-wider">
                  {event.status}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <div className="mb-3">
                <p className="text-[10px] font-bold text-[#c8b273] uppercase tracking-widest mb-1">
                  {event.category}
                </p>
                <h3 className="text-lg font-bold text-[#C8B273] leading-tight">
                  {event.title}
                </h3>
              </div>

              <div className="space-y-2 mb-6 text-xs text-[#C8B273]/70">
                <div className="flex items-center gap-3">
                  <span>📅</span>
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>⏰</span>
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>📍</span>
                  <span>{event.location}</span>
                </div>
              </div>

              {/* PUSH BUTTONS DOWN */}
              <div className="flex gap-2 mt-auto">
                <button className="flex-1 py-2 bg-[#4B463A] text-[#C8B273] font-bold text-[9px] uppercase tracking-widest hover:bg-[#C8B273]/10 transition-colors rounded">
                  Contact Host
                </button>
                <button className="flex-1 py-2 bg-gradient-to-r from-[#6e5d27] to-[#c8b273] text-white font-bold text-[9px] uppercase tracking-widest rounded">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <footer className="mt-5 flex flex-col md:flex-row items-center justify-between border-t border-[#C8B273]/10 pt-10 gap-6">
        <p className="text-sm text-[#C8B273]/40">
          Showing 6 of 24 curated participations
        </p>

        <div className="flex items-center gap-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#3F3931] text-[#C8B273] hover:bg-[#4B463A]">
            <IconChevronLeft size={18} />
          </button>

          <div className="flex gap-1">
            <button className="w-10 h-10 rounded-lg bg-[#6e5d27] text-white font-bold text-sm">
              1
            </button>
            <button className="w-10 h-10 rounded-lg bg-[#3F3931] text-[#C8B273]">
              2
            </button>
            <button className="w-10 h-10 rounded-lg bg-[#3F3931] text-[#C8B273]">
              3
            </button>
            <button className="w-10 h-10 rounded-lg bg-[#3F3931] text-[#C8B273]">
              4
            </button>
          </div>

          <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#3F3931] text-[#C8B273] hover:bg-[#4B463A]">
            <IconChevronRight size={18} />
          </button>
        </div>
      </footer>
    </main>
  );
};

export default MyParticipations;
