"use client";
import Image from "next/image";
import logo from "@/assets/festiko-logo.png";

const Loader = () => {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#2F2A24] text-[#fcf2e8] font-body overflow-hidden z-100">
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] left-[10%] w-[40%] h-[40%] rounded-full blur-[120px] bg-[#927a2e] opacity-25"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full blur-[120px] bg-[#715e21] opacity-25"></div>
        <div className="absolute inset-0 backdrop-blur-[120px]"></div>
      </div>

      {/* Central Logo + Spinner */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="relative w-32 h-32 mb-8">
          {/* Logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              alt="Festiko Logo"
              src={logo}
              width={100}
              height={100}
              className="w-full h-full object-cover animate-pulse"
            />
          </div>
          {/* Spinning Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-t-[#c8b273] border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </main>
  );
};

export default Loader;
