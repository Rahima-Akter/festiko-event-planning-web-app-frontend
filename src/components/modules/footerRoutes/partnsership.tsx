/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  IconStar,
  IconDiamond,
  IconWorld,
  IconChartBar,
  IconHeadset,
  IconRosetteDiscountCheckFilled,
} from "@tabler/icons-react";
import Image from "next/image";
import { useRef } from "react";
import { toast } from "sonner";

const Partnership = () => {
  const formRef: any = useRef(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // fake success
    toast.success("Form Submitted successfully");

    // reset form
    formRef.current?.reset();
  };
  return (
    <main className="bg-[#2F2A24] text-[#fcf2e8] font-body selection:bg-[#c8b273] selection:text-[#231b00]">
      {/* Hero Section */}
      <section className="relative min-h-130 flex items-center overflow-hidden bg-[#2F2A24]">
        <div className="absolute inset-0 z-0">
          <Image
            fill
            alt=""
            className="w-full h-full object-cover opacity-90"
            data-alt="A grand ballroom prepared for a high-stakes luxury gala"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMqarch49fBXRI4lzn55bPHMsLO_4i4zlYuC_YAHMx70Y1aYe6suRRiiuegobawRcjrkoPoU4BwtzFOEmemSHWHgi_eNl0AyCTfbpPf4vvZDiA7piI-YosV7FHdM87wyg_ICld5n0tXJog-xAH5oK9fL0hIIJ9RMmKv4uPSfv_ippYS1KGvjSKOTltAlS4VFNh0WpBisOzEiw12vOOtG2Hu30Jw5aV2t7X30fZqHh89qlzLorXko-Zq1Lqba0AZgEBt0JONFweQnW5"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#2F2A24] via-[#2F2A24]/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full text-center md:text-left md:pt-16 lg:pl-10">
          <div className="max-w-2xl mx-auto md:mx-0">
            <span className="inline-block text-[#c8b273] tracking-[0.3em] uppercase text-xs lg:pl-2">
              The Digital Concierge Partnership
            </span>

            <h1 className="text-5xl md:text-7xl text-[#c8b273] font-bold mb-3">
              Curating with Excellence
            </h1>

            <p className="text-[#aba087] text-lg md:text-xl leading-relaxed mb-5 brightness-125">
              We invite world-class vendors and luxury artisans <br /> to join
              the Festiko ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pt-24 bg-[#2F2A24] px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5 flex flex-col justify-center">
            <h2 className="text-4xl text-[#c8b273] mb-6 italic">
              Exclusivity by Design
            </h2>
            <p className="text-[#b6ab92] text-lg">
              Festiko Grand is more than a platform; it is a meticulously
              curated gallery of experiences. We provide our partners with the
              infrastructure to scale excellence.
            </p>
          </div>

          <div className="md:col-span-7 bg-[#353029] p-12 rounded-xl border border-[#c8b273]/10 relative overflow-hidden">
            <IconStar className="text-[#6e5d27] mb-6" />
            <h3 className="text-2xl text-[#c8b273] mb-4">
              Elite Clientele Access
            </h3>
            <p className="text-[#b6ab92]">
              Gain direct exposure to a verified network of high-net-worth{" "}
              <br /> individuals and global corporate entities seeking bespoke
              event solutions.
            </p>

            <div className="absolute right-0 top-0 opacity-10">
              <IconDiamond size={180} />
            </div>
          </div>

          <div className="md:col-span-6 bg-[#1f1b15] p-12 rounded-xl border border-[#c8b273]/10">
            <IconWorld className="text-[#c8b273] mb-6" />
            <h3 className="text-2xl text-[#c8b273] mb-4">
              Global Logistics Support
            </h3>
            <p className="text-[#b6ab92]">
              Our integrated supply chain and logistics experts handle the
              complexities of international events, allowing you to focus on
              your craft.
            </p>
          </div>

          <div className="md:col-span-6 bg-[#3d3831] p-12 rounded-xl border border-[#c8b273]/10">
            <IconChartBar className="text-[#6e5d27] mb-6" />
            <h3 className="text-2xl text-[#c8b273] mb-4">
              Market Intelligence
            </h3>
            <p className="text-[#b6ab92]">
              Access proprietary data insights on luxury market trends, spending
              patterns, and seasonal demand to optimize your offerings.
            </p>
          </div>
        </div>
      </section>

      {/* Inquiry Section */}
      <section id="inquiry" className="py-24 bg-[#2F2A24] px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 md:gap-20 gap-10">
          <div>
            <h2 className="text-5xl text-[#c8b273] md:mb-2 mb-8">
              Professional Inquiry
            </h2>
            <p className="text-[#b6ab92] text-lg mb-12">
              Begin your journey into the Festiko ecosystem. Our partnership
              team reviews each application to ensure alignment with our
              standards of excellence.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <IconRosetteDiscountCheckFilled className="text-[#c8b273]" />
                <div>
                  <h4 className="text-[#c8b273]">Vetting Process</h4>
                  <p className="text-[#4b463a] text-sm">
                    48-hour response time for qualified brands.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <IconHeadset className="text-[#c8b273]" />
                <div>
                  <h4 className="text-[#c8b273]">Dedicated Manager</h4>
                  <p className="text-[#4b463a] text-sm">
                    Personal concierge support for partners.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-[#353029] md:p-10 p-5 rounded-xl border border-[#c8b273]/10 space-y-6"
          >
            <input
              className="w-full p-4 bg-[#3d3831] text-[#fcf2e8] rounded-lg"
              placeholder="Company Name"
            />
            <input
              className="w-full p-4 bg-[#3d3831] text-[#fcf2e8] rounded-lg"
              placeholder="Email"
            />
            <textarea
              className="w-full p-4 bg-[#3d3831] text-[#fcf2e8] rounded-lg"
              rows={4}
              placeholder="Partnership Intent"
            />

            <button className="w-full bg-[#6e5d27] text-[#ffffff] py-4 rounded-lg uppercase tracking-widest cursor-pointer">
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Partnership;
