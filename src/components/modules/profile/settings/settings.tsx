/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { getProfile, updateProfile } from "@/services/auth/auth.service";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";
import { UpdateProfileInput, updateProfileSchema } from "@/zod/auth.schema";

const Settings = () => {
  const [profileImagePreview, setProfileImagePreview] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<UpdateProfileInput>({
    resolver: zodResolver(updateProfileSchema),
  });

  const watchedImage = watch("profile_image");

  // Fetch profile and populate form
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getProfile();
        const user = res?.data;

        reset({
          name: user?.name || "",
          bio: user?.bio || "",
          profile_image: user?.profile_image || "",
        });

        setProfileImagePreview(user?.profile_image || "");
      } catch (err: any) {
        toast.error("Failed to load profile");
        console.error(err);
      }
    };

    fetchProfile();
  }, [reset]);

  // Live profile image preview
  useEffect(() => {
    if (watchedImage) setProfileImagePreview(watchedImage);
  }, [watchedImage]);

  // Clean payload before sending
  const cleanPayload = (data: UpdateProfileInput) =>
    Object.fromEntries(
      Object.entries(data).filter(
        ([_, value]) => value !== "" && value !== undefined,
      ),
    );

  // Form submission
  const onSubmit = async (data: UpdateProfileInput) => {
    try {
      const cleanedData = cleanPayload(data);
      const response = await updateProfile(cleanedData);

      if (response?.success) toast.success("Profile updated successfully!");
      else toast.error("Failed to update profile");
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Update failed");
      console.error(err);
    }
  };

  return (
    <main className="flex-1 lg:ml-72 min-h-screen p-10 bg-[#2F2A24]">
      <div className="max-w-3xl mx-auto">
        <header className="mb-2">
          <h2 className="text-xl font-bold uppercase tracking-[0.2em] text-[#C8B273] ml-1 mb-2 block">
            Settings
          </h2>
        </header>

        <section className="bg-[#3D372F] p-10 rounded-xl border border-[#4b463a]/20">
          <h2 className="font-headline text-2xl font-bold mb-8 text-[#c8b273] italic">
            Profile Information
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Name */}
            <div className="space-y-2">
              <label className="font-label text-[10px] uppercase tracking-[0.2em] font-bold text-[#CEC6B5]">
                Full Name
              </label>
              <input
                className="w-full bg-[#433d34] border-none rounded-lg p-4 font-body text-[#fcf2e8] focus:ring-1 focus:ring-[#c8b273]/50 transition-all placeholder-[#CEC6B5]/40"
                placeholder="Your full name"
                type="text"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name.message}</p>
              )}
            </div>

            {/* Bio */}
            <div className="space-y-2">
              <label className="font-label text-[10px] uppercase tracking-[0.2em] font-bold text-[#CEC6B5]">
                Bio
              </label>
              <textarea
                className="w-full bg-[#433d34] border-none rounded-lg p-4 font-body text-[#fcf2e8] focus:ring-1 focus:ring-[#c8b273]/50 transition-all resize-none placeholder-[#CEC6B5]/40"
                placeholder="Share your event curation philosophy..."
                rows={4}
                {...register("bio")}
              />
              {errors.bio && (
                <p className="text-red-500 text-xs">{errors.bio.message}</p>
              )}
            </div>

            {/* Profile Image */}
            <div className="space-y-2">
              <label className="font-label text-[10px] uppercase tracking-[0.2em] font-bold text-[#CEC6B5]">
                Profile Image
              </label>
              <div className="flex items-center gap-6 mt-2">
                <div className="h-24 w-24 rounded-full relative overflow-hidden bg-[#4b463a] ring-2 ring-[#c8b273]/20 p-1">
                  {profileImagePreview && (
                    <Image
                      alt="Profile Avatar"
                      height={96}
                      width={96}
                      unoptimized
                      className="h-full w-full object-cover rounded-full"
                      src={profileImagePreview}
                    />
                  )}
                </div>
                <div className="flex-1">
                  <input
                    className="block w-full text-xs text-[#CEC6B5] p-3 border border-[#c8b273]/30 rounded-md placeholder-[#CEC6B5]/40 transition-all"
                    placeholder="https://example.com/avatar.jpg"
                    type="url"
                    {...register("profile_image")}
                  />
                  {errors.profile_image && (
                    <p className="text-red-500 text-xs">
                      {errors.profile_image.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Password Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2 relative">
                <label className="font-label text-[10px] uppercase tracking-[0.2em] font-bold text-[#CEC6B5]">
                  Current Password
                </label>
                <input
                  className="w-full bg-[#433d34] border-none rounded-lg p-4 font-body text-[#fcf2e8] focus:ring-1 focus:ring-[#c8b273]/50 transition-all"
                  type={isOpen ? "password" : "text"}
                  {...register("currentPassword")}
                  placeholder="Type your current password"
                />
                <span
                  className="absolute top-10 right-4 cursor-pointer text-amber-200"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? <IconEyeClosed /> : <IconEye />}
                </span>
                {errors.currentPassword && (
                  <p className="text-red-500 text-xs">
                    {errors.currentPassword.message}
                  </p>
                )}
              </div>

              <div className="space-y-2 relative">
                <label className="font-label text-[10px] uppercase tracking-[0.2em] font-bold text-[#CEC6B5]">
                  New Password
                </label>
                <input
                  className="w-full bg-[#433d34] border-none rounded-lg p-4 font-body text-[#fcf2e8] focus:ring-1 focus:ring-[#c8b273]/50 transition-all"
                  type={isOpen ? "password" : "text"}
                  {...register("newPassword")}
                  placeholder="Type your new password"
                />
                <span
                  className="absolute top-10 right-4 cursor-pointer text-amber-200"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? <IconEyeClosed /> : <IconEye />}
                </span>
                {errors.newPassword && (
                  <p className="text-red-500 text-xs">
                    {errors.newPassword.message}
                  </p>
                )}
              </div>
            </div>

            {/* Save Actions */}
            <div className="flex justify-end items-center gap-10">
              <button className="text-[#CEC6B5]/60 font-label text-[10px] uppercase tracking-[0.2em] font-bold hover:text-[#fcf2e8] transition-colors cursor-pointer">
                Discard Changes
              </button>
              <button
                type="submit"
                className="bg-[#c8b273] text-[#2F2A24] px-12 py-4 rounded-lg font-label text-[10px] uppercase tracking-[0.2em] font-bold shadow-xl shadow-[#c8b273]/20 hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Saving..." : "Save Profile"}
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Settings;
