import { IconCookie, IconArrowRight } from "@tabler/icons-react";

const CoockiePolicy = () => {
  return (
    <main className="grow pt-24 pb-24 px-8 w-full bg-[#2F2A24] text-[#fcf2e8]">
      <header className="mb-20 text-center pt-10">
        <p className="font-label text-[#C8B273] text-sm uppercase tracking-[0.2em] mb-4">
          Privacy &amp; Security
        </p>

        <h1 className="font-display text-5xl md:text-7xl font-bold text-[#C8B273] tracking-tighter mb-8 leading-">
          A Seamless Digital <br className="hidden md:block" /> Experience
        </h1>

        <div className="w-24 h-1 bg-[#C8B273] mx-auto mb-8"></div>

        <p className="font-body text-lg text-[#cec6b5] max-w-2xl mx-auto leading-relaxed">
          At Festiko Grand, our digital presence is designed to be as intuitive
          and refined as our concierge services. We utilize cookies to recognize
          your preferences and tailor our platform to your exquisite standards.
        </p>
      </header>

      {/* Content Section with Tonal Layering */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start max-w-4xl mx-auto">
        <div className="md:col-span-8 space-y-12">
          <div className="bg-[#353029] p-10 rounded-xl border border-[#4b463a]/30">
            <h2 className="text-2xl font-bold mb-6 text-[#C8B273]">
              Personalizing the Concierge
            </h2>

            <p className="text-[#cec6b5] leading-loose mb-6">
              To deliver a bespoke event management journey, we require a
              refined understanding of your interactions. Cookies allow us to
              maintain your secure session, remember your selected venues, and
              ensure that the luxury experience remains uninterrupted from
              desktop to mobile.
            </p>

            <p className="text-[#cec6b5] leading-loose">
              We treat your data with the same discretion as we would an
              exclusive guest list. Below is a detailed breakdown of the
              technologies we employ to sustain this environment.
            </p>
          </div>

          {/* Cookie Table */}
          <div className="overflow-hidden">
            <h3 className="text-xl font-bold mb-8 px-2 text-[#C8B273]">
              Detailed Cookie Inventory
            </h3>

            <div className="bg-[#25211c] rounded-xl overflow-hidden border border-[#4b463a]/30">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#353029] text-[#C8B273]">
                    <th className="py-4 px-6 text-xs uppercase tracking-widest">
                      Classification
                    </th>
                    <th className="py-4 px-6 text-xs uppercase tracking-widest">
                      Purpose & Function
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-[#4b463a]/30">
                  <tr className="hover:bg-[#453f36] transition-colors">
                    <td className="py-6 px-6 font-bold text-[#C8B273] align-top">
                      Essential
                    </td>
                    <td className="py-6 md:px-6 px-2 text-[#cec6b5] leading-relaxed">
                      Crucial for secure authentication and session stability.
                    </td>
                  </tr>

                  <tr className="hover:bg-[#453f36] transition-colors">
                    <td className="py-6 px-6 font-bold text-[#C8B273] align-top">
                      Preferences
                    </td>
                    <td className="py-6 md:px-6 px-2 text-[#cec6b5] leading-relaxed">
                      Remembers aesthetic choices and browsing preferences.
                    </td>
                  </tr>

                  <tr className="hover:bg-[#453f36] transition-colors">
                    <td className="py-6 px-6 font-bold text-[#C8B273] align-top">
                      Analytics
                    </td>
                    <td className="py-6 md:px-6 px-2 text-[#cec6b5] leading-relaxed">
                      Anonymous usage insights to refine platform experience.
                    </td>
                  </tr>

                  <tr className="hover:bg-[#453f36] transition-colors">
                    <td className="py-6 px-6 font-bold text-[#C8B273] align-top">
                      Curated Content
                    </td>
                    <td className="py-6 md:px-6 px-2 text-[#cec6b5] leading-relaxed">
                      Personalized recommendations based on engagement patterns.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="md:col-span-4 space-y-8">
          <div className="bg-[#353029] p-8 rounded-xl relative overflow-hidden border border-[#4b463a]/30">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <IconCookie className="w-32 h-32 text-[#C8B273]" />
            </div>

            <h4 className="text-xl mb-4 text-[#C8B273]">Managing Consent</h4>

            <p className="text-sm text-[#cec6b5] mb-6 leading-relaxed">
              You can control cookie preferences through your browser settings.
              Disabling certain cookies may affect platform functionality.
            </p>

            <button className="w-full py-3 bg-[#C8B273] text-[#2F2A24] font-bold text-xs uppercase tracking-widest rounded hover:bg-[#efe1c4] transition-colors">
              Privacy Dashboard
            </button>
          </div>

          <div className="p-8 border border-[#4b463a]/30 rounded-xl bg-[#25211c]/50">
            <h4 className="text-lg mb-4 text-[#C8B273]">Need Clarification?</h4>

            <p className="text-sm text-[#cec6b5] mb-6">
              Our compliance team is available to assist with any questions.
            </p>

            <a
              href="#"
              className="text-xs uppercase tracking-widest text-[#C8B273] font-bold flex items-center gap-2 hover:gap-4 transition-all"
            >
              Email Compliance Office
              <IconArrowRight className="w-4 h-4" />
            </a>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default CoockiePolicy;
