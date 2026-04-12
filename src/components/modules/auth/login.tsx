/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { loginUser } from "@/services/auth/auth.service";
import { LoginFormValues, loginSchema } from "@/zod/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconArrowLeft, IconEye, IconEyeClosed } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const LoginForm = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const res = await loginUser(data);

      if (res?.success) {
        toast.success(res.message || "Logged in successfully 🎉");
        router.push(redirect);
      } else {
        toast.error(res?.message || "Login failed!");
      }
    } catch (err: any) {
      if (err.response?.data?.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Login failed!");
      }
      console.error(err);
    }
  };

  return (
    <main className="grow flex items-center justify-center p-6 md:p-12 lg:p-20 pt-28 bg-festiko-charcoal">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden min-h-150">
        {/* Left Column: Image */}
        <div className="hidden md:block w-1/2 relative">
          <Image
            alt="Luxury Candlelit Gala"
            width={100}
            height={100}
            className="absolute inset-0 w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDpGl1EN3lX06iODSmjeTWQHbn2Tg96VHc9snHW_uwYQHyQ5gmqsLTB7aINtt5boE3MsHTYSZ_d8qx7lZxR9X7yjMSSYoBwgY1Yktt7XkzdGdkr3cp9Zdgphiv29ULuSJzZjllQlf_AphT8lr5IrJfe6UlCgDgrazDpZskLoHoAKIwGtkEZ-K5ttZix4v00-w38l43pOHrZH3lzofkZqBb6GChitrDERl5Py088vBzXes2ForwsxyL8LgliSmOpF6noWuAZD6QICMj"
          />
          <div className="absolute inset-0 bg-festiko-charcoal/30"></div>
          <div className="absolute bottom-8 left-8 right-8">
            <p className="font-headline italic text-festiko-gold text-xl drop-shadow-lg leading-relaxed">
              &apos;Events refined, moments curated.&apos;
            </p>
          </div>
        </div>

        {/* Right Column: Login Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12 lg:p-10">
          <div className="w-full max-w-sm">
            <Link
              href="/"
              className="items-start flex -mt-5 gap-1 text-sm hover:underline"
            >
              <IconArrowLeft className="h-5 w-5" />
              Go Back Home
            </Link>
            {/* Heading */}
            <div className="mb-8 text-center md:text-left mt-5">
              <h1 className="text-3xl font-headline font-bold tracking-tight mb-3">
                Welcome Back
              </h1>
              <p className="text-white/60 font-body text-sm tracking-wide">
                Enter your credentials to access your concierge.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Email Field */}
              <div className="space-y-2">
                <label
                  className="block font-label text-[10px] uppercase tracking-[0.2em] text-[#c8b273]/80"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  {...register("email")}
                  className="w-full bg-white/5 border border-white/10 text-white font-body px-4 py-3 rounded-none focus:ring-0 focus:border-[#c8b273] transition-all placeholder:text-white/20"
                  id="email"
                  placeholder="concierge@festiko.com"
                  type="email"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs">{errors.email.message}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-2 relative">
                <div className="flex justify-between items-end">
                  <label
                    className="block font-label text-[10px] uppercase tracking-[0.2em] text-[#c8b273]/80"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <Link
                    className="text-[9px] uppercase tracking-widest text-[#c8b273] hover:text-white transition-colors font-semibold"
                    href="#"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <input
                  {...register("password")}
                  className="w-full bg-white/5 border border-white/10 text-white font-body px-4 py-3 rounded-none focus:ring-0 focus:border-[#c8b273] transition-all placeholder:text-white/20"
                  id="password"
                  placeholder="••••••••"
                  type={isOpen ? "password" : "text"}
                />
                <span
                  className="absolute top-9 right-5 cursor-pointer"
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

              {/* Sign In Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#c8b273] hover:bg-[#D9C384] text-[#2F2A24] font-label font-bold py-4 rounded-none tracking-widest transition-all duration-300 mt-2 shadow-xl shadow-black/20 cursor-pointer"
              >
                {isSubmitting ? "Signing in..." : "SIGN IN"}
              </button>
            </form>

            {/* Signup Link */}
            <div className="mt-10 text-center md:text-left border-t border-white/5 pt-6">
              <p className="text-white/40 font-body text-xs">
                New to the inner circle?{" "}
                <Link
                  className="text-[#c8b273] hover:text-white transition-colors font-semibold ml-1"
                  href="/register"
                >
                  Create an Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginForm;
