"use client";

const Loader = () => {
  return (
    <>
      {/* Loading Screen Container */}
      <main className="relative min-h-screen w-full flex flex-col items-center justify-center p-8 bg-[#2F2A24] text-[#fcf2e8] font-body overflow-hidden selection:bg-[#c8b273] selection:text-[#534410]">
        {/* Subtle Ambient Background Detail */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full blur-[120px] bg-[#6e5d27]"></div>
          <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full blur-[120px] bg-[#6a5e38]"></div>
        </div>

        {/* Central Content Cluster */}
        <div className="relative z-10 flex flex-col items-center max-w-md w-full text-center">
          {/* Logo Section */}
          <div className="mb-12 transition-all duration-700 ease-out transform scale-100 hover:scale-[1.02]">
            <img
              alt="Festiko Luxury Event Management Logo"
              className="h-24 md:h-32 w-auto object-contain brightness-110 contrast-125"
              data-alt="high-end minimalist gold metallic logo for a luxury event brand on a dark charcoal background with soft ambient lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdk2r-HZxlc5GvRvubk2o669jrC70pOx8Ny2JsZMM4eiS_XGBvhz1x0CFT_bZE5RDcyO7n8sW42Be4EHrmZuOaUBScU7nja3j4mglsSZ0URUB0ZweI5vnZCGQUOQASHGXhvqrE42GoFDj26ufHhFxGaPg2USzDo-aJv9nZQ9cntl1GBtW0wfOhsrMKd0NDqmrMIzkKPrpav0yK2S-6_eodAus8qsKXfIKbyjsLxvRKLiWDuY32ZWa9al0FMw7aUwVB_RBmvJeDgvXH"
            />
          </div>

          {/* Minimal Loading Indicator */}
          <div className="w-48 h-[1px] bg-white/10 mb-8 relative rounded-full overflow-hidden">
            {/* Gold Tinted Progress Line */}
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-[#c8b273] to-transparent loading-shimmer opacity-80"></div>
          </div>

          {/* Brand Motto */}
          <div className="space-y-4">
            <p className="font-headline italic text-lg md:text-xl tracking-wide text-[#c8b273] opacity-90">
              Where Every Occasion Becomes A Masterpiece
            </p>

            {/* Secondary Tagline / Status */}
            <div className="flex flex-col items-center gap-2">
              <span className="font-label text-[10px] uppercase tracking-[0.3em] text-[#fcf2e8]/40">
                Curating Excellence
              </span>

              {/* Pulsing Dot */}
              <div className="flex items-center gap-1.5 mt-2">
                <span className="w-1 h-1 rounded-full bg-[#c8b273] animate-pulse"></span>
                <span className="w-1 h-1 rounded-full bg-[#c8b273] animate-pulse [animation-delay:200ms]"></span>
                <span className="w-1 h-1 rounded-full bg-[#c8b273] animate-pulse [animation-delay:400ms]"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Corners */}
        <div className="absolute top-12 left-12 w-8 h-8 border-t border-l border-[#6e5d27]/30 hidden md:block"></div>
        <div className="absolute top-12 right-12 w-8 h-8 border-t border-r border-[#6e5d27]/30 hidden md:block"></div>
        <div className="absolute bottom-12 left-12 w-8 h-8 border-b border-l border-[#6e5d27]/30 hidden md:block"></div>
        <div className="absolute bottom-12 right-12 w-8 h-8 border-b border-r border-[#6e5d27]/30 hidden md:block"></div>

        {/* Lower Attribution */}
        <div className="absolute bottom-12 left-0 w-full text-center px-8">
          <p className="font-label text-[9px] uppercase tracking-[0.5em] text-[#fcf2e8]/20">
            Exclusive Experience • Est. 2024
          </p>
        </div>
      </main>

      {/* Glassmorphic Overlay for Depth */}
      <div className="fixed inset-0 pointer-events-none border-[1.5rem] md:border-[3rem] border-[#2F2A24] z-50"></div>

      {/* Shimmer Animation Styles */}
      <style global jsx>{`
        @keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}

.loading-shimmer {
  position: relative;
  overflow: hidden;
}

.loading-shimmer::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,
      transparent,
      rgba(200, 178, 115, 0.4),
      transparent);
  animation: shimmer 2s infinite ease-in-out;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  background: #2f2a24;
}

::-webkit-scrollbar-thumb {
  background: #6e5d27;
}
      `}</style>
    </>
  );
};

export default Loader;