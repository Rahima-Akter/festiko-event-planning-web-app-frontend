"use client";
import Image from "next/image";
import logo from "@/assets/festiko-logo.png";
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
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { User } from "@/types/auth/auth.types";
import { getProfile, logoutUser } from "@/services/auth/auth.service";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const ProfileSidebar = ({ isOpen, setIsOpen }: Props) => {
  const pathName = usePathname();
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getProfile();
        if (res?.success) {
          setUser(res?.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, [setUser]);

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
          className="lg:hidden text-white px-4 self-end"
        >
          ✕
        </button>

        {/* logo */}
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
            className={`flex items-center gap-4 ${pathName === "/" ? "bg-[#644d31] text-[#d0b260] font-semibold rounded-l-full ml-4 pl-6 py-3 shadow-sm active:translate-x-1 duration-200" : "text-[#fcf2e8]/60 pl-10 py-3 hover:bg-white/10 hover:rounded-l-full hover:ml-4 hover:pl-6 hover:py-3 transition-colors"}`}
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
            className={`flex items-center gap-4 ${pathName === "/profile/my-events" ? "bg-[#644d31] text-[#d0b260] font-semibold rounded-l-full ml-4 pl-6 py-3 shadow-sm active:translate-x-1 duration-200" : "text-[#fcf2e8]/60 pl-10 py-3 hover:bg-white/10 hover:rounded-l-full hover:ml-4 hover:pl-6 hover:py-3 transition-colors"}`}
            href="/profile/my-events"
          >
            <span className="material-symbols-outlined">
              <IconCalendarEvent />
            </span>
            <span className="font-['Manrope'] font-medium uppercase tracking-[0.05em] text-xs">
              My Events
            </span>
          </Link>

          <Link
            className={`flex items-center gap-4 ${pathName === "/profile/invitations" ? "bg-[#644d31] text-[#d0b260] font-semibold rounded-l-full ml-4 pl-6 py-3 shadow-sm active:translate-x-1 duration-200" : "text-[#fcf2e8]/60 pl-10 py-3 hover:bg-white/10 hover:rounded-l-full hover:ml-4 hover:pl-6 hover:py-3 transition-colors"}`}
            href="/profile/invitations"
          >
            <span className="material-symbols-outlined">
              <IconMail />
            </span>
            <span className="font-['Manrope'] font-medium uppercase tracking-[0.05em] text-xs">
              Invitations
            </span>
          </Link>

          {/* <Link
            className={`flex items-center gap-4 ${pathName === "/profile/incoming-join-requests" ? "bg-[#644d31] text-[#d0b260] font-semibold rounded-l-full ml-4 pl-6 py-3 shadow-sm active:translate-x-1 duration-200" : "text-[#fcf2e8]/60 pl-10 py-3 hover:bg-white/10 hover:rounded-l-full hover:ml-4 hover:pl-6 hover:py-3 transition-colors"}`}
            href="/profile/incoming-join-requests"
          >
            <span className="material-symbols-outlined">
              <IconPointerQuestion />
            </span>
            <span className="font-['Manrope'] font-medium uppercase tracking-[0.05em] text-xs">
              Incoming Join Requests
            </span>
          </Link> */}

          <Link
            className={`flex items-center gap-4 ${pathName === "/profile/my-participations" ? "bg-[#644d31] text-[#d0b260] font-semibold rounded-l-full ml-4 pl-6 py-3 shadow-sm active:translate-x-1 duration-200" : "text-[#fcf2e8]/60 pl-10 py-3 hover:bg-white/10 hover:rounded-l-full hover:ml-4 hover:pl-6 hover:py-3 transition-colors"}`}
            href="/profile/my-participations"
          >
            <span className="material-symbols-outlined">
              <IconConfetti />
            </span>
            <span className="font-['Manrope'] font-medium uppercase tracking-[0.05em] text-xs">
              My Participations
            </span>
          </Link>

          <Link
            className={`flex items-center gap-4 ${pathName === "/profile/my-reviews" ? "bg-[#644d31] text-[#d0b260] font-semibold rounded-l-full ml-4 pl-6 py-3 shadow-sm active:translate-x-1 duration-200" : "text-[#fcf2e8]/60 pl-10 py-3 hover:bg-white/10 hover:rounded-l-full hover:ml-4 hover:pl-6 hover:py-3 transition-colors"}`}
            href="/profile/my-reviews"
          >
            <span className="material-symbols-outlined">
              <IconCashEdit />
            </span>
            <span className="font-['Manrope'] font-medium uppercase tracking-[0.05em] text-xs">
              My Reviews
            </span>
          </Link>

          <Link
            className={`flex items-center gap-4 ${pathName === "/profile" ? "bg-[#644d31] text-[#d0b260] font-semibold rounded-l-full ml-4 pl-6 py-3 shadow-sm active:translate-x-1 duration-200" : "text-[#fcf2e8]/60 pl-10 py-3  hover:bg-white/10 hover:rounded-l-full hover:ml-4 hover:pl-6 hover:py-3 transition-colors"}`}
            href="/profile"
          >
            <span className="material-symbols-outlined">
              <IconSettings />
            </span>
            <span className="font-['Manrope'] font-medium uppercase tracking-[0.05em] text-xs">
              Settings
            </span>
          </Link>

          <button
            onClick={() => logoutUser()}
            className="flex items-center gap-4 text-red-500/80 pl-10 py-3 hover:text-error transition-colors px-4 cursor-pointer hover:bg-white/10 hover:py-3"
          >
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
              <>
                {user?.profile_image ? (
                  <Image
                    src={user.profile_image}
                    alt="Profile Image"
                    width={40}
                    height={40}
                    unoptimized
                    className="w-10 h-10 rounded-full bg-[#c8b273] flex items-center justify-center text-[#2F2A24] font-bold overflow-hidden border-2 border-[#c8b273]/30"
                  />
                ) : (
                  <>
                    <div className="w-10 h-10 rounded-full bg-[#c8b273] flex items-center justify-center text-[#2F2A24] font-bold overflow-hidden border-2 border-[#c8b273]/30">
                      <span className="material-symbols-outlined">
                        <IconUser />
                      </span>
                    </div>
                  </>
                )}
                <div>
                  <p className="text-xs font-bold text-white leading-tight">
                    {user?.name || "User Name"}
                  </p>
                  <p className="text-[10px] text-[#c8b273]/70 uppercase tracking-tighter">
                    {user?.role || "User Role"}
                  </p>
                </div>
              </>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default ProfileSidebar;
