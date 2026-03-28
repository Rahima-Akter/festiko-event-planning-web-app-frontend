import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main className="grow flex flex-col items-center justify-center bg-[#2f2a24] relative overflow-hidden px-8 min-h-screen">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] rounded-full bg-linear-to-br from-[#c8b273] to-transparent blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-linear-to-tl from-[#6e5d27] to-transparent blur-[100px]"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* 404 */}
        <h1 className="text-[140px] md:text-[200px] leading-none text-[#c8b273] font-bold tracking-tighter select-none mb-4 opacity-90 animate-bounce">
          404
        </h1>

        {/* Text */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl text-[#ac8347] font-medium tracking-tight">
            Page Not Found
          </h2>

          <p className="text-lg md:text-xl text-[#9c8a6f] leading-relaxed italic">
            The masterpiece you&apos;re looking for seems to have moved to a
            different route or doese not exists.
          </p>

          {/* Button */}
          <div className="pt-">
            <Link
              href="/"
              className="inline-flex items-center px-10 py-4 bg-linear-to-r from-[#6e5d27] to-[#c8b273] text-white font-bold uppercase tracking-widest text-sm rounded-lg shadow-xl hover:brightness-110 transition-all duration-300 group"
            >
              Return to Home
              <span className="ml-3 text-lg group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-4 opacity-30">
        <div className="h-px w-12 bg-[#c8b273]"></div>
        <span className="text-[#c8b273]">★</span>
        <div className="h-px w-12 bg-[#c8b273]"></div>
      </div>
    </main>
  );
};

export default NotFoundPage;
