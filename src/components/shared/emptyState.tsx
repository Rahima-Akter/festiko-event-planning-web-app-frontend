"use client";

import { IconStars } from "@tabler/icons-react";

const EmptyState = () => {
  return (
    <>
      {/* Main Canvas Container */}
      <main className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-[#2F2A24] text-[#1f1b15]">
        {/* Ambient Lighting and Background Texture */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-0 w-full h-full opacity-20"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, #C8B273 0%, transparent 100%)",
            }}
          ></div>
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCFKExkJKB_z8E2EYWjTa1wIkK_PD-Qus5r_fZUsApLDriavu7ghabjoAYgBqMeWniD_ued-p9YzvZD85T5mrL6CU7Qd742zvvrHzK2_YP1p0zim1AhG4HbHtrOsdyJ7D4-iuibtfF8uwSwsyJoqxWcMfr83va1NoGCRmL6H5y66uvnhHtZrykIsnf_BcFAv2jkmuW9pRrfztdUHIsa6jIe6wLdTIRTumAWfCHrVuprk-e6BXlSH2hYfTWZ02RJUlAzLXeyK8YkXEE4')",
            }}
          ></div>
        </div>

        {/* Centered Content */}
        <div className="relative z-10 max-w-xl w-full px-12 flex flex-col items-center text-center">
          {/* Minimalist Abstract Icon */}
          <div className="mb-12 animate-[subtle-float_2s_ease-in-out_infinite]">
            <div className="relative w-32 h-32 flex items-center justify-center">
              {/* Circular Border Frame */}
              <div className="absolute inset-0 border-[0.5px] border-[#C8B273]/20 rounded-full scale-125"></div>
              <div className="absolute inset-0 border-[0.5px] border-[#C8B273]/10 rounded-full scale-150 opacity-50"></div>
              {/* Central Icon */}
              <IconStars className="text-[#C8B273]/50 text-7xl font-extralight" />
              {/* Decorative Gold Accents */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-px h-8 bg-linear-to-t from-[#C8B273]/40 to-transparent"></div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-px h-8 bg-linear-to-b from-[#C8B273]/40 to-transparent"></div>
            </div>
          </div>

          {/* Poetic Messaging */}
          <div className="space-y-4">
            <h1 className="font-serif text-5xl md:text-6xl italic font-light tracking-tight text-[#fff8f4] leading-tight">
              This Place is Silent...!
            </h1>
            <div className="w-16 h-px bg-[#C8B273]/30 mx-auto my-6"></div>
            <p className="font-serif italic text-lg md:text-xl text-[#fff8f4]/60 max-w-sm mx-auto leading-relaxed">
              Awaiting the first stroke of your intention. Start Creating To
              Make This Place Vibrant.
            </p>
          </div>
        </div>
      </main>

      {/* Tailwind Arbitrary Keyframes */}
      <style global jsx>{`
        @keyframes subtle-float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </>
  );
};

export default EmptyState;
