"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import {
  IconHome,
  IconCalendarEvent,
  IconUser,
  IconDashboard,
  IconLogout,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/festiko-logo-dark.png";
import { getProfile, logoutUser } from "@/services/auth/auth.service";
import { User } from "@/types/auth/auth.types";
import { UserRoles } from "@/roles/roles";
import default_user from "@/assets/default_user.jpg";

const Navbar = () => {
  const [user, setUser] = useState<User | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const pathName = usePathname();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await getProfile();
        if (res?.success) setUser(res?.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);

  // // Close mobile menu when route changes
  // useEffect(() => {
  //   if (mobileOpen) setMobileOpen(false);
  //   if (dropdownOpen) setDropdownOpen(false);
  // }, [pathName]);

  // Close drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    if (mobileOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  const handleLogout = () => {
    logoutUser();
    setUser(null);
    setDropdownOpen(false);
    setMobileOpen(false);
  };

  const isActive = (route: string) =>
    pathName === route || pathName.startsWith(route + "/");

  // Get initials from name for avatar fallback
  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-[#fff8f4]/80 dark:bg-[#353029]/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(31,27,21,0.04)]">
        <nav className="flex justify-between items-center px-3 md:px-12 h-20 max-w-7xl mx-auto">
          {/* Logo */}
          <Image
            src={logo}
            alt="Festiko Logo"
            width={150}
            height={150}
            className="w-auto md:h-full h-[80%] "
            unoptimized
          />

          {/* Desktop Links */}
          <div className="hidden md:flex items-center justify-center gap-6">
            <Link
              href="/"
              className={`flex items-center gap-1 font-headline font-semibold pb-1 transition-all ${
                isActive("/")
                  ? "bg-[#6e5d27]/20 px-3 py-1.5 rounded-md text-[#6e5d27]"
                  : "text-[#6e5d27]"
              }`}
            >
              <IconHome size={18} /> Home
            </Link>

            <Link
              href="/events"
              className={`flex items-center gap-1 font-headline font-semibold transition-all ${
                isActive("/events")
                  ? "bg-[#6e5d27]/20 px-3 py-1.5 rounded-md text-[#6e5d27]"
                  : "text-[#353029]/70 hover:text-[#6e5d27]"
              }`}
            >
              <IconCalendarEvent size={18} /> Events
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Desktop Auth */}
            {!user && (
              <div className="hidden md:flex gap-4">
                <Link
                  href="/login"
                  className="px-4 py-2 border border-[#6e5d27] rounded-md text-[#6e5d27]"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 bg-[#6e5d27] rounded-md text-white"
                >
                  Register
                </Link>
              </div>
            )}

            {/* Desktop User Avatar */}
            {user && (
              <div className="relative hidden md:block">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#6e5d27]"
                >
                  <Image
                    src={user?.profile_image || default_user}
                    alt="User Avatar"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-[#fff8f4] rounded-md shadow-lg py-2 z-50">
                    <p className="text-center border-b pb-1">{user?.name}</p>
                    {user.role === UserRoles.ADMIN ? (
                      <Link
                        href="/dashboard"
                        className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-[#ecdec1]"
                      >
                        <IconDashboard size={16} /> Dashboard
                      </Link>
                    ) : (
                      <Link
                        href="/profile"
                        className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-[#ecdec1]"
                      >
                        <IconUser size={16} /> Profile
                      </Link>
                    )}
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-[#ecdec1]"
                    >
                      <IconLogout size={16} /> Logout
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg bg-[#6e5d27]/10 text-[#6e5d27] transition-colors hover:bg-[#6e5d27]/20"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile Drawer ───────────────────────────────────────────────────── */}

      {/* Backdrop */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`md:hidden fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer Panel — slides up from bottom */}
      <div
        ref={drawerRef}
        className={`md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#fff8f4] dark:bg-[#2a2520] rounded-t-3xl shadow-[0_-8px_40px_rgba(0,0,0,0.15)] transition-transform duration-300 ease-out ${
          mobileOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-[#6e5d27]/20" />
        </div>

        {/* User profile section (shown only when logged in) */}
        {user && (
          <div className="mx-4 mt-3 mb-2 p-4 rounded-2xl bg-[#6e5d27]/8 border border-[#6e5d27]/15 flex items-center gap-3">
            <div className="relative shrink-0">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#c8b273]">
                <Image
                  src={user?.profile_image || default_user}
                  alt="User Avatar"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              {/* Online dot */}
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#fff8f4] rounded-full" />
            </div>

            <div className="flex-1 min-w-0">
              <p className="font-semibold text-[#353029] dark:text-[#f0e8d8] text-sm truncate">
                {user.name}
              </p>
              <p className="text-[#9c8c6a] text-[11px] uppercase tracking-wider mt-0.5">
                {user.role === UserRoles.ADMIN ? "Administrator" : "Member"}
              </p>
            </div>

            {/* Initials badge */}
            <div className="w-9 h-9 rounded-full bg-[#6e5d27] flex items-center justify-center shrink-0">
              <span className="text-[#fff8f4] text-xs font-bold">
                {getInitials(user.name)}
              </span>
            </div>
          </div>
        )}

        {/* Navigation links */}
        <nav className="px-4 mt-2 space-y-1">
          <Link
            href="/"
            className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all ${
              isActive("/")
                ? "bg-[#6e5d27]/15 text-[#6e5d27]"
                : "text-[#353029]/80 dark:text-[#d4c9b8] hover:bg-[#6e5d27]/8"
            }`}
          >
            <IconHome size={19} className="text-[#6e5d27]" />
            <span className="flex-1">Home</span>
            {isActive("/") && (
              <span className="text-[10px] bg-[#6e5d27]/15 text-[#6e5d27] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide">
                Active
              </span>
            )}
          </Link>

          <Link
            href="/events"
            className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all ${
              isActive("/events")
                ? "bg-[#6e5d27]/15 text-[#6e5d27]"
                : "text-[#353029]/80 dark:text-[#d4c9b8] hover:bg-[#6e5d27]/8"
            }`}
          >
            <IconCalendarEvent size={19} className="text-[#6e5d27]" />
            <span className="flex-1">Events</span>
            {isActive("/events") && (
              <span className="text-[10px] bg-[#6e5d27]/15 text-[#6e5d27] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide">
                Active
              </span>
            )}
          </Link>

          {/* Logged-in only links */}
          {user && (
            <>
              {user.role === UserRoles.ADMIN ? (
                <Link
                  href="/dashboard"
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all ${
                    isActive("/dashboard")
                      ? "bg-[#6e5d27]/15 text-[#6e5d27]"
                      : "text-[#353029]/80 dark:text-[#d4c9b8] hover:bg-[#6e5d27]/8"
                  }`}
                >
                  <IconDashboard size={19} className="text-[#6e5d27]" />
                  <span>Dashboard</span>
                </Link>
              ) : (
                <Link
                  href="/profile"
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all ${
                    isActive("/profile")
                      ? "bg-[#6e5d27]/15 text-[#6e5d27]"
                      : "text-[#353029]/80 dark:text-[#d4c9b8] hover:bg-[#6e5d27]/8"
                  }`}
                >
                  <IconUser size={19} className="text-[#6e5d27]" />
                  <span>Profile</span>
                </Link>
              )}
            </>
          )}
        </nav>

        {/* Divider */}
        <div className="mx-4 my-3 h-px bg-[#6e5d27]/10" />

        {/* Auth section */}
        {!user ? (
          <div className="px-4 pb-8 flex flex-col gap-3">
            <Link
              href="/login"
              className="w-full text-center py-3.5 rounded-xl border border-[#6e5d27]/40 text-[#6e5d27] text-sm font-semibold hover:bg-[#6e5d27]/8 transition-all"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="w-full text-center py-3.5 rounded-xl bg-[#6e5d27] text-[#fff8f4] text-sm font-semibold hover:bg-[#5a4c20] transition-all"
            >
              Create Account
            </Link>
          </div>
        ) : (
          <div className="px-4 pb-8">
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-sm font-semibold text-red-600 bg-red-50 dark:bg-red-950/30 hover:bg-red-100 dark:hover:bg-red-950/50 transition-all"
            >
              <IconLogout size={17} />
              Logout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
