const HeroSection = () => {
  return (
    <>
      <section className="relative lg:h-160 h-210 w-full overflow-hidden bg-[#2F2A24] flex items-center">
        <div className="absolute inset-0 opacity-60">
          <img
            alt="Luxury Gala Ballroom"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUhd3vWROBwenmXNHXM_gz2ox58xN5toTDT2GDlCUUXDLohFqq8kynFolUsUX5b22U2y2osXLbtpg_lHMa8pZWQQ8bdUa4IKB3Vf64_vIvo67LAHyLaPUC5nQCYVbiQm7AQrok6DFwz0RpNpY31R0-FD82p8jfVQgp4d9pIG0NMp0XYmSaMijf3mE7mY9B1VJ-jPqM75THa3nYmU9ezfo-PIowS1-G8QxzEj5mXMQ43x0-ZPumWtman4NjhKgWU1XG7XMqAeb3pFkP"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-[#2F2A24] via-[#2F2A24]/60 to-transparent"></div>
        <div className="relative z-10 px-10 lg:px-24 max-w-4xl mx-auto md:mx-0">
          <h1 className="font-headline text-[42px] md:text-6xl font-bold text-[#c8b273] leading-tight mb-8 tracking-tighter italic">
            Where Every Occasion <br />
            Becomes A Masterpiece ....
          </h1>
          <p className="font-body text-xl text-[#fcf2e8] max-w-xl mb-12 leading-relaxed opacity-90">
            Experience a curated sensory journey designed for the world&apos;s
            most discerning patrons. From intimate soirées to grand galas, we
            orchestrate elegance.
          </p>
          <div className="flex flex-col md:flex-row gap-3">
            <button className="px-10 py-5 bg-linear-to-br from-[#6e5d27] to-[#c8b273] text-[#ffffff] font-label text-sm uppercase tracking-widest font-bold rounded shadow-xl hover:opacity-90 transition-all active:scale-95">
              Join An Event →
            </button>
            <div className="flex justify-center items-center gap-1 font-semibold text-white">
              <span>-</span>
              <span>OR</span>
              <span>-</span>
            </div>
            <button className="px-10 py-5 bg-white/10 backdrop-blur-md text-[#c8b273] border border-[#c8b273]/30 font-label text-sm uppercase tracking-widest font-bold rounded hover:bg-white/20 transition-all">
              Create An Event ?
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
