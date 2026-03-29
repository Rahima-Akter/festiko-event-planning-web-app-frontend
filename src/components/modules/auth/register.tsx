/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { registerUser } from "@/services/auth/auth.service";
import { RegisterFormValues, registerSchema } from "@/zod/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

// RegisterForm Component
const RegisterForm = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      const payload = {
        name: data.name,
        email: data.email,
        password: data.password,
        profile_image: data.profile_image,
        bio: data.bio,
      };

      const res = await registerUser(payload);

      if (res?.success) {
        toast.success("Account created successfully 🎉");
      } else {
        toast.error(`${res?.message}`);
      }
    } catch (err: any) {
      // Axios error handling
      if (err.response?.data?.message) {
        toast.error(`${err.response.data.message}`);
      } else {
        toast.error("Registration failed");
      }
      console.log(err);
    }
  };

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

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-[#a69e8e]">
                    Full Name
                  </label>
                  <input
                    {...register("name")}
                    className="w-full bg-[#3E3830] border-none rounded-lg px-5 py-4 focus:ring-1 focus:ring-[#c8b273]/30 focus:bg-[#4a433a] transition-all text-[#fcf2e8] placeholder:text-[#a69e8e]/50 font-body"
                    placeholder="Evelyn Thorne"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-[#a69e8e]">
                    Email Address
                  </label>
                  <input
                    {...register("email")}
                    className="w-full bg-[#3E3830] border-none rounded-lg px-5 py-4 focus:ring-1 focus:ring-[#c8b273]/30 focus:bg-[#4a433a] transition-all text-[#fcf2e8] placeholder:text-[#a69e8e]/50 font-body"
                    placeholder="evelyn@festiko.com"
                    type="email"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Profile Portrait */}
                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-[#a69e8e]">
                    Profile Portrait
                  </label>
                  <input
                    {...register("profile_image")}
                    className="w-full bg-[#3E3830] border-none rounded-lg px-5 py-4 focus:ring-1 focus:ring-[#c8b273]/30 focus:bg-[#4a433a] transition-all text-[#fcf2e8] placeholder:text-[#a69e8e]/50 font-body"
                    placeholder="Paste your profile URL here"
                    type="url"
                  />
                  {errors.profile_image && (
                    <p className="text-red-400 text-xs">
                      {errors.profile_image.message}
                    </p>
                  )}
                </div>

                {/* Personal Bio */}
                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-[#a69e8e]">
                    Personal Bio
                  </label>
                  <textarea
                    {...register("bio")}
                    className="w-full bg-[#3E3830] border-none rounded-lg px-5 py-4 focus:ring-1 focus:ring-[#c8b273]/30 focus:bg-[#4a433a] transition-all text-[#fcf2e8] placeholder:text-[#a69e8e]/50 font-body min-h-30 resize-none"
                    placeholder="Share a brief introduction about your passion for hosting or curation..."
                  />
                  {errors.bio && (
                    <p className="text-red-400 text-xs">{errors.bio.message}</p>
                  )}
                </div>

                {/* Password Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 relative">
                    <label className="font-label text-xs uppercase tracking-widest text-[#a69e8e]">
                      Password
                    </label>
                    <input
                      {...register("password")}
                      className="w-full bg-[#3E3830] border-none rounded-lg px-5 py-4 focus:ring-1 focus:ring-[#c8b273]/30 focus:bg-[#4a433a] transition-all text-[#fcf2e8] placeholder:text-[#a69e8e]/50 font-body"
                      placeholder="••••••••"
                      type={isOpen ? "password" : "text"}
                    />
                    <span
                      className="absolute top-10 right-3 cursor-pointer"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {isOpen ? <IconEyeClosed /> : <IconEye />}
                    </span>
                    {errors.password && (
                      <p className="text-red-400 text-xs">
                        {errors.password.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2 relative">
                    <label className="font-label text-xs uppercase tracking-widest text-[#a69e8e]">
                      Confirm Password
                    </label>
                    <input
                      {...register("confirmPassword")}
                      className="w-full bg-[#3E3830] border-none rounded-lg px-5 py-4 focus:ring-1 focus:ring-[#c8b273]/30 focus:bg-[#4a433a] transition-all text-[#fcf2e8] placeholder:text-[#a69e8e]/50 font-body"
                      placeholder="••••••••"
                      type={isOpen ? "password" : "text"}
                    />
                    <span
                      className="absolute top-10 right-3 cursor-pointer"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {isOpen ? <IconEyeClosed /> : <IconEye />}
                    </span>
                    {errors.confirmPassword && (
                      <p className="text-red-400 text-xs">
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3 pt-2">
                <div className="flex items-center h-5">
                  <input
                    {...register("terms")}
                    type="checkbox"
                    className="w-4 h-4 text-[#c8b273] bg-[#3E3830] border-none rounded focus:ring-[#c8b273]/30"
                  />
                </div>
                <label className="font-body text-sm text-[#a69e8e] leading-tight">
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
              {errors.terms && (
                <p className="text-red-400 text-xs">{errors.terms.message}</p>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-[#c8b273] text-[#2F2A24] font-label uppercase tracking-[0.15em] text-sm font-semibold rounded-lg shadow-lg shadow-[#c8b273]/10 hover:opacity-90 active:scale-[0.98] transition-all duration-300 cursor-pointer"
                >
                  {isSubmitting ? "Creating..." : "Create Account"}
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
