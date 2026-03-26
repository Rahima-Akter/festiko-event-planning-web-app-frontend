import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

const UpcomingEventsSection = () => {
  return (
    <>
      <section className="py-24 px-12 bg-[#fff8f4]">
        <div className="max-w-360 mx-auto">
          <div className="flex flex-col lg:flex-row justify-between lg:items-end items-start gap-8 mb-16">
            <div>
              <h2 className="font-headline text-4xl text-[#1f1b15] font-semibold mb-2">
                Upcoming Events
              </h2>
              <p className="font-body text-[#4b463a] opacity-70">
                Curated gatherings for the elite community.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="px-6 py-2.5 rounded-full bg-[#ecdec1] text-[#6c624a] font-label text-xs font-semibold tracking-wider">
                Public Free
              </button>
              <button className="px-6 py-2.5 rounded-full bg-[#f1e6dd] text-[#4b463a] font-label text-xs font-semibold tracking-wider hover:bg-[#ecdec1] transition-colors">
                Public Paid
              </button>
              <button className="px-6 py-2.5 rounded-full bg-[#f1e6dd] text-[#4b463a] font-label text-xs font-semibold tracking-wider hover:bg-[#ecdec1] transition-colors">
                Private Free
              </button>
              <button className="px-6 py-2.5 rounded-full bg-[#f1e6dd] text-[#4b463a] font-label text-xs font-semibold tracking-wider hover:bg-[#ecdec1] transition-colors">
                Private Paid
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="group">
              <div className="aspect-[4/5] bg-[#fcf2e8] mb-6 overflow-hidden relative">
                <img
                  alt="Private Dinner"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTxlCoAGle82O2plb6VCDmB01iN9m5kbs0VYwhDVMB3KyWbhtZL5QagLQbWUwJFp-NsGnonJiAkGQ9umZwAIz1jUMwPpAf9JNuX4CSYI1817Llm-QWv9-avjtUl4HxpUsQPOePFBiSJu0pMCBpizahDxi4O2UtqJ6mJ7oYEHeHNEcPfXkP9kRWUj-wZmJGIAIajVY3DSJrvE_hWd0LPaKWXFgTk3AQPmAhve2yls-hotom0sbSbXwIi3SKvAwq-7Eu78XQVMC8rwrs"
                />
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur text-[#6e5d27] text-[10px] font-bold uppercase tracking-widest">
                  Private Paid
                </div>
              </div>
              <div>
                <p className="font-label text-[10px] uppercase tracking-widest text-[#6e5d27] mb-2">
                  December 14 • Zurich
                </p>
                <h3 className="font-headline text-2xl text-[#1f1b15] font-semibold mb-3">
                  Alpine Winter Solstice Dinner
                </h3>
                <p className="font-body text-sm text-[#4b463a] leading-relaxed mb-6">
                  A seven-course culinary exploration of the Swiss Alps by
                  Michelin-starred chefs.
                </p>
                <Link
                  href="#"
                  className="font-label text-xs font-bold uppercase tracking-widest text-[#6e5d27] flex items-center gap-2 group-hover:gap-4 transition-all"
                >
                  View Invitation <IconArrowRight className="text-sm" />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group">
              <div className="aspect-[4/5] bg-[#fcf2e8] mb-6 overflow-hidden relative">
                <img
                  alt="Luxury Conference"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnSBrRaxDmkfVUqygYxv1Ki9nEfZcnEFrs5CGegONYWc_SxUsHZnRanHSfCN2n91Cv3IKhGNmp10oa1d-kj3egKj6Wyup7Vgx55hGV6PmQwtN_-uSaMwb7QXxyKNBWRjfOPWg_xRUZkhVrnNIfpveAUWVr-0GxQ844j4vCXZvKbja0p2da8QcZvH1MovOj3tgMxHQpB4eKa0UCRx1EGOLVLpLrhZb_LbCNLSsFokyYhxfwvjoroDOqmkCxJERX4BEtWRE76bLsezWg"
                />
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur text-[#6e5d27] text-[10px] font-bold uppercase tracking-widest">
                  Public Paid
                </div>
              </div>
              <div>
                <p className="font-label text-[10px] uppercase tracking-widest text-[#6e5d27] mb-2">
                  January 05 • Dubai
                </p>
                <h3 className="font-headline text-2xl text-[#1f1b15] font-semibold mb-3">
                  Global Visionaries Summit
                </h3>
                <p className="font-body text-sm text-[#4b463a] leading-relaxed mb-6">
                  Gathering the world&apos;s most influential thinkers for a weekend
                  of strategic dialogue.
                </p>
                <Link
                  href="#"
                  className="font-label text-xs font-bold uppercase tracking-widest text-[#6e5d27] flex items-center gap-2 group-hover:gap-4 transition-all"
                >
                  View Invitation <IconArrowRight className="text-sm" />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group">
              <div className="aspect-[4/5] bg-[#fcf2e8] mb-6 overflow-hidden relative">
                <img
                  alt="Art Exhibition"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi24U7mh3DjITwfSiWcibDZ-FL7Xs3NfzjiADMBUevDQSbwnHbqWhsQQGbl-9jVYr_LWoK1TtP_JNRQcDXlkXjiKBgH-eOSWZmFXp8hMANpjV5ApyLBa_kp3MPgRdPRvnHiPakuqvPUXWnLjLr9f9YdsfFAiRXSo88gdUBLVWOuWqQ7V8yKeqcfhEm-sdI0sxVdf64TuUCtsUq3Uz4Ldtpm1GY67fq6EsqI68HPS0SGs-JyuG4qPCcrfQYcI3ys7ZYdAam3QMPkHit"
                />
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur text-[#6e5d27] text-[10px] font-bold uppercase tracking-widest">
                  Public Free
                </div>
              </div>
              <div>
                <p className="font-label text-[10px] uppercase tracking-widest text-[#6e5d27] mb-2">
                  January 18 • London
                </p>
                <h3 className="font-headline text-2xl text-[#1f1b15] font-semibold mb-3">
                  Ephemeral Forms Exhibition
                </h3>
                <p className="font-body text-sm text-[#4b463a] leading-relaxed mb-6">
                  An exclusive preview of the season&apos;s most anticipated
                  contemporary sculptures.
                </p>
                <Link
                  href="#"
                  className="font-label text-xs font-bold uppercase tracking-widest text-[#6e5d27] flex items-center gap-2 group-hover:gap-4 transition-all"
                >
                  View Invitation <IconArrowRight className="text-sm" />
                </Link>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group">
              <div className="aspect-[4/5] bg-[#fcf2e8] mb-6 overflow-hidden relative">
                <img
                  alt="Fashion Gala"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP9MjBNzCuKI5jgqn1-QZz0ZmNYLoXeTtmPeOzOdWdK0Ku_-G4MW1H4rUtHK7a2mRaAgSWX7qYO-cpcp6Su9OJ7x305Auy5TCxoJdxkhvOFfNR2HNLI2Sg3qobMt2MP8KKrSEQc_KG_qN4tCCy5Xod-UYMuiAf9iH34Rf9r2ZQjDpVElTg8ZL3ro21My-z60ZZSBcCbhXI4w-wqerz3JIHzHXxPsKHosXoh9gvxpn3fe10eeMYRlXY3DJSw_G68tnL_JxdG8p4SxJk"
                />
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur text-[#6e5d27] text-[10px] font-bold uppercase tracking-widest">
                  Private Paid
                </div>
              </div>
              <div>
                <p className="font-label text-[10px] uppercase tracking-widest text-[#6e5d27] mb-2">
                  February 02 • Paris
                </p>
                <h3 className="font-headline text-2xl text-[#1f1b15] font-semibold mb-3">
                  The Haute Couture Soirée
                </h3>
                <p className="font-body text-sm text-[#4b463a] leading-relaxed mb-6">
                  A private runway experience featuring unseen archives from
                  major luxury houses.
                </p>
                <Link
                  href="#"
                  className="font-label text-xs font-bold uppercase tracking-widest text-[#6e5d27] flex items-center gap-2 group-hover:gap-4 transition-all"
                >
                  View Invitation <IconArrowRight className="text-sm" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpcomingEventsSection;
