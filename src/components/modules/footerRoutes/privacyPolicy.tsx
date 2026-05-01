import {
  IconDatabase,
  IconLock,
  IconDownload,
  IconFileAnalytics,
} from "@tabler/icons-react";
import Image from "next/image";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#2F2A24] text-[#C8B273] selection:bg-[#c8b273] selection:text-[#534410] min-h-screen">
      <main className="pt-24 pb-24 px-8 max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="mb-20 text-center">
          <span className="font-label text-xs uppercase tracking-[0.2em] text-[#C8B273] mb-4 block">
            Legal Framework
          </span>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#C8B273] mb-8 leading-[1.1]">
            The Protocol of Privacy
          </h1>

          <div className="w-24 h-1 bg-[#c8b273] mx-auto mb-8"></div>

          <p className="text-[#C8B273] text-lg max-w-2xl mx-auto leading-relaxed">
            At Festiko Grand, discretion is our foundation. This protocol
            outlines how we safeguard the digital integrity of our distinguished
            clientele and their events.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-16">
          {/* Data Collection */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4 bg-[#353029] p-10 rounded-xl flex flex-col justify-between border border-[#C8B273]/10">
              <div className="mb-8">
                <IconFileAnalytics className="text-[#C8B273] w-10 h-10 mb-4" />
                <h2 className="text-3xl text-[#C8B273] font-bold tracking-tight">
                  Data Collection
                </h2>
              </div>
              <p className="text-[#C8B273]/70 text-sm font-label uppercase tracking-widest">
                Section 01
              </p>
            </div>

            <div className="md:col-span-8 bg-[#3a342d] p-10 rounded-xl border border-[#C8B273]/5">
              <p className="text-[#C8B273] leading-relaxed mb-6">
                We collect only the most essential information required to
                orchestrate world-class event experiences. This includes curated
                personal profiles, preference data, and technical identifiers
                necessary for platform stability.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#C8B273] mt-1">✓</span>
                  <span className="text-[#C8B273]">
                    Identity verification and professional credentials.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#C8B273] mt-1">✓</span>
                  <span className="text-[#C8B273]">
                    Event-specific logistical requirements and dietary
                    preferences.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-[#C8B273] mt-1">✓</span>
                  <span className="text-[#C8B273]">
                    Secure communication history for white-glove support.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Usage of Information */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 bg-[#3a342d] p-10 rounded-xl border border-[#C8B273]/5 order-2 md:order-1">
              <p className="text-[#C8B273] leading-relaxed mb-6">
                Your information is used strictly to enhance the personalization
                and execution of your luxury gatherings. We do not engage in
                data brokerage or secondary market sharing.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-[#2F2A24] border border-[#C8B273]/10 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Service Excellence</h3>
                  <p className="text-sm text-[#C8B273]/80">
                    Tailoring event logistics to meet your unique lifestyle and
                    professional demands.
                  </p>
                </div>

                <div className="p-6 bg-[#2F2A24] border border-[#C8B273]/10 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Communication</h3>
                  <p className="text-sm text-[#C8B273]/80">
                    Direct, encrypted updates regarding your upcoming
                    itineraries and venue access.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 bg-[#353029] p-10 rounded-xl flex flex-col justify-between border border-[#C8B273]/10 order-1 md:order-2">
              <div className="mb-8">
                <IconDatabase className="text-[#C8B273] w-10 h-10 mb-4" />
                <h2 className="text-3xl text-[#C8B273] font-bold tracking-tight">
                  Usage of Info
                </h2>
              </div>
              <p className="text-[#C8B273]/70 text-sm font-label uppercase tracking-widest">
                Section 02
              </p>
            </div>
          </section>

          {/* Encryption */}
          <section className="relative overflow-hidden bg-[#353029] border border-[#C8B273]/20 rounded-xl p-12 text-center">
            <div className="relative z-10">
              <IconLock className="text-[#C8B273] w-12 h-12 mx-auto mb-6" />

              <h2 className="text-4xl text-[#C8B273] font-bold mb-6">
                Tier-1 Encryption
              </h2>

              <p className="text-[#C8B273] max-w-3xl mx-auto text-lg leading-relaxed mb-10">
                Our security architecture utilizes AES-256 bit encryption at
                rest and TLS 1.3 for all data in transit. We maintain a
                zero-knowledge infrastructure policy for sensitive event
                communications.
              </p>

              <div className="inline-flex items-center gap-4 px-8 py-4 border border-[#C8B273]/30 rounded-full text-[#C8B273] font-label text-sm tracking-widest">
                <span>SECURITY PROTOCOLS ACTIVE</span>
              </div>
            </div>

            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#C8B273] via-transparent to-transparent"></div>
          </section>

          {/* Image Section */}
          <section className="py-8">
            <div className="relative h-100 rounded-xl overflow-hidden border border-[#C8B273]/20">
              <Image
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxHZWyoVzuaMQX5Qw4RdbiJtADPrWPZAqet2q6ewXUEU--t3ZIPW3CrUV6_DVcD66uXoGTQJFUjmDjjQVJCj7aDq5nn01sP5NX7G1Ze3jeEvVp29oVa0vAlMXq_iK6nxAQK35DA2Cf9T1tSfaQYNjoROVffTfNIsR0yxIPeWx439OIODtxLOYHZpWgJDNowPv8kSKoGBfFXdNrDplV-0Eq1ThXzljsDPOk6SUPqa778Ys7T_JVbCAWbNM7EjGy-0kUyC-vjky4O9bO"
                fill
                alt=""
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#2F2A24] via-transparent to-transparent"></div>
            </div>
          </section>

          {/* Final */}
          <section className="max-w-3xl mx-auto text-center border-t border-[#C8B273]/20 pt-10">
            <h3 className="text-2xl font-serif mb-4">
              Your Trust is Our Heritage
            </h3>

            <p className="text-[#C8B273] leading-relaxed mb-8">
              By utilizing Festiko Grand, you entrust us with your most valuable
              asset: your privacy.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
