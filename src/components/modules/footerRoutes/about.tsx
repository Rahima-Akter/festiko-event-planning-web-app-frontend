import { IconEdit, IconDiamond, IconShield } from "@tabler/icons-react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      {/* Main */}
      <main className="lg:-mt-20 bg-[#2F2A24]">
        {/* Hero Section */}
        <section className="relative lg:min-h-200 md:min-h-150 min-h-140 flex items-center px-8 md:px-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              className="w-full h-full object-cover opacity-40"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEwNouYlP2XGq4Vj7Zey8G03Tyx04LNEDfNztmVK8UmhzTiybDlnNihr0SUcxPoDhv1IdOORYpHuhMPo-MV2Qq-NRdmNbhtpGOT_B9v9A4uNCm94TUSSgE4NGPg7csJMRnrbv4vZ80w7I3_pBRlGeQIiBo3tQvLcTCoV09paGGQUJXAUujaAvdNpO5lY1hONrtrNj56mLIIJwU647z82lQUd7g-Xi_xyyTG1T69MLW9aDYwmBrN4e8v3xDWN633EZvV5EUaq7JPGwo"
              width={100}
              height={100}
              alt=""
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#2F2A24] via-[#2F2A24]/80 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-3xl">
            <span className="font-label text-[#c8b273] text-sm uppercase tracking-[0.3em] block">
              Our Essence
            </span>
            <h1 className="font-display text-5xl md:text-8xl text-[#ffffff] mb-6">
              The Art of <br />
              <span className="italic text-[#c8b273]">Discernment</span>
            </h1>
            <p className="text-[#fcf2e8] text-lg md:text-xl leading-relaxed font-body max-w-xl opacity-90">
              In a world of noise, we curate silence. At Festiko Grand, we
              believe true luxury isn&apos;t found in excess, but in the precise
              selection of moments that resonate.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-32 px-8 md:px-24 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="relative p-1">
              <Image
                className="rounded-lg shadow-2xl relative z-10 w-full h-auto"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW0t9mVl0K6XDlmSCe8qrf0PLJA1IrXCi3jGGDy_g-brpP8X3P3qL1ux_o6BP7ODy-I_pn8vz6dABDqwbUwiYWFiTpGWx6b5MjoTmA7tihvKYU01UdOKkL0uUiDEym1qcQcdhEPlfO9H9KGtJDsg1BK1YMhSH6kSmJM1qqEU_ZfQqP2OIc40VzwKAcutY6n_YxuElA-P9MNz9JPk9Rsf-futTFRymLDIkAL4qKC5XdG2hPFKysTwOfw2Sj2lqzQWRzmEQEFQ5a-WGu"
                width={100}
                height={100}
                alt=""
              />
              <div className="absolute -top-8 -left-8 w-48 h-48 border border-[#c8b273]/20 -z-10"></div>
            </div>
          </div>
          <div className="md:col-span-7 order-1 md:order-2 space-y-8">
            <h2 className="font-display text-4xl text-[#ffffff] border-l-4 border-[#c8b273] pl-6 py-2">
              Elite Event Curation
            </h2>
            <div className="space-y-6 text-[#ebe1d7]/80 text-lg leading-loose font-body">
              <p>
                Born from a legacy of hosting heads of state and cultural icons,
                Festiko Grand emerged as the answer to a growing need for
                invisible excellence. We don&apos;t just plan events; we
                architect legacies.
              </p>
              <p>
                Every fabric choice, every lighting cue, and every culinary note
                is meticulously weighed against our standards of excellence. Our
                curators treat each gathering as a masterpiece, ensuring that
                the host&apos;s vision is not just met, but elevated into an
                unforgettable sensory journey.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-32 px-8 lg:px-24 md:px-10 bg-[#26221d]">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl text-[#ffffff] mb-4">
              The Digital Concierge
            </h2>
            <p className="font-label text-[#c8b273] text-xs uppercase tracking-widest">
              A Modern Philosophy of Service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="md:col-span-2 bg-[#353029] md:p-12 p-9 rounded-xl border border-[#cec6b5]/10 flex flex-col justify-between group hover:border-[#c8b273]/40 transition-all duration-500">
              <div>
                <IconEdit className="text-[#c8b273] w-10 h-10 mb-8" />
                <h3 className="font-display text-3xl text-[#ffffff] mb-6 italic">
                  Seamless Orchestration
                </h3>
                <p className="text-[#ebe1d7]/60 text-lg leading-relaxed mb-12">
                  Our proprietary technology acts as a silent partner, managing
                  the intricate dance of logistics behind a veil of absolute
                  serenity. We replace the stress of coordination with the ease
                  of intuition.
                </p>
              </div>
              <div className="h-64 rounded-lg overflow-hidden relative">
                <Image
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3nSV8aO3Yorwi9LiFSl-Dr09Yx1pnqzk3kBx92IxRqCH3GHW92m3QJMSjEbYPdtyp4b48UaCf-O-gGNqEbrZNUXAWtE9A0ABIwsjjXqC0VPZ0E3knVIcfrCX_3AOey_G6IozmdHX8CzVXAiNpbcKKET9n4ebSa2sjbacL5rPeGCgsJ8Kaz3zQFJKC9DJWIAFHF8pJM-VMaUZahcY2nRxIpPi5mWhXMnLl-R-Z0vPAEAYj3eKIcdxW9CYHhaUiMq992dIgFWcvJtkd"
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#c8b273] p-12 rounded-xl flex flex-col justify-center items-center text-center space-y-8">
              <IconShield className="text-[#534410] w-16 h-16" />
              <h3 className="font-display text-2xl text-[#534410] font-bold">
                Unrivaled Privacy
              </h3>
              <p className="text-[#534410]/80 font-body">
                In an era of over-sharing, your discretion is our highest
                priority. We operate with the confidentiality of a private bank
                and the grace of a grand hotel.
              </p>
              <div className="pt-4 border-t border-[#534410]/20 w-full font-label text-xs tracking-widest uppercase text-[#534410]">
                Secure &amp; Bespoke
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#353029] p-12 rounded-xl border border-[#cec6b5]/10 group hover:bg-[#3d382f] transition-all duration-500">
              <IconDiamond className="text-[#c8b273] w-10 h-10 mb-6" />
              <h3 className="font-display text-2xl text-[#ffffff] mb-4">
                Bespoke Access
              </h3>
              <p className="text-[#ebe1d7]/60 font-body">
                Gain entry to the world&apos;s most guarded venues and
                sought-after artisans. Our network is built on decades of trust.
              </p>
            </div>

            {/* Card 4 */}
            <div className="md:col-span-2 relative overflow-hidden rounded-xl h-80">
              <Image
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7fXsBpt9sgjI2N7SRrUd6hUlleYLFqWoK92X77qEO8Vee_HorL2Kd2bKtpFE9B4YmAqh-l3U0zC_kpCOMCMTK0OE-Ty-lM2eenrqEZ1FTM3tu9TSn3oWVCgL2i9MBUTpV_8XzdhGeAC5ptHDQBELZgikHxoWejKRl_VAexg5TJN7QnwBAH8fmgQq4ibMcESqpfs1JAVTtLl-W6YyrggA3teZcHz_RTaryso8983lLqMBTqAsdmPQvjMg7nN0cXxsNAXE_mKFQekbn"
                width={100}
                height={100}
                alt=""
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h4 className="font-display text-3xl text-[#ffffff] tracking-[0.2em] uppercase pl-5 md:pl-0">
                  The Global Gallery
                </h4>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment */}
        <section className="py-32 px-8 md:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-5xl text-[#ffffff] mb-12">
              Commitment to Excellence
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="text-[#c8b273] font-display text-4xl italic">
                  99%
                </div>
                <p className="font-label text-[#ebe1d7]/60 text-xs tracking-widest uppercase">
                  Retention of Elite Partners
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-[#c8b273] font-display text-4xl italic">
                  14
                </div>
                <p className="font-label text-[#ebe1d7]/60 text-xs tracking-widest uppercase">
                  Global Design Awards
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-[#c8b273] font-display text-4xl italic">
                  ∞
                </div>
                <p className="font-label text-[#ebe1d7]/60 text-xs tracking-widest uppercase">
                  Unwavering Standards
                </p>
              </div>
            </div>

            <div className="mt-20 p-12 bg-[#fcf2e8] rounded-lg glass-overlay">
              <p className="font-display text-2xl text-[#c8b273] italic mb-6">
                &apos;Perfection is not the goal; it is our baseline.
                Discernment is the filter that allows us to find beauty in the
                details others overlook.&apos;
              </p>
              <cite className="font-label text-[#ffffff] text-sm tracking-[0.2em] uppercase">
                — Director of Curation
              </cite>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutUs;
