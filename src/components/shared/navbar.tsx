import Link from "next/link";
import { IconBell, IconUserCircle } from "@tabler/icons-react";

const Navbar = () => {
  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-[#fff8f4]/80 dark:bg-[#353029]/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(31,27,21,0.04)]">
        <nav className="flex justify-between items-center px-12 h-20 w-full max-w-360 mx-auto">
          <div className="text-2xl font-bold font-headline text-[#6e5d27] dark:text-[#c8b273] italic">
            Festiko
          </div>
          <div className="hidden md:flex items-center gap-12">
            <Link
              href="#"
              className="font-headline font-semibold tracking-tight text-[#6e5d27] dark:text-[#c8b273] border-b-2 border-[#6e5d27] pb-1 hover:opacity-80 transition-all duration-300"
            >
              Home
            </Link>
            <Link
              href="#"
              className="font-headline font-semibold tracking-tight text-[#353029]/70 dark:text-[#fcf2e8]/70 hover:text-[#6e5d27] hover:opacity-80 transition-all duration-300"
            >
              Events
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <IconBell className="text-[#6e5d27] dark:text-[#c8b273] hover:opacity-80 transition-all duration-300" />
            <IconUserCircle className="text-[#6e5d27] dark:text-[#c8b273] hover:opacity-80 transition-all duration-300" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
