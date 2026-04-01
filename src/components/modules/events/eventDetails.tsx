import { IconCalendar, IconMapPin, IconShield, IconStar, IconTicket, IconUsers } from "@tabler/icons-react";
import ReviewFormModal from "./ReviewFormModal ";

const EventDetails = () => {
  return (
    <>
      <main className="bg-[#fff8f4]">
        {/* Hero Section */}
        <section className="relative w-full h-[500px] overflow-hidden">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsOwZu9Rar5dfUaePHlaZKNzvtq2JJfVlnyw0dARJPX-4iMoeqoZ-t-vOGAsLFVEo1JaWrLL0jzLu87daUyWBqIV0zCHyA2vUVhjpbYAHwoWnjYnnieQuFq5PwEesD_W-ZgkbeZDddzB0XX-qw-sr3ydKlfcv9Bm1VoPbrhNlAK5MGpnkCZoOCir_rjejJ-ERVBsua8hXUQBC2QsAtcu3ul6L9nj099RdhVx_XzJQFpvRcFhV6LX5A2M_zjAUdEyyxp-Vb5UK1-EZ6"
            className="w-full h-full object-cover"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          <div className="absolute md:bottom-0 bottom-6 left-0 w-full p-12 md:p-20">
            <div className="max-w-[1440px] mx-auto">
              <div className="inline-flex items-center px-4 py-1 bg-[#c8b273]/20 backdrop-blur-md border border-white/20 rounded-full mb-6">
                <span className="text-[#ffffff] font-label text-xs uppercase tracking-[0.1em]">
                  Exclusive Soirée
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-headline font-bold text-[#ffffff] tracking-tight max-w-4xl leading-tight">
                The Grand Autumn{" "}
                <span className="serif-italic font-normal">Gala 2024</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="max-w-360 mx-auto px-12 py-16">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left */}
            <div className="grow lg:max-w-4xl">
              <div className="flex flex-col md:flex-row gap-8 mb-12 items-start md:items-center">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-[#fcf2e8] rounded-xl">
                    <IconCalendar className="text-[#6e5d27] text-3xl" />
                  </div>
                  <div>
                    <p className="font-label text-xs uppercase tracking-widest text-[#7d7668]">
                      Date & Time
                    </p>
                    <p className="font-headline font-semibold text-lg text-[#1f1b15]">
                      October 24, 7:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-4 bg-[#fcf2e8] rounded-xl">
                    <IconMapPin className="text-[#6e5d27] text-3xl" />
                  </div>
                  <div>
                    <p className="font-label text-xs uppercase tracking-widest text-[#7d7668]">
                      Venue
                    </p>
                    <p className="font-headline font-semibold text-lg text-[#1f1b15]">
                      The Glass Pavilion, NYC
                    </p>
                  </div>
                </div>
              </div>

              <div className="">
                <h2 className="font-headline text-3xl font-bold mb-8 text-[#1f1b15]">
                  About the Evening
                </h2>

                <p className="text-lg leading-relaxed text-[#4b463a] mb-6">
                  Join us for an unforgettable evening where art meets
                  celebration. The Grand Autumn Gala is Festiko's signature
                  annual gathering, bringing together the city's finest creators
                  and patrons for a night of orchestral performances and
                  immersive visual art.
                </p>

                <p className="text-lg leading-relaxed text-[#4b463a] mb-12">
                  This year, we focus on the theme of 'Eternal Harvest,'
                  featuring a curated seven-course tasting menu by
                  Michelin-starred chefs and a live auction benefiting local
                  urban garden initiatives.
                </p>
              </div>

              {/* Controls */}
              <div className="p-8 bg-[#f6ece3] rounded-2xl mb-16 flex flex-wrap gap-4 items-center">
                <div className="grow">
                  <p className="font-headline font-bold text-xl text-[#1f1b15]">
                    Event Management
                  </p>
                  <p className="text-sm text-[#4b463a]">
                    You are viewing this as the organizer.
                  </p>
                </div>

                <button className="px-6 py-3 bg-[#ffffff] text-[#6e5d27] font-label text-xs uppercase tracking-widest rounded-lg hover:bg-white transition-all">
                  Edit Event
                </button>

                <button className="px-6 py-3 bg-[#6e5d27] text-[#ffffff] font-label text-xs uppercase tracking-widest rounded-lg shadow-lg hover:opacity-90 transition-all">
                  Manage Participants
                </button>
              </div>

              {/* Reviews */}
              <div className="mt-20">
                <h3 className="font-headline text-3xl font-bold mb-10 text-[#1f1b15]">
                  Guest Experiences
                </h3>

                <div className="space-y-8 mb-12">
                  <div className="bg-[#ffffff] p-8 rounded-xl">
                    <div className="flex justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <img
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW-6mDF92GhDO9ZZYkKJ_x0nuV6DaiR1BN9WASj8b-B1OhEXC4d8_lYLhmVtNnzoJvRLr5v-w556JkaG1N_1dyzm8VNiPIcCVOQ-kc8Yx_O_RHcsMRZFvcFvd4lTxw_jvd1dTRS5y1GZMurFe4wfql8OszsoCZewQLddr-5bMZ86WN8Cvk1nwmrEQ3bz4_d9cvj8wHZZ8UN8x5J170z_vfGJxAyVZwyz1Iqvy6XBeCbekdK2pEbqJWZTS3D_LNmJx8AWo4S2TvTUVs"
                          className="w-10 h-10 rounded-full object-cover"
                          alt=""
                        />
                        <div>
                          <p className="font-semibold text-sm text-[#1f1b15]">
                            Elena Rodriguez
                          </p>
                          <p className="text-xs text-[#7d7668]">
                            Attended 2023 Gala
                          </p>
                        </div>
                      </div>

                      <div className="flex text-[#6e5d27]">
                        {[...Array(5)].map((_, i) => (
                          <IconStar
                            key={i}
                            className="text-sm fill-[#6e5d27]"
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-[#4b463a] italic">
                      "The level of detail in the curation is unparalleled.
                      Truly a concierge-level experience from the moment you
                      arrive."
                    </p>
                  </div>
                </div>

                {/* Add Review Button */}
                <button className="bg-[#6e5d27] text-[#ffffff] px-8 py-3 rounded-lg font-label text-xs uppercase tracking-widest hover:opacity-90">
                  Add Review
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="">
              <div className="sticky top-32 space-y-8">
                <div className="bg-[#ffffff] p-8 rounded-2xl border border-[#cec6b5]/20">
                  <div className="mb-8">
                    <p className="font-label text-xs uppercase tracking-widest text-[#7d7668] mb-2">
                      Admission Fee
                    </p>
                    <p className="text-4xl font-headline font-bold text-[#1f1b15]">
                      $250.00{" "}
                      <span className="text-lg font-normal text-[#7d7668]">
                        / person
                      </span>
                    </p>
                  </div>

                  <div className="space-y-4 mb-10">
                    <div className="flex items-center gap-3 text-sm text-[#4b463a]">
                      <IconUsers className="text-[#6e5d27]" />
                      <span>Capacity: 120 Guests</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-[#4b463a]">
                      <IconShield className="text-[#6e5d27]" />
                      <span>Private Event</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-[#4b463a]">
                      <IconTicket className="text-[#6e5d27]" />
                      <span>Digital Pass Included</span>
                    </div>
                  </div>

                  <button className="w-full bg-linear-to-br from-[#6e5d27] to-[#c8b273] text-[#ffffff] py-5 rounded-xl font-headline font-bold text-lg shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all mb-4">
                    Pay & Request
                  </button>
                </div>

                <div className="bg-[#fcf2e8] p-8 rounded-2xl">
                  <p className="font-label text-xs uppercase tracking-widest text-[#7d7668] mb-6">
                    Organized by
                  </p>

                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy-TE6AieCv_6Rl_Lxi81JdOILb1aIV7KrQGhDUTMBYHFT0cyFlVqTDuCCusnO55gzxmeJUA6QbCSPipaYuxqWDIc0xmbTsDnfy5AIpth8YM1Q4WRbkHpY78-owI1h6BKROtIbRt--3KNUx5X_aATWMdkg-CXGfgQpX3D3y8SJS4E_Yc9mxliuRyVZum5Jqm-50iBi_7zTWDFyQXKsbuSqIMEM99IwJRgw04HlBFf06H2OMeDZ9Hkek17tPH-7MrnX9PsfJLC53IGJ"
                      className="w-16 h-16 rounded-full object-cover"
                      alt=""
                    />
                    <div>
                      <p className="font-headline font-bold text-lg text-[#1f1b15]">
                        Julian Vance
                      </p>
                      <p className="text-xs text-[#7d7668] uppercase tracking-tight">
                        Premium Member
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-[#4b463a] mb-6 leading-relaxed">
                    Cultural curator and event strategist with over 15 years
                    experience in luxury hospitality and arts.
                  </p>

                  <button className="w-full py-3 border border-[#6e5d27]/20 text-[#6e5d27] rounded-lg font-label text-xs uppercase tracking-widest hover:bg-white transition-all">
                    Contact Host
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Modal */}
      <ReviewFormModal />
    </>
  );
};

export default EventDetails;