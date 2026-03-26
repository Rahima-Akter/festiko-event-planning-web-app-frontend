import Link from "next/link";
import {
  IconChevronRight,
  IconShare,
  IconCamera,
  IconWorld,
} from "@tabler/icons-react";
import Image from "next/image";
import logo from "../../../public/festiko-logo.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#353029] w-full py-16 px-12 mt-auto">
        <div className="max-w-360 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-0 -ml-7">
              <Image
                src={logo}
                alt="Festiko Logo"
                width={100}
                height={100}
              />
              <span className="text-[#c8b273] font-headline text-3xl font-bold italic -ml-6">
                Festiko
              </span>
            </div>
            <p className="font-body text-[#fcf2e8]/60 text-sm max-w-xs leading-relaxed -mt-8">
              The premium digital infrastructure for elite event management and
              curated experiences.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-label text-[10px] uppercase tracking-[0.2em] text-[#c8b273] font-bold mb-2">
              Concierge
            </h4>
            <Link
              href="#"
              className="font-body text-sm text-[#fcf2e8]/60 hover:text-white transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="#"
              className="font-body text-sm text-[#fcf2e8]/60 hover:text-white transition-colors duration-300"
            >
              Contact
            </Link>
            <Link
              href="#"
              className="font-body text-sm text-[#fcf2e8]/60 hover:text-white transition-colors duration-300"
            >
              Partnerships
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-label text-[10px] uppercase tracking-[0.2em] text-[#c8b273] font-bold mb-2">
              Legal
            </h4>
            <Link
              href="#"
              className="font-body text-sm text-[#fcf2e8]/60 hover:text-white transition-colors duration-300"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="font-body text-sm text-[#fcf2e8]/60 hover:text-white transition-colors duration-300"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="font-body text-sm text-[#fcf2e8]/60 hover:text-white transition-colors duration-300"
            >
              Cookie Policy
            </Link>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="font-label text-[10px] uppercase tracking-[0.2em] text-[#c8b273] font-bold mb-2">
              Newsletter
            </h4>
            <div className="relative">
              <input
                className="w-full bg-white/5 border-none text-[#fcf2e8] px-4 py-3 text-sm focus:ring-1 focus:ring-[#c8b273] outline-none transition-all"
                placeholder="Email Address"
                type="email"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-[#c8b273] hover:text-white transition-colors">
                <IconChevronRight />
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-360 mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-body text-xs text-[#fcf2e8]/40 tracking-wide">
            © 2024 Festiko. The Digital Concierge.
          </p>
          <div className="flex gap-8">
            <Link
              href="#"
              className="text-[#fcf2e8]/40 hover:text-[#c8b273] transition-colors"
            >
              <IconShare className="text-xl" />
            </Link>
            <Link
              href="#"
              className="text-[#fcf2e8]/40 hover:text-[#c8b273] transition-colors"
            >
              <IconCamera className="text-xl" />
            </Link>
            <Link
              href="#"
              className="text-[#fcf2e8]/40 hover:text-[#c8b273] transition-colors"
            >
              <IconWorld className="text-xl" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
