import {
  IconShieldCheck,
  IconGavel,
  IconStar,
  IconMail,
} from "@tabler/icons-react";
import Image from "next/image";

const TermsOfService = () => {
  return (
    <div className="bg-[#2f2a24] text-[#fcf2e8] antialiased">
      <main className="pt-0">

        {/* Hero Section */}
        <section className="relative lg:h-130 lg:pt-10 h-153 flex items-center overflow-hidden bg-[#1f1b15]">
          <div className="absolute inset-0 opacity-40">
            <Image
              className="w-full h-full object-cover"
              fill
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgRxvUXGfnf2IJWnHY3i_xncPVmj8gcmvcCcC4QM-yOhSERex_K02K_UewTP7wjUrmzsyCNhIg3Hc1TfUjx0EAvLSxWWOxqOuiUf_pQ_BJ0RMlf3r9tzFRoEuP8bj8XnTC_0rXgnS99L1I5cUyjq7IHnQplL6_aN6GzNNctljQL-qGbDDYIORy1vOd3G9pMb1FbyGnIl5OaN0FU4-QfmYweNKLeMZYw5zF0nn7dU2MMAZcDixLj8xo9BZSb4u_Ly6RT46QqzdrIVQ-"
              alt=""
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-8 w-full lg:pl-20">
            <div className="max-w-2xl">

              <span className="text-[#c8b273] font-label text-sm uppercase block">
                Terms of Service
              </span>

              <h1 className="text-5xl md:text-7xl font-bold text-[#fcf2e8] leading-tight tracking-tighter mb-6">
                The Rules of <br />
                <span className="italic text-[#c8b273]">Engagement</span>
              </h1>

              <p className="text-[#ebe1d7]/80 text-lg max-w-md font-light leading-relaxed">
                A commitment to excellence, decorum, and the preservation of grandeur within the Festiko ecosystem.
              </p>

            </div>
          </div>

          <div className="absolute bottom-0 right-0 p-8">
            <div className="w-32 h-32 border-t border-r border-[#c8b273] opacity-30"></div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="max-w-4xl mx-auto px-8 py-24">

          <div className="space-y-24">

            {/* Section 1 */}
            <article>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-[#c8b273] font-serif text-3xl">01</span>
                <h2 className="text-3xl font-bold text-[#fcf2e8] tracking-tight">
                  Agreement to Terms
                </h2>
              </div>

              <div className="bg-[#ebe1d7]/5 p-8 rounded-lg space-y-6 border-l-4 border-[#c8b273]">

                <p className="text-[#ebe1d7] leading-relaxed text-lg">
                  By accessing or using the Festiko Grand platform, you acknowledge these legal mandates.
                </p>

                <p className="text-[#ebe1d7]/60 italic">
                  Last Updated: October 24, 2024
                </p>

              </div>
            </article>

            {/* Section 2 */}
            <article>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-[#c8b273] font-serif text-3xl">02</span>
                <h2 className="text-3xl font-bold text-[#fcf2e8] tracking-tight">
                  User Conduct
                </h2>
              </div>

              <div className="space-y-8">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  <div className="bg-[#ebe1d7]/5 p-6 rounded hover:bg-[#ebe1d7]/10 transition-all">
                    <IconShieldCheck className="text-[#6e5d27] mb-4" />
                    <h3 className="text-[#ebe1d7] text-lg font-bold mb-2">
                      Integrity
                    </h3>
                    <p className="text-[#ebe1d7]/80 text-sm">
                      Users must maintain high decorum standards.
                    </p>
                  </div>

                  <div className="bg-[#ebe1d7]/5 p-6 rounded hover:bg-[#ebe1d7]/10 transition-all">
                    <IconGavel className="text-[#6e5d27] mb-4" />
                    <h3 className="text-[#ebe1d7] text-lg font-bold mb-2">
                      Lawful Use
                    </h3>
                    <p className="text-[#ebe1d7]/80 text-sm">
                      All activities must comply with regulations.
                    </p>
                  </div>

                </div>

                <p className="text-[#ebe1d7] leading-relaxed">
                  We reserve the right to revoke access for violations.
                </p>

              </div>
            </article>

            {/* Section 3 */}
            <article>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-[#c8b273] font-serif text-3xl">03</span>
                <h2 className="text-3xl font-bold text-[#fcf2e8] tracking-tight">
                  Event Hosting Guidelines
                </h2>
              </div>

              <div className="relative overflow-hidden bg-[#1f1b15] p-12 rounded-xl">

                <div className="absolute top-0 right-0 opacity-10">
                  <IconStar className="text-[#fcf2e8] w-40 h-40" />
                </div>

                <ul className="space-y-6 relative z-10">

                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c8b273] mt-2" />
                    <p className="text-[#ebe1d7]">
                      <strong className="text-[#fcf2e8] block mb-1">
                        Quality Assurance:
                      </strong>
                      Events must meet platform standards.
                    </p>
                  </li>

                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c8b273] mt-2" />
                    <p className="text-[#ebe1d7]">
                      <strong className="text-[#fcf2e8] block mb-1">
                        Safety Protocols:
                      </strong>
                      Hosts are responsible for venue safety.
                    </p>
                  </li>

                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c8b273] mt-2" />
                    <p className="text-[#ebe1d7]">
                      <strong className="text-[#fcf2e8] block mb-1">
                        Capacity:
                      </strong>
                      Limits are non-negotiable.
                    </p>
                  </li>

                </ul>

              </div>
            </article>

            {/* Section 4 */}
            <article>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-[#c8b273] font-serif text-3xl">04</span>
                <h2 className="text-3xl font-bold text-[#fcf2e8] tracking-tight">
                  Payment Terms
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div className="p-8 bg-[#ebe1d7]/5 rounded-lg">
                  <h4 className="text-[#ebe1d7] font-bold uppercase text-sm mb-4">
                    Transaction Fees
                  </h4>
                  <p className="text-[#ebe1d7]/80 text-sm">
                    A standard commission applies to all bookings.
                  </p>
                </div>

                <div className="p-8 bg-[#ebe1d7]/5 rounded-lg">
                  <h4 className="text-[#ebe1d7] font-bold uppercase text-sm mb-4">
                    Refund Policy
                  </h4>
                  <p className="text-[#ebe1d7]/80 text-sm">
                    Refunds available up to 14 days prior.
                  </p>
                </div>

              </div>
            </article>

            {/* Contact */}
            <div className="pt-12">
              <div className="bg-[#c8b273]/10 border border-[#c8b273]/20 p-12 rounded-lg text-center">

                <h3 className="text-2xl font-serif text-[#c8b273] mb-4">
                  Legal Inquiry
                </h3>

                <p className="text-[#ebe1d7]/70 mb-8 max-w-md mx-auto">
                  Contact our legal department for clarification.
                </p>

                <a
                  href="mailto:legal@festiko.grand"
                  className="inline-flex items-center gap-2 bg-[#c8b273] text-[#231b00] px-8 py-3 font-bold uppercase tracking-widest text-sm"
                >
                  <IconMail size={18} />
                  Contact Counsel
                </a>

              </div>
            </div>

          </div>

        </section>

      </main>
    </div>
  );
};

export default TermsOfService;