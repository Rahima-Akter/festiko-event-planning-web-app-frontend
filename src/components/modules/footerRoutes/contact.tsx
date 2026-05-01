/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconClock,
} from "@tabler/icons-react";
import Image from "next/image";
import { useRef } from "react";
import { toast } from "sonner";

const ContactUs = () => {
  const formRef: any = useRef(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // fake success
    toast.success("Message sent successfully!");

    // reset form
    formRef.current?.reset();
  };
  return (
    <>
      {/* Main */}
      <div className="bg-[#2F2A24] text-[#fcf2e8] font-body selection:bg-[#c8b273] selection:text-[#534410]">
        <main className="min-h-screen">
          {/* Hero Section */}
          <section className="relative bg-[#2F2A24] py-24 overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <Image
                className="w-full h-full object-cover grayscale"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMpb_vDM0CEPbd7N38wlCsfA-2fEn6WqSLUC1W9arJCiO2ydm8q0OLC4A7mL9b0_mT6KxtEWpTSFugrjgDr0fWfbT385c-sefKfcTF6SE-W4tMIbKmE7LxhfQls5GSXLmetfOhIyiIhCTbgNh9pblabHOcjhXsh31XBVhugnRb6g4sovzbTmbZN9OSpKMuYU6c7stlRfy-iinYNrm95oNOASt2TZX2ietZ4jAl8mt7znUUmUfV7QebTjh8KoGVBvnpLWK6J_IOOAA8"
                width={100}
                height={100}
                alt=""
              />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                {/* Left Column */}
                <div className="lg:col-span-5 space-y-12">
                  <div className="space-y-4">
                    <h1 className="font-display text-5xl md:text-7xl text-[#C8B273]">
                      Connect with the <br />
                      Concierge
                    </h1>

                    <p className="text-[#efe1c4] opacity-80 text-lg max-w-md font-light leading-relaxed">
                      Our bespoke event management team is at your disposal to
                      transform your vision into an unparalleled reality.
                    </p>
                  </div>

                  <div className="space-y-8 pt-8">
                    {/* Email */}
                    <div className="group flex items-start gap-6">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#C8B273]/10 border border-[#C8B273]/20 group-hover:bg-[#C8B273]/20 transition-all">
                        <IconMail className="text-[#C8B273]" size={20} />
                      </div>
                      <div>
                        <h3 className="font-label text-xs uppercase tracking-[0.2em] text-[#C8B273] mb-1">
                          Concierge Email
                        </h3>
                        <p className="text-white text-xl font-medium group-hover:text-[#C8B273] transition-colors underline decoration-[#C8B273]/30 underline-offset-8">
                          concierge@festikogrand.com
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="group flex items-start gap-6">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#C8B273]/10 border border-[#C8B273]/20 group-hover:bg-[#C8B273]/20 transition-all">
                        <IconPhone className="text-[#C8B273]" size={20} />
                      </div>
                      <div>
                        <h3 className="font-label text-xs uppercase tracking-[0.2em] text-[#C8B273] mb-1">
                          Luxury Hotline
                        </h3>
                        <p className="text-white text-xl font-medium group-hover:text-[#C8B273] transition-colors">
                          +44 (0) 20 7946 0123
                        </p>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="group flex items-start gap-6">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#C8B273]/10 border border-[#C8B273]/20 group-hover:bg-[#C8B273]/20 transition-all">
                        <IconMapPin className="text-[#C8B273]" size={20} />
                      </div>
                      <div>
                        <h3 className="font-label text-xs uppercase tracking-[0.2em] text-[#C8B273] mb-1">
                          London Office
                        </h3>
                        <p className="text-white text-xl font-medium group-hover:text-[#C8B273] transition-colors">
                          Mayfair, W1K 7BD
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-7">
                  <div className="glass-panel p-10 lg:p-14 border border-white/10 rounded-lg relative overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#C8B273]/10 blur-[100px] rounded-full"></div>

                    <form
                      ref={formRef}
                      onSubmit={handleSubmit}
                      className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                      <div className="space-y-2">
                        <label className="font-label text-xs uppercase tracking-widest text-[#C8B273]">
                          First Name
                        </label>
                        <input
                          className="w-full bg-white/5 border-none text-white p-4 rounded-md placeholder-white/20 focus:ring-1 focus:ring-[#C8B273]/30 focus:bg-white/10 transition-all"
                          placeholder="Julian"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="font-label text-xs uppercase tracking-widest text-[#C8B273]">
                          Last Name
                        </label>
                        <input
                          className="w-full bg-white/5 border-none text-white p-4 rounded-md placeholder-white/20 focus:ring-1 focus:ring-[#C8B273]/30 focus:bg-white/10 transition-all"
                          placeholder="Cassel"
                        />
                      </div>

                      <div className="md:col-span-2 space-y-2">
                        <label className="font-label text-xs uppercase tracking-widest text-[#C8B273]">
                          Email Address
                        </label>
                        <input
                          className="w-full bg-white/5 border-none text-white p-4 rounded-md placeholder-white/20 focus:ring-1 focus:ring-[#C8B273]/30 focus:bg-white/10 transition-all"
                          placeholder="julian@example.com"
                        />
                      </div>

                      <div className="md:col-span-2 space-y-2">
                        <label className="font-label text-xs uppercase tracking-widest text-[#C8B273]">
                          Message
                        </label>
                        <textarea
                          className="w-full bg-white/5 border-none text-white p-4 rounded-md placeholder-white/20"
                          rows={4}
                          placeholder="Describe your vision..."
                        />
                      </div>

                      <div className="md:col-span-2 pt-4">
                        <button className="w-full py-5 rounded-md font-bold tracking-widest uppercase bg-[#c8b273] text-[#353029] hover:shadow-2xl hover:shadow-[#C8B273]/20 transition-all duration-300 cursor-pointer">
                          Send Inquiry
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Location Spotlight */}
          <section className="py-24 bg-[#2F2A24] px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="w-full lg:w-1/2 rounded-lg overflow-hidden h-125 shadow-2xl relative">
                  <Image
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRe9kmR-XpGY63JUMLKYPD3SccdIVXCFveEsyzd9zSyVUcChGjhji8ZLVi7IUPBLdIXPYYIVkIEUDjwrxjaj3qNpb8oNHe09rYzmTc6gxW4iqJ2Bpt7KTSW3N8zlgCtRI-itx30471x-JWdW-7tBiOhv8lK-5Q2g3Nvo-3C9_rfUXkkb6mDjKkchdskvLlIfm0BFnVwp6uyC9bB9l5T5lsLN9W_rFxjXmkA9SWmijf6DNj7gq11XjHdUKX6_4Hp3vX0VtFzYeetgK1"
                    width={100}
                    height={100}
                    alt=""
                  />
                </div>

                <div className="w-full lg:w-1/2 space-y-8">
                  <h2 className="font-display text-4xl text-[#C8B273] leading-snug">
                    Visit our <br />
                    Headquarters
                  </h2>

                  <p className="text-[#efe1c4] text-lg leading-relaxed font-light">
                    Experience the Festiko Grand hospitality in person. Our
                    Mayfair suite is designed as an immersive gallery where we
                    host private consultations.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-[#C8B273]">
                      <IconClock size={20} />
                      <span>Monday — Friday: 9:00 AM - 6:00 PM</span>
                    </div>

                    <div className="flex items-center gap-4 text-[#efe1c4]">
                      <IconMapPin size={20} className="text-[#C8B273]" />
                      <span>12 Berkeley Square, London, UK</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default ContactUs;
