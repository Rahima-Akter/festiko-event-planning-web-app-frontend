import Link from "next/link";
import {
  IconChevronRight,
  IconShare,
  IconCamera,
  IconWorld,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#353029] w-full pt-16 pb-8 px-12 mt-auto">
        <div className="max-w-360 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start justify-items-start text-left w-full">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-0">
              {/* <Image
                src={logo}
                alt="Festiko Logo"
                width={100}
                height={100}
                className="w-auto h-auto"
                loading="eager"
              /> */}
              <span className="text-[#c8b273] font-headline text-3xl font-bold italic mt-4">
                Festiko
              </span>
            </div>
            <p className="font-body text-[#fcf2e8]/60 text-sm max-w-xs leading-relaxed -mt-3">
              The premium digital infrastructure for elite event management and
              curated experiences.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-label text-[10px] uppercase tracking-[0.2em] text-[#c8b273] font-bold mb-2">
              Concierge
            </h4>
            <Link
              href="/about"
              className="font-body text-sm text-[#fcf2e8]/60 hover:text-white transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="font-body text-sm text-[#fcf2e8]/60 hover:text-white transition-colors duration-300"
            >
              Contact
            </Link>
            <Link
              href="/partnership"
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
              href="/privacy"
              className="font-body text-sm text-[#fcf2e8]/60 hover:text-white transition-colors duration-300"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="font-body text-sm text-[#fcf2e8]/60 hover:text-white transition-colors duration-300"
            >
              Terms
            </Link>
            <Link
              href="/coockie-policy"
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
        <div className="max-w-360 mx-auto mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-body text-xs text-[#fcf2e8]/40 tracking-wide">
            © {new Date().getFullYear()} Festiko. The Digital Concierge.
          </p>
          <div className="flex gap-8">
            <Link
              href="https://github.com/Rahima-Akter"
              className="text-[#fcf2e8]/40 hover:text-[#c8b273] transition-colors"
            >
              <IconBrandGithub className="text-xl" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/rahima-akter99"
              className="text-[#fcf2e8]/40 hover:text-[#c8b273] transition-colors"
            >
              <IconBrandLinkedin className="text-xl" />
            </Link>
            <Link
              href="https://rahima-akter-portfolio.netlify.app/"
              className="text-[#fcf2e8]/40 hover:text-[#c8b273] transition-colors cursor-pointer"
            >
              <IconWorld className="text-xl" />
            </Link>
          </div>
        </div>
        <p className="text-center text-xs text-amber-200/30 pt-6">
          Made by Rahima Akter with - ❤️
        </p>
      </footer>
    </>
  );
};

export default Footer;
