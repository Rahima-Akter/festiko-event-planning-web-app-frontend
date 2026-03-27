import Image from "next/image";
import logo from "../../../../../public/festiko-logo.png";
import Link from "next/link";
import {
  IconCalendarEvent,
  IconCashEdit,
  IconConfetti,
  IconGitPullRequest,
  IconHome,
  IconLogout,
  IconMail,
  IconPointerQuestion,
  IconSettings,
  IconUser,
} from "@tabler/icons-react";
import { Dispatch, SetStateAction } from "react";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const ProfileSidebar = ({ isOpen, setIsOpen }: Props) => {
  return (
    <>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 lg:hidden"
        />
      )}
      <aside
        className={`
            fixed top-0 left-0 h-screen w-72 z-50
            bg-[#353029] border-r border-[#c8b273]/10

            transform transition-transform duration-300

            ${isOpen ? "translate-x-0" : "-translate-x-full"}

            lg:translate-x-0
            flex flex-col gap-2
          `}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="lg:hidden text-white p-4 self-start"
        >
          ✕
        </button>
        <div className="px-10 mb-3 text-center flex flex-col justify-center items-center">
          {/* <span className="text-2xl font-bold font-['Noto_Serif'] text-[#c8b273] italic mb-6 block">
          Festiko
        </span> */}
          <Image src={logo} alt="Festiko Logo" width={150} height={150} />
          <p className="font-['Manrope'] font-medium uppercase tracking-[0.05em] text-[#fcf2e8]/60 -mt-5">
            Welcome back
          </p>
        </div>

        <div className="w-[80%] mx-auto bg-gray-600 h-px"></div>

        <nav className="flex flex-col gap-1 overflow-y-auto mb-3">
          {/* Navigation Links */}
          <Link
            className="flex items-center gap-4 text-[#fcf2e8]/60 pl-10 py-3 hover:bg-white/10 transition-colors"
            href="/"
          >
            <span className="material-symbols-outlined">
              <IconHome />
            </span>
            <span className="font-['Manrope'] font-medium uppercase tracking-[0.05em] text-xs">
              Home
            </span>
          </Link>
          <Link
            className="flex items-center gap-4 text-[#fcf2e8]/60 pl-10 py-3 hover:bg-white/10 transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">
              <IconUser />
            </span>
            <span className="font-['Manrope'] font-medium uppercase tracking-[0.05em] text-xs">
              Profile
            </span>
          </Link>
          <Link
            className="flex items-center gap-4 text-[#fcf2e8]/60 pl-10 py-3 hover:bg-white/10 transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">
              <IconCalendarEvent />
            </span>
            <span className="font-['Manrope'] font-medium uppercase tracking-[0.05em] text-xs">
              My Events
            </span>
          </Link>
          <Link
            className="flex items-center gap-4 text-[#fcf2e8]/60 pl-10 py-3 hover:bg-white/10 transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">
              <IconMail />
            </span>
            <span className="font-['Manrope'] font-medium uppercase tracking-[0.05em] text-xs">
              Invitations
            </span>
          </Link>
          <Link
            className="flex items-center gap-4 text-[#fcf2e8]/60 pl-10 py-3 hover:bg-white/10 transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">
              <IconPointerQuestion />
            </span>
            <span className="font-['Manrope'] font-medium uppercase tracking-[0.05em] text-xs">
              Incoming Join Requests
            </span>
          </Link>
          <Link
            className="flex items-center gap-4 text-[#fcf2e8]/60 pl-10 py-3 hover:bg-white/10 transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">
              <IconConfetti />
            </span>
            <span className="font-['Manrope'] font-medium uppercase tracking-[0.05em] text-xs">
              My Participations
            </span>
          </Link>
          <Link
            className="flex items-center gap-4 bg-[#2F2A24] text-[#c8b273] rounded-l-full ml-4 pl-6 py-3 shadow-sm active:translate-x-1 duration-200"
            href="#"
          >
            <span className="material-symbols-outlined">
              <IconCashEdit />
            </span>
            <span className="font-['Manrope'] font-medium uppercase tracking-[0.05em] text-xs">
              My Reviews
            </span>
          </Link>
          <Link
            className="flex items-center gap-4 text-[#fcf2e8]/60 pl-10 py-3 hover:bg-white/10 transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">
              <IconSettings />
            </span>
            <span className="font-['Manrope'] font-medium uppercase tracking-[0.05em] text-xs">
              Settings
            </span>
          </Link>
          <button className="flex items-center gap-4 text-red-500/80 pl-10 py-3 hover:text-error transition-colors px-4 cursor-pointer">
            <span className="symbols-outlined">
              <IconLogout />
            </span>
            <span className="font-['Manrope'] font-medium uppercase tracking-[0.05em] text-xs">
              Logout
            </span>
          </button>
        </nav>

        <div className="mt-auto flex flex-col gap-4">
          <div className="bg-[#2F2A24]/50 p-6 flex flex-col gap-4 border-t border-[#c8b273]/10">
            <div className="flex items-center gap-3 px-4">
              <div className="w-10 h-10 rounded-full bg-[#c8b273] flex items-center justify-center text-[#2F2A24] font-bold overflow-hidden border-2 border-[#c8b273]/30">
                <span className="material-symbols-outlined">
                  <IconUser />
                </span>
              </div>
              <div>
                <p className="text-xs font-bold text-white leading-tight">
                  Julian Vane
                </p>
                <p className="text-[10px] text-[#c8b273]/70 uppercase tracking-tighter">
                  Gold Tier
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default ProfileSidebar;