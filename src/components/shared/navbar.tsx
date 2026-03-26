/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { useState } from "react";
import {
  IconHome,
  IconCalendarEvent,
  IconUser,
  IconDashboard,
  IconLogout,
} from "@tabler/icons-react";

const Navbar = () => {
  // Simulate logged in user; null = not logged in
  const user: any = { role: "ADMIN", avatarUrl: "/default-avatar.png" };
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    console.log("Logout clicked");
    // Add your logout logic here
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#fff8f4]/80 dark:bg-[#353029]/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(31,27,21,0.04)]">
      <nav className="flex justify-between items-center px-3 md:px-12 h-20 max-w-360 mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold font-headline text-[#6e5d27] dark:text-[#c8b273] italic">
          Festiko
        </div>

        {/* Desktop Links */}
        <div className="flex items-center gap-8">
          <Link
            href="#"
            className="flex items-center gap-1 font-headline font-semibold text-[#6e5d27] dark:text-[#c8b273] border-b-2 border-[#6e5d27] pb-1 hover:opacity-80 transition-all duration-300"
          >
            <IconHome size={18} /> Home
          </Link>
          <Link
            href="#"
            className="flex items-center gap-1 font-headline font-semibold text-[#353029]/70 dark:text-[#fcf2e8]/70 hover:text-[#6e5d27] hover:opacity-80 transition-all duration-300"
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
                <img
                  src={user.avatarUrl}
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-[#fff8f4] dark:bg-[#353029] rounded-md shadow-lg py-2 z-50">
                  {user.role === "ADMIN" ? (
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
