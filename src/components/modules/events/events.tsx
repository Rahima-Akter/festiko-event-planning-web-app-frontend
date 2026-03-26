import {
  IconUser,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";

// Events data
const eventsData = [
  {
    id: 1,
    title: "The Emerald Charity Gala",
    date: "Nov 24, 2024 • 7:00 PM",
    organizer: "Royal Hospitality Group",
    price: "Free",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOQYv5qY04hwLNqtqCbEvqtOBltbdxXp1PpeUNYYYbSrpHL913OfkOfxvrkBSktMCSa1mb6BgD5rT-jj4B5zH6F6_Rl78NlDckojqjnfvirWiv8m2IaQk8m3KJNpFGnoZBJbZDn1je4kfDXyakA0eNCjoyfr20mRyozX-Nz5vxGrkfX8Zbd2IbfIVSF9Xr42gjb-R2mH8rNlOsrq4u_t4ijbl-WFWn192ruGyn_7MBdxFZ5NEp6N2SRdgUreM45oBZAOGA_9ZVq2MJ",
    featured: true,
  },
  {
    id: 2,
    title: "Future Horizons Summit",
    date: "Dec 12, 2024 • 9:00 AM",
    organizer: "TechNexus Collective",
    price: "$249.00",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfHzh7awC4loTrsR55gl-hMKilyePZ_YJNItxDInBiHj7nq-4IodSOBSlydo6AJt8yqewN8Sut2cCzjO-STH1yzhNL2JLeXR0CRDCOQGqRtIocpC9pkxIsKy65sCgG5iYJR62DMnU5xfytqkDo6gByI97ZXJ0l8LihgZFPjnT10-tXZakXS3WQRVKUJZajm_S5CnXZ3p7sEKbulCcKDhTlHsZI7C974WmEVFV1e7imEW7zwZAsO9T9KneiUS0YtS35GX-Hpry6lhb-",
  },
  {
    id: 3,
    title: "Winter Garden Soirée",
    date: "Jan 05, 2025 • 4:00 PM",
    organizer: "Estate Events",
    price: "$45.00",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMamuxBV9DJvJoNwCTdnB5-VjP-2gulYPbItqlUffHMsHJWe4gl78AuH_5i9foKD4yOncExYf75Rxfh9kJ29qfcoBfgFRjtOdVJraKrxqTgWm7Bd5xEGr-ahhVU9KPAm4ty6XCpQw6Rk0nSfx_O8CbbqSZjSp6YiOUo1ITFLtxQIEHce0rC_A00eCYxIt7QFyjjEGZVFv6DKS-FnUMB_cu3IlZb87bARqRJW6r7JIjrCCvEh8ASSmDAdcqXjAMrRhE_9cVcTXIZ9Gd",
  },
  {
    id: 4,
    title: "Vintage Valentine Tasting",
    date: "Feb 14, 2025 • 6:30 PM",
    organizer: "Vines & Verve",
    price: "$120.00",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKm48wmjyPlX7h0jg84ViPVEpHm3N3cJHg5az6xqPo8Rz7ybafyrrjxmRkbfVTV85Cc_PCwEDmZUwK-Ti4pGtM7XJnI1prG18xm9ZmpV1CB3Q_GzFJNHIxGZlgezRWZSFnzwxCtUBM1g_CdNULyq_ucSsRJL1dU9SDQ99QTJcWK2ZfVdyMLr-YpXXip6ZHB64bcP4o-CqkgV3hc6j_O3XJCjNxFRGEUAIvXEpH1h6kWugNJ2oVVq1A9Ns8Y7xAtU-Dgi56fXvUZjzA",
  },
  {
    id: 5,
    title: "Manifesto Art Vernissage",
    date: "Mar 02, 2025 • 11:00 AM",
    organizer: "Galerie Lumière",
    price: "Free",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAP2ro6hZZlPRTdTINCtcCHgAf3IxdK8iufrWibaEuk_r8o3DW13mfdwv3-V79oRL0flOt7f5zyttORllllh7QTtojWyazk9JUg3wUQXCH9XMAUkjkzIYioYPLU1Mzm8TXC46KkijkQWiDwJjgQTZ_Eoca6W-OsG-KWmVAaPZqThmOkkbjuWpl2qH1iYebsydX6JJiW_ZG_yeyaiyvU685HHNgvAaDeSrKOItZSDO7b7L38YmyxXTVcKTSbIPVdA8qUtX4mbE2fQPXt",
  },
  {
    id: 6,
    title: "Candlelight Symphony",
    date: "Mar 22, 2025 • 8:00 PM",
    organizer: "Aria Productions",
    price: "$75.00",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBprw6DQe6xz_ziUEnGKcONCg_BKoX3ftVc-Vh-luIOoA8NYNM55Hvy3dv93Oa6aezpD6WqEIoJjVnOkzUNaSxLiuJupmvWI6npbC5Nm8XiUsPqrpIVmGbeijWN20BbsQK04cVRTl2FVWSAn_dOfrjcNAVwurFzgVQSKhdC2vsFKDPwNfVf9r0evZ5nfqFV4gg0zZygvt7ry8dWG81p9uBrIAuMEOcP2B-peY-zaqG67a1O-6RsXgWQ9R543LNvV1VVNKRo6_k8Lipa",
  },
];

const Events = () => {
  return (
    <>
      <main className="pt-20">
        {/* Hero Search Section */}
        <section className="bg-[#353029] py-24 px-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full border border-[#c8b273]"></div>
            <div className="absolute -bottom-24 -right-24 w-120 h-120 rounded-full border border-[#6e5d27]"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="serif-heading text-5xl md:text-6xl text-[#f9e19d] mb-8 tracking-tight font-bold italic">
              Discover the Extraordinary
            </h1>
            <div className="bg-[#ffffff]/10 backdrop-blur-md rounded-xl p-2 flex flex-col md:flex-row gap-2 items-stretch shadow-2xl">
              <div className="grow flex items-center bg-[#ffffff] rounded-lg transition-all">
                <input
                  className="w-full bg-transparent rounded-md px-4 py-2.5"
                  placeholder="Search by title or organizer..."
                  type="text"
                />
              </div>
              <div className="flex gap-2">
                <div className="bg-[#ffffff] rounded-lg px-4 flex items-center min-w-35">
                  <select className="w-full bg-transparent border-none focus:ring-0 text-[#1f1b15] font-medium cursor-pointer">
                    <option>All Events</option>
                    <option>Public</option>
                    <option>Private</option>
                  </select>
                </div>
                <div className="bg-[#ffffff] rounded-lg px-4 flex items-center min-w-35">
                  <select className="w-full bg-transparent border-none focus:ring-0 text-[#1f1b15] font-medium cursor-pointer">
                    <option>Price</option>
                    <option>Free</option>
                    <option>Paid</option>
                  </select>
                </div>
              </div>
              <button className="bg-[#6e5d27] text-[#ffffff] px-6 py-3 rounded-lg font-bold tracking-wide hover:opacity-90 active:scale-95 transition-all cursor-pointer">
                Search
              </button>
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="bg-[#f6ece3] py-20 px-12">
          <div className="max-w-360] mx-auto">
            <div className="mb-12">
              <span className="font-label text-xs uppercase tracking-[0.15em] text-[#6e5d27] font-bold">
                Curated Listings
              </span>
              <h2 className="serif-heading text-4xl text-[#1f1b15] mt-2">
                Upcoming Experiences
              </h2>
            </div>

            {/* Map Events */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
              {eventsData.map((event) => (
                <div
                  key={event.id}
                  className="group bg-[#ffffff] rounded-lg overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      src={event.img}
                    />
                    {event.featured && (
                      <div className="absolute top-4 left-4 bg-[#ffffff]/90 backdrop-blur px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest text-[#6e5d27]">
                        Featured
                      </div>
                    )}
                    <div className="absolute bottom-4 right-4 bg-[#6e5d27] text-[#ffffff] px-4 py-2 rounded-lg font-bold">
                      {event.price}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col grow">
                    <p className="font-label text-[10px] uppercase tracking-widest text-[#6e5d27] mb-3">
                      {event.date}
                    </p>
                    <h3 className="serif-heading text-2xl mb-4 text-[#1f1b15] group-hover:text-[#6e5d27] transition-colors">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-8 h-8 rounded-full bg-[#f1e6dd] flex items-center justify-center">
                        <IconUser className="symbols-outlined text-sm" />
                      </div>
                      <span className="text-sm font-medium text-[#4b463a]">
                        By{" "}
                        <span className="text-[#1f1b15]">
                          {event.organizer}
                        </span>
                      </span>
                    </div>
                    <div className="mt-auto">
                      <button className="w-full btn-primary-gradient text-[#554511] py-4 rounded-lg font-bold tracking-tight hover:shadow-xl transition-all cursor-pointer">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-20 flex justify-center items-center gap-4">
              <button className="w-12 h-12 rounded-md border border-[#cec6b5] flex items-center justify-center hover:bg-[#f1e6dd] transition-colors">
                <IconChevronLeft />
              </button>
              <div className="flex gap-2">
                <button className="w-12 h-12 rounded-md bg-[#6e5d27] text-[#ffffff] font-bold">
                  1
                </button>
                <button className="w-12 h-12 rounded-md border border-[#cec6b5] hover:bg-[#f1e6dd] transition-colors font-bold">
                  2
                </button>
                <button className="w-12 h-12 rounded-md border border-[#cec6b5] hover:bg-[#f1e6dd] transition-colors font-bold">
                  3
                </button>
              </div>
              <button className="w-12 h-12 rounded-md border border-[#cec6b5] flex items-center justify-center hover:bg-[#f1e6dd] transition-colors">
                <IconChevronRight />
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Events;
