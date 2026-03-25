import ProfileSidebar from "@/components/modules/profile/shared/sidebar";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex border-r border-gray-200 h-screen">
      <ProfileSidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
}