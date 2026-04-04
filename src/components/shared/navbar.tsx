"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  IconHome,
  IconCalendarEvent,
  IconUser,
  IconDashboard,
  IconLogout,
} from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/assets//festiko-logo-dark.png";
import { getProfile, logoutUser } from "@/services/auth/auth.service";
import { User } from "@/types/auth/auth.types";
import { UserRoles } from "@/roles/roles";
import default_user from "@/assets/default_user.jpg";

const Navbar = () => {
  const [user, setUser] = useState<User | null>();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await getProfile();
        if (res?.success) {
          setUser(res?.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    logoutUser();
    setUser(null);
    setDropdownOpen(false);
  };

  const pathName = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 bg-[#fff8f4]/80 dark:bg-[#353029]/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(31,27,21,0.04)]">
      <nav className="flex justify-between items-center px-3 md:px-12 h-20 max-w-360 mx-auto">
        {/* Logo */}
        {/* <div className="text-2xl font-bold font-headline text-[#6e5d27] dark:text-[#c8b273] italic">
          Festiko
        </div> */}
        <Image
          src={logo}
          alt="Festiko Logo"
          width={150}
          height={150}
          className="wauto h-full"
        />
        {/* Links */}
        <div className="flex items-center justify-center gap-6">
          <Link
            href="/"
            className={`flex items-center justify-center ${pathName === "/" ? "bg-[#6e5d27]/20 px-3 pt-1.5 rounded-md" : "pt-2"} gap-1 font-headline font-semibold text-[#6e5d27] dark:text-[#c8b273] pb-1 hover:opacity-80 transition-all duration-300`}
          >
            <IconHome size={18} /> Home
          </Link>
          <Link
            href="/events"
            className={`flex items-center gap-1 font-headline font-semibold text-[#353029]/70 dark:text-[#fcf2e8]/70 hover:text-[#6e5d27] hover:opacity-80 transition-all duration-300 ${pathName === "/events" ? "bg-[#6e5d27]/20 px-3 py-1.5 rounded-md" : ""}`}
          >
            <IconCalendarEvent size={18} /> Events
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Show login/register if not logged in */}
          {!user && (
            <div className="hidden md:flex gap-4">
              <Link
                href="/login"
                className="px-4 py-2 border border-[#6e5d27] dark:border-[#c8b273] rounded-md text-[#6e5d27] dark:text-[#c8b273] hover:bg-[#6e5d27]/10 dark:hover:bg-[#c8b273]/20 transition-all"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 bg-[#6e5d27] dark:bg-[#c8b273] rounded-md text-white dark:text-[#353029] hover:opacity-90 transition-all"
              >
                Register
              </Link>
            </div>
          )}

          {/* User Avatar */}
          {user && (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#6e5d27] dark:border-[#c8b273]"
              >
                <Image
                  src={user?.profile_image || default_user}
                  alt="User Avatar"
                  width={100}
                  height={100}
                  unoptimized
                  className="w-full h-full object-cover"
                />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-[#fff8f4] dark:bg-[#353029] rounded-md shadow-lg py-2 z-50">
                  <p className="text-center border-b border-gray-200 pb-1">
                    {user?.name}
                  </p>
                  {user.role === UserRoles.ADMIN ? (
                    <Link
                      href="/dashboard"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-[#1f1b15] dark:text-[#fcf2e8] hover:bg-[#ecdec1] dark:hover:bg-[#4b463a]/70 transition-colors"
                    >
                      <IconDashboard size={16} /> Dashboard
                    </Link>
                  ) : (
                    <Link
                      href="/profile"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-[#1f1b15] dark:text-[#fcf2e8] hover:bg-[#ecdec1] dark:hover:bg-[#4b463a]/70 transition-colors"
                    >
                      <IconUser size={16} /> Profile
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-[#1f1b15] dark:text-[#fcf2e8] hover:bg-[#ecdec1] dark:hover:bg-[#4b463a]/70 transition-colors"
                  >
                    <IconLogout size={16} /> Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
