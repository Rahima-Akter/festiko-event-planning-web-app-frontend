import { IconPencil, IconSparkles, IconConfetti } from "@tabler/icons-react";

const HowItWorks = () => {
  return (
    <section className="py-24 px-12 bg-[#2F2A24] text-[#ffffff]">
      <div className="max-w-360 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl text-[#c8b273] font-semibold mb-4 italic">
            The Journey to Excellence
          </h2>
          <p className="font-body text-[#fcf2e8]/60 max-w-2xl mx-auto">
            Our streamlined digital concierge process ensures every detail of
            your event is handled with unparalleled precision.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px bg-[#c8b273]/20"></div>

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center relative z-10">
            <div className="w-24 h-24 rounded-full bg-[#353029] border border-[#c8b273]/30 flex items-center justify-center mb-8 shadow-2xl">
              <IconPencil className="text-[#c8b273] text-4xl" />
            </div>
            <h3 className="font-headline text-2xl font-bold text-[#c8b273] mb-4">
              The Inquiry
            </h3>
            <p className="font-body text-[#fcf2e8]/60 text-sm leading-relaxed">
              Submit your vision through our private portal. Our specialists
              review your unique requirements to establish a bespoke framework.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center relative z-10">
            <div className="w-24 h-24 rounded-full bg-[#353029] border border-[#c8b273]/30 flex items-center justify-center mb-8 shadow-2xl">
              <IconSparkles className="text-[#c8b273] text-4xl" />
            </div>
            <h3 className="font-headline text-2xl font-bold text-[#c8b273] mb-4">
              The Curation
            </h3>
            <p className="font-body text-[#fcf2e8]/60 text-sm leading-relaxed">
              We select premier venues and artisans, orchestrating a tailored
              proposal that aligns perfectly with your aesthetic and logistical
              needs.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center relative z-10">
            <div className="w-24 h-24 rounded-full bg-[#353029] border border-[#c8b273]/30 flex items-center justify-center mb-8 shadow-2xl">
              <IconConfetti className="text-[#c8b273] text-4xl" />
            </div>
            <h3 className="font-headline text-2xl font-bold text-[#c8b273] mb-4">
              The Experience
            </h3>
            <p className="font-body text-[#fcf2e8]/60 text-sm leading-relaxed">
              Seamless execution on the day of your event. From guest reception
              to final closing, our digital concierge monitors every touchpoint.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
