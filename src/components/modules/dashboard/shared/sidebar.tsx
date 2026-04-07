"use client";
import Image from "next/image";
import logo from "@/assets/festiko-logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IconCalendarEvent,
  IconDashboard,
  IconHome,
  IconLogout,
  IconUser,
  IconUsersGroup,
} from "@tabler/icons-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getProfile } from "@/services/auth/auth.service";
import { User } from "@/types/auth/auth.types";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
const DashboardSidebar = ({ isOpen, setIsOpen }: Props) => {
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
        className={`bg-[#25211C] h-screen w-72 fixed left-0 top-0 shadow-[4px_0_24px_rgba(0,0,0,0.5)] flex flex-col py-5 z-50 transform transition-transform duration-300

            ${isOpen ? "translate-x-0" : "-translate-x-full"}

            lg:translate-x-0`}
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
        {/* Navigation Tabs */}6
        <nav className="flex-1 space-y-2 mt-3">
          <Link
            className={`flex items-center gap-4 py-3 px-8 text-[#f9efe5]/60 hover:bg-[#C8B273]/5 hover:text-[#C8B273] transition-all duration-300 ${pathName === "/" ? "text-[#d1b366] border-r-2 border-[#C8B273] bg-[#C8B273]/20 font-semibold" : ""}`}
            href="/"
          >
            <span className="material-symbols-outlined">
              <IconHome />
            </span>
            <span className="text-sm uppercase tracking-widest">Home</span>
          </Link>

          {/* Active */}
          <Link
            className={`flex items-center gap-4 py-3 px-8 text-[#f9efe5]/60 hover:bg-[#C8B273]/5 hover:text-[#C8B273] transition-all duration-300 ${pathName === "/dashboard" ? "text-[#d1b366] border-r-2 border-[#C8B273] bg-[#C8B273]/20 font-semibold" : ""}`}
            href="/dashboard"
          >
            <span className="material-symbols-outlined">
              <IconDashboard />
            </span>
            <span className="text-sm uppercase tracking-widest">Overview</span>
          </Link>

          <Link
            className={`flex items-center gap-4 py-3 px-8 text-[#f9efe5]/60 hover:bg-[#C8B273]/5 hover:text-[#C8B273] transition-all duration-300 ${pathName === "/dashboard/event-management" ? "text-[#d1b366] border-r-2 border-[#C8B273] bg-[#C8B273]/20 font-semibold" : ""}`}
            href="/dashboard/event-management"
          >
            <span className="material-symbols-outlined">
              <IconCalendarEvent />
            </span>
            <span className="text-sm uppercase tracking-widest">
              All Events
            </span>
          </Link>

          <Link
            className={`flex items-center gap-4 py-3 px-8 text-[#f9efe5]/60 hover:bg-[#C8B273]/5 hover:text-[#C8B273] transition-all duration-300 ${pathName === "/dashboard/user-management" ? "text-[#d1b366] border-r-2 border-[#C8B273] bg-[#C8B273]/20 font-semibold" : ""}`}
            href="/dashboard/user-management"
          >
            <span className="material-symbols-outlined">
              <IconUsersGroup />
            </span>
            <span className="text-sm uppercase tracking-widest">All Users</span>
          </Link>
        </nav>
        {/* Footer Section */}
        <div className="mt-auto px-8 border-t border-[#f9efe5]/10 pt-8 space-y-6">
          <Link
            className="pl-2 flex items-center gap-4 py-2 text-[#f9efe5]/60 hover:text-[#ffb4ab] transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">
              <IconLogout />
            </span>
            <span className="text-sm uppercase tracking-widest">Logout</span>
          </Link>
          <div className="flex flex-col gap-4 border-t border-[#c8b273]/10">
            <div className="flex items-center gap-3">
              <>
                {user?.profile_image ? (
                  <Image
                    src={user.profile_image}
                    alt="Profile Image"
                    width={40}
                    height={40}
                    unoptimized
                    className="w-9 h-9 rounded-md bg-[#c8b273] flex items-center justify-center text-[#2F2A24] font-bold overflow-hidden border-2 border-[#c8b273]/30"
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
                  <p className="text-sm font-bold text-white leading-tight">
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

export default DashboardSidebar;
