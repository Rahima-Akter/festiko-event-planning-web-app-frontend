"use client";
import { IconCamera, IconEye, IconEyeClosed } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

// RegisterForm Component
const RegisterForm = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <>
      <main className="grow py-10 flex items-center justify-center px-6">
        {/* Main Signup Container */}
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 bg-[#3E3830] rounded-xl overflow-hidden min-h-175 shadow-2xl">
          {/* Left Side: Editorial Image/Branding */}
          <div className="hidden lg:block relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#2F2A24]/10 mix-blend-multiply z-10 transition-opacity duration-500 group-hover:-opacity-100"></div>
            <img
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Elegant dinner party with warm candlelight and crystal glassware"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBasjpytDB45jIJ7GPx0y6SuGf4Cc53XjgB7zz9Ol0AX3zIGFT_Y-RkbcMLFlPq9qKNuN42TuVJBted9c-tP_RH1ND5PM0BiK6oXxlkOO_U8GXOWxD_70-Z6mlOUDiMTfQtVGQlT6IPvWz21gJDUfC11v9ARyfY6gtJFqslFAb9xnjnuiRMYf2LZFC08PYhut5eYtXMLbyC9YCt2pIbT18j0RkjvF9jUlIqi1bMi0dssT_BzbD4P5lAV4EdMM03e3gtbVE7fYWldvSY"
            />
            <div className="absolute bottom-12 left-12 right-12 z-20 text-white">
              <h2 className="text-4xl font-headline italic mb-4">
                Crafting Unforgettable Moments.
              </h2>
              <p className="font-body text-lg opacity-90 max-w-sm tracking-wide">
                Join an exclusive community of curators and hosts. Experience
                event management defined by elegance.
              </p>
            </div>
          </div>

          {/* Right Side: Signup Form */}
          <div className="p-8 md:p-16 lg:p-16 flex flex-col justify-center bg-[#2F2A24]">
            <div className="mb-10">
              <span className="font-label text-xs uppercase tracking-[0.2em] text-[#c8b273] mb-3 block">
                Membership Registration
              </span>
              <h1 className="text-4xl font-headline text-[#fcf2e8] mb-2">
                Create Account
              </h1>
              <p className="text-[#a69e8e] font-body">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-[#c8b273] font-medium hover:underline decoration-[#c8b273]/30 underline-offset-4"
                >
                  Login here
                </Link>
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label
                    className="font-label text-xs uppercase tracking-widest text-[#a69e8e]"
                    htmlFor="full_name"
                  >
                    Full Name
                  </label>
                  <input
                    className="w-full bg-[#3E3830] border-none rounded-lg px-5 py-4 focus:ring-1 focus:ring-[#c8b273]/30 focus:bg-[#4a433a] transition-all text-[#fcf2e8] placeholder:text-[#a69e8e]/50 font-body"
                    id="full_name"
                    placeholder="Evelyn Thorne"
                    type="text"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label
                    className="font-label text-xs uppercase tracking-widest text-[#a69e8e]"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="w-full bg-[#3E3830] border-none rounded-lg px-5 py-4 focus:ring-1 focus:ring-[#c8b273]/30 focus:bg-[#4a433a] transition-all text-[#fcf2e8] placeholder:text-[#a69e8e]/50 font-body"
                    id="email"
                    placeholder="evelyn@festiko.com"
                    type="email"
                  />
                </div>

                {/* Profile Image Upload */}
                {/* <div className="space-y-3 pt-2">
                  <label className="font-label text-xs uppercase tracking-widest text-[#a69e8e]">
                    Profile Portrait
                  </label>
                  <div className="flex items-center gap-6">
                    <div className="relative group">
                      <div className="w-24 h-24 rounded-md bg-[#3E3830] border-2 border-dashed border-[#5d574d] flex flex-col items-center justify-center overflow-hidden transition-all group-hover:border-[#c8b273]/50 group-hover:bg-[#4a433a] cursor-pointer">
                        <span className="material-symbols-outlined text-[#a69e8e] group-hover:text-[#c8b273] transition-colors mb-1">
                          <IconCamera/>
                        </span>
                        <span className="text-[10px] font-label uppercase tracking-tighter text-[#a69e8e]/70 group-hover:text-[#c8b273]/70">
                          Upload
                        </span>
                        <input
                          type="file"
                          accept="image/*"
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-body text-[#a69e8e] italic">
                        &apos;Your portrait adds a personal touch to your exclusive concierge experience.&apos;
                      </p>
                    </div>
                  </div>
                </div> */}
                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-[#a69e8e]">
                    Profile Portrait
                  </label>
                  <input
                    className="w-full bg-[#3E3830] border-none rounded-lg px-5 py-4 focus:ring-1 focus:ring-[#c8b273]/30 focus:bg-[#4a433a] transition-all text-[#fcf2e8] placeholder:text-[#a69e8e]/50 font-body"
                    id="profile_url"
                    placeholder="paste your profile url here"
                    type="url"
                  />
                </div>

                {/* Bio Textarea */}
                <div className="space-y-2">
                  <label
                    className="font-label text-xs uppercase tracking-widest text-[#a69e8e]"
                    htmlFor="bio"
                  >
                    Personal Bio
                  </label>
                  <textarea
                    className="w-full bg-[#3E3830] border-none rounded-lg px-5 py-4 focus:ring-1 focus:ring-[#c8b273]/30 focus:bg-[#4a433a] transition-all text-[#fcf2e8] placeholder:text-[#a69e8e]/50 font-body min-h-30 resize-none"
                    id="bio"
                    placeholder="Share a brief introduction about your passion for hosting or curation..."
                  ></textarea>
                </div>

                {/* Password Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 relative">
                    <label
                      className="font-label text-xs uppercase tracking-widest text-[#a69e8e]"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="w-full bg-[#3E3830] border-none rounded-lg px-5 py-4 focus:ring-1 focus:ring-[#c8b273]/30 focus:bg-[#4a433a] transition-all text-[#fcf2e8] placeholder:text-[#a69e8e]/50 font-body"
                      id="password"
                      placeholder="••••••••"
                      type={isOpen ? "password" : "text"}
                    />
                    <span className="absolute top-10 right-3 cursor-pointer">
                      {isOpen ? (
                        <IconEyeClosed onClick={() => setIsOpen(!isOpen)} />
                      ) : (
                        <IconEye onClick={() => setIsOpen(!isOpen)} />
                      )}
                    </span>
                  </div>
                  <div className="space-y-2 relative">
                    <label
                      className="font-label text-xs uppercase tracking-widest text-[#a69e8e]"
                      htmlFor="confirm_password"
                    >
                      Confirm Password
                    </label>
                    <input
                      className="w-full bg-[#3E3830] border-none rounded-lg px-5 py-4 focus:ring-1 focus:ring-[#c8b273]/30 focus:bg-[#4a433a] transition-all text-[#fcf2e8] placeholder:text-[#a69e8e]/50 font-body"
                      id="confirm_password"
                      placeholder="••••••••"
                      type={isOpen ? "password" : "text"}
                    />
                    <span className="absolute top-10 right-3 cursor-pointer">
                      {isOpen ? (
                        <IconEyeClosed onClick={() => setIsOpen(!isOpen)} />
                      ) : (
                        <IconEye onClick={() => setIsOpen(!isOpen)} />
                      )}
                    </span>
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start gap-3 pt-2">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    className="w-4 h-4 text-[#c8b273] bg-[#3E3830] border-none rounded focus:ring-[#c8b273]/30"
                  />
                </div>
                <label
                  htmlFor="terms"
                  className="font-body text-sm text-[#a69e8e] leading-tight"
                >
                  I agree to the{" "}
                  <Link href="#" className="text-[#c8b273] hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-[#c8b273] hover:underline">
                    Privacy Policy
                  </Link>
                  , and consent to receiving updates from Festiko.
                </label>
              </div>

              {/* Create Account Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-5 bg-[#c8b273] text-[#2F2A24] font-label uppercase tracking-[0.15em] text-sm font-semibold rounded-lg shadow-lg shadow-[#c8b273]/10 hover:opacity-90 active:scale-[0.98] transition-all duration-300 cursor-pointer"
                >
                  Create Account
                </button>
              </div>
            </form>

            {/* Social Proof / Alternative Signup */}
            {/* <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-center font-label text-[10px] uppercase tracking-[0.3em] text-[#a69e8e] mb-6">
                Or join via partner network
              </p>
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-3 py-3 px-6 bg-[#3E3830] hover:bg-[#4a433a] transition-colors rounded-lg border border-white/5">
                  <img
                    className="w-4 h-4"
                    alt="Google G Logo"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7XKGX2-JEHLYA8mCZ9KNpFg-wFXWlzcIRTRjnNXEadmM34xl7JZyCKB1F9KvqPDaciDodenNn7xkgVmFKwvUlpxo07opHG570HQ-g8dBKkHIrmvOhadrrXQW9xfFsjoMYlMjen-zsmXYCu35ZxK3R5Y8Zvtn9d_PwAPrGUBMODrF08PUnc10z0AxcpG0xtIX_BTl5aiNpQSFMbzdCy7My57YulwLGetqYN-s2fIhlLH37Q2vMwpGkUR0DG___-kPmJk-TNbydy_t1"
                  />
                  <span className="font-body text-sm font-medium text-[#fcf2e8]">
                    Google
                  </span>
                </button>
                <button className="flex items-center justify-center gap-3 py-3 px-6 bg-[#3E3830] hover:bg-[#4a433a] transition-colors rounded-lg border border-white/5">
                  <img
                    className="w-4 h-4 brightness-200"
                    alt="Apple Logo"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhQMCSZL7MYPQekqmsoHMxmM6r2UTo_-JVFdS3lfuSPeSb5oj4cH10eC6T5GqL4Ga-QESWx4eoXhsfwC_mQ4TnuseHq2sSgjbKfiDx6c0nTD4xvkbY1ruhSXrAwqA1fKScI-6E9cTo4wiyJ848F9M5Q1ZOfUWnlcKbYBuC0aw324tKkdCJeE4jIOtSo9GQKkqJrqROKN1Y1tBoaPhRD3ME4QXKqen0fF3IFq_OlM6CZPtnplzuyoYkfy-OcdZ5mZa183OCfJLb_HuU"
                  />
                  <span className="font-body text-sm font-medium text-[#fcf2e8]">
                    Apple
                  </span>
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default RegisterForm;
