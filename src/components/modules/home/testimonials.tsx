import { IconQuote } from "@tabler/icons-react";

const Testimonials = () => {
  return (
    <>
      {/* Testimonials Section */}
      <section className="py-24 px-12 bg-[#fff8f4]">
        <div className="max-w-360 mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-[#6e5d27] mb-4 block">
              Patron Voices
            </span>
            <h2 className="font-headline text-4xl text-[#1f1b15] font-semibold italic">
              Elite Member Reflections
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Testimonial 1 */}
            <div className="p-10 bg-[#ffffff] border border-[#cec6b5]/30 flex flex-col justify-between hover:shadow-xl transition-shadow duration-500">
              <div>
                <IconQuote className="text-[#c8b273] text-4xl mb-6" />
                <p className="font-body text-lg text-[#1f1b15] italic leading-relaxed mb-8">
                  &quot;Festiko has redefined how we approach private hosting.
                  The level of detail and the exclusivity of their network is
                  truly unmatched.&quot;
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#f6ece3] rounded-full overflow-hidden">
                  <div className="w-full h-full bg-[#c8b273]/20 flex items-center justify-center">
                    <span className="font-headline text-[#6e5d27] font-bold">
                      AL
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="font-headline font-bold text-[#1f1b15] text-sm">
                    Adrian Laurent
                  </h4>
                  <p className="font-label text-[10px] uppercase tracking-widest text-[#6e5d27]">
                    Platinum Member
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-10 bg-[#2F2A24] text-[#ffffff] flex flex-col justify-between shadow-2xl">
              <div>
                <IconQuote className="text-[#c8b273] text-4xl mb-6" />
                <p className="font-body text-lg text-[#fcf2e8] italic leading-relaxed mb-8">
                  &quot;An indispensable partner for our global summits. Their
                  digital infrastructure makes managing complex guest lists
                  effortless and elegant.&quot;
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#ffffff]/10 rounded-full overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-headline text-[#c8b273] font-bold">
                      SV
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="font-headline font-bold text-[#c8b273] text-sm">
                    Sofia Volkov
                  </h4>
                  <p className="font-label text-[10px] uppercase tracking-widest text-[#fcf2e8]/60">
                    Executive Patron
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="p-10 bg-[#ffffff] border border-[#cec6b5]/30 flex flex-col justify-between hover:shadow-xl transition-shadow duration-500">
              <div>
                <IconQuote className="text-[#c8b273] text-4xl mb-6" />
                <p className="font-body text-lg text-[#1f1b15] italic leading-relaxed mb-8">
                  &quot;Every invitation feels like a curated gift. Festiko
                  captures the essence of luxury in a way that feels personal
                  and profound.&quot;
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#f6ece3] rounded-full overflow-hidden">
                  <div className="w-full h-full bg-[#c8b273]/20 flex items-center justify-center">
                    <span className="font-headline text-[#6e5d27] font-bold">
                      EC
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="font-headline font-bold text-[#1f1b15] text-sm">
                    Elena Conti
                  </h4>
                  <p className="font-label text-[10px] uppercase tracking-widest text-[#6e5d27]">
                    Founding Member
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
